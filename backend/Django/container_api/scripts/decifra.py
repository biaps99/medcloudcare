#!/usr/bin/python

from cryptography.hazmat.primitives import padding
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.backends import default_backend
import os
import pydicom
import pydicom.data



#master_key=
#master_iv=       
format = "bmp"


def pad(im_bytes):
    padder = padding.PKCS7(128).padder()
    padded_pt = padder.update(im_bytes) + padder.finalize()
    return padded_pt


def unpad(im_bytes):
    unpadder = padding.PKCS7(128).unpadder()
    unpadded_pt = unpadder.update(im_bytes) + unpadder.finalize()
    return unpadded_pt


def AES(key, iv, padded_pt,modo):
    if modo=='ECB':
        cipher = Cipher(algorithms.AES(key), modes.ECB(), backend=default_backend())
    elif modo=='CBC':
        cipher = Cipher(algorithms.AES(key), modes.CBC(iv), backend=default_backend())
    else:
        return -1
    encryptor = cipher.encryptor()
    ct = encryptor.update(padded_pt) + encryptor.finalize()
    return ct 


def AES_decifra(key, iv, ct, modo):
    if modo=='ECB':
        cipher = Cipher(algorithms.AES(key), modes.ECB(), backend=default_backend())
    elif modo=='CBC':
        cipher = Cipher(algorithms.AES(key), modes.CBC(iv), backend=default_backend())
    else:
        return -1
    decryptor = cipher.decryptor()
    decryp = decryptor.update(ct) + decryptor.finalize()
    return decryp 


#------------------------------------------------------------------------------------------------------------------

def main(path, key, iv):
    os.makedirs("/usr/src/decrypt_tags", exist_ok=True)
    
    list_name = ["InstanceCreationDate", "InstanceCreationTime", "StudyDate", "SeriesDate", "AcquisitionDate",
        "ContentDate", "StudyTime", "SeriesTime", "AcquisitionTime", "ContentTime", "Modality", "Manufacturer", "InstitutionName",
        "InstitutionAddress", "ReferringPhysicianName", "StationName", "StudyDescription", "SeriesDescription", "InstitutionalDepartmentName",
        "PerformingPhysicianName", "OperatorsName", "ManufacturerModelName", "PatientName", "PatientID", "PatientBirthDate",
        "PatientSex", "PatientAge", "PatientSize", "PatientWeight", "RequestingPhysician", "StudyComments", "PerformedProcedureStepStartDate", 
        "PerformedProcedureStepStartTime", "PerformedProcedureStepID", "PerformedProcedureStepDescription", "CommentsOnThePerformedProcedureStep"]
        

    key_bytes = bytes.fromhex(key)
    
    key_decrypt = AES_decifra(master_key, master_iv, key_bytes,"CBC")
    
    iv_bytes = bytes.fromhex(iv)
    
    iv_decrypt = AES_decifra(master_key, master_iv, iv_bytes,"CBC")

    file = os.path.basename(path)
    nome = rf'{file}'
    nome=nome.split(".")
    nome = nome[0]
    
    im = pydicom.dcmread(path)

    lista_Patient = im.dir("Patient")
    list_name = list(set(list_name + lista_Patient))
    
    for el in list_name :
        if el in im:
            if type(im[el].value) == str or type(im[el].value) == pydicom.valuerep.PersonName:
                
                value = im[el].value
                value=str(value)
                value_bytes = bytes.fromhex(value) 
                value_decrypt=AES_decifra(key_decrypt, iv_decrypt, value_bytes,"CBC")
                value_decrypt_unpad = unpad(value_decrypt)
                value_decrypt_str = value_decrypt_unpad.decode('UTF-8')
                im[el].value = value_decrypt_str

            
            if type(im[el].value) == pydicom.valuerep.DSfloat or type(im[el].value) == pydicom.valuerep.IS:
                list_char = []
                value = im[el].value
                value = str(value)

                for i in range(0,len(value), 4):
                    val = value[i:i+4]
                    
                    val = int(val) - 1000
                    char = chr(val)
                    list_char.append(char)

                value_str_hex = "".join(list_char)
                value_bytes = bytes.fromhex(value_str_hex)

                value_decrypt=AES_decifra(key_decrypt, iv_decrypt, value_bytes,"CBC")

                value_decrypt_unpad = unpad(value_decrypt)

                im[el].value = value_decrypt_unpad
        
    im.save_as("/usr/src/decrypt_tags/"+ rf'{nome}' + '_decifrado.dcm')
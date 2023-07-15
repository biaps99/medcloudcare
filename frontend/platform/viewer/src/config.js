import OHIF from '@ohif/core';
import cornerstone from 'cornerstone-core';
import cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import dicomParser from 'dicom-parser';
import version from './version.js';

export function setConfiguration(appConfig) {
  let homepage;
  const { process } = window;
  if (process && process.env && process.env.PUBLIC_URL) {
    homepage = process.env.PUBLIC_URL;
  }

  window.info = {
    version,
    homepage,
  };

  window.cornerstone = cornerstone;
  window.cornerstoneWADOImageLoader = cornerstoneWADOImageLoader;

  cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
  cornerstoneWADOImageLoader.external.dicomParser = dicomParser;

  OHIF.user.getAccessToken = () => {
    const state = window.store.getState();
    if (!state.oidc || !state.oidc.user) {
      return;
    }

    return state.oidc.user.access_token;
  };

  OHIF.errorHandler.getHTTPErrorHandler = () => {
    return appConfig.httpErrorHandler;
  };

  cornerstoneWADOImageLoader.configure({
    beforeSend: function(xhr) {
      const headers = OHIF.DICOMWeb.getAuthorizationHeader();

      if (headers.Authorization) {
        xhr.setRequestHeader('Authorization', headers.Authorization);
      }
    },
    errorInterceptor: error => {
      if (typeof appConfig.httpErrorHandler === 'function') {
        appConfig.httpErrorHandler(error);
      }
    },
  });
}

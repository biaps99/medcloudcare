(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1387:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(1),s=n.n(i),o=n(67),u=n(19),c=n(22),l=n(11),d=n(753),m=n(207),p=n(6),f=n.n(p),y=n(752),S=n(114),g=n(9),h=n.n(g);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e,t,n,r,a,i,s){try{var o=e[i](s),u=o.value}catch(e){return void n(e)}o.done?t(u):Promise.resolve(u).then(r,a)}function O(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function s(e){D(i,r,a,s,o,"next",e)}function o(e){D(i,r,a,s,o,"throw",e)}s(void 0)}))}}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function E(e){var t=e.history,n=e.server,i=e.studyListFunctionsEnabled,s=e.user,o=v(Object(r.useState)({fieldName:"PatientName",direction:"desc"}),2),u=o[0],c=o[1],p=v(Object(r.useState)({studyDateTo:null,studyDateFrom:null,PatientName:"",PatientID:"",AccessionNumber:"",StudyDate:"",modalities:"",StudyDescription:"",patientNameOrId:"",accessionOrModalityOrDescription:"",allFields:""}),2),f=p[0],g=p[1],h=v(Object(r.useState)([]),2),D=h[0],E=h[1],P=v(Object(r.useState)({isSearchingForStudies:!1,error:null}),2),j=P[0],w=P[1],F=v(Object(r.useState)(null),2),x=F[0],U=F[1],A=v(Object(r.useState)(25),2),M=A[0],_=A[1],C=v(Object(r.useState)(0),2),Y=C[0],k=C[1],L=Object(r.useContext)(S.c),J=Object(l.H)(["(min-width: 1750px)","(min-width: 1000px) and (max-width: 1749px)","(max-width: 999px)"],["large","medium","small"],"small"),R=Object(l.F)(u,200),T=Object(l.F)(f,250),z=L.appConfig,H=void 0===z?{}:z;if(Object(r.useEffect)((function(){n&&function(){var t=O(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,w({error:null,isSearchingForStudies:!0}),t.next=4,N(s,e.group,n,T,R,M,Y,J);case 4:r=t.sent,E(r),w({error:null,isSearchingForStudies:!1}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),w({error:!0,isFetching:!1});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}()()}),[T,R,M,Y,J,n,s,e.group]),j.error)return a.a.createElement("div",null,"Error: ",JSON.stringify(j.error));if(D===[]&&!x)return a.a.createElement("div",null,"Loading...");return a.a.createElement(a.a.Fragment,null,a.a.createElement(y.a,{isOpen:"DicomFilesUploader"===x,onClose:function(){return U(null)}}),a.a.createElement(d.a,{useLargeLogo:!0}),a.a.createElement("div",{className:"study-list-header"},a.a.createElement("div",{className:"header"},e.group?a.a.createElement("h1",{style:{fontWeight:300,fontSize:"22px"}},a.a.createElement("b",null,e.group),"'s StudyList"):a.a.createElement("h1",{style:{fontWeight:300,fontSize:"22px"}},a.a.createElement("b",null,s.email),"'s StudyList")),a.a.createElement("div",{className:"actions"},!e.group&&i&&a.a.createElement(l.l,{onImport:function(){return U("DicomFilesUploader")}}),a.a.createElement("span",{className:"study-count"},D.length))),a.a.createElement("div",{className:"table-head-background"}),a.a.createElement("div",{className:"study-list-container"},a.a.createElement(l.t,{isLoading:j.isSearchingForStudies,hasError:!0===j.error,studies:D,onSelectItem:function(e){var r=m.b(H,n,{studyInstanceUIDs:e});t.push({pathname:r})},sort:u,onSort:function(e){var t=e,n="asc";e===u.fieldName&&("asc"===u.direction?n="desc":(t=null,n=null)),c({fieldName:t,direction:n})},filterValues:f,onFilterChange:function(e,t){g((function(n){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,I({},e,t))}))},studyListDateFilterNumDays:H.studyListDateFilterNumDays,displaySize:J}),a.a.createElement(l.x,{currentPage:Y,nextPageFunc:function(){return k(Y+1)},prevPageFunc:function(){return k(Y-1)},onRowsPerPageChange:function(e){return _(e)},rowsPerPage:M,recordCount:D.length})))}function N(e,t,n,r,a,i,s,o){return P.apply(this,arguments)}function P(){return(P=O(regeneratorRuntime.mark((function e(t,n,r,a,i,s,o,u){var c,l,d,m,p,f,y,S,g,h,b;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.allFields,l=a.patientNameOrId,d=a.accessionOrModalityOrDescription,m=i.fieldName||"PatientName",p=i.direction||"desc",f={PatientID:a.PatientID,PatientName:a.PatientName,AccessionNumber:a.AccessionNumber,StudyDescription:a.StudyDescription,ModalitiesInStudy:a.modalities,studyDateFrom:a.studyDateFrom,studyDateTo:a.studyDateTo,limit:s,offset:o*s,fuzzymatching:!0===r.supportsFuzzyMatching},e.next=6,w(t,n,r,f,u,{allFields:c,patientNameOrId:l,accessionOrModalityOrDescription:d});case 6:return y=e.sent,S=y.map((function(e){var t="string"==typeof e.PatientName?e.PatientName:void 0;return{AccessionNumber:e.AccessionNumber,modalities:e.modalities,PatientID:e.PatientID,PatientName:t,StudyDate:e.StudyDate,StudyDescription:e.StudyDescription,StudyInstanceUID:e.StudyInstanceUID}})),g=j(S,{allFields:"PatientName",patientNameOrId:"PatientName",accessionOrModalityOrDescription:"modalities"}[m]||m,p),h=g.length<s?g.length:s,b=g.slice(0,h),e.abrupt("return",b);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t,n){var r=e.map((function(e){return f()(e.StudyDate,"MMM DD, YYYY",!0).isValid()||(e.StudyDate=f()(e.StudyDate,"YYYYMMDD").format("MMM DD, YYYY")),e}));return r.sort((function(e,r){var a=e[t],i=r[t];return"StudyDate"===t&&(a=f()(a).toISOString(),i=f()(i).toISOString()),"desc"===n?a<i?-1:a>i?1:0:a>i?-1:a<i?1:0})),r}function w(e,t,n,r,a,i){return F.apply(this,arguments)}function F(){return(F=O(regeneratorRuntime.mark((function e(t,n,r,a,i,s){var o,u,l,d,m,p,f,y,S,g,b,I,D,O,v,E,N,P,j,w,F,U,A,M,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=s.allFields,u=s.patientNameOrId,l=s.accessionOrModalityOrDescription,d=[a],"small"===i?(m=x(a,["PatientID","PatientName","AccessionNumber","StudyDescription","ModalitiesInStudy"],o)).length&&(d=m):"medium"===i&&(p=x(a,["PatientID","PatientName"],u),f=x(a,["AccessionNumber","StudyDescription","ModalitiesInStudy"],l),(p.length||f.length)&&(d=p.concat(f))),y=[],d.forEach((function(e){var t=c.a.studies.searchStudies(r,e);y.push(t)})),e.next=7,Promise.all(y);case 7:if(S=e.sent,g=[],b=[],""===n){e.next=18;break}return I={headers:{Authorization:"JWT ".concat(localStorage.getItem("access")),"Content-Type":"application/json",Accept:"application/json"}},e.next=14,h.a.get("/api/view_studies?groupName=".concat(n,"&user=").concat(t.email),I);case 14:"You don't belong to this group!"===(D=e.sent).data.Studies?alert("You don't belong to this group!"):(O=Object.keys(D.data.Studies),S.forEach((function(e){e&&e.forEach((function(e){!g.some((function(t){return t.StudyInstanceUID===e.StudyInstanceUID}))&&O.includes(e.StudyInstanceUID)&&"SR"!==e.modalities&&(e.user_permissions=D.data.Studies[e.StudyInstanceUID].user_permissions,e.user=D.data.Studies[e.StudyInstanceUID].user,g.push(e),b.push(e.StudyInstanceUID))}))}))),e.next=25;break;case 18:return e.next=20,h.a.get("/api/image/?user=".concat(t.email),{headers:{"Content-Type":"multipart/form-data",Authorization:"JWT ".concat(localStorage.getItem("access"))}}).then((function(e){return e})).catch((function(e){return e.response}));case 20:v=e.sent,E=[],N={},v.data.forEach((function(e){N[e.study_uid]={user:e.user,user_permissions:e.user_permissions},E.push(e.study_uid)})),S.forEach((function(e){e&&e.forEach((function(e){!g.some((function(t){return t.StudyInstanceUID===e.StudyInstanceUID}))&&E.includes(e.StudyInstanceUID)&&"SR"!==e.modalities&&(e.user_permissions=N[e.StudyInstanceUID].user_permissions,e.user=N[e.StudyInstanceUID].user,g.push(e),b.push(e.StudyInstanceUID))}))}));case 25:return P=localStorage.getItem("studyAccessControl"),(j=localStorage.getItem("studyEditControl"))?(F=JSON.parse(j),U=Object.keys(F),g.forEach((function(e){var n=e.StudyInstanceUID;U.includes(n)||(localStorage.getItem("HealthProfessional_Authenticated")&&!e.user_permissions.includes("Edit Studies")&&e.user!==t.email?F[n]=-1:F[n]=0)})),U.forEach((function(e){b.includes(e)||delete F[e]})),localStorage.setItem("studyEditControl",JSON.stringify(F))):(w={},g.forEach((function(e){var n=e.StudyInstanceUID;localStorage.getItem("HealthProfessional_Authenticated")&&!e.user_permissions.includes("Edit Studies")&&e.user!==t.email?w[n]=-1:w[n]=0})),localStorage.setItem("studyEditControl",JSON.stringify(w))),P?(M=JSON.parse(P),_=Object.keys(M),g.forEach((function(e){var n=e.StudyInstanceUID;_.includes(n)||(localStorage.getItem("HealthProfessional_Authenticated")&&!e.user_permissions.includes("View Studies Metadata")&&e.user!==t.email?M[n]=-1:M[n]=0)})),_.forEach((function(e){b.includes(e)||delete M[e]})),localStorage.setItem("studyAccessControl",JSON.stringify(M))):(A={},g.forEach((function(e){var n=e.StudyInstanceUID;localStorage.getItem("HealthProfessional_Authenticated")&&!e.user_permissions.includes("View Studies Metadata")&&e.user!==t.email?A[n]=-1:A[n]=0})),localStorage.setItem("studyAccessControl",JSON.stringify(A))),e.abrupt("return",g);case 30:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t,n){var r=[];return""!==n&&n?(t.forEach((function(t){var a=Object.assign({PatientID:"",PatientName:"",AccessionNumber:"",StudyDescription:"",ModalitiesInStudy:""},e);a[t]=n,r.push(a)})),r):r}E.propTypes={filters:s.a.object,PatientID:s.a.string,server:s.a.object,user:s.a.object,history:s.a.object,studyListFunctionsEnabled:s.a.bool,group:s.a.string},E.defaultProps={studyListFunctionsEnabled:!0,group:""};var U=Object(o.h)(E),A=function(e){return!0===e.active},M=Object(u.b)((function(e){return{server:e.servers.servers.find(A),user:e.auth.user}}),null)(U),_=c.a.utils.urlUtil;function C(e){var t=e.location,n=_.queryString.getQueryFilters(t);return a.a.createElement(M,{filters:n,studyListFunctionsEnabled:!0})}C.propTypes={location:s.a.shape({search:s.a.string}).isRequired};t.default=Object(o.h)(C)}}]);
//# sourceMappingURL=17.bundle.68b1d9b1d8e8a11efe5e.js.map
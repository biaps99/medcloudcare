(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1384:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(1),o=n.n(i),l=n(19),c=n(726),s=n.n(c),u=(n(801),n(802),n(803),n(804),n(133)),p=n(1432),f=r.a.createContext({dispatch:null,state:null,isImparative:null,onNodeClick:function(){}}),d=function(){return r.a.useContext(f)},m=n(63),h=n.n(m),y=function(e){return{CREATE:"".concat(e,"_CREATE"),EDIT:"".concat(e,"_EDIT"),DELETE:"".concat(e,"_DELETE")}},v=y("FILE"),b=y("FOLDER"),g=function(e,t){var n=h()(e),a=null,r=null;if(t.payload&&t.payload.id){var i=function(e){var t=e.data,n=e.cond,a=e.childPathKey,r=void 0===a?"files":a,i=null,o=[],l=null,c=null,s=null;return function e(t){t.forEach((function(a,u){if(n(a,u))return i=a,void(o&&o.forEach((function(e){e&&e[r].includes(a)?(l=e,c=e[r][u+1],s=e[r][u-1]):(l=t,c=t[u+1],s=t[u-1])})));a[r]&&(o.push(a),e(a[r]))}))}(t),{parent:l,item:i,nextSibling:c,previousSibling:s}}({data:n,cond:function(e){return e.id===t.payload.id}});r=(a=i.item).parentNode}switch(t.type){case"SET_DATA":return t.payload;case v.CREATE:return a.files.push({name:{name:t.payload.name}.name,type:"file"}),n;case b.CREATE:return a.files.push({name:{name:t.payload.name}.name,type:"folder",files:[]}),n;case b.EDIT:case v.EDIT:return a.name=t.payload.name,n;case b.DELETE:case v.DELETE:return!r||Array.isArray(r)?n=n.filter((function(e){return e.id!==t.payload.id})):(r.files=r.files.filter((function(e){return e.id!==t.payload.id})),n);default:return e}};function E(){var e=A(["\n  position: relative;\n  :before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: -2px; /* just to hide 1px peek */\n    left: 1px;\n    width: 0;\n    height: 100%;\n    z-index: -1;\n  }\n"]);return E=function(){return e},e}function _(){var e=A(["\n  height: max-content;\n  max-height: ",";\n  overflow: hidden;\n  transition: 0.3s ease-in-out;\n"]);return _=function(){return e},e}function w(){var e=A(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  color: #ff4500;\n"]);return w=function(){return e},e}function x(){var e=A(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n\n  .actions {\n    display: flex;\n    align-items: center;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    opacity: 0;\n    pointer-events: none;\n    transition: 0.2s;\n\n    > svg {\n      cursor: pointer;\n      margin-left: 10px;\n      transform: scale(1);\n      transition: 0.2s;\n\n      :hover {\n        transform: scale(1.1);\n      }\n    }\n  }\n\n  &:hover .actions {\n    opacity: 1;\n    pointer-events: all;\n    transition: 0.2s;\n  }\n"]);return x=function(){return e},e}function k(){var e=A(["\n  line-height: 1.75;\n  z-index: 1;\n  .tree__input {\n    width: 50%;\n    height: 50%;\n  }\n"]);return k=function(){return e},e}function A(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var O=p.b.div(k()),j=p.b.div(x()),S=p.b.div(w()),T=p.b.div(_(),(function(e){return e.isOpen?"800px":"0px"})),C=p.b.section(E()),I=n(1434);function F(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  font-weight: bold;\n  padding-left: ","px;\n  .tree__file {\n    padding-left: ","px;\n  }\n"]);return F=function(){return e},e}var P=p.b.section(F(),(function(e){return e.theme.indent}),(function(e){return e.theme.indent})),D=n(1456),R={js:r.a.createElement(D.c,null),css:r.a.createElement(D.a,null),html:r.a.createElement(D.b,null),jsx:r.a.createElement(D.d,null)};function N(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  flex-wrap: nowrap;\n  display: flex;\n  align-items: center;\n  font-weight: normal;\n  padding-left: ","px;\n"]);return N=function(){return e},e}var L=p.b.div(N(),(function(e){return e.theme.indent}));function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var z=function(e){var t=e.ext,n=e.inputRef,a=e.updateExt,i=e.defaultValue,o=e.style,l=R[t]?R[t]:r.a.createElement(I.b,null);return r.a.createElement(L,{className:"tree__file",style:o},l,"  ",r.a.createElement("input",{ref:n,onChange:a,defaultValue:i,className:"tree__input"}))},V=function(e){var t=e.name,n=e.inputRef,a=e.defaultValue,i=e.style;return r.a.createElement(P,{id:Object(u.v4)(),name:t,style:i},r.a.createElement(J,{isOpen:!0,handleClick:function(){},name:r.a.createElement("input",{ref:n,className:"tree__input",defaultValue:a})}))},q=function(e){var t=e.type,n=e.name,i=e.onSubmit,o=e.onCancel,l=e.defaultValue,c=e.style,s=M(Object(a.useState)(""),2),u=s[0],p=s[1],f=Object(a.useRef)();return Object(a.useEffect)((function(){f.current&&(f.current.focus(),f.current.addEventListener("keyup",(function(e){"Enter"===e.key&&i(e.target.value),"Escape"===e.key&&o&&o()})))}),[f,o,i]),"file"===t?r.a.createElement(z,{ext:u,style:c,updateExt:function(e){var t=e.target.value.split("."),n=t&&t[t.length-1];p(n)},inputRef:f,defaultValue:l}):r.a.createElement(V,{style:c,name:n,inputRef:f,defaultValue:l})};function B(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var J=function(e){var t=e.isOpen,n=e.name,a=e.handleClick;return r.a.createElement(S,{onClick:a},t?r.a.createElement(I.e,null):r.a.createElement(I.d,null),"  ",n)},U=function(e){var t=e.id,n=e.name,i=e.children,o=e.node,l=e.data,c=d(),s=c.dispatch,u=c.isImparative,p=c.onNodeClick,f=c.onAdd,m=H(Object(a.useState)(!1),2),h=m[0],y=m[1],v=H(Object(a.useState)(!0),2),g=v[0],E=v[1],_=H(Object(a.useState)([]),2),w=_[0],x=_[1];Object(a.useEffect)((function(){x([i])}),[i]);var k=function(e){l.push({type:"file",name:e}),f(e)},A=function(){y(!1),x([i])},O=r.a.useCallback((function(e){e.stopPropagation(),p({node:o})}),[o,p]);return r.a.createElement(P,{id:t,onClick:O,className:"tree__folder"},r.a.createElement(C,null,r.a.createElement(j,null,h?r.a.createElement(q,{type:"folder",style:{paddingLeft:0},defaultValue:n,onCancel:A,onSubmit:function(e){s({type:b.EDIT,payload:{id:t,name:e}}),y(!1)}}):r.a.createElement(J,{name:n,isOpen:g,handleClick:function(){return E(!g)}}),u&&r.a.createElement("div",{className:"actions"},r.a.createElement(I.c,{onClick:function(e){e.stopPropagation(),E(!0),x([].concat(B(w),[r.a.createElement(q,{type:"file",onSubmit:k,onCancel:A})]))}}))),r.a.createElement(T,{className:"tree__folder--collapsible",isOpen:g},w)))};function K(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var W=function(e){var t=e.name,n=e.id,i=e.node,o=d(),l=o.dispatch,c=o.isImparative,s=o.onNodeClick,u=o.onDelete,p=K(Object(a.useState)(!1),2),f=p[0],m=p[1],h=Object(a.useRef)(""),y=t.split(".");h.current=y[y.length-1];var b=r.a.useCallback((function(e){e.stopPropagation(),s({node:i})}),[i,s]);return r.a.createElement(L,{onClick:b,className:"tree__file"},f?r.a.createElement(q,{type:"file",style:{padding:"2px 2px"},defaultValue:t,onSubmit:function(e){l({type:v.EDIT,payload:{id:n,name:e}}),m(!1)},onCancel:function(){m(!1)}}):r.a.createElement(j,null,r.a.createElement(S,null,R[h.current]?R[h.current]:r.a.createElement(I.b,null),"  ",t),c&&r.a.createElement("div",{className:"actions"},r.a.createElement(I.a,{onClick:function(){["main.py","__init__.py","requirements.txt","template"].includes(t)||(l({type:v.DELETE,payload:{id:n}}),u(t))}}))))};function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var X=function(e){var t,n,i=e.children,o=e.data,l=e.onNodeClick,c=e.onUpdate,s=e.onDelete,u=e.onAdd,d=G(Object(a.useReducer)(g,o),2),m=d[0],h=d[1];Object(a.useLayoutEffect)((function(){h({type:"SET_DATA",payload:o})}),[o]),t=function(){c&&c(m)},n=Object(a.useRef)(!1),Object(a.useEffect)((function(){n.current?t():n.current=!0}),[t]);var y=o&&!i;return r.a.createElement(p.a,{theme:{indent:20}},r.a.createElement(f.Provider,{value:{isImparative:y,state:m,dispatch:h,onNodeClick:function(e){l&&l(e)},onDelete:function(e){s&&s(e)},onAdd:function(e,t){u&&u(e,t)}}},r.a.createElement(O,null,y?r.a.createElement(Q,{data:m,parentNode:m}):i)))},Q=function e(t){var n=t.data,a=t.parentNode;return n.map((function(t){return t.parentNode=a,a||(t.parentNode=n),t.id||(t.id=Object(u.v4)()),"file"===t.type?r.a.createElement(W,{key:t.id,id:t.id,name:t.name,node:t}):"folder"===t.type?r.a.createElement(U,{key:t.id,id:t.id,name:t.name,node:t,data:t.files},r.a.createElement(e,{parentNode:t,data:t.files})):void 0}))};X.File=W,X.Folder=U;var Y=X,Z="'''Algorithm-creation Template\n\nDeploying a model in order to perform Inference means that you have trained a model, tested its performance, and decided to use it to make predictions on new\ndata, in this case, images.\n\nThis template uses two Python modules to provide structure for algorithm deployment: `InferTask` and `Application`.\n\nThe instantiation of an `Application` object is what turns your code into an algorithm that can run on our application.\n\nEach algorithm is treated as an inference task, therefore it must inherit the `InferTask` class.\n\nAfter you created your algorithm class, you must instantiate it in the `Application` class, in its `init_infer` method.\n\nBelow you can find an example of how to use the provided template.\n\nThis code should be on the `main.py` file! All the Python modules that you use must be in `requirements.txt` file, one per line, alongside its corresponding version.\n'''\n\nimport os\nfrom container_api.scripts.app import Application\nfrom container_api.scripts.infer_task import InferTask\n\nclass SegmentationSpleen(InferTask):\n\n        def __init__(self,\n                root_dir,\n                task,\n        ):\n                \n                super().__init__(\n                        root_dir=root_dir\n                        task=task\n                )\n\n        '''\n        def pre_processing(self, data):\n            (...)\n\n        def post_processing(self, data):\n            (...)\n        '''\n\n\n        '''\n        def run(self, input_data): (Note: This function is mandatory!)\n\n\n        According to the task performed by the algorithm, the variable `input_data` is the following:\n\n              Segmentation, Classification, Lesion Detection, Object Localisation and Image Processing - \n\n              {'image': 'path to nii.gz file or DICOM dir containing the input images'}\n\n              Image Registration - \n\n              {'image': \n        \n              {'fixed_image': 'path to nii.gz file or DICOM dir containing the input images', \n        \n              'moving_image': 'path to nii.gz file or DICOM dir containing the input images'} \n\n              }\n\n        Here you should provide all the code you want to run, the workflow of your algorithm.\n        All the other functions you may add should be called here.\n\n        Also according to the task performed by the algorithm, the variable `output_data` must be the following:\n\n              Segmentation, Image Registration, Lesion Detection, Object Localisation and Image Processing - \n\n              {'image_np': 'a Python array containing the result image data', \n\n              'affine': 'an optional Python array containing the affine transformation of the result image'}\n\n              Classification - a Python dictionary containing the prediction labels as keys and the corresponding results as values as \n\n              {'prediction_label': 'prediction_result' (...)}\n\n\n\n              return output_data\n\n\n\n        The backend of our application will look for the `run` method and execute its code.\n\n        Finally, the output is written in the appropriate format and sent to the Viewer, that is:\n\n              Segmentation, Image Registration, Lesion Detection, Object Localisation and Image Processing - \n\n              the output Python array containing the result image data is converted to an ITK image, written in a .nrrd file and sent to the Viewer.\n\n              Classification - the Python dictionary containing the labels and their prediction result is sent as an JSON object to the Viewer.\n        '''\n\n\n\nclass MyApp(Application):\n\n        def __init__(self, root_dir, task):\n\n        '''\n        Base Class for Any Algorithm Application\n        \n        :param root_dir: path for Algorithm root directory.\n        :param task: task performed by the Algorithm.\n        '''\n\n                super().__init__(\n                root_dir=root_dir\n                task=task\n                )\n\n        def init_infer(self):\n\n        '''\n        Init the provided algorithm class.\n        '''\n\n                infer = SegmentationSpleen(self.root_dir, self.task),\n                \n                return infer",$=n(1467),ee=n(1458),te=n.n(ee),ne=n(1459),ae=n.n(ne),re=n(1457),ie=n(9),oe=n.n(ie),le=n(1418);function ce(e,t,n,a,r,i,o){try{var l=e[i](o),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(a,r)}var se,ue,pe={createMyModelEntry:(se=regeneratorRuntime.mark((function e(t){var n,a,r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new FormData,a=le.a.create({}),t&&(n.append("name",t.name),n.append("version",t.version),n.append("algorithm_overview",t.algorithm_overview),n.append("model_architecture",t.model_architecture),n.append("model_performance",t.model_performance),n.append("data_description",t.data_description),n.append("input",t.input),n.append("output",t.output),n.append("references",t.references),n.append("additional_info",t.additional_info),n.append("file",t.file[1],t.file[0]+".zip"),n.append("user",t.user),n.append("task",t.task),n.append("inputExtension",t.inputExtension),n.append("inputModality",t.inputModality),n.append("visibility",t.visibility),n.append("framework",t.framework),n.append("bodyPart",t.bodyPart)),e.next=5,oe.a.post("/api/model/",n,{headers:{Authorization:"JWT ".concat(localStorage.getItem("access")),"Content-Type":"multipart/form-data"}}).then((function(e){return e})).catch((function(e){return e.response}));case 5:if(r=e.sent,console.log(r.status),201!==r.status){e.next=11;break}a.show({title:"Add Algorithm",message:"Algorithm added - Success",type:"success",duration:8e3}),e.next=18;break;case 11:if(200!==r.status){e.next=15;break}a.show({title:"Edit Algorithm",message:"Algorithm edited - Success",type:"success",duration:8e3}),e.next=18;break;case 15:return i=r.data.error,a.show({title:"Add Algorithm",message:"Failed to add algorithm - "+i,type:"error",duration:1e4}),e.abrupt("return",r);case 18:case"end":return e.stop()}}),e)})),ue=function(){var e=this,t=arguments;return new Promise((function(n,a){var r=se.apply(e,t);function i(e){ce(r,n,a,i,o,"next",e)}function o(e){ce(r,n,a,i,o,"throw",e)}i(void 0)}))},function(e){return ue.apply(this,arguments)})},fe=n(1419);function de(e){return(de="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function me(e,t,n,a,r,i,o){try{var l=e[i](o),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(a,r)}function he(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){me(i,a,r,o,l,"next",e)}function l(e){me(i,a,r,o,l,"throw",e)}o(void 0)}))}}function ye(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ve(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function be(e){return(be=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ge(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ee(e,t){return(Ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var we=function(e){function t(e){var a,r,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=be(t).call(this,e),a=!i||"object"!==de(i)&&"function"!=typeof i?ge(r):i,_e(ge(a),"handleTreeClick",(function(e){Object.keys(a.state).forEach((function(t){e.node.name===t&&a.setState({active:e.node.name})}))})),_e(ge(a),"onDelete",(function(e){var t=a.state.tree[0].files.filter((function(t){return"file"===t.type&&t.name===e})),n=a.state.tree[0].files.indexOf(t[0]);a.state.tree[0].files.splice(n,1)})),_e(ge(a),"onAdd",(function(e){var t;a.setState((_e(t={},e,""),_e(t,"active",e),t))})),_e(ge(a),"handleChange",(function(e){var t=a.state.active;a.setState(_e({},t,e))})),_e(ge(a),"handleModelUpload",(function(e){for(var t=0;t<e.target.files.length;t++)a.state.preTrainedFiles.push(_e({},e.target.files[t].name,e.target.files[t]))})),_e(ge(a),"handleDownload",(function(){for(var e=n(798)(),t=[],r=[],i=0;i<a.state.preTrainedFiles.length;i++){var o=a.state.preTrainedFiles[i];o[Object.keys(o)[0]]instanceof File&&(t.push(o),r.push(Object.keys(o)[0]))}for(var l=a.state.tree[0].files,c=0;c<l.length;c++)if(!r.includes(l[c].name)){var s=a.state[l[c].name],u=new Blob([s],{type:"text/plain;charset=utf-8"}),p={};p[l[c].name]=u,t.push(p)}for(var f=a.state.tree,d=0;d<t.length;d++)for(var m=0,h=Object.entries(t[d]);m<h.length;m++){var y=ye(h[m],2),v=y[0],b=y[1];e.file(v,b)}e.generateAsync({type:"blob"}).then((function(e){Object(re.saveAs)(e,f[0].name)}))})),_e(ge(a),"handleSubmit",(function(){for(var e=n(798)(),t=[],r=[],i=0;i<a.state.preTrainedFiles.length;i++){var o=a.state.preTrainedFiles[i];o[Object.keys(o)[0]]instanceof File&&(t.push(o),r.push(Object.keys(o)[0]))}for(var l=a.state.tree[0].files,c=0;c<l.length;c++)if(!r.includes(l[c].name)){var s=a.state[l[c].name],u=new Blob([s],{type:"text/plain;charset=utf-8"}),p={};p[l[c].name]=u,t.push(p)}for(var f=a.state.tree,d=0;d<t.length;d++)for(var m=0,h=Object.entries(t[d]);m<h.length;m++){var y=ye(h[m],2),v=y[0],b=y[1];e.file(v,b)}e.generateAsync({type:"blob"}).then((function(e){var t=a.props.location.state,n={};n.name=t.name,n.port=t.port,n.version=t.version,n.algorithm_overview=t.algorithm_overview,n.model_architecture=t.model_architecture,n.model_performance=t.model_performance,n.data_description=t.data_description,n.input=t.input,n.output=t.output,n.references=t.references,n.additional_info=t.additional_info,n.file=[f[0].name,e],n.user=t.user,n.task=t.task,n.inputExtension=t.inputExtension,n.inputModality=t.inputModality,n.visibility=t.visibility,n.framework=t.framework,n.bodyPart=t.bodyPart,pe.createMyModelEntry(n)}))})),a.state={tree:[{type:"folder",name:a.props.location.state.name,files:[{type:"file",name:"__init__.py"},{type:"file",name:"main.py"},{type:"file",name:"requirements.txt"},{type:"file",name:"template"}]}],"__init__.py":"","main.py":"","requirements.txt":"",template:Z,active:"template",preTrainedFiles:[]},a.uiModelService=fe.a.create({}),a}var i,o,l,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ee(e,t)}(t,e),i=t,(o=[{key:"componentDidMount",value:(c=he(regeneratorRuntime.mark((function e(){var t,a,r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:void 0!==this.props.location.state.file&&(this.uiModelService.hide(),t=this.props.location.state.file,a="http://localhost:8000/api/model/?user=".concat(this.props.user.email,"&file=").concat(t),(r=new XMLHttpRequest).open("GET",a,!0),r.responseType="blob",r.setRequestHeader("Authorization","JWT ".concat(localStorage.getItem("access"))),r.send(),i=this,r.onload=function(){var e=n(798)(),t=r.response;e.loadAsync(t).then(function(){var e=he(regeneratorRuntime.mark((function e(t){var n,a,r,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=regeneratorRuntime.keys(t.files);case 1:if((e.t1=e.t0()).done){e.next=23;break}if(n=e.t1.value,a=n.split("."),r=a[1],!["ts","pl","hdf5","npy","pth","pt"].includes(r)){e.next=15;break}return e.next=9,t.file(n).async("blob");case 9:o=e.sent,l=new File([o],n),i.setState(_e({},n,"#The file is not displayed in the editor because it is binary.")),i.state.preTrainedFiles.push(_e({},n,l)),e.next=19;break;case 15:return e.next=17,t.file(n).async("string");case 17:c=e.sent,i.setState(_e({},n,c));case 19:["__init__.py","main.py","requirements.txt","template"].includes(n)||i.state.tree[0].files.push({type:"file",name:n}),e.next=1;break;case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())});case 1:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.state.active,n=this.state["".concat(t)];return r.a.createElement(a.Fragment,null,r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{marginRight:"10px"}},r.a.createElement(Y,{data:this.state.tree,onNodeClick:this.handleTreeClick,onDelete:this.onDelete,onAdd:this.onAdd})),r.a.createElement("div",{style:{flex:"0%"}},r.a.createElement("div",{className:"buttons",style:{width:"200px",margin:"0 auto",display:"inline"}},r.a.createElement("label",{htmlFor:"file",style:{marginBottom:"5px",fontSize:"12px",fontFamily:"Helvetica"}},r.a.createElement("input",{title:"Upload Pre-trained Model Files",type:"file",name:"file",id:"file",multiple:!0,accept:".ts, .pl. .hdf5, .npy, .pth, .pt",onChange:function(t){e.handleModelUpload(t)}})),r.a.createElement("h4",{style:{fontSize:"14px",fontFamily:"Helvetica",display:"inline",margin:"0 auto",marginLeft:"20%"}},r.a.createElement("b",null,this.state.active)),r.a.createElement($.a,{style:{marginTop:"6px",marginRight:"8px",fontSize:"12px",fontFamily:"Helvetica",float:"right",display:"flex",backgroundColor:"#ff4500",borderColor:"#FFFAFA"},onClick:this.handleSubmit,startIcon:r.a.createElement(te.a,null),variant:"outlined"},"Publish"),r.a.createElement($.a,{style:{marginTop:"6px",marginRight:"8px",fontSize:"12px",fontFamily:"Helvetica",float:"right",display:"flex",backgroundColor:"#00BFFF",borderColor:"#FFFAFA"},onClick:this.handleDownload,startIcon:r.a.createElement(ae.a,null),variant:"outlined"},"Download")),r.a.createElement(s.a,{mode:"python",theme:"dracula",onChange:this.handleChange,name:"editor",value:n,enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,width:"100%",height:"520px",showPrintMargin:!1,highlightActiveLine:!0,readOnly:"template"===this.state.active}))))}}])&&ve(i.prototype,o),l&&ve(i,l),t}(a.Component);_e(we,"propTypes",{user:o.a.object});var xe=Object(l.b)((function(e){return{user:e.auth.user}}),null)(we);t.default=xe}}]);
//# sourceMappingURL=13.bundle.d21fab79c2ee634817b5.js.map
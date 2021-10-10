(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1012:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(319).configure)([__webpack_require__(1013)],module,!1)}).call(this,__webpack_require__(174)(module))},1013:function(module,exports,__webpack_require__){var map={"./stories/AriaLiveAssertive.stories.ts":1014,"./stories/AriaLivePolite.stories.ts":1016,"./stories/Output.stories.ts":1017,"./stories/RoleAlert.stories.ts":1018,"./stories/RoleLog.stories.ts":1019,"./stories/RoleStatus.stories.ts":1020};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1013},1014:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LiveRegionAvailableBeforeContent",(function(){return LiveRegionAvailableBeforeContent})),__webpack_require__.d(__webpack_exports__,"LiveRegionUnavailableBeforeContent",(function(){return LiveRegionUnavailableBeforeContent})),__webpack_require__.d(__webpack_exports__,"LiveContainerIsHidden",(function(){return LiveContainerIsHidden})),__webpack_require__.d(__webpack_exports__,"ContentIsHidden",(function(){return ContentIsHidden})),__webpack_require__.d(__webpack_exports__,"ContentIsPartiallyHidden",(function(){return ContentIsPartiallyHidden}));var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4);function LiveRegionAvailableBeforeContent(){return Object(_utils__WEBPACK_IMPORTED_MODULE_0__.b)((function(){return document.createTextNode("Hello world")}),{"aria-live":"assertive"})}function LiveRegionUnavailableBeforeContent(){return Object(_utils__WEBPACK_IMPORTED_MODULE_0__.b)((function(){var div=document.createElement("div");return div.textContent="Hello world",div.setAttribute("aria-live","assertive"),div}))}function LiveContainerIsHidden(){return Object(_utils__WEBPACK_IMPORTED_MODULE_0__.b)((function(){var div=document.createElement("div");return div.textContent="Hello world",div.setAttribute("aria-live","assertive"),div}),{"aria-hidden":"true"})}function ContentIsHidden(){return Object(_utils__WEBPACK_IMPORTED_MODULE_0__.b)((function(){var div=document.createElement("div");return div.textContent="Hello world",div.setAttribute("aria-live","assertive"),div.setAttribute("aria-hidden","true"),div}))}function ContentIsPartiallyHidden(){return Object(_utils__WEBPACK_IMPORTED_MODULE_0__.b)((function(){var wrapper=document.createElement("div"),hello=document.createElement("span");hello.textContent="Hello";var world=document.createElement("span");return world.textContent="world",world.setAttribute("aria-hidden","true"),wrapper.append(hello,world),wrapper}),{"aria-live":"assertive"})}__webpack_exports__.default={title:'Aria-live/aria-live="assertive"'},Object(_utils__WEBPACK_IMPORTED_MODULE_0__.a)(LiveRegionAvailableBeforeContent,"PASS"),Object(_utils__WEBPACK_IMPORTED_MODULE_0__.a)(LiveRegionUnavailableBeforeContent,"PASS"),Object(_utils__WEBPACK_IMPORTED_MODULE_0__.a)(LiveContainerIsHidden,"FAIL"),Object(_utils__WEBPACK_IMPORTED_MODULE_0__.a)(ContentIsHidden,"FAIL"),Object(_utils__WEBPACK_IMPORTED_MODULE_0__.a)(ContentIsPartiallyHidden,"FAIL")},1016:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LiveRegionAvailableBeforeContent",(function(){return LiveRegionAvailableBeforeContent})),__webpack_require__.d(__webpack_exports__,"LiveRegionUnavailableBeforeContent",(function(){return LiveRegionUnavailableBeforeContent}));var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4);function LiveRegionAvailableBeforeContent(){return Object(_utils__WEBPACK_IMPORTED_MODULE_0__.b)((function(){return document.createTextNode("Hello world")}),{"aria-live":"polite"})}function LiveRegionUnavailableBeforeContent(){return Object(_utils__WEBPACK_IMPORTED_MODULE_0__.b)((function(){var div=document.createElement("div");return div.textContent="Hello world",div.setAttribute("aria-live","polite"),div}))}__webpack_exports__.default={title:'Aria-live/aria-live="polite"'},Object(_utils__WEBPACK_IMPORTED_MODULE_0__.a)(LiveRegionAvailableBeforeContent,"PASS"),Object(_utils__WEBPACK_IMPORTED_MODULE_0__.a)(LiveRegionUnavailableBeforeContent,"FAIL")},1017:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LiveRegionAvailableBeforeContent",(function(){return LiveRegionAvailableBeforeContent})),__webpack_require__.d(__webpack_exports__,"LiveRegionNotAvailableBeforeContent",(function(){return LiveRegionNotAvailableBeforeContent}));var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4);function LiveRegionAvailableBeforeContent(){return Object(_utils__WEBPACK_IMPORTED_MODULE_0__.b)((function(){return document.createTextNode("Hello world")}),{tag:"output"})}function LiveRegionNotAvailableBeforeContent(){return Object(_utils__WEBPACK_IMPORTED_MODULE_0__.b)((function(){var div=document.createElement("output");return div.textContent="Hello world",div}))}__webpack_exports__.default={title:"Elements/<output>"},Object(_utils__WEBPACK_IMPORTED_MODULE_0__.a)(LiveRegionAvailableBeforeContent,"PASS"),Object(_utils__WEBPACK_IMPORTED_MODULE_0__.a)(LiveRegionNotAvailableBeforeContent,"FAIL")},1018:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LiveRegionAvailableBeforeContent",(function(){return LiveRegionAvailableBeforeContent})),__webpack_require__.d(__webpack_exports__,"LiveRegionUnavailableBeforeContent",(function(){return LiveRegionUnavailableBeforeContent}));var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4);function LiveRegionAvailableBeforeContent(){return Object(_utils__WEBPACK_IMPORTED_MODULE_0__.b)((function(){return document.createTextNode("Hello world")}),{role:"alert"})}function LiveRegionUnavailableBeforeContent(){return Object(_utils__WEBPACK_IMPORTED_MODULE_0__.b)((function(){var div=document.createElement("div");return div.textContent="Hello world",div.setAttribute("role","alert"),div}))}__webpack_exports__.default={title:'Role/role="alert"'},Object(_utils__WEBPACK_IMPORTED_MODULE_0__.a)(LiveRegionAvailableBeforeContent,"PASS"),Object(_utils__WEBPACK_IMPORTED_MODULE_0__.a)(LiveRegionUnavailableBeforeContent,"PASS")},1019:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LiveRegionAvailableBeforeContent",(function(){return LiveRegionAvailableBeforeContent})),__webpack_require__.d(__webpack_exports__,"LiveRegionUnavailableBeforeContent",(function(){return LiveRegionUnavailableBeforeContent}));var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4);function LiveRegionAvailableBeforeContent(){return Object(_utils__WEBPACK_IMPORTED_MODULE_0__.b)((function(){return document.createTextNode("Hello world")}),{role:"log"})}function LiveRegionUnavailableBeforeContent(){return Object(_utils__WEBPACK_IMPORTED_MODULE_0__.b)((function(){var div=document.createElement("div");return div.textContent="Hello world",div.setAttribute("role","log"),div}))}__webpack_exports__.default={title:'Role/role="log"'},Object(_utils__WEBPACK_IMPORTED_MODULE_0__.a)(LiveRegionAvailableBeforeContent,"PASS"),Object(_utils__WEBPACK_IMPORTED_MODULE_0__.a)(LiveRegionUnavailableBeforeContent,"FAIL")},1020:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LiveRegionAvailableBeforeContent",(function(){return LiveRegionAvailableBeforeContent})),__webpack_require__.d(__webpack_exports__,"LiveRegionUnavailableBeforeContent",(function(){return LiveRegionUnavailableBeforeContent}));var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4);function LiveRegionAvailableBeforeContent(){return Object(_utils__WEBPACK_IMPORTED_MODULE_0__.b)((function(){return document.createTextNode("Hello world")}),{role:"status"})}function LiveRegionUnavailableBeforeContent(){return Object(_utils__WEBPACK_IMPORTED_MODULE_0__.b)((function(){var div=document.createElement("div");return div.textContent="Hello world",div.setAttribute("role","status"),div}))}__webpack_exports__.default={title:'Role/role="status"'},Object(_utils__WEBPACK_IMPORTED_MODULE_0__.a)(LiveRegionAvailableBeforeContent,"PASS"),Object(_utils__WEBPACK_IMPORTED_MODULE_0__.a)(LiveRegionUnavailableBeforeContent,"FAIL")},1021:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators}));__webpack_require__(51),__webpack_require__(24),__webpack_require__(89),__webpack_require__(731),__webpack_require__(732),__webpack_require__(62),__webpack_require__(733),__webpack_require__(734),__webpack_require__(735);var client_api=__webpack_require__(1024),esm=__webpack_require__(2),dom_esm=(__webpack_require__(375),__webpack_require__(165),__webpack_require__(58),__webpack_require__(423)),decorators=[function withSourceCode(Story){var html=Story(),sourceCodeFrame=document.createElement("div");function updateSourceCodeFrame(){sourceCodeFrame.querySelector("#source-code-frame").innerHTML=function escapeHTML(str){return str.replace(/[&<>'"]/g,(function(tag){return{"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[tag]}))}(Object(dom_esm.a)(html))}return sourceCodeFrame.innerHTML='\n            <div style="display: flex; flex-direction: row; align-content: baseline;">\n                <div id="story-target" style="flex-basis: 50%;"></div>\n                <pre id="source-code-frame" aria-live="off" aria-hidden="true" style="flex-basis: 50%; margin: 0; background-color: #eee; padding: 0.5rem;"></pre>\n            </div>\n        '.trim(),document.addEventListener("click",updateSourceCodeFrame),document.addEventListener("keypress",updateSourceCodeFrame),updateSourceCodeFrame(),sourceCodeFrame.querySelector("#story-target").appendChild(html),sourceCodeFrame}];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},4:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return addStoryName})),__webpack_require__.d(__webpack_exports__,"b",(function(){return createMountToggle}));__webpack_require__(165),__webpack_require__(58),__webpack_require__(32),__webpack_require__(103),__webpack_require__(1015),__webpack_require__(24),__webpack_require__(38),__webpack_require__(22),__webpack_require__(43),__webpack_require__(31),__webpack_require__(30),__webpack_require__(34),__webpack_require__(35),__webpack_require__(60);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function addStoryName(fn,status){var camelCaseAsSentence=fn.name.replace(/([A-Z])/g," $1");return fn.storyName=camelCaseAsSentence+("PASS"===status?" ✅":" ❌"),fn}function createMountToggle(onClick,containerProps){var wrapper=document.createElement("div"),button=document.createElement("button"),container=document.createElement((null==containerProps?void 0:containerProps.tag)||"div");if(containerProps)for(var _i2=0,_Object$entries=Object.entries(containerProps);_i2<_Object$entries.length;_i2++){var _ref2=_slicedToArray(_Object$entries[_i2],2),key=_ref2[0],value=_ref2[1];"tag"!==key&&container.setAttribute(key,value)}wrapper.appendChild(button),wrapper.appendChild(container),initializeTexts();var toggled=!1;function initializeTexts(){button.textContent="Mount"}return button.addEventListener("click",(function(){if(toggled){var _step,_iterator=function _createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function F(){};return{s:F,n:function n(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function e(_e2){throw _e2},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function s(){it=it.call(o)},n:function n(){var step=it.next();return normalCompletion=step.done,step},e:function e(_e3){didErr=!0,err=_e3},f:function f(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}(container.childNodes);try{for(_iterator.s();!(_step=_iterator.n()).done;){var child=_step.value;container.removeChild(child)}}catch(err){_iterator.e(err)}finally{_iterator.f()}initializeTexts()}else{var content=onClick();container.appendChild(content),button.textContent="Unmount"}toggled=!toggled})),wrapper}},426:function(module,exports,__webpack_require__){__webpack_require__(427),__webpack_require__(582),__webpack_require__(583),__webpack_require__(1021),module.exports=__webpack_require__(1012)},493:function(module,exports){},583:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(319)}},[[426,1,2]]]);
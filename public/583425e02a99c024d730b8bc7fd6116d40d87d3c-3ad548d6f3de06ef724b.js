/*! For license information please see 583425e02a99c024d730b8bc7fd6116d40d87d3c-3ad548d6f3de06ef724b.js.LICENSE.txt */
(self.webpackChunkzwglass_purchase_records=self.webpackChunkzwglass_purchase_records||[]).push([[1360],{10810:function(t){"use strict";t.exports=function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var r,o,i;if(Array.isArray(e)){if((r=e.length)!=n.length)return!1;for(o=r;0!=o--;)if(!t(e[o],n[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((r=(i=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;0!=o--;){var a=i[o];if(("_owner"!==a||!e.$$typeof)&&!t(e[a],n[a]))return!1}return!0}return e!=e&&n!=n}},89409:function(){!function(){if("undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof HTMLElement){var t=!1;try{var e=document.createElement("div");e.addEventListener("focus",(function(t){t.preventDefault(),t.stopPropagation()}),!0),e.focus(Object.defineProperty({},"preventScroll",{get:function(){t=!0}}))}catch(n){}if(void 0===HTMLElement.prototype.nativeFocus&&!t){HTMLElement.prototype.nativeFocus=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(t){var e=window.scrollY||window.pageYOffset;this.nativeFocus(),t&&t.preventScroll&&setTimeout((function(){window.scroll(window.scrollX||window.pageXOffset,e)}),0)}}}}()},16372:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(67294);e.default=function(t){r.useEffect(t,[])}},66014:function(t,e,n){"use strict";var r=n(67294),o=n(53655).isClient?window:null,i=function(t){return!!t.addEventListener},a=function(t){return!!t.on};e.Z=function(t,e,n,u){void 0===n&&(n=o),r.useEffect((function(){if(e&&n)return i(n)?n.addEventListener(t,e,u):a(n)&&n.on(t,e,u),function(){i(n)?n.removeEventListener(t,e,u):a(n)&&n.off(t,e,u)}}),[t,e,n,JSON.stringify(u)])}},24250:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(79900),o=n(67294),i=r.__importDefault(n(37916));e.default=function(t){var e=o.useRef(0),n=o.useState(t),r=n[0],a=n[1],u=o.useCallback((function(t){cancelAnimationFrame(e.current),e.current=requestAnimationFrame((function(){a(t)}))}),[]);return i.default((function(){cancelAnimationFrame(e.current)})),[r,u]}},37916:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(79900),o=n(67294),i=r.__importDefault(n(16372));e.default=function(t){var e=o.useRef(t);e.current=t,i.default((function(){return function(){return e.current()}}))}},64881:function(t,e,n){"use strict";var r=n(79900),o=n(67294),i=r.__importDefault(n(24250)),a=n(53655);e.Z=function(t,e){void 0===t&&(t=1/0),void 0===e&&(e=1/0);var n=i.default({width:a.isClient?window.innerWidth:t,height:a.isClient?window.innerHeight:e}),r=n[0],u=n[1];return o.useEffect((function(){if(a.isClient){var t=function(){u({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}}),[]),r}},53655:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isClient="object"==typeof window,e.on=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return t.addEventListener.apply(t,e)},e.off=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return t.removeEventListener.apply(t,e)},e.isDeepEqual=n(10810)},79900:function(t,e,n){"use strict";n.r(e),n.d(e,{__extends:function(){return o},__assign:function(){return i},__rest:function(){return a},__decorate:function(){return u},__param:function(){return c},__metadata:function(){return l},__awaiter:function(){return f},__generator:function(){return s},__createBinding:function(){return d},__exportStar:function(){return v},__values:function(){return p},__read:function(){return y},__spread:function(){return h},__spreadArrays:function(){return m},__await:function(){return g},__asyncGenerator:function(){return w},__asyncDelegator:function(){return b},__asyncValues:function(){return _},__makeTemplateObject:function(){return E},__importStar:function(){return O},__importDefault:function(){return S},__classPrivateFieldGet:function(){return j},__classPrivateFieldSet:function(){return C}});var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function o(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var i=function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function a(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}function u(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a}function c(t,e){return function(n,r){e(n,r,t)}}function l(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function f(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(e){i(e)}}function u(t){try{c(r.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((r=r.apply(t,e||[])).next())}))}function s(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(u){i=[6,u],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function d(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}function v(t,e){for(var n in t)"default"===n||e.hasOwnProperty(n)||(e[n]=t[n])}function p(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(u){o={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function h(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(y(arguments[e]));return t}function m(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r}function g(t){return this instanceof g?(this.v=t,this):new g(t)}function w(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(t){o[t]&&(r[t]=function(e){return new Promise((function(n,r){i.push([t,e,n,r])>1||u(t,e)}))})}function u(t,e){try{(n=o[t](e)).value instanceof g?Promise.resolve(n.value.v).then(c,l):f(i[0][2],n)}catch(r){f(i[0][3],r)}var n}function c(t){u("next",t)}function l(t){u("throw",t)}function f(t,e){t(e),i.shift(),i.length&&u(i[0][0],i[0][1])}}function b(t){var e,n;return e={},r("next"),r("throw",(function(t){throw t})),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,o){e[r]=t[r]?function(e){return(n=!n)?{value:g(t[r](e)),done:"return"===r}:o?o(e):e}:o}}function _(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=p(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,o){(function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)})(r,o,(e=t[n](e)).done,e.value)}))}}}function E(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function O(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function S(t){return t&&t.__esModule?t:{default:t}}function j(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}function C(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n}},17858:function(t,e,n){"use strict";n.d(e,{Z:function(){return v}});var r=n(67294),o=(n(89409),n(73935)),i=n(66014),a=n(64881);Object.create;function u(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r}Object.create;var c=function(t){return t+"ms"},l=function(t){var e=t.height,n=t.innerHeight,r=t.innerWidth,o=t.isLoaded,i=t.isUnloading,a=t.left,l=t.originalTransform,f=t.top,s=t.transitionDuration,d=t.width,v=t.zoomMargin,p=c(s);if(!o||i){var y=u(["scale(1)","translate(0, 0)"],l?[l]:[]).join(" ");return{height:e,left:a,top:f,transform:y,WebkitTransform:y,transitionDuration:p,width:d}}var h=function(t){var e=t.height,n=t.innerHeight,r=t.innerWidth,o=t.width,i=t.zoomMargin,a=r/(o+i),u=n/(e+i);return Math.min(a,u)}({height:e,innerWidth:r,innerHeight:n,width:d,zoomMargin:v}),m=u(["scale("+h+")","translate("+(r/2-(a+d/2))/h+"px, "+(n/2-(f+e/2))/h+"px)"],l?[l]:[]).join(" ");return{height:e,left:a,top:f,transform:m,WebkitTransform:m,transitionDuration:p,width:d}},f={getBoundingClientRect:function(){return{height:0,left:0,top:0,width:0}},style:{transform:null}},s=(0,r.memo)((function(t){var e=t.children,n=t.closeText,u=void 0===n?"Unzoom Image":n,s=t.onUnload,d=t.onLoad,v=t.overlayBgColorEnd,p=void 0===v?"rgba(255, 255, 255, 0.95)":v,y=t.overlayBgColorStart,h=void 0===y?"rgba(255, 255, 255, 0)":y,m=t.parentRef,g=t.portalEl,w=void 0===g?document.body:g,b=t.scrollableEl,_=void 0===b?window:b,E=t.transitionDuration,O=void 0===E?300:E,S=t.zoomMargin,j=void 0===S?0:S,C=t.zoomZindex,x=void 0===C?2147483647:C,P=(0,r.useRef)(null),k=(0,r.useState)(0)[1],z=(0,r.useState)(!1),T=z[0],D=z[1],M=(0,r.useState)(!1),L=M[0],R=M[1],B=(0,a.Z)(),Z=B.width,H=B.height,I=(0,r.useCallback)((function(t){t.preventDefault(),R(!0)}),[]),A=(0,r.useCallback)((function(t){"Escape"!==t.key&&27!==t.keyCode||(t.stopPropagation(),R(!0))}),[]),F=(0,r.useCallback)((function(){k((function(t){return t+1})),L||R(!0)}),[L]);(0,i.Z)("keydown",A,document),(0,i.Z)("scroll",F,_),(0,r.useEffect)((function(){D(!0),d(),P.current&&P.current.focus({preventScroll:!0})}),[d]),(0,r.useEffect)((function(){var t=L?setTimeout(s,O):null;return function(){t&&clearTimeout(t)}}),[L,s,O]);var U=m.current||f,W=U.getBoundingClientRect(),q=W.height,G=W.left,X=W.top,Y=W.width,$=function(t){var e=t.isLoaded,n=t.isUnloading,r=t.overlayBgColorEnd,o=t.overlayBgColorStart,i=t.transitionDuration,a=t.zoomZindex,u={backgroundColor:o,transitionDuration:c(i),zIndex:a};return e&&!n&&(u.backgroundColor=r),u}({isLoaded:T,isUnloading:L,overlayBgColorEnd:p,overlayBgColorStart:h,transitionDuration:O,zoomZindex:x}),J=l({height:q,isLoaded:T,innerHeight:H,innerWidth:Z,isUnloading:L,left:G,originalTransform:U.style.transform,top:X,transitionDuration:O,width:Y,zoomMargin:j});return(0,o.createPortal)(r.createElement("div",{"aria-modal":!0,"data-rmiz-overlay":!0,role:"dialog",style:$},r.createElement("div",{"data-rmiz-modal-content":!0,style:J},e),r.createElement("button",{"aria-label":u,"data-rmiz-btn-close":!0,onClick:I,ref:P})),w)})),d=(0,r.memo)((function(t){var e=t.children,n=t.closeText,o=void 0===n?"Unzoom image":n,i=t.overlayBgColorEnd,a=void 0===i?"rgba(255, 255, 255, 0.95)":i,u=t.overlayBgColorStart,c=void 0===u?"rgba(255, 255, 255, 0)":u,l=t.portalEl,f=t.openText,d=void 0===f?"Zoom image":f,v=t.scrollableEl,p=t.transitionDuration,y=void 0===p?300:p,h=t.wrapElement,m=void 0===h?"div":h,g=t.wrapStyle,w=t.zoomMargin,b=void 0===w?0:w,_=t.zoomZindex,E=void 0===_?2147483647:_,O=(0,r.useState)(!1),S=O[0],j=O[1],C=(0,r.useState)(!1),x=C[0],P=C[1],k=(0,r.useRef)(null),z=(0,r.useRef)(null),T=(0,r.useCallback)((function(t){S||(t.preventDefault(),j(!0))}),[S]),D=(0,r.useCallback)((function(){P(!0)}),[]),M=(0,r.useCallback)((function(){j(!1),P(!1),z.current&&z.current.focus({preventScroll:!0})}),[]),L=S&&x?"hidden":"visible";return r.createElement(r.StrictMode,null,r.createElement(m,{"data-rmiz-wrap":L,ref:k,style:g},e,r.createElement("button",{"aria-label":d,"data-rmiz-btn-open":!0,onClick:T,ref:z}),"undefined"!=typeof window&&S&&r.createElement(s,{closeText:o,onLoad:D,onUnload:M,overlayBgColorEnd:a,overlayBgColorStart:c,parentRef:k,portalEl:l,scrollableEl:v,transitionDuration:y,zoomMargin:b,zoomZindex:E},e)))}));function v(t){var e=t.width,n=void 0===e?96:e,o=t.src,i=void 0===o?"":o,a=t.alt,u=void 0===a?"Image":a,c=t.square,l=void 0!==c&&c;return r.createElement(d,null,l?r.createElement("img",{alt:u,src:i,width:n}):r.createElement("img",{alt:u,src:i,width:n,height:n}))}}}]);
//# sourceMappingURL=583425e02a99c024d730b8bc7fd6116d40d87d3c-3ad548d6f3de06ef724b.js.map
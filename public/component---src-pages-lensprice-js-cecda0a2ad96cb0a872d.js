(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"/kpp":function(e,t,n){"use strict";n("8+KV"),n("ioFf"),n("V+eJ");var r=n("lSNA"),a=n.n(r),c=n("pVnL"),o=n.n(c),l=n("cDf5"),s=n.n(l),i=n("q1tI"),u=n("TSYQ"),f=n.n(u),p=n("o/2+"),d=n("H84U"),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var v=i.forwardRef((function(e,t){var n,r=i.useContext(d.b),c=r.getPrefixCls,l=r.direction,u=i.useContext(p.a).gutter,v=e.prefixCls,b=e.span,g=e.order,h=e.offset,y=e.push,x=e.pull,O=e.className,j=e.children,E=e.flex,w=e.style,C=m(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),q=c("col",v),N={};["xs","sm","md","lg","xl","xxl"].forEach((function(t){var n,r={},c=e[t];"number"==typeof c?r.span=c:"object"===s()(c)&&(r=c||{}),delete C[t],N=o()(o()({},N),(n={},a()(n,"".concat(q,"-").concat(t,"-").concat(r.span),void 0!==r.span),a()(n,"".concat(q,"-").concat(t,"-order-").concat(r.order),r.order||0===r.order),a()(n,"".concat(q,"-").concat(t,"-offset-").concat(r.offset),r.offset||0===r.offset),a()(n,"".concat(q,"-").concat(t,"-push-").concat(r.push),r.push||0===r.push),a()(n,"".concat(q,"-").concat(t,"-pull-").concat(r.pull),r.pull||0===r.pull),a()(n,"".concat(q,"-rtl"),"rtl"===l),n))}));var P=f()(q,(n={},a()(n,"".concat(q,"-").concat(b),void 0!==b),a()(n,"".concat(q,"-order-").concat(g),g),a()(n,"".concat(q,"-offset-").concat(h),h),a()(n,"".concat(q,"-push-").concat(y),y),a()(n,"".concat(q,"-pull-").concat(x),x),n),O,N),S=o()({},w);return u&&(S=o()(o()(o()({},u[0]>0?{paddingLeft:u[0]/2,paddingRight:u[0]/2}:{}),u[1]>0?{paddingTop:u[1]/2,paddingBottom:u[1]/2}:{}),S)),E&&(S.flex=function(e){return"number"==typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(E)),i.createElement("div",o()({},C,{style:S,className:P,ref:t}),j)}));v.displayName="Col",t.a=v},"8rpu":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),c=n("9ibs"),o=n("hHIg"),l=n("mKu9");n("i4OL"),n("TpwP"),n("v++Q");t.a=function(e){var t=e.children,n=Object(r.useState)(0),s=n[0],i=n[1];return Object(r.useEffect)((function(){i(s+1)}),[]),a.a.createElement("div",{className:"flex-container"},a.a.createElement(l.a,null),a.a.createElement(c.c,{size:"lg"}),a.a.createElement(o.a,{requestCount:s}),a.a.createElement(c.a,null,a.a.createElement(c.a.Item,null,a.a.createElement("div",{className:"flex-main-container"},t,a.a.createElement(c.c,{size:"lg"}),a.a.createElement(c.c,{size:"lg"}),a.a.createElement(c.c,{size:"lg"})))))}},ACnJ:function(e,t,n){"use strict";n.d(t,"b",(function(){return l}));n("RW0V"),n("8+KV"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("9AAn");var r=n("lSNA"),a=n.n(r),c=n("pVnL"),o=n.n(c),l=["xxl","xl","lg","md","sm","xs"],s={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},i=new Map,u=-1,f={},p={matchHandlers:{},dispatch:function(e){return f=e,i.forEach((function(e){return e(f)})),i.size>=1},subscribe:function(e){return i.size||this.register(),u+=1,i.set(u,e),e(f),u},unsubscribe:function(e){i.delete(e),i.size||this.unregister()},unregister:function(){var e=this;Object.keys(s).forEach((function(t){var n=s[t],r=e.matchHandlers[n];null==r||r.mql.removeListener(null==r?void 0:r.listener)})),i.clear()},register:function(){var e=this;Object.keys(s).forEach((function(t){var n=s[t],r=function(n){var r=n.matches;e.dispatch(o()(o()({},f),a()({},t,r)))},c=window.matchMedia(n);c.addListener(r),e.matchHandlers[n]={mql:c,listener:r},r(c)}))}};t.a=p},BMrR:function(e,t,n){"use strict";var r=n("qrJ5");t.a=r.a},kPKH:function(e,t,n){"use strict";var r=n("/kpp");t.a=r.a},nTRf:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),c=n("8rpu"),o=n("vrFN"),l=(n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Z2Ku"),n("L9s1"),n("lN2L")),s=n("Sm+g"),i=["lens-price/v1/lenspricelist","lens-price/v1/lensbrands"],u=function(e){var t=e.requestCount,n=e.reqParams,r=e.responseDataHandle,c=i[0];return a.a.createElement(s.a,{responseDataHandle:r,api:c,method:"get",reqParams:n,reqObject:{},requestCount:t})};u.defaultProps={requestCount:0,reqParams:{},responseDataHandle:function(e){console.log(e)}};var f=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1],c=Object(r.useRef)(!0),o=Object(r.useState)(0),s=o[0],i=o[1],f=Object(r.useRef)({}),p=Object(r.useState)([]),d=p[0],m=p[1],v=Object(r.useState)([]);v[0],v[1];Object(r.useEffect)((function(){for(var e=[],t=0;t<10;t++){var n={image_cos_name1:"https://purchase-records-1254307677.cos.ap-chengdu.myqcloud.com/customer-purchase/bpmg0_1594352079.jpeg",len_title:"init test"+t,effects:"防蓝光",len_price:"180",len_sale_price:"160"};e.push(n)}console.log(e),m(e)}),[]);var b=function(e){return!!(Object.keys(e).includes("code")&&1e3===e.code&&Object.keys(e).includes("next")&&"string"==typeof e.next&&e.next.length>5&&Object.keys(e).includes("results"))};return a.a.createElement("div",null,a.a.createElement(l.a,{loading:t,hasMore:c.current,productsData:d,loadMore:function(){!t||c.current?(n(!0),console.log("reach end"),i(s+1)):console.log("All loaded...")}}),a.a.createElement(u,{requestCount:s,reqParams:f.current,responseDataHandle:function(e){console.log("获取数据:",e),n(!1),c.current=b(e),b(e)&&m(d.concat(e.results))}}))};t.default=function(){return a.a.createElement(c.a,null,a.a.createElement(o.a,{title:"LensPriceList"}),a.a.createElement(f,null))}},"o/2+":function(e,t,n){"use strict";var r=n("q1tI"),a=Object(r.createContext)({});t.a=a},qrJ5:function(e,t,n){"use strict";n("8+KV"),n("LK8F"),n("ioFf"),n("V+eJ");var r=n("pVnL"),a=n.n(r),c=n("lSNA"),o=n.n(c),l=n("cDf5"),s=n.n(l),i=n("J4zp"),u=n.n(i),f=n("q1tI"),p=n("TSYQ"),d=n.n(p),m=n("H84U"),v=n("o/2+"),b=n("CWQg"),g=n("ACnJ"),h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},y=(Object(b.a)("top","middle","bottom","stretch"),Object(b.a)("start","end","center","space-around","space-between"),f.forwardRef((function(e,t){var n,r=e.prefixCls,c=e.justify,l=e.align,i=e.className,p=e.style,b=e.children,y=e.gutter,x=void 0===y?0:y,O=h(e,["prefixCls","justify","align","className","style","children","gutter"]),j=f.useContext(m.b),E=j.getPrefixCls,w=j.direction,C=f.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),q=u()(C,2),N=q[0],P=q[1],S=f.useRef(x);f.useEffect((function(){var e=g.a.subscribe((function(e){var t=S.current||0;(!Array.isArray(t)&&"object"===s()(t)||Array.isArray(t)&&("object"===s()(t[0])||"object"===s()(t[1])))&&P(e)}));return function(){return g.a.unsubscribe(e)}}),[]);var z,A=E("row",r),L=(z=[0,0],(Array.isArray(x)?x:[x,0]).forEach((function(e,t){if("object"===s()(e))for(var n=0;n<g.b.length;n++){var r=g.b[n];if(N[r]&&void 0!==e[r]){z[t]=e[r];break}}else z[t]=e||0})),z),k=d()(A,(n={},o()(n,"".concat(A,"-").concat(c),c),o()(n,"".concat(A,"-").concat(l),l),o()(n,"".concat(A,"-rtl"),"rtl"===w),n),i),R=a()(a()(a()({},L[0]>0?{marginLeft:L[0]/-2,marginRight:L[0]/-2}:{}),L[1]>0?{marginTop:L[1]/-2,marginBottom:L[1]/2}:{}),p);return f.createElement(v.a.Provider,{value:{gutter:L}},f.createElement("div",a()({},O,{className:k,style:R,ref:t}),b))})));y.displayName="Row",t.a=y},zeV3:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));n("bWfx"),n("KKXr"),n("ioFf"),n("V+eJ");var r=n("pVnL"),a=n.n(r),c=n("lSNA"),o=n.n(c),l=n("q1tI"),s=n("TSYQ"),i=n.n(s),u=n("axMd"),f=n("H84U"),p={small:8,middle:16,large:24};function d(e){var t,n=e.className,r=e.direction,a=e.index,c=e.size,s=e.marginDirection,i=e.children,u=e.split,f=l.useContext(v);if(null==i)return null;var d=a>=f?{}:o()({},"vertical"===r?"marginBottom":s,(null!==(t="string"==typeof c?p[c]:c)&&void 0!==t?t:0)/(u?2:1));return l.createElement(l.Fragment,null,l.createElement("div",{className:n,style:d},i),a<f&&u&&l.createElement("span",{className:"".concat(n,"-split"),style:d},u))}var m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},v=l.createContext(0);t.b=function(e){var t,n=l.useContext(f.b),r=n.getPrefixCls,c=n.space,s=n.direction,p=e.size,b=void 0===p?(null==c?void 0:c.size)||"small":p,g=e.align,h=e.className,y=e.children,x=e.direction,O=void 0===x?"horizontal":x,j=e.prefixCls,E=e.split,w=m(e,["size","align","className","children","direction","prefixCls","split"]),C=Object(u.a)(y,{keepEmpty:!0});if(0===C.length)return null;var q=void 0===g&&"horizontal"===O?"center":g,N=r("space",j),P=i()(N,"".concat(N,"-").concat(O),(t={},o()(t,"".concat(N,"-rtl"),"rtl"===s),o()(t,"".concat(N,"-align-").concat(q),q),t),h),S="".concat(N,"-item"),z="rtl"===s?"marginLeft":"marginRight",A=0,L=C.map((function(e,t){return null!=e&&(A=t),l.createElement(d,{className:S,key:"".concat(S,"-").concat(t),direction:O,size:b,index:t,marginDirection:z,split:E},e)}));return l.createElement("div",a()({className:P},w),l.createElement(v.Provider,{value:A},L))}}}]);
//# sourceMappingURL=component---src-pages-lensprice-js-cecda0a2ad96cb0a872d.js.map
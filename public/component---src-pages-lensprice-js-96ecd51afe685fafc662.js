(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"/kpp":function(e,t,n){"use strict";n("8+KV"),n("ioFf"),n("V+eJ");var r=n("lSNA"),c=n.n(r),a=n("pVnL"),o=n.n(a),s=n("cDf5"),l=n.n(s),i=n("q1tI"),u=n("TSYQ"),f=n.n(u),p=n("o/2+"),d=n("H84U"),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n};var b=i.forwardRef((function(e,t){var n,r=i.useContext(d.b),a=r.getPrefixCls,s=r.direction,u=i.useContext(p.a).gutter,b=e.prefixCls,g=e.span,h=e.order,v=e.offset,x=e.push,y=e.pull,O=e.className,j=e.children,E=e.flex,w=e.style,q=m(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),C=a("col",b),P={};["xs","sm","md","lg","xl","xxl"].forEach((function(t){var n,r={},a=e[t];"number"==typeof a?r.span=a:"object"===l()(a)&&(r=a||{}),delete q[t],P=o()(o()({},P),(n={},c()(n,"".concat(C,"-").concat(t,"-").concat(r.span),void 0!==r.span),c()(n,"".concat(C,"-").concat(t,"-order-").concat(r.order),r.order||0===r.order),c()(n,"".concat(C,"-").concat(t,"-offset-").concat(r.offset),r.offset||0===r.offset),c()(n,"".concat(C,"-").concat(t,"-push-").concat(r.push),r.push||0===r.push),c()(n,"".concat(C,"-").concat(t,"-pull-").concat(r.pull),r.pull||0===r.pull),c()(n,"".concat(C,"-rtl"),"rtl"===s),n))}));var S=f()(C,(n={},c()(n,"".concat(C,"-").concat(g),void 0!==g),c()(n,"".concat(C,"-order-").concat(h),h),c()(n,"".concat(C,"-offset-").concat(v),v),c()(n,"".concat(C,"-push-").concat(x),x),c()(n,"".concat(C,"-pull-").concat(y),y),n),O,P),N=o()({},w);return u&&(N=o()(o()(o()({},u[0]>0?{paddingLeft:u[0]/2,paddingRight:u[0]/2}:{}),u[1]>0?{paddingTop:u[1]/2,paddingBottom:u[1]/2}:{}),N)),E&&(N.flex=function(e){return"number"==typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(E)),i.createElement("div",o()({},q,{style:N,className:S,ref:t}),j)}));b.displayName="Col",t.a=b},"8rpu":function(e,t,n){"use strict";var r=n("q1tI"),c=n.n(r),a=n("9ibs"),o=n("hHIg"),s=n("mKu9");n("i4OL"),n("TpwP"),n("v++Q");t.a=function(e){var t=e.children,n=Object(r.useState)(0),l=n[0],i=n[1];return Object(r.useEffect)((function(){i(l+1)}),[]),c.a.createElement("div",{className:"flex-container"},c.a.createElement(s.a,null),c.a.createElement(a.c,{size:"lg"}),c.a.createElement(o.a,{requestCount:l}),c.a.createElement(a.a,null,c.a.createElement(a.a.Item,null,c.a.createElement("div",{className:"flex-main-container"},t,c.a.createElement(a.c,{size:"lg"}),c.a.createElement(a.c,{size:"lg"}),c.a.createElement(a.c,{size:"lg"})))))}},ACnJ:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));n("RW0V"),n("8+KV"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("9AAn");var r=n("lSNA"),c=n.n(r),a=n("pVnL"),o=n.n(a),s=["xxl","xl","lg","md","sm","xs"],l={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},i=new Map,u=-1,f={},p={matchHandlers:{},dispatch:function(e){return f=e,i.forEach((function(e){return e(f)})),i.size>=1},subscribe:function(e){return i.size||this.register(),u+=1,i.set(u,e),e(f),u},unsubscribe:function(e){i.delete(e),i.size||this.unregister()},unregister:function(){var e=this;Object.keys(l).forEach((function(t){var n=l[t],r=e.matchHandlers[n];null==r||r.mql.removeListener(null==r?void 0:r.listener)})),i.clear()},register:function(){var e=this;Object.keys(l).forEach((function(t){var n=l[t],r=function(n){var r=n.matches;e.dispatch(o()(o()({},f),c()({},t,r)))},a=window.matchMedia(n);a.addListener(r),e.matchHandlers[n]={mql:a,listener:r},r(a)}))}};t.a=p},nTRf:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),c=n.n(r),a=n("8rpu"),o=n("vrFN"),s=(n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Z2Ku"),n("L9s1"),n("lN2L")),l=n("Sm+g"),i=["lens-price/v1/lenspricelist","lens-price/v1/lensbrands"],u=function(e){var t=e.requestCount,n=e.reqParams,r=e.responseDataHandle,a=i[0];return c.a.createElement(l.a,{responseDataHandle:r,api:a,method:"get",reqParams:n,reqObject:{},requestCount:t})};u.defaultProps={requestCount:0,reqParams:{},responseDataHandle:function(e){console.log(e)}};var f=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1],a=Object(r.useRef)(!0),o=Object(r.useState)(0),l=o[0],i=o[1],f=Object(r.useRef)({}),p=Object(r.useState)([]),d=p[0],m=p[1],b=Object(r.useState)([]);b[0],b[1];Object(r.useEffect)((function(){for(var e=[],t=0;t<10;t++){var n={image_cos_name1:"https://purchase-records-1254307677.cos.ap-chengdu.myqcloud.com/customer-purchase/bpmg0_1594352079.jpeg",len_title:"init test"+t,effects:"防蓝光",len_price:"180",len_sale_price:"160"};e.push(n)}console.log(e),m(e)}),[]);var g=function(e){return!!(Object.keys(e).includes("code")&&1e3===e.code&&Object.keys(e).includes("next")&&"string"==typeof e.next&&e.next.length>5&&Object.keys(e).includes("results"))};return c.a.createElement("div",null,c.a.createElement(s.a,{loading:t,hasMore:a.current,productsData:d,loadMore:function(){!t||a.current?(n(!0),console.log("reach end"),i(l+1)):console.log("All loaded...")}}),c.a.createElement(u,{requestCount:l,reqParams:f.current,responseDataHandle:function(e){console.log("获取数据:",e),n(!1),a.current=g(e),g(e)&&m(d.concat(e.results))}}))};t.default=function(){return c.a.createElement(a.a,null,c.a.createElement(o.a,{title:"LensPriceList"}),c.a.createElement(f,null))}},"o/2+":function(e,t,n){"use strict";var r=n("q1tI"),c=Object(r.createContext)({});t.a=c},qrJ5:function(e,t,n){"use strict";n("8+KV"),n("LK8F"),n("ioFf"),n("V+eJ");var r=n("pVnL"),c=n.n(r),a=n("lSNA"),o=n.n(a),s=n("cDf5"),l=n.n(s),i=n("J4zp"),u=n.n(i),f=n("q1tI"),p=n("TSYQ"),d=n.n(p),m=n("H84U"),b=n("o/2+"),g=n("CWQg"),h=n("ACnJ"),v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n},x=(Object(g.a)("top","middle","bottom","stretch"),Object(g.a)("start","end","center","space-around","space-between"),f.forwardRef((function(e,t){var n,r=e.prefixCls,a=e.justify,s=e.align,i=e.className,p=e.style,g=e.children,x=e.gutter,y=void 0===x?0:x,O=v(e,["prefixCls","justify","align","className","style","children","gutter"]),j=f.useContext(m.b),E=j.getPrefixCls,w=j.direction,q=f.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),C=u()(q,2),P=C[0],S=C[1],N=f.useRef(y);f.useEffect((function(){var e=h.a.subscribe((function(e){var t=N.current||0;(!Array.isArray(t)&&"object"===l()(t)||Array.isArray(t)&&("object"===l()(t[0])||"object"===l()(t[1])))&&S(e)}));return function(){return h.a.unsubscribe(e)}}),[]);var A,L=E("row",r),R=(A=[0,0],(Array.isArray(y)?y:[y,0]).forEach((function(e,t){if("object"===l()(e))for(var n=0;n<h.b.length;n++){var r=h.b[n];if(P[r]&&void 0!==e[r]){A[t]=e[r];break}}else A[t]=e||0})),A),H=d()(L,(n={},o()(n,"".concat(L,"-").concat(a),a),o()(n,"".concat(L,"-").concat(s),s),o()(n,"".concat(L,"-rtl"),"rtl"===w),n),i),V=c()(c()(c()({},R[0]>0?{marginLeft:R[0]/-2,marginRight:R[0]/-2}:{}),R[1]>0?{marginTop:R[1]/-2,marginBottom:R[1]/2}:{}),p);return f.createElement(b.a.Provider,{value:{gutter:R}},f.createElement("div",c()({},O,{className:H,style:V,ref:t}),g))})));x.displayName="Row",t.a=x}}]);
//# sourceMappingURL=component---src-pages-lensprice-js-96ecd51afe685fafc662.js.map
(self.webpackChunkzwglass_purchase_records=self.webpackChunkzwglass_purchase_records||[]).push([[6721],{52495:function(e,t,n){"use strict";n.d(t,{s:function(){return c}});var r=n(50008),a=n.n(r);function l(e,t){"function"==typeof e?e(t):"object"===a()(e)&&e&&"current"in e&&(e.current=t)}function c(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach((function(t){l(t,e)}))}}},60566:function(e,t,n){"use strict";n.d(t,{C:function(){return q}});var r=n(67154),a=n.n(r),l=n(59713),c=n.n(l),o=n(50008),i=n.n(o),s=n(63038),u=n.n(s),m=n(67294),f=n(75900),d=n.n(f),p=n(69192),v=n(82525),y=n(16654),E=n(52495),h=n(66419),g=n(40173),b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},C=function(e,t){var n,r,l=m.useState(1),o=u()(l,2),s=o[0],f=o[1],C=m.useState(!1),O=u()(C,2),x=O[0],_=O[1],S=m.useState(!0),w=u()(S,2),Z=w[0],P=w[1],k=m.useRef(),A=m.useRef(),j=(0,E.s)(t,k),N=m.useContext(v.E_).getPrefixCls,q=function(){if(A.current&&k.current){var t=A.current.offsetWidth,n=k.current.offsetWidth;if(0!==t&&0!==n){var r=e.gap,a=void 0===r?4:r;2*a<n&&f(n-2*a<t?(n-2*a)/t:1)}}};m.useEffect((function(){_(!0)}),[]),m.useEffect((function(){P(!0),f(1)}),[e.src]),m.useEffect((function(){q()}),[e.gap]);var z=e.prefixCls,M=e.shape,R=e.size,D=e.src,Y=e.srcSet,H=e.icon,I=e.className,L=e.alt,V=e.draggable,F=e.children,B=b(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children"]),T=(0,g.Z)(),W=m.useMemo((function(){if("object"!==i()(R))return{};var e=h.c4.find((function(e){return T[e]})),t=R[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:H?t/2:18}:{}}),[T,R]);(0,y.Z)(!("string"==typeof H&&H.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(H,"` at https://ant.design/components/icon"));var G,X=N("avatar",z),J=d()((n={},c()(n,"".concat(X,"-lg"),"large"===R),c()(n,"".concat(X,"-sm"),"small"===R),n)),K=d()(X,J,(r={},c()(r,"".concat(X,"-").concat(M),M),c()(r,"".concat(X,"-image"),D&&Z),c()(r,"".concat(X,"-icon"),H),r),I),Q="number"==typeof R?{width:R,height:R,lineHeight:"".concat(R,"px"),fontSize:H?R/2:18}:{};if(D&&Z)G=m.createElement("img",{src:D,draggable:V,srcSet:Y,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&P(!1)},alt:L});else if(H)G=H;else if(x||1!==s){var U="scale(".concat(s,") translateX(-50%)"),$={msTransform:U,WebkitTransform:U,transform:U},ee="number"==typeof R?{lineHeight:"".concat(R,"px")}:{};G=m.createElement(p.Z,{onResize:q},m.createElement("span",{className:"".concat(X,"-string"),ref:function(e){A.current=e},style:a()(a()({},ee),$)},F))}else G=m.createElement("span",{className:"".concat(X,"-string"),style:{opacity:0},ref:function(e){A.current=e}},F);return delete B.onError,delete B.gap,m.createElement("span",a()({},B,{style:a()(a()(a()({},Q),W),B.style),className:K,ref:j}),G)},O=m.forwardRef(C);O.displayName="Avatar",O.defaultProps={shape:"circle",size:"default"};var x=O,_=n(2375),S=n(94221),w=n(90579),Z=function(e){return e?"function"==typeof e?e():e:null},P=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},k=m.forwardRef((function(e,t){var n=e.prefixCls,r=e.title,l=e.content,c=P(e,["prefixCls","title","content"]),o=(0,m.useContext(v.E_).getPrefixCls)("popover",n);return m.createElement(w.Z,a()({},c,{prefixCls:o,ref:t,overlay:function(e){return m.createElement(m.Fragment,null,r&&m.createElement("div",{className:"".concat(e,"-title")},Z(r)),m.createElement("div",{className:"".concat(e,"-inner-content")},Z(l)))}(o)}))}));k.displayName="Popover",k.defaultProps={placement:"top",transitionName:"zoom-big",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};var A=k,j=function(e){var t=m.useContext(v.E_),n=t.getPrefixCls,r=t.direction,a=e.prefixCls,l=e.className,o=void 0===l?"":l,i=e.maxCount,s=e.maxStyle,u=n("avatar-group",a),f=d()(u,c()({},"".concat(u,"-rtl"),"rtl"===r),o),p=e.children,y=e.maxPopoverPlacement,E=void 0===y?"top":y,h=(0,_.Z)(p).map((function(e,t){return(0,S.Tm)(e,{key:"avatar-key-".concat(t)})})),g=h.length;if(i&&i<g){var b=h.slice(0,i),C=h.slice(i,g);return b.push(m.createElement(A,{key:"avatar-popover-key",content:C,trigger:"hover",placement:E,overlayClassName:"".concat(u,"-popover")},m.createElement(x,{style:s},"+".concat(g-i)))),m.createElement("div",{className:f,style:e.style},b)}return m.createElement("div",{className:f,style:e.style},p)},N=x;N.Group=j;var q=N},16306:function(e,t,n){"use strict";var r=n(67154),a=n.n(r),l=n(59713),c=n.n(l),o=n(67294),i=n(75900),s=n.n(i),u=n(82525),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.Z=function(e){return o.createElement(u.C,null,(function(t){var n,r=t.getPrefixCls,l=t.direction,i=e.prefixCls,u=e.type,f=void 0===u?"horizontal":u,d=e.orientation,p=void 0===d?"center":d,v=e.className,y=e.children,E=e.dashed,h=e.plain,g=m(e,["prefixCls","type","orientation","className","children","dashed","plain"]),b=r("divider",i),C=p.length>0?"-".concat(p):p,O=!!y,x=s()(b,"".concat(b,"-").concat(f),(n={},c()(n,"".concat(b,"-with-text"),O),c()(n,"".concat(b,"-with-text").concat(C),O),c()(n,"".concat(b,"-dashed"),!!E),c()(n,"".concat(b,"-plain"),!!h),c()(n,"".concat(b,"-rtl"),"rtl"===l),n),v);return o.createElement("div",a()({className:x},g,{role:"separator"}),y&&o.createElement("span",{className:"".concat(b,"-inner-text")},y))}))}},21565:function(e,t,n){"use strict";n.d(t,{S:function(){return p},l:function(){return v}});var r=n(67294),a=n(79410),l=n(93299),c=n(60566),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]},name:"star",theme:"outlined"},i=n(12112),s=function(e,t){return r.createElement(i.Z,Object.assign({},e,{ref:t,icon:o}))};s.displayName="StarOutlined";var u=r.forwardRef(s),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 00-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 00471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0142.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"}}]},name:"like",theme:"outlined"},f=function(e,t){return r.createElement(i.Z,Object.assign({},e,{ref:t,icon:m}))};f.displayName="LikeOutlined";var d=r.forwardRef(f),p=function(e){var t=e.listData,n=e.randerItem,l=e.header,c=e.setSelectedItem,o=e.selectButtonOnClick,i=e.setVisible,s=e.visible;return r.createElement(a.ZP,{itemLayout:"vertical",size:"large",header:r.createElement("div",null,l),footer:null,bordered:!0,dataSource:t,renderItem:function(e){return n(e,c,o,i,s)}})};p.defaultProps={listData:[],randerItem:function(e){return r.createElement("div",null,e)},header:"列表标题",setSelectedItem:function(e){return console.log(e)},selectButtonOnClick:function(e){return console.log(e)},setVisible:function(e){return console.log(e)},visible:0};var v=function(e,t){return void 0===e&&(e={id:1,actions:[r.createElement(l.Z,{icon:r.createElement(u,null),onClick:function(){return console.log("关注1024")}},"1024"),r.createElement(l.Z,{icon:r.createElement(d,null),onClick:function(){return console.log("点赞1024")}},"1024")],img:"",avatar:"",title:"List.Item model",description:"说明文字",content:"内容文字"}),void 0===t&&(t=260),r.createElement(a.ZP.Item,{key:e.id.toString(),actions:e.actions,extra:e.img.length>0?r.createElement("img",{width:t,alt:"image",src:e.img}):null},r.createElement(a.ZP.Item.Meta,{avatar:e.avatar.length>0?r.createElement(c.C,{src:e.avatar}):null,title:e.title,description:e.description}),e.content)}},26111:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var r=n(67294),a=n(93696),l=n(93751),c=n(23148),o=n(56452),i=n(77371),s=n(90579),u=n(93299),m=n(24856),f={add_time:"下单时间"},d=function(e){var t=e.paramsObj,n=void 0===t?{}:t,a=(0,r.useState)(""),l=a[0],c=a[1];(0,r.useEffect)((function(){o()}),[n]);var o=function(){var e="";Object.keys(n).forEach((function(t){if(Object.keys(f).includes(t)){var r=" "+f[t]+" = "+n[t]+";";e+=r}})),e.length>2?c(e="查询条件:"+e):(console.log("查询条件为空"),c(""))};return r.createElement("div",{style:{height:"auto",width:"100%",padding:"0.1rem 0.2rem"}},l.length>2?r.createElement("h6",null,l):null)},p=n(27188),v=n(37011),y=n(47696),E=p.Z.Option,h=["YYYY-MM-DD","YYYY-MM"],g=n(73964),b=function(e,t){var n=h[e];return t.format(n)},C=function(e){var t=e.visible,n=e.setVisible,a=e.queryHandle,l=(0,r.useState)(0),c=l[0],o=l[1],s=(0,r.useState)(g().format("YYYY-MM-DD")),m=s[0],f=s[1];(0,r.useEffect)((function(){f(b(c,g(m)))}),[c]);var d=function(e){f(b(c,e))};return r.createElement(r.Fragment,null,r.createElement(v.Z,{title:"请选择销售日期",height:"300px",placement:"top",onClose:function(){return n(0)},visible:2===t,bodyStyle:{paddingBottom:20},footer:r.createElement(u.Z,{style:{margin:"0 2rem"},type:"primary",onClick:function(){console.log(m),a({add_time:m}),n(0)}},"提交")},r.createElement(i.Z,{direction:"vertical"},r.createElement(p.Z,{defaultValue:0,style:{width:120},onChange:function(e){o(e)}},r.createElement(E,{value:0},"按日统计"),r.createElement(E,{value:1},"按月统计")),0===c?r.createElement(y.Z,{value:g(m),size:"large",onSelect:d}):r.createElement(y.Z,{value:g(m),size:"large",onSelect:d,picker:"month"}))))};C.defaultProps={visible:!1,setVisible:function(e){console.log(e)},queryHandle:function(e){console.log(e)}};var O=C,x=n(73964),_=n.n(x),S=n(21565),w=n(48428),Z=w.Z.salePlatforms,P=w.Z.payMethods,k=function(e){var t=e.purchaseRecords,n=e.queryFactor,a=(0,r.useState)(""),l=a[0],c=a[1];(0,r.useEffect)((function(){var e=n.add_time?n.add_time:"";c(e)}),[n]);return r.createElement("div",null,r.createElement(S.S,{header:r.createElement("h4",{style:{color:"gray"}},l," 订单统计列表"),listData:t,randerItem:function(e){var t="",n=e.customer_info;n&&"object"==typeof n&&Object.keys(n).includes("name")&&Object.keys(n).includes("wx_nick_name")&&(t=n.name,t=n.wx_nick_name.length>0?t+"("+n.wx_nick_name+")":t);var a="R:"+e.diopter_r+"; L:"+e.diopter_l,l="R:; L:"===a?null:r.createElement("p",null,a),c={id:e.id,actions:[],img:"",avatar:"",title:"订单ID: "+e.id+";  顾客: "+t,description:"下单时间: "+_()(e.add_time).format("YYYY-MM-DD HH:mm:ss"),content:r.createElement("div",null,r.createElement("p",null,"商品:",e.product_title),l,r.createElement("p",null,"交易平台: ",Z[e.sale_platform],"; 商品数量: ",e.products_quantity),r.createElement("p",null,"订单金额: ",e.purchase_amount,"; 付款方式: ",P[e.pay_platform]),r.createElement("p",null,"成本: ",e.products_cost))};return(0,S.l)(c,10)}}))};k.defaultProps={purchaseRecords:[],queryFactor:{}};var A=k,j=n(94789),N=n(16306),q=function(e){var t=e.visible,n=e.setVisible,a=e.purchaseRecords,l=e.queryFactor,c=(0,r.useState)({totalAmount:0,totalCostAmount:0,recordsCounts:0,taobaoAmount:0,wxAmount:0,alipayAmount:0,cardAmount:0,moneyAmount:0,unknownPayMethodAmount:0}),o=c[0],i=c[1],s=(0,r.useState)(""),u=s[0],m=s[1];return(0,r.useEffect)((function(){1===t&&function(){for(var e=0,t=0,n=0,r=0,l=0,c=0,o=0,s=0,u=0,m=0;m<a.length;m++){var f=a[m];n+=1,t+=f.products_cost?parseFloat(f.products_cost):0;var d=f.purchase_amount?parseFloat(f.purchase_amount):0;e+=d,r=2===f.sale_platform?r+d:r,l=1===f.pay_platform?l+d:l,c=2===f.pay_platform?c+d:c,s=3===f.pay_platform?s+d:s,o=4===f.pay_platform?o+d:o,u=0===f.pay_platform?u+d:u}i({totalAmount:e,totalCostAmount:t,recordsCounts:n,taobaoAmount:r,wxAmount:l,alipayAmount:c,cardAmount:s,moneyAmount:o,unknownPayMethodAmount:u})}()}),[t]),(0,r.useEffect)((function(){var e=l.add_time?l.add_time:"";m(e)}),[l]),r.createElement(j.Z,{visible:1===t,title:u+" 销售汇总",closable:!1,onOk:function(){return n(0)},onCancel:function(){return n(0)},width:"80%"},r.createElement("p",null,"总销售金额: ",o.totalAmount),r.createElement("p",null,"总成本: ",o.totalCostAmount),r.createElement("p",null,"订单总数量: ",o.recordsCounts),r.createElement(N.Z,null),r.createElement("p",null,"淘宝订单总金额: ",o.taobaoAmount),r.createElement(N.Z,null),r.createElement("p",null,"微信收款总金额: ",o.wxAmount),r.createElement("p",null,"支付宝收款总金额: ",o.alipayAmount),r.createElement("p",null,"刷卡总金额: ",o.cardAmount),r.createElement("p",null,"现金总金额: ",o.moneyAmount),r.createElement("p",null,"未知收款方式总金额: ",o.unknownPayMethodAmount))};q.defaultProps={visible:0,setVisible:function(e){return console.log(e)},purchaseRecords:[],queryFactor:{}};var z=q,M=n(33328),R=["records-admin/v1/purchaserecordstatistic"],D=function(e){var t=e.requestCount,n=e.reqParams,a=e.responseDataHandle,l=R[0];return r.createElement(M.Z,{responseDataHandle:a,api:l,method:"get",reqParams:n,reqObject:{},requestCount:t})};D.defaultProps={requestCount:0,reqParams:{},responseDataHandle:function(e){console.log(e)}};var Y=function(){var e=(0,r.useState)([]),t=e[0],n=e[1],a=(0,r.useState)({add_time:"2020-10"}),l=a[0],f=a[1],p=(0,r.useState)(0),v=p[0],y=p[1],E=(0,r.useState)(0),h=E[0],g=E[1],b=(0,r.useState)(!1),C=b[0],x=b[1];(0,r.useEffect)((function(){C&&(console.log("requesting..."),x(!1),g(h+1))}),[C]);return r.createElement("div",null,r.createElement(c.Z,null,r.createElement(o.Z,{span:14},r.createElement(i.Z,{size:"middle"},r.createElement("h5",null,"Purchase Records Statistic(订单统计)"),r.createElement(s.Z,{title:"选择日期"},r.createElement(u.Z,{onClick:function(){return y(2)},shape:"circle",icon:r.createElement(m.Z,null)})))),r.createElement(o.Z,{span:10},r.createElement("div",{style:{width:"100%",height:"auto"}},r.createElement(u.Z,{style:{float:"right"},type:"link",onClick:function(){return y(1)}},"汇总")))),r.createElement(c.Z,null,r.createElement(o.Z,{span:24},r.createElement(d,{paramsObj:l}))),r.createElement(O,{visible:v,setVisible:y,queryHandle:function(e){f(Object.assign({},e)),x(!0),console.log("search...")}}),r.createElement(D,{requestCount:h,reqParams:l,responseDataHandle:function(e){n(e.results)}}),r.createElement(A,{purchaseRecords:t,queryFactor:l}),r.createElement(z,{visible:v,setVisible:y,purchaseRecords:t,queryFactor:l}))},H=function(){return r.createElement(a.Z,null,r.createElement(l.Z,{title:"StatisticPurchaseRecords"}),r.createElement(Y,null))}}}]);
//# sourceMappingURL=component---src-pages-statisticrecords-js-6b43699e2ac0d1c70a86.js.map
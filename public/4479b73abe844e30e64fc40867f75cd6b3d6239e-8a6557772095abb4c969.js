(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"5bA4":function(e,t,n){"use strict";n("91GP");var a=n("q1tI"),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},r=n("6VBw"),l=function(e,t){return a.createElement(r.a,Object.assign({},e,{ref:t,icon:o}))};l.displayName="LeftOutlined";t.a=a.forwardRef(l)},"H+CO":function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));n("a1Th"),n("Btvt");var a=n("q1tI"),o=n.n(a),r=n("VXEj"),l=n("2/Rp"),c=n("Tckk"),s=(n("91GP"),{icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]},name:"star",theme:"outlined"}),i=n("6VBw"),u=function(e,t){return a.createElement(i.a,Object.assign({},e,{ref:t,icon:s}))};u.displayName="StarOutlined";var d=a.forwardRef(u),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 00-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 00471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0142.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"}}]},name:"like",theme:"outlined"},f=function(e,t){return a.createElement(i.a,Object.assign({},e,{ref:t,icon:m}))};f.displayName="LikeOutlined";var p=a.forwardRef(f),b=function(e){var t=e.listData,n=e.randerItem,a=e.header,l=e.setSelectedItem,c=e.selectButtonOnClick,s=e.setVisible,i=e.visible;return o.a.createElement(r.b,{itemLayout:"vertical",size:"large",header:o.a.createElement("div",null,a),footer:null,bordered:!0,dataSource:t,renderItem:function(e){return n(e,l,c,s,i)}})};b.defaultProps={listData:[],randerItem:function(e){return o.a.createElement("div",null,e)},header:"列表标题",setSelectedItem:function(e){return console.log(e)},selectButtonOnClick:function(e){return console.log(e)},setVisible:function(e){return console.log(e)},visible:0};var g=function(e,t){return void 0===e&&(e={id:1,actions:[o.a.createElement(l.a,{icon:o.a.createElement(d,null),onClick:function(){return console.log("关注1024")}},"1024"),o.a.createElement(l.a,{icon:o.a.createElement(p,null),onClick:function(){return console.log("点赞1024")}},"1024")],img:"",avatar:"",title:"List.Item model",description:"说明文字",content:"内容文字"}),void 0===t&&(t=260),o.a.createElement(r.b.Item,{key:e.id.toString(),actions:e.actions,extra:e.img.length>0?o.a.createElement("img",{width:t,alt:"image",src:e.img}):null},o.a.createElement(r.b.Item.Meta,{avatar:e.avatar.length>0?o.a.createElement(c.a,{src:e.avatar}):null,title:e.title,description:e.description}),e.content)}},"ID/q":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("8+KV");var a=n("cDf5"),o=n.n(a);function r(e,t){"function"==typeof e?e(t):"object"===o()(e)&&e&&"current"in e&&(e.current=t)}function l(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach((function(t){r(t,e)}))}}},PArb:function(e,t,n){"use strict";n("ioFf"),n("V+eJ");var a=n("pVnL"),o=n.n(a),r=n("lSNA"),l=n.n(r),c=n("q1tI"),s=n("TSYQ"),i=n.n(s),u=n("H84U"),d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};t.a=function(e){return c.createElement(u.a,null,(function(t){var n,a=t.getPrefixCls,r=t.direction,s=e.prefixCls,u=e.type,m=void 0===u?"horizontal":u,f=e.orientation,p=void 0===f?"center":f,b=e.className,g=e.children,y=e.dashed,O=e.plain,j=d(e,["prefixCls","type","orientation","className","children","dashed","plain"]),v=a("divider",s),h=p.length>0?"-".concat(p):p,E=!!g,C=i()(v,"".concat(v,"-").concat(m),(n={},l()(n,"".concat(v,"-with-text"),E),l()(n,"".concat(v,"-with-text").concat(h),E),l()(n,"".concat(v,"-dashed"),!!y),l()(n,"".concat(v,"-plain"),!!O),l()(n,"".concat(v,"-rtl"),"rtl"===r),n),b);return c.createElement("div",o()({className:C},j,{role:"separator"}),g&&c.createElement("span",{className:"".concat(v,"-inner-text")},g))}))}},Tckk:function(e,t,n){"use strict";n("dRSK"),n("ioFf"),n("V+eJ");var a=n("pVnL"),o=n.n(a),r=n("lSNA"),l=n.n(r),c=n("cDf5"),s=n.n(c),i=n("J4zp"),u=n.n(i),d=n("q1tI"),m=n("TSYQ"),f=n.n(m),p=n("t23M"),b=n("H84U"),g=n("uaoM"),y=n("ID/q"),O=n("ACnJ"),j=n("5OYt"),v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},h=function(e,t){var n,a,r=d.useState(1),c=u()(r,2),i=c[0],m=c[1],h=d.useState(!1),E=u()(h,2),C=E[0],S=E[1],w=d.useState(!0),_=u()(w,2),K=_[0],k=_[1],P=d.useRef(),H=d.useRef(),L=Object(y.a)(t,P),q=d.useContext(b.b).getPrefixCls,x=function(){if(H.current&&P.current){var t=H.current.offsetWidth,n=P.current.offsetWidth;if(0!==t&&0!==n){var a=e.gap,o=void 0===a?4:a;2*o<n&&m(n-2*o<t?(n-2*o)/t:1)}}};d.useEffect((function(){S(!0)}),[]),d.useEffect((function(){k(!0),m(1)}),[e.src]),d.useEffect((function(){x()}),[e.gap]);var I=e.prefixCls,F=e.shape,V=e.size,R=e.src,D=e.srcSet,N=e.icon,B=e.className,z=e.alt,A=e.draggable,M=e.children,T=v(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children"]),G=Object(j.a)(),W=d.useMemo((function(){if("object"!==s()(V))return{};var e=O.b.find((function(e){return G[e]})),t=V[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:N?t/2:18}:{}}),[G,V]);Object(g.a)(!("string"==typeof N&&N.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(N,"` at https://ant.design/components/icon"));var J,U=q("avatar",I),Y=f()((n={},l()(n,"".concat(U,"-lg"),"large"===V),l()(n,"".concat(U,"-sm"),"small"===V),n)),X=f()(U,Y,(a={},l()(a,"".concat(U,"-").concat(F),F),l()(a,"".concat(U,"-image"),R&&K),l()(a,"".concat(U,"-icon"),N),a),B),Q="number"==typeof V?{width:V,height:V,lineHeight:"".concat(V,"px"),fontSize:N?V/2:18}:{};if(R&&K)J=d.createElement("img",{src:R,draggable:A,srcSet:D,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&k(!1)},alt:z});else if(N)J=N;else if(C||1!==i){var Z="scale(".concat(i,") translateX(-50%)"),$={msTransform:Z,WebkitTransform:Z,transform:Z},ee="number"==typeof V?{lineHeight:"".concat(V,"px")}:{};J=d.createElement(p.a,{onResize:x},d.createElement("span",{className:"".concat(U,"-string"),ref:function(e){H.current=e},style:o()(o()({},ee),$)},M))}else J=d.createElement("span",{className:"".concat(U,"-string"),style:{opacity:0},ref:function(e){H.current=e}},M);return delete T.onError,delete T.gap,d.createElement("span",o()({},T,{style:o()(o()(o()({},Q),W),T.style),className:X,ref:L}),J)},E=d.forwardRef(h);E.displayName="Avatar",E.defaultProps={shape:"circle",size:"default"};var C=E,S=(n("bWfx"),n("axMd")),w=n("0n0R"),_=n("3S7+"),K=function(e){return e?"function"==typeof e?e():e:null},k=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},P=d.forwardRef((function(e,t){var n=e.prefixCls,a=e.title,r=e.content,l=k(e,["prefixCls","title","content"]),c=(0,d.useContext(b.b).getPrefixCls)("popover",n);return d.createElement(_.a,o()({},l,{prefixCls:c,ref:t,overlay:function(e){return d.createElement(d.Fragment,null,a&&d.createElement("div",{className:"".concat(e,"-title")},K(a)),d.createElement("div",{className:"".concat(e,"-inner-content")},K(r)))}(c)}))}));P.displayName="Popover",P.defaultProps={placement:"top",transitionName:"zoom-big",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};var H=P,L=function(e){var t=d.useContext(b.b),n=t.getPrefixCls,a=t.direction,o=e.prefixCls,r=e.className,c=void 0===r?"":r,s=e.maxCount,i=e.maxStyle,u=n("avatar-group",o),m=f()(u,l()({},"".concat(u,"-rtl"),"rtl"===a),c),p=e.children,g=e.maxPopoverPlacement,y=void 0===g?"top":g,O=Object(S.a)(p).map((function(e,t){return Object(w.a)(e,{key:"avatar-key-".concat(t)})})),j=O.length;if(s&&s<j){var v=O.slice(0,s),h=O.slice(s,j);return v.push(d.createElement(H,{key:"avatar-popover-key",content:h,trigger:"hover",placement:y,overlayClassName:"".concat(u,"-popover")},d.createElement(C,{style:i},"+".concat(j-s)))),d.createElement("div",{className:m,style:e.style},v)}return d.createElement("div",{className:m,style:e.style},p)},q=C;q.Group=L;t.a=q},e1dp:function(e,t,n){"use strict";n("f3/d");var a=n("q1tI"),o=n.n(a),r=n("tsqr"),l=n("BMrR"),c=n("kPKH"),s=n("zeV3"),i=n("3S7+"),u=n("2/Rp"),d=n("5bA4"),m=n("rLCj"),f=n("Wbzz"),p=(n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Z2Ku"),n("L9s1"),n("91GP"),n("kLXV")),b=n("PArb"),g=n("g/of"),y=(n("VRzm"),n("Sm+g")),O=n("kO4H"),j=["goods-admin/v1/goodscolorprice","goods-admin/v1/postgoodsstock"],v=function(e){var t=e.requestCount,n=e.reqParams,a=e.responseDataHandle,r=j[0];return o.a.createElement(y.a,{responseDataHandle:a,api:r,method:"get",reqParams:n,reqObject:{},requestCount:t})};v.defaultProps={requestCount:0,reqParams:{},responseDataHandle:function(e){console.log(e)}};var h=function(e){var t=e.requestCount,n=e.reqObject,a=e.responseDataHandle,r=[].concat(j)[0];return o.a.createElement(y.a,{responseDataHandle:a,api:r,method:"post",reqParams:{},reqObject:n,requestCount:t})};h.defaultProps={requestCount:0,reqObject:{},responseDataHandle:function(e){console.log(e)}};var E=function(e){var t=e.requestCount,n=e.reqObject,a=e.responseDataHandle,r=e.id,l=[].concat(j)[0]+"/"+r;return o.a.createElement(y.a,{responseDataHandle:a,api:l,method:"put",reqParams:{},reqObject:n,requestCount:t})};E.defaultProps={requestCount:0,reqObject:{},responseDataHandle:function(e){console.log(e)},id:0};var C=function(e){var t=e.requestCount,n=e.responseDataHandle,a=e.id,r=[].concat(j)[0]+"/"+a;return o.a.createElement(y.a,{responseDataHandle:n,api:r,method:"delete",reqParams:{},reqObject:{},requestCount:t})};C.defaultProps={requestCount:0,responseDataHandle:function(e){console.log(e)},id:0};var S=n("p8V/"),w=n("H+CO"),_=["id","goods","color_name","stock_num","retail_price","group_price","agent_price","cost_price","color_pic","handle_staff_id","add_time","update_time","explains"],K=["id","goods","color_pic","handle_staff_id","add_time","update_time"],k=["id","color_pic","handle_staff_id"],P={id:"ID",goods:"商品ID",color_name:"颜色名称",stock_num:"库存数量",retail_price:"零售价格",group_price:"团购价格",agent_price:"代理价格",cost_price:"成本价",color_pic_url:"图片URL",color_pic:"图片cos",handle_staff_id:"操作员ID",add_time:"创建时间",update_time:"更新时间",explains:"说明"},H={},L={id:0,goods:0,color_name:"",stock_num:0,retail_price:0,group_price:0,agent_price:0,cost_price:0,color_pic_url:"",color_pic:"",handle_staff_id:0,add_time:"",update_time:"",explains:""},q=function(e,t,n,a){var r=[o.a.createElement(u.a,{onClick:function(){n(e),t(2)},type:"link"},"详情")];return a&&r.push(o.a.createElement(u.a,{onClick:function(){a(e),t(0)},type:"link"},"选择")),r},x=function(e,t,n,a,r){var l=o.a.createElement("div",null,o.a.createElement("p",null,"库存数量: "+e.stock_num),o.a.createElement("p",null,"零售价: "+e.retail_price),o.a.createElement("p",null,"团购价: "+e.group_price),o.a.createElement("p",null,"代理价: "+e.agent_price),o.a.createElement("p",null,"成本: "+e.cost_price)),c={id:e.id,actions:q(e,a,t,n),img:e.property_pic_url,avatar:"",title:"颜色属性: "+e.color_name,description:"说明: "+e.explains,content:l};return Object(w.b)(c,120)},I=function(e){var t=e.visible,n=e.setVisible,l=e.reloadListCount,c=e.setReloadListCount,s=e.goodsId,i=Object(a.useRef)({}),u=Object(a.useRef)({createCount:0}),d=Object(a.useRef)({}),m=Object(a.useState)(0),f=m[0],y=m[1],O=Object(a.useState)(0),j=O[0],v=O[1],E=Object(a.useRef)({});Object(a.useEffect)((function(){var e=Object.assign({},L);e.goods=s,d.current=e,y(f+1)}),[s]);var C=function(){i.current={},u.current={createCount:u.current.createCount+1},y(f+1),n(!1)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{visible:t,title:"ColorPrice 新建",closable:!1,footer:null},o.a.createElement("div",{style:{width:"100%",height:"auto",textAlign:"center"}},o.a.createElement(g.b,{oldObj:u.current,imageKeyName:"property_pic",onChange:function(e){i.current=Object.assign({},e)}})),o.a.createElement(b.a,null),o.a.createElement(S.a,{columns:_,disabledKeys:K,notShowKeys:k,formKeyLabelObj:P,formKeySelectComponentsObj:H,onFinish:function(e){var t=Object.assign({},e,i.current);E.current=t,v(j+1)},cancelHandle:C,showDeleteButton:!1,formInitialObj:d.current,initFormCount:f}),o.a.createElement(h,{requestCount:j,reqObject:E.current,responseDataHandle:function(e){console.log(e),Object.keys(e).includes("code")&&1e3===e.code?(C(),c(l+1)):r.b.error("网络错误...")}})))};I.defaultProps={visible:!1,setVisible:function(e){return console.log(e)},reloadListCount:0,setReloadListCount:function(e){return console.log(e)},goodsId:0};var F=I,V=function(e){var t=e.visible,n=e.setVisible,l=e.oldObj,c=e.reloadListCount,s=e.setReloadListCount,i=Object(a.useRef)({}),u=Object(a.useState)({}),d=u[0],m=u[1],f=Object(a.useState)(0),y=f[0],O=f[1],j=Object(a.useState)(0),v=j[0],h=j[1],w=Object(a.useRef)({}),L=Object(a.useState)(0),q=L[0],x=L[1];Object(a.useEffect)((function(){I()}),[t,l]);var I=function(){O(y+1),m(Object.assign({},l));for(var e=[],t=1;t<10;t++){var n="home_pic"+t,a=n+"_url",o=l[n],r=l[a];"string"==typeof o&&o.length>5&&e.push({cosNameKey:n,cosName:o,urlKey:a,url:r})}};return o.a.createElement(p.a,{visible:2===t,title:"ColorPrice",closable:!1,footer:null},o.a.createElement("div",{style:{width:"100%",height:"auto",textAlign:"center"}},o.a.createElement(g.b,{maxImagesNum:1,imageKeyName:"property_pic",oldObj:l,onChange:function(e){i.current=e,console.log(i.current)}})),o.a.createElement(b.a,null),o.a.createElement(S.a,{columns:_,disabledKeys:K,notShowKeys:k,formKeyLabelObj:P,formKeySelectComponentsObj:H,onFinish:function(e){var t=Object.assign({},e,i.current);console.log(t),w.current=t,h(v+1)},cancelHandle:function(){return n(!1)},showDeleteButton:!0,deleteHandle:function(){x(q+1),s(c+1)},updateFormObj:d,formInitialObj:{},initFormCount:y}),o.a.createElement(E,{requestCount:v,reqObject:w.current,responseDataHandle:function(e){Object.keys(e).includes("code")&&1e3===e.code?(r.b.success("修改成功"),s(c+1),n(0)):r.b.error("网络错误...")},id:d.id}),o.a.createElement(C,{requestCount:q,responseDataHandle:function(e){return n(!1)},id:d.id}))};V.defaultProps={visible:!1,setVisible:function(e){return console.log(e)},oldObj:{}};var R=V,D=["goods-admin/v1/goods"],N=function(e){var t=e.reloadListCount,n=e.setReloadListCount,r=e.requestParams,l=e.selectHandle,c=Object(a.useState)(0),s=c[0],i=c[1],u=Object(a.useState)(!0),d=u[0],m=u[1],f=Object(a.useState)(!1),p=f[0],b=f[1],g=Object(a.useState)(!1),y=g[0],j=g[1],h=Object(a.useRef)({page:1}),E=Object(a.useState)([]),C=E[0],S=E[1],_=Object(a.useState)(0),K=_[0],k=_[1],P=Object(a.useState)({}),H=P[0],L=P[1];Object(a.useEffect)((function(){S([]),b(!1),m(!0),h.current=Object.assign({},r,{page:r.page+1}),j(!0)}),[t]),Object(a.useEffect)((function(){d&&!p&&y&&(j(!1),q())}),[d,p,y]);var q=function(){r.goods&&r.goods>0&&d&&!p?(m(!1),k(K+1),b(!0)):console.log("Error state: hasMore is ",d,", loading is ",p)},I=function(e,t){void 0===t&&(t=!0);for(var n=0,a=0;a<e.length;a++){var o=e[a],r=o.retail_price?o.retail_price:0;0===n&&(n=r),t?n>r&&r>0&&(n=r):n<r&&(n=r)}return n};return o.a.createElement("div",null,o.a.createElement(v,{requestCount:K,reqParams:h.current,responseDataHandle:function(e){if(b(!1),Object.keys(e).includes("code")&&1e3===e.code&&Object.keys(e).includes("results")){S(C.concat(e.results)),m(function(e){return!!(Object.keys(e).includes("next")&&"string"==typeof e.next&&e.next.length>5)}(e));var t=e.results;if(t.length>0){console.log(t);var n=I(t),a=I(t,!1),o=function(e){for(var t=0,n=0;n<e.length;n++){var a=e[n];t+=a.stock_num>0?a.stock_num:0}return t}(t);console.log(n,a,t[0].goods),function(e,t,n,a){void 0===a&&(a=0);var o=D[0]+"/"+a,r={goods_number:n,min_retail_price:e,retail_price:t};return new Promise((function(e,t){a>0?Object(O.a)(o,"put",{},r).then((function(t){e(t)})).catch((function(e){t(e)})):t("Argument goodsId must..., ",a)}))}(n,a,o,t[0].goods).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}}else console.log("Error: get data...")}}),o.a.createElement(w.a,{header:"ColorPrice",listData:C,visible:s,setVisible:i,randerItem:x,setSelectedItem:L,selectButtonOnClick:l}),o.a.createElement(R,{visible:s,setVisible:i,oldObj:H,reloadListCount:t,setReloadListCount:n}))};N.defaultProps={reloadListCount:0,setReloadListCount:function(e){console.log(e)},requestParams:{page:0},selectHandle:null};var B=N;t.a=function(e){var t=e.location,n=Object(a.useState)(0),p=n[0],b=n[1],g=Object(a.useRef)({page:0}),y=Object(a.useState)(""),O=y[0],j=y[1],v=Object(a.useState)(0),h=v[0],E=v[1],C=Object(a.useState)(!1),S=C[0],w=C[1],_=Object(a.useState)(null),K=_[0],k=_[1],P=Object(a.useState)(null),H=P[0],L=(P[1],function(){p&&p>0?(g.current={page:0,goods:p},E(h+1),console.log("init search 00 ...")):console.log("No goods...")});return Object(a.useEffect)((function(){try{console.log(t.state.goodsobj),b(t.state.goodsobj.id),j(t.state.goodsobj.name),k(t.state.selectHandle?t.state.selectHandle:null),console.log(t.state)}catch(e){console.log(e),r.b.error("Error: 请重新选择产品...")}}),[t.state]),Object(a.useEffect)((function(){L()}),[p]),o.a.createElement("div",null,o.a.createElement(l.a,null,o.a.createElement(c.a,{span:14},o.a.createElement("div",{style:{width:"100%",height:"auto",padding:"0.1rem 0.5rem"}},o.a.createElement(s.b,{size:"large"},H?null:o.a.createElement(i.a,{title:"返回"},o.a.createElement(f.Link,{to:"/wxgoods"},o.a.createElement(d.a,null))),o.a.createElement("h4",null,"ColorPrice"),o.a.createElement(i.a,{title:"刷新"},o.a.createElement(u.a,{onClick:L,shape:"circle",icon:o.a.createElement(m.a,null)}))))),o.a.createElement(c.a,{span:10},o.a.createElement("div",{style:{width:"100%",height:"auto"}},o.a.createElement(u.a,{style:{float:"right"},type:"link",onClick:function(){return w(!0)}},"新建")))),o.a.createElement(l.a,{style:{margin:"1rem 0.2rem"}},o.a.createElement("h6",null,"商品标题: ",O)),o.a.createElement(B,{reloadListCount:h,setReloadListCount:E,requestParams:g.current,selectHandle:K}),o.a.createElement(F,{visible:S,setVisible:w,reloadListCount:h,setReloadListCount:E,goodsId:p}))}},"p8V/":function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return y}));n("a1Th"),n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Z2Ku"),n("L9s1");var a=n("q1tI"),o=n.n(a),r=n("Vl3Y"),l=n("5rEg"),c=n("2/Rp"),s=n("zeV3"),i=n("7BUj").a.formCommonStyle,u=i.layoutForm,d=i.formItemLayout,m=i.tailFormItemLayout,f={width:260},p=function(e){var t=e.formKey,n=e.formKeyLabelObj,a=e.disabledKeys,c=e.updateFormObj,s=e.rulesObj,i=e.formKeySelectComponentsObj,u=e.passwordKeys,m=e.showLabelName,p=void 0===m||m,b=a.includes(t),g=n[t],y=c[t];return o.a.createElement(r.a.Item,Object.assign({},d,{name:t,label:p?g:"",initialValue:y,rules:s[t]?s[t]:[]}),Object.keys(i).includes(t)?i[t]:u.includes(t)?o.a.createElement(l.a.Password,{style:f}):o.a.createElement(l.a,{style:f,placeholder:"请输入 "+g,disabled:b}))},b=function(e){var t=e.formKey,n=e.formKeyLabelObj,a=e.disabledKeys,l=e.updateFormObj,s=e.rulesObj,i=e.formKeySelectComponentsObj,u=e.passwordKeys,m=e.formKeysItemButtonObj,f=m[t].buttonTips,b=n[t];return o.a.createElement(r.a.Item,Object.assign({},d,{label:b}),o.a.createElement(p,{formKey:t,formKeyLabelObj:n,disabledKeys:a,updateFormObj:l,rulesObj:s,formKeySelectComponentsObj:i,passwordKeys:u,showLabelName:!1}),o.a.createElement(c.a,{type:"link",onClick:function(e){console.log(e);try{m[t].clickMethod()}catch(n){console.log(n)}}},f))},g=function(e){var t=e.columns,n=e.disabledKeys,l=e.notShowKeys,i=e.formKeyLabelObj,d=e.formKeySelectComponentsObj,f=e.formKeysItemButtonObj,g=e.onFinish,y=e.cancelHandle,O=e.deleteHandle,j=e.showDeleteButton,v=e.updateFormObj,h=e.formInitialObj,E=e.initFormCount,C=e.rulesObj,S=e.passwordKeys,w=r.a.useForm()[0],_=Object(a.useState)(!1),K=_[0],k=_[1];Object(a.useEffect)((function(){w.setFieldsValue(v),k(!1)}),[v]),Object(a.useEffect)((function(){E>0&&(w.setFieldsValue(h),k(!1))}),[E]);return o.a.createElement(r.a,Object.assign({},u,{form:w,layout:"horizontal",onFinish:function(e){k(!0),g(e)},name:"adminer_info_edit"}),t.map((function(e,t){return l.includes(e)?null:Object.keys(f).includes(e)?o.a.createElement(b,{key:t.toString(),formKey:e,formKeyLabelObj:i,disabledKeys:n,updateFormObj:v,rulesObj:C,formKeySelectComponentsObj:d,passwordKeys:S,formKeysItemButtonObj:f}):o.a.createElement(p,{key:t.toString(),formKey:e,formKeyLabelObj:i,disabledKeys:n,updateFormObj:v,rulesObj:C,formKeySelectComponentsObj:d,passwordKeys:S})})),o.a.createElement(r.a.Item,m,o.a.createElement(s.b,null,o.a.createElement(c.a,{loading:K,disabled:K,type:"primary",htmlType:"submit"},"提交"),o.a.createElement(c.a,{onClick:y},"取消"),j?o.a.createElement(c.a,{loading:K,disabled:K,onClick:function(){k(!0),O()}},"删除"):null)))};g.defaultProps={columns:[],disabledKeys:[],notShowKeys:[],formKeyLabelObj:{},formKeySelectComponentsObj:{},formKeysItemButtonObj:{},onFinish:function(e){console.log(e)},cancelHandle:function(){console.log("Cancel Handle")},deleteHandle:function(){console.log("Delete Handle")},showDeleteButton:!1,updateFormObj:{},formInitialObj:{},initFormCount:0,rulesObj:{},passwordKeys:[],getFieldsValueHandle:function(e){return console.log(e)}};var y=function(e){var t=e.columns,n=e.disabledKeys,i=e.notShowKeys,u=e.formKeyLabelObj,d=e.formKeySelectComponentsObj,m=e.onFinish,p=e.onFinishButtonTips,b=e.cancelHandle,g=e.showCancelButton,y=e.deleteHandle,O=e.showDeleteButton,j=e.updateFormObj,v=e.formInitialObj,h=e.initFormCount,E=e.rulesObj,C=e.passwordKeys,S=(e.getFieldsValueHandle,r.a.useForm()[0]);Object(a.useEffect)((function(){S.setFieldsValue(j)}),[j]),Object(a.useEffect)((function(){S.setFieldsValue(v)}),[h]);var w=function(e){var t=e.formKey,a=n.includes(t),c=u[t],s=j[t];return o.a.createElement(r.a.Item,{name:t,initialValue:s,rules:E[t]?E[t]:[]},Object.keys(d).includes(t)?d[t]:C.includes(t)?o.a.createElement(l.a.Password,{style:f}):o.a.createElement(l.a,{style:f,placeholder:"请输入 "+c,disabled:a}))};return o.a.createElement(r.a,Object.assign({},{labelCol:{span:0},wrapperCol:{span:8}},{form:S,layout:"inline",onFinish:m,name:"adminer_info_edit"}),t.map((function(e,t){return i.includes(e)?null:o.a.createElement(w,{formKey:e,key:t.toString()})})),o.a.createElement(r.a.Item,null,o.a.createElement(s.b,null,o.a.createElement(c.a,{type:"primary",htmlType:"submit"},p),g?o.a.createElement(c.a,{onClick:b},"取消"):null,O?o.a.createElement(c.a,{onClick:y},"删除"):null)))};y.defaultProps={columns:[],disabledKeys:[],notShowKeys:[],formKeyLabelObj:{},formKeySelectComponentsObj:{},onFinish:function(e){console.log(e)},onFinishButtonTips:"确定/修改",cancelHandle:function(){console.log("Cancel Handle")},showCancelButton:!1,deleteHandle:function(){console.log("Delete Handle")},showDeleteButton:!1,updateFormObj:{},formInitialObj:{},initFormCount:0,rulesObj:{},passwordKeys:[],getFieldsValueHandle:function(e){return console.log(e)}}},rLCj:function(e,t,n){"use strict";n("91GP");var a=n("q1tI"),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"},r=n("6VBw"),l=function(e,t){return a.createElement(r.a,Object.assign({},e,{ref:t,icon:o}))};l.displayName="ReloadOutlined";t.a=a.forwardRef(l)}}]);
//# sourceMappingURL=4479b73abe844e30e64fc40867f75cd6b3d6239e-8a6557772095abb4c969.js.map
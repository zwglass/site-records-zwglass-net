(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{I5AO:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("q1tI"),a=n.n(o),l=function(e){var t=e.visible,n=Object(o.useState)(0),l=n[0],c=n[1];return Object(o.useEffect)((function(){if(t>0){var e="undefined"!=typeof document?document.documentElement.scrollTop||document.body.scrollTop:0;c(e)}var n;0===t&&(n=l,"undefined"!=typeof window&&setTimeout((function(){window.scrollTo({top:parseInt(n),behavior:"smooth"})}),500))}),[t]),a.a.createElement(a.a.Fragment,null)};l.defaultProps={visible:0}},afJD:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("q1tI"),a=n.n(o),l=n("kLXV"),c=n("2/Rp"),i=n("t9as"),r=function(e){var t=e.visible,n=e.setVisible,o=e.visibleNum,r=e.selectHandle;return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,{visible:t===o,title:"选择商品",closable:!1,footer:[a.a.createElement(c.a,{key:"back",onClick:function(){n(0)}},"取消")]},a.a.createElement("div",{style:{width:"100%",maxHeight:"40rem",overflow:"auto"}},a.a.createElement(i.a,{selectButtonOnClick:r}))))};r.defaultProps={visible:0,setVisible:function(e){return console.log(e)},visibleNum:1,selectHandle:function(e,t){return console.log(e,t)}}},ajnz:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("q1tI"),a=n.n(o),l=n("2/Rp"),c=n("8Skl"),i=function(e){var t,n=e.hasMore,o=e.onClick,i=e.loading;return a.a.createElement("div",{style:{width:"100%",height:"auto",margin:"1rem 1rem 1rem 0.1rem",textAlign:"center"}},n?a.a.createElement(l.a,{type:"default",shape:"round",icon:a.a.createElement(c.a,null),style:{width:"80%"},onClick:function(){if("undefined"!=typeof document){var e=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.clientHeight||document.body.clientHeight;o(),function(e,t){if("undefined"!=typeof document){document.addEventListener("scroll",(function n(){var o=document.documentElement.scrollTop||document.body.scrollTop;e+t<o&&(document.documentElement.scrollTop?(document.documentElement.scrollTo(0,e),document.removeEventListener("scroll",n,!1)):document.body.scrollTop&&(document.body.scrollTo(0,e),document.removeEventListener("scroll",n,!1)),console.log(o,o-t))}),!1)}}(e,t)}else o()},size:"large"},"更多结果"):(t=i?"加载中...":"没有更多了...",a.a.createElement("p",null,t)))};i.defaultProps={hasMore:!1,onClick:function(){return console.log("Load more button")},loading:!1}},fN96:function(e,t,n){var o=n("XKFU");o(o.S,"Number",{isInteger:n("nBIS")})},nBIS:function(e,t,n){var o=n("0/R4"),a=Math.floor;e.exports=function(e){return!o(e)&&isFinite(e)&&a(e)===e}},t9as:function(e,t,n){"use strict";n("91GP");var o=n("q1tI"),a=n.n(o),l=n("BMrR"),c=n("kPKH"),i=n("zeV3"),r=n("3S7+"),s=n("2/Rp"),u=n("rLCj"),d=n("l+S1"),m=(n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Z2Ku"),n("L9s1"),n("tsqr")),f=n("kLXV"),p=n("PArb"),b=n("g/of"),g=n("Sm+g"),_=(n("f3/d"),n("Wbzz"),n("wd/R")),h=n.n(_),v=n("vpoQ"),O=n("H+CO"),j=(n("VRzm"),n("kO4H")),E=["id","name","channel_id","categories","sort_order","freight_template_id","freight_type","goods_brief","goods_number","goods_unit","has_done","has_gallery","is_delete","is_index","is_new","is_on_sale","keywords","cost_price","min_cost_price","min_retail_price","retail_price","sell_volume","https_pic","goods_desc","list_pic","home_pic1","home_pic2","home_pic3","home_pic4","home_pic5","home_pic6","home_pic7","home_pic8","home_pic9","goods_video","handle_staff_id","add_time","update_time","explains"],y=["id","https_pic","goods_desc","list_pic","home_pic1","home_pic2","home_pic3","home_pic4","home_pic5","home_pic6","home_pic7","home_pic8","home_pic9","goods_video","handle_staff_id","add_time","update_time"],C=["categories","sort_order","freight_template_id","freight_type","goods_number","cost_price","min_cost_price","min_retail_price","retail_price","goods_video","handle_staff_id","is_index","is_delete","https_pic","goods_desc","list_pic","home_pic1","home_pic2","home_pic3","home_pic4","home_pic5","home_pic6","home_pic7","home_pic8","home_pic9","add_time","update_time"],k={id:"ID",name:"品名",channel_id:"频道",categories:"分类",sort_order:"排序顺序",freight_template_id:"快递模版ID",freight_type:"快递类别",goods_brief:"商品简介",goods_number:"商品数量",goods_unit:"单位",has_done:"有现货",has_gallery:"已推广",is_delete:"已下架",is_index:"在序列",is_new:"是新品",is_on_sale:"已上架",keywords:"关键词",cost_price:"成本价",min_cost_price:"最低成本价",min_retail_price:"最低零售价",retail_price:"零售价",sell_volume:"销售数量",https_pic:"链接图",goods_desc:"详情页",list_pic:"主图",home_pic1:"主图1",home_pic2:"主图2",home_pic3:"主图3",home_pic4:"主图4",home_pic5:"主图5",home_pic6:"主图6",home_pic7:"主图7",home_pic8:"主图8",home_pic9:"主图9",goods_video:"商品视频",handle_staff_id:"操作员ID",add_time:"创建时间",update_time:"更新时间",explains:"说明"},S=function(e){var t=e.value,n=void 0===t?"":t,l=e.onChange,c=void 0===l?function(e){return console.log(e)}:l,i=Object(o.useState)([]),r=i[0],s=i[1];return Object(o.useEffect)((function(){new Promise((function(e,t){Object(j.a)("channel/v1/channels","get",{},{}).then((function(t){e(t)})).catch((function(e){console.log(e),t(e)}))})).then((function(e){for(var t=e.results,n=[],o=0;o<t.length;o++){var a=t[o];n.push({value:a.id,label:a.name})}s(n)})).catch((function(e){console.log(e),s([])}))}),[]),a.a.createElement(v.a,{options:r,value:n,onChange:c})},q=function(e){var t=e.value,n=void 0===t?"":t,l=e.onChange,c=void 0===l?function(e){return console.log(e)}:l,i=Object(o.useState)([]),r=i[0],s=i[1];return Object(o.useEffect)((function(){new Promise((function(e,t){Object(j.a)("category-admin/v1/category","get",{},{}).then((function(t){e(t)})).catch((function(e){console.log(e),t(e)}))})).then((function(e){for(var t=e.results,n=[],o=0;o<t.length;o++){var a=t[o];n.push({value:a.id,label:a.category_name})}s(n)})).catch((function(e){console.log(e),s([])}))}),[]),a.a.createElement(v.a,{options:r,value:n,onChange:c})},H=a.a.createElement(v.a,{options:[{value:0,label:"定制"},{value:1,label:"现货"}]}),w=a.a.createElement(v.a,{options:[{value:0,label:"否"},{value:1,label:"是"}]}),P={channel_id:a.a.createElement(S,null),categories:a.a.createElement(q,null),has_done:H,has_gallery:w,is_delete:w,is_index:w,is_new:w,is_on_sale:w},D=function(e){return{goods_id:{buttonTips:"选择商品",clickMethod:function(){return e(1)}}}},I=["id","name","channel_id","categories","is_on_sale"],L={id:0,name:"",channel_id:1,categories:"",sort_order:0,freight_template_id:0,freight_type:1,goods_brief:"",goods_number:0,goods_unit:"副",has_done:1,has_gallery:1,is_delete:0,is_index:1,is_new:0,is_on_sale:1,keywords:"",cost_price:0,min_cost_price:0,min_retail_price:0,retail_price:0,sell_volume:0,https_pic:"",goods_desc:"",list_pic:"",home_pic1:"",home_pic2:"",home_pic3:"",home_pic4:"",home_pic5:"",home_pic6:"",home_pic7:"",home_pic8:"",home_pic9:"",goods_video:"",handle_staff_id:0,add_time:"",update_time:"",explains:""},V={password:[{required:!0,message:"Please input Password!"}]},R=["home_pic"],x=["goods-admin/v1/goods"],K=function(e,t,n,o){var l=[a.a.createElement(s.a,{onClick:function(){n(e),t(2)},type:"link"},"详情"),a.a.createElement(s.a,{onClick:function(){n(e),t(4)},type:"link"},"颜色价格"),a.a.createElement(s.a,{onClick:function(){n(e),t(3)},type:"link"},"商品分类(热搜词)")];return o&&l.push(a.a.createElement(s.a,{onClick:function(){return o(e)},type:"link"},"选择")),l},B=function(e,t,n,o,l){var c=a.a.createElement("div",null,a.a.createElement("p",null,"商品ID: "+e.id),a.a.createElement("p",null,"已上架: "+(e.is_on_sale>0?"是":"否")),a.a.createElement("p",null,"总销量: "+e.sell_volume),a.a.createElement("p",null,"说明: "+e.explains),a.a.createElement("p",null,"上架时间: "+h()(e.add_time).format("YYYY-MM-DD HH:mm:ss")),a.a.createElement("p",null,"更新时间: "+h()(e.update_time).format("YYYY-MM-DD HH:mm:ss"))),i={id:e.id,actions:K(e,o,t,n),img:e.home_pic1_url,avatar:"",title:e.name,description:"商品简介: "+e.goods_brief,content:c};return Object(O.b)(i,120)},N=function(e){var t=e.requestCount,n=e.reqParams,o=e.responseDataHandle,l=x[0];return a.a.createElement(g.a,{responseDataHandle:o,api:l,method:"get",reqParams:n,reqObject:{},requestCount:t})};N.defaultProps={requestCount:0,reqParams:{},responseDataHandle:function(e){console.log(e)}};var F=function(e){var t=e.requestCount,n=e.reqObject,o=e.responseDataHandle,l=[].concat(x)[0];return a.a.createElement(g.a,{responseDataHandle:o,api:l,method:"post",reqParams:{},reqObject:n,requestCount:t})};F.defaultProps={requestCount:0,reqObject:{},responseDataHandle:function(e){console.log(e)}};var M=function(e){var t=e.requestCount,n=e.reqObject,o=e.responseDataHandle,l=e.id,c=[].concat(x)[0]+"/"+l;return a.a.createElement(g.a,{responseDataHandle:o,api:c,method:"put",reqParams:{},reqObject:n,requestCount:t})};M.defaultProps={requestCount:0,reqObject:{},responseDataHandle:function(e){console.log(e)},id:0};var T=function(e){var t=e.requestCount,n=e.responseDataHandle,o=e.id,l=[].concat(x)[0]+"/"+o;return a.a.createElement(g.a,{responseDataHandle:n,api:l,method:"delete",reqParams:{},reqObject:{},requestCount:t})};T.defaultProps={requestCount:0,responseDataHandle:function(e){console.log(e)},id:0};var Y=n("p8V/"),G=n("afJD"),z=["id"].concat(C),A=function(e){var t=e.visible,n=e.setVisible,l=e.reloadListCount,c=e.setReloadListCount,i=Object(o.useRef)({}),r=Object(o.useRef)({}),s=Object(o.useRef)({handleCount:0}),u=Object(o.useState)(0),d=u[0],g=u[1],_=Object(o.useState)(0),h=_[0],v=_[1],O=Object(o.useRef)({});Object(o.useEffect)((function(){1===t&&(g(d+1),s.current={handleCount:s.current.handleCount+1})}),[t]);var j=Object(o.useState)(0),C=j[0],S=j[1],q=Object(o.useState)({}),H=q[0],w=q[1],I=function(){n(0)};return a.a.createElement(a.a.Fragment,null,a.a.createElement(f.a,{visible:1===t,title:"Goods 新建",closable:!1,footer:null},a.a.createElement(b.c,{onChange:function(e){r.current=Object.assign({},e)},oldObj:s.current,videoKeyName:"goods_video"}),a.a.createElement(p.a,null),a.a.createElement("div",{style:{width:"100%",height:"auto",textAlign:"center"}},a.a.createElement(b.b,{oldObj:s.current,maxImagesNum:9,imageKeyName:R[0],onChange:function(e){i.current=Object.assign({},e),console.log(e)}})),a.a.createElement(p.a,null),a.a.createElement(Y.a,{columns:E,disabledKeys:y,notShowKeys:z,formKeyLabelObj:k,formKeySelectComponentsObj:P,formKeysItemButtonObj:D(S),onFinish:function(e){var t=Object.assign({},e,i.current,r.current);console.log(t),O.current=t,v(h+1)},cancelHandle:I,showDeleteButton:!1,formInitialObj:L,initFormCount:d,rulesObj:V,updateFormObj:H}),a.a.createElement(G.a,{modalState:1===C,setModalState:S,selectHandle:function(e){console.log(e),w({goods_id:e.id}),S(0)}}),a.a.createElement(F,{requestCount:h,reqObject:O.current,responseDataHandle:function(e){Object.keys(e).includes("code")&&1e3===e.code?(I(),c(l+1)):m.b.error("网络错误...")}})))};A.defaultProps={visible:!1,setVisible:function(e){return console.log(e)},reloadListCount:0,setReloadListCount:function(e){return console.log(e)}};var J=A,X=n("/wGt"),W=function(e){var t=e.visible,n=e.setVisible,l=e.queryHandle,c=Object(o.useState)(0),i=c[0],r=c[1],s=Object(o.useState)(0),u=s[0],d=s[1],m=Object(o.useState)({}),f=m[0],p=m[1];Object(o.useEffect)((function(){t&&r(i+1)}),[t]);var b=function(){n(!1)};return a.a.createElement(a.a.Fragment,null,a.a.createElement(X.a,{title:"Goods查询",width:"100%",height:"400px",placement:"top",onClose:b,visible:t,bodyStyle:{paddingBottom:80},footer:null},a.a.createElement(Y.a,{columns:I,formKeyLabelObj:k,formKeySelectComponentsObj:P,formKeysItemButtonObj:D(d),onFinish:function(e){var t=Object.assign({},e),n=t.id?parseInt(t.id):0;n>0?l({id:n}):(delete t.id,console.log(t),l(t)),setTimeout((function(){b()}),50)},cancelHandle:function(){return n(0)},showDeleteButton:!1,formInitialObj:L,initFormCount:i,updateFormObj:f})),a.a.createElement(G.a,{modalState:1===u,setModalState:d,selectHandle:function(e){console.log(e),p({goods_id:e.id}),d(0)}}))};W.defaultProps={visible:!1,setVisible:function(e){console.log(e)},queryHandle:function(e){console.log(e)}};var Q=W,U=(n("xfY5"),n("fN96"),function(e){var t=e.visible,n=e.setVisible,l=e.oldObj,c=e.updatedHandle,i=Object(o.useRef)({}),r=Object(o.useRef)({}),s=Object(o.useState)(0),u=s[0],d=s[1],g=Object(o.useRef)({}),_=Object(o.useState)(0),v=_[0],O=_[1],j=Object(o.useState)(0),S=j[0],q=j[1],H=Object(o.useState)({}),w=H[0],I=H[1];Object(o.useEffect)((function(){if(t>0){console.log(l),I({id:-1});var e=l.end_time?parseInt(l.end_time):0;e<1e10&&(e=parseInt(1e3*e));var n=h()(e);I(Object.assign({},l,{end_time:n}))}}),[t,l]);return a.a.createElement(f.a,{visible:2===t,title:"Goods",closable:!1,footer:null},a.a.createElement(b.c,{onChange:function(e){r.current=Object.assign({},e)},oldObj:l,videoKeyName:"goods_video"}),a.a.createElement(p.a,null),a.a.createElement("div",{style:{width:"100%",height:"auto",textAlign:"center"}},a.a.createElement(b.b,{maxImagesNum:9,imageKeyName:R[0],oldObj:l,onChange:function(e){i.current=e}})),a.a.createElement(p.a,null),a.a.createElement(Y.a,{columns:E,disabledKeys:y,notShowKeys:C,formKeyLabelObj:k,formKeySelectComponentsObj:P,formKeysItemButtonObj:D(q),onFinish:function(e){var t=Object.assign({},e,i.current,r.current);console.log(t),console.log(t),g.current=t,d(u+1)},cancelHandle:function(){return n(0)},showDeleteButton:!0,deleteHandle:function(){O(v+1),c({id:l.id,del_handle:!0})},updateFormObj:w,rulesObj:V}),a.a.createElement(G.a,{modalState:1===S,setModalState:q,selectHandle:function(e){console.log(e),I({goods_id:e.id}),q(0)}}),a.a.createElement(M,{requestCount:u,reqObject:g.current,responseDataHandle:function(e){Object.keys(e).includes("code")&&1e3===e.code?(m.b.success("修改成功"),c(e),n(0)):m.b.error("网络错误...")},id:l.id}),a.a.createElement(T,{requestCount:v,responseDataHandle:function(e){return n(0)},id:l.id}))});U.defaultProps={visible:!1,setVisible:function(e){return console.log(e)},oldObj:{},updatedHandle:function(e){return console.log(e)}};var Z=U,$=n("ajnz"),ee=(n("KKXr"),n("2fM7")),te=["category-admin/v1/category"],ne=function(e){var t=e.visible,n=e.goodsObj,l=e.onChange,c=Object(o.useState)([]),i=c[0],r=c[1],s=Object(o.useState)([]),u=s[0],d=s[1];Object(o.useEffect)((function(){new Promise((function(e,t){var n=te[0];Object(j.a)(n,"get",{},{}).then((function(t){e(t)})).catch((function(e){console.log(e),t(e)}))})).then((function(e){for(var t=e.results,n=[],o=0;o<t.length;o++){var a=t[o];n.push({value:a.id,label:a.category_name})}r(n)})).catch((function(e){console.log(e),r([])}))}),[]),Object(o.useEffect)((function(){if(!(t<1)){console.log(n);for(var e=n.categories?n.categories:"",o=(e=e.split("-")).length-1;o>-1;o--)""===e[o]?e.splice(o,1):e[o]=parseInt(e[o]);console.log(e),d(e)}}),[t]);return a.a.createElement(ee.a,{style:{width:"100%"},options:i,value:u,onChange:function(e){console.log("selected "+e),d(e),l(e)},mode:"multiple"})};ne.defaultProps={visible:0,goodsObj:{},onChange:function(e){return console.log(e)}};var oe=function(e){var t=e.visible,n=e.setVisible,l=e.visibleNum,c=e.goodsObj,r=e.updateCategory,u=Object(o.useState)(""),d=u[0],m=u[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(f.a,{visible:t===l,title:"选择分类(热搜词)",mask:!0,closable:!0,centered:!0,footer:[a.a.createElement(s.a,{key:"categoryConfirm",onClick:function(){r(d),n(0)}},"确认"),a.a.createElement(s.a,{key:"categoryCancle",onClick:function(){n(0)}},"取消")]},a.a.createElement(i.b,{direction:"vertical"},a.a.createElement("p",null,"商品: ",c.name),a.a.createElement(ne,{visible:t,onChange:function(e){m(e)},goodsObj:c}))))};oe.defaultProps={visible:0,setVisible:function(e){return console.log(e)},visibleNum:1,goodsObj:{},updateCategory:function(e){return console.log(e)}};var ae=n("e1dp"),le=function(e){var t=e.visible,n=e.setVisible,l=e.visibleNum,c=e.goodsObj,i=e.selectHandle,r=Object(o.useState)({state:{goodsobj:{},selectHandle:i,setVisible:n}}),u=r[0],d=r[1];return Object(o.useEffect)((function(){t===l&&d({state:{goodsobj:c,selectHandle:i,setVisible:n}})}),[t,l,c]),a.a.createElement(a.a.Fragment,null,a.a.createElement(f.a,{visible:t===l,title:"颜色价格",closable:!1,footer:[a.a.createElement(s.a,{key:"unvisible",onClick:function(){n(0)}},"确定")]},a.a.createElement("div",{style:{width:"100%",maxHeight:"30rem",overflow:"auto"}},a.a.createElement(ae.a,{location:u}))))};le.defaultProps={visible:0,setVisible:function(e){return console.log(e)},visibleNum:1,goodsObj:{},selectHandle:null};var ce=n("I5AO"),ie=function(e){var t=e.reloadListCount,n=e.setReloadListCount,l=e.requestParams,c=e.selectButtonOnClick,i=Object(o.useState)(0),r=i[0],s=i[1],u=Object(o.useState)(!0),d=u[0],m=u[1],f=Object(o.useState)(!1),p=f[0],b=f[1],g=Object(o.useState)(!1),_=g[0],h=g[1],v=Object(o.useRef)({page:0}),j=Object(o.useState)([]),E=j[0],y=j[1],C=Object(o.useState)(0),k=C[0],S=C[1],q=Object(o.useState)(0),H=q[0],w=q[1],P=Object(o.useState)({}),D=P[0],I=P[1],L=Object(o.useState)({}),V=L[0],R=L[1],x=Object(o.useState)(null),K=x[0];x[1];Object(o.useEffect)((function(){d&&!p&&_&&(F(),h(!1))}),[_,d,p]),Object(o.useEffect)((function(){v.current=Object.assign({},l),T()}),[t]),Object(o.useEffect)((function(){Object.keys(D).includes("categories")&&w(H+1)}),[D]);var F=function(){if(d&&!p){b(!0),m(!1);var e=Number.isInteger(v.current.page)?v.current.page+1:1;v.current=Object.assign({},v.current,{page:e}),console.log(v.current),S(k+1)}else console.log("Error state: hasMore is ",d,", loading is ",p)},T=function(){v.current=Object.assign({},v.current,{page:0}),y([]),m(!0),b(!1),h(!0)},Y=function(e){console.log(e),y(function(e,t){for(var n=[].concat(e),o=t.id,a=0;a<n.length;a++){if(n[a].id===o)return Object.keys(t).includes("del_handle")&&t.del_handle?n.splice(a,1):n[a]=t,n}return n}(E,e))};return a.a.createElement("div",null,a.a.createElement(ce.a,{visible:r}),a.a.createElement(O.a,{header:"Goods List",listData:E,visible:r,setVisible:s,randerItem:B,setSelectedItem:R,selectButtonOnClick:c}),a.a.createElement(Z,{visible:r,setVisible:s,oldObj:V,reloadListCount:t,setReloadListCount:n,updatedHandle:Y}),a.a.createElement(oe,{visible:r,setVisible:s,visibleNum:3,goodsObj:V,updateCategory:function(e){console.log(e);var t={categories:e.join("-")};I(t)}}),a.a.createElement(le,{visible:r,setVisible:s,visibleNum:4,goodsObj:V,selectHandle:K}),a.a.createElement(M,{requestCount:H,reqObject:D,responseDataHandle:Y,id:V.id}),a.a.createElement(N,{requestCount:k,reqParams:v.current,responseDataHandle:function(e){b(!1),Object.keys(e).includes("code")&&1e3===e.code&&Object.keys(e).includes("results")?(y(E.concat(e.results)),m(function(e){return!!(Object.keys(e).includes("next")&&"string"==typeof e.next&&e.next.length>5)}(e))):console.log("Error: get data...")}}),a.a.createElement($.a,{hasMore:d,onClick:F}))};ie.defaultProps={reloadListCount:1,setReloadListCount:function(e){console.log(e)},requestParams:{page:0},selectButtonOnClick:null};var re=ie,se=function(e){var t=e.paramsObj,n=void 0===t?{}:t,l=Object(o.useState)(""),c=l[0],i=l[1];Object(o.useEffect)((function(){r()}),[n]);var r=function(){var e="";Object.keys(n).forEach((function(t){if(Object.keys(k).includes(t)){var o=" "+k[t]+" = "+n[t]+";";e+=o}})),e.length>2?i(e="查询条件:"+e):(console.log("查询条件为空"),i(""))};return a.a.createElement("div",{style:{height:"auto",width:"100%",padding:"0.1rem 0.2rem"}},c.length>2?a.a.createElement("p",null,c):null)};t.a=function(e){var t=e.selectButtonOnClick,n=void 0===t?null:t,m=Object(o.useRef)({page:0}),f=Object(o.useState)(1),p=f[0],b=f[1],g=Object(o.useState)(!1),_=g[0],h=g[1],v=Object(o.useState)(!1),O=v[0],j=v[1];return a.a.createElement("div",null,a.a.createElement(l.a,null,a.a.createElement(c.a,{span:14},a.a.createElement(i.b,null,a.a.createElement("h4",null,"Goods"),a.a.createElement(r.a,{title:"刷新"},a.a.createElement(s.a,{onClick:function(){m.current={page:0},b(p+1)},shape:"circle",icon:a.a.createElement(u.a,null)})),a.a.createElement(r.a,{title:"搜索"},a.a.createElement(s.a,{onClick:function(){return h(!0)},shape:"circle",icon:a.a.createElement(d.a,null)})))),a.a.createElement(c.a,{span:10},a.a.createElement("div",{style:{width:"100%",height:"auto"}},a.a.createElement(s.a,{style:{float:"right"},type:"link",onClick:function(){return j(1)}},"新建")))),a.a.createElement(l.a,null,a.a.createElement(c.a,{span:24},a.a.createElement(se,{paramsObj:m.current}))),a.a.createElement(Q,{visible:_,setVisible:h,queryHandle:function(e){m.current=Object.assign({},e),b(p+1)}}),a.a.createElement(re,{reloadListCount:p,setReloadListCount:b,requestParams:m.current,selectButtonOnClick:n}),a.a.createElement(J,{visible:O,setVisible:j,reloadListCount:p,setReloadListCount:b}))}},vpoQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("a1Th"),n("Btvt");var o=n("q1tI"),a=n.n(o),l=n("2fM7"),c=n("7BUj"),i=l.a.Option,r=function(e){var t=e.options,n=e.width,o=e.value,c=e.onChange,r=e.mode;return a.a.createElement(l.a,{style:{width:n},onChange:c,value:o,mode:r,allowClear:!0},t.map((function(e,t){return a.a.createElement(i,{key:t.toString(),value:e.value},e.label)})))};r.defaultProps={options:[],width:c.a.selectComponentWidth,value:null,onChange:function(e){console.log(e)},mode:null}}}]);
//# sourceMappingURL=010fc29384fb3c14f7fa93bbc3b5c0b98507982b-40de5381d05d8b1df02a.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"5bA4":function(e,t,n){"use strict";n("91GP");var o=n("q1tI"),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},r=n("6VBw"),l=function(e,t){return o.createElement(r.a,Object.assign({},e,{ref:t,icon:a}))};l.displayName="LeftOutlined";t.a=o.forwardRef(l)},fpBp:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),a=n.n(o),r=n("9qUX"),l=n("vrFN"),c=(n("f3/d"),n("91GP"),n("tsqr")),s=n("BMrR"),i=n("kPKH"),u=n("zeV3"),d=n("3S7+"),m=n("2/Rp"),f=n("5bA4"),b=n("rLCj"),p=n("l+S1"),g=n("Wbzz"),j=(n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Z2Ku"),n("L9s1"),n("kLXV")),O=n("PArb"),y=n("g/of"),h=(n("VRzm"),n("Sm+g")),E=n("kO4H"),v=["goods-admin/v1/goodscolorprice","goods-admin/v1/postgoodsstock"],C=function(e){var t=e.requestCount,n=e.reqParams,o=e.responseDataHandle,r=v[0];return a.a.createElement(h.a,{responseDataHandle:o,api:r,method:"get",reqParams:n,reqObject:{},requestCount:t})};C.defaultProps={requestCount:0,reqParams:{},responseDataHandle:function(e){console.log(e)}};var _=function(e){var t=e.requestCount,n=e.reqObject,o=e.responseDataHandle,r=[].concat(v)[0];return a.a.createElement(h.a,{responseDataHandle:o,api:r,method:"post",reqParams:{},reqObject:n,requestCount:t})};_.defaultProps={requestCount:0,reqObject:{},responseDataHandle:function(e){console.log(e)}};var K=function(e){var t=e.requestCount,n=e.reqObject,o=e.responseDataHandle,r=e.id,l=[].concat(v)[0]+"/"+r;return a.a.createElement(h.a,{responseDataHandle:o,api:l,method:"put",reqParams:{},reqObject:n,requestCount:t})};K.defaultProps={requestCount:0,reqObject:{},responseDataHandle:function(e){console.log(e)},id:0};var w=function(e){var t=e.requestCount,n=e.responseDataHandle,o=e.id,r=[].concat(v)[0]+"/"+o;return a.a.createElement(h.a,{responseDataHandle:n,api:r,method:"delete",reqParams:{},reqObject:{},requestCount:t})};w.defaultProps={requestCount:0,responseDataHandle:function(e){console.log(e)},id:0};var q=n("p8V/"),S=(n("vpoQ"),["id","goods","color_name","stock_num","retail_price","group_price","agent_price","cost_price","color_pic","handle_staff_id","add_time","update_time","explains"]),H=["id","goods","color_pic","handle_staff_id","add_time","update_time"],L=["id","color_pic","handle_staff_id"],F={id:"ID",goods:"商品ID",color_name:"颜色名称",stock_num:"库存数量",retail_price:"零售价格",group_price:"团购价格",agent_price:"代理价格",cost_price:"成本价",color_pic_url:"图片URL",color_pic:"图片cos",handle_staff_id:"操作员ID",add_time:"创建时间",update_time:"更新时间",explains:"说明"},k={},P=["color_name"],I={id:0,goods:0,color_name:"",stock_num:0,retail_price:0,group_price:0,agent_price:0,cost_price:0,color_pic_url:"",color_pic:"",handle_staff_id:0,add_time:"",update_time:"",explains:""},D=function(e){var t=e.visible,n=e.setVisible,r=e.reloadListCount,l=e.setReloadListCount,s=e.goodsId,i=Object(o.useRef)({}),u=Object(o.useRef)({createCount:0}),d=Object(o.useRef)({}),m=Object(o.useState)(0),f=m[0],b=m[1],p=Object(o.useState)(0),g=p[0],h=p[1],E=Object(o.useRef)({});Object(o.useEffect)((function(){var e=Object.assign({},I);e.goods=s,d.current=e,b(f+1)}),[s]);var v=function(){i.current={},u.current={createCount:u.current.createCount+1},b(f+1),n(!1)};return a.a.createElement(a.a.Fragment,null,a.a.createElement(j.a,{visible:t,title:"ColorPrice 新建",closable:!1,footer:null},a.a.createElement("div",{style:{width:"100%",height:"auto",textAlign:"center"}},a.a.createElement(y.b,{oldObj:u.current,imageKeyName:"property_pic",onChange:function(e){i.current=Object.assign({},e)}})),a.a.createElement(O.a,null),a.a.createElement(q.a,{columns:S,disabledKeys:H,notShowKeys:L,formKeyLabelObj:F,formKeySelectComponentsObj:k,onFinish:function(e){var t=Object.assign({},e,i.current);E.current=t,h(g+1)},cancelHandle:v,showDeleteButton:!1,formInitialObj:d.current,initFormCount:f}),a.a.createElement(_,{requestCount:g,reqObject:E.current,responseDataHandle:function(e){console.log(e),Object.keys(e).includes("code")&&1e3===e.code?(v(),l(r+1)):c.b.error("网络错误...")}})))};D.defaultProps={visible:!1,setVisible:function(e){return console.log(e)},reloadListCount:0,setReloadListCount:function(e){return console.log(e)},goodsId:0};var V=D,R=n("/wGt"),B=function(e){var t=e.visible,n=e.setVisible,r=e.queryHandle,l=Object(o.useState)(0),c=l[0],s=l[1],i=function(){s(c+1),n(!1)};return a.a.createElement(R.a,{title:"销售记录查询",width:"100%",height:"400px",placement:"top",onClose:i,visible:t,bodyStyle:{paddingBottom:80},footer:null},a.a.createElement(q.a,{columns:P,formKeyLabelObj:F,formKeySelectComponentsObj:k,onFinish:function(e){var t=Object.assign({},e);console.log(t),r(t),setTimeout((function(){i()}),50)},cancelHandle:function(){return n(!1)},showDeleteButton:!1,formInitialObj:I,initFormCount:c}))};B.defaultProps={visible:!1,setVisible:function(e){console.log(e)},queryHandle:function(e){console.log(e)}};var x=B,N=n("lN2L"),z=n("/a2Y"),T=function(e){var t=e.visible,n=e.setVisible,r=e.oldObj,l=e.reloadListCount,s=e.setReloadListCount,i=Object(o.useState)([]),u=(i[0],i[1]),d=Object(o.useRef)({}),m=Object(o.useState)(""),f=(m[0],m[1],Object(o.useState)({})),b=f[0],p=f[1],g=Object(o.useState)(0),h=g[0],E=g[1],v=Object(o.useState)(0),C=v[0],_=v[1],P=Object(o.useRef)({}),I=Object(o.useState)(0),D=I[0],V=I[1];Object(o.useEffect)((function(){R()}),[t,r]);var R=function(){E(h+1),p(Object.assign({},r));for(var e=[],t=1;t<10;t++){var n="home_pic"+t,o=n+"_url",a=r[n],l=r[o];"string"==typeof a&&a.length>5&&e.push({cosNameKey:n,cosName:a,urlKey:o,url:l})}u(e)};return a.a.createElement(j.a,{visible:t,title:"ColorPrice",closable:!1,footer:null},a.a.createElement("div",{style:{width:"100%",height:"auto",textAlign:"center"}},a.a.createElement(y.b,{maxImagesNum:1,imageKeyName:"property_pic",oldObj:r,onChange:function(e){d.current=e,console.log(d.current)}})),a.a.createElement(O.a,null),a.a.createElement(q.a,{columns:S,disabledKeys:H,notShowKeys:L,formKeyLabelObj:F,formKeySelectComponentsObj:k,onFinish:function(e){var t=Object.assign({},e,d.current);console.log(t),P.current=t,_(C+1)},cancelHandle:function(){return n(!1)},showDeleteButton:!0,deleteHandle:function(){V(D+1),s(l+1)},updateFormObj:b,formInitialObj:{},initFormCount:h}),a.a.createElement(K,{requestCount:C,reqObject:P.current,responseDataHandle:function(e){Object.keys(e).includes("code")&&1e3===e.code?(c.b.success("修改成功"),s(l+1),n(!1)):c.b.error("网络错误...")},id:b.id}),a.a.createElement(w,{requestCount:D,responseDataHandle:function(e){return n(!1)},id:b.id}))};T.defaultProps={visible:!1,setVisible:function(e){return console.log(e)},oldObj:{}};var A=T,M=["goods-admin/v1/goods"],G=function(e){var t=e.reloadListCount,n=e.setReloadListCount,r=e.requestParams,l=Object(o.useState)(!0),c=l[0],s=l[1],i=Object(o.useState)(!1),u=i[0],d=i[1],m=Object(o.useState)(!1),f=m[0],b=m[1],p=Object(o.useRef)({page:1}),g=Object(o.useState)([]),j=g[0],O=g[1],y=Object(o.useState)(0),h=y[0],v=y[1],_=Object(o.useState)(!1),K=_[0],w=_[1],q=Object(o.useState)({}),S=q[0],H=q[1];Object(o.useEffect)((function(){O([]),d(!1),s(!0),p.current=Object.assign({},r,{page:r.page+1}),b(!0)}),[t]),Object(o.useEffect)((function(){c&&!u&&f&&(b(!1),L())}),[c,u,f]);var L=function(){r.goods&&r.goods>0&&c&&!u?(s(!1),v(h+1),d(!0)):console.log("Error state: hasMore is ",c,", loading is ",u)},F=function(e,t){void 0===t&&(t=!0);for(var n=0,o=0;o<e.length;o++){var a=e[o],r=a.retail_price?a.retail_price:0;0===n&&(n=r),t?n>r&&r>0&&(n=r):n<r&&(n=r)}return n},k=function(e){var t=Object.assign({},j[e]);console.log(t),H(t),w(!0)};return a.a.createElement("div",null,a.a.createElement(C,{requestCount:h,reqParams:p.current,responseDataHandle:function(e){if(d(!1),Object.keys(e).includes("code")&&1e3===e.code&&Object.keys(e).includes("results")){O(j.concat(e.results)),s(function(e){return!!(Object.keys(e).includes("next")&&"string"==typeof e.next&&e.next.length>5)}(e));var t=e.results;if(t.length>0){console.log(t);var n=F(t),o=F(t,!1),a=function(e){for(var t=0,n=0;n<e.length;n++){var o=e[n];t+=o.stock_num>0?o.stock_num:0}return t}(t);console.log(n,o,t[0].goods),function(e,t,n,o){void 0===o&&(o=0);var a=M[0]+"/"+o,r={goods_number:n,min_retail_price:e,retail_price:t};return new Promise((function(e,t){o>0?Object(E.a)(a,"put",{},r).then((function(t){e(t)})).catch((function(e){t(e)})):t("Argument goodsId must..., ",o)}))}(n,o,a,t[0].goods).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}}else console.log("Error: get data...")}}),a.a.createElement(N.a,{productsData:j,loadMore:L,hasMore:c,ItemRendererComponent:function(e){var t=e.item,n=e.index;return console.log(t),a.a.createElement("div",null,a.a.createElement(z.a,{listsIndex:n,url:t.property_pic_url,productTitle:t.color_name,productEffects:"零售价: "+t.retail_price+"; 团购价: "+t.group_price+"; 代理价: "+t.agent_price+"; 库存数量: "+t.stock_num+"; 说明: "+t.explains,sourcePrice:t.retail_price,salePrice:t.agent_price,clickDetailHandle:k}))}}),a.a.createElement(A,{visible:K,setVisible:w,oldObj:S,reloadListCount:t,setReloadListCount:n}))};G.defaultProps={reloadListCount:0,setReloadListCount:function(e){console.log(e)},requestParams:{page:0}};var W=G,U=function(e){var t=e.paramsObj,n=void 0===t?{}:t,r=Object(o.useState)(""),l=r[0],c=r[1];Object(o.useEffect)((function(){s()}),[n]);var s=function(){var e="";Object.keys(n).forEach((function(t){if(Object.keys(F).includes(t)){var o=" "+F[t]+" = "+n[t]+";";e+=o}})),e.length>2?c(e="查询条件:"+e):(console.log("查询条件为空"),c(""))};return a.a.createElement("div",{style:{height:"auto",width:"100%",padding:"0.1rem 0.2rem"}},l.length>2?a.a.createElement("p",null,l):null)},X=function(e){var t=e.location,n=Object(o.useRef)(0),r=Object(o.useRef)({page:0}),l=Object(o.useState)(""),j=l[0],O=l[1],y=Object(o.useState)(0),h=y[0],E=y[1],v=Object(o.useState)(!1),C=v[0],_=v[1],K=Object(o.useState)(!1),w=K[0],q=K[1],S=function(){n.current&&n.current>0?(r.current={page:0,goods:n.current},E(h+1),console.log("init search 00 ...")):(console.log("No goods..."),c.b.error("Error: 请返回, 重新选择产品..."))};return Object(o.useEffect)((function(){try{console.log(t.state.goodsobj),n.current=t.state.goodsobj.id,O(t.state.goodsobj.name)}catch(e){console.log(e),c.b.error("Error: 请返回, 重新选择产品...")}S()}),[t.state]),a.a.createElement("div",null,a.a.createElement(s.a,null,a.a.createElement(i.a,{span:14},a.a.createElement("div",{style:{width:"100%",height:"auto",padding:"0.1rem 0.5rem"}},a.a.createElement(u.b,{size:"large"},a.a.createElement(d.a,{title:"返回"},a.a.createElement(g.Link,{to:"/wxgoods"},a.a.createElement(f.a,null))),a.a.createElement("h4",null,"ColorPrice"),a.a.createElement(d.a,{title:"刷新"},a.a.createElement(m.a,{onClick:S,shape:"circle",icon:a.a.createElement(b.a,null)})),a.a.createElement(d.a,{title:"搜索"},a.a.createElement(m.a,{onClick:function(){return _(!0)},shape:"circle",icon:a.a.createElement(p.a,null)}))))),a.a.createElement(i.a,{span:10},a.a.createElement("div",{style:{width:"100%",height:"auto"}},a.a.createElement(m.a,{style:{float:"right"},type:"link",onClick:function(){return q(!0)}},"新建")))),a.a.createElement(s.a,null,a.a.createElement("h6",null,"商品标题: ",j)),a.a.createElement(s.a,null,a.a.createElement(i.a,{span:24},a.a.createElement(U,{paramsObj:r.current}))),a.a.createElement(x,{visible:C,setVisible:_,queryHandle:function(e){r.current=Object.assign({},e,{page:0,goods:n.current}),E(h+1),console.log("queryHandle search 1 ...")}}),a.a.createElement(W,{reloadListCount:h,setReloadListCount:E,requestParams:r.current}),a.a.createElement(V,{visible:w,setVisible:q,reloadListCount:h,setReloadListCount:E,goodsId:n.current}))};t.default=function(e){var t=e.location;return a.a.createElement(r.a,null,a.a.createElement(l.a,{title:"WX ColorPrice"}),a.a.createElement(X,{location:t}))}},"p8V/":function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return j}));n("a1Th"),n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Z2Ku"),n("L9s1");var o=n("q1tI"),a=n.n(o),r=n("Vl3Y"),l=n("5rEg"),c=n("2/Rp"),s=n("zeV3"),i=n("7BUj").a.formCommonStyle,u=i.layoutForm,d=i.formItemLayout,m=i.tailFormItemLayout,f={width:260},b=function(e){var t=e.formKey,n=e.formKeyLabelObj,o=e.disabledKeys,c=e.updateFormObj,s=e.rulesObj,i=e.formKeySelectComponentsObj,u=e.passwordKeys,m=e.showLabelName,b=void 0===m||m,p=o.includes(t),g=n[t],j=c[t];return a.a.createElement(r.a.Item,Object.assign({},d,{name:t,label:b?g:"",initialValue:j,rules:s[t]?s[t]:[]}),Object.keys(i).includes(t)?i[t]:u.includes(t)?a.a.createElement(l.a.Password,{style:f}):a.a.createElement(l.a,{style:f,placeholder:"请输入 "+g,disabled:p}))},p=function(e){var t=e.formKey,n=e.formKeyLabelObj,o=e.disabledKeys,l=e.updateFormObj,s=e.rulesObj,i=e.formKeySelectComponentsObj,u=e.passwordKeys,m=e.formKeysItemButtonObj,f=m[t].buttonTips,p=n[t];return a.a.createElement(r.a.Item,Object.assign({},d,{label:p}),a.a.createElement(b,{formKey:t,formKeyLabelObj:n,disabledKeys:o,updateFormObj:l,rulesObj:s,formKeySelectComponentsObj:i,passwordKeys:u,showLabelName:!1}),a.a.createElement(c.a,{type:"link",onClick:function(e){console.log(e);try{m[t].clickMethod()}catch(n){console.log(n)}}},f))},g=function(e){var t=e.columns,n=e.disabledKeys,l=e.notShowKeys,i=e.formKeyLabelObj,d=e.formKeySelectComponentsObj,f=e.formKeysItemButtonObj,g=e.onFinish,j=e.cancelHandle,O=e.deleteHandle,y=e.showDeleteButton,h=e.updateFormObj,E=e.formInitialObj,v=e.initFormCount,C=e.rulesObj,_=e.passwordKeys,K=r.a.useForm()[0],w=Object(o.useState)(!1),q=w[0],S=w[1];Object(o.useEffect)((function(){K.setFieldsValue(h),S(!1)}),[h]),Object(o.useEffect)((function(){v>0&&(K.setFieldsValue(E),S(!1))}),[v]);return a.a.createElement(r.a,Object.assign({},u,{form:K,layout:"horizontal",onFinish:function(e){S(!0),g(e)},name:"adminer_info_edit"}),t.map((function(e,t){return l.includes(e)?null:Object.keys(f).includes(e)?a.a.createElement(p,{key:t.toString(),formKey:e,formKeyLabelObj:i,disabledKeys:n,updateFormObj:h,rulesObj:C,formKeySelectComponentsObj:d,passwordKeys:_,formKeysItemButtonObj:f}):a.a.createElement(b,{key:t.toString(),formKey:e,formKeyLabelObj:i,disabledKeys:n,updateFormObj:h,rulesObj:C,formKeySelectComponentsObj:d,passwordKeys:_})})),a.a.createElement(r.a.Item,m,a.a.createElement(s.b,null,a.a.createElement(c.a,{loading:q,disabled:q,type:"primary",htmlType:"submit"},"提交"),a.a.createElement(c.a,{onClick:j},"取消"),y?a.a.createElement(c.a,{loading:q,disabled:q,onClick:function(){S(!0),O()}},"删除"):null)))};g.defaultProps={columns:[],disabledKeys:[],notShowKeys:[],formKeyLabelObj:{},formKeySelectComponentsObj:{},formKeysItemButtonObj:{},onFinish:function(e){console.log(e)},cancelHandle:function(){console.log("Cancel Handle")},deleteHandle:function(){console.log("Delete Handle")},showDeleteButton:!1,updateFormObj:{},formInitialObj:{},initFormCount:0,rulesObj:{},passwordKeys:[],getFieldsValueHandle:function(e){return console.log(e)}};var j=function(e){var t=e.columns,n=e.disabledKeys,i=e.notShowKeys,u=e.formKeyLabelObj,d=e.formKeySelectComponentsObj,m=e.onFinish,b=e.onFinishButtonTips,p=e.cancelHandle,g=e.showCancelButton,j=e.deleteHandle,O=e.showDeleteButton,y=e.updateFormObj,h=e.formInitialObj,E=e.initFormCount,v=e.rulesObj,C=e.passwordKeys,_=(e.getFieldsValueHandle,r.a.useForm()[0]);Object(o.useEffect)((function(){_.setFieldsValue(y)}),[y]),Object(o.useEffect)((function(){_.setFieldsValue(h)}),[E]);var K=function(e){var t=e.formKey,o=n.includes(t),c=u[t],s=y[t];return a.a.createElement(r.a.Item,{name:t,initialValue:s,rules:v[t]?v[t]:[]},Object.keys(d).includes(t)?d[t]:C.includes(t)?a.a.createElement(l.a.Password,{style:f}):a.a.createElement(l.a,{style:f,placeholder:"请输入 "+c,disabled:o}))};return a.a.createElement(r.a,Object.assign({},{labelCol:{span:0},wrapperCol:{span:8}},{form:_,layout:"inline",onFinish:m,name:"adminer_info_edit"}),t.map((function(e,t){return i.includes(e)?null:a.a.createElement(K,{formKey:e,key:t.toString()})})),a.a.createElement(r.a.Item,null,a.a.createElement(s.b,null,a.a.createElement(c.a,{type:"primary",htmlType:"submit"},b),g?a.a.createElement(c.a,{onClick:p},"取消"):null,O?a.a.createElement(c.a,{onClick:j},"删除"):null)))};j.defaultProps={columns:[],disabledKeys:[],notShowKeys:[],formKeyLabelObj:{},formKeySelectComponentsObj:{},onFinish:function(e){console.log(e)},onFinishButtonTips:"确定/修改",cancelHandle:function(){console.log("Cancel Handle")},showCancelButton:!1,deleteHandle:function(){console.log("Delete Handle")},showDeleteButton:!1,updateFormObj:{},formInitialObj:{},initFormCount:0,rulesObj:{},passwordKeys:[],getFieldsValueHandle:function(e){return console.log(e)}}},rLCj:function(e,t,n){"use strict";n("91GP");var o=n("q1tI"),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"},r=n("6VBw"),l=function(e,t){return o.createElement(r.a,Object.assign({},e,{ref:t,icon:a}))};l.displayName="ReloadOutlined";t.a=o.forwardRef(l)},vpoQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("a1Th"),n("Btvt");var o=n("q1tI"),a=n.n(o),r=n("2fM7"),l=n("7BUj"),c=r.a.Option,s=function(e){var t=e.options,n=e.width,o=e.value,l=e.onChange,s=e.mode;return a.a.createElement(r.a,{style:{width:n},onChange:l,value:o,mode:s,allowClear:!0},t.map((function(e,t){return a.a.createElement(c,{key:t.toString(),value:e.value},e.label)})))};s.defaultProps={options:[],width:l.a.selectComponentWidth,value:null,onChange:function(e){console.log(e)},mode:null}}}]);
//# sourceMappingURL=component---src-pages-wxcolorprice-js-0976c4c25133b42ca469.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{fN96:function(e,t,n){var a=n("XKFU");a(a.S,"Number",{isInteger:n("nBIS")})},iU9Z:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),l=n("9qUX"),r=n("vrFN"),s=(n("91GP"),n("BMrR")),c=n("kPKH"),i=n("zeV3"),u=n("3S7+"),m=n("2/Rp"),d=n("rLCj"),b=n("l+S1"),f=(n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Z2Ku"),n("L9s1"),n("tsqr")),p=n("kLXV"),j=n("PArb"),O=n("g/of"),y=n("Sm+g"),g=(n("f3/d"),n("vpoQ")),h=n("/a2Y"),E=["id","name","front_desc","front_name","icon","img","is_category","is_channel","is_show","keywords","level","p_height","parent_id","show_index","sort_order","add_time","update_time","explains"],v=["id","front_name","icon","img","is_category","is_channel","level"],C=["front_name","icon","img","is_category","is_channel","level","show_index","parent_id"],K={id:"ID",name:"名称",front_desc:"频道简介",front_name:"频道名称",icon:"图标",img:"背景图片",is_category:"是分类",is_channel:"是频道",is_show:"显示",keywords:"关键词",level:"级别",p_height:"背景图高",parent_id:"上级ID",show_index:"显示序号",sort_order:"排序序号",add_time:"创建时间",update_time:"更新时间",explains:"说明"},w={is_show:o.a.createElement(g.a,{options:[{value:0,label:"否"},{value:1,label:"是"}]})},S=["name"],_={id:0,name:"",front_desc:"",front_name:"",icon:"",img:"",is_category:0,is_channel:1,is_show:1,keywords:"",level:"L1",p_height:"155",parent_id:0,show_index:0,sort_order:1,add_time:"",update_time:"",explains:""},q=["icon","img"],F=["channel-admin/v1/channels"],H=function(e){var t=e.item,n=e.index,a=e.itemDetailClick;return console.log(t),o.a.createElement("div",null,o.a.createElement(h.a,{listsIndex:n,url:t.icon_url,productTitle:t.name,productEffects:"频道简介: "+t.front_desc,salePrice:0,clickDetailHandle:a}))},L=function(e){var t=e.requestCount,n=e.reqParams,a=e.responseDataHandle,l=F[0];return o.a.createElement(y.a,{responseDataHandle:a,api:l,method:"get",reqParams:n,reqObject:{},requestCount:t})};L.defaultProps={requestCount:0,reqParams:{},responseDataHandle:function(e){console.log(e)}};var k=function(e){var t=e.requestCount,n=e.reqObject,a=e.responseDataHandle,l=[].concat(F)[0];return o.a.createElement(y.a,{responseDataHandle:a,api:l,method:"post",reqParams:{},reqObject:n,requestCount:t})};k.defaultProps={requestCount:0,reqObject:{},responseDataHandle:function(e){console.log(e)}};var I=function(e){var t=e.requestCount,n=e.reqObject,a=e.responseDataHandle,l=e.id,r=[].concat(F)[0]+"/"+l;return o.a.createElement(y.a,{responseDataHandle:a,api:r,method:"put",reqParams:{},reqObject:n,requestCount:t})};I.defaultProps={requestCount:0,reqObject:{},responseDataHandle:function(e){console.log(e)},id:0};var D=function(e){var t=e.requestCount,n=e.responseDataHandle,a=e.id,l=[].concat(F)[0]+"/"+a;return o.a.createElement(y.a,{responseDataHandle:n,api:l,method:"delete",reqParams:{},reqObject:{},requestCount:t})};D.defaultProps={requestCount:0,responseDataHandle:function(e){console.log(e)},id:0};var P=n("p8V/"),V=function(e){var t=e.visible,n=e.setVisible,l=e.reloadListCount,r=e.setReloadListCount,s=Object(a.useRef)({}),c=Object(a.useRef)({createCount:0}),i=Object(a.useState)(0),u=i[0],m=i[1],d=Object(a.useState)(0),b=d[0],y=d[1],g=Object(a.useRef)({}),h=function(){s.current={},c.current={createCount:c.current.createCount+1},m(u+1),n(!1)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{visible:t,title:"Channels 新建",closable:!1,footer:null},o.a.createElement("div",{style:{width:"100%",height:"auto",textAlign:"center"}},o.a.createElement(O.b,{oldObj:c.current,maxImagesNum:1,imageKeyName:q[0],onChange:function(e){s.current=Object.assign({},e)}})),o.a.createElement(j.a,null),o.a.createElement(P.a,{columns:E,disabledKeys:v,notShowKeys:C,formKeyLabelObj:K,formKeySelectComponentsObj:w,onFinish:function(e){var t=Object.assign({},e,s.current);g.current=t,y(b+1)},cancelHandle:h,showDeleteButton:!1,formInitialObj:_,initFormCount:u}),o.a.createElement(k,{requestCount:b,reqObject:g.current,responseDataHandle:function(e){Object.keys(e).includes("code")&&1e3===e.code?(h(),r(l+1)):f.b.error("网络错误...")}})))};V.defaultProps={visible:!1,setVisible:function(e){return console.log(e)},reloadListCount:0,setReloadListCount:function(e){return console.log(e)}};var B=V,R=n("/wGt"),x=function(e){var t=e.visible,n=e.setVisible,l=e.queryHandle,r=Object(a.useState)(0),s=r[0],c=r[1],i=function(){c(s+1),n(!1)};return o.a.createElement(R.a,{title:"销售记录查询",width:"100%",height:"400px",placement:"top",onClose:i,visible:t,bodyStyle:{paddingBottom:80},footer:null},o.a.createElement(P.a,{columns:S,formKeyLabelObj:K,formKeySelectComponentsObj:w,onFinish:function(e){var t=Object.assign({},e);console.log(t),l(t),setTimeout((function(){i()}),50)},cancelHandle:function(){return n(!1)},showDeleteButton:!1,formInitialObj:_,initFormCount:s}))};x.defaultProps={visible:!1,setVisible:function(e){console.log(e)},queryHandle:function(e){console.log(e)}};var N=x,T=(n("xfY5"),n("fN96"),n("lN2L")),M=function(e){var t=e.visible,n=e.setVisible,l=e.oldObj,r=e.reloadListCount,s=e.setReloadListCount,c=Object(a.useRef)({}),i=Object(a.useRef)({}),u=Object(a.useState)({}),m=u[0],d=u[1],b=Object(a.useState)(0),y=b[0],g=b[1],h=Object(a.useState)(0),S=h[0],_=h[1],F=Object(a.useRef)({}),H=Object(a.useState)(0),L=H[0],k=H[1];Object(a.useEffect)((function(){V()}),[t,l]);var V=function(){g(y+1),d(Object.assign({},l))};return o.a.createElement(p.a,{visible:t,title:"Channels",closable:!1,footer:null},o.a.createElement("div",{style:{width:"100%",height:"auto",textAlign:"center"}},o.a.createElement("h4",null,"Logo"),o.a.createElement(O.b,{maxImagesNum:1,imageKeyName:q[0],oldObj:l,onChange:function(e){c.current=e}})),o.a.createElement(j.a,null),o.a.createElement("div",{style:{width:"100%",height:"auto",textAlign:"center"}},o.a.createElement("h4",null,"背景图片"),o.a.createElement(O.b,{maxImagesNum:1,imageKeyName:q[1],oldObj:l,onChange:function(e){i.current=e}})),o.a.createElement(j.a,null),o.a.createElement(P.a,{columns:E,disabledKeys:v,notShowKeys:C,formKeyLabelObj:K,formKeySelectComponentsObj:w,onFinish:function(e){var t=Object.assign({},e,c.current,i.current);console.log(t),F.current=t,_(S+1)},cancelHandle:function(){return n(!1)},showDeleteButton:!0,deleteHandle:function(){k(L+1),s(r+1)},updateFormObj:m,formInitialObj:{},initFormCount:y}),o.a.createElement(I,{requestCount:S,reqObject:F.current,responseDataHandle:function(e){Object.keys(e).includes("code")&&1e3===e.code?(f.b.success("修改成功"),s(r+1),n(!1)):f.b.error("网络错误...")},id:m.id}),o.a.createElement(D,{requestCount:L,responseDataHandle:function(e){return n(!1)},id:m.id}))};M.defaultProps={visible:!1,setVisible:function(e){return console.log(e)},oldObj:{}};var A=M,G=function(e){var t=e.reloadListCount,n=e.setReloadListCount,l=e.requestParams,r=Object(a.useRef)(!0),s=Object(a.useState)(!0),c=s[0],i=s[1],u=Object(a.useState)(!1),m=u[0],d=u[1],b=Object(a.useRef)({page:0}),f=Object(a.useState)([]),p=f[0],j=f[1],O=Object(a.useState)(0),y=O[0],g=O[1],h=Object(a.useState)(!1),E=h[0],v=h[1],C=Object(a.useState)({}),K=C[0],w=C[1];Object(a.useEffect)((function(){b.current=Object.assign({},l),_()}),[t]),Object(a.useEffect)((function(){i(r.current)}),[r.current]);var S=function(){if(r.current&&!m){var e=Number.isInteger(b.current.page)?b.current.page+1:1;b.current=Object.assign({},b.current,{page:e}),console.log(b.current),g(y+1),d(!0)}else console.log("Error state: hasMore is ",r.current,", loading is ",m)},_=function(){b.current=Object.assign({},b.current,{page:0}),j([]),r.current=!0,d(!1),setTimeout((function(){S(),console.log("end loadMore...")}),100)},q=function(e){var t=Object.assign({},p[e]);console.log(t),w(t),v(!0)};return o.a.createElement("div",null,o.a.createElement(L,{requestCount:y,reqParams:b.current,responseDataHandle:function(e){console.log("resp process..."),d(!1),Object.keys(e).includes("code")&&1e3===e.code&&Object.keys(e).includes("results")?(j(p.concat(e.results)),r.current=function(e){return!!(Object.keys(e).includes("next")&&"string"==typeof e.next&&e.next.length>5)}(e)):console.log("Error: get data...")}}),o.a.createElement(T.a,{productsData:p,loadMore:S,hasMore:c,ItemRendererComponent:function(e){var t=e.item,n=e.index;return o.a.createElement(H,{item:t,index:n,itemDetailClick:q})}}),o.a.createElement(A,{visible:E,setVisible:v,oldObj:K,reloadListCount:t,setReloadListCount:n}))};G.defaultProps={reloadListCount:1,setReloadListCount:function(e){console.log(e)},requestParams:{page:0}};var U=G,z=function(e){var t=e.paramsObj,n=void 0===t?{}:t,l=Object(a.useState)(""),r=l[0],s=l[1];Object(a.useEffect)((function(){c()}),[n]);var c=function(){var e="";Object.keys(n).forEach((function(t){if(Object.keys(K).includes(t)){var a=" "+K[t]+" = "+n[t]+";";e+=a}})),e.length>2?s(e="查询条件:"+e):(console.log("查询条件为空"),s(""))};return o.a.createElement("div",{style:{height:"auto",width:"100%",padding:"0.1rem 0.2rem"}},r.length>2?o.a.createElement("p",null,r):null)},W=function(){var e=Object(a.useRef)({page:0}),t=Object(a.useState)(1),n=t[0],l=t[1],r=Object(a.useState)(!1),f=r[0],p=r[1],j=Object(a.useState)(!1),O=j[0],y=j[1];return o.a.createElement("div",null,o.a.createElement(s.a,null,o.a.createElement(c.a,{span:14},o.a.createElement(i.b,null,o.a.createElement("h4",null,"Channels"),o.a.createElement(u.a,{title:"刷新"},o.a.createElement(m.a,{onClick:function(){e.current={page:0},l(n+1)},shape:"circle",icon:o.a.createElement(d.a,null)})),o.a.createElement(u.a,{title:"搜索"},o.a.createElement(m.a,{onClick:function(){return p(!0)},shape:"circle",icon:o.a.createElement(b.a,null)})))),o.a.createElement(c.a,{span:10},o.a.createElement("div",{style:{width:"100%",height:"auto"}},o.a.createElement(m.a,{style:{float:"right"},type:"link",onClick:function(){return y(!0)}},"新建")))),o.a.createElement(s.a,null,o.a.createElement(c.a,{span:24},o.a.createElement(z,{paramsObj:e.current}))),o.a.createElement(N,{visible:f,setVisible:p,queryHandle:function(t){e.current=Object.assign({},t),l(n+1),console.log("search...")}}),o.a.createElement(U,{reloadListCount:n,setReloadListCount:l,requestParams:e.current}),o.a.createElement(B,{visible:O,setVisible:y,reloadListCount:n,setReloadListCount:l}))};t.default=function(){return o.a.createElement(l.a,null,o.a.createElement(r.a,{title:"WX Channels"}),o.a.createElement(W,null))}},nBIS:function(e,t,n){var a=n("0/R4"),o=Math.floor;e.exports=function(e){return!a(e)&&isFinite(e)&&o(e)===e}},"p8V/":function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return O}));n("a1Th"),n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Z2Ku"),n("L9s1");var a=n("q1tI"),o=n.n(a),l=n("Vl3Y"),r=n("5rEg"),s=n("2/Rp"),c=n("zeV3"),i=n("7BUj").a.formCommonStyle,u=i.layoutForm,m=i.formItemLayout,d=i.tailFormItemLayout,b={width:260},f=function(e){var t=e.formKey,n=e.formKeyLabelObj,a=e.disabledKeys,s=e.updateFormObj,c=e.rulesObj,i=e.formKeySelectComponentsObj,u=e.passwordKeys,d=e.showLabelName,f=void 0===d||d,p=a.includes(t),j=n[t],O=s[t];return o.a.createElement(l.a.Item,Object.assign({},m,{name:t,label:f?j:"",initialValue:O,rules:c[t]?c[t]:[]}),Object.keys(i).includes(t)?i[t]:u.includes(t)?o.a.createElement(r.a.Password,{style:b}):o.a.createElement(r.a,{style:b,placeholder:"请输入 "+j,disabled:p}))},p=function(e){var t=e.formKey,n=e.formKeyLabelObj,a=e.disabledKeys,r=e.updateFormObj,c=e.rulesObj,i=e.formKeySelectComponentsObj,u=e.passwordKeys,d=e.formKeysItemButtonObj,b=d[t].buttonTips,p=n[t];return o.a.createElement(l.a.Item,Object.assign({},m,{label:p}),o.a.createElement(f,{formKey:t,formKeyLabelObj:n,disabledKeys:a,updateFormObj:r,rulesObj:c,formKeySelectComponentsObj:i,passwordKeys:u,showLabelName:!1}),o.a.createElement(s.a,{type:"link",onClick:function(e){console.log(e);try{d[t].clickMethod()}catch(n){console.log(n)}}},b))},j=function(e){var t=e.columns,n=e.disabledKeys,r=e.notShowKeys,i=e.formKeyLabelObj,m=e.formKeySelectComponentsObj,b=e.formKeysItemButtonObj,j=e.onFinish,O=e.cancelHandle,y=e.deleteHandle,g=e.showDeleteButton,h=e.updateFormObj,E=e.formInitialObj,v=e.initFormCount,C=e.rulesObj,K=e.passwordKeys,w=l.a.useForm()[0],S=Object(a.useState)(!1),_=S[0],q=S[1];Object(a.useEffect)((function(){w.setFieldsValue(h),q(!1)}),[h]),Object(a.useEffect)((function(){v>0&&(w.setFieldsValue(E),q(!1))}),[v]);return o.a.createElement(l.a,Object.assign({},u,{form:w,layout:"horizontal",onFinish:function(e){q(!0),j(e)},name:"adminer_info_edit"}),t.map((function(e,t){return r.includes(e)?null:Object.keys(b).includes(e)?o.a.createElement(p,{key:t.toString(),formKey:e,formKeyLabelObj:i,disabledKeys:n,updateFormObj:h,rulesObj:C,formKeySelectComponentsObj:m,passwordKeys:K,formKeysItemButtonObj:b}):o.a.createElement(f,{key:t.toString(),formKey:e,formKeyLabelObj:i,disabledKeys:n,updateFormObj:h,rulesObj:C,formKeySelectComponentsObj:m,passwordKeys:K})})),o.a.createElement(l.a.Item,d,o.a.createElement(c.b,null,o.a.createElement(s.a,{loading:_,disabled:_,type:"primary",htmlType:"submit"},"提交"),o.a.createElement(s.a,{onClick:O},"取消"),g?o.a.createElement(s.a,{loading:_,disabled:_,onClick:function(){q(!0),y()}},"删除"):null)))};j.defaultProps={columns:[],disabledKeys:[],notShowKeys:[],formKeyLabelObj:{},formKeySelectComponentsObj:{},formKeysItemButtonObj:{},onFinish:function(e){console.log(e)},cancelHandle:function(){console.log("Cancel Handle")},deleteHandle:function(){console.log("Delete Handle")},showDeleteButton:!1,updateFormObj:{},formInitialObj:{},initFormCount:0,rulesObj:{},passwordKeys:[],getFieldsValueHandle:function(e){return console.log(e)}};var O=function(e){var t=e.columns,n=e.disabledKeys,i=e.notShowKeys,u=e.formKeyLabelObj,m=e.formKeySelectComponentsObj,d=e.onFinish,f=e.onFinishButtonTips,p=e.cancelHandle,j=e.showCancelButton,O=e.deleteHandle,y=e.showDeleteButton,g=e.updateFormObj,h=e.formInitialObj,E=e.initFormCount,v=e.rulesObj,C=e.passwordKeys,K=(e.getFieldsValueHandle,l.a.useForm()[0]);Object(a.useEffect)((function(){K.setFieldsValue(g)}),[g]),Object(a.useEffect)((function(){K.setFieldsValue(h)}),[E]);var w=function(e){var t=e.formKey,a=n.includes(t),s=u[t],c=g[t];return o.a.createElement(l.a.Item,{name:t,initialValue:c,rules:v[t]?v[t]:[]},Object.keys(m).includes(t)?m[t]:C.includes(t)?o.a.createElement(r.a.Password,{style:b}):o.a.createElement(r.a,{style:b,placeholder:"请输入 "+s,disabled:a}))};return o.a.createElement(l.a,Object.assign({},{labelCol:{span:0},wrapperCol:{span:8}},{form:K,layout:"inline",onFinish:d,name:"adminer_info_edit"}),t.map((function(e,t){return i.includes(e)?null:o.a.createElement(w,{formKey:e,key:t.toString()})})),o.a.createElement(l.a.Item,null,o.a.createElement(c.b,null,o.a.createElement(s.a,{type:"primary",htmlType:"submit"},f),j?o.a.createElement(s.a,{onClick:p},"取消"):null,y?o.a.createElement(s.a,{onClick:O},"删除"):null)))};O.defaultProps={columns:[],disabledKeys:[],notShowKeys:[],formKeyLabelObj:{},formKeySelectComponentsObj:{},onFinish:function(e){console.log(e)},onFinishButtonTips:"确定/修改",cancelHandle:function(){console.log("Cancel Handle")},showCancelButton:!1,deleteHandle:function(){console.log("Delete Handle")},showDeleteButton:!1,updateFormObj:{},formInitialObj:{},initFormCount:0,rulesObj:{},passwordKeys:[],getFieldsValueHandle:function(e){return console.log(e)}}},rLCj:function(e,t,n){"use strict";n("91GP");var a=n("q1tI"),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"},l=n("6VBw"),r=function(e,t){return a.createElement(l.a,Object.assign({},e,{ref:t,icon:o}))};r.displayName="ReloadOutlined";t.a=a.forwardRef(r)},vpoQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("a1Th"),n("Btvt");var a=n("q1tI"),o=n.n(a),l=n("2fM7"),r=n("7BUj"),s=l.a.Option,c=function(e){var t=e.options,n=e.width,a=e.value,r=e.onChange;return o.a.createElement(l.a,{style:{width:n},onChange:r,value:a},t.map((function(e,t){return o.a.createElement(s,{key:t.toString(),value:e.value},e.label)})))};c.defaultProps={options:[],width:r.a.selectComponentWidth,value:null,onChange:function(e){console.log(e)}}}}]);
//# sourceMappingURL=component---src-pages-wxchannels-js-aeb71ca9f8aea854afd3.js.map
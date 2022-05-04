"use strict";(self.webpackChunkclient_admin_v102=self.webpackChunkclient_admin_v102||[]).push([[3859],{1380:function(e,t,n){n.d(t,{Z:function(){return Q}});var a=n(7294),r=n(3148),o=n(6452),s=n(7371),l=n(2889),u=n(3299),c=n(4167),i=n(6858),m=n(3765),d=n(8654),p=n(6306),f=n(7047),_=n(5604),b=n(2486),g=n(3419),v=["id","name","mobile","email","wx_nick_name","wx_openid","password","people_id","address","custormer_category","avatar","add_time","update_time","explains","is_valid","purchase_total_counts"],h=["id","name","mobile","email","password","people_id","address","avatar","explains","is_valid"],E=["id","group_purchase_commander_name","wx_nick_name","wx_openid","avatar","avatar_url","add_time","update_time"],C=["group_purchase_commander_name","password","avatar","avatar_url"],O={id:"顾客ID",group_purchase_commander_id:"团购团ID",group_purchase_commander_name:"团购团长",name:"顾客姓名",mobile:"顾客手机",email:"E-Mail",wx_nick_name:"微信昵称",wx_openid:"微信openid",password:"顾客密码",people_id:"身份证号",address:"地址",custormer_category:"顾客级别",avatar:"顾客头像",add_time:"创建时间",update_time:"更新时间",explains:"说明",is_valid:"有效",purchase_total_counts:"购物总次数"},j={is_valid:a.createElement(b.A,{options:[{value:!1,label:"否"},{value:!0,label:"是"}]}),custormer_category:a.createElement(b.A,{options:[{value:1,label:"一般顾客"},{value:2,label:"优质顾客"},{value:3,label:"VIP顾客"},{value:4,label:"团购团长"}]})},y=function(e){return{group_purchase_commander_name:{buttonTips:"选择团长",clickMethod:function(){return e(!0)}}}},q=["id","name","mobile"],S={id:0,group_purchase_commander_id:0,group_purchase_commander_name:"",name:"name(WX-昵称/ID)",mobile:"",email:"",wx_openid:"",password:"",people_id:"",address:"",custormer_category:1,avatar:"顾客头像",add_time:"创建时间",update_time:"更新时间",explains:"说明",is_valid:!0,purchase_total_counts:0},k=["avatar"],w=["admin-customer/v1/customer"],x=function(e){var t=e.item,n=e.index,r=e.itemDetailClick,o=e.selectButtonOnClick,s=(0,a.useState)(""),l=s[0],u=s[1],c=(0,a.useState)(""),i=c[0],m=c[1];(0,a.useEffect)((function(){var e=t.name?"姓名: "+t.name:"";e="顾客ID: "+t.id+"; "+e;var n="",a=t.avatar_url?t.avatar_url:"",r="";Object.keys(t).includes("wx_info")&&Object.keys(t.wx_info).includes("wx_nickname")&&(n=t.wx_info.wx_nickname,r=t.wx_info.wx_avatar),u(n.length>0?e+"("+n+")":e),m(a.length>0?a:r)}),[t]);var d=(0,a.useState)([]),p=d[0],f=d[1];return(0,a.useEffect)((function(){o&&f([{buttonLabel:"选择",onClick:function(e){o(t,n)}}])}),[o]),a.createElement("div",null,a.createElement(g.Z,{listsIndex:n,url:i,productTitle:l,productEffects:"手机: "+t.mobile,salePrice:0,clickDetailHandle:r,customButtons:p}))},D=function(e){var t=e.requestCount,n=e.reqParams,r=e.responseDataHandle,o=w[0];return a.createElement(_.Z,{responseDataHandle:r,api:o,method:"get",reqParams:n,reqObject:{},requestCount:t})};D.defaultProps={requestCount:0,reqParams:{},responseDataHandle:function(e){console.log(e)}};var Z=function(e){var t=e.requestCount,n=e.reqObject,r=e.responseDataHandle,o=[].concat(w)[0];return a.createElement(_.Z,{responseDataHandle:r,api:o,method:"post",reqParams:{},reqObject:n,requestCount:t})};Z.defaultProps={requestCount:0,reqObject:{},responseDataHandle:function(e){console.log(e)}};var H=function(e){var t=e.requestCount,n=e.reqObject,r=e.responseDataHandle,o=e.id,s=[].concat(w)[0]+"/"+o;return a.createElement(_.Z,{responseDataHandle:r,api:s,method:"put",reqParams:{},reqObject:n,requestCount:t})};H.defaultProps={requestCount:0,reqObject:{},responseDataHandle:function(e){console.log(e)},id:0};var P=function(e){var t=e.requestCount,n=e.responseDataHandle,r=e.id,o=[].concat(w)[0]+"/"+r;return a.createElement(_.Z,{responseDataHandle:n,api:o,method:"delete",reqParams:{},reqObject:{},requestCount:t})};P.defaultProps={requestCount:0,responseDataHandle:function(e){console.log(e)},id:0};var L=n(5071),R=n(7335),K=["id","password","avatar","avatar_url"],I=function(e){var t=e.visible,n=e.setVisible,r=e.reloadListCount,o=e.setReloadListCount,s=(0,a.useRef)({}),l=(0,a.useRef)({createCount:0}),u=(0,a.useState)(0),c=u[0],i=u[1],_=(0,a.useState)(0),b=_[0],g=_[1],v=(0,a.useRef)({});(0,a.useEffect)((function(){t&&(i(c+1),l.current={createCount:l.current.createCount+1})}),[t]);var C=(0,a.useState)({}),q=C[0],w=C[1],x=(0,a.useState)(!1),D=x[0],H=x[1],P=(0,a.useRef)(0),I=function(){s.current={},n(!1)};return a.createElement(a.Fragment,null,a.createElement(d.Z,{visible:t,title:"Customers 新建",closable:!1,footer:null},a.createElement("div",{style:{width:"100%",height:"auto",textAlign:"center"}},a.createElement(f.DX,{oldObj:l.current,maxImagesNum:1,imageKeyName:k[0],onChange:function(e){s.current=Object.assign({},e)}})),a.createElement(p.Z,null),a.createElement(R.E,{modalState:D,setModalState:H,selectHandle:function(e){var t=e.name;w({group_purchase_commander_name:t}),e.id>0&&(P.current=e.id),H(!1)}}),a.createElement(L.y,{columns:h,disabledKeys:E,notShowKeys:K,formKeyLabelObj:O,formKeySelectComponentsObj:j,formKeysItemButtonObj:y(H),onFinish:function(e){var t=Object.assign({},e,s.current);"string"==typeof t.group_purchase_commander_name&&t.group_purchase_commander_name.length>0&&(t.group_purchase_commander_id=P.current),delete t.group_purchase_commander_name,v.current=t,console.log(t),g(b+1)},cancelHandle:I,showDeleteButton:!1,formInitialObj:S,initFormCount:c,updateFormObj:q}),a.createElement(Z,{requestCount:b,reqObject:v.current,responseDataHandle:function(e){Object.keys(e).includes("code")&&1e3===e.code?(I(),o(r+1)):m.ZP.error("网络错误...")}})))};I.defaultProps={visible:!1,setVisible:function(e){return console.log(e)},reloadListCount:0,setReloadListCount:function(e){return console.log(e)}};var B=I,F=n(8146),V=["group_purchase_commander_name","wx_nick_name","wx_openid","avatar","avatar_url","add_time","update_time"],M=function(e){var t=e.visible,n=e.setVisible,r=e.queryHandle,o=(0,a.useState)(0),s=o[0],l=o[1],u=(0,a.useState)({}),c=u[0],i=u[1],m=(0,a.useState)(!1),d=m[0],p=m[1],f=(0,a.useRef)(0),_=function(){l(s+1),n(!1)};return a.createElement(a.Fragment,null,a.createElement(F.Z,{title:"销售记录查询",width:"100%",height:"400px",placement:"top",onClose:_,visible:t,bodyStyle:{paddingBottom:80},footer:null},a.createElement(L.y,{columns:q,disabledKeys:V,formKeyLabelObj:O,formKeySelectComponentsObj:j,formKeysItemButtonObj:y(p),onFinish:function(e){var t={},n=e.id?parseInt(e.id):0;n>0?r({id:n}):(f.current>0&&(t.group_purchase_commander_id=f.current),e.name&&e.name.length>0&&(t.name=e.name,t.wx_nick_name=e.name),e.mobile&&e.mobile.length>0&&(t.mobile=e.mobile),r(t)),setTimeout((function(){_()}),50)},cancelHandle:function(){return n(!1)},showDeleteButton:!1,formInitialObj:S,initFormCount:s,updateFormObj:c})),a.createElement(R.E,{modalState:d,setModalState:p,selectHandle:function(e){var t=e.name;i({group_purchase_commander_name:t}),e.id>0&&(f.current=e.id),p(!1)}}))};M.defaultProps={visible:!1,setVisible:function(e){console.log(e)},queryHandle:function(e){console.log(e)}};var N=M,A=n(1135),T=function(e){var t=e.visible,n=e.setVisible,r=e.oldObj,o=e.reloadListCount,s=e.setReloadListCount,l=(0,a.useState)([]),u=(l[0],l[1]),c=(0,a.useRef)({}),i=(0,a.useState)(""),_=(i[0],i[1],(0,a.useState)({})),b=_[0],g=_[1],h=(0,a.useState)(0),q=h[0],S=h[1],w=(0,a.useState)(0),x=w[0],D=w[1],Z=(0,a.useRef)({}),K=(0,a.useState)(0),I=K[0],B=K[1],F=(0,a.useState)(!1),V=F[0],M=F[1],N=(0,a.useRef)(0);(0,a.useEffect)((function(){A()}),[t,r]);var A=function(){S(q+1),g(Object.assign({},r));for(var e=[],t=k[0],n=1;n<10;n++){var a=t+n,o=a+"_url",s=r[a],l=r[o];"string"==typeof s&&s.length>5&&e.push({cosNameKey:a,cosName:s,urlKey:o,url:l})}u(e)};return a.createElement(d.Z,{visible:t,title:"Customers",closable:!1,footer:null},a.createElement("div",{style:{width:"100%",height:"auto",textAlign:"center"}},a.createElement(f.DX,{maxImagesNum:1,imageKeyName:k[0],oldObj:r,onChange:function(e){c.current=e}})),a.createElement(p.Z,null),a.createElement(L.y,{columns:v,disabledKeys:E,notShowKeys:C,formKeyLabelObj:O,formKeySelectComponentsObj:j,formKeysItemButtonObj:y(M),onFinish:function(e){var t=Object.assign({},e,c.current);console.log(t),t.group_purchase_commander_name&&t.group_purchase_commander_name.length>0&&N.current>0&&(t.group_purchase_commander_id=N.current),delete t.group_purchase_commander_name,Z.current=t,D(x+1)},cancelHandle:function(){return n(!1)},showDeleteButton:!0,deleteHandle:function(){B(I+1),s(o+1)},updateFormObj:b,formInitialObj:{},initFormCount:q}),a.createElement(R.E,{modalState:V,setModalState:M,selectHandle:function(e){var t=e.name;g({group_purchase_commander_name:t}),e.id>0&&(N.current=e.id),M(!1)}}),a.createElement(H,{requestCount:x,reqObject:Z.current,responseDataHandle:function(e){Object.keys(e).includes("code")&&1e3===e.code?(m.ZP.success("修改成功"),s(o+1),n(!1)):m.ZP.error("网络错误...")},id:b.id}),a.createElement(P,{requestCount:I,responseDataHandle:function(e){return n(!1)},id:b.id}))};T.defaultProps={visible:!1,setVisible:function(e){return console.log(e)},oldObj:{}};var X=T,W=function(e){return!!(Object.keys(e).includes("next")&&"string"==typeof e.next&&e.next.length>5)},z=function(e){var t=e.reloadListCount,n=e.setReloadListCount,r=e.requestParams,o=e.selectButtonOnClick,s=(0,a.useRef)(!0),l=(0,a.useState)(!0),u=l[0],c=l[1],i=(0,a.useState)(!1),m=i[0],d=i[1],p=(0,a.useRef)({page:0}),f=(0,a.useState)([]),_=f[0],b=f[1],g=(0,a.useState)(0),v=g[0],h=g[1],E=(0,a.useState)(!1),C=E[0],O=E[1],j=(0,a.useState)({}),y=j[0],q=j[1];(0,a.useEffect)((function(){p.current=Object.assign({},r),k()}),[t]);var S=function(){if(s.current&&!m){var e=Number.isInteger(p.current.page)?p.current.page+1:1;p.current=Object.assign({},p.current,{page:e}),console.log(p.current),h(v+1),d(!0)}else console.log("Error state: hasMore is ",s.current,", loading is ",m)},k=function(){p.current=Object.assign({},p.current,{page:0}),b([]),s.current=!0,d(!1),setTimeout((function(){S(),console.log("end loadMore...")}),100)},w=function(e){var t=Object.assign({},_[e]);console.log(t),q(t),O(!0)};return a.createElement("div",null,a.createElement(D,{requestCount:v,reqParams:p.current,responseDataHandle:function(e){console.log("resp process..."),d(!1),Object.keys(e).includes("code")&&1e3===e.code&&Object.keys(e).includes("results")?(b(_.concat(e.results)),s.current=W(e),c(W(e))):console.log("Error: get data...")}}),a.createElement(A.Z,{productsData:_,loadMore:S,hasMore:u,ItemRendererComponent:function(e){var t=e.item,n=e.index;return a.createElement(x,{item:t,index:n,itemDetailClick:w,selectButtonOnClick:o})}}),a.createElement(X,{visible:C,setVisible:O,oldObj:y,reloadListCount:t,setReloadListCount:n}))};z.defaultProps={reloadListCount:1,setReloadListCount:function(e){console.log(e)},requestParams:{page:0},selectButtonOnClick:null};var G=z,J=function(e){var t=e.paramsObj,n=void 0===t?{}:t,r=(0,a.useState)(""),o=r[0],s=r[1];(0,a.useEffect)((function(){l()}),[n]);var l=function(){var e="";Object.keys(n).forEach((function(t){if(Object.keys(O).includes(t)){var a=" "+O[t]+" = "+n[t]+";";e+=a}})),e.length>2?s(e="查询条件:"+e):(console.log("查询条件为空"),s(""))};return a.createElement("div",{style:{height:"auto",width:"100%",padding:"0.1rem 0.2rem"}},o.length>2?a.createElement("p",null,o):null)},Q=function(e){var t=e.selectButtonOnClick,n=void 0===t?null:t,m=(0,a.useRef)({page:0}),d=(0,a.useState)(1),p=d[0],f=d[1],_=(0,a.useState)(!1),b=_[0],g=_[1],v=(0,a.useState)(!1),h=v[0],E=v[1];return a.createElement("div",null,a.createElement(r.Z,null,a.createElement(o.Z,{span:14},a.createElement(s.Z,null,a.createElement("h4",null,"Customers"),a.createElement(l.Z,{title:"刷新"},a.createElement(u.Z,{onClick:function(){m.current={page:0},f(p+1)},shape:"circle",icon:a.createElement(c.Z,null)})),a.createElement(l.Z,{title:"搜索"},a.createElement(u.Z,{onClick:function(){return g(!0)},shape:"circle",icon:a.createElement(i.Z,null)})))),a.createElement(o.Z,{span:10},a.createElement("div",{style:{width:"100%",height:"auto"}},a.createElement(u.Z,{style:{float:"right"},type:"link",onClick:function(){return E(!0)}},"新建")))),a.createElement(r.Z,null,a.createElement(o.Z,{span:24},a.createElement(J,{paramsObj:m.current}))),a.createElement(N,{visible:b,setVisible:g,queryHandle:function(e){m.current=Object.assign({},e),f(p+1),console.log("search...")}}),a.createElement(G,{reloadListCount:p,setReloadListCount:f,requestParams:m.current,selectButtonOnClick:n}),a.createElement(B,{visible:h,setVisible:E,reloadListCount:p,setReloadListCount:f}))}}}]);
//# sourceMappingURL=cb8b892e3c1cd0094906d82e3c73cbb99ac9ca76-d3c3c71897f863ff1682.js.map
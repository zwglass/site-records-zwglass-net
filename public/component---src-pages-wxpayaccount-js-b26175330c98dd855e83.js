"use strict";(self.webpackChunkclient_admin_v102=self.webpackChunkclient_admin_v102||[]).push([[5782],{4167:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(1413),a=n(7294),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"},r=n(7041),s=function(e,t){return a.createElement(r.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:t,icon:l}))};s.displayName="ReloadOutlined";var c=a.forwardRef(s)},5071:function(e,t,n){n.d(t,{p:function(){return y},y:function(){return p}});var o=n(7294),a=n(1152),l=n(2184),r=n(3299),s=n(7371),c=n(5455).Z.formCommonStyle,u=c.layoutForm,i=c.formItemLayout,m=c.tailFormItemLayout,d={width:260},f=function(e){var t=e.formKey,n=e.formKeyLabelObj,r=e.disabledKeys,s=e.updateFormObj,c=e.rulesObj,u=e.formKeySelectComponentsObj,m=e.passwordKeys,f=e.showLabelName,b=void 0===f||f,p=r.includes(t),y=n[t],O=s[t];return o.createElement(a.Z.Item,Object.assign({},i,{name:t,label:b?y:"",initialValue:O,rules:c[t]?c[t]:[]}),Object.keys(u).includes(t)?u[t]:m.includes(t)?o.createElement(l.Z.Password,{style:d}):o.createElement(l.Z,{style:d,placeholder:"请输入 "+y,disabled:p}))},b=function(e){var t=e.formKey,n=e.formKeyLabelObj,l=e.disabledKeys,s=e.updateFormObj,c=e.rulesObj,u=e.formKeySelectComponentsObj,m=e.passwordKeys,d=e.formKeysItemButtonObj,b=d[t].buttonTips,p=n[t];return o.createElement(a.Z.Item,Object.assign({},i,{label:p}),o.createElement(f,{formKey:t,formKeyLabelObj:n,disabledKeys:l,updateFormObj:s,rulesObj:c,formKeySelectComponentsObj:u,passwordKeys:m,showLabelName:!1}),o.createElement(r.Z,{type:"link",onClick:function(e){console.log(e);try{d[t].clickMethod()}catch(n){console.log(n)}}},b))},p=function(e){var t=e.columns,n=e.disabledKeys,l=e.notShowKeys,c=e.formKeyLabelObj,i=e.formKeySelectComponentsObj,d=e.formKeysItemButtonObj,p=e.onFinish,y=e.cancelHandle,O=e.deleteHandle,j=e.showDeleteButton,g=e.updateFormObj,C=e.formInitialObj,E=e.initFormCount,K=e.rulesObj,h=e.passwordKeys,v=a.Z.useForm()[0],Z=(0,o.useState)(!1),S=Z[0],k=Z[1];(0,o.useEffect)((function(){v.setFieldsValue(g),k(!1)}),[g]),(0,o.useEffect)((function(){E>0&&(v.setFieldsValue(C),k(!1))}),[E]);return o.createElement(a.Z,Object.assign({},u,{form:v,layout:"horizontal",onFinish:function(e){k(!0),p(e)},name:"adminer_info_edit"}),t.map((function(e,t){return l.includes(e)?null:Object.keys(d).includes(e)?o.createElement(b,{key:t.toString(),formKey:e,formKeyLabelObj:c,disabledKeys:n,updateFormObj:g,rulesObj:K,formKeySelectComponentsObj:i,passwordKeys:h,formKeysItemButtonObj:d}):o.createElement(f,{key:t.toString(),formKey:e,formKeyLabelObj:c,disabledKeys:n,updateFormObj:g,rulesObj:K,formKeySelectComponentsObj:i,passwordKeys:h})})),o.createElement(a.Z.Item,m,o.createElement(s.Z,null,o.createElement(r.Z,{loading:S,disabled:S,type:"primary",htmlType:"submit"},"提交"),o.createElement(r.Z,{onClick:y},"取消"),j?o.createElement(r.Z,{loading:S,disabled:S,onClick:function(){k(!0),O()}},"删除"):null)))};p.defaultProps={columns:[],disabledKeys:[],notShowKeys:[],formKeyLabelObj:{},formKeySelectComponentsObj:{},formKeysItemButtonObj:{},onFinish:function(e){console.log(e)},cancelHandle:function(){console.log("Cancel Handle")},deleteHandle:function(){console.log("Delete Handle")},showDeleteButton:!1,updateFormObj:{},formInitialObj:{},initFormCount:0,rulesObj:{},passwordKeys:[],getFieldsValueHandle:function(e){return console.log(e)}};var y=function(e){var t=e.columns,n=e.disabledKeys,c=e.notShowKeys,u=e.formKeyLabelObj,i=e.formKeySelectComponentsObj,m=e.onFinish,f=e.onFinishButtonTips,b=e.cancelHandle,p=e.showCancelButton,y=e.deleteHandle,O=e.showDeleteButton,j=e.updateFormObj,g=e.formInitialObj,C=e.initFormCount,E=e.rulesObj,K=e.passwordKeys,h=(e.getFieldsValueHandle,a.Z.useForm()[0]);(0,o.useEffect)((function(){h.setFieldsValue(j)}),[j]),(0,o.useEffect)((function(){h.setFieldsValue(g)}),[C]);var v=function(e){var t=e.formKey,r=n.includes(t),s=u[t],c=j[t];return o.createElement(a.Z.Item,{name:t,initialValue:c,rules:E[t]?E[t]:[]},Object.keys(i).includes(t)?i[t]:K.includes(t)?o.createElement(l.Z.Password,{style:d}):o.createElement(l.Z,{style:d,placeholder:"请输入 "+s,disabled:r}))};return o.createElement(a.Z,Object.assign({},{labelCol:{span:0},wrapperCol:{span:8}},{form:h,layout:"inline",onFinish:m,name:"adminer_info_edit"}),t.map((function(e,t){return c.includes(e)?null:o.createElement(v,{formKey:e,key:t.toString()})})),o.createElement(a.Z.Item,null,o.createElement(s.Z,null,o.createElement(r.Z,{type:"primary",htmlType:"submit"},f),p?o.createElement(r.Z,{onClick:b},"取消"):null,O?o.createElement(r.Z,{onClick:y},"删除"):null)))};y.defaultProps={columns:[],disabledKeys:[],notShowKeys:[],formKeyLabelObj:{},formKeySelectComponentsObj:{},onFinish:function(e){console.log(e)},onFinishButtonTips:"确定/修改",cancelHandle:function(){console.log("Cancel Handle")},showCancelButton:!1,deleteHandle:function(){console.log("Delete Handle")},showDeleteButton:!1,updateFormObj:{},formInitialObj:{},initFormCount:0,rulesObj:{},passwordKeys:[],getFieldsValueHandle:function(e){return console.log(e)}}},2613:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var o=n(7294),a=n(4564),l=n(262),r=n(3148),s=n(6452),c=n(7371),u=n(2889),i=n(3299),m=n(4167),d=n(3765),f=n(8654),b=n(6306),p=n(7047),y=n(5604),O=n(3419),j=["company_name","app_id","app_secret","message_token","message_encoding_aeskey","mch_id","api_key","apiv3_key"],g=[],C=["app_secret","message_token","message_encoding_aeskey"],E={company_name:"公司名称",app_id:"小程序appid",app_secret:"微信支付密钥",message_token:"信息token",message_encoding_aeskey:"aeskey",mch_id:"微信支付商户号",api_key:"API密钥",apiv3_key:"APIv3密钥"},K={},h={},v=[],Z=["wxpay-admin/v1/companywxpayinfo"],S=function(e){var t=e.item,n=e.index,a=e.itemDetailClick;return console.log(t),o.createElement("div",null,o.createElement(O.Z,{listsIndex:n,productTitle:t.company_name,productEffects:"小程序: app_id("+t.app_id+")",salePrice:0,clickDetailHandle:a}))},k=function(e){var t=e.requestCount,n=e.reqParams,a=e.responseDataHandle,l=Z[0];return o.createElement(y.Z,{responseDataHandle:a,api:l,method:"get",reqParams:n,reqObject:{},requestCount:t})};k.defaultProps={requestCount:0,reqParams:{},responseDataHandle:function(e){console.log(e)}};var F=function(e){var t=e.requestCount,n=e.reqObject,a=e.responseDataHandle,l=[].concat(Z)[0];return o.createElement(y.Z,{responseDataHandle:a,api:l,method:"post",reqParams:{},reqObject:n,requestCount:t})};F.defaultProps={requestCount:0,reqObject:{},responseDataHandle:function(e){console.log(e)}};var w=function(e){var t=e.requestCount,n=e.reqObject,a=e.responseDataHandle,l=e.id,r=[].concat(Z)[0]+"/"+l;return o.createElement(y.Z,{responseDataHandle:a,api:r,method:"put",reqParams:{},reqObject:n,requestCount:t})};w.defaultProps={requestCount:0,reqObject:{},responseDataHandle:function(e){console.log(e)},id:0};var q=function(e){var t=e.requestCount,n=e.responseDataHandle,a=e.id,l=[].concat(Z)[0]+"/"+a;return o.createElement(y.Z,{responseDataHandle:n,api:l,method:"delete",reqParams:{},reqObject:{},requestCount:t})};q.defaultProps={requestCount:0,responseDataHandle:function(e){console.log(e)},id:0};var H=n(5071),_=function(e){var t=e.visible,n=e.setVisible,a=e.reloadListCount,l=e.setReloadListCount,r=(0,o.useRef)({}),s=(0,o.useRef)({createCount:0}),c=(0,o.useState)(0),u=c[0],i=c[1],m=(0,o.useState)(0),y=m[0],O=m[1],Z=(0,o.useRef)({}),S=function(){r.current={},s.current={createCount:s.current.createCount+1},i(u+1),n(!1)};return o.createElement(o.Fragment,null,o.createElement(f.Z,{visible:t,title:"WxpayAccount 新建",closable:!1,footer:null},o.createElement("div",{style:{width:"100%",height:"auto",textAlign:"center"}},o.createElement(p.DX,{oldObj:s.current,maxImagesNum:0,imageKeyName:v[0],onChange:function(e){r.current=Object.assign({},e)}})),o.createElement(b.Z,null),o.createElement(H.y,{columns:j,disabledKeys:g,notShowKeys:C,formKeyLabelObj:E,formKeySelectComponentsObj:K,onFinish:function(e){var t=Object.assign({},e,r.current);Z.current=t,O(y+1)},cancelHandle:S,showDeleteButton:!1,formInitialObj:h,initFormCount:u}),o.createElement(F,{requestCount:y,reqObject:Z.current,responseDataHandle:function(e){Object.keys(e).includes("code")&&1e3===e.code?(S(),l(a+1)):d.ZP.error("网络错误...")}})))};_.defaultProps={visible:!1,setVisible:function(e){return console.log(e)},reloadListCount:0,setReloadListCount:function(e){return console.log(e)}};var L=_,D=n(1135),P=function(e){var t=e.visible,n=e.setVisible,a=e.oldObj,l=e.reloadListCount,r=e.setReloadListCount,s=(0,o.useState)([]),c=(s[0],s[1]),u=(0,o.useRef)({}),i=(0,o.useState)(""),m=(i[0],i[1],(0,o.useState)({})),y=m[0],O=m[1],h=(0,o.useState)(0),Z=h[0],S=h[1],k=(0,o.useState)(0),F=k[0],_=k[1],L=(0,o.useRef)({}),D=(0,o.useState)(0),P=D[0],I=D[1];(0,o.useEffect)((function(){x()}),[t,a]);var x=function(){S(Z+1),O(Object.assign({},a));for(var e=[],t=v[0],n=1;n<10;n++){var o=t+n,l=o+"_url",r=a[o],s=a[l];"string"==typeof r&&r.length>5&&e.push({cosNameKey:o,cosName:r,urlKey:l,url:s})}c(e)};return o.createElement(f.Z,{visible:t,title:"WxpayAccount",closable:!1,footer:null},o.createElement("div",{style:{width:"100%",height:"auto",textAlign:"center"}},o.createElement(p.DX,{maxImagesNum:0,imageKeyName:v[0],oldObj:a,onChange:function(e){u.current=e}})),o.createElement(b.Z,null),o.createElement(H.y,{columns:j,disabledKeys:g,notShowKeys:C,formKeyLabelObj:E,formKeySelectComponentsObj:K,onFinish:function(e){var t=Object.assign({},e,u.current);console.log(t),L.current=t,_(F+1)},cancelHandle:function(){return n(!1)},showDeleteButton:!0,deleteHandle:function(){I(P+1),r(l+1)},updateFormObj:y,formInitialObj:{},initFormCount:Z}),o.createElement(w,{requestCount:F,reqObject:L.current,responseDataHandle:function(e){Object.keys(e).includes("code")&&1e3===e.code?(d.ZP.success("修改成功"),r(l+1),n(!1)):d.ZP.error("网络错误...")},id:y.id}),o.createElement(q,{requestCount:P,responseDataHandle:function(e){return n(!1)},id:y.id}))};P.defaultProps={visible:!1,setVisible:function(e){return console.log(e)},oldObj:{}};var I=P,x=function(e){var t=e.reloadListCount,n=e.setReloadListCount,a=(e.requestParams,(0,o.useState)(!0)),l=a[0],r=a[1],s=(0,o.useState)(!1),c=s[0],u=s[1],i=(0,o.useState)(!0),m=i[0],d=i[1],f=(0,o.useState)([]),b=f[0],p=f[1],y=(0,o.useState)(0),O=y[0],j=y[1],g=(0,o.useState)(!1),C=g[0],E=g[1],K=(0,o.useState)({}),h=K[0],v=K[1];(0,o.useEffect)((function(){F()}),[t]);var Z=function(){l&&!c?(j(O+1),u(!0)):console.log("Error state: hasMore is ",l,", loading is ",c)};(0,o.useEffect)((function(){m&&l&&!c&&(d(!1),Z())}),[m,l,c]);var F=function(){p([]),r(!0),u(!1),d(!0)},w=function(e){var t=Object.assign({},b[e]);console.log(t),v(t),E(!0)};return o.createElement("div",null,o.createElement(k,{requestCount:O,responseDataHandle:function(e){console.log("resp process..."),u(!1),Object.keys(e).includes("code")&&1e3===e.code&&Object.keys(e).includes("results")?(p(b.concat(e.results)),r(function(e){return!!(Object.keys(e).includes("next")&&"string"==typeof e.next&&e.next.length>5)}(e))):console.log("Error: get data...")}}),o.createElement(D.Z,{productsData:b,loadMore:Z,hasMore:l,ItemRendererComponent:function(e){var t=e.item,n=e.index;return o.createElement(S,{item:t,index:n,itemDetailClick:w})}}),o.createElement(I,{visible:C,setVisible:E,oldObj:h,reloadListCount:t,setReloadListCount:n}))};x.defaultProps={reloadListCount:1,setReloadListCount:function(e){console.log(e)},requestParams:{page:0}};var R=x,B=function(){var e=(0,o.useRef)({page:0}),t=(0,o.useState)(1),n=t[0],a=t[1],l=(0,o.useState)(!1),d=l[0],f=l[1];return o.createElement("div",null,o.createElement(r.Z,null,o.createElement(s.Z,{span:14},o.createElement(c.Z,null,o.createElement("h4",null,"WxpayAccount"),o.createElement(u.Z,{title:"刷新"},o.createElement(i.Z,{onClick:function(){e.current={page:0},a(n+1)},shape:"circle",icon:o.createElement(m.Z,null)}))))),o.createElement(R,{reloadListCount:n,setReloadListCount:a,requestParams:e.current}),o.createElement(L,{visible:d,setVisible:f,reloadListCount:n,setReloadListCount:a}))},V=function(){return o.createElement(a.Z,null,o.createElement(l.Z,{title:"WxPay"}),o.createElement(B,null))}}}]);
//# sourceMappingURL=component---src-pages-wxpayaccount-js-b26175330c98dd855e83.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{fN96:function(e,t,n){var a=n("XKFU");a(a.S,"Number",{isInteger:n("nBIS")})},"h/TN":function(e,t,n){"use strict";n("91GP");var a=n("q1tI"),o=n.n(a),r=n("BMrR"),l=n("kPKH"),s=n("zeV3"),c=n("3S7+"),u=n("2/Rp"),i=n("rLCj"),m=n("l+S1"),d=(n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Z2Ku"),n("L9s1"),n("f3/d"),n("tsqr")),b=n("kLXV"),f=n("PArb"),p=n("g/of"),O=n("Sm+g"),j=n("vpoQ"),y=n("/a2Y"),g=["id","commander_customer_id","name","mobile","password","email","wx_openid","people_id","address","avatar","add_time","update_time","explains","is_valid"],E=["id","wx_openid","add_time","update_time"],v=["commander_customer_id","wx_openid","avatar"],C={id:"ID",commander_customer_id:"团长ID",name:"购物团名",mobile:"团长手机",password:"登陆密码",email:"团长E-Mail",wx_openid:"团长微信openid",people_id:"团长身份证号",address:"团长地址",avatar:"购物团头像",add_time:"创建时间",update_time:"更新时间",explains:"说明",is_valid:"是否有效"},h={is_valid:o.a.createElement(j.a,{options:[{value:!1,label:"否"},{value:!0,label:"是"}]})},K=function(e){return{group_purchase_commander_name:{buttonTips:"选择顾客",clickMethod:function(){return e(!0)}}}},S=[],w={id:0,commander_customer_id:0,name:"",mobile:"",password:"123456",email:"",wx_openid:"",people_id:"",address:"",avatar:"",add_time:"创建时间",update_time:"",explains:"",is_valid:!0},q={password:[{required:!0,message:"Please input Password!"},{min:6,max:16,message:"密码6-16个字符!"},{pattern:/^[a-z_A-Z0-9-\.!@#\$%\\\^&\*\)\(\+=\{\}\[\]\/",'<>~\·`\?:;|]+$/,message:"只能字母、数字、英文符号"}],mobile:[{required:!0,message:"Please input Mobile!"}]},F=["avatar"],k=["admin-customer/v1/grouppurchasecommander"],H=function(e){var t=e.item,n=e.index,r=e.itemDetailClick,l=e.selectButtonOnClick,s=Object(a.useState)([]),c=s[0],u=s[1];return Object(a.useEffect)((function(){l&&u([{buttonLabel:"选择",onClick:function(e){l(t,n)}}])}),[l]),o.a.createElement("div",null,o.a.createElement(y.a,{listsIndex:n,url:t.avatar_url,productTitle:t.name,productEffects:"手机: "+t.mobile,salePrice:0,clickDetailHandle:r,customButtons:c}))},_=function(e){var t=e.requestCount,n=e.reqParams,a=e.responseDataHandle,r=k[0];return o.a.createElement(O.a,{responseDataHandle:a,api:r,method:"get",reqParams:n,reqObject:{},requestCount:t})};_.defaultProps={requestCount:0,reqParams:{},responseDataHandle:function(e){console.log(e)}};var L=function(e){var t=e.requestCount,n=e.reqObject,a=e.responseDataHandle,r=[].concat(k)[0];return o.a.createElement(O.a,{responseDataHandle:a,api:r,method:"post",reqParams:{},reqObject:n,requestCount:t})};L.defaultProps={requestCount:0,reqObject:{},responseDataHandle:function(e){console.log(e)}};var P=function(e){var t=e.requestCount,n=e.reqObject,a=e.responseDataHandle,r=e.id,l=[].concat(k)[0]+"/"+r;return o.a.createElement(O.a,{responseDataHandle:a,api:l,method:"put",reqParams:{},reqObject:n,requestCount:t})};P.defaultProps={requestCount:0,reqObject:{},responseDataHandle:function(e){console.log(e)},id:0};var B=function(e){var t=e.requestCount,n=e.responseDataHandle,a=e.id,r=[].concat(k)[0]+"/"+a;return o.a.createElement(O.a,{responseDataHandle:n,api:r,method:"delete",reqParams:{},reqObject:{},requestCount:t})};B.defaultProps={requestCount:0,responseDataHandle:function(e){console.log(e)},id:0};var I=n("p8V/"),D=n("tW9P"),R=function(e){var t=e.visible,n=e.setVisible,r=e.reloadListCount,l=e.setReloadListCount,s=Object(a.useRef)({}),c=Object(a.useRef)({createCount:0}),u=Object(a.useState)(0),i=u[0],m=u[1],O=Object(a.useState)(0),j=O[0],y=O[1],S=Object(a.useRef)({}),k=Object(a.useState)({}),H=k[0],_=k[1],P=Object(a.useState)(!1),B=P[0],R=P[1],V=Object(a.useRef)(0),x=function(){s.current={},c.current={createCount:c.current.createCount+1},m(i+1),n(!1)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{visible:t,title:"GroupPurchaseCommander 新建",closable:!1,footer:null},o.a.createElement("div",{style:{width:"100%",height:"auto",textAlign:"center"}},o.a.createElement(p.b,{oldObj:c.current,maxImagesNum:1,imageKeyName:F[0],onChange:function(e){s.current=Object.assign({},e)}})),o.a.createElement(f.a,null),o.a.createElement(D.a,{modalState:B,setModalState:R,selectHandle:function(e){var t=e.name;_({group_purchase_commander_name:t}),e.id>0&&(V.current=e.id),R(!1)}}),o.a.createElement(I.a,{columns:g,disabledKeys:E,notShowKeys:v,formKeyLabelObj:C,formKeySelectComponentsObj:h,formKeysItemButtonObj:K(R),onFinish:function(e){var t=Object.assign({},e,s.current);S.current=t,y(j+1)},cancelHandle:x,showDeleteButton:!1,formInitialObj:w,initFormCount:i,rulesObj:q,updateFormObj:H}),o.a.createElement(L,{requestCount:j,reqObject:S.current,responseDataHandle:function(e){Object.keys(e).includes("code")&&1e3===e.code?(x(),l(r+1)):d.b.error("网络错误...")}})))};R.defaultProps={visible:!1,setVisible:function(e){return console.log(e)},reloadListCount:0,setReloadListCount:function(e){return console.log(e)}};var V=R,x=n("/wGt"),M=function(e){var t=e.visible,n=e.setVisible,r=e.queryHandle,l=Object(a.useState)(0),s=l[0],c=l[1],u=Object(a.useState)({}),i=u[0],m=u[1],d=Object(a.useState)(!1),b=d[0],f=d[1],p=Object(a.useRef)(0),O=function(){c(s+1),n(!1)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(x.a,{title:"销售记录查询",width:"100%",height:"400px",placement:"top",onClose:O,visible:t,bodyStyle:{paddingBottom:80},footer:null},o.a.createElement(I.a,{columns:S,formKeyLabelObj:C,formKeySelectComponentsObj:h,formKeysItemButtonObj:K(f),onFinish:function(e){var t=Object.assign({},e);console.log(t),r(t),setTimeout((function(){O()}),50)},cancelHandle:function(){return n(!1)},showDeleteButton:!1,formInitialObj:w,initFormCount:s,updateFormObj:i})),o.a.createElement(D.a,{modalState:b,setModalState:f,selectHandle:function(e){var t=e.name;m({group_purchase_commander_name:t}),e.id>0&&(p.current=e.id),f(!1)}}))};M.defaultProps={visible:!1,setVisible:function(e){console.log(e)},queryHandle:function(e){console.log(e)}};var N=M,T=(n("xfY5"),n("fN96"),n("lN2L")),G=function(e){var t=e.visible,n=e.setVisible,r=e.oldObj,l=e.reloadListCount,s=e.setReloadListCount,c=Object(a.useState)([]),u=(c[0],c[1]),i=Object(a.useRef)({}),m=Object(a.useState)(""),O=(m[0],m[1],Object(a.useState)({})),j=O[0],y=O[1],K=Object(a.useState)(0),S=K[0],w=K[1],k=Object(a.useState)(0),H=k[0],_=k[1],L=Object(a.useRef)({}),D=Object(a.useState)(0),R=D[0],V=D[1];Object(a.useEffect)((function(){x()}),[t,r]);var x=function(){w(S+1),y(Object.assign({},r));for(var e=[],t=F[0],n=1;n<10;n++){var a=t+n,o=a+"_url",l=r[a],s=r[o];"string"==typeof l&&l.length>5&&e.push({cosNameKey:a,cosName:l,urlKey:o,url:s})}console.log(e),u(e)};return o.a.createElement(b.a,{visible:t,title:"GroupPurchaseCommander",closable:!1,footer:null},o.a.createElement("div",{style:{width:"100%",height:"auto",textAlign:"center"}},o.a.createElement(p.b,{maxImagesNum:1,imageKeyName:F[0],oldObj:r,onChange:function(e){console.log(e),i.current=e}})),o.a.createElement(f.a,null),o.a.createElement(I.a,{columns:g,disabledKeys:E,notShowKeys:v,formKeyLabelObj:C,formKeySelectComponentsObj:h,onFinish:function(e){var t=Object.assign({},e,i.current);console.log(t),L.current=t,_(H+1)},cancelHandle:function(){return n(!1)},showDeleteButton:!0,deleteHandle:function(){V(R+1),s(l+1)},updateFormObj:j,formInitialObj:{},rulesObj:q,initFormCount:S}),o.a.createElement(P,{requestCount:H,reqObject:L.current,responseDataHandle:function(e){Object.keys(e).includes("code")&&1e3===e.code?(d.b.success("修改成功"),s(l+1),n(!1)):d.b.error("网络错误...")},id:j.id}),o.a.createElement(B,{requestCount:R,responseDataHandle:function(e){return n(!1)},id:j.id}))};G.defaultProps={visible:!1,setVisible:function(e){return console.log(e)},oldObj:{}};var A=G,z=function(e){var t=e.reloadListCount,n=e.setReloadListCount,r=e.requestParams,l=e.selectButtonOnClick,s=Object(a.useRef)(!0),c=Object(a.useState)(!0),u=c[0],i=c[1],m=Object(a.useState)(!1),d=m[0],b=m[1],f=Object(a.useRef)({page:0}),p=Object(a.useState)([]),O=p[0],j=p[1],y=Object(a.useState)(0),g=y[0],E=y[1],v=Object(a.useState)(!1),C=v[0],h=v[1],K=Object(a.useState)({}),S=K[0],w=K[1];Object(a.useEffect)((function(){f.current=Object.assign({},r),F()}),[t]),Object(a.useEffect)((function(){i(s.current)}),[s.current]);var q=function(){if(s.current&&!d){var e=Number.isInteger(f.current.page)?f.current.page+1:1;f.current=Object.assign({},f.current,{page:e}),console.log(f.current),E(g+1),b(!0)}else console.log("Error state: hasMore is ",s.current,", loading is ",d)},F=function(){f.current=Object.assign({},f.current,{page:0}),j([]),s.current=!0,b(!1),setTimeout((function(){q(),console.log("end loadMore...")}),100)},k=function(e){var t=Object.assign({},O[e]);w(t),h(!0)};return o.a.createElement("div",null,o.a.createElement(_,{requestCount:g,reqParams:f.current,responseDataHandle:function(e){console.log("GroupPurchaseCommander response",e),b(!1),Object.keys(e).includes("code")&&1e3===e.code&&Object.keys(e).includes("results")?(j(O.concat(e.results)),s.current=function(e){return!!(Object.keys(e).includes("next")&&"string"==typeof e.next&&e.next.length>5)}(e)):console.log("Error: get data...")}}),o.a.createElement(T.a,{productsData:O,loadMore:q,hasMore:u,ItemRendererComponent:function(e){var t=e.item,n=e.index;return o.a.createElement(H,{item:t,index:n,itemDetailClick:k,selectButtonOnClick:l})}}),o.a.createElement(A,{visible:C,setVisible:h,oldObj:S,reloadListCount:t,setReloadListCount:n}))};z.defaultProps={reloadListCount:1,setReloadListCount:function(e){console.log(e)},requestParams:{page:0},selectButtonOnClick:null};var W=z,U=function(e){var t=e.paramsObj,n=void 0===t?{}:t,r=Object(a.useState)(""),l=r[0],s=r[1];Object(a.useEffect)((function(){c()}),[n]);var c=function(){var e="";Object.keys(n).forEach((function(t){if(Object.keys(C).includes(t)){var a=" "+C[t]+" = "+n[t]+";";e+=a}})),e.length>2?s(e="查询条件:"+e):(console.log("查询条件为空"),s(""))};return o.a.createElement("div",{style:{height:"auto",width:"100%",padding:"0.1rem 0.2rem"}},l.length>2?o.a.createElement("p",null,l):null)};t.a=function(e){var t=e.selectButtonOnClick,n=void 0===t?null:t,d=Object(a.useRef)({page:0}),b=Object(a.useState)(1),f=b[0],p=b[1],O=Object(a.useState)(!1),j=O[0],y=O[1],g=Object(a.useState)(!1),E=g[0],v=g[1];return o.a.createElement("div",null,o.a.createElement(r.a,null,o.a.createElement(l.a,{span:14},o.a.createElement(s.b,null,o.a.createElement("h4",null,"GroupPurchaseCommander"),o.a.createElement(c.a,{title:"刷新"},o.a.createElement(u.a,{onClick:function(){d.current={page:0},p(f+1)},shape:"circle",icon:o.a.createElement(i.a,null)})),o.a.createElement(c.a,{title:"搜索"},o.a.createElement(u.a,{onClick:function(){return y(!0)},shape:"circle",icon:o.a.createElement(m.a,null)})))),o.a.createElement(l.a,{span:10},o.a.createElement("div",{style:{width:"100%",height:"auto"}},o.a.createElement(u.a,{style:{float:"right"},type:"link",onClick:function(){return v(!0)}},"新建")))),o.a.createElement(r.a,null,o.a.createElement(l.a,{span:24},o.a.createElement(U,{paramsObj:d.current}))),o.a.createElement(N,{visible:j,setVisible:y,queryHandle:function(e){d.current=Object.assign({},e),p(f+1)}}),o.a.createElement(W,{reloadListCount:f,setReloadListCount:p,requestParams:d.current,selectButtonOnClick:n}),o.a.createElement(V,{visible:E,setVisible:v,reloadListCount:f,setReloadListCount:p}))}},nBIS:function(e,t,n){var a=n("0/R4"),o=Math.floor;e.exports=function(e){return!a(e)&&isFinite(e)&&o(e)===e}},"p8V/":function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return j}));n("a1Th"),n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Z2Ku"),n("L9s1");var a=n("q1tI"),o=n.n(a),r=n("Vl3Y"),l=n("5rEg"),s=n("2/Rp"),c=n("zeV3"),u=n("7BUj").a.formCommonStyle,i=u.layoutForm,m=u.formItemLayout,d=u.tailFormItemLayout,b={width:260},f=function(e){var t=e.formKey,n=e.formKeyLabelObj,a=e.disabledKeys,s=e.updateFormObj,c=e.rulesObj,u=e.formKeySelectComponentsObj,i=e.passwordKeys,d=e.showLabelName,f=void 0===d||d,p=a.includes(t),O=n[t],j=s[t];return o.a.createElement(r.a.Item,Object.assign({},m,{name:t,label:f?O:"",initialValue:j,rules:c[t]?c[t]:[]}),Object.keys(u).includes(t)?u[t]:i.includes(t)?o.a.createElement(l.a.Password,{style:b}):o.a.createElement(l.a,{style:b,placeholder:"请输入 "+O,disabled:p}))},p=function(e){var t=e.formKey,n=e.formKeyLabelObj,a=e.disabledKeys,l=e.updateFormObj,c=e.rulesObj,u=e.formKeySelectComponentsObj,i=e.passwordKeys,d=e.formKeysItemButtonObj,b=d[t].buttonTips,p=n[t];return o.a.createElement(r.a.Item,Object.assign({},m,{label:p}),o.a.createElement(f,{formKey:t,formKeyLabelObj:n,disabledKeys:a,updateFormObj:l,rulesObj:c,formKeySelectComponentsObj:u,passwordKeys:i,showLabelName:!1}),o.a.createElement(s.a,{type:"link",onClick:function(e){console.log(e);try{d[t].clickMethod()}catch(n){console.log(n)}}},b))},O=function(e){var t=e.columns,n=e.disabledKeys,l=e.notShowKeys,u=e.formKeyLabelObj,m=e.formKeySelectComponentsObj,b=e.formKeysItemButtonObj,O=e.onFinish,j=e.cancelHandle,y=e.deleteHandle,g=e.showDeleteButton,E=e.updateFormObj,v=e.formInitialObj,C=e.initFormCount,h=e.rulesObj,K=e.passwordKeys,S=r.a.useForm()[0],w=Object(a.useState)(!1),q=w[0],F=w[1];Object(a.useEffect)((function(){S.setFieldsValue(E),F(!1)}),[E]),Object(a.useEffect)((function(){C>0&&(S.setFieldsValue(v),F(!1))}),[C]);return o.a.createElement(r.a,Object.assign({},i,{form:S,layout:"horizontal",onFinish:function(e){F(!0),O(e)},name:"adminer_info_edit"}),t.map((function(e,t){return l.includes(e)?null:Object.keys(b).includes(e)?o.a.createElement(p,{key:t.toString(),formKey:e,formKeyLabelObj:u,disabledKeys:n,updateFormObj:E,rulesObj:h,formKeySelectComponentsObj:m,passwordKeys:K,formKeysItemButtonObj:b}):o.a.createElement(f,{key:t.toString(),formKey:e,formKeyLabelObj:u,disabledKeys:n,updateFormObj:E,rulesObj:h,formKeySelectComponentsObj:m,passwordKeys:K})})),o.a.createElement(r.a.Item,d,o.a.createElement(c.b,null,o.a.createElement(s.a,{loading:q,disabled:q,type:"primary",htmlType:"submit"},"提交"),o.a.createElement(s.a,{onClick:j},"取消"),g?o.a.createElement(s.a,{loading:q,disabled:q,onClick:function(){F(!0),y()}},"删除"):null)))};O.defaultProps={columns:[],disabledKeys:[],notShowKeys:[],formKeyLabelObj:{},formKeySelectComponentsObj:{},formKeysItemButtonObj:{},onFinish:function(e){console.log(e)},cancelHandle:function(){console.log("Cancel Handle")},deleteHandle:function(){console.log("Delete Handle")},showDeleteButton:!1,updateFormObj:{},formInitialObj:{},initFormCount:0,rulesObj:{},passwordKeys:[],getFieldsValueHandle:function(e){return console.log(e)}};var j=function(e){var t=e.columns,n=e.disabledKeys,u=e.notShowKeys,i=e.formKeyLabelObj,m=e.formKeySelectComponentsObj,d=e.onFinish,f=e.onFinishButtonTips,p=e.cancelHandle,O=e.showCancelButton,j=e.deleteHandle,y=e.showDeleteButton,g=e.updateFormObj,E=e.formInitialObj,v=e.initFormCount,C=e.rulesObj,h=e.passwordKeys,K=(e.getFieldsValueHandle,r.a.useForm()[0]);Object(a.useEffect)((function(){K.setFieldsValue(g)}),[g]),Object(a.useEffect)((function(){K.setFieldsValue(E)}),[v]);var S=function(e){var t=e.formKey,a=n.includes(t),s=i[t],c=g[t];return o.a.createElement(r.a.Item,{name:t,initialValue:c,rules:C[t]?C[t]:[]},Object.keys(m).includes(t)?m[t]:h.includes(t)?o.a.createElement(l.a.Password,{style:b}):o.a.createElement(l.a,{style:b,placeholder:"请输入 "+s,disabled:a}))};return o.a.createElement(r.a,Object.assign({},{labelCol:{span:0},wrapperCol:{span:8}},{form:K,layout:"inline",onFinish:d,name:"adminer_info_edit"}),t.map((function(e,t){return u.includes(e)?null:o.a.createElement(S,{formKey:e,key:t.toString()})})),o.a.createElement(r.a.Item,null,o.a.createElement(c.b,null,o.a.createElement(s.a,{type:"primary",htmlType:"submit"},f),O?o.a.createElement(s.a,{onClick:p},"取消"):null,y?o.a.createElement(s.a,{onClick:j},"删除"):null)))};j.defaultProps={columns:[],disabledKeys:[],notShowKeys:[],formKeyLabelObj:{},formKeySelectComponentsObj:{},onFinish:function(e){console.log(e)},onFinishButtonTips:"确定/修改",cancelHandle:function(){console.log("Cancel Handle")},showCancelButton:!1,deleteHandle:function(){console.log("Delete Handle")},showDeleteButton:!1,updateFormObj:{},formInitialObj:{},initFormCount:0,rulesObj:{},passwordKeys:[],getFieldsValueHandle:function(e){return console.log(e)}}},rLCj:function(e,t,n){"use strict";n("91GP");var a=n("q1tI"),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"},r=n("6VBw"),l=function(e,t){return a.createElement(r.a,Object.assign({},e,{ref:t,icon:o}))};l.displayName="ReloadOutlined";t.a=a.forwardRef(l)},tW9P:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("q1tI"),o=n.n(a),r=n("kLXV"),l=n("2/Rp"),s=n("h/TN"),c=function(e){var t=e.modalState,n=e.setModalState,a=e.selectHandle;return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{visible:t,title:"选择团长",closable:!1,footer:[o.a.createElement(l.a,{key:"back",onClick:function(){n(!1)}},"取消")]},o.a.createElement(s.a,{selectButtonOnClick:a})))};c.defaultProps={modalState:!1,setModalState:function(e){return console.log(e)},selectHandle:function(e){console.log(e)}}},vpoQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("a1Th"),n("Btvt");var a=n("q1tI"),o=n.n(a),r=n("2fM7"),l=n("7BUj"),s=r.a.Option,c=function(e){var t=e.options,n=e.width,a=e.value,l=e.onChange;return o.a.createElement(r.a,{style:{width:n},onChange:l,value:a},t.map((function(e,t){return o.a.createElement(s,{key:t.toString(),value:e.value},e.label)})))};c.defaultProps={options:[],width:l.a.selectComponentWidth,value:null,onChange:function(e){console.log(e)}}}}]);
//# sourceMappingURL=dbadc1f47f0818744ed037a0383a5aee7951ddcf-8d82e37c23e14f1817a2.js.map
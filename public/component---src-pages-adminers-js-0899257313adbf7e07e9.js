(self.webpackChunkzwglass_purchase_records=self.webpackChunkzwglass_purchase_records||[]).push([[6903],{30165:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(67294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"},r=n(12112),l=function(e,t){return a.createElement(r.Z,Object.assign({},e,{ref:t,icon:o}))};l.displayName="ReloadOutlined";var s=a.forwardRef(l)},86257:function(e,t,n){"use strict";n.d(t,{y:function(){return b},p:function(){return y}});var a=n(67294),o=n(28130),r=n(23796),l=n(93299),s=n(77371),c=n(48428).Z.formCommonStyle,i=c.layoutForm,u=c.formItemLayout,d=c.tailFormItemLayout,m={width:260},f=function(e){var t=e.formKey,n=e.formKeyLabelObj,l=e.disabledKeys,s=e.updateFormObj,c=e.rulesObj,i=e.formKeySelectComponentsObj,d=e.passwordKeys,f=e.showLabelName,p=void 0===f||f,b=l.includes(t),y=n[t],E=s[t];return a.createElement(o.Z.Item,Object.assign({},u,{name:t,label:p?y:"",initialValue:E,rules:c[t]?c[t]:[]}),Object.keys(i).includes(t)?i[t]:d.includes(t)?a.createElement(r.Z.Password,{style:m}):a.createElement(r.Z,{style:m,placeholder:"请输入 "+y,disabled:b}))},p=function(e){var t=e.formKey,n=e.formKeyLabelObj,r=e.disabledKeys,s=e.updateFormObj,c=e.rulesObj,i=e.formKeySelectComponentsObj,d=e.passwordKeys,m=e.formKeysItemButtonObj,p=m[t].buttonTips,b=n[t];return a.createElement(o.Z.Item,Object.assign({},u,{label:b}),a.createElement(f,{formKey:t,formKeyLabelObj:n,disabledKeys:r,updateFormObj:s,rulesObj:c,formKeySelectComponentsObj:i,passwordKeys:d,showLabelName:!1}),a.createElement(l.Z,{type:"link",onClick:function(e){console.log(e);try{m[t].clickMethod()}catch(n){console.log(n)}}},p))},b=function(e){var t=e.columns,n=e.disabledKeys,r=e.notShowKeys,c=e.formKeyLabelObj,u=e.formKeySelectComponentsObj,m=e.formKeysItemButtonObj,b=e.onFinish,y=e.cancelHandle,E=e.deleteHandle,g=e.showDeleteButton,j=e.updateFormObj,O=e.formInitialObj,v=e.initFormCount,Z=e.rulesObj,S=e.passwordKeys,C=o.Z.useForm()[0],h=(0,a.useState)(!1),K=h[0],q=h[1];(0,a.useEffect)((function(){C.setFieldsValue(j),q(!1)}),[j]),(0,a.useEffect)((function(){v>0&&(C.setFieldsValue(O),q(!1))}),[v]);return a.createElement(o.Z,Object.assign({},i,{form:C,layout:"horizontal",onFinish:function(e){q(!0),b(e)},name:"adminer_info_edit"}),t.map((function(e,t){return r.includes(e)?null:Object.keys(m).includes(e)?a.createElement(p,{key:t.toString(),formKey:e,formKeyLabelObj:c,disabledKeys:n,updateFormObj:j,rulesObj:Z,formKeySelectComponentsObj:u,passwordKeys:S,formKeysItemButtonObj:m}):a.createElement(f,{key:t.toString(),formKey:e,formKeyLabelObj:c,disabledKeys:n,updateFormObj:j,rulesObj:Z,formKeySelectComponentsObj:u,passwordKeys:S})})),a.createElement(o.Z.Item,d,a.createElement(s.Z,null,a.createElement(l.Z,{loading:K,disabled:K,type:"primary",htmlType:"submit"},"提交"),a.createElement(l.Z,{onClick:y},"取消"),g?a.createElement(l.Z,{loading:K,disabled:K,onClick:function(){q(!0),E()}},"删除"):null)))};b.defaultProps={columns:[],disabledKeys:[],notShowKeys:[],formKeyLabelObj:{},formKeySelectComponentsObj:{},formKeysItemButtonObj:{},onFinish:function(e){console.log(e)},cancelHandle:function(){console.log("Cancel Handle")},deleteHandle:function(){console.log("Delete Handle")},showDeleteButton:!1,updateFormObj:{},formInitialObj:{},initFormCount:0,rulesObj:{},passwordKeys:[],getFieldsValueHandle:function(e){return console.log(e)}};var y=function(e){var t=e.columns,n=e.disabledKeys,c=e.notShowKeys,i=e.formKeyLabelObj,u=e.formKeySelectComponentsObj,d=e.onFinish,f=e.onFinishButtonTips,p=e.cancelHandle,b=e.showCancelButton,y=e.deleteHandle,E=e.showDeleteButton,g=e.updateFormObj,j=e.formInitialObj,O=e.initFormCount,v=e.rulesObj,Z=e.passwordKeys,S=(e.getFieldsValueHandle,o.Z.useForm()[0]);(0,a.useEffect)((function(){S.setFieldsValue(g)}),[g]),(0,a.useEffect)((function(){S.setFieldsValue(j)}),[O]);var C=function(e){var t=e.formKey,l=n.includes(t),s=i[t],c=g[t];return a.createElement(o.Z.Item,{name:t,initialValue:c,rules:v[t]?v[t]:[]},Object.keys(u).includes(t)?u[t]:Z.includes(t)?a.createElement(r.Z.Password,{style:m}):a.createElement(r.Z,{style:m,placeholder:"请输入 "+s,disabled:l}))};return a.createElement(o.Z,Object.assign({},{labelCol:{span:0},wrapperCol:{span:8}},{form:S,layout:"inline",onFinish:d,name:"adminer_info_edit"}),t.map((function(e,t){return c.includes(e)?null:a.createElement(C,{formKey:e,key:t.toString()})})),a.createElement(o.Z.Item,null,a.createElement(s.Z,null,a.createElement(l.Z,{type:"primary",htmlType:"submit"},f),b?a.createElement(l.Z,{onClick:p},"取消"):null,E?a.createElement(l.Z,{onClick:y},"删除"):null)))};y.defaultProps={columns:[],disabledKeys:[],notShowKeys:[],formKeyLabelObj:{},formKeySelectComponentsObj:{},onFinish:function(e){console.log(e)},onFinishButtonTips:"确定/修改",cancelHandle:function(){console.log("Cancel Handle")},showCancelButton:!1,deleteHandle:function(){console.log("Delete Handle")},showDeleteButton:!1,updateFormObj:{},formInitialObj:{},initFormCount:0,rulesObj:{},passwordKeys:[],getFieldsValueHandle:function(e){return console.log(e)}}},15169:function(e,t,n){"use strict";n.d(t,{A:function(){return s}});var a=n(67294),o=n(27188),r=n(48428),l=o.Z.Option,s=function(e){var t=e.options,n=e.width,r=e.value,s=e.onChange,c=e.mode;return a.createElement(o.Z,{style:{width:n},onChange:s,value:r,mode:c,allowClear:!0},t.map((function(e,t){return a.createElement(l,{key:t.toString(),value:e.value},e.label)})))};s.defaultProps={options:[],width:r.Z.selectComponentWidth,value:null,onChange:function(e){console.log(e)},mode:null}},25446:function(e,t,n){"use strict";var a=n(67294),o=n(54325),r=function(e){var t=e.spinning,n=(0,a.useState)(!1),r=n[0],l=n[1],s={display:r?"block":"none"};return(0,a.useEffect)((function(){l(t)}),[t]),a.createElement("div",{className:"overall-loading",style:s},a.createElement(o.Z,{spinning:t,size:"large"}))};r.defaultProps={spinning:!1},t.Z=r},89560:function(e,t,n){"use strict";var a=n(67294),o=n(40977),r=n(77371),l=n(23148),s=n(56452),c=n(75334),i=n(93299),u=n(32210),d=n(50845),m=n(17858),f=n(28823),p=n(72373),b=function(e){var t=e.oldImageUrl,b=e.avatarSize,y=e.uploadedResponseHandle,E=e.fileKey,g=e.cleanFileListCount,j=(0,a.useRef)({}),O=(0,a.useRef)({}),v=(0,a.useRef)(""),Z=(0,a.useState)(""),S=Z[0],C=Z[1],h=(0,a.useState)(0),K=h[0],q=h[1],_=(0,a.useRef)({}),w=(0,a.useState)(!0),P=w[0],H=w[1],k=(0,a.useState)(!0),F=k[0],I=k[1];(0,a.useEffect)((function(){R()}),[g]),(0,a.useEffect)((function(){j.current={},C(""),H(!0)}),[t]),(0,a.useEffect)((function(){I(0===Object.keys(j.current).length)}),[j.current]);var D=function(e,t){var n=Object.assign({},O.current),a=n.credentials;t({TmpSecretId:a.tmpSecretId,TmpSecretKey:a.tmpSecretKey,XCosSecurityToken:a.sessionToken,StartTime:n.startTime,ExpiredTime:n.expiredTime})},L={fileList:[],beforeUpload:function(e){return j.current=e,q(K+1),!1}},R=function(){y({},E),C(""),j.current={},H(!1)};return a.createElement("div",null,a.createElement(r.Z,{direction:"vertical"},a.createElement(m.Z,{src:P?t:S,width:b}),a.createElement(l.Z,{gutter:10},a.createElement(s.Z,{span:12},a.createElement("div",{style:{textAlign:"left"}},a.createElement(c.Z,L,F?a.createElement(i.Z,{size:"small"},a.createElement(u.Z,null)," 更新"):null))),a.createElement(s.Z,{span:12},S.length>10||t.length>10?a.createElement(i.Z,{onClick:R,size:"small"},a.createElement(d.Z,null)," 删除"):null)),a.createElement(f.G,{requestCount:K,reqObject:_.current,responseDataHandle:function(e){(console.log(e),Object.keys(e).includes("image_cos_name")||Object.keys(e).includes("sts_obj"))?(O.current=e.sts_obj,v.current=e.image_cos_name,"undefined"!=typeof window&&new(n(74525))({getAuthorization:D}).putObject(Object.assign({},p.D1,{Key:v.current,Body:j.current,onProgress:function(e){console.log(JSON.stringify(e))}}),(function(t,n){console.log(t||n),n?(console.log(n),C(e.image_cos_name_url),H(!1),y(e,E),o.ZP.success("图片上传成功!")):(R(),o.ZP.error("图片上传失败..."))}))):console.log("Get temporary key error...")}})))};b.defaultProps={oldImageUrl:"",avatarSize:96,uploadedResponseHandle:function(e,t){console.log(e,t)},fileKey:"image1",cleanFileListCount:0},t.Z=b},4600:function(e,t,n){"use strict";var a=n(67294),o=n(40977),r=n(77371),l=n(23148),s=n(56452),c=n(75334),i=n(93299),u=n(32210),d=n(50845),m=n(17858),f=n(48428),p=n(57926),b=function(e){var t=e.oldImageUrl,n=e.avatarSize,b=e.uploadedResponseHandle,y=e.fileKey,E=e.cleanFileListCount,g=(0,a.useState)(!0),j=g[0],O=g[1],v=(0,a.useState)([]),Z=v[0],S=v[1],C=(0,a.useState)(""),h=C[0],K=C[1],q=(0,a.useState)(!0),_=q[0],w=q[1];(0,a.useEffect)((function(){O(0===Z.length)}),[Z]),(0,a.useEffect)((function(){S([])}),[E]),(0,a.useEffect)((function(){S([]),K(""),w(!0)}),[t]);var P={name:"upload-single-file",action:f.Z.apiBaseUrl+"/files-handle/v1/uploadfiles",headers:{authorization:(0,p.LP)()},fileList:Z,onChange:function(e){if(S(e.fileList.slice()),w(!1),"done"===e.file.status){o.ZP.success(e.file.name+" file uploaded successfully");var t=Object.assign({},e.file.response);b(t,y),Object.keys(t).includes("image_cos_name_url")&&t.image_cos_name_url.length>10&&K(t.image_cos_name_url)}else"error"===e.file.status&&(o.ZP.error("Error: "+e.file.name+" file upload failed."),o.ZP.error("Error: "+e.file.name+" 文件上传失败..."),S([]))}};return a.createElement("div",null,a.createElement(r.Z,{direction:"vertical"},a.createElement(m.Z,{src:_?t:h,width:n}),a.createElement(l.Z,{gutter:10},a.createElement(s.Z,{span:12},a.createElement("div",{style:{textAlign:"left"}},a.createElement(c.Z,P,j?a.createElement(i.Z,{size:"small"},a.createElement(u.Z,null)," 更新"):null))),a.createElement(s.Z,{span:12},h.length>10||t.length>10?a.createElement(i.Z,{onClick:function(){b({},y),K(""),S([]),w(!1)},size:"small"},a.createElement(d.Z,null)," 删除"):null))))};b.defaultProps={oldImageUrl:"",avatarSize:96,uploadedResponseHandle:function(e,t){console.log(e,t)},fileKey:"image1",cleanFileListCount:0},t.Z=b},72298:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Q}});var a=n(67294),o=n(93751),r=n(93696),l=n(40977),s=n(77371),c=n(93299),i=n(90579),u=n(30165),d=n(79410),m=function(e){var t=e.sendRequest;return e.showLoadMoreButton?a.createElement("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"}},a.createElement(c.Z,{onClick:t},"loading more")):null},f=n(17858),p=n(94789),b=n(25446),y=n(33328),E=["adminer/v1/admin","adminer/v1/createadmin"],g=function(e){var t=e.requestCount,n=e.reqObject,o=e.responseDataHandle,r=[].concat(E)[1];return a.createElement(y.Z,{responseDataHandle:o,api:r,method:"post",reqParams:{},reqObject:n,requestCount:t})};g.defaultProps={requestCount:0,reqObject:{},responseDataHandle:function(e){console.log(e)}};var j=function(e){var t=e.adminerId,n=e.requestCount,o=e.reqObject,r=e.responseDataHandle,l=[].concat(E)[0]+"/"+t;return a.createElement(y.Z,{responseDataHandle:r,api:l,method:"put",reqParams:{},reqObject:o,requestCount:n})};j.defaultProps={adminerId:0,requestCount:0,reqObject:{},responseDataHandle:function(e){console.log(e)}};var O=function(e){var t=e.requestCount,n=e.reqParams,o=e.responseDataHandle,r=[].concat(E)[0]+"/1";return a.createElement(y.Z,{responseDataHandle:o,api:r,method:"get",reqParams:n,reqObject:{},requestCount:t})};O.defaultProps={requestCount:0,reqParams:{},responseDataHandle:function(e){console.log(e)}};var v=function(e){var t=e.requestCount,n=e.adminId,o=e.responseDataHandle,r=[].concat(E)[1]+"/"+n;return a.createElement(y.Z,{responseDataHandle:o,api:r,method:"delete",reqParams:{},reqObject:{},requestCount:t})};v.defaultProps={requestCount:0,adminId:0,responseDataHandle:function(e){console.log(e)}};var Z=function(e){var t=e.requestCount,n=e.reqParams,o=e.responseDataHandle,r=[].concat(E)[1];return a.createElement(y.Z,{responseDataHandle:o,api:r,method:"get",reqParams:n,reqObject:{},requestCount:t})};Z.defaultProps={requestCount:0,reqParams:{},responseDataHandle:function(e){console.log(e)}};var S=function(e){var t=e.adminerId,n=e.requestCount,o=e.reqObject,r=e.responseDataHandle,l=[].concat(E)[1]+"/"+t;return a.createElement(y.Z,{responseDataHandle:r,api:l,method:"put",reqParams:{},reqObject:o,requestCount:n})};S.defaultProps={adminerId:0,requestCount:0,reqObject:{},responseDataHandle:function(e){console.log(e)}};var C=n(86257),h=n(15169),K=["id","name","mobile","email","wx_openid","password","people_id","address","title","avatar","add_time","update_time","on_job"],q={id:"0",name:"",mobile:"",email:"",password:"",people_id:"",address:"",title:"",add_time:"",update_time:"",on_job:!0},_=["id","wx_openid","mobile","avatar","add_time","update_time"],w=["avatar","wx_openid","title","password"],P=["password"],H={mobile:[{required:!0,min:10,message:"请输入正确的手机"}],password:[{required:!0,min:6,message:"密码最少6位"}]},k={id:"ID",name:"名称",mobile:"手机",email:"E-Mail",password:"密码",people_id:"身份证",address:"地址",title:"职务",add_time:"加入日期",update_time:"更新日期",on_job:"在职"},F={on_job:a.createElement(h.A,{options:[{value:!0,label:"在职"},{value:!1,label:"离职"}]}),title:a.createElement(h.A,{options:[{value:1,label:"super_admin"},{value:2,label:"admin"}]})},I=n(89560),D=function(e){var t=e.adminObj,n=e.modalState,o=e.setModalState,r=(0,a.useState)(!1),s=r[0],c=r[1],i=(0,a.useState)(0),u=i[0],d=i[1],m=(0,a.useState)(0),f=m[0],y=m[1],E=(0,a.useState)(0),g=E[0],O=E[1],v=(0,a.useRef)({}),Z=(0,a.useRef)({}),S=function(){console.log("Cancel.."),d(u+1),Z.current={},O(g+1),o(!1)};return a.createElement(p.Z,{title:"管理员详情",getContainer:!1,visible:n,footer:null,closable:!1},a.createElement(b.Z,{spinning:s}),a.createElement("div",{className:"avatar-box"},a.createElement(I.Z,{oldImageUrl:t.avatar,avatarSize:64,uploadedResponseHandle:function(e){console.log(e);var t=Object.assign({},e);Object.keys(t).includes("code")&&Object.keys(t).includes("image_cos_name")&&1e3===t.code?Z.current={avatar:t.image_cos_name}:Z.current={}},cleanFileListCount:u})),a.createElement(C.y,{columns:K,disabledKeys:_,notShowKeys:w,formKeyLabelObj:k,formKeySelectComponentsObj:F,onFinish:function(e){console.log(e),v.current=Object.assign({},e,Z.current),c(!0),y(f+1)},cancelHandle:S,updateFormObj:t,formInitialObj:q,initFormCount:g}),a.createElement(j,{adminerId:t.id,requestCount:f,reqObject:v.current,responseDataHandle:function(e){c(!1),console.log(e),Object.keys(e).includes("code")&&1e3===e.code?(l.ZP.success("修改成功!"),S()):l.ZP.error("网络错误, 请检查...")}}))};D.defaultProps={adminObj:{},modalState:!1,setModalState:function(e){console.log("Close Modal "+e+"...")}};var L=D,R=["未知","super-admin","admin"],M=function(e){var t=e.selectAdminHandle,n=e.queryAdminsParams,o=(0,a.useState)([]),r=o[0],s=o[1],i=(0,a.useState)(!1),u=i[0],p=i[1],b=(0,a.useState)({}),y=b[0],E=b[1],g=(0,a.useState)(0),j=g[0],v=g[1],Z=(0,a.useState)(!0),S=Z[0],C=Z[1];(0,a.useEffect)((function(){s([]),h()}),[n]);var h=function(){v(j+1),C(!1)};return a.createElement(a.Fragment,null,a.createElement(d.ZP,{itemLayout:"vertical",loadMore:a.createElement(m,{sendRequest:h,showLoadMoreButton:S}),dataSource:r,renderItem:function(e){return a.createElement(d.ZP.Item,{actions:[a.createElement(c.Z,{onClick:function(){return t(e)},type:"link"},"选择"),a.createElement(c.Z,{onClick:function(){return t=e,console.log(t),E(t),void p(!0);var t},type:"link"},"详情")]},a.createElement(d.ZP.Item.Meta,{avatar:a.createElement(f.Z,{src:e.avatar,width:64}),title:"姓名: "+e.name+", 手机: "+e.mobile+", 住址: "+e.address+";",description:"职务: "+R[e.title]}))}}),a.createElement(O,{requestCount:j,reqParams:n,responseDataHandle:function(e){Object.keys(e).includes("code")&&1e3===e.code&&Object.keys(e).includes("name")?(s([e]),C(!1)):(l.ZP.error("Error: 网络错误..."),s([]),C(!0))}}),a.createElement(L,{adminObj:y,modalState:u,setModalState:p}))};M.defaultProps={selectAdminHandle:function(e){console.log(e)},queryAdminsParams:{}};var B=M,A=function(e){var t=e.adminObj,n=e.modalState,o=e.setModalState,r=(0,a.useState)(!1),s=r[0],c=r[1],i=(0,a.useState)(0),u=i[0],d=i[1],m=(0,a.useState)(0),f=m[0],y=m[1],E=(0,a.useState)(0),g=E[0],j=E[1],O=(0,a.useState)(0),Z=O[0],h=O[1],w=(0,a.useRef)({}),P=(0,a.useRef)({}),H=function(){console.log("Cancel.."),d(u+1),P.current={},h(Z+1),o(!1)};return a.createElement(p.Z,{title:"管理员详情",getContainer:!1,visible:n,footer:null,closable:!1},a.createElement(b.Z,{spinning:s}),a.createElement("div",{className:"avatar-box"},a.createElement(I.Z,{oldImageUrl:t.avatar,avatarSize:64,uploadedResponseHandle:function(e){console.log(e);var t=Object.assign({},e);Object.keys(t).includes("code")&&Object.keys(t).includes("image_cos_name")&&1e3===t.code?P.current={avatar:t.image_cos_name}:P.current={}},cleanFileListCount:u})),a.createElement(C.y,{columns:K,disabledKeys:_,notShowKeys:["avatar","wx_openid"],formKeyLabelObj:k,formKeySelectComponentsObj:F,onFinish:function(e){console.log(e),w.current=Object.assign({},e,P.current),c(!0),y(f+1)},cancelHandle:H,deleteHandle:function(e){j(g+1)},showDeleteButton:!0,updateFormObj:t,formInitialObj:q,initFormCount:Z}),a.createElement(S,{adminerId:t.id,requestCount:f,reqObject:w.current,responseDataHandle:function(e){c(!1),console.log(e),Object.keys(e).includes("code")&&1e3===e.code?(l.ZP.success("Success update admin!"),l.ZP.success("修改成功!"),H()):(l.ZP.error("Error..."),l.ZP.error("网络错误, 请检查..."))}}),a.createElement(v,{adminId:t.id,requestCount:g,responseDataHandle:function(e){console.log(e),H()}}))};A.defaultProps={adminObj:{},modalState:!1,setModalState:function(e){console.log("Close Modal "+e+"...")}};var z=A,x=["未知","super-admin","admin"],T=function(e){var t=e.selectAdminHandle,n=e.queryAdminsParams,o=(0,a.useState)([]),r=o[0],s=o[1],i=(0,a.useState)(!1),u=i[0],p=i[1],b=(0,a.useState)({}),y=b[0],E=b[1],g=(0,a.useState)(0),j=g[0],O=g[1],v=(0,a.useState)(!0),S=v[0],C=v[1];(0,a.useEffect)((function(){s([]),h()}),[n]);var h=function(){O(j+1),C(!1)};return a.createElement(a.Fragment,null,a.createElement(d.ZP,{itemLayout:"vertical",loadMore:a.createElement(m,{sendRequest:h,showLoadMoreButton:S}),dataSource:r,renderItem:function(e){return a.createElement(d.ZP.Item,{actions:[a.createElement(c.Z,{onClick:function(){return t(e)},type:"link"},"选择"),a.createElement(c.Z,{onClick:function(){return t=e,console.log(t),E(t),void p(!0);var t},type:"link"},"详情")]},a.createElement(d.ZP.Item.Meta,{avatar:a.createElement(f.Z,{src:e.avatar,width:64}),title:"姓名: "+e.name+", 手机: "+e.mobile+", 住址: "+e.address+";",description:"职务: "+x[e.title]}))}}),a.createElement(Z,{requestCount:j,reqParams:n,responseDataHandle:function(e){if(Object.keys(e).includes("code")&&1e3===e.code&&Object.keys(e).includes("results")){var t=[].concat(e.results);s(t),e.next&&C(!0)}else l.ZP.error("Error: network..."),l.ZP.error("Error: 网络错误..."),s([]),C(!0)}}),a.createElement(z,{adminObj:y,modalState:u,setModalState:p}))};T.defaultProps={selectAdminHandle:function(e){console.log(e)},queryAdminsParams:{}};var V=T,N=n(4600),U=["id","avatar","wx_openid","add_time","update_time","title","on_job"],G=["id","wx_openid","avatar","add_time","update_time"],J=function(e){var t=e.modalState,n=e.setModalState,o=(0,a.useState)(!1),r=o[0],s=o[1],c=(0,a.useRef)({}),i=(0,a.useRef)({}),u=(0,a.useState)(0),d=u[0],m=u[1],f=(0,a.useState)(0),y=f[0],E=f[1],j=(0,a.useState)(0),O=j[0],v=j[1],Z=function(){c.current={},i.current={},v(O+1),E(y+1),n(!1)};return a.createElement(p.Z,{title:"创建管理员",getContainer:!1,visible:t,footer:null,closable:!1},a.createElement(b.Z,{spinning:r}),a.createElement("div",{className:"avatar-box"},a.createElement(N.Z,{avatarSize:64,uploadedResponseHandle:function(e,t){Object.keys(e).includes("code")&&1e3===e.code&&Object.keys(e).includes("image_cos_name")&&(c.current={avatar:e.image_cos_name})},cleanFileListCount:y})),a.createElement(C.y,{columns:K,disabledKeys:G,notShowKeys:U,formKeyLabelObj:k,formKeySelectComponentsObj:F,onFinish:function(e){s(!0),i.current=Object.assign({},e,c.current),m(d+1)},cancelHandle:Z,showDeleteButton:!1,formInitialObj:q,initFormCount:O,rulesObj:H,passwordKeys:P}),a.createElement(g,{requestCount:d,reqObject:i.current,responseDataHandle:function(e){s(!1),Object.keys(e).includes("code")&&1e3===e.code?(l.ZP.success("Success"),l.ZP.success("创建管理员成功!"),Z()):(l.ZP.success("Error..."),l.ZP.success("Error: 网络错误..."))}}))};J.defaultProps={modalState:!1,setModalState:function(e){console.log(e)}};var W=J,X=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],o=(0,a.useState)({}),r=o[0],d=o[1],m=(0,a.useState)(0),f=m[0],p=m[1],b=(0,a.useState)(2),y=b[0],E=b[1];(0,a.useEffect)((function(){setTimeout((function(){p(f+1)}),1e3)}),[]);return a.createElement(a.Fragment,null,a.createElement(s.Z,null,a.createElement(c.Z,{type:"default",onClick:function(){return n(!0)}},"创建管理员"),a.createElement(i.Z,{title:"刷新"},a.createElement(c.Z,{type:"primary",shape:"circle",icon:a.createElement(u.Z,null),onClick:function(){d({id:0}),d({})}}))),a.createElement("br",null),a.createElement("hr",null),a.createElement(O,{requestCount:f,reqParams:{},responseDataHandle:function(e){Object.keys(e).includes("code")&&1e3===e.code&&Object.keys(e).includes("title")?E(e.title):(l.ZP.error("Error: 错误, 请登陆..."),E(2))}}),1===y?a.createElement(V,{queryAdminsParams:r}):a.createElement(B,null),a.createElement(W,{modalState:t,setModalState:n}))},Q=function(){return a.createElement(r.Z,null,a.createElement(o.Z,{title:"Admin"}),a.createElement(X,null))}}}]);
//# sourceMappingURL=component---src-pages-adminers-js-0899257313adbf7e07e9.js.map
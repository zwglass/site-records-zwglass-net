(self.webpackChunkzwglass_purchase_records=self.webpackChunkzwglass_purchase_records||[]).push([[5790],{15169:function(e,t,n){"use strict";n.d(t,{A:function(){return s}});var a=n(67294),r=n(27188),o=n(48428),l=r.Z.Option,s=function(e){var t=e.options,n=e.width,o=e.value,s=e.onChange,c=e.mode;return a.createElement(r.Z,{style:{width:n},onChange:s,value:o,mode:c,allowClear:!0},t.map((function(e,t){return a.createElement(l,{key:t.toString(),value:e.value},e.label)})))};s.defaultProps={options:[],width:o.Z.selectComponentWidth,value:null,onChange:function(e){console.log(e)},mode:null}},40218:function(e,t,n){"use strict";n.d(t,{Z9:function(){return l},GT:function(){return s},fC:function(){return c},Lw:function(){return u}});var a=n(67294),r=n(33328),o=["admin-customer/v1/customer","admin-wxinfo/v1/customerwxinfo"],l=function(e){var t=e.requestCount,n=e.reqObject,l=e.responseDataHandle,s=o[0];return a.createElement(r.Z,{responseDataHandle:l,api:s,method:"post",reqParams:{},reqObject:n,requestCount:t})};l.defaultProps={requestCount:0,reqObject:{},responseDataHandle:function(e){console.log(e)}};var s=function(e){var t=e.customerOrWx,n=e.customerOrWxId,l=e.requestCount,s=e.reqObject,c=e.responseDataHandle,u=(0,a.useRef)(o[t]+"/"+n);return(0,a.useEffect)((function(){u.current=o[t]+"/"+n}),[t,n]),a.createElement(r.Z,{responseDataHandle:c,api:u.current,method:"put",reqParams:{},reqObject:s,requestCount:l})};s.defaultProps={customerOrWx:0,customerOrWxId:0,requestCount:0,reqObject:{},responseDataHandle:function(e){console.log(e)}};var c=function(e){var t=e.customerId,n=e.responseDataHandle,o=(0,a.useState)(0),l=o[0],s=o[1],c=(0,a.useRef)({id:t}),u=(0,a.useRef)({});return(0,a.useEffect)((function(){c.current={id:t},s(l+1)}),[t]),a.createElement(r.Z,{responseDataHandle:n,api:"admin-customer/v1/customer",method:"get",reqParams:c.current,reqObject:u.current,requestCount:l})};c.defaultProps={customerId:0,responseDataHandle:function(e){console.log(e)}};var u=function(e){var t=e.customerId,n=e.responseDataHandle,o=(0,a.useState)(0),l=o[0],s=o[1],c=(0,a.useRef)({customer_id:t}),u=(0,a.useRef)({});return(0,a.useEffect)((function(){t>0&&(c.current={customer_id:t},s(l+1))}),[t]),a.createElement(r.Z,{responseDataHandle:n,api:"admin-wxinfo/v1/customerwxinfo",method:"get",reqParams:c.current,reqObject:u.current,requestCount:l})};u.defaultProps={customerId:0,responseDataHandle:function(e){console.log(e)}}},60842:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var a=n(67294),r=n(23796),o=n(27188),l=n(77371),s=n(93299),c=n(40977),u=n(28130),i=n(94789),m=n(4600),d=n(15169),f=["id","name","mobile","email","wx_openid","people_id","address","custormer_category","avatar","add_time","update_time","explains","is_valid","purchase_total_counts"],p={name:"",mobile:"",email:"",people_id:"",address:"",custormer_category:1,avatar:"",explains:"",is_valid:!0},v=["id","customer_id","wx_nickname","memo_name","wx_session_key","wx_openid","wx_avatar","wx_country","wx_province","wx_city","wx_gender","add_time","update_time","explains"],E=["id","customer_id","wx_session_key","wx_openid","add_time","update_time","purchase_total_counts","wx_avatar","avatar"],g={id:"ID",name:"姓名",mobile:"手机",email:"E-Mail",wx_openid:"微信openid",people_id:"身份证",address:"地址",custormer_category:"顾客级别",avatar:"头像url",add_time:"创建时间",update_time:"更新时间",explains:"说明",is_valid:"有效",purchase_total_counts:"订单总数",customer_id:"顾客ID",wx_session_key:"微信session key",wx_nickname:"微信昵称",wx_avatar:"微信头像url",wx_country:"国家",wx_province:"省",wx_city:"市",wx_gender:"性别",memo_name:"备注名称"},_={is_valid:a.createElement(d.A,{options:[{value:!0,label:"有效"},{value:!1,label:"无效"}]}),custormer_category:a.createElement(d.A,{options:[{value:1,label:"一般顾客"},{value:2,label:"优质顾客"},{value:3,label:"VIP顾客"}]}),wx_gender:a.createElement(d.A,{options:[{value:0,label:"未知"},{value:1,label:"男"},{value:2,label:"女"}]})},b=["avatar","wx_avatar"],Z=n(40218),w=n(25446),h=n(48428).Z.formCommonStyle,x=h.layoutForm,y=h.formItemLayout,C=h.tailFormItemLayout,O=["id","wx_openid","avatar","add_time","update_time","purchase_total_counts"],k=function(e){var t=e.modalState,n=e.setModalState,o=e.responseDataHandle,d=u.Z.useForm()[0],v=(0,a.useState)(!1),b=v[0],h=v[1],k=(0,a.useRef)({}),S=(0,a.useRef)({}),j=(0,a.useState)(0),I=j[0],P=j[1],q=(0,a.useState)(0),L=q[0],H=q[1];(0,a.useEffect)((function(){!1===t&&d.setFieldsValue(Object.assign({},p))}),[t]);return a.createElement(i.Z,{title:"创建顾客",getContainer:!1,visible:t,footer:null,closable:!1},a.createElement(w.Z,{spinning:b}),a.createElement("div",{className:"avatar-box"},a.createElement(m.Z,{uploadedResponseHandle:function(e,t){var n="";Object.keys(e).includes("image_cos_name")?n=e.image_cos_name:(H(L+1),c.ZP.error("Upload fail..."),c.ZP.error("上传失败")),k.current={avatar:n}},avatarSize:64,fileKey:"avatar",cleanFileListCount:L})),a.createElement(u.Z,Object.assign({},x,{form:d,layout:"horizontal",onFinish:function(e){h(!0),S.current=Object.assign({},e,k.current),P(I+1)},name:"dynamic_rule"}),f.map((function(e){if(O.includes(e))return null;var t=E.includes(e),n=g[e];return a.createElement(u.Z.Item,Object.assign({},y,{name:e,label:n,key:e.toString(),initialValue:p[e]}),Object.keys(_).includes(e)?_[e]:a.createElement(r.Z,{placeholder:"请输入 "+n,disabled:t}))})),a.createElement(u.Z.Item,C,a.createElement(l.Z,null,a.createElement(s.Z,{type:"primary",htmlType:"submit"},"创建"),a.createElement(s.Z,{onClick:function(){n(!1)}},"取消"))),a.createElement(u.Z.Item,null,a.createElement(Z.Z9,{requestCount:I,reqObject:S.current,responseDataHandle:function(e){h(!1),o(e)}}))))};k.defaultProps={modalState:!1,setModalState:function(e){console.log(e)},responseDataHandle:function(e){console.log(e)}};var S=k,j=n(79410),I=n(89560),P={labelCol:{span:6},wrapperCol:{span:18}},q={labelCol:{xs:{span:12},sm:{span:10}},wrapperCol:{xs:{span:12},sm:{span:14}}},L={wrapperCol:{xs:{span:24,offset:2},sm:{span:16,offset:8}}},H=function(e){var t=e.customerInfoObj,n=e.infoOrWx,o=e.showListOrDetail,l=(0,a.useState)(!1),i=l[0],m=l[1],d=(0,a.useState)({}),f=d[0],p=d[1],v=(0,a.useState)(""),h=v[0],x=v[1],y=(0,a.useState)(0),C=y[0],O=(y[1],(0,a.useRef)("")),k=(0,a.useRef)(!1),S=(0,a.useRef)({}),j=(0,a.useState)(0),H=j[0],R=j[1];(0,a.useEffect)((function(){console.log(t),p(t);var e=n>0?t.wx_avatar:t.avatar;return x(e),function(){return null}}),[t]);return a.createElement(a.Fragment,null,a.createElement(w.Z,{spinning:i}),a.createElement("div",{className:"avatar-box"},0===n?a.createElement(I.Z,{oldImageUrl:h,avatarSize:64,uploadedResponseHandle:function(e,t){console.log(t),k.current=!0,Object.keys(e).includes("image_cos_name")&&e.image_cos_name.length>10?O.current=e.image_cos_name:(O.current="",x(""))},cleanFileListCount:C}):a.createElement("img",{src:h,alt:"Avatar",height:"64px"})),a.createElement(u.Z,Object.assign({},P,{layout:"horizontal",onFinish:function(e){m(!0);var t=Object.assign({},e);k.current&&0===n&&(t.avatar=O.current),console.log(t),p(e),S.current=t,R(H+1)},name:"customer_info_edit"}),Object.keys(f).map((function(e){if(b.includes(e))return null;var n=E.includes(e),o=g[e],l=t[e];return a.createElement(u.Z.Item,Object.assign({},q,{name:e,label:o,key:e.toString(),initialValue:l}),Object.keys(_).includes(e)?_[e]:a.createElement(r.Z,{placeholder:"请输入 "+o,disabled:n}))})),a.createElement(u.Z.Item,L,a.createElement(s.Z,{type:"primary",htmlType:"submit"},"修改"),"  ",a.createElement(s.Z,{onClick:function(){o(0)}},"取消")),a.createElement(u.Z.Item,null,a.createElement(Z.GT,{customerOrWx:n,customerOrWxId:t.id,requestCount:H,reqObject:S.current,responseDataHandle:function(e){m(!1);try{console.log(e),c.ZP.success("Success!"),c.ZP.success("更新成功(Success)!"),setTimeout((function(){o(0)}),1e3)}catch(t){console.log(t),c.ZP.error("Error..."),c.ZP.error("Error: 网络错误...")}}}))))},R=function(e){var t=e.customerOrWxInfoObj,n=e.showListOrDetail,r=Object.keys(t),o=!0,l=!0;if(r.forEach((function(e){f.includes(e)||(o=!1),v.includes(e)||(l=!1)})),o&&l)return console.log("Customer object error, too many keys..."),null;if(!o&&!l)return console.log("Customer object error, all keys error..."),null;var s=o?0:1;return a.createElement(H,{customerInfoObj:t,infoOrWx:s,showListOrDetail:n})};R.defaultProps={customerOrWxInfoObj:{},showListOrDetail:function(e){console.log("This is Form page! value: "+e)}};var D=R,M=n(17858),z=function(e){var t=e.sendGetRequest;return e.showLoadMoreButton?a.createElement("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"}},a.createElement(s.Z,{onClick:t},"loading more")):null},T=function(e){var t=e.customerData,n=e.sendGetRequest,r=e.showLoadMoreButton,o=e.selectCustomerHandle,l=e.showListCount,c=(0,a.useState)(0),u=c[0],i=c[1],m=(0,a.useState)({}),d=m[0],f=m[1],p=function(e,t){void 0===t&&(t={}),e>0&&f(t),i(e)};return(0,a.useEffect)((function(){p(0)}),[l]),u<1?a.createElement(j.ZP,{itemLayout:"vertical",loadMore:a.createElement(z,{sendGetRequest:n,showLoadMoreButton:r}),dataSource:t,renderItem:function(e){return a.createElement(j.ZP.Item,{actions:[a.createElement(s.Z,{onClick:function(){return o(e)},type:"link"},"选择"),a.createElement(s.Z,{onClick:function(){p(1,e)},type:"link"},"顾客详情")]},a.createElement(j.ZP.Item.Meta,{avatar:a.createElement(M.Z,{width:64,alt:"Image",src:e.wx_avatar}),title:e.wx_nickname+" 住址: "+e.wx_province+" "+e.wx_city+"; 备注名: "+e.memo_name,description:"备注: "+e.explains}))}}):a.createElement(D,{customerOrWxInfoObj:d,showListOrDetail:p})},F=function(e){var t=e.customerData,n=e.sendGetRequest,r=e.showLoadMoreButton,o=e.selectCustomerHandle,l=e.showListCount,c=(0,a.useState)(0),u=c[0],i=c[1],m=(0,a.useState)({}),d=m[0],f=m[1],p=function(e,t){void 0===t&&(t={}),e>0&&f(t),i(e)};return(0,a.useEffect)((function(){console.log("changed: "+l),p(0)}),[l]),u<1?a.createElement(j.ZP,{itemLayout:"vertical",loadMore:a.createElement(z,{sendGetRequest:n,showLoadMoreButton:r}),dataSource:t,renderItem:function(e){return a.createElement(j.ZP.Item,{actions:[a.createElement(s.Z,{onClick:function(){return o(e)},type:"link"},"选择"),a.createElement(s.Z,{onClick:function(){p(1,e)},type:"link"},"顾客详情")]},a.createElement(j.ZP.Item.Meta,{avatar:a.createElement(M.Z,{width:64,alt:"Image",src:e.avatar}),title:"姓名: "+e.name+", 手机: "+e.mobile+", 住址: "+e.address+";",description:"备注: "+e.explains}))}}):a.createElement(D,{customerOrWxInfoObj:d,showListOrDetail:p})},G=function(e){var t=e.customerData,n=e.wxOrInfo,r=e.sendGetRequest,o=e.showLoadMoreButton,l=e.selectCustomerHandle,s=e.showListCount;return n>0?a.createElement(F,{customerData:t,sendGetRequest:r,showLoadMoreButton:o,selectCustomerHandle:l,showListCount:s}):a.createElement(T,{customerData:t,sendGetRequest:r,showLoadMoreButton:o,selectCustomerHandle:l,showListCount:s})};G.defaultProps={customerData:[],wxOrInfo:0,sendGetRequest:null,showLoadMoreButton:!0,selectCustomerHandle:function(e){console.log(e);var t=Object.keys(e).includes("name")?e.name:Object.keys(e).includes("wx_nickname")?e.wx_nickname:"Error Object";c.ZP.info("Selected "+t+" !"),c.ZP.info("选择了 "+t+" !")},showListCount:0};var B=G,W=n(33328),A=r.Z.Search,K=o.Z.Option,U=function(e){var t,n=e.selectCustomerHandle,r=e.clickCreatedCustomerHandle,c=(0,a.useState)(!1),u=c[0],i=c[1],m=(0,a.useState)(0),d=m[0],f=m[1],p=(0,a.useRef)(""),v=(0,a.useState)([]),E=v[0],g=v[1],_=(0,a.useRef)("wx_nickname"),b=(0,a.useState)(0),Z=b[0],w=b[1],h=(0,a.useRef)(0),x=(0,a.useRef)(1),y=(0,a.useState)(!0),C=y[0],O=y[1],k=(0,a.useRef)("admin-wxinfo/v1/customerwxinfo"),j=(0,a.useRef)(((t={})[_.current]="",t.page=h,t)),I=(0,a.useState)(0),P=I[0],q=I[1],L=function(){var e;if(h.current=h.current+1,h.current>x.current)return O(!1),void console.log("Not more...");O(!0);var t=((e={})[_.current]=p.current,e.page=h.current,e);j.current=t,q(P+1)};return a.createElement("div",null,a.createElement(S,{modalState:u,setModalState:i,responseDataHandle:function(e){r(e),i(!1)}}),a.createElement(l.Z,null,a.createElement(o.Z,{defaultValue:"wx_nickname",style:{width:120},onChange:function(e){_.current=e;var t=[].concat(["admin-wxinfo/v1/customerwxinfo","admin-customer/v1/customer"]);g([]),"wx_nickname"===e?(k.current=t[0],w(0)):(k.current=t[1],w(1))}},a.createElement(K,{value:"wx_nickname"},"微信昵称"),a.createElement(K,{value:"name"},"顾客姓名"),a.createElement(K,{value:"mobile"},"手机号码")),a.createElement(s.Z,{type:"link",onClick:function(){i(!0)}},"新建顾客")),a.createElement("br",null),a.createElement("br",null),a.createElement(A,{placeholder:"搜索顾客微信昵称",onSearch:function(e){f(d+1),g([]),h.current=0,x.current=1,p.current=e,L()},enterButton:!0}),a.createElement("br",null),a.createElement("br",null),a.createElement(B,{selectCustomerHandle:n,customerData:E,wxOrInfo:Z,sendGetRequest:L,showLoadMoreButton:C,showListCount:d}),a.createElement("br",null),a.createElement(W.Z,{responseDataHandle:function(e){if(Object.keys(e).includes("code")&&1e3===e.code){var t=E.concat(e.results);if(g(t),e.count&&void 0!==e.count){var n=Math.ceil(Number(e.count)/10);x.current=n}else x.current=1}else console.log("Error Request: ",e)},api:k.current,method:"get",reqParams:j.current,reqObject:{},requestCount:P}))};U.defaultProps={selectCustomerHandle:function(e){console.log(e);var t=Object.keys(e).includes("name")?e.name:Object.keys(e).includes("wx_nickname")?e.wx_nickname:"Error Object";c.ZP.info("Selected "+t+" !"),c.ZP.info("选择了 "+t+" !")},clickCreatedCustomerHandle:function(e){console.log(e)}};var N=U},25446:function(e,t,n){"use strict";var a=n(67294),r=n(54325),o=function(e){var t=e.spinning,n=(0,a.useState)(!1),o=n[0],l=n[1],s={display:o?"block":"none"};return(0,a.useEffect)((function(){l(t)}),[t]),a.createElement("div",{className:"overall-loading",style:s},a.createElement(r.Z,{spinning:t,size:"large"}))};o.defaultProps={spinning:!1},t.Z=o},73856:function(e,t,n){"use strict";var a=n(67294),r=n(15169);t.Z=function(e){var t=e.value,n=e.onChange;return a.createElement(r.A,{value:t,onChange:n,options:[{value:0,label:"未知"},{value:1,label:"门店"},{value:2,label:"淘宝"},{value:3,label:"小程序"},{value:4,label:"微信-方灵芝"},{value:5,label:"微信-展望眼镜"}]})}},89560:function(e,t,n){"use strict";var a=n(67294),r=n(40977),o=n(77371),l=n(23148),s=n(56452),c=n(75334),u=n(93299),i=n(32210),m=n(50845),d=n(17858),f=n(28823),p=n(72373),v=function(e){var t=e.oldImageUrl,v=e.avatarSize,E=e.uploadedResponseHandle,g=e.fileKey,_=e.cleanFileListCount,b=(0,a.useRef)({}),Z=(0,a.useRef)({}),w=(0,a.useRef)(""),h=(0,a.useState)(""),x=h[0],y=h[1],C=(0,a.useState)(0),O=C[0],k=C[1],S=(0,a.useRef)({}),j=(0,a.useState)(!0),I=j[0],P=j[1],q=(0,a.useState)(!0),L=q[0],H=q[1];(0,a.useEffect)((function(){M()}),[_]),(0,a.useEffect)((function(){b.current={},y(""),P(!0)}),[t]),(0,a.useEffect)((function(){H(0===Object.keys(b.current).length)}),[b.current]);var R=function(e,t){var n=Object.assign({},Z.current),a=n.credentials;t({TmpSecretId:a.tmpSecretId,TmpSecretKey:a.tmpSecretKey,XCosSecurityToken:a.sessionToken,StartTime:n.startTime,ExpiredTime:n.expiredTime})},D={fileList:[],beforeUpload:function(e){return b.current=e,k(O+1),!1}},M=function(){E({},g),y(""),b.current={},P(!1)};return a.createElement("div",null,a.createElement(o.Z,{direction:"vertical"},a.createElement(d.Z,{src:I?t:x,width:v}),a.createElement(l.Z,{gutter:10},a.createElement(s.Z,{span:12},a.createElement("div",{style:{textAlign:"left"}},a.createElement(c.Z,D,L?a.createElement(u.Z,{size:"small"},a.createElement(i.Z,null)," 更新"):null))),a.createElement(s.Z,{span:12},x.length>10||t.length>10?a.createElement(u.Z,{onClick:M,size:"small"},a.createElement(m.Z,null)," 删除"):null)),a.createElement(f.G,{requestCount:O,reqObject:S.current,responseDataHandle:function(e){(console.log(e),Object.keys(e).includes("image_cos_name")||Object.keys(e).includes("sts_obj"))?(Z.current=e.sts_obj,w.current=e.image_cos_name,"undefined"!=typeof window&&new(n(74525))({getAuthorization:R}).putObject(Object.assign({},p.D1,{Key:w.current,Body:b.current,onProgress:function(e){console.log(JSON.stringify(e))}}),(function(t,n){console.log(t||n),n?(console.log(n),y(e.image_cos_name_url),P(!1),E(e,g),r.ZP.success("图片上传成功!")):(M(),r.ZP.error("图片上传失败..."))}))):console.log("Get temporary key error...")}})))};v.defaultProps={oldImageUrl:"",avatarSize:96,uploadedResponseHandle:function(e,t){console.log(e,t)},fileKey:"image1",cleanFileListCount:0},t.Z=v},4600:function(e,t,n){"use strict";var a=n(67294),r=n(40977),o=n(77371),l=n(23148),s=n(56452),c=n(75334),u=n(93299),i=n(32210),m=n(50845),d=n(17858),f=n(48428),p=n(57926),v=function(e){var t=e.oldImageUrl,n=e.avatarSize,v=e.uploadedResponseHandle,E=e.fileKey,g=e.cleanFileListCount,_=(0,a.useState)(!0),b=_[0],Z=_[1],w=(0,a.useState)([]),h=w[0],x=w[1],y=(0,a.useState)(""),C=y[0],O=y[1],k=(0,a.useState)(!0),S=k[0],j=k[1];(0,a.useEffect)((function(){Z(0===h.length)}),[h]),(0,a.useEffect)((function(){x([])}),[g]),(0,a.useEffect)((function(){x([]),O(""),j(!0)}),[t]);var I={name:"upload-single-file",action:f.Z.apiBaseUrl+"/files-handle/v1/uploadfiles",headers:{authorization:(0,p.LP)()},fileList:h,onChange:function(e){if(x(e.fileList.slice()),j(!1),"done"===e.file.status){r.ZP.success(e.file.name+" file uploaded successfully");var t=Object.assign({},e.file.response);v(t,E),Object.keys(t).includes("image_cos_name_url")&&t.image_cos_name_url.length>10&&O(t.image_cos_name_url)}else"error"===e.file.status&&(r.ZP.error("Error: "+e.file.name+" file upload failed."),r.ZP.error("Error: "+e.file.name+" 文件上传失败..."),x([]))}};return a.createElement("div",null,a.createElement(o.Z,{direction:"vertical"},a.createElement(d.Z,{src:S?t:C,width:n}),a.createElement(l.Z,{gutter:10},a.createElement(s.Z,{span:12},a.createElement("div",{style:{textAlign:"left"}},a.createElement(c.Z,I,b?a.createElement(u.Z,{size:"small"},a.createElement(i.Z,null)," 更新"):null))),a.createElement(s.Z,{span:12},C.length>10||t.length>10?a.createElement(u.Z,{onClick:function(){v({},E),O(""),x([]),j(!1)},size:"small"},a.createElement(m.Z,null)," 删除"):null))))};v.defaultProps={oldImageUrl:"",avatarSize:96,uploadedResponseHandle:function(e,t){console.log(e,t)},fileKey:"image1",cleanFileListCount:0},t.Z=v}}]);
//# sourceMappingURL=510198d6d6e9c6791f1833a2f2a373ab2fc92138-064b349e0b7cb7eabf18.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"9wds":function(e,t,a){},TjJO:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("vpoQ");t.a=function(e){var t=e.value,a=e.onChange;return r.a.createElement(c.a,{value:t,onChange:a,options:[{value:0,label:"未知"},{value:1,label:"门店"},{value:2,label:"淘宝"},{value:3,label:"小程序"},{value:4,label:"微信-方灵芝"},{value:5,label:"微信-展望眼镜"}]})}},VYaB:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return u})),a.d(t,"d",(function(){return i}));var n=a("q1tI"),r=a.n(n),c=a("Sm+g"),o=["admin-customer/v1/customer","admin-wxinfo/v1/customerwxinfo"],l=function(e){var t=e.requestCount,a=e.reqObject,n=e.responseDataHandle,l=o[0];return r.a.createElement(c.a,{responseDataHandle:n,api:l,method:"post",reqParams:{},reqObject:a,requestCount:t})};l.defaultProps={requestCount:0,reqObject:{},responseDataHandle:function(e){console.log(e)}};var s=function(e){var t=e.customerOrWx,a=e.customerOrWxId,l=e.requestCount,s=e.reqObject,u=e.responseDataHandle,i=Object(n.useRef)(o[t]+"/"+a);return Object(n.useEffect)((function(){i.current=o[t]+"/"+a}),[t,a]),r.a.createElement(c.a,{responseDataHandle:u,api:i.current,method:"put",reqParams:{},reqObject:s,requestCount:l})};s.defaultProps={customerOrWx:0,customerOrWxId:0,requestCount:0,reqObject:{},responseDataHandle:function(e){console.log(e)}};var u=function(e){var t=e.customerId,a=e.responseDataHandle,o=Object(n.useState)(0),l=o[0],s=o[1],u=Object(n.useRef)({id:t}),i=Object(n.useRef)({});return Object(n.useEffect)((function(){u.current={id:t},s(l+1)}),[t]),r.a.createElement(c.a,{responseDataHandle:a,api:"admin-customer/v1/customer",method:"get",reqParams:u.current,reqObject:i.current,requestCount:l})};u.defaultProps={customerId:0,responseDataHandle:function(e){console.log(e)}};var i=function(e){var t=e.customerId,a=e.responseDataHandle,o=Object(n.useState)(0),l=o[0],s=o[1],u=Object(n.useRef)({customer_id:t}),i=Object(n.useRef)({});return Object(n.useEffect)((function(){t>0&&(u.current={customer_id:t},s(l+1))}),[t]),r.a.createElement(c.a,{responseDataHandle:a,api:"admin-wxinfo/v1/customerwxinfo",method:"get",reqParams:u.current,reqObject:i.current,requestCount:l})};i.defaultProps={customerId:0,responseDataHandle:function(e){console.log(e)}}},c5SG:function(e,t,a){},colo:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("W9HT"),o=(a("c5SG"),function(e){var t=e.spinning,a=Object(n.useState)(!1),o=a[0],l=a[1],s={display:o?"block":"none"};return Object(n.useEffect)((function(){l(t)}),[t]),r.a.createElement("div",{className:"overall-loading",style:s},r.a.createElement(c.a,{spinning:t,size:"large"}))});o.defaultProps={spinning:!1},t.a=o},d6IX:function(e,t,a){"use strict";a("Z2Ku"),a("L9s1"),a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V");var n=a("q1tI"),r=a.n(n),c=a("tsqr"),o=a("zeV3"),l=a("BMrR"),s=a("kPKH"),u=a("8z0m"),i=a("2/Rp"),m=a("z7Xi"),d=a("/MfK"),f=a("scZm"),b=a("Xz4P"),p=a("JmXp"),O=function(e){var t=e.oldImageUrl,O=e.avatarSize,v=e.uploadedResponseHandle,E=e.fileKey,j=e.cleanFileListCount,g=Object(n.useRef)({}),_=Object(n.useRef)({}),w=Object(n.useRef)(""),x=Object(n.useState)(""),h=x[0],y=x[1],S=Object(n.useState)(0),C=S[0],k=S[1],q=Object(n.useRef)({}),I=Object(n.useState)(!0),R=I[0],H=I[1],L=Object(n.useState)(!0),D=L[0],M=L[1];Object(n.useEffect)((function(){B()}),[j]),Object(n.useEffect)((function(){g.current={},y(""),H(!0)}),[t]),Object(n.useEffect)((function(){M(0===Object.keys(g.current).length)}),[g.current]);var z=function(e,t){var a=Object.assign({},_.current),n=a.credentials;t({TmpSecretId:n.tmpSecretId,TmpSecretKey:n.tmpSecretKey,XCosSecurityToken:n.sessionToken,StartTime:a.startTime,ExpiredTime:a.expiredTime})},P={fileList:[],beforeUpload:function(e){return g.current=e,k(C+1),!1}},B=function(){v({},E),y(""),g.current={},H(!1)};return r.a.createElement("div",null,r.a.createElement(o.b,{direction:"vertical"},r.a.createElement(f.a,{src:R?t:h,width:O}),r.a.createElement(l.a,{gutter:10},r.a.createElement(s.a,{span:12},r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement(u.a,P,D?r.a.createElement(i.a,{size:"small"},r.a.createElement(m.a,null)," 更新"):null))),r.a.createElement(s.a,{span:12},h.length>10||t.length>10?r.a.createElement(i.a,{onClick:B,size:"small"},r.a.createElement(d.a,null)," 删除"):null)),r.a.createElement(b.a,{requestCount:C,reqObject:q.current,responseDataHandle:function(e){(console.log(e),Object.keys(e).includes("image_cos_name")||Object.keys(e).includes("sts_obj"))?(_.current=e.sts_obj,w.current=e.image_cos_name,"undefined"!==window&&new(a("NDg5"))({getAuthorization:z}).putObject(Object.assign({},p.a,{Key:w.current,Body:g.current,onProgress:function(e){console.log(JSON.stringify(e))}}),(function(t,a){console.log(t||a),a?(console.log(a),y(e.image_cos_name_url),H(!1),v(e,E),c.b.success("图片上传成功!")):(B(),c.b.error("图片上传失败..."))}))):console.log("Get temporary key error...")}})))};O.defaultProps={oldImageUrl:"",avatarSize:96,uploadedResponseHandle:function(e,t){console.log(e,t)},fileKey:"image1",cleanFileListCount:0},t.a=O},m7Th:function(e,t,a){"use strict";a("f3/d"),a("xfY5"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("Z2Ku"),a("L9s1");var n=a("q1tI"),r=a.n(n),c=a("5rEg"),o=a("2fM7"),l=a("zeV3"),s=a("2/Rp"),u=a("tsqr"),i=(a("a1Th"),a("91GP"),a("Vl3Y")),m=a("kLXV"),d=a("nMFz"),f=a("vpoQ"),b=["id","name","mobile","email","wx_openid","people_id","address","custormer_category","avatar","add_time","update_time","explains","is_valid","purchase_total_counts"],p={name:"",mobile:"",email:"",people_id:"",address:"",custormer_category:1,avatar:"",explains:"",is_valid:!0},O=["id","customer_id","wx_nickname","memo_name","wx_session_key","wx_openid","wx_avatar","wx_country","wx_province","wx_city","wx_gender","add_time","update_time","explains"],v=["id","customer_id","wx_session_key","wx_openid","add_time","update_time","purchase_total_counts","wx_avatar","avatar"],E={id:"ID",name:"姓名",mobile:"手机",email:"E-Mail",wx_openid:"微信openid",people_id:"身份证",address:"地址",custormer_category:"顾客级别",avatar:"头像url",add_time:"创建时间",update_time:"更新时间",explains:"说明",is_valid:"有效",purchase_total_counts:"订单总数",customer_id:"顾客ID",wx_session_key:"微信session key",wx_nickname:"微信昵称",wx_avatar:"微信头像url",wx_country:"国家",wx_province:"省",wx_city:"市",wx_gender:"性别",memo_name:"备注名称"},j={is_valid:r.a.createElement(f.a,{options:[{value:!0,label:"有效"},{value:!1,label:"无效"}]}),custormer_category:r.a.createElement(f.a,{options:[{value:1,label:"一般顾客"},{value:2,label:"优质顾客"},{value:3,label:"VIP顾客"}]}),wx_gender:r.a.createElement(f.a,{options:[{value:0,label:"未知"},{value:1,label:"男"},{value:2,label:"女"}]})},g=["avatar","wx_avatar"],_=a("VYaB"),w=a("colo"),x=a("7BUj").a.formCommonStyle,h=x.layoutForm,y=x.formItemLayout,S=x.tailFormItemLayout,C=["id","wx_openid","avatar","add_time","update_time","purchase_total_counts"],k=function(e){var t=e.modalState,a=e.setModalState,o=e.responseDataHandle,f=i.a.useForm()[0],O=Object(n.useState)(!1),g=O[0],x=O[1],k=Object(n.useRef)({}),q=Object(n.useRef)({}),I=Object(n.useState)(0),R=I[0],H=I[1],L=Object(n.useState)(0),D=L[0],M=L[1];Object(n.useEffect)((function(){!1===t&&f.setFieldsValue(Object.assign({},p))}),[t]);return r.a.createElement(m.a,{title:"创建顾客",getContainer:!1,visible:t,footer:null,closable:!1},r.a.createElement(w.a,{spinning:g}),r.a.createElement("div",{className:"avatar-box"},r.a.createElement(d.a,{uploadedResponseHandle:function(e,t){var a="";Object.keys(e).includes("image_cos_name")?a=e.image_cos_name:(M(D+1),u.b.error("Upload fail..."),u.b.error("上传失败")),k.current={avatar:a}},avatarSize:64,fileKey:"avatar",cleanFileListCount:D})),r.a.createElement(i.a,Object.assign({},h,{form:f,layout:"horizontal",onFinish:function(e){x(!0),q.current=Object.assign({},e,k.current),H(R+1)},name:"dynamic_rule"}),b.map((function(e){if(C.includes(e))return null;var t=v.includes(e),a=E[e];return r.a.createElement(i.a.Item,Object.assign({},y,{name:e,label:a,key:e.toString(),initialValue:p[e]}),Object.keys(j).includes(e)?j[e]:r.a.createElement(c.a,{placeholder:"请输入 "+a,disabled:t}))})),r.a.createElement(i.a.Item,S,r.a.createElement(l.b,null,r.a.createElement(s.a,{type:"primary",htmlType:"submit"},"创建"),r.a.createElement(s.a,{onClick:function(){a(!1)}},"取消"))),r.a.createElement(i.a.Item,null,r.a.createElement(_.a,{requestCount:R,reqObject:q.current,responseDataHandle:function(e){x(!1),o(e)}}))))};k.defaultProps={modalState:!1,setModalState:function(e){console.log(e)},responseDataHandle:function(e){console.log(e)}};var q=k,I=a("VXEj"),R=a("d6IX"),H=(a("9wds"),{labelCol:{span:6},wrapperCol:{span:18}}),L={labelCol:{xs:{span:12},sm:{span:10}},wrapperCol:{xs:{span:12},sm:{span:14}}},D={wrapperCol:{xs:{span:24,offset:2},sm:{span:16,offset:8}}},M=function(e){var t=e.customerInfoObj,a=e.infoOrWx,o=e.showListOrDetail,l=Object(n.useState)(!1),m=l[0],d=l[1],f=Object(n.useState)({}),b=f[0],p=f[1],O=Object(n.useState)(""),x=O[0],h=O[1],y=Object(n.useState)(0),S=y[0],C=(y[1],Object(n.useRef)("")),k=Object(n.useRef)(!1),q=Object(n.useRef)({}),I=Object(n.useState)(0),M=I[0],z=I[1];Object(n.useEffect)((function(){console.log(t),p(t);var e=a>0?t.wx_avatar:t.avatar;return h(e),function(){return null}}),[t]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{spinning:m}),r.a.createElement("div",{className:"avatar-box"},0===a?r.a.createElement(R.a,{oldImageUrl:x,avatarSize:64,uploadedResponseHandle:function(e,t){console.log(t),k.current=!0,Object.keys(e).includes("image_cos_name")&&e.image_cos_name.length>10?C.current=e.image_cos_name:(C.current="",h(""))},cleanFileListCount:S}):r.a.createElement("img",{src:x,alt:"Avatar",height:"64px"})),r.a.createElement(i.a,Object.assign({},H,{layout:"horizontal",onFinish:function(e){d(!0);var t=Object.assign({},e);k.current&&0===a&&(t.avatar=C.current),console.log(t),p(e),q.current=t,z(M+1)},name:"customer_info_edit"}),Object.keys(b).map((function(e){if(g.includes(e))return null;var a=v.includes(e),n=E[e],o=t[e];return r.a.createElement(i.a.Item,Object.assign({},L,{name:e,label:n,key:e.toString(),initialValue:o}),Object.keys(j).includes(e)?j[e]:r.a.createElement(c.a,{placeholder:"请输入 "+n,disabled:a}))})),r.a.createElement(i.a.Item,D,r.a.createElement(s.a,{type:"primary",htmlType:"submit"},"修改"),"  ",r.a.createElement(s.a,{onClick:function(){o(0)}},"取消")),r.a.createElement(i.a.Item,null,r.a.createElement(_.b,{customerOrWx:a,customerOrWxId:t.id,requestCount:M,reqObject:q.current,responseDataHandle:function(e){d(!1);try{console.log(e),u.b.success("Success!"),u.b.success("更新成功(Success)!"),setTimeout((function(){o(0)}),1e3)}catch(t){console.log(t),u.b.error("Error..."),u.b.error("Error: 网络错误...")}}}))))},z=function(e){var t=e.customerOrWxInfoObj,a=e.showListOrDetail,n=Object.keys(t),c=!0,o=!0;if(n.forEach((function(e){b.includes(e)||(c=!1),O.includes(e)||(o=!1)})),c&&o)return console.log("Customer object error, too many keys..."),null;if(!c&&!o)return console.log("Customer object error, all keys error..."),null;var l=c?0:1;return r.a.createElement(M,{customerInfoObj:t,infoOrWx:l,showListOrDetail:a})};z.defaultProps={customerOrWxInfoObj:{},showListOrDetail:function(e){console.log("This is Form page! value: "+e)}};var P=z,B=a("scZm"),G=function(e){var t=e.sendGetRequest;return e.showLoadMoreButton?r.a.createElement("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"}},r.a.createElement(s.a,{onClick:t},"loading more")):null},T=function(e){var t=e.customerData,a=e.sendGetRequest,c=e.showLoadMoreButton,o=e.selectCustomerHandle,l=e.showListCount,u=Object(n.useState)(0),i=u[0],m=u[1],d=Object(n.useState)({}),f=d[0],b=d[1],p=function(e,t){void 0===t&&(t={}),e>0&&b(t),m(e)};return Object(n.useEffect)((function(){p(0)}),[l]),i<1?r.a.createElement(I.b,{itemLayout:"vertical",loadMore:r.a.createElement(G,{sendGetRequest:a,showLoadMoreButton:c}),dataSource:t,renderItem:function(e){return r.a.createElement(I.b.Item,{actions:[r.a.createElement(s.a,{onClick:function(){return o(e)},type:"link"},"选择"),r.a.createElement(s.a,{onClick:function(){p(1,e)},type:"link"},"顾客详情")]},r.a.createElement(I.b.Item.Meta,{avatar:r.a.createElement(B.a,{width:64,alt:"Image",src:e.wx_avatar}),title:e.wx_nickname+" 住址: "+e.wx_province+" "+e.wx_city+"; 备注名: "+e.memo_name,description:"备注: "+e.explains}))}}):r.a.createElement(P,{customerOrWxInfoObj:f,showListOrDetail:p})},F=function(e){var t=e.customerData,a=e.sendGetRequest,c=e.showLoadMoreButton,o=e.selectCustomerHandle,l=e.showListCount,u=Object(n.useState)(0),i=u[0],m=u[1],d=Object(n.useState)({}),f=d[0],b=d[1],p=function(e,t){void 0===t&&(t={}),e>0&&b(t),m(e)};return Object(n.useEffect)((function(){console.log("changed: "+l),p(0)}),[l]),i<1?r.a.createElement(I.b,{itemLayout:"vertical",loadMore:r.a.createElement(G,{sendGetRequest:a,showLoadMoreButton:c}),dataSource:t,renderItem:function(e){return r.a.createElement(I.b.Item,{actions:[r.a.createElement(s.a,{onClick:function(){return o(e)},type:"link"},"选择"),r.a.createElement(s.a,{onClick:function(){p(1,e)},type:"link"},"顾客详情")]},r.a.createElement(I.b.Item.Meta,{avatar:r.a.createElement(B.a,{width:64,alt:"Image",src:e.avatar}),title:"姓名: "+e.name+", 手机: "+e.mobile+", 住址: "+e.address+";",description:"备注: "+e.explains}))}}):r.a.createElement(P,{customerOrWxInfoObj:f,showListOrDetail:p})},V=function(e){var t=e.customerData,a=e.wxOrInfo,n=e.sendGetRequest,c=e.showLoadMoreButton,o=e.selectCustomerHandle,l=e.showListCount;return a>0?r.a.createElement(F,{customerData:t,sendGetRequest:n,showLoadMoreButton:c,selectCustomerHandle:o,showListCount:l}):r.a.createElement(T,{customerData:t,sendGetRequest:n,showLoadMoreButton:c,selectCustomerHandle:o,showListCount:l})};V.defaultProps={customerData:[],wxOrInfo:0,sendGetRequest:null,showLoadMoreButton:!0,selectCustomerHandle:function(e){console.log(e);var t=Object.keys(e).includes("name")?e.name:Object.keys(e).includes("wx_nickname")?e.wx_nickname:"Error Object";u.b.info("Selected "+t+" !"),u.b.info("选择了 "+t+" !")},showListCount:0};var W=V,K=a("Sm+g"),U=c.a.Search,X=o.a.Option,N=function(e){var t,a=e.selectCustomerHandle,c=e.clickCreatedCustomerHandle,u=Object(n.useState)(!1),i=u[0],m=u[1],d=Object(n.useState)(0),f=d[0],b=d[1],p=Object(n.useRef)(""),O=Object(n.useState)([]),v=O[0],E=O[1],j=Object(n.useRef)("wx_nickname"),g=Object(n.useState)(0),_=g[0],w=g[1],x=Object(n.useRef)(0),h=Object(n.useRef)(1),y=Object(n.useState)(!0),S=y[0],C=y[1],k=Object(n.useRef)("admin-wxinfo/v1/customerwxinfo"),I=Object(n.useRef)(((t={})[j.current]="",t.page=x,t)),R=Object(n.useState)(0),H=R[0],L=R[1],D=function(){var e;if(x.current=x.current+1,x.current>h.current)return C(!1),void console.log("Not more...");C(!0);var t=((e={})[j.current]=p.current,e.page=x.current,e);I.current=t,L(H+1)};return r.a.createElement("div",null,r.a.createElement(q,{modalState:i,setModalState:m,responseDataHandle:function(e){c(e),m(!1)}}),r.a.createElement(l.b,null,r.a.createElement(o.a,{defaultValue:"wx_nickname",style:{width:120},onChange:function(e){j.current=e;var t=[].concat(["admin-wxinfo/v1/customerwxinfo","admin-customer/v1/customer"]);E([]),"wx_nickname"===e?(k.current=t[0],w(0)):(k.current=t[1],w(1))}},r.a.createElement(X,{value:"wx_nickname"},"微信昵称"),r.a.createElement(X,{value:"name"},"顾客姓名"),r.a.createElement(X,{value:"mobile"},"手机号码")),r.a.createElement(s.a,{type:"link",onClick:function(){m(!0)}},"新建顾客")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(U,{placeholder:"搜索顾客微信昵称",onSearch:function(e){b(f+1),E([]),x.current=0,h.current=1,p.current=e,D()},enterButton:!0}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(W,{selectCustomerHandle:a,customerData:v,wxOrInfo:_,sendGetRequest:D,showLoadMoreButton:S,showListCount:f}),r.a.createElement("br",null),r.a.createElement(K.a,{responseDataHandle:function(e){if(Object.keys(e).includes("code")&&1e3===e.code){var t=v.concat(e.results);if(E(t),e.count&&void 0!==e.count){var a=Math.ceil(Number(e.count)/10);h.current=a}else h.current=1}else console.log("Error Request: ",e)},api:k.current,method:"get",reqParams:I.current,reqObject:{},requestCount:H}))};N.defaultProps={selectCustomerHandle:function(e){console.log(e);var t=Object.keys(e).includes("name")?e.name:Object.keys(e).includes("wx_nickname")?e.wx_nickname:"Error Object";u.b.info("Selected "+t+" !"),u.b.info("选择了 "+t+" !")},clickCreatedCustomerHandle:function(e){console.log(e)}};t.a=N},nMFz:function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("Z2Ku"),a("L9s1"),a("91GP"),a("f3/d");var n=a("q1tI"),r=a.n(n),c=a("tsqr"),o=a("zeV3"),l=a("BMrR"),s=a("kPKH"),u=a("8z0m"),i=a("2/Rp"),m=a("z7Xi"),d=a("/MfK"),f=a("scZm"),b=a("7BUj"),p=a("1UTX"),O=function(e){var t=e.oldImageUrl,a=e.avatarSize,O=e.uploadedResponseHandle,v=e.fileKey,E=e.cleanFileListCount,j=Object(n.useState)(!0),g=j[0],_=j[1],w=Object(n.useState)([]),x=w[0],h=w[1],y=Object(n.useState)(""),S=y[0],C=y[1],k=Object(n.useState)(!0),q=k[0],I=k[1];Object(n.useEffect)((function(){_(0===x.length)}),[x]),Object(n.useEffect)((function(){h([])}),[E]),Object(n.useEffect)((function(){h([]),C(""),I(!0)}),[t]);var R={name:"upload-single-file",action:b.a.apiBaseUrl+"/files-handle/v1/uploadfiles",headers:{authorization:Object(p.a)()},fileList:x,onChange:function(e){if(h(e.fileList.slice()),I(!1),"done"===e.file.status){c.b.success(e.file.name+" file uploaded successfully");var t=Object.assign({},e.file.response);O(t,v),Object.keys(t).includes("image_cos_name_url")&&t.image_cos_name_url.length>10&&C(t.image_cos_name_url)}else"error"===e.file.status&&(c.b.error("Error: "+e.file.name+" file upload failed."),c.b.error("Error: "+e.file.name+" 文件上传失败..."),h([]))}};return r.a.createElement("div",null,r.a.createElement(o.b,{direction:"vertical"},r.a.createElement(f.a,{src:q?t:S,width:a}),r.a.createElement(l.a,{gutter:10},r.a.createElement(s.a,{span:12},r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement(u.a,R,g?r.a.createElement(i.a,{size:"small"},r.a.createElement(m.a,null)," 更新"):null))),r.a.createElement(s.a,{span:12},S.length>10||t.length>10?r.a.createElement(i.a,{onClick:function(){O({},v),C(""),h([]),I(!1)},size:"small"},r.a.createElement(d.a,null)," 删除"):null))))};O.defaultProps={oldImageUrl:"",avatarSize:96,uploadedResponseHandle:function(e,t){console.log(e,t)},fileKey:"image1",cleanFileListCount:0},t.a=O}}]);
//# sourceMappingURL=510198d6d6e9c6791f1833a2f2a373ab2fc92138-08db5c569b31a8e53fa0.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"g/of":function(e,t,n){"use strict";n.d(t,"a",(function(){return T})),n.d(t,"b",(function(){return L})),n.d(t,"c",(function(){return w}));n("f3/d"),n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Z2Ku"),n("L9s1");var a=n("q1tI"),r=n.n(a),c=n("tsqr"),o=n("8z0m"),l=n("2/Rp"),s=n("zeV3"),i=n("W9HT"),u=n("z7Xi"),m=(n("a1Th"),n("pIFo"),n("VXEj")),f=n("3S7+"),g=n("/MfK"),d=n("scZm"),b=function(e){var t=e.imagesList,n=e.setImagesList,c=e.deletedImageHandle,o=e.imageKeyName,s=Object(a.useRef)([]),i=function(e,t){console.log(t);var n=parseInt(t.replace(o,""));if(console.log(n),!n)return e;for(var a=[],r=0;r<e.length;r++){var c=Object.assign({},e[r]);console.log(c);var l=c.column_key?c.column_key:"0";(l=parseInt(l.replace(o,"")))>n&&(c.column_key=o+n,n+=1),console.log(c),a.push(c)}return a},u=function(e){for(var a=[].concat(t),r=0;r<t.length;r++){t[r].column_key===e&&a.splice(r,1)}console.log(i(a,e)),n(i(a,e)),function(e){for(var t=!1,n=0;n<s.length;n++){s[n]===e&&(t=!0)}var a=[].concat(s.current);t||(a.push(e),s.current=a),c(a)}(e)};return r.a.createElement("div",{style:{textAlign:"left"}},0===t.length?null:r.a.createElement(m.b,{itemLayout:"vertical",size:"large",dataSource:t,renderItem:function(e,t){return r.a.createElement(m.b.Item,{key:t.toString(),actions:[r.a.createElement(f.a,{title:"删除"},r.a.createElement(l.a,{onClick:function(){return u(e.column_key)},shape:"circle",icon:r.a.createElement(g.a,null)}))]},r.a.createElement(m.b.Item.Meta,{title:e.file_name,avatar:r.a.createElement(d.a,{src:e.url})}))}}))};b.defaultProps={imagesList:[],setImagesList:function(e){console.log(e)},deletedImageHandle:function(e){return console.log(e)},imageKeyName:"image_cos_name"};var p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]},name:"arrow-up",theme:"outlined"},v=n("6VBw"),j=function(e,t){return a.createElement(v.a,Object.assign({},e,{ref:t,icon:p}))};j.displayName="ArrowUpOutlined";var y=a.forwardRef(j),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"},_=function(e,t){return a.createElement(v.a,Object.assign({},e,{ref:t,icon:O}))};_.displayName="ArrowDownOutlined";var h=a.forwardRef(_),E=function(e){var t=e.imagesList,n=e.setImagesList,a=function(e,a){void 0===a&&(a=1);var r=[].concat(t),c=r.splice(e,1)[0],o=e+a;o<0||o>r.length?console.log("Insert index Error",o):(r.splice(o,0,c),n(r))};return r.a.createElement("div",{style:{textAlign:"left"}},0===t.length?null:r.a.createElement(m.b,{itemLayout:"vertical",size:"large",dataSource:t,renderItem:function(e,c){return r.a.createElement(m.b.Item,{key:c.toString(),actions:[r.a.createElement(f.a,{title:"上移"},r.a.createElement(l.a,{onClick:function(){return a(c,-1)},shape:"circle",icon:r.a.createElement(y,null)})),r.a.createElement(f.a,{title:"下移"},r.a.createElement(l.a,{onClick:function(){return a(c)},shape:"circle",icon:r.a.createElement(h,null)})),r.a.createElement(f.a,{title:"删除"},r.a.createElement(l.a,{onClick:function(){return function(e){var a=[].concat(t);a.splice(e,1),console.log(a),n(a)}(c)},shape:"circle",icon:r.a.createElement(g.a,null)}))]},r.a.createElement(m.b.Item.Meta,{title:e.file_name,avatar:r.a.createElement(d.a,{src:e.url})}))}}))};E.defaultProps={imagesList:[],setImagesList:function(e){console.log(e)}};var S=n("Xz4P"),k=n("JmXp"),I=function(e,t,n){var a={};if(1===t)a[n]=e.length>0?e[0].cos_name:"";else for(var r=0;r<t;r++){a[n+(r+1)]=e.length>r?e[r].cos_name:""}return console.log(a),a},T=function(e){var t=e.onChange,s=e.initFileList,i=e.maxFilesNum,m=e.imageKeyName,f=e.cleanImagesCount,g=Object(a.useState)(!0),d=g[0],p=g[1],v=Object(a.useRef)({}),j=Object(a.useState)(0),y=j[0],O=j[1],_=Object(a.useRef)({}),h=Object(a.useRef)({}),E=Object(a.useState)([]),T=E[0],L=E[1],w=Object(a.useRef)([]);Object(a.useEffect)((function(){for(var e={file_name:"",cos_name:""},t=[],n=0;n<s.length;n++){var a=s[n];t.push(Object.assign({},a,e))}L(t)}),[s]),Object(a.useEffect)((function(){T.length>=i?p(!1):p(!0),t(I(T,i,m))}),[T,i]),Object(a.useEffect)((function(){L([]),w.current=[]}),[f]);var C=function(e,t){var n=Object.assign({},_.current),a=n.credentials;t({TmpSecretId:a.tmpSecretId,TmpSecretKey:a.tmpSecretKey,XCosSecurityToken:a.sessionToken,StartTime:n.startTime,ExpiredTime:n.expiredTime})},N={listType:"picture",fileList:[],beforeUpload:function(e){console.log(e);var t=e.name;return h.current={file_name:t},v.current=e,O(y+1),null}};return r.a.createElement("div",null,r.a.createElement(b,{imagesList:T,setImagesList:L,deletedImageHandle:function(e){return w.current=e},imageKeyName:m}),r.a.createElement(o.a,N,d?r.a.createElement(l.a,null,r.a.createElement(u.a,null)," Upload"):null),r.a.createElement(S.a,{requestCount:y,reqObject:h.current,responseDataHandle:function(e){if(!Object.keys(e).includes("image_cos_name")&&!Object.keys(e).includes("sts_obj"))return console.log("Get temporary key error..."),void c.b.error("网络错误...");(_.current=e.sts_obj,"undefined"!=typeof window)&&new(n("NDg5"))({getAuthorization:C}).putObject(Object.assign({},k.a,{Key:e.image_cos_name,Body:v.current,onProgress:function(e){console.log(JSON.stringify(e))}}),(function(t,n){if(console.log(t||n),n){var a={column_key:(o=T.length+1,m+o),url:e.image_cos_name_url,cos_name:e.image_cos_name,file_name:v.current.name},r=[].concat(T);r.push(a),L(r),c.b.success("文件上传成功!")}else c.b.error("文件上传失败...");var o}))}}))};T.defaultProps={initFileList:[],fileList:[],maxFilesNum:5,onChange:function(e){console.log(e)},imageKeyName:"image_cos_name",cleanImagesCount:0};var L=function(e){var t=e.onChange,s=e.oldObj,i=e.maxImagesNum,m=e.imageKeyName,f=Object(a.useState)([]),g=f[0],d=f[1],b=Object(a.useState)(!0),p=b[0],v=b[1],j=Object(a.useState)(!1),y=j[0],O=j[1],_=Object(a.useState)(0),h=_[0],T=_[1],L=Object(a.useRef)({}),w=Object(a.useRef)({}),C=Object(a.useRef)({});Object(a.useEffect)((function(){var e=function(e,t,n){var a=[];if(1===t){var r=n+"_url";Object.keys(e).includes(r)&&a.push({column_key:n,url:e[r],file_name:"",cos_name:e[n]})}else for(var c=0;c<t;c++){var o=n+(c+1),l=o+"_url";Object.keys(e).includes(o)&&e[o].length>5&&Object.keys(e).includes(l)&&e[l].length>5&&a.push({column_key:o,url:e[l],file_name:"",cos_name:e[o]})}return a}(s,i,m);console.log(e),d(e)}),[s,i,m]),Object(a.useEffect)((function(){v(g.length<i),t(I(g,i,m))}),[g,i]);var N={accept:".jpg,.jpeg,.png,.bmp",listType:"picture",fileList:[],beforeUpload:function(e){var t=e.name;return w.current={file_name:t},L.current=e,O(!0),T(h+1),null}},K=function(e,t){var n=Object.assign({},C.current),a=n.credentials;t({TmpSecretId:a.tmpSecretId,TmpSecretKey:a.tmpSecretKey,XCosSecurityToken:a.sessionToken,StartTime:n.startTime,ExpiredTime:n.expiredTime})};return r.a.createElement("div",null,r.a.createElement(E,{imagesList:g,setImagesList:d}),r.a.createElement(o.a,N,p&&!y?r.a.createElement(l.a,null,r.a.createElement(u.a,null),"上传图片"):null),r.a.createElement(S.a,{requestCount:h,reqObject:w.current,responseDataHandle:function(e){if(!Object.keys(e).includes("image_cos_name")&&!Object.keys(e).includes("sts_obj"))return console.log("Get temporary key error..."),void c.b.error("网络错误...");(C.current=e.sts_obj,"undefined"!=typeof window)?new(n("NDg5"))({getAuthorization:K}).putObject(Object.assign({},k.a,{Key:e.image_cos_name,Body:L.current,onProgress:function(e){console.log(JSON.stringify(e))}}),(function(t,n){if(O(!1),console.log(t||n),n){var a={column_key:(o=g.length+1,m+o),url:e.image_cos_name_url,cos_name:e.image_cos_name,file_name:L.current.name},r=[].concat(g);r.push(a),d(r),c.b.success("文件上传成功!")}else c.b.error("文件上传失败...");var o})):O(!1)}}))};L.defaultProps={onChange:function(e){console.log(e)},oldObj:{handleCount:0},maxImagesNum:1,imageKeyName:"",cleanImagesCount:0};var w=function(e){var t=e.onChange,m=e.oldObj,f=e.videoKeyName,g=Object(a.useState)(!1),d=g[0],b=g[1],p=Object(a.useState)(!1),v=p[0],j=p[1],y=Object(a.useState)(""),O=y[0],_=y[1],h=Object(a.useState)(""),E=h[0],I=h[1],T=Object(a.useRef)({}),L=Object(a.useState)(0),w=L[0],C=L[1],N=Object(a.useRef)({}),K=Object(a.useRef)({});Object(a.useEffect)((function(){if(Object.keys(m).length>0&&f.length>0){var e=f+"_url",t=m[e]?m[e]:"";_(t);var n=m[f]?m[f]:"";I(n)}}),[m,f]),Object(a.useEffect)((function(){if(console.log(f),f.length>0){var e,n=((e={})[f]=E,e);console.log(n),t(n)}j(0===E.length)}),[E,f]);var x=function(e,t){var n=Object.assign({},T.current),a=n.credentials;t({TmpSecretId:a.tmpSecretId,TmpSecretKey:a.tmpSecretKey,XCosSecurityToken:a.sessionToken,StartTime:n.startTime,ExpiredTime:n.expiredTime})},R={accept:".mp4,.mov,.3gp",listType:"picture",fileList:[],beforeUpload:function(e){if(d)return null;console.log(e);var t=e.name;return N.current={file_name:t},K.current=e,C(w+1),null}};return r.a.createElement("div",null,r.a.createElement(s.b,{direction:"vertical"},O.length>0?r.a.createElement("video",{width:"320",height:"240",controls:!0,src:O}):null,v?null:r.a.createElement(l.a,{onClick:function(){_(""),I("")}},"删除视频"),r.a.createElement(o.a,R,v?d?r.a.createElement(i.a,null):r.a.createElement(l.a,null,r.a.createElement(u.a,null),"上传视频"):null),r.a.createElement(S.a,{requestCount:w,reqObject:N.current,responseDataHandle:function(e){if(console.log(e),!Object.keys(e).includes("image_cos_name")&&!Object.keys(e).includes("sts_obj"))return console.log("Get temporary key error..."),void c.b.error("网络错误...");(T.current=e.sts_obj,"undefined"!=typeof window)?new(n("NDg5"))({getAuthorization:x}).putObject(Object.assign({},k.a,{Key:e.image_cos_name,Body:K.current,onProgress:function(e){console.log(JSON.stringify(e))}}),(function(t,n){b(!1),console.log(t||n),n?(_(e.image_cos_name_url),I(e.image_cos_name),c.b.success("视频上传成功!")):c.b.error("视频上传失败...")})):b(!1)}})))};w.defaultProps={onChange:function(e){return console.log(e)},oldObj:{},videoKeyName:""}}}]);
//# sourceMappingURL=ee4a5b3f0840b400c9fc2e4cb8fc75a3447826ca-52debffea44a86445ff8.js.map
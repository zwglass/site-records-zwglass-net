(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"g/of":function(e,t,n){"use strict";n.d(t,"a",(function(){return T})),n.d(t,"b",(function(){return L})),n.d(t,"c",(function(){return w}));n("f3/d"),n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Z2Ku"),n("L9s1");var a=n("q1tI"),c=n.n(a),r=n("tsqr"),o=n("8z0m"),l=n("2/Rp"),s=n("zeV3"),i=n("W9HT"),u=n("z7Xi"),m=(n("a1Th"),n("pIFo"),n("VXEj")),f=n("3S7+"),g=n("/MfK"),d=n("scZm"),b=function(e){var t=e.imagesList,n=e.setImagesList,r=e.deletedImageHandle,o=e.imageKeyName,s=Object(a.useRef)([]),i=function(e,t){console.log(t);var n=parseInt(t.replace(o,""));if(console.log(n),!n)return e;for(var a=[],c=0;c<e.length;c++){var r=Object.assign({},e[c]);console.log(r);var l=r.column_key?r.column_key:"0";(l=parseInt(l.replace(o,"")))>n&&(r.column_key=o+n,n+=1),console.log(r),a.push(r)}return a},u=function(e){for(var a=[].concat(t),c=0;c<t.length;c++){t[c].column_key===e&&a.splice(c,1)}console.log(i(a,e)),n(i(a,e)),function(e){for(var t=!1,n=0;n<s.length;n++){s[n]===e&&(t=!0)}var a=[].concat(s.current);t||(a.push(e),s.current=a),r(a)}(e)};return c.a.createElement("div",{style:{textAlign:"left"}},0===t.length?null:c.a.createElement(m.b,{itemLayout:"vertical",size:"large",dataSource:t,renderItem:function(e,t){return c.a.createElement(m.b.Item,{key:t.toString(),actions:[c.a.createElement(f.a,{title:"删除"},c.a.createElement(l.a,{onClick:function(){return u(e.column_key)},shape:"circle",icon:c.a.createElement(g.a,null)}))]},c.a.createElement(m.b.Item.Meta,{title:e.file_name,avatar:c.a.createElement(d.a,{src:e.url})}))}}))};b.defaultProps={imagesList:[],setImagesList:function(e){console.log(e)},deletedImageHandle:function(e){return console.log(e)},imageKeyName:"image_cos_name"};var p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]},name:"arrow-up",theme:"outlined"},j=n("6VBw"),v=function(e,t){return a.createElement(j.a,Object.assign({},e,{ref:t,icon:p}))};v.displayName="ArrowUpOutlined";var y=a.forwardRef(v),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"},_=function(e,t){return a.createElement(j.a,Object.assign({},e,{ref:t,icon:O}))};_.displayName="ArrowDownOutlined";var h=a.forwardRef(_),E=function(e){var t=e.imagesList,n=e.setImagesList,a=function(e,a){void 0===a&&(a=1);var c=[].concat(t),r=c.splice(e,1)[0],o=e+a;o<0||o>c.length?console.log("Insert index Error",o):(c.splice(o,0,r),n(c))};return c.a.createElement("div",{style:{textAlign:"left"}},0===t.length?null:c.a.createElement(m.b,{itemLayout:"vertical",size:"large",dataSource:t,renderItem:function(e,r){return c.a.createElement(m.b.Item,{key:r.toString(),actions:[c.a.createElement(f.a,{title:"上移"},c.a.createElement(l.a,{onClick:function(){return a(r,-1)},shape:"circle",icon:c.a.createElement(y,null)})),c.a.createElement(f.a,{title:"下移"},c.a.createElement(l.a,{onClick:function(){return a(r)},shape:"circle",icon:c.a.createElement(h,null)})),c.a.createElement(f.a,{title:"删除"},c.a.createElement(l.a,{onClick:function(){return function(e){var a=[].concat(t);a.splice(e,1),console.log(a),n(a)}(r)},shape:"circle",icon:c.a.createElement(g.a,null)}))]},c.a.createElement(m.b.Item.Meta,{title:e.file_name,avatar:c.a.createElement(d.a,{src:e.url})}))}}))};E.defaultProps={imagesList:[],setImagesList:function(e){console.log(e)}};var S=n("Xz4P"),k=n("JmXp"),I=function(e,t,n){var a={};if(1===t)a[n]=e.length>0?e[0].cos_name:"";else for(var c=0;c<t;c++){a[n+(c+1)]=e.length>c?e[c].cos_name:""}return console.log(a),a},T=function(e){var t=e.onChange,s=e.initFileList,i=e.maxFilesNum,m=e.imageKeyName,f=e.cleanImagesCount,g=Object(a.useState)(!0),d=g[0],p=g[1],j=Object(a.useRef)({}),v=Object(a.useState)(0),y=v[0],O=v[1],_=Object(a.useRef)({}),h=Object(a.useRef)({}),E=Object(a.useState)([]),T=E[0],L=E[1],w=Object(a.useRef)([]);Object(a.useEffect)((function(){for(var e={file_name:"",cos_name:""},t=[],n=0;n<s.length;n++){var a=s[n];t.push(Object.assign({},a,e))}L(t)}),[s]),Object(a.useEffect)((function(){T.length>=i?p(!1):p(!0),t(I(T,i,m))}),[T,i]),Object(a.useEffect)((function(){L([]),w.current=[]}),[f]);var C=function(e,t){var n=Object.assign({},_.current),a=n.credentials;t({TmpSecretId:a.tmpSecretId,TmpSecretKey:a.tmpSecretKey,XCosSecurityToken:a.sessionToken,StartTime:n.startTime,ExpiredTime:n.expiredTime})},N={listType:"picture",fileList:[],beforeUpload:function(e){return console.log(e),j.current=e,O(y+1),null}};return c.a.createElement("div",null,c.a.createElement(b,{imagesList:T,setImagesList:L,deletedImageHandle:function(e){return w.current=e},imageKeyName:m}),c.a.createElement(o.a,N,d?c.a.createElement(l.a,null,c.a.createElement(u.a,null)," Upload"):null),c.a.createElement(S.a,{requestCount:y,reqObject:h.current,responseDataHandle:function(e){if(!Object.keys(e).includes("image_cos_name")&&!Object.keys(e).includes("sts_obj"))return console.log("Get temporary key error..."),void r.b.error("网络错误...");(_.current=e.sts_obj,"undefined"!=typeof window)&&new(n("NDg5"))({getAuthorization:C}).putObject(Object.assign({},k.a,{Key:e.image_cos_name,Body:j.current,onProgress:function(e){console.log(JSON.stringify(e))}}),(function(t,n){if(console.log(t||n),n){var a={column_key:(o=T.length+1,m+o),url:e.image_cos_name_url,cos_name:e.image_cos_name,file_name:j.current.name},c=[].concat(T);c.push(a),L(c),r.b.success("文件上传成功!")}else r.b.error("文件上传失败...");var o}))}}))};T.defaultProps={initFileList:[],fileList:[],maxFilesNum:5,onChange:function(e){console.log(e)},imageKeyName:"image_cos_name",cleanImagesCount:0};var L=function(e){var t=e.onChange,s=e.oldObj,i=e.maxImagesNum,m=e.imageKeyName,f=Object(a.useState)([]),g=f[0],d=f[1],b=Object(a.useState)(!0),p=b[0],j=b[1],v=Object(a.useState)(!1),y=v[0],O=v[1],_=Object(a.useState)(0),h=_[0],T=_[1],L=Object(a.useRef)({}),w=Object(a.useRef)({}),C=Object(a.useRef)({});Object(a.useEffect)((function(){var e=function(e,t,n){var a=[];if(1===t){var c=n+"_url";Object.keys(e).includes(c)&&a.push({column_key:n,url:e[c],file_name:"",cos_name:e[n]})}else for(var r=0;r<t;r++){var o=n+(r+1),l=o+"_url";Object.keys(e).includes(o)&&e[o].length>5&&Object.keys(e).includes(l)&&e[l].length>5&&a.push({column_key:o,url:e[l],file_name:"",cos_name:e[o]})}return a}(s,i,m);console.log(e),d(e)}),[s,i,m]),Object(a.useEffect)((function(){j(g.length<i),t(I(g,i,m))}),[g,i]);var N={accept:".jpg,.jpeg,.png,.bmp",listType:"picture",fileList:[],beforeUpload:function(e){return L.current=e,O(!0),T(h+1),null}},K=function(e,t){var n=Object.assign({},C.current),a=n.credentials;t({TmpSecretId:a.tmpSecretId,TmpSecretKey:a.tmpSecretKey,XCosSecurityToken:a.sessionToken,StartTime:n.startTime,ExpiredTime:n.expiredTime})};return c.a.createElement("div",null,c.a.createElement(E,{imagesList:g,setImagesList:d}),c.a.createElement(o.a,N,p&&!y?c.a.createElement(l.a,null,c.a.createElement(u.a,null),"上传图片"):null),c.a.createElement(S.a,{requestCount:h,reqObject:w.current,responseDataHandle:function(e){if(!Object.keys(e).includes("image_cos_name")&&!Object.keys(e).includes("sts_obj"))return console.log("Get temporary key error..."),void r.b.error("网络错误...");(C.current=e.sts_obj,"undefined"!=typeof window)?new(n("NDg5"))({getAuthorization:K}).putObject(Object.assign({},k.a,{Key:e.image_cos_name,Body:L.current,onProgress:function(e){console.log(JSON.stringify(e))}}),(function(t,n){if(O(!1),console.log(t||n),n){var a={column_key:(o=g.length+1,m+o),url:e.image_cos_name_url,cos_name:e.image_cos_name,file_name:L.current.name},c=[].concat(g);c.push(a),d(c),r.b.success("文件上传成功!")}else r.b.error("文件上传失败...");var o})):O(!1)}}))};L.defaultProps={onChange:function(e){console.log(e)},oldObj:{handleCount:0},maxImagesNum:1,imageKeyName:"",cleanImagesCount:0};var w=function(e){var t=e.onChange,m=e.oldObj,f=e.videoKeyName,g=Object(a.useState)(!1),d=g[0],b=g[1],p=Object(a.useState)(!1),j=p[0],v=p[1],y=Object(a.useState)(""),O=y[0],_=y[1],h=Object(a.useState)(""),E=h[0],I=h[1],T=Object(a.useRef)({}),L=Object(a.useState)(0),w=L[0],C=L[1],N=Object(a.useRef)({}),K=Object(a.useRef)({});Object(a.useEffect)((function(){if(Object.keys(m).length>0&&f.length>0){var e=f+"_url",t=m[e]?m[e]:"";_(t);var n=m[f]?m[f]:"";I(n)}}),[m,f]),Object(a.useEffect)((function(){if(console.log(f),f.length>0){var e,n=((e={})[f]=E,e);console.log(n),t(n)}v(0===E.length)}),[E,f]);var x=function(e,t){var n=Object.assign({},T.current),a=n.credentials;t({TmpSecretId:a.tmpSecretId,TmpSecretKey:a.tmpSecretKey,XCosSecurityToken:a.sessionToken,StartTime:n.startTime,ExpiredTime:n.expiredTime})},R={accept:".mp4,.mov,.3gp",listType:"picture",fileList:[],beforeUpload:function(e){return d||(console.log(e),K.current=e,C(w+1)),null}};return c.a.createElement("div",null,c.a.createElement(s.b,{direction:"vertical"},O.length>0?c.a.createElement("video",{width:"320",height:"240",controls:!0,src:O}):null,j?null:c.a.createElement(l.a,{onClick:function(){_(""),I("")}},"删除视频"),c.a.createElement(o.a,R,j?d?c.a.createElement(i.a,null):c.a.createElement(l.a,null,c.a.createElement(u.a,null),"上传视频"):null),c.a.createElement(S.a,{requestCount:w,reqObject:N.current,responseDataHandle:function(e){if(console.log(e),!Object.keys(e).includes("image_cos_name")&&!Object.keys(e).includes("sts_obj"))return console.log("Get temporary key error..."),void r.b.error("网络错误...");(T.current=e.sts_obj,"undefined"!=typeof window)?new(n("NDg5"))({getAuthorization:x}).putObject(Object.assign({},k.a,{Key:e.image_cos_name,Body:K.current,onProgress:function(e){console.log(JSON.stringify(e))}}),(function(t,n){b(!1),console.log(t||n),n?(_(e.image_cos_name_url),I(e.image_cos_name),r.b.success("视频上传成功!")):r.b.error("视频上传失败...")})):b(!1)}})))};w.defaultProps={onChange:function(e){return console.log(e)},oldObj:{},videoKeyName:""}}}]);
//# sourceMappingURL=ee4a5b3f0840b400c9fc2e4cb8fc75a3447826ca-7b0b6e52c71e877904a6.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{LSTS:function(e,t,a){"use strict";a("xfY5"),a("2Spj"),a("/SS/"),a("hHhE"),a("V+eJ"),a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),n=a("q1tI"),o=s(n),l=s(a("17x9"));function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.scrollListener=a.scrollListener.bind(a),a.eventListenerOptions=a.eventListenerOptions.bind(a),a.mousewheelListener=a.mousewheelListener.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}},{key:"componentDidUpdate",value:function(){if(this.props.isReverse&&this.loadMore){var e=this.getParentElement(this.scrollComponent);e.scrollTop=e.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}},{key:"componentWillUnmount",value:function(){this.detachScrollListener(),this.detachMousewheelListener()}},{key:"isPassiveSupported",value:function(){var e=!1,t={get passive(){e=!0}};try{document.addEventListener("test",null,t),document.removeEventListener("test",null,t)}catch(a){}return e}},{key:"eventListenerOptions",value:function(){var e=this.props.useCapture;return this.isPassiveSupported()&&(e={useCapture:this.props.useCapture,passive:!0}),e}},{key:"setDefaultLoader",value:function(e){this.defaultLoader=e}},{key:"detachMousewheelListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.scrollComponent.parentNode),e.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}},{key:"detachScrollListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.getParentElement(this.scrollComponent)),e.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),e.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}},{key:"getParentElement",value:function(e){var t=this.props.getScrollParent&&this.props.getScrollParent();return null!=t?t:e&&e.parentNode}},{key:"filterProps",value:function(e){return e}},{key:"attachScrollListener",value:function(){var e=this.getParentElement(this.scrollComponent);if(this.props.hasMore&&e){var t=window;!1===this.props.useWindow&&(t=e),t.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),t.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),t.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}}},{key:"mousewheelListener",value:function(e){1!==e.deltaY||this.isPassiveSupported()||e.preventDefault()}},{key:"scrollListener",value:function(){var e=this.scrollComponent,t=window,a=this.getParentElement(e),r=void 0;if(this.props.useWindow){var n=document.documentElement||document.body.parentNode||document.body,o=void 0!==t.pageYOffset?t.pageYOffset:n.scrollTop;r=this.props.isReverse?o:this.calculateOffset(e,o)}else r=this.props.isReverse?a.scrollTop:e.scrollHeight-a.scrollTop-a.clientHeight;r<Number(this.props.threshold)&&e&&null!==e.offsetParent&&(this.detachScrollListener(),this.beforeScrollHeight=a.scrollHeight,this.beforeScrollTop=a.scrollTop,"function"==typeof this.props.loadMore&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}},{key:"calculateOffset",value:function(e,t){return e?this.calculateTopPosition(e)+(e.offsetHeight-t-window.innerHeight):0}},{key:"calculateTopPosition",value:function(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}},{key:"render",value:function(){var e=this,t=this.filterProps(this.props),a=t.children,r=t.element,n=t.hasMore,l=(t.initialLoad,t.isReverse),s=t.loader,c=(t.loadMore,t.pageStart,t.ref),i=(t.threshold,t.useCapture,t.useWindow,t.getScrollParent,function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(t,["children","element","hasMore","initialLoad","isReverse","loader","loadMore","pageStart","ref","threshold","useCapture","useWindow","getScrollParent"]));i.ref=function(t){e.scrollComponent=t,c&&c(t)};var u=[a];return n&&(s?l?u.unshift(s):u.push(s):this.defaultLoader&&(l?u.unshift(this.defaultLoader):u.push(this.defaultLoader))),o.default.createElement(r,i,u)}}]),t}(n.Component);c.propTypes={children:l.default.node.isRequired,element:l.default.node,hasMore:l.default.bool,initialLoad:l.default.bool,isReverse:l.default.bool,loader:l.default.node,loadMore:l.default.func.isRequired,pageStart:l.default.number,ref:l.default.func,getScrollParent:l.default.func,threshold:l.default.number,useCapture:l.default.bool,useWindow:l.default.bool},c.defaultProps={element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null},t.default=c,e.exports=t.default},PVxW:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),o=a("9qUX"),l=(a("91GP"),a("f3/d"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("Z2Ku"),a("L9s1"),a("+eQT")),s=a("Vl3Y"),c=a("2/Rp"),i=a("/wGt"),u=a("BMrR"),d=a("kPKH"),m=a("5rEg"),p=a("zeV3"),f=a("3S7+"),h=a("kLXV"),g=a("l+S1"),b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"},v=a("6VBw"),E=function(e,t){return r.createElement(v.a,Object.assign({},e,{ref:t,icon:b}))};E.displayName="CloseOutlined";var _=r.forwardRef(E),y=a("m7Th"),O=a("tsqr"),j=a("VXEj"),S=a("7BUj"),C=a("RotF"),L=a.n(C),w=(a("a1Th"),{icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"}),k=function(e,t){return r.createElement(v.a,Object.assign({},e,{ref:t,icon:w}))};k.displayName="ExclamationCircleOutlined";var P=r.forwardRef(k),R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},M=function(e,t){return r.createElement(v.a,Object.assign({},e,{ref:t,icon:R}))};M.displayName="EditOutlined";var q=r.forwardRef(M),H=a("wn2k"),I=function(e){var t=e.modalState,a=e.setModalState,r=e.selectCustomerHandle,o=e.clickCreatedCustomerHandle;return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,{visible:t,title:"选择顾客",footer:[n.a.createElement(c.a,{key:"back",onClick:function(){a(!1)}},"取消")]},n.a.createElement(y.a,{selectCustomerHandle:r,clickCreatedCustomerHandle:o})))};I.defaultProps={modalState:!1,setModalState:function(e){console.log(e)},selectCustomerHandle:function(e){console.log(e)},clickCreatedCustomerHandle:function(e){console.log(e)}};var x=I,T=a("VYaB"),D=a("Sm+g"),F=function(e){var t=e.reqParams,a=e.requestCount,r=e.responseDataHandle;return n.a.createElement(D.a,{responseDataHandle:r,api:"records-admin/v1/purchaserecord",method:"get",reqParams:t,reqObject:{},requestCount:a})};F.defaultProps={reqParams:{page:1},requestCount:0,responseDataHandle:function(e){console.log(e)}};var V=function(e){var t=e.method,a=e.recordId,r=e.reqObject,o=e.requestCount,l=e.responseDataHandle,s="post"===t?"records-admin/v1/purchaserecord":"records-admin/v1/purchaserecord/"+a;return n.a.createElement(D.a,{responseDataHandle:l,api:s,method:t,reqParams:{},reqObject:r,requestCount:o})};V.defaultProps={method:"post",recordId:0,reqObject:{},requestCount:0,responseDataHandle:function(e){console.log(e),Object.keys(e).includes("code")&&1e3===e.code?(O.b.success("Success"),O.b.success("更新顾客购买记录成功")):(O.b.error("Error"),O.b.error("Error: 更新失败"))}};var z=function(e){var t=e.recordId,a=e.setRecordId,r=e.deltetPurchaseRecordCount,o="records-admin/v1/purchaserecord/"+t;return n.a.createElement(D.a,{responseDataHandle:function(e){console.log("Deleted",e),a(0)},api:o,method:"delete",reqParams:{},reqObject:{},requestCount:r})};z.defaultProps={recordId:0,setRecordId:function(e){console.log(e)},deltetPurchaseRecordCount:0};var Y=a("vpoQ"),W=a("TjJO"),A={id:0,customer_id:0,product_title:"",diopter_r:"",diopter_l:"",pupillary_distance:"",receive_address:"",products_quantity:0,purchase_amount:0,sale_platform:0,order_state:0,add_time:"",update_time:"",explains:"",image_cos_name1:"",image_cos_name2:"",image_cos_name3:"",image_cos_name4:"",image_cos_name5:""},N={id:"订单ID",customer_id:"顾客ID",product_title:"商品名称",diopter_r:"光度R",diopter_l:"光度L",pupillary_distance:"瞳距PD",receive_address:"收货地址",products_quantity:"商品数量",purchase_amount:"总金额",sale_platform:"销售平台",order_state:"订单状态",add_time:"创建时间",update_time:"更新时间",explains:"说明",image_cos_name1:"图片1",image_cos_name2:"图片2",image_cos_name3:"图片3",image_cos_name4:"图片4",image_cos_name5:"图片5"},B=["id","customer_id","add_time","update_time"],U=["image_cos_name1","image_cos_name2","image_cos_name3","image_cos_name4","image_cos_name5"],K=n.a.createElement(Y.a,{options:[{value:0,label:"订单交易完成"},{value:1,label:"定制中"},{value:2,label:"已发货"}]}),X={sale_platform:n.a.createElement(W.a,null),order_state:K},G=S.a.formCommonStyle,J=G.layoutForm,Z=G.formItemLayout,Q=G.tailFormItemLayout,$=h.a.confirm,ee=function(e){var t=e.purchaseRecordEditModalState,a=e.setPurchaseRecordEditModalState,o=e.recordObj,l=e.reloadRecords,i=s.a.useForm()[0],g=Object(r.useState)(0),b=g[0],v=g[1],E=Object(r.useState)(0),y=E[0],O=E[1],j=Object(r.useState)(""),S=j[0],C=j[1],L=Object(r.useState)(""),w=L[0],k=L[1],R=Object(r.useRef)(0),M=Object(r.useState)(!1),I=M[0],D=M[1],F=Object(r.useRef)({}),Y=Object(r.useState)({}),W=Y[0],K=Y[1],G=Object(r.useRef)({}),ee=Object(r.useState)(0),te=ee[0],ae=ee[1];Object(r.useEffect)((function(){console.log(o),C(""),k(""),R.current=o.customer_id,i.setFieldsValue(o);for(var e={},t=0;t<U.length;t++){var a=U[t];e[a]=o[a]}K(e)}),[o]);var re=function(e){var t=Object.keys(e).includes("customer_id")?1:0,a=e.name,r=e.id,n=e.avatar;1===t&&(a=e.wx_nickname,r=e.customer_id,n=e.wx_avatar),C(a),i.setFieldsValue({customer_id:r}),D(!1),k(n)};return n.a.createElement(h.a,{getContainer:!1,title:"订单详情",visible:t,footer:null,closable:!1},n.a.createElement(T.c,{customerId:R.current,responseDataHandle:function(e){C(""),k(""),setTimeout((function(){Object.keys(e).includes("results")&&Array.isArray(e.results)&&e.results.length>0&&(C(e.results[0].name),k(e.results[0].avatar))}),1e3)}}),n.a.createElement(u.a,{gutter:16},n.a.createElement(d.a,{span:12},n.a.createElement("h3",null,"昵称: ",S)),n.a.createElement(d.a,{span:8},w.length>10?n.a.createElement("img",{height:"64px",alt:"Avatar",src:w}):null),n.a.createElement(d.a,{span:4},n.a.createElement(p.b,null,n.a.createElement(f.a,{title:"删除当前顾客"},n.a.createElement(c.a,{onClick:function(){$({title:"确定删除用户"+S+"吗?",icon:n.a.createElement(P,null),content:"如果误删, 可以点击取消!",onOk:function(){C(""),i.setFieldsValue({customer_id:0}),k("")},onCancel:function(){console.log("Cancel")}})},shape:"circle",icon:n.a.createElement(_,null)})),n.a.createElement(f.a,{title:"选择或新建顾客"},n.a.createElement(c.a,{type:"primary",onClick:function(){D(!0)},shape:"circle",icon:n.a.createElement(q,null)}))))),n.a.createElement("br",null),n.a.createElement(T.d,{customerId:R.current,responseDataHandle:function(e){setTimeout((function(){if(Object.keys(e).includes("results")&&Array.isArray(e.results)&&e.results.length>0){var t=S.length>1?S.length:e.results[0].wx_nickname,a=w.length>10?w:e.results[0].wx_avatar;C(t),k(a)}}),2e3)}}),n.a.createElement("br",null),n.a.createElement("hr",null),n.a.createElement("br",null),n.a.createElement(H.a,{multipleObjKeys:U,oldImageUrlsObj:W,uploadedHandle:function(e){var t={};for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a].image_cos_name);console.log(t),F.current=t}}),n.a.createElement(s.a,Object.assign({},J,{form:i,name:"purchaserecord",layout:"horizontal",initialValues:A,onFinish:function(e){console.log(F.current),G.current=Object.assign({},e,F.current),console.log(G.current),ae(te+1),l()},size:"large"}),Object.keys(A).map((function(e,t){return U.includes(e)?null:n.a.createElement(s.a.Item,Object.assign({},Z,{label:N[e],name:e,key:t.toString()}),Object.keys(X).includes(e)?X[e]:n.a.createElement(m.a,{disabled:B.includes(e)}))})),n.a.createElement(s.a.Item,Q,n.a.createElement(p.b,null,n.a.createElement(c.a,{type:"primary",htmlType:"submit"},"提交"),n.a.createElement(c.a,{htmlType:"button",onClick:function(){return a(!1)}},"取消"),n.a.createElement(c.a,{htmlType:"button",onClick:function(){console.log("Error"),$({title:"确定要删除当前订单吗?",icon:n.a.createElement(P,null),content:"订单删除后将无法恢复...",onOk:function(){console.log(o),v(o.id),O(y+1),l()},onCancel:function(){}})}},"删除订单")))),n.a.createElement(V,{method:"put",recordId:o.id,reqObject:G.current,requestCount:te}),n.a.createElement(z,{recordId:b,setRecordId:v,deltetPurchaseRecordCount:y}),n.a.createElement(x,{modalState:I,setModalState:D,selectCustomerHandle:re,clickCreatedCustomerHandle:re}))};ee.defaultProps={reloadRecords:function(){console.log("Reload pruchase records...")}};var te=ee,ae=a("scZm"),re=(a("XLgj"),S.a.purchaseStates),ne=S.a.salePlatforms,oe=function(e){var t=e.queryFactor,a=Object(r.useState)([]),o=a[0],l=a[1],s=Object(r.useRef)(!0),i=Object(r.useState)({loading:!1,hasMore:!0}),u=i[0],d=i[1],m=Object(r.useState)(!1),p=m[0],f=m[1],h=Object(r.useState)({}),g=h[0],b=h[1],v=Object(r.useState)(0),E=v[0],_=v[1],y=Object(r.useRef)({page:0}),S=function(){s.current?(y.current=Object.assign({page:y.current.page+1},t),_(E+1),console.log(E),d({loading:!0})):console.log("No More...")};Object(r.useEffect)((function(){C()}),[t]);var C=function(){l([]),s.current=!0,d({loading:!1}),y.current.page=0,S()};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"purchase-records-infinite-container"},n.a.createElement(L.a,{initialLoad:!1,pageStart:0,loadMore:S,hasMore:!u.loading&&s.current,useWindow:!1},n.a.createElement("p",null,"订单列表"),n.a.createElement(j.b,{itemLayout:"vertical",dataSource:o,renderItem:function(e){return n.a.createElement(j.b.Item,{extra:n.a.createElement(ae.a,{alt:"Image",width:"64px",src:e.image_cos_name1}),actions:[n.a.createElement(c.a,{onClick:function(){return t=e,f(!0),void b(t);var t},type:"link"},"详情")]},n.a.createElement(j.b.Item.Meta,{title:"商品: "+e.product_title+"; 时间: "+e.add_time+";  销售平台: "+ne[e.sale_platform]+"; 订单状态: "+re[e.order_state]+";",description:"说明: "+e.explains+";"}))}}),n.a.createElement(F,{className:"loading-container",reqParams:y.current,requestCount:E,responseDataHandle:function(e){if(console.log(e),s.current=!1,d({loading:!1}),!e||1e3!==e.code)return O.b.error("Error Netword..."),void O.b.error("网络错误...");e.next&&(s.current=!0,d({loading:!1})),Array.isArray(e.results)?l(o.concat(e.results)):console.log(e.results),f(!1)}}))),n.a.createElement(te,{purchaseRecordEditModalState:p,setPurchaseRecordEditModalState:f,recordObj:g,reloadRecords:C}))};oe.defaultProps={queryFactor:{}};var le=oe,se=l.a.RangePicker,ce={customername:"",add_time:[],sale_platform:0},ie=S.a.formCommonStyle,ue=ie.layoutForm,de=ie.formItemLayout,me=ie.tailFormItemLayout,pe=function(){var e=Object(r.useState)({}),t=e[0],a=e[1],o=s.a.useForm()[0],l=Object(r.useState)(!1),b=l[0],v=l[1],E=Object(r.useState)(!1),O=E[0],j=E[1],S=Object(r.useRef)({});return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{type:"primary",onClick:function(){v(!0)}},n.a.createElement(g.a,null)," Search"),n.a.createElement(i.a,{title:"销售记录查询",width:"100%",height:"400px",placement:"top",onClose:function(){return v(!1)},visible:b,bodyStyle:{paddingBottom:80},footer:null},n.a.createElement(s.a,Object.assign({},ue,{layout:"horizontal",form:o,name:"query-records",onFinish:function(e){console.log(e);var t=e.add_time,r=Array.isArray(t)&&t.length>1?[t[0].format("YYYY-MM-DD"),t[1].format("YYYY-MM-DD")]:null,n={},o=Object.keys(S.current).includes("customer_id")?S.current.customer_id:Object.keys(S.current).includes("id")?S.current.id:0;o>0&&(n.customer_id=o),e.sale_platform>0&&(n.sale_platform=e.sale_platform),r&&(n.add_time_start=r[0],n.add_time_end=r[1]),console.log(n),a(n),v(!1)},initialValues:ce}),n.a.createElement(s.a.Item,Object.assign({},de,{label:"顾客"}),n.a.createElement(u.a,{gutter:8},n.a.createElement(d.a,{span:18},n.a.createElement(s.a.Item,{name:"customername",noStyle:!0},n.a.createElement(m.a,{disabled:!0}))),n.a.createElement(d.a,{span:6},n.a.createElement(p.b,null,n.a.createElement(f.a,{title:"清除选中顾客"},n.a.createElement(c.a,{type:"dashed",onClick:function(){o.setFieldsValue({customername:""}),S.current={}},shape:"circle",icon:n.a.createElement(_,null)})),n.a.createElement(f.a,{title:"选择或新建顾客"},n.a.createElement(c.a,{type:"primary",onClick:function(){j(!0)},shape:"circle",icon:n.a.createElement(g.a,null)})))))),n.a.createElement(s.a.Item,Object.assign({},de,{label:"日期",name:"add_time",style:{marginBottom:0}}),n.a.createElement(se,null)),n.a.createElement(s.a.Item,Object.assign({},de,{label:"销售平台",name:"sale_platform"}),n.a.createElement(W.a,null)),n.a.createElement(s.a.Item,me,n.a.createElement(p.b,null,n.a.createElement(c.a,{onClick:function(){return v(!1)}},"取消"),n.a.createElement(c.a,{type:"primary",htmlType:"submit"},"查询"))))),n.a.createElement(le,{queryFactor:t}),n.a.createElement(h.a,{visible:O,title:"选择顾客",footer:[n.a.createElement(c.a,{key:"back",onClick:function(){j(!1)}},"取消")]},n.a.createElement(y.a,{selectCustomerHandle:function(e){S.current=e;var t=Object.keys(e),a=t.includes("name")?e.name:t.includes("wx_nickname")?e.wx_nickname:"";o.setFieldsValue({customername:a}),j(!1)}})))},fe=a("vrFN");t.default=function(){return n.a.createElement(o.a,null,n.a.createElement(fe.a,{title:"Records"}),n.a.createElement(pe,null))}},RotF:function(e,t,a){e.exports=a("LSTS")},XLgj:function(e,t,a){},wn2k:function(e,t,a){"use strict";a("a1Th"),a("Z2Ku"),a("L9s1"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP");var r=a("q1tI"),n=a.n(r),o=a("zeV3"),l=a("d6IX"),s=function(e){var t=e.multipleObjKeys,a=e.oldImageUrlsObj,s=e.uploadedHandle,c=Object(r.useRef)({});Object(r.useEffect)((function(){c.current={}}),[a]);var i=function(e,t){var a=Object.keys(e);a.includes("id")&&a.includes("image_cos_name")&&function(e,t){console.log(t);var a=Object.assign({},c.current);a[t]=e,c.current=a,s(a)}({id:e.id,image_cos_name:e.image_cos_name,image_cos_name_url:e.image_cos_name_url},t)};return n.a.createElement("div",{style:{width:"100%",height:"auto",textAlign:"center",margin:"0.5rem",border:"medium double rgb(250,0,255)",padding:"0.5rem"}},n.a.createElement(o.b,{direction:"vertical",size:"middle"},t.map((function(e){return n.a.createElement(l.a,{key:e.toString(),oldImageUrl:Object.keys(a).includes(e)?a[e]:"",avatarSize:"96px",uploadedResponseHandle:i,fileKey:e})}))),n.a.createElement("br",null))};s.defaultProps={multipleObjKeys:["image_cos_name1","image_cos_name2","image_cos_name3","image_cos_name4","image_cos_name5"],oldImageUrlsObj:{},uploadedHandle:function(e){console.log(e)}},t.a=s}}]);
//# sourceMappingURL=component---src-pages-queryeditrecords-js-58d9d72b5bf1decdc7e6.js.map
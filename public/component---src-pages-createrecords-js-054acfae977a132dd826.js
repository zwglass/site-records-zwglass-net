(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"2yHF":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("vrFN"),c=t("9qUX"),s=(t("pIFo"),t("xfY5"),t("f3/d"),t("Z2Ku"),t("L9s1"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP"),t("2fM7")),i=t("Vl3Y"),m=t("tsqr"),u=t("BMrR"),o=t("kPKH"),p=t("5rEg"),d=t("3S7+"),E=t("2/Rp"),f=t("fyUT"),b=t("zeV3"),h=t("kLXV"),v=t("l+S1"),g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M296 256c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm192 200v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8zm-48 396H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm104.1-115.6c1.8-34.5 16.2-66.8 40.8-91.4 26.2-26.2 62-41 99.1-41 37.4 0 72.6 14.6 99.1 41 3.2 3.2 6.3 6.6 9.2 10.1L769.2 673a8 8 0 003 14.1l93.3 22.5c5 1.2 9.8-2.6 9.9-7.7l.6-95.4a8 8 0 00-12.9-6.4l-20.3 15.8C805.4 569.6 748.1 540 684 540c-109.9 0-199.6 86.9-204 195.7-.2 4.5 3.5 8.3 8 8.3h48.1c4.3 0 7.8-3.3 8-7.6zM880 744h-48.1c-4.3 0-7.8 3.3-8 7.6-1.8 34.5-16.2 66.8-40.8 91.4-26.2 26.2-62 41-99.1 41-37.4 0-72.6-14.6-99.1-41-3.2-3.2-6.3-6.6-9.2-10.1l23.1-17.9a8 8 0 00-3-14.1l-93.3-22.5c-5-1.2-9.8 2.6-9.9 7.7l-.6 95.4a8 8 0 0012.9 6.4l20.3-15.8C562.6 918.4 619.9 948 684 948c109.9 0 199.6-86.9 204-195.7.2-4.5-3.5-8.3-8-8.3z"}}]},name:"file-sync",theme:"outlined"},y=t("6VBw"),C=function(e,a){return n.createElement(y.a,Object.assign({},e,{ref:a,icon:g}))};C.displayName="FileSyncOutlined";var O=n.forwardRef(C),j=t("Wbzz"),_=t("m7Th"),I=t("8z0m"),w=t("z7Xi"),x=t("7BUj"),S=t("1UTX"),k=function(e){var a=e.onChange,t=e.defaultFileList,r=e.fileList,c=e.multiple,s=e.maxFiles,i=Object(n.useState)(!0),m=i[0],u=i[1];Object(n.useEffect)((function(){r.length>=s?u(!1):u(!0)}),[r,s]);var o={action:x.a.apiBaseUrl+"/files-handle/v1/uploadfiles",listType:"picture",defaultFileList:t,fileList:r,onChange:a,multiple:c,headers:{Authorization:Object(S.a)()}};return l.a.createElement("div",null,l.a.createElement(I.a,o,m?l.a.createElement(E.a,null,l.a.createElement(w.a,null)," Upload"):null))};k.defaultProps={multiple:!0,defaultFileList:[],fileList:[],maxFiles:5,onChange:function(e){console.log(e.file)}};var q=t("g/of"),z=t("colo"),F=t("TjJO"),V=t("Sm+g"),B=function(e){var a=e.requestCount,t=e.reqObject,n=e.responseDataHandle;return l.a.createElement(V.a,{responseDataHandle:n,api:"records-admin/v1/purchaserecord",method:"post",reqParams:{},reqObject:t,requestCount:a})},L=s.a.Option,H={customername:"",diopter_r:"",diopter_l:"",pupillary_distance:"",product_title:"",products_quantity:1,purchase_amount:0,sale_platform:0,order_state:0,receive_address:"",explains:"",upload:[]},R={layout:"horizontal",labelCol:{xs:{span:12},sm:{span:10}},wrapperCol:{xs:{span:12},sm:{span:14}}},T={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},M=function(){var e=Object(n.useState)(0),a=e[0],t=e[1],r=Object(n.useState)(!1),c=r[0],g=r[1],y=i.a.useForm()[0],C=Object(n.useState)(!1),I=C[0],w=C[1],x=Object(n.useRef)({}),S=Object(n.useState)(0),k=S[0],V=S[1],M=Object(n.useRef)({}),P=Object(n.useRef)({}),U=function(e){x.current=e;var a=Object.keys(e),t=a.includes("name")?e.name:a.includes("wx_nickname")?e.wx_nickname:"";y.setFieldsValue({customername:t}),w(!1)},D=function(){return l.a.createElement(s.a,{onChange:function(e){return y.setFieldsValue({order_state:Number(e)})},defaultValue:"0"},l.a.createElement(L,{value:"0"},"订单交易完成"),l.a.createElement(L,{value:"1"},"定制中"),l.a.createElement(L,{value:"2"},"已发货"))};return l.a.createElement("div",null,l.a.createElement(z.a,{spinning:c}),l.a.createElement("h3",null,"新建销售记录"),l.a.createElement(q.a,{onChange:function(e){P.current=e},cleanImagesCount:a}),l.a.createElement(i.a,Object.assign({},R,{form:y,name:"createrecord",onFinish:function(e){var a=Object.assign({},e,P.current);delete a.customername;var t=Object.assign({},x.current);a.customer_id=Object.keys(t).includes("customer_id")?t.customer_id:t.id?t.id:0,console.log(a),M.current=a,g(!0),V(k+1)},initialValues:Object.assign({},H),scrollToFirstError:!0}),l.a.createElement(i.a.Item,{label:"顾客",extra:"请选择或新建顾客"},l.a.createElement(u.a,{gutter:8},l.a.createElement(o.a,{span:18},l.a.createElement(i.a.Item,{name:"customername",noStyle:!0},l.a.createElement(p.a,{disabled:!0}))),l.a.createElement(o.a,{span:6},l.a.createElement(d.a,{title:"选择或新建顾客"},l.a.createElement(E.a,{type:"primary",onClick:function(){w(!0)},shape:"circle",icon:l.a.createElement(v.a,null)}))))),l.a.createElement(i.a.Item,{label:"光度 R",name:"diopter_r",extra:"选择或输入光度R"},l.a.createElement(u.a,{gutter:8},l.a.createElement(o.a,{span:18},l.a.createElement(i.a.Item,{name:"diopter_r",noStyle:!0},l.a.createElement(p.a,null))),l.a.createElement(o.a,{span:6},l.a.createElement(d.a,{title:"选择光度"},l.a.createElement(E.a,{type:"primary",shape:"circle",icon:l.a.createElement(O,null)}))))),l.a.createElement(i.a.Item,{label:"光度 L",extra:"选择或输入光度L"},l.a.createElement(u.a,{gutter:8},l.a.createElement(o.a,{span:18},l.a.createElement(i.a.Item,{name:"diopter_l",noStyle:!0},l.a.createElement(p.a,null))),l.a.createElement(o.a,{span:6},l.a.createElement(d.a,{title:"选择光度"},l.a.createElement(E.a,{type:"primary",shape:"circle",icon:l.a.createElement(O,null)}))))),l.a.createElement(i.a.Item,{label:"瞳距PD",name:"pupillary_distance"},l.a.createElement(p.a,null)),l.a.createElement(i.a.Item,{label:"商品名称",name:"product_title"},l.a.createElement(p.a,null)),l.a.createElement(i.a.Item,{label:"商品数量",name:"products_quantity"},l.a.createElement(f.a,{min:0,max:1e3,formatter:function(e){return(""+e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\s?|(,*)/g,"")}})),l.a.createElement(i.a.Item,{label:"销售金额",name:"purchase_amount"},l.a.createElement(f.a,{min:0,max:1e6,formatter:function(e){return("¥ "+e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/¥\s?|(,*)/g,"")}})),l.a.createElement(i.a.Item,{label:"销售平台",name:"sale_platform"},l.a.createElement(F.a,null)),l.a.createElement(i.a.Item,{label:"订单状态",name:"order_state"},l.a.createElement(D,null)),l.a.createElement(i.a.Item,{label:"收货地址",name:"receive_address"},l.a.createElement(p.a,null)),l.a.createElement(i.a.Item,{label:"说明",name:"explains"},l.a.createElement(p.a,null)),l.a.createElement(i.a.Item,T,l.a.createElement(b.b,{size:"large"},l.a.createElement(E.a,{type:"primary",htmlType:"submit"},"提交"),l.a.createElement(E.a,{type:"dashed",onClick:function(){Object(j.navigate)("/")}},"取消")))),l.a.createElement(B,{requestCount:k,reqObject:M.current,responseDataHandle:function(e){console.log(e),g(!1),1e3===e.code?(y.setFieldsValue(Object.assign({},H)),t(a+1),m.b.success("创建订单成功!")):m.b.error("创建失败...")}}),l.a.createElement(h.a,{visible:I,title:"选择顾客",footer:[l.a.createElement(E.a,{key:"back",onClick:function(){w(!1)}},"取消")]},l.a.createElement(_.a,{selectCustomerHandle:U,clickCreatedCustomerHandle:U})))};a.default=function(){return l.a.createElement(c.a,null,l.a.createElement(r.a,{title:"CreateRecord"}),l.a.createElement(M,null))}},"l+S1":function(e,a,t){"use strict";t("91GP");var n=t("q1tI"),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},r=t("6VBw"),c=function(e,a){return n.createElement(r.a,Object.assign({},e,{ref:a,icon:l}))};c.displayName="SearchOutlined";a.a=n.forwardRef(c)},vpoQ:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));t("a1Th"),t("Btvt");var n=t("q1tI"),l=t.n(n),r=t("2fM7"),c=t("7BUj"),s=r.a.Option,i=function(e){var a=e.options,t=e.width,n=e.value,c=e.onChange;return l.a.createElement(r.a,{style:{width:t},onChange:c,value:n},a.map((function(e,a){return l.a.createElement(s,{key:a.toString(),value:e.value},e.label)})))};i.defaultProps={options:[],width:c.a.selectComponentWidth,value:null,onChange:function(e){console.log(e)}}}}]);
//# sourceMappingURL=component---src-pages-createrecords-js-054acfae977a132dd826.js.map
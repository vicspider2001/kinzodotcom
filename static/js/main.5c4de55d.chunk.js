(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){},65:function(e,t,a){e.exports=a(83)},83:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),s=a.n(r),c=a(29),o=a(6),i=a(8),m=a(9),u=a(13),d=a(12),h=(a(32),a(51)),p=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),n=t.call(this,e),console.log(">>>Inside Constructor"),n.state={imageFIles:""},n}return Object(m.a)(a,[{key:"render",value:function(){return console.log(">>> Inside Render",this.state),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"Dashbackgroundcat"},l.a.createElement("div",{className:"carouselSettingcat"},l.a.createElement(h.a,null,l.a.createElement(h.a.Item,null,l.a.createElement("img",{className:"d-block w-100 imgsizeCar",src:"https://i.imgur.com/ahgm9yP.png",alt:"FirstSlide"}),l.a.createElement("button",{className:"btn btn-warning placebuttonCat"},"Click Here to Enrol")),l.a.createElement(h.a.Item,null,l.a.createElement("img",{className:"d-block w-100 imgsizeCar",src:"https://i.imgur.com/ZwGpLXl.png",alt:"FirstSlide"}),l.a.createElement("button",{className:"btn btn-warning placebuttonCat"},"Explore Courses"))),l.a.createElement("br",null),l.a.createElement("br",null))))}},{key:"componentDidMount",value:function(){console.log(">>> Inside DidMount")}}]),a}(n.Component),E=a(45),g=a(34),v=a(44),b=a(28),f=a.n(b),y=a(37),C=a(5),N=(a(46),a(38)),k=a.n(N),S=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(C.a)({},e.target.name,e.target.value))},console.log(">>> inside MenuCatState",e),n.state={regForm:!1,name:"",email:"",phone:"",location:"",Message1:"",Message2:"",Experienced:"",date:new Date},n}return Object(m.a)(a,[{key:"onCloseModalReg",value:function(){this.setState({regForm:!1})}},{key:"onOpenModalReg",value:function(){this.setState({regForm:!0})}},{key:"handleSubmit",value:function(){var e=Object(y.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={email:"".concat(this.state.email),phone:"".concat(this.state.phone),Message1:"".concat(this.state.Message1),Message2:"".concat(this.state.Message2),Experience:"".concat(this.state.Experienced),date:k()(this.state.date).format("MMM-DD-YYYY")},e.next=4,fetch("https://kinzoinstitute.onrender.com/registerNow",{method:"post",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(t)});case 4:a=e.sent,console.log("result>  "+a),alert("Details Submitted Successfully. We will contact you on next steps"),this.setState({name:"",email:"",phone:"",location:"",Message1:"",Message2:"",Experienced:""}),this.onCloseModalReg(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return console.log(">>> Inside menuCatRender",this.state),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"advertbgn22"},l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("h4",null,"Registeration form")),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control mb-3",name:"name",require:!0,placeholder:"Enter Names",value:this.state.name,onChange:this.handleChange}),l.a.createElement("input",{type:"email",className:"form-control mb-3",name:"email",require:!0,placeholder:"Enter Email",value:this.state.email,onChange:this.handleChange}),l.a.createElement("input",{type:"number",className:"form-control mb-3",name:"phone",require:!0,placeholder:"Phone Number",value:this.state.phone,onChange:this.handleChange}),l.a.createElement("input",{type:"text",className:"form-control mb-3",name:"location",require:!0,placeholder:"City and State",value:this.state.location,onChange:this.handleChange}),l.a.createElement("select",{className:"form-select mb-3",name:"Experienced",onChange:this.handleChange},l.a.createElement("option",{selected:!0,value:""},"Do you have an I.T background"),l.a.createElement("option",{value:"Experienced"},"Yes"),l.a.createElement("option",{value:"Experienced"},"No")),l.a.createElement("textarea",{className:"form-control mb-3",rows:"4",name:"Message1",require:!0,placeholder:"Why are you interested in taking this program",value:this.state.Message1,onChange:this.handleChange}),l.a.createElement("textarea",{className:"form-control mb-3",rows:"4",name:"Message2",require:!0,placeholder:"Please let us know anything else you will like to share",value:this.state.Message2,onChange:this.handleChange}),l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("button",{disabled:""===this.state.name||""===this.state.email||""===this.state.phone,className:"btn btn-warning editAdbutton",onClick:function(){return e.handleSubmit()}},"Send")),l.a.createElement("br",null))))}},{key:"componentDidMount",value:function(){console.log(">>> Inside MenuCategoryDidMount",this.state)}}]),a}(n.Component),M=a(33),w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).renderCart=function(e){if(e)return e.sort(function(e,t){return e._id-t._id}),e.map(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("hr",{style:{color:"silver"}}),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement("img",{src:e.mealImage,className:"CartImageSize",alt:"menuImages"})),l.a.createElement("span",null,l.a.createElement("span",{className:"alignCartText"},e.orderedMeals,":  Price: ",e.mealPrice," Qty: ",e.orderQuantity))))})},console.log(">>> inside kinzoContructor",e),n.state={cartData:"",cartColor:"",cartTotal:"",TotalTax:"",orderTotal:0,showInvoice:!1,MainCat:"",regFormOpen:!1},n}return Object(m.a)(a,[{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleCartEvent",value:function(){this.state.cartData.length>0?this.handleShowCart():(alert("Your Cart is Empty!"),this.handleCloseCart())}},{key:"handleShowCart",value:function(){this.setState({showCart:!0})}},{key:"handleregForm",value:function(){this.setState({regFormOpen:!0})}},{key:"handleregFormClose",value:function(){this.setState({regFormOpen:!1})}},{key:"handleCloseCart",value:function(){this.setState({showCart:!1})}},{key:"showInvoice",value:function(){this.setState({showInvoice:!0})}},{key:"closeInvoice",value:function(){this.setState({showInvoice:!1})}},{key:"renderCourses",value:function(e){if(e)return e.sort(function(e,t){return e.product-t.product}),e.map(function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("option",{classname:"formatOptions",key:t,value:e.product},e.product))})}},{key:"render",value:function(){var e=this;return console.log(">>>Inside RMrender",this.state),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"headerbackgrd"},l.a.createElement("span",null,l.a.createElement("div",null,l.a.createElement(c.b,{to:"/"},l.a.createElement("img",{src:"https://i.imgur.com/pJMQ4rC.png",className:"adjustName",alt:"menu"})))),l.a.createElement("span",null,l.a.createElement("i",{type:"button",className:"fa fa-bars size2",onClick:function(){return e.handleShow()}})),l.a.createElement("span",null,l.a.createElement("div",null,l.a.createElement("span",{className:"Ikem"},l.a.createElement("i",{type:"button",className:"fa fa-user Ikem",onClick:function(){return e.handleShow()}})))),l.a.createElement("span",null,l.a.createElement("div",null,l.a.createElement("span",{className:"Adriel"},l.a.createElement("i",{type:"button",className:"Adriel",onClick:function(){return e.handleCartEvent()}},"Log In"))))),l.a.createElement("div",{className:"headerbackgrd2"},l.a.createElement("span",null,l.a.createElement("center",null,l.a.createElement("select",{className:"formatSelect fontopt1"},l.a.createElement("option",{selected:!0,value:""},"Splunk Courses"),this.renderCourses(this.state.MainCat)))),l.a.createElement("span",null,l.a.createElement("center",null,l.a.createElement("span",{className:"fontopt1",type:"button",onClick:function(){return e.handleCartEvent()}},"Training Details"))),l.a.createElement("span",null,l.a.createElement("center",null,l.a.createElement("span",{type:"button",className:"fontopt1",onClick:function(){e.handleregForm()}},"Sign Up"))),l.a.createElement("span",null,l.a.createElement("center",null,l.a.createElement("span",{className:"fontopt1",type:"button",onClick:function(){e.props.history.push("/contact/")}},"Contact us")))),l.a.createElement(M.a,{open:this.state.regFormOpen,center:!0},l.a.createElement(S,null),l.a.createElement("center",null,l.a.createElement("button",{className:"btn btn-danger editAdbutton",onClick:function(){return e.handleregFormClose()}},"close")),l.a.createElement("br",null)),l.a.createElement(E.a,{show:this.state.show},l.a.createElement("div",{className:"headerbackgrd3"},l.a.createElement(E.a.Body,null,l.a.createElement("div",{className:"p-3 size3"},l.a.createElement(g.a,{variant:"white",onClick:function(){return e.handleClose()}})),l.a.createElement("div",{className:"menu"},l.a.createElement("center",null,l.a.createElement("p",{className:"menulist",type:"button",onClick:function(){e.props.history.push("/"),e.handleClose()}},"Sign Up"))),l.a.createElement("div",{className:"menu"},l.a.createElement("center",null,l.a.createElement("p",{className:"menulist",type:"button",onClick:function(){e.props.history.push("./"),e.handleClose()}},"Log in"))),l.a.createElement("div",{className:"menu"},l.a.createElement("center",null,l.a.createElement("p",{className:"menulist",type:"button",onClick:function(){e.props.history.push("/MenuItems/"),e.handleClose()}},"Splunk Courses"))),l.a.createElement("div",{className:"menu"},l.a.createElement("center",null,l.a.createElement("p",{className:"menulist",type:"button",onClick:function(){e.props.history.push("/contact"),e.handleClose()}},"Contact US")))))),l.a.createElement(E.a,{show:this.state.showCart},l.a.createElement("div",{className:"headerbackgrd3"},l.a.createElement(E.a.Body,null,l.a.createElement("div",{className:"bg-dark p-3 size3"},l.a.createElement(g.a,{variant:"white",onClick:function(){return e.handleCloseCart()}})),l.a.createElement("div",{className:"setCartData"},l.a.createElement("div",{className:"Cartmenu"},l.a.createElement("span",{className:"relatOrd"},l.a.createElement("center",null,l.a.createElement("p",{className:"menulistNow"},"Your Orders")))),l.a.createElement("div",{className:"tryDis"},this.renderCart(this.state.cartData)),l.a.createElement("hr",{style:{color:"yellow"}}),l.a.createElement("div",null,l.a.createElement("div",{className:"cartTotalFormt"},"Items: ",l.a.createElement("div",{className:"CartNumberFMT"},l.a.createElement(v.a,{value:this.state.cartTotal,thousandSeparator:!0,displayType:"text"})))),l.a.createElement("div",null,l.a.createElement("div",{className:"cartTotalFormt"},"Total before Tax: ",l.a.createElement("div",{className:"CartNumberFMT"},l.a.createElement(v.a,{value:this.state.cartTotal,thousandSeparator:!0,displayType:"text"})))),l.a.createElement("div",null,l.a.createElement("div",{className:"cartTotalFormt"},"Estimated HST/GST: ",l.a.createElement("div",{className:"CartNumberFMT"},l.a.createElement(v.a,{value:this.state.TotalTax,thousandSeparator:!0,displayType:"text"})))),l.a.createElement("hr",{style:{color:"yellow"}}),l.a.createElement("div",null,l.a.createElement("div",{className:"cartTotalFMT"},"Order Total: ",l.a.createElement("div",{className:"CartNumberForMaT"},l.a.createElement(v.a,{value:this.state.orderTotal,thousandSeparator:!0,displayType:"text"}))))),l.a.createElement("center",null,l.a.createElement("button",{className:"btn btn-warning btnHeight",onClick:function(){return e.showInvoice()}},"Checkout Order"))))))}},{key:"componentDidMount",value:function(){var e=this;console.log(">>> Inside kinzDidMount"),fetch("https://kinzoinstitute.onrender.com/Categories",{method:"GET"}).then(function(e){return e.json()}).then(function(t){e.setState({MainCat:t})})}}]),a}(n.Component),x=Object(o.e)(w),I=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(C.a)({},e.target.name,e.target.value))},n.renderMenu=function(e){return e?(e.sort(function(e,t){return e._id-t._id}),e.map(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"card addColor"},l.a.createElement("div",{className:"courseImage"},l.a.createElement("img",{src:e.Productimage,className:"card-img-top",alt:"menuImages"})),l.a.createElement("div",{className:"coursedescription"},l.a.createElement("center",{className:"container"},l.a.createElement("p",{className:"card-title setHedd"},e.heading))),l.a.createElement("div",{className:"card-body mobileViewRel"},l.a.createElement("center",null,l.a.createElement("h4",{className:"card-title mobileViewAbs"},e.product))),l.a.createElement("div",{className:"overlay"},l.a.createElement("br",null),l.a.createElement("h5",{className:"note"},e.product),l.a.createElement("hr",{style:{color:"gold"}}),l.a.createElement("center",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement(c.b,{to:"/MenuItems/".concat(e._id),key:e._id,style:{fontFamily:"Georgia, 'Times New Roman', Times, serif",fontSize:"20px",textDecoration:"none",color:"white",fontWeight:"bold"}},l.a.createElement("button",{type:"button",className:"btn btn-outline-warning",onClick:localStorage.setItem("catID",e._id)},"Explore Course")))))))})):l.a.createElement("center",null,l.a.createElement("div",null,l.a.createElement("div",{class:"spinner-border text-primary",role:"status"},l.a.createElement("span",{class:"visually-hidden"},"Loading...")),l.a.createElement("div",{class:"spinner-border text-secondary",role:"status"},l.a.createElement("span",{class:"visually-hidden"},"Loading...")),l.a.createElement("div",{class:"spinner-border text-success",role:"status"},l.a.createElement("span",{class:"visually-hidden"},"Loading...")),l.a.createElement("div",{class:"spinner-border text-danger",role:"status"},l.a.createElement("span",{class:"visually-hidden"},"Loading...")),l.a.createElement("div",{class:"spinner-border text-warning",role:"status"},l.a.createElement("span",{class:"visually-hidden"},"Loading..."))))},console.log(">>> inside MenuCatState",e),n.state={menuCategory:"",adverts:!1,regForm:!1,name:"",email:"",phone:"",location:"",Message1:"",Message2:"",Experienced:"",date:new Date},n}return Object(m.a)(a,[{key:"onCloseModalAdverts",value:function(){this.setState({adverts:!1})}},{key:"onOpenModalAdverts",value:function(){this.setState({adverts:!0})}},{key:"onCloseModalReg",value:function(){this.setState({regForm:!1})}},{key:"onOpenModalReg",value:function(){this.setState({regForm:!0})}},{key:"handleSubmit",value:function(){var e=Object(y.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={email:"".concat(this.state.email),phone:"".concat(this.state.phone),Message1:"".concat(this.state.Message1),Message2:"".concat(this.state.Message2),Experience:"".concat(this.state.Experienced),date:k()(this.state.date).format("MMM-DD-YYYY")},e.next=4,fetch("https://kinzoinstitute.onrender.com/registerNow",{method:"post",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(t)});case 4:a=e.sent,console.log("result>  "+a),alert("Details Submitted Successfully. We will contact you on next steps"),this.setState({name:"",email:"",phone:"",location:"",Message1:"",Message2:"",Experienced:""}),this.onCloseModalReg(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return console.log(">>> Inside menuCatRender",this.state),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container putinplace"},l.a.createElement("div",{className:"fitIn"},l.a.createElement("center",null,l.a.createElement("h5",{className:"text"},"Program Courses"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},this.renderMenu(this.state.menuCategory)))))),l.a.createElement(M.a,{open:this.state.adverts,center:!0},l.a.createElement("div",{className:"advertbgn"},l.a.createElement("div",{className:"p-3 size3"},l.a.createElement(g.a,{variant:"white",onClick:function(){return e.onCloseModalAdverts()}})),l.a.createElement("div",null,l.a.createElement("img",{className:"imgsizeCar2",src:"https://i.imgur.com/2gD9MbF.png",alt:"FirstSlide"})),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("h4",{className:"editAdHeading"}," Join the next cohort. Upskill with the best Splunk Academy"),l.a.createElement("br",null),l.a.createElement("p",{className:"editAdHeading2"}," Unleash your fullest potentials and become a data virtuoso. Splunk is the world's leading data analysis and monitoring platform.")),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("button",{className:"btn btn-warning editAdbutton",onClick:function(){e.onOpenModalReg(),e.onCloseModalAdverts()}},"Register Now")),l.a.createElement("br",null))),l.a.createElement(M.a,{open:this.state.regForm,onClick:function(){return e.onCloseModalReg()},center:!0},l.a.createElement("div",{className:"advertbgn22"},l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("h4",null,"Registeration form")),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control mb-3",name:"name",require:!0,placeholder:"Enter Names",value:this.state.name,onChange:this.handleChange}),l.a.createElement("input",{type:"email",className:"form-control mb-3",name:"email",require:!0,placeholder:"Enter Email",value:this.state.email,onChange:this.handleChange}),l.a.createElement("input",{type:"number",className:"form-control mb-3",name:"phone",require:!0,placeholder:"Phone Number",value:this.state.phone,onChange:this.handleChange}),l.a.createElement("input",{type:"text",className:"form-control mb-3",name:"location",require:!0,placeholder:"City and State",value:this.state.location,onChange:this.handleChange}),l.a.createElement("select",{className:"form-select mb-3",name:"Experienced",onChange:this.handleChange},l.a.createElement("option",{selected:!0,value:""},"Do you have an I.T background"),l.a.createElement("option",{value:"Experienced"},"Yes"),l.a.createElement("option",{value:"Experienced"},"No")),l.a.createElement("textarea",{className:"form-control mb-3",rows:"4",name:"Message1",require:!0,placeholder:"Why are you interested in taking this program",value:this.state.Message1,onChange:this.handleChange}),l.a.createElement("textarea",{className:"form-control mb-3",rows:"4",name:"Message2",require:!0,placeholder:"Please let us know anything else you will like to share",value:this.state.Message2,onChange:this.handleChange}),l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("button",{disabled:""===this.state.name||""===this.state.email||""===this.state.phone,className:"btn btn-warning editAdbutton",onClick:function(){return e.handleSubmit()}},"Send")),l.a.createElement("br",null))))}},{key:"componentDidMount",value:function(){var e=this;console.log(">>> Inside MenuCategoryDidMount",this.state),fetch("https://kinzoinstitute.onrender.com/Categories",{method:"GET"}).then(function(e){return e.json()}).then(function(t){e.setState({menuCategory:t})}),setTimeout(function(){e.setState({adverts:!0})},8e3)}}]),a}(n.Component),O=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,null),l.a.createElement(p,null),l.a.createElement(I,null))},j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),n=t.call(this,e),console.log(">>> inside funmiState",e),n.state={},n}return Object(m.a)(a,[{key:"render",value:function(){return console.log(">>>Inside RMrender",this.state),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"FooterBgC"},l.a.createElement("span",null,l.a.createElement("div",null)),l.a.createElement("span",null,l.a.createElement("div",null)),l.a.createElement("span",null)))}},{key:"componentDidMount",value:function(){console.log(">>> Inside RMdidMount")}}]),a}(n.Component),F=Object(o.e)(j),D=a(85),T=a(87),L=a(89),q=a(91),z=a(93),R=a(95),A=a(97),P=a(86),Q=a(88),U=a(90),Y=a(92),J=a(94),_=a(96),G=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){"Small Tray"===e.target.value?n.setState(Object(C.a)({},e.target.name,"1")):"Large Tray"===e.target.value?n.setState(Object(C.a)({},e.target.name,"2")):"2 Litres"===e.target.value?n.setState(Object(C.a)({},e.target.name,"1")):"4 Litres"===e.target.value?n.setState(Object(C.a)({},e.target.name,"2")):n.setState(Object(C.a)({},e.target.name,e.target.value))},n.renderQty=function(e){if(e)return e.sort(function(e,t){return e.qty-t.qty}),e.map(function(e){return l.a.createElement("option",{key:e.qty,value:e.qty},e.qty)})},n.renderMenu=function(e){return e?(e.sort(function(e,t){return e.mealname-t.mealname}),e.map(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("center",null,l.a.createElement("div",{className:"card sizeOfImage"},l.a.createElement("img",{src:e.mealImage,className:"card-img-top",alt:"menuImages"}),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement("h5",null,e.mealname))),l.a.createElement("div",{className:"placePrice"},l.a.createElement("p",{className:"makesuperscript"},"$")),l.a.createElement("div",{className:"placePrice2"},l.a.createElement("h4",null,e.price)),l.a.createElement("div",{className:"overlayNew"},l.a.createElement("br",null),l.a.createElement("h5",{className:"note"},e.menu),l.a.createElement("center",null,l.a.createElement("center",null,l.a.createElement("hr",null),l.a.createElement("span",{className:"gap"},l.a.createElement(D.a,{url:n.state.LinkUrl},l.a.createElement("span",null,l.a.createElement(P.a,{size:"32px",round:!0})),l.a.createElement("span",null,l.a.createElement(A.a,{url:n.state.LinkUrl})))),l.a.createElement("span",{className:"gap"},l.a.createElement(T.a,{url:n.state.LinkUrl},l.a.createElement(Q.a,{size:"32px",round:!0}))),l.a.createElement("span",{className:"gap"},l.a.createElement(L.a,{url:n.state.LinkUrl},l.a.createElement(U.a,{size:"32px",round:!0}))),l.a.createElement("span",{className:"gap"},l.a.createElement(q.a,{url:n.state.LinkUrl},l.a.createElement(Y.a,{size:"32px",round:!0}))),l.a.createElement("span",{className:"gap"},l.a.createElement(z.a,{url:n.state.LinkUrl},l.a.createElement(J.a,{size:"32px",round:!0}))),l.a.createElement("span",{className:"gap"},l.a.createElement(R.a,{url:n.state.LinkUrl},l.a.createElement(_.a,{size:"32px",round:!0}))),l.a.createElement("hr",null)),l.a.createElement("br",null),l.a.createElement("div",{className:"col-4"},l.a.createElement("h5",null,l.a.createElement("select",{className:"form-select mb-3",name:"orderQuantity",require:!0,placeholder:"Ouantity",onChange:n.handleChange},l.a.createElement("option",{selected:!0,value:""},"Qty"),n.renderQty(n.state.orderQty)))),l.a.createElement("span",null,l.a.createElement("button",{type:"button",className:"btn btn-warning gapIt",onMouseOver:function(){localStorage.setItem("menuID",parseInt(e._id))},onClick:function(){n.addTocartNow()}}," Add to Cart")),l.a.createElement("span",null,l.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:""}," Buy Now")))))))})):l.a.createElement("center",null,l.a.createElement("div",null,l.a.createElement("div",{class:"spinner-border text-primary",role:"status"},l.a.createElement("span",{class:"visually-hidden"},"Loading...")),l.a.createElement("div",{class:"spinner-border text-secondary",role:"status"},l.a.createElement("span",{class:"visually-hidden"},"Loading...")),l.a.createElement("div",{class:"spinner-border text-success",role:"status"},l.a.createElement("span",{class:"visually-hidden"},"Loading...")),l.a.createElement("div",{class:"spinner-border text-danger",role:"status"},l.a.createElement("span",{class:"visually-hidden"},"Loading...")),l.a.createElement("div",{class:"spinner-border text-warning",role:"status"},l.a.createElement("span",{class:"visually-hidden"},"Loading..."))))},console.log(">>> inside MenuItmeConstructor",e),n.state={menuList:"",categoryName:"",LinkUrl:"",orderQuantity:"",orderAmount:"",orderQty:"",mealPrice:"",mealName:"",mealImage:"",SelectedMeal:"",cart:[],OrdermealID:Math.floor(1e4*Math.random()),totalOrder:"",userID:Math.floor(1e10*Math.random()),cartData:"",riceorderQty:""},n}return Object(m.a)(a,[{key:"cartFirstStep",value:function(){var e=this,t=localStorage.getItem("menuID"),a=this.state.menuList.find(function(e){return e._id===t}),n=[];n.push(a),this.setState({cart:[].concat(n)}),this.myTimer=setTimeout(function(){e.state.cart.map(function(t){return e.setState({mealPrice:t.price}),e.setState({mealName:t.mealname}),e.setState({mealImage:t.mealImage}),"ok"});var t={orderedMeals:e.state.mealName,orderID:e.state.OrdermealID,orderQuantity:e.state.orderQuantity,mealPrice:e.state.mealPrice,mealImage:e.state.mealImage,totalAmount:parseFloat("".concat(e.state.mealPrice)*"".concat(e.state.orderQuantity)),userID:localStorage.getItem("userID")},a=fetch("".concat("https://funmento.onrender.com/addtocart/"),{method:"post",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(t)});alert("Item Added to Cart"),console.log("cartPost>  "+a)},1e3)}},{key:"addTocartNow",value:function(){this.cartFirstStep()}},{key:"render",value:function(){return console.log(">>> Inside RESrender",this.state),l.a.createElement(l.a.Fragment,null,l.a.createElement(x,null),l.a.createElement("div",{className:""},l.a.createElement("div",{className:"placeNicely"},l.a.createElement("center",null,l.a.createElement("h3",{className:"text"},this.state.categoryName)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},this.renderMenu(this.state.menuList))))),l.a.createElement(F,null))}},{key:"componentDidMount",value:function(){var e=this;console.log(">>> Inside MenuList");var t=this.props.match.params._id,a="".concat("http://funmento.org/MenuItems/").concat(t),n=localStorage.getItem("userID");fetch("".concat("https://funmento.onrender.com/meals?mealID=").concat(t),{method:"GET"}).then(function(e){return e.json()}).then(function(t){e.setState({menuList:t,LinkUrl:a})}),1==t?fetch("".concat("https://funmento.onrender.com/riceqty/"),{method:"GET"}).then(function(e){return e.json()}).then(function(t){e.setState({orderQty:t})}):3==t?fetch("".concat("https://funmento.onrender.com/soupqty/"),{method:"GET"}).then(function(e){return e.json()}).then(function(t){e.setState({orderQty:t})}):fetch("".concat("https://funmento.onrender.com/qty/"),{method:"GET"}).then(function(e){return e.json()}).then(function(t){e.setState({orderQty:t})}),fetch("".concat("https://funmento.onrender.com/cart?cartUserID=").concat(n),{method:"GET"}).then(function(e){return e.json()}).then(function(t){e.setState({cartData:t})}),null===localStorage.getItem("userID")&&localStorage.setItem("userID",this.state.userID)}}]),a}(n.Component),H=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(C.a)({},e.target.name,e.target.value))},n.state={name:"",email:"",phone:"",Subject:"",Message:"",date:new Date,regFormOpen:!1},n}return Object(m.a)(a,[{key:"handleregForm",value:function(){this.setState({regFormOpen:!0})}},{key:"handleregFormClose",value:function(){this.setState({regFormOpen:!1})}},{key:"handleSubmit",value:function(){var e=Object(y.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={email:"".concat(this.state.email),phone:"".concat(this.state.phone),Subject:"".concat(this.state.Subject),Message:"".concat(this.state.Message),date:k()(this.state.date).format("MMM-DD-YYYY")},e.next=4,fetch("https://kinzoinstitute.onrender.com/contactUs",{method:"post",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(t)});case 4:a=e.sent,console.log("result>  "+a),alert("Message Submitted Successfully"),this.setState({name:"",email:"",phone:"",Subject:"",Message:""}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,null),l.a.createElement("div",{className:"pageSetting"},l.a.createElement("div",{className:"container "},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-5"},l.a.createElement("div",{className:"card adjustcard mobileCardd"},l.a.createElement("div",{className:"card-img-top colorofcard"},l.a.createElement("center",null,l.a.createElement("img",{src:"https://i.imgur.com/pJMQ4rC.png",className:"adjustlog",alt:"logo"}))),l.a.createElement("div",{className:"card-body mobileBody"},l.a.createElement("h5",{className:"card-title"},"January Cohort"),l.a.createElement("br",null),l.a.createElement("p",{className:"card-text"},"Register now to secure a seat in our next cohort coming up in January. Limited seats available"),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("button",{className:"btn btn-primary",onClick:function(){e.handleregForm()}}," Register ")),l.a.createElement("span",null," ",l.a.createElement("img",{src:"https://i.imgur.com/2bDfnLz.png",className:"adjustinsta",alt:"insta"})," "),l.a.createElement("p",{className:"adjustInstTxt"},"@Kinzotraininginstitute")))),l.a.createElement("div",{className:"col-5 mobileCont"},l.a.createElement("center",null,l.a.createElement("h4",null,"Contact Us")),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control mb-3",name:"name",require:!0,placeholder:"Enter Names",value:this.state.name,onChange:this.handleChange}),l.a.createElement("input",{type:"email",className:"form-control mb-3",name:"email",require:!0,placeholder:"Enter Email",value:this.state.email,onChange:this.handleChange}),l.a.createElement("input",{type:"number",className:"form-control mb-3",name:"phone",require:!0,placeholder:"Phone Number",value:this.state.phone,onChange:this.handleChange}),l.a.createElement("input",{type:"text",className:"form-control mb-3",name:"Subject",require:!0,placeholder:"Enter Subject",value:this.state.Subject,onChange:this.handleChange}),l.a.createElement("textarea",{className:"form-control mb-3",rows:"4",name:"Message",require:!0,placeholder:"Enter Message",value:this.state.Message,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("button",{disabled:""===this.state.name||""===this.state.email||""===this.state.Message,type:"button",class:"btn btn-secondary",onClick:function(){return e.handleSubmit()}},"Submit")))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("center",{className:"mobileNumbr"},l.a.createElement("p",{className:"formttxt4"},"10451 Mill Run Circle, Suites 1010, Owings Mills MD 21117"),l.a.createElement("p",{className:"formttxt5 con2"},"+1 (443) 955 9906")))),l.a.createElement(M.a,{open:this.state.regFormOpen,center:!0},l.a.createElement(S,null),l.a.createElement("center",null,l.a.createElement("button",{className:"btn btn-danger editAdbutton",onClick:function(){return e.handleregFormClose()}},"close")),l.a.createElement("br",null)))}}]),a}(n.Component),B=function(){return l.a.createElement(c.a,null,l.a.createElement(o.a,{exact:!0,path:"/",component:O}),l.a.createElement(o.a,{exact:!0,path:"/MenuCategory",component:I}),l.a.createElement(o.a,{exact:!0,path:"/MenuItems/:_id",component:G}),l.a.createElement(o.a,{exact:!0,path:"/Homecarousel",component:p}),l.a.createElement(o.a,{exact:!0,path:"/Footer",component:F}),l.a.createElement(o.a,{exact:!0,path:"/contact",component:H}),l.a.createElement(o.a,{exact:!0,path:"/Registration",component:S}))};s.a.render(l.a.createElement(B,null),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.5c4de55d.chunk.js.map
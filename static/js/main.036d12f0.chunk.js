(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){},68:function(e,t,a){e.exports=a(86)},86:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(26),s=a.n(r),c=a(31),o=a(8),i=a(9),m=a(10),u=a(14),d=a(13),h=(a(36),a(54)),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),n=t.call(this,e),console.log(">>>Inside Constructor"),n.state={imageFIles:""},n}return Object(m.a)(a,[{key:"render",value:function(){return console.log(">>> Inside Render",this.state),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"Dashbackgroundcat"},l.a.createElement("div",{className:"carouselSettingcat"},l.a.createElement(h.a,null,l.a.createElement(h.a.Item,null,l.a.createElement("img",{className:"d-block w-100 imgsizeCar",src:"https://i.imgur.com/ahgm9yP.png",alt:"FirstSlide"}),l.a.createElement("button",{className:"btn btn-warning placebuttonCat"},"Click Here to Enrol")),l.a.createElement(h.a.Item,null,l.a.createElement("img",{className:"d-block w-100 imgsizeCar",src:"https://i.imgur.com/ZwGpLXl.png",alt:"FirstSlide"}),l.a.createElement("button",{className:"btn btn-warning placebuttonCat"},"Explore Courses"))),l.a.createElement("br",null),l.a.createElement("br",null))))}},{key:"componentDidMount",value:function(){console.log(">>> Inside DidMount")}}]),a}(n.Component),p=a(6),g=a(48),v=a(37),b=a(47),f=a(30),C=a.n(f),N=a(41),y=(a(45),a(42)),k=a.n(y),S=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},console.log(">>> inside MenuCatState",e),n.state={regForm:!1,name:"",email:"",phone:"",location:"",Message1:"",Message2:"",Experienced:"",date:new Date},n}return Object(m.a)(a,[{key:"onCloseModalReg",value:function(){this.setState({regForm:!1})}},{key:"onOpenModalReg",value:function(){this.setState({regForm:!0})}},{key:"handleSubmit",value:function(){var e=Object(N.a)(C.a.mark(function e(){var t,a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={email:"".concat(this.state.email),phone:"".concat(this.state.phone),Message1:"".concat(this.state.Message1),Message2:"".concat(this.state.Message2),Experience:"".concat(this.state.Experienced),date:k()(this.state.date).format("MMM-DD-YYYY")},e.next=4,fetch("https://kinzoinstitute.onrender.com/registerNow",{method:"post",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(t)});case 4:a=e.sent,console.log("result>  "+a),alert("Details Submitted Successfully. We will contact you on next steps"),this.setState({name:"",email:"",phone:"",location:"",Message1:"",Message2:"",Experienced:""}),this.onCloseModalReg(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return console.log(">>> Inside menuCatRender",this.state),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"advertbgn22"},l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("h4",null,"Registeration form")),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control mb-3",name:"name",require:!0,placeholder:"Enter Names",value:this.state.name,onChange:this.handleChange}),l.a.createElement("input",{type:"email",className:"form-control mb-3",name:"email",require:!0,placeholder:"Enter Email",value:this.state.email,onChange:this.handleChange}),l.a.createElement("input",{type:"number",className:"form-control mb-3",name:"phone",require:!0,placeholder:"Phone Number",value:this.state.phone,onChange:this.handleChange}),l.a.createElement("input",{type:"text",className:"form-control mb-3",name:"location",require:!0,placeholder:"City and State",value:this.state.location,onChange:this.handleChange}),l.a.createElement("select",{className:"form-select mb-3",name:"Experienced",onChange:this.handleChange},l.a.createElement("option",{selected:!0,value:""},"Do you have an I.T background"),l.a.createElement("option",{value:"Experienced"},"Yes"),l.a.createElement("option",{value:"Experienced"},"No")),l.a.createElement("textarea",{className:"form-control mb-3",rows:"4",name:"Message1",require:!0,placeholder:"Why are you interested in taking this program",value:this.state.Message1,onChange:this.handleChange}),l.a.createElement("textarea",{className:"form-control mb-3",rows:"4",name:"Message2",require:!0,placeholder:"Please let us know anything else you will like to share",value:this.state.Message2,onChange:this.handleChange}),l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("button",{disabled:""===this.state.name||""===this.state.email||""===this.state.phone,className:"btn btn-warning editAdbutton",onClick:function(){return e.handleSubmit()}},"Send")),l.a.createElement("br",null))))}},{key:"componentDidMount",value:function(){console.log(">>> Inside MenuCategoryDidMount",this.state)}}]),a}(n.Component),M=a(29),w="https://kinzoinstitute.onrender.com/Categories?catName=",x=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value)),fetch("".concat(w).concat(e.target.value),{method:"GET"}).then(function(e){return e.json()}).then(function(e){e.map(function(e){return localStorage.setItem("catID",e._id),n.props.history.push("/Courses/".concat(e._id)),window.location.reload(),"ok"})})},n.renderCart=function(e){if(e)return e.sort(function(e,t){return e._id-t._id}),e.map(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("hr",{style:{color:"silver"}}),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement("img",{src:e.mealImage,className:"CartImageSize",alt:"menuImages"})),l.a.createElement("span",null,l.a.createElement("span",{className:"alignCartText"},e.orderedMeals,":  Price: ",e.mealPrice," Qty: ",e.orderQuantity))))})},console.log(">>> inside kinzoContructor",e),n.state={cartData:"",cartColor:"",cartTotal:"",TotalTax:"",orderTotal:0,showInvoice:!1,MainCat:"",regFormOpen:!1,renderCourse:""},n}return Object(m.a)(a,[{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleCartEvent",value:function(){this.state.cartData.length>0?this.handleShowCart():(alert("Your Cart is Empty!"),this.handleCloseCart())}},{key:"handleShowCart",value:function(){this.setState({showCart:!0})}},{key:"handleregForm",value:function(){this.setState({regFormOpen:!0})}},{key:"handleregFormClose",value:function(){this.setState({regFormOpen:!1})}},{key:"handleCloseCart",value:function(){this.setState({showCart:!1})}},{key:"showInvoice",value:function(){this.setState({showInvoice:!0})}},{key:"closeInvoice",value:function(){this.setState({showInvoice:!1})}},{key:"renderCourses",value:function(e){if(e)return e.sort(function(e,t){return e.product-t.product}),e.map(function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("option",{className:"formatOptions",key:t,value:e.product},e.product))})}},{key:"render",value:function(){var e=this;return console.log(">>>Inside RMrender",this.state),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"headerbackgrd"},l.a.createElement("span",null,l.a.createElement("div",null,l.a.createElement(c.b,{to:"/"},l.a.createElement("img",{src:"https://i.imgur.com/pJMQ4rC.png",className:"adjustName",alt:"menu"})))),l.a.createElement("span",null,l.a.createElement("i",{type:"button",className:"fa fa-bars size2",onClick:function(){return e.handleShow()}})),l.a.createElement("span",null,l.a.createElement("div",null,l.a.createElement("span",{className:"Ikem"},l.a.createElement("i",{type:"button",className:"fa fa-user Ikem"})))),l.a.createElement("span",null,l.a.createElement("div",null,l.a.createElement("span",{className:"Adriel"},l.a.createElement("i",{type:"button",className:"Adriel"},"Log In"))))),l.a.createElement("div",{className:"headerbackgrd2"},l.a.createElement("span",null,l.a.createElement("center",null,l.a.createElement("select",{className:"formatSelect fontopt1",name:"renderCourse",onChange:this.handleChange},l.a.createElement("option",{selected:!0,value:""},"Splunk Courses"),this.renderCourses(this.state.MainCat)))),l.a.createElement("span",null,l.a.createElement("center",null,l.a.createElement("span",{className:"fontopt1",type:"button"},"Training Details"))),l.a.createElement("span",null,l.a.createElement("center",null,l.a.createElement("span",{type:"button",className:"fontopt1",onClick:function(){e.handleregForm()}},"Sign Up"))),l.a.createElement("span",null,l.a.createElement("center",null,l.a.createElement("span",{className:"fontopt1",type:"button",onClick:function(){e.props.history.push("/contact/")}},"Contact us")))),l.a.createElement(M.a,{open:this.state.regFormOpen,onClose:function(){return e.handleregFormClose()},center:!0},l.a.createElement(S,null)),l.a.createElement(g.a,{show:this.state.show},l.a.createElement("div",{className:"headerbackgrd3"},l.a.createElement(g.a.Body,null,l.a.createElement("div",{className:"p-3 size3"},l.a.createElement(v.a,{variant:"white",onClick:function(){return e.handleClose()}})),l.a.createElement("div",{className:"menu"},l.a.createElement("center",null,l.a.createElement("p",{className:"menulist",type:"button",onClick:function(){e.handleClose(),e.handleregForm()}},"Sign Up"))),l.a.createElement("div",{className:"menu"},l.a.createElement("center",null,l.a.createElement("p",{className:"menulist",type:"button",onClick:function(){e.props.history.push("./"),e.handleClose()}},"Log in"))),l.a.createElement("div",{className:"menu"},l.a.createElement("center",null,l.a.createElement("p",{className:"menulist",type:"button",onClick:function(){e.props.history.push("/Courses/10"),e.handleClose()}},"Splunk Courses"))),l.a.createElement("div",{className:"menu"},l.a.createElement("center",null,l.a.createElement("p",{className:"menulist",type:"button",onClick:function(){e.props.history.push("/contact"),e.handleClose()}},"Contact US")))))),l.a.createElement(g.a,{show:this.state.showCart},l.a.createElement("div",{className:"headerbackgrd3"},l.a.createElement(g.a.Body,null,l.a.createElement("div",{className:"bg-dark p-3 size3"},l.a.createElement(v.a,{variant:"white",onClick:function(){return e.handleCloseCart()}})),l.a.createElement("div",{className:"setCartData"},l.a.createElement("div",{className:"Cartmenu"},l.a.createElement("span",{className:"relatOrd"},l.a.createElement("center",null,l.a.createElement("p",{className:"menulistNow"},"Your Orders")))),l.a.createElement("div",{className:"tryDis"},this.renderCart(this.state.cartData)),l.a.createElement("hr",{style:{color:"yellow"}}),l.a.createElement("div",null,l.a.createElement("div",{className:"cartTotalFormt"},"Items: ",l.a.createElement("div",{className:"CartNumberFMT"},l.a.createElement(b.a,{value:this.state.cartTotal,thousandSeparator:!0,displayType:"text"})))),l.a.createElement("div",null,l.a.createElement("div",{className:"cartTotalFormt"},"Total before Tax: ",l.a.createElement("div",{className:"CartNumberFMT"},l.a.createElement(b.a,{value:this.state.cartTotal,thousandSeparator:!0,displayType:"text"})))),l.a.createElement("div",null,l.a.createElement("div",{className:"cartTotalFormt"},"Estimated HST/GST: ",l.a.createElement("div",{className:"CartNumberFMT"},l.a.createElement(b.a,{value:this.state.TotalTax,thousandSeparator:!0,displayType:"text"})))),l.a.createElement("hr",{style:{color:"yellow"}}),l.a.createElement("div",null,l.a.createElement("div",{className:"cartTotalFMT"},"Order Total: ",l.a.createElement("div",{className:"CartNumberForMaT"},l.a.createElement(b.a,{value:this.state.orderTotal,thousandSeparator:!0,displayType:"text"}))))),l.a.createElement("center",null,l.a.createElement("button",{className:"btn btn-warning btnHeight",onClick:function(){return e.showInvoice()}},"Checkout Order"))))))}},{key:"componentDidMount",value:function(){var e=this;console.log(">>> Inside kinzDidMount"),fetch("https://kinzoinstitute.onrender.com/Categories",{method:"GET"}).then(function(e){return e.json()}).then(function(t){e.setState({MainCat:t})})}}]),a}(n.Component),O=Object(o.e)(x),F=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n.renderMenu=function(e){return e?(e.sort(function(e,t){return e._id-t._id}),e.map(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"card addColor"},l.a.createElement("div",{className:"courseImage"},l.a.createElement("img",{src:e.Productimage,className:"card-img-top",alt:"menuImages"})),l.a.createElement("div",{className:"coursedescription"},l.a.createElement("center",{className:"container"},l.a.createElement("p",{className:"card-title setHedd"},e.heading))),l.a.createElement("div",{className:"card-body mobileViewRel"},l.a.createElement("center",null,l.a.createElement("h4",{className:"card-title mobileViewAbs"},e.product))),l.a.createElement("div",{className:"overlay"},l.a.createElement("br",null),l.a.createElement("h5",{className:"note"},e.product),l.a.createElement("hr",{style:{color:"gold"}}),l.a.createElement("center",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement(c.b,{to:"/Courses/".concat(e._id),key:e._id,style:{fontFamily:"Georgia, 'Times New Roman', Times, serif",fontSize:"20px",textDecoration:"none",color:"white",fontWeight:"bold"}},l.a.createElement("button",{type:"button",className:"btn btn-outline-warning",onClick:localStorage.setItem("catID",e._id)},"Explore Course")))))))})):l.a.createElement("center",null,l.a.createElement("div",null,l.a.createElement("div",{class:"spinner-border text-primary",role:"status"},l.a.createElement("span",{class:"visually-hidden"},"Loading...")),l.a.createElement("div",{class:"spinner-border text-secondary",role:"status"},l.a.createElement("span",{class:"visually-hidden"},"Loading...")),l.a.createElement("div",{class:"spinner-border text-success",role:"status"},l.a.createElement("span",{class:"visually-hidden"},"Loading...")),l.a.createElement("div",{class:"spinner-border text-danger",role:"status"},l.a.createElement("span",{class:"visually-hidden"},"Loading...")),l.a.createElement("div",{class:"spinner-border text-warning",role:"status"},l.a.createElement("span",{class:"visually-hidden"},"Loading..."))))},console.log(">>> inside MenuCatState",e),n.state={menuCategory:"",adverts:!1,regForm:!1,name:"",email:"",phone:"",location:"",Message1:"",Message2:"",Experienced:"",date:new Date},n}return Object(m.a)(a,[{key:"onCloseModalAdverts",value:function(){this.setState({adverts:!1})}},{key:"onOpenModalAdverts",value:function(){this.setState({adverts:!0})}},{key:"onCloseModalReg",value:function(){this.setState({regForm:!1})}},{key:"onOpenModalReg",value:function(){this.setState({regForm:!0})}},{key:"handleSubmit",value:function(){var e=Object(N.a)(C.a.mark(function e(){var t,a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={email:"".concat(this.state.email),phone:"".concat(this.state.phone),Message1:"".concat(this.state.Message1),Message2:"".concat(this.state.Message2),Experience:"".concat(this.state.Experienced),date:k()(this.state.date).format("MMM-DD-YYYY")},e.next=4,fetch("https://kinzoinstitute.onrender.com/registerNow",{method:"post",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(t)});case 4:a=e.sent,console.log("result>  "+a),alert("Details Submitted Successfully. We will contact you on next steps"),this.setState({name:"",email:"",phone:"",location:"",Message1:"",Message2:"",Experienced:""}),this.onCloseModalReg(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return console.log(">>> Inside menuCatRender",this.state),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container putinplace"},l.a.createElement("div",{className:"fitIn"},l.a.createElement("center",null,l.a.createElement("h5",{className:"text"},"Program Courses"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},this.renderMenu(this.state.menuCategory)))))),l.a.createElement(M.a,{open:this.state.adverts,onClose:function(){return e.onCloseModalAdverts()},center:!0},l.a.createElement("div",{className:"advertbgn"},l.a.createElement("div",{className:"p-3 size3"},l.a.createElement(v.a,{variant:"white",onClick:function(){return e.onCloseModalAdverts()}})),l.a.createElement("div",null,l.a.createElement("img",{className:"imgsizeCar2",src:"https://i.imgur.com/2gD9MbF.png",alt:"FirstSlide"})),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("h4",{className:"editAdHeading"}," Join the next cohort. Upskill with the best Splunk Academy"),l.a.createElement("br",null),l.a.createElement("p",{className:"editAdHeading2"}," Unleash your fullest potentials and become a data virtuoso. Splunk is the world's leading data analysis and monitoring platform.")),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("button",{className:"btn btn-warning editAdbutton",onClick:function(){e.onOpenModalReg(),e.onCloseModalAdverts()}},"Register Now")),l.a.createElement("br",null))),l.a.createElement(M.a,{open:this.state.regForm,onClose:function(){return e.onCloseModalReg()},center:!0},l.a.createElement("div",{className:"advertbgn22"},l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("h4",null,"Registeration form")),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control mb-3",name:"name",require:!0,placeholder:"Enter Names",value:this.state.name,onChange:this.handleChange}),l.a.createElement("input",{type:"email",className:"form-control mb-3",name:"email",require:!0,placeholder:"Enter Email",value:this.state.email,onChange:this.handleChange}),l.a.createElement("input",{type:"number",className:"form-control mb-3",name:"phone",require:!0,placeholder:"Phone Number",value:this.state.phone,onChange:this.handleChange}),l.a.createElement("input",{type:"text",className:"form-control mb-3",name:"location",require:!0,placeholder:"City and State",value:this.state.location,onChange:this.handleChange}),l.a.createElement("select",{className:"form-select mb-3",name:"Experienced",onChange:this.handleChange},l.a.createElement("option",{selected:!0,value:""},"Do you have an I.T background"),l.a.createElement("option",{value:"Experienced"},"Yes"),l.a.createElement("option",{value:"Experienced"},"No")),l.a.createElement("textarea",{className:"form-control mb-3",rows:"4",name:"Message1",require:!0,placeholder:"Why are you interested in taking this program",value:this.state.Message1,onChange:this.handleChange}),l.a.createElement("textarea",{className:"form-control mb-3",rows:"4",name:"Message2",require:!0,placeholder:"Please let us know anything else you will like to share",value:this.state.Message2,onChange:this.handleChange}),l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("button",{disabled:""===this.state.name||""===this.state.email||""===this.state.phone,className:"btn btn-warning editAdbutton",onClick:function(){return e.handleSubmit()}},"Send")),l.a.createElement("br",null))))}},{key:"componentDidMount",value:function(){var e=this;console.log(">>> Inside MenuCategoryDidMount",this.state),fetch("https://kinzoinstitute.onrender.com/Categories",{method:"GET"}).then(function(e){return e.json()}).then(function(t){e.setState({menuCategory:t})}),setTimeout(function(){e.setState({adverts:!0})},8e3)}}]),a}(n.Component),j=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(O,null),l.a.createElement(E,null),l.a.createElement(F,null))},I=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),n=t.call(this,e),console.log(">>> inside funmiState",e),n.state={},n}return Object(m.a)(a,[{key:"render",value:function(){return console.log(">>>Inside RMrender",this.state),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"FooterBgC"},l.a.createElement("span",null,l.a.createElement("div",null)),l.a.createElement("span",null,l.a.createElement("div",null)),l.a.createElement("span",null)))}},{key:"componentDidMount",value:function(){console.log(">>> Inside RMdidMount")}}]),a}(n.Component),T=Object(o.e)(I),D=a(88),L=a(90),z=a(92),R=a(94),A=a(96),q=a(98),U=a(100),Y=a(89),B=a(91),H=a(93),_=a(95),J=a(97),P=a(99),G=a(19),W=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleregForm=function(){n.setState({regFormOpen:!0})},n.handleregFormClose=function(){n.setState({regFormOpen:!1})},n.renderMenu=function(e){return e?(e.sort(function(e,t){return e.mealname-t.mealname}),e.map(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row pageTS container"},l.a.createElement("center",null,l.a.createElement("div",{className:"col-12 courseHeading"},l.a.createElement("div",{className:"coursetitleSet1"},l.a.createElement("button",{className:"btn btn-danger advertBtnColor",onClick:function(){n.props.history.push("/")}},"Splunk Courses")),l.a.createElement("div",{className:"coursetitleSet2"},l.a.createElement("h3",null,e.courseName," ",l.a.createElement("span",{className:"arrow"}," > "))),l.a.createElement("div",{className:"contactbtn"},l.a.createElement("div",null,l.a.createElement("span",{className:"messageUs"},l.a.createElement("b",null,"Have queries? Ask us"))),l.a.createElement("div",null,l.a.createElement("a",{href:"tel:+14439559906",target:"_blank",rel:"noopener noreferrer","aria-label":"tel"},l.a.createElement("i",{className:"fa fa-phone aweSomeColor2","aria-hidden":"true"}," +1 443 955 9906"))))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-5 mobileCourseImage"},l.a.createElement("center",null,l.a.createElement("img",{src:e.image,className:"courseImageSet",alt:"courseImage"})),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("div",null,l.a.createElement("span",{className:"gap"},l.a.createElement(D.a,{url:n.state.LinkUrl},l.a.createElement("span",null,l.a.createElement(Y.a,{size:"32px",round:!0})),l.a.createElement("span",null,l.a.createElement(U.a,{url:n.state.LinkUrl})))),l.a.createElement("span",{className:"gap"},l.a.createElement(L.a,{url:n.state.LinkUrl},l.a.createElement(B.a,{size:"32px",round:!0}))),l.a.createElement("span",{className:"gap"},l.a.createElement(z.a,{url:n.state.LinkUrl},l.a.createElement(H.a,{size:"32px",round:!0}))),l.a.createElement("span",{className:"gap"},l.a.createElement(R.a,{url:n.state.LinkUrl},l.a.createElement(_.a,{size:"32px",round:!0}))),l.a.createElement("span",{className:"gap"},l.a.createElement(A.a,{url:n.state.LinkUrl},l.a.createElement(J.a,{size:"32px",round:!0}))),l.a.createElement("span",{className:"gap"},l.a.createElement(q.a,{url:n.state.LinkUrl},l.a.createElement(P.a,{size:"32px",round:!0})))))),l.a.createElement("div",{className:"col-5 mobileCourseImage"},l.a.createElement("div",{className:"lineBrk"},l.a.createElement("p",{className:"textEditor"}," ",e.description," ")),l.a.createElement("div",{className:"lineBrk"},l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-podcast aweSomeColor","aria-hidden":"true"})),l.a.createElement("span",{className:"mobileTxt"},l.a.createElement("b",null,"Live Online Classes")),l.a.createElement("span",{className:"mobileTxt"}," starting on"),l.a.createElement("span",{className:"mobileTxt"}," ",l.a.createElement("b",null,"10th Jan 2024"))),l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-primary buttonRadius",onClick:function(){n.handleregForm()}},l.a.createElement("b",null,"Enroll Now")),l.a.createElement("button",{className:"btn btn-outline-primary buttonRadius",onClick:function(){n.props.history.push("/contact")}},l.a.createElement("b",null,"Contact Us"))))))})):l.a.createElement("center",null,l.a.createElement("div",null,l.a.createElement("div",{class:"spinner-border text-primary",role:"status"},l.a.createElement("span",{class:"visually-hidden"},"Loading...")),l.a.createElement("div",{class:"spinner-border text-secondary",role:"status"},l.a.createElement("span",{class:"visually-hidden"},"Loading...")),l.a.createElement("div",{class:"spinner-border text-success",role:"status"},l.a.createElement("span",{class:"visually-hidden"},"Loading...")),l.a.createElement("div",{class:"spinner-border text-danger",role:"status"},l.a.createElement("span",{class:"visually-hidden"},"Loading...")),l.a.createElement("div",{class:"spinner-border text-warning",role:"status"},l.a.createElement("span",{class:"visually-hidden"},"Loading..."))))},console.log(">>> inside MenuItmeConstructor",e),n.state={menuList:"",courseTitle:"",accordion1:"",accordion2:"",accordion3:"",accordion4:"",LinkUrl:"",userID:Math.floor(1e10*Math.random()),regFormOpen:!1},n}return Object(m.a)(a,[{key:"render",value:function(){return console.log(">>> Inside RESrender",this.state),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(O,null)),l.a.createElement("div",{className:"coursespgset backgroundCol"},l.a.createElement("div",{className:""},this.renderMenu(this.state.menuList)),l.a.createElement("div",{className:"container row accordionSet"},l.a.createElement("h3",null,"Benefits of ",this.state.courseTitle," in Splunk Training")),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement(G.a,{defaultActiveKey:"0",flush:!0},l.a.createElement(G.a.Item,{eventKey:"0"},l.a.createElement(G.a.Header,null,"What is ",this.state.courseTitle),l.a.createElement(G.a.Body,null,l.a.createElement("p",null," ",this.state.accordion1," "))),l.a.createElement(G.a.Item,{eventKey:"1"},l.a.createElement(G.a.Header,null,"Why Should I learn ",this.state.courseTitle),l.a.createElement(G.a.Body,null,l.a.createElement("p",null," ",this.state.accordion2," "))),l.a.createElement(G.a.Item,{eventKey:"2"},l.a.createElement(G.a.Header,null,"Benefits of ",this.state.courseTitle," in the Splunk Training"),l.a.createElement(G.a.Body,null,l.a.createElement("p",null," ",this.state.accordion3," "))),l.a.createElement(G.a.Item,{eventKey:"3"},l.a.createElement(G.a.Header,null,"How long will it take to complete the ",this.state.courseTitle," course"),l.a.createElement(G.a.Body,null,l.a.createElement("p",null," ",this.state.accordion4," "))))))),l.a.createElement(M.a,{open:this.state.regFormOpen,onClose:this.handleregFormClose,center:!0},l.a.createElement(S,null)))}},{key:"componentDidMount",value:function(){var e=this;console.log(">>> Inside MenuList");var t=this.props.match.params._id,a="".concat("https://kinzo.netlify.app/Courses/").concat(t);fetch("".concat("https://kinzoinstitute.onrender.com/courses?courseID=").concat(t),{method:"GET"}).then(function(e){return e.json()}).then(function(t){e.setState({menuList:t,LinkUrl:a}),t.map(function(t){return e.setState({courseTitle:t.courseName,accordion1:t.accordion1,accordion2:t.accordion2,accordion3:t.accordion3,accordion4:t.accordion4}),"ok"})}),null===localStorage.getItem("userID")&&localStorage.setItem("userID",this.state.userID)}}]),a}(n.Component),K=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n.state={name:"",email:"",phone:"",Subject:"",Message:"",date:new Date,regFormOpen:!1},n}return Object(m.a)(a,[{key:"handleregForm",value:function(){this.setState({regFormOpen:!0})}},{key:"handleregFormClose",value:function(){this.setState({regFormOpen:!1})}},{key:"handleSubmit",value:function(){var e=Object(N.a)(C.a.mark(function e(){var t,a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={email:"".concat(this.state.email),phone:"".concat(this.state.phone),Subject:"".concat(this.state.Subject),Message:"".concat(this.state.Message),date:k()(this.state.date).format("MMM-DD-YYYY")},e.next=4,fetch("https://kinzoinstitute.onrender.com/contactUs",{method:"post",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(t)});case 4:a=e.sent,console.log("result>  "+a),alert("Message Submitted Successfully"),this.setState({name:"",email:"",phone:"",Subject:"",Message:""}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(O,null),l.a.createElement("div",{className:"pageSetting"},l.a.createElement("div",{className:"container "},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-5"},l.a.createElement("div",{className:"card adjustcard mobileCardd"},l.a.createElement("div",{className:"card-img-top colorofcard"},l.a.createElement("center",null,l.a.createElement("img",{src:"https://i.imgur.com/pJMQ4rC.png",className:"adjustlog",alt:"logo"}))),l.a.createElement("div",{className:"card-body mobileBody"},l.a.createElement("h5",{className:"card-title"},"January Cohort"),l.a.createElement("br",null),l.a.createElement("p",{className:"card-text"},"Register now to secure a seat in our next cohort coming up in January. Limited seats available"),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("button",{className:"btn btn-primary",onClick:function(){e.handleregForm()}}," Register ")),l.a.createElement("span",null," ",l.a.createElement("img",{src:"https://i.imgur.com/2bDfnLz.png",className:"adjustinsta",alt:"insta"})," "),l.a.createElement("p",{className:"adjustInstTxt"},"@Kinzotraininginstitute")))),l.a.createElement("div",{className:"col-5 mobileCont"},l.a.createElement("center",null,l.a.createElement("h4",null,"Contact Us")),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control mb-3",name:"name",require:!0,placeholder:"Enter Names",value:this.state.name,onChange:this.handleChange}),l.a.createElement("input",{type:"email",className:"form-control mb-3",name:"email",require:!0,placeholder:"Enter Email",value:this.state.email,onChange:this.handleChange}),l.a.createElement("input",{type:"number",className:"form-control mb-3",name:"phone",require:!0,placeholder:"Phone Number",value:this.state.phone,onChange:this.handleChange}),l.a.createElement("input",{type:"text",className:"form-control mb-3",name:"Subject",require:!0,placeholder:"Enter Subject",value:this.state.Subject,onChange:this.handleChange}),l.a.createElement("textarea",{className:"form-control mb-3",rows:"4",name:"Message",require:!0,placeholder:"Enter Message",value:this.state.Message,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("button",{disabled:""===this.state.name||""===this.state.email||""===this.state.Message,type:"button",class:"btn btn-secondary",onClick:function(){return e.handleSubmit()}},"Submit")))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("center",{className:"mobileNumbr"},l.a.createElement("p",{className:"formttxt4"},"10451 Mill Run Circle, Suites 1010, Owings Mills MD 21117"),l.a.createElement("p",{className:"formttxt5 con2"},"+1 (443) 955 9906")))),l.a.createElement(M.a,{open:this.state.regFormOpen,center:!0},l.a.createElement(S,null),l.a.createElement("center",null,l.a.createElement("button",{className:"btn btn-danger editAdbutton",onClick:function(){return e.handleregFormClose()}},"close")),l.a.createElement("br",null)))}}]),a}(n.Component),Q=function(){return l.a.createElement(c.a,null,l.a.createElement(o.a,{exact:!0,path:"/",component:j}),l.a.createElement(o.a,{exact:!0,path:"/Category",component:F}),l.a.createElement(o.a,{exact:!0,path:"/Courses/:_id",component:W}),l.a.createElement(o.a,{exact:!0,path:"/Homecarousel",component:E}),l.a.createElement(o.a,{exact:!0,path:"/Footer",component:T}),l.a.createElement(o.a,{exact:!0,path:"/contact",component:K}),l.a.createElement(o.a,{exact:!0,path:"/Registration",component:S}))};s.a.render(l.a.createElement(Q,null),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.036d12f0.chunk.js.map
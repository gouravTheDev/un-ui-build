(this.webpackJsonpunnetowrk=this.webpackJsonpunnetowrk||[]).push([[0],{30:function(e,t,a){e.exports=a(43)},32:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a(16),s=a(7),o=(a(32),a(10)),m=a(3),i=a.n(m),p=a(6),d="https://unnetwork-admin.codewithbogo.in/api",u=a(17),f=new u.a,E=function(e){return fetch("".concat(d,"/user/sign-up"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},v=function(e){return fetch("".concat(d,"/user/sign-in"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(){var e=Object(p.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.json());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)}))},g=function(e,t){"undefined"!==typeof window&&(f.set("token",e.api_token,{path:"/"}),t())},b=function(e){var t=f.get("token");if(t&&""!=t)return f.remove("token",{path:"/"}),e(),fetch("".concat(d,"/user/logout"),{method:"GET",headers:{Authorization:"Bearer "+t}}).then((function(e){return console.log("signout success")})).catch((function(e){return console.log(e)}))},h=function(){var e=f.get("token");return e||!1},x=Object(l.g)((function(e){var t,a=e.history;return r.a.createElement("div",null,r.a.createElement("ul",{className:"nav nav-tabs bg-dark py-2 bg-transparent",style:{borderBottom:"0px"}},r.a.createElement("a",{className:"navbar-brand pl-0",href:"#"},r.a.createElement("span",{className:"btn menuIcon"},"Unseen"," ")," ",r.a.createElement("span",{className:"btn menuIconText"},"Network")),h()&&r.a.createElement("li",{className:"nav-item ml-auto mr-1",style:{marginTop:"7px"}},r.a.createElement("span",(t={className:"btn menuIcon",style:{cursor:"pointer"}},Object(o.a)(t,"style",{borderRadius:"30px",background:"#fff",color:"#000",fontSize:"18px"}),Object(o.a)(t,"onClick",(function(){b((function(){a.push("/")}))})),t),"Signout"))))})),N=new u.a;function y(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=(t[0],t[1],Object(n.useState)("")),l=Object(s.a)(a,2),o=l[0],m=l[1];Object(n.useEffect)((function(){var e=N.get("token");e&&(console.log("hello"),m(e))}));return r.a.createElement("div",null,r.a.createElement("div",{className:"homeD"}),r.a.createElement("div",{className:"homeM"},r.a.createElement("div",{className:"container pb-4",style:{minHeight:"100vh"}},r.a.createElement(x,null),r.a.createElement("div",{className:"row pt-0"},r.a.createElement("div",{className:"col-md-12 col-sm-12 text-center pt-0"},r.a.createElement("img",{src:"/landing.png",className:"homeImgM"})),r.a.createElement("div",{className:"col-md-12 col-sm-12 text-center"},r.a.createElement("p",{style:{marginBottom:"35px",marginTop:"40px",color:"#ffffff"}},"Welcome. We\u2019ve been waiting for you. The world needs you, but we understand you won\u2019t be able to do this alone. Let us support you, and place you in an environment with creatives just like you. ",r.a.createElement("br",null),"Welcome to The Unseen Network."," "),r.a.createElement(c.b,{style:{borderRadius:"40px",background:"#ffffff",color:"#000",fontSize:"20px"},className:"btn shadow",to:"/user/profile"},o?"Profile":"Get Started"))))))}var w=a(2),j=Object(l.g)((function(e){e.history;return r.a.createElement("div",{className:"container customMenu pt-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-7"},r.a.createElement("span",{style:{marginRight:"7px"}},r.a.createElement("i",{className:"fas fa-bars"})),"Unseen Network"),r.a.createElement("div",{className:"col-5",style:{textAlign:"right"}},r.a.createElement("span",{className:"mx-2"},r.a.createElement("i",{className:"fas fa-search"})),r.a.createElement("span",{className:"mx-2"},r.a.createElement("i",{className:"fas fa-envelope"})),r.a.createElement("span",{className:"ml-2"},r.a.createElement("i",{className:"fas fa-bell"})))))})),O=function(e){var t=e.children;return r.a.createElement("div",{className:"baseClass"},r.a.createElement(j,null),t)},k=function(){var e=Object(n.useState)({first_name:"",last_name:"",email:"",sex:"Man",address:"",password:"",error:"",didRedirect:!1,success:!1}),t=Object(s.a)(e,2),a=t[0],m=t[1],d=Object(n.useState)(!1),u=Object(s.a)(d,2),f=u[0],v=u[1],b=a.first_name,x=a.last_name,N=a.email,y=a.sex,j=a.address,O=a.password,k=(a.profession,a.didRedirect),C=a.error,P=(a.success,h().user,function(e){return function(t){m(Object(w.a)({},a,Object(o.a)({error:!1},e,t.target.value)))}}),_=function(){v(!f)},S=function(){var e=Object(p.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),m(Object(w.a)({},a,{error:!1})),""!=O&&""!=b&&""!=x&&""!=N&&""!=y&&""!=j){e.next=6;break}return console.log(a),m(Object(w.a)({},a,{error:"Please fill all the fields",loading:!1})),e.abrupt("return");case 6:if(!(O.length<6)){e.next=9;break}return m(Object(w.a)({},a,{error:"Password must be at least 6 characters!",loading:!1})),e.abrupt("return");case 9:return e.next=11,E({first_name:b,last_name:x,email:N,sex:y,password:O,address:j});case 11:(n=e.sent)&&n!={}?201==n.status?m(Object(w.a)({},a,{error:n.message})):g(n.data,(function(){m(Object(w.a)({},a,{didRedirect:!0}))})):m(Object(w.a)({},a,{error:"Could not process now!"}));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"loginHome container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 mb-3"},r.a.createElement("h1",{className:"mt-4 mb-3",style:{fontSize:"2.6em",fontWeight:"900"}},"Register")),r.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group mb-3 mt-2",style:{borderRadius:"13px",border:"1px solid #fff",padding:"10px",paddingTop:"20px",paddingBottom:"12px"},id:"customGroup"},r.a.createElement("div",{className:"my-0 py-0"},"First Name"),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col-1 pt-0"},r.a.createElement("i",{className:"fas fa-user inputIcon"})),r.a.createElement("div",{className:"col-10 pl-2"},r.a.createElement("input",{id:"floatingInput",type:"text",placeholder:"John",onChange:P("first_name"),required:!0})))),r.a.createElement("div",{className:"form-group mb-3 mt-2",style:{borderRadius:"13px",border:"1px solid #fff",padding:"10px",paddingTop:"20px",paddingBottom:"12px"},id:"customGroup"},r.a.createElement("div",{className:"my-0 py-0"},"Last Name"),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col-1 pt-0"},r.a.createElement("i",{className:"fas fa-user inputIcon"})),r.a.createElement("div",{className:"col-10 pl-2"},r.a.createElement("input",{id:"floatingInput",type:"text",placeholder:"Doe",onChange:P("last_name"),required:!0})))),r.a.createElement("div",{className:"form-group mb-3 mt-2",style:{borderRadius:"13px",border:"1px solid #fff",padding:"10px",paddingTop:"20px",paddingBottom:"12px"},id:"customGroup"},r.a.createElement("div",{className:"my-0 py-0"},"Email address"),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col-1"},r.a.createElement("img",{src:"/fig/email.svg",className:"inputIcon",style:{height:"18px"}})),r.a.createElement("div",{className:"col-10 pl-2"},r.a.createElement("input",{id:"floatingInput",type:"email",placeholder:"name@example.com",onChange:P("email"),required:!0})))),r.a.createElement("div",{className:"form-group mb-3 mt-2",style:{borderRadius:"13px",border:"1px solid #fff",padding:"10px",paddingTop:"20px",paddingBottom:"12px"},id:"customGroup"},r.a.createElement("div",{className:"my-0 py-0"},"Sex"),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col-1 pt-0"},r.a.createElement("i",{className:"fas fa-mars-stroke inputIcon"})),r.a.createElement("div",{className:"col-10 pl-2"},r.a.createElement("select",{id:"floatingInput",onChange:P("sex")},r.a.createElement("option",{value:"Man"},"Man"),r.a.createElement("option",{value:"Woman"},"Woman"),r.a.createElement("option",{value:"Other"},"Other"))))),r.a.createElement("div",{className:"form-group mb-3 mt-2",style:{borderRadius:"13px",border:"1px solid #fff",padding:"10px",paddingTop:"20px",paddingBottom:"12px"},id:"customGroup"},r.a.createElement("div",{className:"my-0 py-0"},"Password"),r.a.createElement("div",{className:"row mt-2 pr-2"},r.a.createElement("div",{className:"col-1"},r.a.createElement("img",{src:"/fig/lock.svg",className:"inputIcon",style:{height:"18px"}})),r.a.createElement("div",{className:"col-9 pl-2"},r.a.createElement("input",{id:"floatingInput2",type:f?"text":"password",placeholder:"Password",onChange:P("password"),required:!0})),r.a.createElement("div",{className:"col-1 pt-1 text-right"},r.a.createElement("img",{src:"/fig/view.svg",className:"inputIcon",style:{height:"18px"},onClick:_})))),r.a.createElement("div",{className:"form-group mb-3 mt-2",style:{borderRadius:"13px",border:"1px solid #fff",padding:"10px",paddingTop:"20px",paddingBottom:"12px"},id:"customGroup"},r.a.createElement("div",{className:"my-0 py-0"},"City - State"),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col-1 pt-1"},r.a.createElement("i",{className:"fas fa-map-marker inputIcon"})),r.a.createElement("div",{className:"col-10 pl-2"},r.a.createElement("input",{id:"floatingInput2",type:"text",placeholder:"LA, California",onChange:P("address"),required:!0})))),r.a.createElement("div",{className:"form-group mt-3"},r.a.createElement("p",{style:{fontSize:"13px"}},"Creating an account means you're okay with our Terms of Service out Privacy Policy")),r.a.createElement("div",{className:"form-group my-2",style:{display:C?"":"none",color:"red"}},C),r.a.createElement("button",{style:{marginBottom:"46px",paddingTop:"10px",paddingBottom:"10px",fontSize:"1.1em"},onClick:S,className:"btn btn-info mt-3 btnCustom"},"Create an Account"))),r.a.createElement("div",{className:"col-12 mx-auto text-center"},r.a.createElement("span",null,""!=a.error?a.error:"")),r.a.createElement("div",{className:"col-md-6 col-sm-12 mt-3"},r.a.createElement("p",{style:{fontSize:"13px"}},"Already have an account?"," ",r.a.createElement(c.b,{to:"/signin",style:{textDecoration:"none",color:"#FA983B"}},"Log In"))))),k?r.a.createElement(l.a,{to:"/user/profile"}):h()?r.a.createElement(l.a,{to:"/"}):void 0)},C=function(){var e=Object(n.useState)({email:"",password:"",error:"",loading:!1,didRedirect:!1}),t=Object(s.a)(e,2),a=t[0],m=t[1],d=Object(n.useState)(!1),u=Object(s.a)(d,2),f=u[0],E=u[1],b=a.email,x=a.password,N=(a.error,a.loading,a.didRedirect),y=(h().user,function(){E(!f)}),j=function(e){return function(t){m(Object(w.a)({},a,Object(o.a)({error:!1},e,t.target.value)))}},O=function(){var e=Object(p.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),m(Object(w.a)({},a,{error:!1,loading:!0})),b&&x&&""!=b&&""!=x){e.next=5;break}return m(Object(w.a)({},a,{error:"Please fill all the fields",loading:!1})),e.abrupt("return");case 5:return e.next=7,v({email:b,password:x});case 7:(n=e.sent)&&n!={}?201==n.status?m(Object(w.a)({},a,{error:n.message,loading:!1})):g(n.data,(function(){m(Object(w.a)({},a,{didRedirect:!0}))})):m(Object(w.a)({},a,{error:"Could not process now!",loading:!1}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"loginHome container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 mb-2"},r.a.createElement("h1",{className:"mt-4 mb-3",style:{fontSize:"2.6em",fontWeight:"900"}},"Sign in")),r.a.createElement("div",{className:"col-md-6 offset-sm-3"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group mb-4",style:{marginTop:"36px",borderRadius:"15px",border:"1px solid #fff",padding:"10px",paddingLeft:"14px",paddingTop:"20px",paddingBottom:"12px"},id:"customGroup"},r.a.createElement("div",{className:"mt-0 mb-2 py-0"},"Email address"),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col-1"},r.a.createElement("img",{src:"/fig/email.svg",className:"inputIcon",style:{height:"18px"}})),r.a.createElement("div",{className:"col-10 pl-2"},r.a.createElement("input",{id:"floatingInput",type:"email",placeholder:"name@example.com",onChange:j("email"),required:!0})))),r.a.createElement("div",{className:"form-group mb-4",style:{marginTop:"32px",borderRadius:"15px",border:"1px solid #fff",padding:"10px",paddingLeft:"14px",paddingTop:"20px",paddingBottom:"12px"},id:"customGroup"},r.a.createElement("div",{className:"mt-0 mb-2 py-0"},"Password"),r.a.createElement("div",{className:"row mt-2 pr-2"},r.a.createElement("div",{className:"col-1"},r.a.createElement("img",{src:"/fig/lock.svg",className:"inputIcon",style:{height:"18px"}})),r.a.createElement("div",{className:"col-9 pl-2"},r.a.createElement("input",{id:"floatingInput2",type:f?"text":"password",placeholder:"Password",onChange:j("password"),required:!0})),r.a.createElement("div",{className:"col-1 pt-1 text-right"},r.a.createElement("img",{src:"/fig/view.svg",style:{color:"#B2B2AF",height:"18px"},onClick:y})))),r.a.createElement("div",{className:"form-group",style:{marginTop:"40px",marginBottom:"24px"}},r.a.createElement("p",{style:{fontSize:"13px"}},"Creating an account means you're okay with our Terms of Service out Privacy Policy")),r.a.createElement("button",{style:{marginBottom:"46px",paddingTop:"10px",paddingBottom:"10px",fontSize:"1.1em"},onClick:O,className:"btn btn-info mt-3 btnCustom"},"Log In"))),r.a.createElement("div",{className:"col-12 mx-auto text-center"},r.a.createElement("span",null,""!=a.error?a.error:"")),r.a.createElement("div",{className:"col-md-6 col-sm-12 mt-3"},r.a.createElement("p",{style:{fontSize:"13px"}},"Don't have an account yet?"," ",r.a.createElement(c.b,{to:"/signup",style:{textDecoration:"none",color:"#FA983B"}},"Register"))))),N?r.a.createElement(l.a,{to:"/user/profile"}):h()?r.a.createElement(l.a,{to:"/"}):void 0)},P=a(27),_=function(e){var t=e.component,a=Object(P.a)(e,["component"]);return r.a.createElement(l.b,Object.assign({},a,{render:function(e){return h()?r.a.createElement(t,e):r.a.createElement(l.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},S=a(46),T=a(28),B=new function e(){Object(T.a)(this,e),this.getProfile=function(){var e=Object(p.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(d,"/user/details"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+t}});case 3:return a=e.sent,e.next=6,a.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),this.updateProfile=function(){var e=Object(p.a)(i.a.mark((function e(t,a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(d,"/user/update-profile"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+t},body:JSON.stringify(a)});case 3:return n=e.sent,e.next=6,n.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a){return e.apply(this,arguments)}}(),this.changePass=function(){var e=Object(p.a)(i.a.mark((function e(t,a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(d,"/user/changepassword"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+t},body:JSON.stringify(a)});case 3:return n=e.sent,e.next=6,n.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a){return e.apply(this,arguments)}}(),this.uploadProfilePic=function(){var e=Object(p.a)(i.a.mark((function e(t,a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(a),e.next=4,fetch("".concat(d,"/user/upload-profile-picture"),{method:"POST",headers:{Authorization:"Bearer "+t},body:a});case 4:return n=e.sent,e.next=7,n.json();case 7:return n=e.sent,e.abrupt("return",n);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}()},I=new u.a,R=function(e){var t=e.history,a=Object(n.useState)(!1),c=Object(s.a)(a,2),l=c[0],m=c[1],d="",u=Object(n.useState)(""),f=Object(s.a)(u,2),E=f[0],v=f[1],g=Object(n.useState)(!1),h=Object(s.a)(g,2),x=h[0],N=h[1],y=Object(n.useState)({id:"",email:"",first_name:"",last_name:"",phone:"",profession:"",profile_pic:"",address:"",msg:""}),j=Object(s.a)(y,2),k=j[0],C=j[1],P=k.first_name,_=k.last_name,T=k.sex,R=k.address,A=k.profession,z=k.phone,D=Object(n.useState)({password_1:"",password_2:"",msgP:""}),G=Object(s.a)(D,2),L=G[0],F=G[1],q=L.password_1,H=L.password_2,J=L.msgP,M=function(e){return function(t){C(Object(w.a)({},k,Object(o.a)({},e,t.target.value)))}},W=function(e){return function(t){F(Object(w.a)({},L,Object(o.a)({},e,t.target.value)))}};function U(){return(U=Object(p.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=I.get("token"),v(t),e.next=5,B.getProfile(t);case 5:a=e.sent,console.log(a),n=a,C(Object(w.a)({},k,{first_name:n.first_name,last_name:n.last_name,email:n.email,phone:n.phone,profession:n.profession,profile_pic:n.profile_pic,address:n.address,id:n.id})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var K=function(){var e=Object(p.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C(Object(w.a)({},k,{msg:""})),t.preventDefault(),""!=P&&""!=_&&""!=T&&""!=A&&""!=z&&""!=R){e.next=5;break}return C(Object(w.a)({},k,{msg:"Please fill all the fields"})),e.abrupt("return");case 5:return e.next=7,B.updateProfile(E,k);case 7:(a=e.sent)&&(C(a.data),C(Object(w.a)({},k,{msg:a.message})));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(p.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F(Object(w.a)({},L,{msg:""})),t.preventDefault(),""!=q&&""!=H){e.next=5;break}return F(Object(w.a)({},L,{msgP:"Please fill all the fields"})),e.abrupt("return");case 5:return e.next=7,B.changePass(E,L);case 7:(a=e.sent)&&(a.status,F(Object(w.a)({},L,{msgP:a.message})),console.log(a));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){!function(){U.apply(this,arguments)}()}),[]),r.a.createElement(O,{title:"Profile page"},r.a.createElement("form",null,r.a.createElement("input",{id:"inputFile",type:"file",ref:function(e){d=e},onChange:function(){var e=Object(p.a)(i.a.mark((function e(t){var a,n,r,c,l,s,o,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(console.log(t.target.files[0]),(a=new FormData).set("profile_pic",t.target.files[0]),n=!0,r=!1,c=void 0,e.prev=6,l=a.values()[Symbol.iterator]();!(n=(s=l.next()).done);n=!0)o=s.value,console.log(o);e.next=14;break;case 10:e.prev=10,e.t0=e.catch(6),r=!0,c=e.t0;case 14:e.prev=14,e.prev=15,n||null==l.return||l.return();case 17:if(e.prev=17,!r){e.next=20;break}throw c;case 20:return e.finish(17);case 21:return e.finish(14);case 22:return e.next=24,B.uploadProfilePic(E,a);case 24:(m=e.sent)&&(console.log(m),200==m.status&&C(Object(w.a)({},k,{profile_pic:m.data.profile_pic})));case 26:case"end":return e.stop()}}),e,null,[[6,10,14,22],[15,,17,21]])})));return function(t){return e.apply(this,arguments)}}()})),r.a.createElement("div",{className:"container",style:{borderBottom:"1px solid rgb(218, 206, 206)"}},r.a.createElement("div",{className:"row pt-2"},r.a.createElement("div",{className:"col-12 mx-auto text-center pt-4"},r.a.createElement("img",{src:k.profile_pic?"https://unnetwork-admin.codewithbogo.in/uploads/user/profile_pic/"+k.profile_pic:"/fig/userIm.png",className:"profilePic"}),r.a.createElement("img",{src:"/fig/edit.png",className:"profilePicEdit",onClick:function(e){e.preventDefault(),d.click()}})),r.a.createElement("div",{className:"col-12 text-center mt-4 mb-2"},r.a.createElement("h5",null,"General Information",r.a.createElement("img",{src:"/fig/edit.png",className:"editprofileBtn",onClick:function(){C(Object(w.a)({},k,{msg:""})),m(!0)}}))))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 text-center mt-1"},r.a.createElement("div",{className:"pt-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 text-left"},"Name"),r.a.createElement("div",{className:"col-8 text-left borderedCol"},k.first_name," ",k.last_name)),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-4 text-left"},"Profession"),r.a.createElement("div",{className:"col-8 text-left borderedCol"},k.profession)),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-4 text-left"},"Address"),r.a.createElement("div",{className:"col-8 text-left borderedCol"},k.address)),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-4 text-left"},"Phone"),r.a.createElement("div",{className:"col-8 text-left borderedCol"},k.phone)),r.a.createElement("div",{className:"row mt-3 borderedCol pb-3"},r.a.createElement("div",{className:"col-4 text-left"},"Mail"),r.a.createElement("div",{className:"col-8 text-left"},k.email))))),r.a.createElement("div",{className:"row borderedCol"},r.a.createElement("div",{className:"col-12 text-center borderCol pt-3 pb-2"},r.a.createElement("h5",null,"Personal Information"," ",r.a.createElement("img",{src:"/fig/edit.png",className:"editprofileBtn",onClick:function(){F({password_1:"",password_2:"",msgP:""}),N(!0)}})))),r.a.createElement("div",{className:"row mt-3 borderedCol pb-3"},r.a.createElement("div",{className:"col-4 text-left"},"Password"),r.a.createElement("div",{className:"col-8 text-left"},"******"))),r.a.createElement(S.a,{"aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:l,onHide:function(){return m(!1)}},r.a.createElement(S.a.Header,{closeButton:!0},r.a.createElement(S.a.Title,null,"Update Profile Details")),r.a.createElement(S.a.Body,null,r.a.createElement("form",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 col-sm-12 mx-auto mb-3"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{className:"form-control",onChange:M("first_name"),value:k.first_name,type:"text",placeholder:"Enter First Name"})),r.a.createElement("div",{className:"col-md-12 col-sm-12 mx-auto mb-3"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{className:"form-control",onChange:M("last_name"),value:k.last_name,type:"text",placeholder:"Enter Last Name"})),r.a.createElement("div",{className:"col-md-12 col-sm-12 mx-auto mb-3"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{className:"form-control",onChange:M("email"),value:k.email,type:"text",readOnly:!0,placeholder:"Enter Email"})),r.a.createElement("div",{className:"col-md-12 col-sm-12 mx-auto mb-3"},r.a.createElement("label",null,"Phone"),r.a.createElement("input",{className:"form-control",onChange:M("phone"),value:k.phone,type:"text",placeholder:"Enter Phone"})),r.a.createElement("div",{className:"col-md-12 col-sm-12 mx-auto mb-3"},r.a.createElement("label",null,"Profession"),r.a.createElement("input",{className:"form-control",onChange:M("profession"),value:k.profession,type:"text",placeholder:"Enter Profession"})),r.a.createElement("div",{className:"col-md-12 col-sm-12 mx-auto mb-3"},r.a.createElement("label",null,"Address"),r.a.createElement("input",{className:"form-control",onChange:M("address"),value:k.address,type:"text",placeholder:"Enter Address"})),r.a.createElement("div",{className:"col-12 mx-auto text-center"},r.a.createElement("span",null,""!=k.msg?k.msg:"")),r.a.createElement("div",{className:"col-md-12 col-sm-12 mx-auto text-right"},r.a.createElement("button",{className:"btn btn-success",onClick:K},"Submit")))))),r.a.createElement(S.a,{"aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:x,onHide:function(){return N(!1)}},r.a.createElement(S.a.Header,{closeButton:!0},r.a.createElement(S.a.Title,null,"Update Password")),r.a.createElement(S.a.Body,null,r.a.createElement("form",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 col-sm-12 mx-auto mb-3"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{className:"form-control",onChange:W("password_1"),value:L.password_1,type:"password",placeholder:"Enter Password"})),r.a.createElement("div",{className:"col-md-12 col-sm-12 mx-auto mb-3"},r.a.createElement("label",null,"Re Enter the Password"),r.a.createElement("input",{className:"form-control",onChange:W("password_2"),value:L.password_2,type:"password",placeholder:"Re Enter the Password"})),r.a.createElement("div",{className:"col-12 mx-auto text-center"},r.a.createElement("span",null,""!=J?J:"")),r.a.createElement("div",{className:"col-md-12 col-sm-12 mx-auto text-right"},r.a.createElement("button",{className:"btn btn-success",onClick:Q},"Submit")))))),r.a.createElement("div",{className:"container row mt-2 mb-3"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("button",{className:"btn btn-danger",onClick:function(){b((function(){t.push("/")}))}},"Sign Out"))))},A=function(){return r.a.createElement(c.a,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/",exact:!0,component:y}),r.a.createElement(l.b,{path:"/signup",exact:!0,component:k}),r.a.createElement(l.b,{path:"/signin",exact:!0,component:C}),r.a.createElement(_,{path:"/user/profile",exact:!0,component:R})))},z=a(15);a.n(z).a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.c10e03eb.chunk.js.map
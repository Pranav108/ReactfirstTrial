(this["webpackJsonpmynew-app"]=this["webpackJsonpmynew-app"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),l=a(15),r=a.n(l),n=(a(22),a(7)),o=(a(23),a(0));function i(e){var t={background:"dark"===e.mode?"#000059":"white",color:"dark"===e.mode?"#41c0ff":"black",border:"dark"===e.mode?"2px solid blue":"2px solid #00ee00",borderRadius:"10px",textAlign:"justify",filter:"invert(0)"};return Object(o.jsxs)("div",{className:"container my-2",children:[Object(o.jsx)("h2",{className:"my-3",style:{color:"dark"===e.mode?"#4ee44e":"black"},children:"Card Infos"}),Object(o.jsxs)("div",{className:"card-group ",children:[Object(o.jsxs)("div",{className:"card mx-1 my-1",style:t,children:[Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title",style:{color:"dark"===e.mode?"#d2f8f8":"black"},children:"Card title 1"}),Object(o.jsx)("p",{className:"card-text",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis doloremque distinctio eaque aspernatur debitis mollitia eius ab quos, veniam, nihil asperiores deserunt optio inventore?"})]}),Object(o.jsx)("div",{className:"card-footer",children:Object(o.jsx)("small",{className:"text-muted",children:"Last updated 3 mins ago"})})]}),Object(o.jsxs)("div",{className:"card mx-1 my-1",style:t,children:[Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title",style:{color:"dark"===e.mode?"#d2f8f8":"black"},children:"Card title 2"}),Object(o.jsx)("p",{className:"card-text",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis doloremque distinctio eaque aspernatur debitis mollitia eius ab quos, veniam, nihil asperiores deserunt optio inventore?"})]}),Object(o.jsx)("div",{className:"card-footer",children:Object(o.jsx)("small",{className:"text-muted",children:"Last updated 3 mins ago"})})]}),Object(o.jsxs)("div",{className:"card mx-1 my-1 ",style:t,children:[Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title",style:{color:"dark"===e.mode?"#d2f8f8":"black"},children:"Card title 3"}),Object(o.jsx)("p",{className:"card-text",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis doloremque distinctio eaque aspernatur debitis mollitia eius ab quos, veniam, nihil asperiores deserunt optio inventore?"})]}),Object(o.jsx)("div",{className:"card-footer",children:Object(o.jsx)("small",{className:"text-muted",children:"Last updated 3 mins ago"})})]})]})]})}var d=a(9);function b(e){var t=Object(c.useState)(""),a=Object(n.a)(t,2),s=a[0],l=a[1];return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),style:{border:"4px double green"},children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)(d.b,{className:"navbar-brand my-0",to:"/",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(d.b,{type:"button",className:"btn btn-outline-info my-1 mx-2",to:"/about","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Created by Pranav",children:e.about})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"," mx-4"),children:[Object(o.jsx)("input",{className:"form-check-input ",onChange:e.toggleFunc,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable ".concat("light"===e.mode?"dark":"light"," mode")})]}),Object(o.jsxs)("form",{className:"d-flex",children:[Object(o.jsx)("input",{className:"form-control me-2",onChange:function(e){l(e.target.value)},value:s,type:"search",placeholder:"Search","aria-label":"Search"}),Object(o.jsx)(d.b,{className:"btn btn-outline-primary",onClick:function(){""===s?e.showAlert("Danger","Oops!!, search-box cannot be empty"):e.showAlert("Primary","Not found : ("),l("")},type:"submit",to:"#",children:"Search"})]})]})]})})}function m(e){var t=Object(c.useState)(""),a=Object(n.a)(t,2),s=a[0],l=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container mb-2",style:{color:"dark"===e.mode?"white":"#053a88"},children:[Object(o.jsx)("h3",{className:"mb-1",children:e.heading}),Object(o.jsx)("div",{className:"mb-2",children:Object(o.jsx)("textarea",{className:"form-control",style:{background:"light"===e.mode?"white":"#02265a",color:"light"===e.mode?"black":"white"},value:s,onChange:function(e){l(e.target.value)},id:"myBox",rows:"9",placeholder:"Enter Some Text here: "})}),Object(o.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=s.toUpperCase();l(t),e.showAlert("Primary","Converted to UpperCase!!")},children:"Convert to UpperCase"}),Object(o.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=s.toLowerCase();l(t),e.showAlert("Info","Converted to LowerCase!!")},children:"Convert to LowerCase"}),Object(o.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){l(s.replace(/\s+/g," ").trim()),e.showAlert("Info","Extra Spaces Removed!!")},children:"Remove Extra Spaces"}),Object(o.jsx)("button",{disabled:0===s.length,className:"btn btn-success mx-1 my-1",onClick:function(){l(""),e.showAlert("Success","Text Cleared : )")},children:"Clear"}),Object(o.jsx)("button",{disabled:0===s.length,className:"btn btn-success mx-1 my-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),document.getSelection().removeAllRanges(),e.showAlert("Success","Text Copied!!")},children:"Copy"})]}),Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#053a88"},children:[Object(o.jsx)("h4",{children:"My text summary: "}),Object(o.jsxs)("p",{children:["word count: ",s.split(/\s+/).filter((function(e){return 0!==e.length})).length,Object(o.jsx)("br",{}),"character count: ",s.length]})]})]})}function j(e){return Object(o.jsx)("div",{className:"my-1",style:{height:"50px"},children:e.myAlert&&Object(o.jsx)("div",{className:"",children:Object(o.jsx)("div",{className:"py-2 px-2 alert alert- alert-".concat(e.myAlert.type.toLowerCase()," fade show"),role:"alert",children:e.myAlert.message})})})}b.defaultProps={title:"defaultTitle",about:"defaultAbout"};var u=a(2);var h=function(){var e=Object(c.useState)(null),t=Object(n.a)(e,2),a=t[0],s=t[1],l=function(e,t){s({message:t,type:e}),setTimeout((function(){s(null)}),2e3)},r=Object(c.useState)("light"),h=Object(n.a)(r,2),x=h[0],p=h[1];return Object(o.jsxs)(d.a,{children:[Object(o.jsx)(b,{title:"Text-Utils",about:"About us",toggleFunc:function(){"light"===x?(p("dark"),document.body.style.backgroundColor="#053a88",document.title="MyApp - Dark Mode"):(p("light"),document.body.style.backgroundColor="white",document.title="MyApp - Light Mode")},mode:x,showAlert:l}),Object(o.jsxs)("div",{className:"container mb-2",children:[Object(o.jsx)(j,{myAlert:a}),Object(o.jsxs)(u.c,{children:[Object(o.jsx)(u.a,{exact:!0,path:"/about",children:Object(o.jsx)(i,{mode:x})}),Object(o.jsx)(u.a,{exact:!0,path:"/",children:Object(o.jsx)(m,{heading:"Enter some text below: ",mode:x,showAlert:l})})]})]})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),l(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),x()}},[[30,1,2]]]);
//# sourceMappingURL=main.171bf460.chunk.js.map
(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{43:function(e,n,t){"use strict";t.r(n);var r=t(19),c=t.n(r),o=t(3),a=t(2),i=t(5),s=t.n(i),u="/api/persons",d={getAll:function(){return s.a.get(u).then((function(e){return e.data}))},create:function(e){return s.a.post(u,e).then((function(e){return e.data}))},update:function(e,n){return s.a.put("".concat(u,"/").concat(e),n).then((function(e){return e.data}))},remove:function(e){return s.a.delete("".concat(u,"/").concat(e))}},b=t(0),f=function(e){var n=e.onChange;return Object(b.jsxs)("div",{children:["filter shown with ",Object(b.jsx)("input",{onChange:function(e){return n(e.target.value)}})]})},l=t(10),j=function(e){var n=e.persons,t=e.setPersons,r=e.sendNotification,c=Object(a.useState)(""),i=Object(o.a)(c,2),s=i[0],u=i[1],f=Object(a.useState)(""),j=Object(o.a)(f,2),h=j[0],p=j[1];return Object(b.jsxs)("form",{onSubmit:function(e){var c={name:s,number:h};if(e.preventDefault(),n.some((function(e){return e.name===s}))){if(window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))){var o=n.find((function(e){return e.name===s})).id;d.update(o,c).then((function(e){t([].concat(Object(l.a)(n.filter((function(e){return e.id!==o}))),[e])),r("Updated ".concat(e.name),"success")}))}}else d.create(c).then((function(e){t([].concat(Object(l.a)(n),[e])),r("Added ".concat(e.name),"success")}));u(""),p("")},children:[Object(b.jsxs)("div",{children:["name:"," ",Object(b.jsx)("input",{onChange:function(e){return u(e.target.value)},value:s})]}),Object(b.jsxs)("div",{children:["number:"," ",Object(b.jsx)("input",{onChange:function(e){return p(e.target.value)},value:h})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",children:"add"})})]})},h=function(e){var n=e.persons,t=e.filter,r=void 0===t?"":t,c=e.setPersons,o=e.sendNotification,a=n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return Object(b.jsx)("div",{children:a.map((function(e){return Object(b.jsxs)("p",{children:[e.name," ",e.number," ",Object(b.jsx)("button",{onClick:function(){window.confirm("Delete ".concat(e.name,"?"))&&(d.remove(e.id).catch((function(){return o("Information of ".concat(e.name," has already been removed from server"),"error")})),c(n.filter((function(n){return n.id!==e.id}))),o("Removed ".concat(e.name),"success"))},children:"delete"})]},e.name)}))})},p=function(e){var n=e.message;if(null===n)return null;var t={};switch(n.type){case"success":t={color:"green",backgroundColor:"#bbb",padding:"10px",margin:"20px 0",border:"2px solid green",borderRadius:"5px",fontSize:"24px",fontFamily:"sans-serif"};break;case"error":t={color:"red",backgroundColor:"#bbb",padding:"10px",margin:"20px 0",border:"2px solid red",borderRadius:"5px",fontSize:"24px",fontFamily:"sans-serif"}}return Object(b.jsx)("div",{style:t,children:n.text})},m=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(null),i=Object(o.a)(c,2),s=i[0],u=i[1],l=function(e,n){u({text:e,type:n}),setTimeout((function(){return u(null)}),3e3)};Object(a.useEffect)((function(){d.getAll().then((function(e){return r(e)}))}),[]);var m=Object(a.useState)(""),O=Object(o.a)(m,2),x=O[0],v=O[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsx)(p,{message:s}),Object(b.jsx)(f,{onChange:v}),Object(b.jsx)("h3",{children:"add a new"}),Object(b.jsx)(j,{persons:t,setPersons:r,sendNotification:l}),Object(b.jsx)("h3",{children:"Numbers"}),Object(b.jsx)(h,{persons:t,filter:x,setPersons:r,sendNotification:l})]})};c.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.b728a053.chunk.js.map
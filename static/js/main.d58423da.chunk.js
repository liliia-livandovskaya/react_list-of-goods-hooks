(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var c,s=n(4),o=n.n(s),l=n(2),a=n(1),r=(n(9),n(0)),i=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.Length=0]="Length",t[t.Alphabet=1]="Alphabet",t[t.Default=2]="Default"}(c||(c={}));var b=function(){var t=Object(a.useState)(!1),e=Object(l.a)(t,2),n=e[0],s=e[1],o=Object(a.useState)(!1),b=Object(l.a)(o,2),u=b[0],j=b[1],h=Object(a.useState)(c.Default),d=Object(l.a)(h,2),p=d[0],O=d[1],x=Object(a.useState)(1),m=Object(l.a)(x,2),f=m[0],g=m[1],v=[].concat(i),N=v.filter((function(t){return t.length>=f}));switch(p){case c.Alphabet:N.sort((function(t,e){return t.localeCompare(e)}));break;case c.Length:N.sort((function(t,e){return t.length-e.length}))}return u&&N.reverse(),Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("div",{className:"container",children:[!n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"Press the button to start"}),Object(r.jsx)("button",{className:"btn btn-success",type:"button",onClick:function(){s(!0)},children:"Start"})]}),n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"Goods List: "}),Object(r.jsx)("ul",{className:"list-group list-group-flush",children:N.map((function(t){return Object(r.jsx)("li",{className:"list-group-item",children:t},t)}))}),Object(r.jsxs)("div",{className:"button",children:[Object(r.jsx)("button",{className:"btn btn-warning",type:"button",onClick:function(){j(!u)},children:"Reverse"}),Object(r.jsx)("button",{className:"btn btn-danger",type:"button",onClick:function(){j(!1),g(1)},children:"Reset"}),Object(r.jsx)("button",{type:"button",onClick:function(){return O(c.Alphabet)},className:"btn btn-primary",children:"Sort alphabetically"}),Object(r.jsx)("button",{type:"button",onClick:function(){return O(c.Length)},className:"btn btn-info",children:"Sort by length"}),Object(r.jsxs)("select",{className:"form-select",value:f,onChange:function(t){var e,n=t.target;e=Number(n.value),g(e)},children:[Object(r.jsx)("option",{value:"1",children:"1"}),Object(r.jsx)("option",{value:"2",children:"2"}),Object(r.jsx)("option",{value:"3",children:"3"}),Object(r.jsx)("option",{value:"4",children:"4"}),Object(r.jsx)("option",{value:"5",children:"5"}),Object(r.jsx)("option",{value:"6",children:"6"}),Object(r.jsx)("option",{value:"7",children:"7"}),Object(r.jsx)("option",{value:"8",children:"8"}),Object(r.jsx)("option",{value:"9",children:"9"}),Object(r.jsx)("option",{value:"10",children:"10"})]})]})]})]})})};o.a.render(Object(r.jsx)(b,{}),document.getElementById("root"))},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.d58423da.chunk.js.map
(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n.n(a),i=n(2),o=n(1),s=(n(9),n(14)),u=(n(10),n(0)),l=function(e){var t=e.total,n=e.perPage,a=void 0===n?5:n,c=e.page,l=void 0===c?1:c,r=e.onPageChange,b=e.prevPage,j=e.nextPage,p=Object(o.useState)(!0),d=Object(i.a)(p,2),h=d[0],g=d[1],O=Object(o.useState)(!1),f=Object(i.a)(O,2),v=f[0],m=f[1],x=l,_=Math.ceil(t/a),N=Object(o.useMemo)((function(){return function(e,t){for(var n=[],a=Math.max(2,e-1);a<=Math.min(t-1,e+1);a+=1)n.push(a);return e-1>2&&n.unshift("..."),e+1<t-1&&n.push("..."),n.unshift(1),1!==t&&n.push(t),n.map((function(e){return{value:e,id:Object(s.a)()}}))}(x,_)}),[l,t,a]);return Object(o.useEffect)((function(){l===N[N.length-1].value?m(!0):m(!1),g(!(l>1))}),[l]),Object(u.jsxs)("div",{className:"pagination",children:[Object(u.jsx)("p",{className:"pagination__title",children:"".concat(1+a*(l-1)," - ").concat("".concat(a*l>t?t:a*l)," of ").concat(t)}),Object(u.jsxs)("div",{className:"pagination__buttons",children:[Object(u.jsx)("button",{type:"button",onClick:b,disabled:h,className:"pagination__button",children:"\xab"}),Object(u.jsx)("div",{className:"pagination__buttons-pages",children:N.map((function(e){return"..."===e.value?Object(u.jsx)("p",{className:"pagination__buttons-dots",children:e.value},e.id):Object(u.jsx)("button",{type:"button",style:l===e.value?{backgroundColor:"#ff784f"}:{},onClick:function(){return r(+e.value)},className:"pagination__button",children:e.value},e.id)}))}),Object(u.jsx)("button",{type:"button",onClick:j,disabled:v,className:"pagination__button",children:"\xbb"})]})]})};l.defaultProps={perPage:5,page:1};var r=function(){var e=Object(o.useState)(1),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(o.useState)(5),s=Object(i.a)(c,2),r=s[0],b=s[1];return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)("h1",{className:"app__title",children:"Pagination"}),Object(u.jsx)(l,{total:42,perPage:r,page:n,onPageChange:function(e){a(e)},prevPage:function(){a((function(e){return e-1}))},nextPage:function(){a((function(e){return e+1}))}}),Object(u.jsx)("form",{method:"get",children:Object(u.jsxs)("label",{className:"app__label",children:["Items on the page:",Object(u.jsxs)("select",{value:r,onChange:function(e){var t=e.target;b(+t.value),a(1)},className:"app__select",children:[Object(u.jsx)("option",{value:"3",children:"3"}),Object(u.jsx)("option",{value:"5",children:"5"}),Object(u.jsx)("option",{value:"10",children:"10"}),Object(u.jsx)("option",{value:"20",children:"20"})]})]})})]})};c.a.render(Object(u.jsx)(r,{}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.6465b99c.chunk.js.map
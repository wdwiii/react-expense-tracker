(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(9),l=n.n(c),s=(n(15),n(5)),i=n(2),r=(n(16),n(8),n(0)),u=function(e){var t="card "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})},j=(n(18),function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{value:e.selected,onChange:function(t){var n=t.target.value;e.onChangeFilter(n)},children:[Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"})]})]})})}),o=(n(19),n(20),n(21),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__year",children:a}),Object(r.jsx)("div",{className:"expense-date__day",children:n})]})}),d=function(e){return Object(r.jsx)("li",{children:Object(r.jsxs)(u,{className:"expense-item",children:[Object(r.jsx)(o,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})},b=function(e){return 0===e.items.length?Object(r.jsx)("h2",{className:"expenses-list__fallback",children:"No expenses found"}):Object(r.jsxs)("ul",{className:"expenses-list",children:[e.items.map((function(e){return Object(r.jsx)(d,{title:e.title,amount:e.amount,date:e.date},e.id)})),";"]})},x=n(10),O=(n(22),n(23),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),v=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(s.a)(t));return Object(r.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(r.jsx)(O,{value:e.value,maxValue:n,label:e.label},e.label)}))})},h=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(x.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(r.jsx)(v,{dataPoints:n})},m=function(e){var t=Object(a.useState)("2020"),n=Object(i.a)(t,2),c=n[0],l=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(r.jsxs)(u,{className:"expenses",children:[Object(r.jsx)(j,{selected:c,onChangeFilter:function(e){l(e)}}),Object(r.jsx)(h,{expenses:s}),Object(r.jsx)(b,{items:s})]})},p=n(7),f=(n(24),n(25),function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],l=n[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),j=u[0],o=u[1],d=Object(a.useState)(""),b=Object(i.a)(d,2),x=b[0],O=b[1];return Object(r.jsx)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:+j,date:new Date(x)};e.onSaveExpenseData(n),l(""),o(""),O("")},children:Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{type:"text",value:c,onChange:function(e){l(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Amount"}),Object(r.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:j,onChange:function(e){o(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:x,onChange:function(e){O(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__actions",children:[Object(r.jsx)("button",{type:"button",onClick:e.endEditingMode,children:"Cancel"}),Object(r.jsx)("button",{type:"submit",children:"Submit"})]})]})})}),N=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],l=n[1];return Object(r.jsxs)("div",{className:"new-expense",children:[!c&&Object(r.jsx)("button",{onClick:function(){l(!0)},children:"Add New Expense"}),c&&Object(r.jsx)(f,{onSaveExpenseData:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),l(!1)},endEditingMode:function(){l(!1)}})]})},_=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,6)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)},{id:"e5",title:"PlayStation 5",amount:499.95,date:new Date(2021,1,23)}];var g=function(){var e=Object(a.useState)(_),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(N,{onAddExpense:function(e){c((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(r.jsx)(m,{items:n})]})};l.a.render(Object(r.jsx)(g,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.1cecfc87.chunk.js.map
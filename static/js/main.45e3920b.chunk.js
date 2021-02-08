(this["webpackJsonplearning-resources"]=this["webpackJsonplearning-resources"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(7),i=n.n(s),o=(n(17),n(3)),l=(n.p,n(18),n(19),n(10)),a=n.n(l),j=n(1),u=function(e){return Object(j.jsx)("div",{class:"Sidebar",children:Object(j.jsx)("div",{onClick:e.clicked,children:Object(j.jsx)(a.a,{style:{fontSize:30}})})})},d=n(5),f=n(4),b=n.n(f),O=n(8),h=(n(30),function(e){return Object(j.jsxs)("div",{className:"Activity",onClick:function(){return e.select(e.index)},children:[Object(j.jsx)("h2",{children:e.title}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Timeframe: "})," ",e.timeframe]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Topics: "})," ",e.topics.map((function(t,n){return n!==e.topics.length-1?Object(j.jsxs)("span",{children:[t,", "]}):Object(j.jsx)("span",{children:t})}))]})]})}),m=(n(31),function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),r=n[0],s=n[1];return Object(j.jsxs)("div",{className:"Question",children:[Object(j.jsx)("div",{className:"title",children:Object(j.jsx)("h2",{children:e.title})}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:"Question:"})}),Object(j.jsx)("p",{dangerouslySetInnerHTML:{__html:e.question}})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:"Answer:"})}),r?Object(j.jsx)("p",{dangerouslySetInnerHTML:{__html:e.answer}}):Object(j.jsx)("p",{className:"reveal",onClick:function(){s(!r)},children:"Click to reveal answer."})]})]})]})}),x=(n(32),function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(null),l=Object(o.a)(i,2),a=l[0],u=l[1];Object(c.useEffect)((function(){(function(){var e=Object(O.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("activities.json");case 2:return t=e.sent,e.t0=s,e.next=6,t.json();case 6:return e.t1=e.sent.activities,e.next=9,(0,e.t0)(e.t1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){e.onBack&&(u(null),e.clicked(!1))}));var f=function(e){u(r[e])};return Object(j.jsxs)("div",{className:"Main",children:[Object(j.jsx)("header",{children:Object(j.jsx)("h1",{children:a?a.title:"Activities"})}),Object(j.jsx)("main",{children:a?a.questions.map((function(e){return Object(j.jsx)(m,Object(d.a)({},e))})):r.map((function(e,t){return Object(j.jsx)(h,Object(d.a)(Object(d.a)({},e),{},{index:t,select:f}))}))})]})}),p=(n(33),function(e){return Object(j.jsxs)("div",{className:"Helper",children:[Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:e.title})}),e.content.map((function(e){return Object(j.jsx)("p",{dangerouslySetInnerHTML:{__html:e}})}))]})}),v=(n(34),function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),i=Object(o.a)(s,2),l=i[0],a=i[1];Object(c.useEffect)((function(){(function(){var e=Object(O.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("helpers.json");case 2:return t=e.sent,e.t0=r,e.next=6,t.json();case 6:e.t1=e.sent.helpers,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(j.jsxs)("div",{className:"Helpers",children:[Object(j.jsx)("div",{class:"theme",children:Object(j.jsxs)("p",{onClick:function(){l?(a(!1),document.documentElement.style.setProperty("--color-background","#ffffff"),document.documentElement.style.setProperty("--color-dark","#000000"),document.documentElement.style.setProperty("--color-light","#ffffff"),document.documentElement.style.setProperty("--large-shadow","0px 32px 53px rgba(17, 17, 17, 0.08)"),document.documentElement.style.setProperty("--hover-color","#ffffff")):(a(!0),document.documentElement.style.setProperty("--color-background","#121212"),document.documentElement.style.setProperty("--color-dark","#fefae0"),document.documentElement.style.setProperty("--color-light","#121212"),document.documentElement.style.setProperty("--large-shadow",""),document.documentElement.style.setProperty("--hover-color","#1a1a1a"))},children:["Toggle ",l?"Light":"Dark"," Theme"]})}),n.map((function(e){return Object(j.jsx)(p,Object(d.a)({},e))}))]})});var y=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],s=function(e){r(e)};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u,{clicked:s}),Object(j.jsx)(x,{onBack:n,clicked:s}),Object(j.jsx)(v,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),g()}},[[36,1,2]]]);
//# sourceMappingURL=main.45e3920b.chunk.js.map
(this.webpackJsonpquote=this.webpackJsonpquote||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),s=c(4),o=c.n(s),r=(c(9),c(10),c(2)),u=c(0),b=function(t){return Math.floor(Math.random()*(t.length-1))};function j(){var t=Object(n.useState)(""),e=Object(r.a)(t,2),c=e[0],a=e[1],s=Object(n.useState)(""),o=Object(r.a)(s,2),j=o[0],i=o[1],f=Object(n.useState)(""),h=Object(r.a)(f,2),l=h[0],O=h[1],d=Object(n.useState)(""),m=Object(r.a)(d,2),p=m[0],x=m[1],g=Object(n.useState)(""),v=Object(r.a)(g,2),N=v[0],q=v[1];Object(n.useEffect)((function(){var t;t=a,fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json",{method:"GET"}).then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){return console.log(t)}))}),[]),Object(n.useEffect)((function(){if(c){var t=c[b(c)],e=t.quote,n=t.author;O(e),q(n)}}),[c]);return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("p",{className:"title",children:[Object(u.jsx)("strong",{children:" Cytat:  "})," "]}),Object(u.jsxs)("p",{className:"quote",children:['"',l,'"']}),Object(u.jsx)("p",{className:"author",children:N}),Object(u.jsx)("button",{className:"btn",onClick:function(){j&&(O(j),q(p),i(""),x(""))},children:" Poprzedni cytat"}),Object(u.jsx)("button",{className:"btn",onClick:function(){i(l),x(N);var t=c[b(c)];O(t.quote),q(t.author)},children:" Nast\u0119pny cytat"})]})}var i=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(j,{})})};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(i,{})}),document.getElementById("root"))},9:function(t,e,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.0767697c.chunk.js.map
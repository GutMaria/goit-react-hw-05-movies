"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[733],{153:function(e,t,n){n.d(t,{Df:function(){return i},Jh:function(){return c},TP:function(){return s},bp:function(){return a},qF:function(){return o}});var r=n(340).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"81d6e128f8a4d2c60463e2d702c665ef"}}),i=function(){return r.get("/trending/movie/day")},s=function(e){return r.get("/movie/".concat(e))},a=function(e){return r.get("/movie/".concat(e,"/credits"))},c=function(e){return r.get("/movie/".concat(e,"/reviews"))},o=function(e){return r.get("/search/movie?query=".concat(e))}},733:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(861),i=n(439),s=n(757),a=n.n(s),c=n(791),o=n(689),l=n(87),d=n(153),u="movie-details-page_wrapper__F9OaZ",h="movie-details-page_details__ERByP",v="movie-details-page_text__md5xb",p="movie-details-page_goBackLink__aRiFa",m=n(184),f=function(){var e,t,n,s=(0,c.useState)({}),f=(0,i.Z)(s,2),x=f[0],g=f[1],j=(0,c.useState)(!1),_=(0,i.Z)(j,2),w=_[0],k=_[1],b=(0,c.useState)(null),y=(0,i.Z)(b,2),F=y[0],N=y[1],U=(0,o.UO)().id;(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,(0,d.TP)(U);case 4:t=e.sent,n=t.data,g(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),N(e.t0.message);case 12:return e.prev=12,k(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[U]);var Z=null===(e=x.genres)||void 0===e?void 0:e.map((function(e){return(0,m.jsx)("li",{className:v,children:e.name},e.id)})),O="https://image.tmdb.org/t/p/w500"+x.poster_path,S=null!==(t=null===(n=(0,o.TH)().state)||void 0===n?void 0:n.from)&&void 0!==t?t:"/";return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.rU,{to:S,className:p,children:"GO BACK"}),w&&(0,m.jsx)("p",{children:"...Loading"}),F&&(0,m.jsx)("p",{children:"Oops... something went wrong, try again!"}),x&&!w&&!F&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:u,children:[(0,m.jsx)("img",{src:O,alt:x.title}),(0,m.jsxs)("div",{className:h,children:[(0,m.jsx)("h2",{children:x.title}),(0,m.jsxs)("p",{className:v,children:["User Score: ",(10*x.vote_average).toFixed(1),"%"]}),(0,m.jsx)("h3",{children:"Overview:"}),(0,m.jsx)("p",{className:v,children:x.overview}),(0,m.jsx)("h3",{children:"Genres:"}),(0,m.jsx)("ul",{children:Z})]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h4",{children:"Additional information"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(l.rU,{to:"cast",state:{from:S},children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(l.rU,{to:"reviews",state:{from:S},children:"Reviews"})})]})]}),(0,m.jsx)(c.Suspense,{fallback:(0,m.jsx)("p",{children:"...Loading page"}),children:(0,m.jsx)(o.j3,{})})]})]})}}}]);
//# sourceMappingURL=733.62499d22.chunk.js.map
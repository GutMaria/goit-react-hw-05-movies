"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[733],{153:function(e,t,n){n.d(t,{Df:function(){return i},Jh:function(){return c},TP:function(){return a},bp:function(){return s},qF:function(){return o}});var r=n(340).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"81d6e128f8a4d2c60463e2d702c665ef"}}),i=function(){return r.get("/trending/movie/day")},a=function(e){return r.get("/movie/".concat(e))},s=function(e){return r.get("/movie/".concat(e,"/credits"))},c=function(e){return r.get("/movie/".concat(e,"/reviews"))},o=function(e){return r.get("/search/movie?query=".concat(e))}},733:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(861),i=n(439),a=n(757),s=n.n(a),c=n(791),o=n(689),l=n(87),d=n(153),u="movie-details-page_wrapper__F9OaZ",h="movie-details-page_details__ERByP",p="movie-details-page_text__md5xb",f="movie-details-page_goBackLink__aRiFa",v=n(377),m=n(184),x=function(){var e,t,n,a=(0,c.useState)({}),x=(0,i.Z)(a,2),g=x[0],j=x[1],_=(0,c.useState)(!1),w=(0,i.Z)(_,2),b=w[0],k=w[1],y=(0,c.useState)(null),F=(0,i.Z)(y,2),N=F[0],U=F[1],Z=(0,o.UO)().id;(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,(0,d.TP)(Z);case 4:t=e.sent,n=t.data,j(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),U(e.t0.message);case 12:return e.prev=12,k(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[Z]);var O=null===(e=g.genres)||void 0===e?void 0:e.map((function(e){return(0,m.jsx)("li",{className:p,children:e.name},e.id)})),S=g.poster_path?"https://image.tmdb.org/t/p/w500"+g.poster_path:v,C=null!==(t=null===(n=(0,o.TH)().state)||void 0===n?void 0:n.from)&&void 0!==t?t:"/";return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.rU,{to:C,className:f,children:"GO BACK"}),b&&(0,m.jsx)("p",{children:"...Loading"}),N&&(0,m.jsx)("p",{children:"Oops... something went wrong, try again!"}),g&&!b&&!N&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:u,children:[(0,m.jsx)("img",{src:S,alt:g.title}),(0,m.jsxs)("div",{className:h,children:[(0,m.jsx)("h2",{children:g.title}),(0,m.jsxs)("p",{className:p,children:["User Score: ",(10*g.vote_average).toFixed(1),"%"]}),(0,m.jsx)("h3",{children:"Overview:"}),(0,m.jsx)("p",{className:p,children:g.overview}),(0,m.jsx)("h3",{children:"Genres:"}),(0,m.jsx)("ul",{children:O})]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h4",{children:"Additional information"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(l.rU,{to:"cast",state:{from:C},children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(l.rU,{to:"reviews",state:{from:C},children:"Reviews"})})]})]}),(0,m.jsx)(c.Suspense,{fallback:(0,m.jsx)("p",{children:"...Loading page"}),children:(0,m.jsx)(o.j3,{})})]})]})}},377:function(e,t,n){e.exports=n.p+"static/media/defaultPoster.2b16eabf4b20d9b128b5.jpg"}}]);
//# sourceMappingURL=733.fc43bcfc.chunk.js.map
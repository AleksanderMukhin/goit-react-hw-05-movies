"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[884],{610:function(e,r,n){n.d(r,{Aj:function(){return s},yK:function(){return o},yO:function(){return p},z1:function(){return i}});var t=n(861),c=n(757),a=n.n(c),u={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzAwNGViNTJkYTE4NDRjODU4YjE1MzdlYzk1YTk5ZiIsInN1YiI6IjY0OGFkN2JlNDJiZjAxMDEwMWJjYjVlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x090TXHYahh2QUQ1L2zsDvYpVzC9FYM2zQzILJ2OICE"}},s=function(){var e=(0,t.Z)(a().mark((function e(){var r,n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",u);case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.next=9,n.results;case 9:return t=e.sent,e.abrupt("return",t);case 13:return e.prev=13,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(a().mark((function e(r){var n,t,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(r,"&include_adult=false&language=en-US&page=1"),u);case 3:return n=e.sent,e.next=6,n.json();case 6:return t=e.sent,e.next=9,t.results;case 9:return c=e.sent,e.abrupt("return",c);case 13:return e.prev=13,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(a().mark((function e(r){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"?language=en-US"),u);case 3:return n=e.sent,e.next=6,n.json();case 6:return t=e.sent,e.abrupt("return",t);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(a().mark((function e(r){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"/credits?language=en-US"),u);case 3:return n=e.sent,e.next=6,n.json();case 6:return t=e.sent,e.abrupt("return",t.cast);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}()},884:function(e,r,n){n.r(r);var t=n(861),c=n(439),a=n(757),u=n.n(a),s=n(791),i=n(87),o=n(689),p=n(329),h=n(610),l=n(184);r.default=function(){var e=(0,s.useState)({}),r=(0,c.Z)(e,2),n=r[0],a=r[1],v=(0,p.F)(),f=v.movieId,d=v.BASE_URL;(0,s.useEffect)((function(){var e=function(){var e=(0,t.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.yK)(f);case 2:r=e.sent,a(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();f&&e()}),[f]);var x=n.title,j=n.poster_path,m=n.original_title,w=n.vote_average,g=n.overview,b=n.genres;return j&&(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:"".concat(d).concat(j),alt:m}),(0,l.jsx)("h2",{children:x}),(0,l.jsxs)("p",{children:["Users score: ",Math.round(10*w),"%"]}),(0,l.jsx)("h3",{children:"Overview"}),(0,l.jsx)("p",{children:g}),(0,l.jsx)("h3",{children:"Genres"}),(0,l.jsx)("ul",{children:b.map((function(e){var r=e.name,n=e.id;return(0,l.jsx)("li",{children:r},n)}))}),(0,l.jsxs)("nav",{children:["Additional information",(0,l.jsx)(i.OL,{to:"cast",children:"Cast"}),(0,l.jsx)(i.OL,{children:"Reviews"})]}),(0,l.jsx)(s.Suspense,{children:(0,l.jsx)(o.j3,{})})]})}},861:function(e,r,n){function t(e,r,n,t,c,a,u){try{var s=e[a](u),i=s.value}catch(o){return void n(o)}s.done?r(i):Promise.resolve(i).then(t,c)}function c(e){return function(){var r=this,n=arguments;return new Promise((function(c,a){var u=e.apply(r,n);function s(e){t(u,c,a,s,i,"next",e)}function i(e){t(u,c,a,s,i,"throw",e)}s(void 0)}))}}n.d(r,{Z:function(){return c}})}}]);
//# sourceMappingURL=884.66d24f42.chunk.js.map
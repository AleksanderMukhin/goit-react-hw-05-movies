"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[884],{610:function(e,r,n){n.d(r,{Aj:function(){return s},Jh:function(){return l},yK:function(){return i},yO:function(){return p},z1:function(){return o}});var t=n(861),c=n(757),a=n.n(c),u={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzAwNGViNTJkYTE4NDRjODU4YjE1MzdlYzk1YTk5ZiIsInN1YiI6IjY0OGFkN2JlNDJiZjAxMDEwMWJjYjVlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x090TXHYahh2QUQ1L2zsDvYpVzC9FYM2zQzILJ2OICE"}},s=function(){var e=(0,t.Z)(a().mark((function e(){var r,n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",u);case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.next=9,n.results;case 9:return t=e.sent,e.abrupt("return",t);case 13:return e.prev=13,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(a().mark((function e(r){var n,t,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(r,"&include_adult=false&language=en-US&page=1"),u);case 3:return n=e.sent,e.next=6,n.json();case 6:return t=e.sent,e.next=9,t.results;case 9:return c=e.sent,e.abrupt("return",c);case 13:return e.prev=13,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(a().mark((function e(r){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"?language=en-US"),u);case 3:return n=e.sent,e.next=6,n.json();case 6:return t=e.sent,e.abrupt("return",t);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(a().mark((function e(r){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"/credits?language=en-US"),u);case 3:return n=e.sent,e.next=6,n.json();case 6:return t=e.sent,e.abrupt("return",t.cast);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(a().mark((function e(r){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?language=en-US&page=1"),u);case 3:return n=e.sent,e.next=6,n.json();case 6:return t=e.sent,e.abrupt("return",t.results);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}()},884:function(e,r,n){n.r(r);var t=n(861),c=n(439),a=n(757),u=n.n(a),s=n(791),o=n(689),i=n(87),p=n(329),l=n(610),h=n(184);r.default=function(){var e,r,n=(0,s.useState)({}),a=(0,c.Z)(n,2),v=a[0],f=a[1],d=(0,p.F)(),x=d.movieId,j=d.BASE_URL,m=(0,o.TH)();console.log(m);var g=(0,s.useRef)(null!==(e=null===(r=m.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/");(0,s.useEffect)((function(){var e=function(){var e=(0,t.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.yK)(x);case 2:r=e.sent,f(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();x&&e()}),[x]);var w=v.title,b=v.poster_path,y=v.original_title,k=v.vote_average,I=v.overview,J=v.genres;return b&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.OL,{to:g.current,children:"Back movies"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:"".concat(j).concat(b),alt:y}),(0,h.jsx)("h2",{children:w}),(0,h.jsxs)("p",{children:["Users score: ",Math.round(10*k),"%"]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:I}),(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("ul",{children:J&&J.map((function(e){var r=e.name,n=e.id;return(0,h.jsx)("li",{children:r},n)}))}),(0,h.jsxs)("nav",{children:["Additional information",(0,h.jsx)(i.OL,{to:"cast",children:"Cast"}),(0,h.jsx)(i.OL,{to:"rewiews",children:"Reviews"})]}),(0,h.jsx)(s.Suspense,{children:(0,h.jsx)(o.j3,{})})]})]})}},861:function(e,r,n){function t(e,r,n,t,c,a,u){try{var s=e[a](u),o=s.value}catch(i){return void n(i)}s.done?r(o):Promise.resolve(o).then(t,c)}function c(e){return function(){var r=this,n=arguments;return new Promise((function(c,a){var u=e.apply(r,n);function s(e){t(u,c,a,s,o,"next",e)}function o(e){t(u,c,a,s,o,"throw",e)}s(void 0)}))}}n.d(r,{Z:function(){return c}})}}]);
//# sourceMappingURL=884.4c72d254.chunk.js.map
(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[3],{30:function(t,e,r){t.exports=r(31)},31:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(C){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return R()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=T(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?p:d,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(C){return{type:"throw",arg:C}}}t.wrap=s;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",y={};function g(){}function v(){}function b(){}var m={};m[i]=function(){return this};var O=Object.getPrototypeOf,j=O&&O(O(_([])));j&&j!==r&&n.call(j,i)&&(m=j);var x=b.prototype=g.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function T(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,T(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function _(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:R}}function R(){return{value:e,done:!0}}return v.prototype=x.constructor=b,b.constructor=v,v.displayName=u(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),u(x,c,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:_(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},32:function(t,e,r){},34:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.r(e),r.d(e,"default",(function(){return S}));var a=r(6),c=function(t){var e=t.data;return Object(a.jsxs)("table",{style:u.table,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{style:u.head,children:[Object(a.jsx)("th",{style:i(i({},u.number),u.borderBottom),children:"#"}),Object(a.jsx)("th",{style:i(i({},u.title),u.borderBottom),children:"Title"}),Object(a.jsx)("th",{style:i(i({},u.completed),u.borderBottom),children:"Completed"})]})}),Object(a.jsx)("tbody",{children:e.map((function(t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{style:i(i({},u.number),u.borderBottom),children:t.id}),Object(a.jsx)("td",{style:u.borderBottom,children:t.title}),Object(a.jsx)("td",{style:u.borderBottom,children:t.completed.toString()})]},t.id)}))})]})},u={table:{width:"100%",marginTop:"20px",marginBottom:"20px",border:"1px solid lightgray"},head:{textAlign:"left"},borderBottom:{borderBottom:"1px solid lightgray"},number:{width:"5%",padding:"20px 10px"},title:{width:"80%"},completed:{width:"10%",paddingRight:"10px"}},s=r(0);function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function f(t,e){if(t){if("string"===typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,e):void 0}}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(t,e)||f(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=r(30),p=r.n(h);function y(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function g(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){y(i,n,o,a,c,"next",t)}function c(t){y(i,n,o,a,c,"throw",t)}a(void 0)}))}}var v={isError:!1,isLoading:!0,todos:[],filteredTodos:[],paginatedTodos:[]},b=function(t,e){switch(e.type){case"TODOS_LOADING":return i(i({},t),{},{isLoading:!0,isError:!1});case"RETURN_TODOS":return i(i({},t),{},{isLoading:!1,todos:e.payload});case"PAGINATE_TODOS":return i(i({},t),{},{isLoading:!1,paginatedTodos:e.payload});case"FILTER_TODOS":return i(i({},t),{},{isLoading:!1,filteredTodos:e.payload});case"TODOS_ERROR":return i(i({},t),{},{isError:!0});default:throw new Error("Not recognized action type in todosReducer! Typo?")}},m=function(){var t=d(Object(s.useReducer)(b,v),2),e=t[0],r=t[1],n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={isError:!1,isLoading:!0,data:void 0},n=function(t,e){switch(e.type){case"FETCH_PENDING":return i(i({},t),{},{isLoading:!0,isError:!1});case"FETCH_SUCCESS":return i(i({},t),{},{isLoading:!1,data:e.payload});case"FETCH_ERROR":return i(i({},t),{},{isLoading:!1,isError:!0});default:throw new Error("Not recognized action type in fetchReducer! Typo?")}},o=d(Object(s.useReducer)(n,r),2),a=o[0],c=o[1];return Object(s.useEffect)((function(){if(!t)throw new Error("Please, provide an endpoint in order to use this hook!");!function(){var r=g(p.a.mark((function r(){var n,o;return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c({type:"FETCH_PENDING"}),r.prev=1,r.next=4,fetch(t,e);case 4:if((n=r.sent).ok){r.next=8;break}throw c({type:"FETCH_ERROR"}),new Error(n.statusText);case 8:return r.next=10,n.json();case 10:o=r.sent,c({type:"FETCH_SUCCESS",payload:o}),r.next=18;break;case 14:throw r.prev=14,r.t0=r.catch(1),c({type:"FETCH_ERROR"}),new Error(r.t0.message);case 18:case"end":return r.stop()}}),r,null,[[1,14]])})));return function(){return r.apply(this,arguments)}}()()}),[e,t]),a}("https://jsonplaceholder.typicode.com/todos"),o=n.isError,a=n.isLoading,c=n.data;return Object(s.useEffect)((function(){return o?r({type:"TODOS_ERROR"}):a?r({type:"TODOS_LOADING"}):c?r({type:"RETURN_TODOS",payload:c}):void 0}),[o,a,c]),i(i({},e),{},{setFilteredTodos:function(t){return r({type:"FILTER_TODOS",payload:t})},setPaginatedTodos:function(t){return r({type:"PAGINATE_TODOS",payload:t})}})};function O(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||f(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j=function(t,e){var r=O(t).filter((function(t){return t.completed.toString()===e}));return r.length?r:t},x=function(t,e){return O(t).filter((function(t){return t.title.toLowerCase().includes(e.toLowerCase())}))},w=function(t,e){var r=d(Object(s.useState)(1),2),n=r[0],o=r[1],i=d(Object(s.useState)(t),2),a=i[0],c=i[1],u=d(Object(s.useState)(1),2),l=u[0],f=u[1],h=Math.ceil(t.length/e);return{next:function(){o((function(t){return Math.min(t+1,h)})),n<h&&f(l+e)},prev:function(){o((function(t){return Math.max(t-1,1)})),l>1&&f(l-e)},currentData:function(){var r=(n-1)*e,o=function(t,e,r){return O(t).slice(e,r)}(t,r,r+e);c(o)},setCurrentPage:o,setCurrentIndex:f,paginatedData:a,currentIndex:l,currentPage:n,maxPage:h}},E=function(t){var e=t.data,r=t.pageSize,n=t.onPageChange,o=w(e,r),i=o.next,c=o.prev,u=o.currentData,l=o.setCurrentPage,f=o.setCurrentIndex,d=o.paginatedData,h=o.currentIndex,p=o.currentPage,y=o.maxPage;return Object(s.useEffect)((function(){u(),l(1),f(1)}),[e,u,f,l]),Object(s.useEffect)((function(){u()}),[p,u]),Object(s.useEffect)((function(){n(d)}),[d,n]),Object(a.jsxs)("div",{style:T.container,children:[Object(a.jsxs)("span",{style:T.pages,children:[d.length?h:0,"-",h+d.length-1," of ",e.length]}),Object(a.jsx)("button",{disabled:1===h,onClick:function(t){return c()},style:T.prev,children:"\u2190"}),Object(a.jsx)("button",{disabled:p===y,onClick:function(t){return i()},children:"\u2192"})]})},T={container:{display:"flex",marginBottom:"20px"},pages:{marginLeft:"auto",marginRight:"10px"},prev:{marginRight:"10px"}},L=(r(32),function(t){var e=t.data,r=t.onFilter,n=function(t){var e=d(Object(s.useState)(""),2),r=e[0],n=e[1],o=d(Object(s.useState)(""),2),i=o[0],a=o[1],c=d(Object(s.useState)(t),2),u=c[0],l=c[1];return{setQuery:function(e){var r=e.target,o=j(t,i),a=x(o,r.value);n(r.value),l(a)},setFilter:function(e){var n=e.target,o=x(t,r),i=j(o,n.value);a(n.value),l(i)},filteredTodos:u}}(e),o=n.setQuery,i=n.setFilter,c=n.filteredTodos;return Object(s.useEffect)((function(){r(c)}),[r,c]),Object(a.jsxs)("div",{className:"filter-container",children:[Object(a.jsx)("input",{placeholder:"Search todos...",onChange:o,className:"search"}),Object(a.jsxs)("select",{onChange:i,className:"filter",children:[Object(a.jsx)("option",{value:"all",children:"All"}),Object(a.jsx)("option",{value:"true",children:"True"}),Object(a.jsx)("option",{value:"false",children:"False"})]})]})}),S=function(){var t=m(),e=t.isError,r=t.isLoading,n=t.todos,o=t.filteredTodos,i=t.paginatedTodos,u=t.setFilteredTodos,s=t.setPaginatedTodos;return e?Object(a.jsx)("h3",{children:"There is an error"}):r?Object(a.jsx)("h3",{children:"loading..."}):Object(a.jsxs)("div",{style:P.container,children:[Object(a.jsx)("h3",{children:"Todos"}),Object(a.jsx)(L,{data:n,onFilter:u}),Object(a.jsx)(c,{data:i}),Object(a.jsx)(E,{data:o,pageSize:20,onPageChange:s})]})},P={container:{margin:"0 5%"}}}}]);
//# sourceMappingURL=3.3a295e00.chunk.js.map
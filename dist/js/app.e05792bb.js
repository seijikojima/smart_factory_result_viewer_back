(function(t){function e(e){for(var r,a,c=e[0],i=e[1],l=e[2],p=0,f=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);s&&s(e);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(u.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},u=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=i;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},1:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{src:t.img_path,height:"250px"}}),n("div",{staticClass:"result"},[n("ul",[n("li",[t._v("red : "+t._s(Math.round(100*t.red)+"%"))]),n("li",[t._v("black : "+t._s(Math.round(100*t.black)+"%"))])])])])},u=[],a={name:"app",data:function(){return{red:0,black:0,img_path:"./assets/logo.png"}},sockets:{connect:function(){console.log("socket connected")},send_to_front:function(t){console.log(t),this.red=t.ai_result[0],this.black=t.ai_result[1],this.img_path=t.img_path}}},c=a,i=(n("034f"),n("2877")),l=Object(i["a"])(c,o,u,!1,null,null,null),s=l.exports,p=n("f87c"),f=n("8055"),d=n.n(f);r["a"].config.productionTip=!1;var h=d()("http://172.16.98.148:30114");r["a"].use(p["a"],h),new r["a"]({render:function(t){return t(s)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.e05792bb.js.map
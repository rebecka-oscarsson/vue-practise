(function(t){function e(e){for(var o,a,c=e[0],u=e[1],i=e[2],p=0,m=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&m.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);l&&l(e);while(m.length)m.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},s=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Form",{attrs:{post:t.post},on:{savePost:t.savePost}}),n("Posts"),n("hr"),n("p",[t._v(" hej "+t._s(t.post.userName)+" du har klickat "+t._s(t.clicked)+" ggr "),n("button",{on:{click:t.count}},[t._v("knapp")]),t._v(" förra gången du skrev hette du "+t._s(t.testnamn)+" ")]),t.clicked>5?n("h2",[t._v("sluta klicka nu")]):t._e(),t.clicked>10?n("h1",[t._v("men för bövelen")]):t._e()],1)},s=[],a=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:t.savePost}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.post.userName,expression:"post.userName"}],attrs:{type:"text",placeholder:"name",id:"name"},domProps:{value:t.post.userName},on:{input:function(e){e.target.composing||t.$set(t.post,"userName",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.post.comment,expression:"post.comment"}],attrs:{type:"text",placeholder:"comment",id:"comment"},domProps:{value:t.post.comment},on:{input:function(e){e.target.composing||t.$set(t.post,"comment",e.target.value)}}}),n("button",{attrs:{type:"submit"}},[t._v("skicka gästboksinlägg")])])}),c=[],u={name:"Form",props:{post:{type:Object}},methods:{savePost:function(t){console.log("skickat från form-komponent"),this.$emit("savePost",t)}}},i=u,l=n("2877"),p=Object(l["a"])(i,a,c,!1,null,null,null),m=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.posts,(function(e){return n("li",{key:e.id},[t._v(t._s(e.name)+" skrev: "),n("i",[t._v(" "+t._s(e.comment)+" ")])])})),0)},d=[];n("d3b7");function v(t,e){fetch(t).then((function(t){return t.json()})).then((function(t){e&&e(t)})).catch((function(t){console.log("Något gick fel",t)}))}function h(t,e,n){fetch(t,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()})).then((function(t){n&&n(t)})).catch((function(t){console.log("Något gick fel",t)}))}var g={name:"Posts",data:function(){return{posts:[],post:{}}},created:function(){var t=this;v("https://json-server-reb.herokuapp.com/posts",(function(e){t.posts=e}))},methods:{getPosts:function(t){console.log("hämtar i posts-komponent"),this.$emit("getPosts",t)}}},b=g,k=Object(l["a"])(b,f,d,!1,null,null,null),_=k.exports,y={name:"App",data:function(){return{post:{},clicked:0,testnamn:localStorage.getItem("name")}},components:{Form:m,Posts:_},methods:{count:function(){this.clicked++},savePost:function(t){var e={name:t.target.name.value,date:(new Date).toLocaleString(),comment:t.target.comment.value};this.post=e,h("https://json-server-reb.herokuapp.com/posts",e),localStorage.setItem("name",t.target.name.value)}}},P=y,j=(n("034f"),Object(l["a"])(P,r,s,!1,null,null,null)),O=j.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(O)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.42296c6f.js.map
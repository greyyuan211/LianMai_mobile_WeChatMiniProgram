(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/modify/editusername"],{"3ff6":function(t,n,e){"use strict";e.r(n);var r=e("9722"),i=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);n["default"]=i.a},"8a90":function(t,n,e){},9722:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=e("1299");function i(t,n){return c(t)||s(t,n)||a(t,n)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,n){if(t){if("string"===typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,n):void 0}}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function s(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done);r=!0)if(e.push(a.value),n&&e.length===n)break}catch(s){i=!0,o=s}finally{try{r||null==u["return"]||u["return"]()}finally{if(i)throw o}}return e}}function c(t){if(Array.isArray(t))return t}var f={data:function(){return{fun:!0,valueused:"",edit:!1,judge:!1,myname:"",test:"",userid:"",sername:"",nametitle:{icon:"none",duration:2e3}}},onLoad:function(){this.userid=this.usersid},computed:{usersid:function(){return this.$store.getters["session/get"]("userId")}},methods:{submission:function(){this.sername?this.changname():t.showToast({icon:this.nametitle.icon,title:this.i18n.t("modify.emptyname"),duration:this.nametitle.duration})},changname:function(){var n=this,e={_jv:{type:"users",id:this.userid},username:this.sername},o=r.status.run((function(){return n.$store.dispatch("jv/patch",e)}));o.then((function(e){e&&(t.showToast({title:n.i18n.t("modify.modifysucc"),duration:2e3}),t.navigateBack({delta:1,success:function(){var t=getCurrentPages();t[1].onLoad()}}))})).catch((function(e){if(500===e.statusCode){n.edit=!0;var r=i(e.data.errors,1),o=i(r[0].detail,1),a=o[0];n.test=a,t.showToast({icon:n.nametitle.icon,title:n.test,duration:2e3})}}))}}};n.default=f}).call(this,e("543d")["default"])},a79a:function(t,n,e){"use strict";(function(t){e("8d7e");r(e("66fd"));var n=r(e("cc80"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},cbc0:function(t,n,e){"use strict";var r=e("8a90"),i=e.n(r);i.a},cc80:function(t,n,e){"use strict";e.r(n);var r=e("df9b"),i=e("3ff6");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("cbc0");var a,u=e("f0c5"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"3a6c899f",null,!1,r["a"],a);n["default"]=s.exports},df9b:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return r}));var r={quiPage:function(){return Promise.all([e.e("common/vendor"),e.e("components/qui-page/qui-page")]).then(e.bind(null,"a983"))},quiButton:function(){return e.e("components/qui-button/qui-button").then(e.bind(null,"018a"))}},i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.i18n.t("modify.numbermodifitions")),r=t.i18n.t("modify.submission");t.$mp.data=Object.assign({},{$root:{g0:e,g1:r}})},o=[]}},[["a79a","common/runtime","common/vendor"]]]);
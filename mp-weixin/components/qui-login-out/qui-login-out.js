(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/qui-login-out/qui-login-out"],{"53b4":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("0f20"),r=c(n("7a36")),u=c(n("dc1b")),i=n("2f62");function c(t){return t&&t.__esModule?t:{default:t}}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){n.e("components/uni-popup/uni-popup-dialog").then(function(){return resolve(n("ba2b"))}.bind(null,n)).catch(n.oe)},p={components:{uniPopupDialog:l},mixins:[r.default,u.default],data:function(){return{site_mode:""}},computed:a({},(0,i.mapState)({footerIndex:function(t){return t.footerTab.footerIndex?parseInt(t.footerTab.footerIndex,10):0}})),created:function(){this.forums&&this.forums.set_reg&&(this.site_mode=this.forums.set_site.site_mode)},methods:a(a({},(0,i.mapMutations)({setFooterIndex:"footerTab/SET_FOOTERINDEX"})),{},{logout:function(){this.$refs.popup.open()},handleClickOk:function(){var e=this;this.$store.dispatch("session/logout").then((function(){t.clearStorage(),e.site_mode!==o.SITE_PAY&&e.setFooterIndex(parseInt(0,10)),e.site_mode===o.SITE_PAY&&e.user&&!e.user.isPaid&&t.redirectTo({url:"/pages/site/info"})}))},handleClickCancel:function(){this.$refs.popup.close()}})};e.default=p}).call(this,n("543d")["default"])},"5b70":function(t,e,n){"use strict";var o=n("c13cb"),r=n.n(o);r.a},ae6d:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}));var o={quiButton:function(){return n.e("components/qui-button/qui-button").then(n.bind(null,"018a"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"78fd"))}},r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.forums.set_reg&&2!==t.forums.set_reg.register_type?t.i18n.t("user.logout"):null),o=t.i18n.t("user.loginOutTips");t.$mp.data=Object.assign({},{$root:{g0:n,g1:o}})},u=[]},b74a:function(t,e,n){"use strict";n.r(e);var o=n("53b4"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=r.a},c13cb:function(t,e,n){},f031:function(t,e,n){"use strict";n.r(e);var o=n("ae6d"),r=n("b74a");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("5b70");var i,c=n("f0c5"),s=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"0ddf220c",null,!1,o["a"],i);e["default"]=s.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/qui-login-out/qui-login-out-create-component',
    {
        'components/qui-login-out/qui-login-out-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f031"))
        })
    },
    [['components/qui-login-out/qui-login-out-create-component']]
]);

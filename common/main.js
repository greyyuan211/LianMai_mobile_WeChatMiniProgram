(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"195b":function(e,t,r){"use strict";var n=r("b57f"),a=r.n(n);a.a},"278f":function(e,t,r){"use strict";r.r(t);var n=r("f36b"),a=r.n(n);for(var o in n)"default"!==o&&function(e){r.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"3ccd":function(e,t,r){"use strict";r.r(t);var n=r("278f");for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);r("195b");var o,i,c,s,u=r("f0c5"),f=Object(u["a"])(n["default"],o,i,!1,null,null,null,!1,c,s);t["default"]=f.exports},ad12:function(e,t,r){"use strict";(function(e,t){r("8d7e");var n=f(r("66fd")),a=f(r("3ccd")),o=r("35a3"),i=f(r("d47f")),c=f(r("c10f8")),s=f(r("20fc")),u=r("0f20");r("e114");function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.values=Object.values||r("ab30"),Object.entries=Object.entries||r("e591");var h=r("ff45").default;Promise.allSettled=Promise.allSettled||h,n.default.config.productionTip=!1,a.default.mpType="app",n.default.prototype.$localeUse=o.localeUse,n.default.prototype.i18n=o.i18n;var g=e.getStorageSync("theme")||u.THEME_DEFAULT,b={guid:c.default,currentTheme:g,light:function(){return u.THEME_DEFAULT},dark:function(){return u.THEME_DARK},host:function(){return u.DISCUZ_REQUEST_HOST},event:new n.default};n.default.prototype.$u=b,n.default.mixin(s.default);var v=new n.default(d(d({i18n:o.i18n,store:i.default},a.default),{},{data:function(){return{siteInfoStat:"",evalscripts:[],JSLOADED:[]}},created:function(){},methods:{}}));t(v).$mount()}).call(this,r("543d")["default"],r("543d")["createApp"])},b57f:function(e,t,r){},f36b:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r("a34a"));r("e2bf");var a=r("0f20"),o=i(r("66fd"));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t,r,n,a,o,i){try{var c=e[o](i),s=c.value}catch(u){return void r(u)}c.done?t(s):Promise.resolve(s).then(n,a)}function p(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){f(o,n,a,i,c,"next",e)}function c(e){f(o,n,a,i,c,"throw",e)}i(void 0)}))}}var d=[],l=["pages/site/partner-invite","pages/user/login","pages/user/register","pages/user/phone-login-register"],h={data:function(){return{statisticsCode:""}},globalData:{themeChanged:function(t){o.default.prototype.$u.currentTheme=t,d.forEach((function(e){e(t)})),e.setStorage({key:"theme",data:t})},watchThemeChange:function(e){d.indexOf(e)<0&&d.push(e)},unWatchThemeChange:function(e){var t=d.indexOf(e);t>-1&&d.splice(t,1)}},onLaunch:function(){var t=this;return p(n.default.mark((function r(){var o;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o=function(){var r=p(n.default.mark((function r(){var o,i,c,s,u,f,p;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]);case 2:if(o=r.sent,e.$emit("inited",o),i=t.$store.getters["session/get"]("userId"),c={},!i){r.next=12;break}return s={include:"groups,wechat"},r.next=10,t.$store.dispatch("jv/get",["users/".concat(i),{params:s}]);case 10:c=r.sent,e.setStorageSync(a.STORGE_GET_USER_TIME,(new Date).getTime());case 12:if(t.statisticsCode=o.set_site.site_stat,e.$emit("stat",{statisticsCode:t.statisticsCode}),u={},f=getCurrentPages(),f.length>0&&(u=f[f.length-1]),o.set_reg&&e.setStorageSync("register_type",o.set_reg.register_type),o.set_site.site_mode!==a.SITE_PAY){r.next=35;break}if(p=e.getSystemInfoSync(),"ios"!==p.platform){r.next=23;break}return t.$store.dispatch("forum/setError",{loading:!1,code:"dataerro"}),r.abrupt("return");case 23:if(!(f.length>0)){r.next=34;break}if(u=f[f.length-1],"pages/user/pc-login"!==u.route){r.next=28;break}return e.redirectTo({url:u.__page__.fullPath}),r.abrupt("return");case 28:if("pages/user/pc-relation"!==u.route){r.next=31;break}return e.redirectTo({url:u.__page__.fullPath}),r.abrupt("return");case 31:c.paid||"pages/site/info"===u.route||-1!==l.indexOf(u.route)||e.redirectTo({url:"/pages/site/info"}),r.next=35;break;case 34:c.paid||1!==e.getStorageSync("oauth_wechat")&&1!==e.getStorageSync("h5_wechat_login")&&e.redirectTo({url:"/pages/site/info"});case 35:t.$store.state.forum.error.code||t.$store.dispatch("forum/setError",{loading:!1});case 36:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),r.prev=1,r.next=4,o();case 4:r.next=9;break;case 6:r.prev=6,r.t0=r["catch"](1),r.t0&&r.t0.data&&r.t0.data.errors&&("access_denied"===r.t0.data.errors[0].code?t.$store.dispatch("session/logout").then(o):t.$store.dispatch("forum/setError",s({loading:!1},r.t0.data.errors[0])));case 9:case"end":return r.stop()}}),r,null,[[1,6]])})))()},onShow:function(e){if(this.captchaTicketExpire||(this.captchaTicketExpire={}),1038===e.scene&&"wx5a3a7366fd07e119"===e.referrerInfo.appId){var t=e.referrerInfo.extraData;if(t&&0===t.ret){var r=t.ticket;this.captchaTicketExpire[r]||(this.captchaTicketExpire[r]=!0,this.$u.event.$emit("captchaResult",t))}else this.$u.event.$emit("closeChaReault",t)}},onHide:function(){},onPageNotFound:function(t){var r="/pages/common/error";if(/^\/thread\/\d+$/i.test(t.path)){var n=t.path.match(/^\/thread\/(\d+)$/i);r="/topic/index?id=".concat(n[1])}else if(/^\/user\/\d+$/i.test(t.path)){var a=t.path.match(/^\/user\/(\d+)$/i);r="/pages/profile/index?userId=".concat(a[1])}else if("/site/partner-invite"===t.path&&t.query.code)r="/pages/site/partner-invite?code=".concat(t.query.code);else if(/^\/category\/\d+$/i.test(t.path)){var o=t.path.match(/^\/category\/(\d+)$/i);r="/?categoryId=".concat(o[1])}else if(/^\/topic\/\d+$/i.test(t.path)){var i=t.path.match(/^\/topic\/(\d+)$/i);r="/pages/topic/content?id=".concat(i[1])}e.redirectTo({url:r})}};t.default=h}).call(this,r("543d")["default"])}},[["ad12","common/runtime","common/vendor"]]]);
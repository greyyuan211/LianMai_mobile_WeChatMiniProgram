(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/qui-page-message/qui-page-message"],{"29cc":function(t,e,n){"use strict";n.r(e);var r=n("8b35"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},"84ac":function(t,e,n){"use strict";n.r(e);var r=n("dd7b"),o=n("29cc");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("a38c");var c,s=n("f0c5"),u=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,"5d207644",null,!1,r["a"],c);e["default"]=u.exports},"8b35":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,o=n("2f62"),i=n("35a3");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a="type_404",l="site_closed",d="not_install",f="ban_user",b="thread_deleted",g="post_deleted",p="dataerro",m="type_401",h="user_deleted",_=(r={},u(r,a,{title:i.i18n.t("core.page_not_found"),subtitle:i.i18n.t("core.page_not_found_detail"),btnTxt:i.i18n.t("core.back_history"),icon:"@/static/msg-404.svg",btnclickType:"toBack"}),u(r,l,{title:i.i18n.t("core.site_closed"),subtitle:"",btnTxt:i.i18n.t("core.close"),icon:"@/static/msg-warning.svg",btnclickType:"siteClose"}),u(r,d,{title:i.i18n.t("core.not_install"),subtitle:"",btnTxt:i.i18n.t("core.close"),icon:"@/static/msg-warning.svg",btnclickType:"siteClose"}),u(r,f,{title:i.i18n.t("core.ban_user"),subtitle:"",btnTxt:i.i18n.t("core.close"),icon:"@/static/msg-warning.svg",btnclickType:"siteClose"}),u(r,b,{title:i.i18n.t("core.thread_deleted"),subtitle:i.i18n.t("core.page_not_found_detail"),btnTxt:i.i18n.t("core.back_history"),icon:"@/static/msg-warning.svg",btnclickType:"toBack"}),u(r,g,{title:i.i18n.t("core.post_deleted"),subtitle:i.i18n.t("core.page_not_found_detail"),btnTxt:i.i18n.t("core.back_history"),icon:"@/static/msg-warning.svg",btnclickType:"toBack"}),u(r,p,{title:i.i18n.t("home.ioschoicetitle"),subtitle:i.i18n.t("home.ioschoicecontent"),btnTxt:i.i18n.t("discuzq.pageHeader.title"),icon:"@/static/msg-warning.svg",btnclickType:"toBack"}),u(r,m,{title:i.i18n.t("core.noViewPermission"),subtitle:"",btnTxt:i.i18n.t("core.back_history"),icon:"@/static/msg-404.svg",btnclickType:"toHome"}),u(r,h,{title:i.i18n.t("core.userDeleted"),subtitle:"",btnTxt:i.i18n.t("core.back_history"),icon:"@/static/msg-404.svg",btnclickType:"toHome"}),r),y={filters:{closedError:function(t,e,n){return e&&e.detail&&n===l?e.detail[0]:t}},computed:s(s({},(0,o.mapState)({forumError:function(t){return t.forum.error}})),{},{message:function(){return _[this.forumError.code]||{}},show:function(){return[a,l,d,f,b,g,m,h].indexOf(this.forumError.code)>=0},inshow:function(){return[p].indexOf(this.forumError.code)>=0}}),methods:{handleClick:function(){if(this.forumError.code===m||this.forumError.code===b||this.forumError.code===a||this.forumError.code===g||this.forumError.code===h){var e=getCurrentPages(),n=e.indexOf(e[e.length-1]);0===n?t.redirectTo({url:"/pages/home/index"}):t.navigateBack({delta:1})}},handleLoginClick:function(){}}};e.default=y}).call(this,n("543d")["default"])},"95dd":function(t,e,n){},a38c:function(t,e,n){"use strict";var r=n("95dd"),o=n.n(r);o.a},dd7b:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={quiButton:function(){return n.e("components/qui-button/qui-button").then(n.bind(null,"018a"))}},o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.show?t._f("closedError")(t.message.subtitle,t.forumError,t.forumError.code):null);t.$mp.data=Object.assign({},{$root:{f0:n}})},i=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/qui-page-message/qui-page-message-create-component',
    {
        'components/qui-page-message/qui-page-message-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("84ac"))
        })
    },
    [['components/qui-page-message/qui-page-message-create-component']]
]);

(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/qui-notification/qui-notification"],{"0fc3":function(e,t,n){"use strict";var i=n("a817"),a=n.n(i);a.a},"19d2":function(e,t,n){"use strict";n.r(t);var i=n("6f85"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},"6f85":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={components:{},props:{list:{type:Array,default:function(){return[]}}},data:function(){var e=this.$store.getters["session/get"]("userId");return{reply:"&nbsp;回复了&nbsp;",userInfo:this.$store.getters["jv/get"]("users/".concat(e))}},methods:{jumpUserPage:function(t){t<=0||t&&e.navigateTo({url:"/pages/profile/index?userId=".concat(t)})},deleteNotification:function(e){this.$emit("deleteNotice",e)},jumpMyComment:function(t){"liked"!==t.type&&"questioned"!==t.type?t&&0!==t.reply_post_id?e.navigateTo({url:"/pages/topic/comment?threadId=".concat(t.thread_id,"&commentId=").concat(t.reply_post_id)}):e.navigateTo({url:"/pages/topic/comment?threadId=".concat(t.thread_id,"&commentId=").concat(t.post_id)}):e.navigateTo({url:"/topic/index?id=".concat(t.thread_id)})},jumpOtherTopic:function(t){t&&e.navigateTo({url:"/topic/index?id=".concat(t)})},jumpNotice:function(t){t&&t.raw&&6!==t.raw.tpl_id&&4!==t.raw.tpl_id&&t.thread_id&&e.navigateTo({url:"/topic/index?id=".concat(t.thread_id)})}}};t.default=n}).call(this,n("543d")["default"])},"89e6":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={quiNoData:function(){return n.e("components/qui-no-data/qui-no-data").then(n.bind(null,"b5e7"))},quiAvatar:function(){return Promise.all([n.e("common/vendor"),n.e("components/qui-avatar/qui-avatar")]).then(n.bind(null,"7a5a"))},quiIcon:function(){return n.e("components/qui-icon/qui-icon").then(n.bind(null,"d13f"))}},a=function(){var e=this,t=e.$createElement,n=(e._self._c,!e.list||e.list.length<=0?e.i18n.t("manage.noContent"):null),i=e.i18n.t("notice.delete"),a=!e.list||e.list.length<=0?null:e.__map(e.list,(function(t,n){var i=e.__get_orig(t),a="system"!==t.type&&"related"===t.type?e.i18n.t("notice.relatedMe"):null,r="system"!==t.type&&"replied"===t.type?e.i18n.t("notice.repliedMe"):null,o="system"!==t.type&&"liked"===t.type?e.i18n.t("notice.likedMe"):null,s="system"!==t.type&&"rewarded"===t.type&&1===t.order_type?e.i18n.t("notice.scaledRegister"):null,d="system"===t.type||"rewarded"!==t.type||2!==t.order_type||t.isScale?null:e.i18n.t("notice.rewardedMe"),c="system"!==t.type&&"rewarded"===t.type&&2===t.order_type&&t.isScale?e.i18n.t("notice.scaledrewarded"):null,l="system"===t.type||"rewarded"!==t.type||3!==t.order_type||t.isScale?null:e.i18n.t("notice.payedMe"),u="system"!==t.type&&"rewarded"===t.type&&3===t.order_type&&t.isScale?e.i18n.t("notice.scaledpayed"):null,p="system"!==t.type&&"rewarded"===t.type&&5===t.order_type?e.i18n.t("notice.payQuestions"):null,y="system"!==t.type&&"rewarded"===t.type&&6===t.order_type?e.i18n.t("notice.watchedMe"):null,f="system"!==t.type&&"rewarded"===t.type&&7===t.order_type?e.i18n.t("notice.payedMe"):null,m="system"!==t.type&&"questioned"===t.type&&0===t.is_answer?e.i18n.t("notice.questions"):null,g="system"!==t.type&&"questioned"===t.type&&1===t.is_answer?e.i18n.t("notice.answersMe"):null,_="system"===t.type||"threadrewarded"!==t.type&&"threadrewardedexpired"!==t.type&&"receiveredpacket"!==t.type?null:parseFloat(t.amount).toFixed(2),h="system"!==t.type&&"withdrawal"===t.type&&2===t.cash_status?e.i18n.t("notice.approved"):null,w="system"!==t.type&&"withdrawal"===t.type&&3===t.cash_status?e.i18n.t("notice.unapproved"):null,v="system"!==t.type&&"withdrawal"===t.type&&5===t.cash_status?e.i18n.t("notice.applicationHasBeenPaid"):null,b="system"!==t.type&&t.thread_id&&0!==t.reply_post_id&&"system"!==t.type&&"rewarded"!==t.type&&"withdrawal"!==t.type&&e.userInfo.username==t.reply_post_user_name?e.i18n.t("home.tabsMy"):null;return{$orig:i,g1:a,g2:r,g3:o,g4:s,g5:d,g6:c,g7:l,g8:u,g9:p,g10:y,g11:f,g12:m,g13:g,g14:_,g15:h,g16:w,g17:v,g18:b}}));e.$mp.data=Object.assign({},{$root:{g0:n,g19:i,l0:a}})},r=[]},a817:function(e,t,n){},be54:function(e,t,n){"use strict";n.r(t);var i=n("89e6"),a=n("19d2");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("0fc3");var o,s=n("f0c5"),d=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"6fb5d4c9",null,!1,i["a"],o);t["default"]=d.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/qui-notification/qui-notification-create-component',
    {
        'components/qui-notification/qui-notification-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("be54"))
        })
    },
    [['components/qui-notification/qui-notification-create-component']]
]);

(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/profile/following"],{"0dbc":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o("1299"),r=l(o("c939")),i=o("e114");function l(t){return t&&t.__esModule?t:{default:t}}function u(t){return c(t)||f(t)||a(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"===typeof t)return d(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?d(t,e):void 0}}function f(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t){if(Array.isArray(t))return d(t)}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}var g={mixins:[r.default],props:{userId:{type:String,default:""}},data:function(){return{loadingType:"",flag:!0,followingList:[],pageSize:20,pageNum:1,currentLoginId:this.$store.getters["session/get"]("userId")}},mounted:function(){this.getFollowingList()},methods:{pullDownRefresh:function(){this.pageNum=1,this.followingList=[],this.getFollowingList("pullDownRefresh")},getFollowingList:function(e){var o=this;this.loadingType="loading";var r={include:["toUser","toUser.groups"],"filter[type]":1,"page[number]":this.pageNum,"page[limit]":this.pageSize,"filter[user_id]":this.userId};n.status.run((function(){return o.$store.dispatch("jv/get",["follow",{params:r}])})).then((function(n){n._jv&&delete n._jv,o.loadingType=n.length===o.pageSize?"more":"nomore",o.followingList="change"===e?n:[].concat(u(o.followingList),u(n)),e&&"pullDownRefresh"===e&&t.stopPullDownRefresh()}))},toProfile:function(e){t.navigateTo({url:"/pages/profile/index?userId=".concat(e)})},handleGroups:function(t){var e=[];return t.groups&&t.groups.length>0&&(e=t.groups.filter((function(t){return t.isDisplay}))),e.length>0?e[0].name:""},pullDown:function(){"more"===this.loadingType&&(this.pageNum+=1,this.getFollowingList())},addFollow:function(e,o){var r=this;if(this.$store.getters["session/get"]("isLogin")||(t.setStorage({key:"page",data:(0,i.getCurUrl)()}),this.mpLoginMode()),0===e.follow){var l={_jv:{type:"follow"},type:"user_follow",to_user_id:e.id};n.status.run((function(){return r.$store.dispatch("jv/post",l)})).then((function(t){r.userId===r.currentLoginId&&r.$emit("changeFollow",{userId:r.userId});var e=r.followingList[o];e.toUser.follow=1===t.is_mutual?2:1,r.$set(r.followingList,o,e)}))}else this.deleteFollow(e,o)},deleteFollow:function(e,o){var n=this;this.$store.getters["session/get"]("isLogin")||(t.setStorage({key:"page",data:(0,i.getCurUrl)()}),this.mpLoginMode()),this.$store.dispatch("jv/delete","follow/".concat(e.id,"/1")).then((function(){n.userId===n.currentLoginId&&n.$emit("changeFollow",{userId:n.userId});var t=n.followingList[o];t.toUser.follow=0,n.$set(n.followingList,o,t)}))}}};e.default=g}).call(this,o("543d")["default"])},"1c57":function(t,e,o){"use strict";var n=o("c5d5"),r=o.n(n);r.a},3812:function(t,e,o){"use strict";o.r(e);var n=o("0dbc"),r=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},c3fc:function(t,e,o){"use strict";o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return n}));var n={quiAvatar:function(){return Promise.all([o.e("common/vendor"),o.e("components/qui-avatar/qui-avatar")]).then(o.bind(null,"7a5a"))},quiCellItem:function(){return o.e("components/qui-cell-item/qui-cell-item").then(o.bind(null,"60f4"))},quiIcon:function(){return o.e("components/qui-icon/qui-icon").then(o.bind(null,"d13f"))},quiLoadMore:function(){return o.e("components/qui-load-more/qui-load-more").then(o.bind(null,"3fc9"))}},r=function(){var t=this,e=t.$createElement,o=(t._self._c,t.followingList.length>0?t.__map(t.followingList,(function(e,o){var n=t.__get_orig(e),r=t.handleGroups(e.toUser),i=e.toUser&&e.toUser.id!=t.currentLoginId&&0==e.toUser.follow?t.i18n.t("profile.following"):null,l=e.toUser&&e.toUser.id!=t.currentLoginId&&0!=e.toUser.follow&&1==e.toUser.follow?t.i18n.t("profile.followed"):null,u=e.toUser&&e.toUser.id!=t.currentLoginId&&0!=e.toUser.follow&&1!=e.toUser.follow?t.i18n.t("profile.mutualfollow"):null;return{$orig:n,m0:r,g0:i,g1:l,g2:u}})):null);t.$mp.data=Object.assign({},{$root:{l0:o}})},i=[]},c5d5:function(t,e,o){},ceaf:function(t,e,o){"use strict";o.r(e);var n=o("c3fc"),r=o("3812");for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);o("1c57");var l,u=o("f0c5"),s=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],l);e["default"]=s.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/profile/following-create-component',
    {
        'pages/profile/following-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ceaf"))
        })
    },
    [['pages/profile/following-create-component']]
]);

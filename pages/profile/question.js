(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/profile/question"],{"08ee":function(e,t,n){"use strict";n.r(t);var r=n("abbb"),i=n("ab27");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("ee76");var a,u=n("f0c5"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);t["default"]=s.exports},"18b7":function(e,t,n){},a722:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("1299");function i(e){return s(e)||u(e)||a(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function u(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function s(e){if(Array.isArray(e))return d(e)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l={props:{userId:{type:String,default:""}},data:function(){return{loadingType:"",data:[],pageSize:20,pageNum:1,editThreadId:"",currentLoginId:this.$store.getters["session/get"]("userId")}},created:function(){var e=this;this.$u.event.$on("refreshHome",(function(t,n){n&&"delete"===n&&e.data.forEach((function(n,r){n._jv.id===t&&e.data.splice(r,1)}))}))},mounted:function(){this.loadThreads()},destroyed:function(){this.$u.event.$off("refreshHome")},methods:{handleClickShare:function(e){this.$emit("handleClickShare",e)},pullDownRefresh:function(){this.pageNum=1,this.data=[],this.loadThreads("pullDownRefresh")},loadThreads:function(t){var n=this;this.loadingType="loading";var o={"filter[isDeleted]":"no",include:["user","user.groups","firstPost","firstPost.images","category","threadVideo","question","question.beUser","question.beUser.groups"],"page[number]":this.pageNum,"page[limit]":this.pageSize,"filter[isApproved]":1,"filter[userId]":this.userId,"filter[type]":5,"filter[answer]":"yes"};r.status.run((function(){return n.$store.dispatch("jv/get",["threads",{params:o}])})).then((function(r){r._jv&&delete r._jv,n.loadingType=r.length===n.pageSize?"more":"nomore",n.data=[].concat(i(n.data),i(r)),t&&"pullDownRefresh"===t&&e.stopPullDownRefresh()}))},toTopic:function(e){this.editThreadId=e},greatCallBack:function(){this.currentLoginId===this.userId&&this.$emit("changeFollow",{userId:this.userId})},pullDown:function(){"more"===this.loadingType&&(this.pageNum+=1,this.loadThreads())},uploadItem:function(){var e=this;if(this.editThreadId){var t=this.$store.getters["jv/get"]("threads/".concat(this.editThreadId));this.data.forEach((function(n,r){n._jv.id===e.editThreadId&&(e.editThreadId="",e.$set(e.data,r,t))}))}}}};t.default=l}).call(this,n("543d")["default"])},ab27:function(e,t,n){"use strict";n.r(t);var r=n("a722"),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},abbb:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r}));var r={quiThreadItem:function(){return Promise.all([n.e("common/vendor"),n.e("components/qui-thread-item/qui-thread-item")]).then(n.bind(null,"1e83"))},quiLoadMore:function(){return n.e("components/qui-load-more/qui-load-more").then(n.bind(null,"3fc9"))}},i=function(){var e=this,t=e.$createElement;e._self._c},o=[]},ee76:function(e,t,n){"use strict";var r=n("18b7"),i=n.n(r);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/profile/question-create-component',
    {
        'pages/profile/question-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("08ee"))
        })
    },
    [['pages/profile/question-create-component']]
]);
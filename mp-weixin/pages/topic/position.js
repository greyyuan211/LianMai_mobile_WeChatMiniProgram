(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/topic/position"],{"3fcc":function(t,e,n){"use strict";(function(t){n("8d7e");i(n("66fd"));var e=i(n("7366"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},7366:function(t,e,n){"use strict";n.r(e);var i=n("9c4f"),o=n("e282");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("9c86");var a,u=n("f0c5"),s=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"1a9a48ac",null,!1,i["a"],a);e["default"]=s.exports},"935f":function(t,e,n){},"9c4f":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={quiPage:function(){return Promise.all([n.e("common/vendor"),n.e("components/qui-page/qui-page")]).then(n.bind(null,"a983"))},quiThreadItem:function(){return Promise.all([n.e("common/vendor"),n.e("components/qui-thread-item/qui-thread-item")]).then(n.bind(null,"1e83"))},quiLoadMore:function(){return n.e("components/qui-load-more/qui-load-more").then(n.bind(null,"3fc9"))}},o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.address?t.i18n.t("profile.nearBy"):null),i=t.address?t.i18n.t("profile.total"):null,o=t.address?t.i18n.t("profile.item"):null,r=t.address?t.i18n.t("core.content"):null;t.$mp.data=Object.assign({},{$root:{g0:n,g1:i,g2:o,g3:r}})},r=[]},"9c86":function(t,e,n){"use strict";var i=n("935f"),o=n.n(i);o.a},ba26:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("1299"),o=r(n("7a36"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t){return c(t)||d(t)||s(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function d(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t){if(Array.isArray(t))return l(t)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var f={mixins:o.default,props:{userId:{type:String,default:""}},data:function(){return{loadingType:"",data:[],totalData:0,pageSize:20,pageNum:1,editThreadId:"",nowThreadId:"",longitude:"",latitude:"",location:"",address:"",contentText:{contentnomore:this.i18n.t("topic.noMoreDataNearby")}}},mounted:function(){this.getList()},onLoad:function(t){wx.showShareMenu({withShareTicket:!0,menus:["shareAppMessage","shareTimeline"]}),this.longitude=t.longitude||"",this.latitude=t.latitude||""},onShow:function(){this.uploadItem()},onShareAppMessage:function(t){if("button"===t.from){var e=this.$store.getters["jv/get"]("/threads/".concat(this.nowThreadId));return{title:1===e.type?e.title:e.firstPost.summaryText,path:"/pages/position/index?id=".concat(this.nowThreadId)}}},onShareTimeline:function(){return{title:this.forums.set_site.site_name,query:"longitude=".concat(this.longitude,"&latitude=").concat(this.latitude)}},methods:{toTopic:function(t){this.editThreadId=t},handleClickShare:function(t){this.nowThreadId=t},getList:function(){var t=this;this.loadingType="loading";var e={"filter[isApproved]":1,"filter[isDeleted]":"no","page[number]":this.pageNum,"page[limit]":this.pageSize,"filter[location]":"".concat(this.longitude,",").concat(this.latitude),include:["user","user.groups","firstPost","firstPost.images","firstPost.postGoods","category","threadVideo","threadAudio","question","question.beUser","question.beUser.groups"]};i.status.run((function(){return t.$store.dispatch("jv/get",["threads",{params:e}])})).then((function(e){e._jv&&(t.totalData=e._jv.json.meta.threadCount,delete e._jv),!t.address&&e.length>0&&(t.address=e[0].address),!t.location&&e.length>0&&(t.location=e[0].location),t.loadingType=e.length===t.pageSize?"more":"nomore",t.data=[].concat(a(t.data),a(e))}))},pullDown:function(){"more"===this.loadingType&&(this.pageNum+=1,this.getList())},uploadItem:function(){var t=this;if(this.editThreadId){var e=this.$store.getters["jv/get"]("threads/".concat(this.editThreadId));this.data.forEach((function(n,i){n._jv.id===t.editThreadId&&(t.editThreadId="",t.$set(t.data,i,e))}))}}}};e.default=f},e282:function(t,e,n){"use strict";n.r(e);var i=n("ba26"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a}},[["3fcc","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/index"],{"0e68":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={quiPage:function(){return Promise.all([n.e("common/vendor"),n.e("components/qui-page/qui-page")]).then(n.bind(null,"a983"))},quiFooter:function(){return n.e("components/qui-footer/qui-footer").then(n.bind(null,"533e"))},quiPageHome:function(){return n.e("components/qui-page-home/qui-page-home").then(n.bind(null,"91df"))},quiPageFind:function(){return n.e("components/qui-page-find/qui-page-find").then(n.bind(null,"80dd"))},quiPageNotice:function(){return Promise.all([n.e("common/vendor"),n.e("components/qui-page-notice/qui-page-notice")]).then(n.bind(null,"5764"))},quiPageMy:function(){return Promise.all([n.e("common/vendor"),n.e("components/qui-page-my/qui-page-my")]).then(n.bind(null,"1281"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"78fd"))},quiAuth:function(){return Promise.all([n.e("common/vendor"),n.e("components/qui-auth/qui-auth")]).then(n.bind(null,"8a3a"))}},o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.detectionModel());e.$mp.data=Object.assign({},{$root:{m0:n}})},r=[]},2589:function(e,t,n){"use strict";(function(e){n("8d7e");i(n("66fd"));var t=i(n("4c3b"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"374e":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=h(n("a34a")),o=h(n("7a36")),r=h(n("dc1b")),s=n("2f62"),u=h(n("76df")),a=h(n("c939")),c=n("2ef0"),f=h(n("d654"));function h(e){return e&&e.__esModule?e:{default:e}}function l(e,t,n,i,o,r,s){try{var u=e[r](s),a=u.value}catch(c){return void n(c)}u.done?t(a):Promise.resolve(a).then(i,o)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var r=e.apply(t,n);function s(e){l(r,i,o,s,u,"next",e)}function u(e){l(r,i,o,s,u,"throw",e)}s(void 0)}))}}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b={mixins:[o.default,r.default,u.default,a.default],data:function(){return{isScroll:!0,nowThreadId:0,showHome:!1,tagId:0,categoryId:"",searchIds:"",currentTab:"home",footerBarHeight:50,categories:[]}},computed:g(g({},(0,s.mapState)({forumError:function(e){return e.forum.error},footerIndex:function(e){return e.footerTab.footerIndex?parseInt(e.footerTab.footerIndex,10):0}})),{},{loading:function(){return this.forumError.loading},show_index:{get:function(){var e=this.$store.state.footerTab.footerIndex;return e},set:function(t){if(this.forums.set_site){var n=["".concat(this.forums.set_site.site_name," - ").concat(this.forums.set_site.site_title),this.i18n.t("home.find"),this.i18n.t("notice.notice"),this.i18n.t("profile.mine")];e.setNavigationBarTitle({title:n[t]})}}}}),mounted:function(){var t,n,i,o,r,s;(this.clearRedPaperData(),this.footerBarHeight!==((null===(t=this.$refs["footer-bar"])||void 0===t||null===(n=t.$el)||void 0===n||null===(i=n.firstChild)||void 0===i?void 0:i.offsetHeight)||50))&&(this.footerBarHeight=(null===(o=this.$refs["footer-bar"])||void 0===o||null===(r=o.$el)||void 0===r||null===(s=r.firstChild)||void 0===s?void 0:s.offsetHeight)||50,this.footerBarHeight=this.footerBarHeight?this.footerBarHeight:50);!this.$store.getters["session/get"]("isLogin")&&this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(e.setStorageSync("isSend",!0),e.setStorageSync("register",1),this.$refs.auth.open())},onLoad:function(t){var n=this;this.categoryId=t.categoryId,this.searchIds=t.searchIds,wx.showShareMenu({withShareTicket:!0,menus:["shareAppMessage","shareTimeline"]}),this.loading||this.showHome||this.handlePageLoaded(),e.$on("notiRead",(function(){n.getUserInfo(!0)}))},onPullDownRefresh:function(){0===this.show_index&&(this.$refs.home.threads=[],this.$refs.home.isResetList=!0,this.$refs.home.pageNum=1,this.$refs.home.loadThreadsSticky(),this.$refs.home.loadThreads()),1===this.show_index&&(this.$refs.quinotice.dialogList=[],this.$refs.quinotice.pageNum=1,this.$refs.quinotice.ontrueGetList()),2===this.show_index&&this.$refs.quimy.refreshNum(),setTimeout((function(){e.stopPullDownRefresh()}),0)},onPageScroll:function(e){this.handleHomeScroll(e)},onReachBottom:function(){this.$refs.home.pullDown()},onShareAppMessage:function(e){var t=this;return d(i.default.mark((function n(){var o,r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("button"!==e.from||"top"===e.target.id){n.next=6;break}return o={pid:Number(t.nowThreadId)},n.next=4,f.default.readThreadDetail({params:o});case 4:return r=n.sent,n.abrupt("return",{title:1===r.Data.thread.type?r.Data.thread.title:r.Data.firstPost.summaryText,path:"/topic/index?id=".concat(t.nowThreadId)});case 6:return n.abrupt("return",{title:t.forums.set_site.site_name});case 7:case"end":return n.stop()}}),n)})))()},onShareTimeline:function(){return{title:this.forums.set_site.site_name,query:""}},onShow:function(){var t=this;if(this.$refs.quiPage&&this.$store.dispatch("session/setAuth",this.$refs.quiPage.$refs.auth),(this.$store.getters["session/get"]("isLogin")||!(["quifind","quinotice","quimy"].indexOf(this.currentTab)>=0))&&("quinotice"===this.currentTab&&this.$refs[this.currentTab]&&this.$nextTick((function(){t.$refs[t.currentTab].getUnreadNoticeNum()})),"quimy"===this.currentTab&&this.$refs[this.currentTab]&&this.$nextTick((function(){t.$refs[t.currentTab].refreshNum()})),this.forums.set_site)){var n=["".concat(this.forums.set_site.site_name," - ").concat(this.forums.set_site.site_title),this.i18n.t("home.find"),this.i18n.t("notice.notice"),this.i18n.t("profile.mine")];e.setNavigationBarTitle({title:n[this.show_index]})}},methods:g(g({},(0,s.mapMutations)({setFooterIndex:"footerTab/SET_FOOTERINDEX"})),{},{handleHomeScroll:(0,c.throttle)((function(e){this.$refs.home.scroll(e)}),300),clearRedPaperData:function(){e.removeStorage({key:"is_red_packet",success:function(){}}),e.removeStorage({key:"rule",success:function(){}}),e.removeStorage({key:"money",success:function(){}}),e.removeStorage({key:"number",success:function(){}}),e.removeStorage({key:"condition",success:function(){}}),e.removeStorage({key:"likenum",success:function(){}}),e.removeStorage({key:"edit_content",success:function(){}})},restoreScrollPosition:function(){var e,t=window.sessionStorage.getItem("virtual_scroll_top");t&&(null===(e=this.$refs.home)||void 0===e?void 0:e.setScrollerTop)&&this.$refs.home.setScrollerTop(t)},close:function(){this.$refs.auth.close()},login:function(){this.$refs.auth.close()},cut_index:function(t,n,i){var o=["home","quifind","quinotice","quimy"];e.setStorage({key:"page",data:"/pages/home/index"}),1===n&&this.setFooterIndex(1),0===n&&this.setFooterIndex(0),this.currentTab=o[n],!this.$store.getters["session/get"]("isLogin")&&["quinotice","quimy"].indexOf(this.currentTab)>=0&&this.mpLoginMode(),this.show_index=n,-1===i.indexOf(n)&&(this.$refs[this.currentTab].ontrueGetList(),i.push(n))},handleClickShare:function(e){this.nowThreadId=e},handlePageLoaded:function(){this.showHome=!0},changeScroll:function(e){console.log("index:",e),this.isScroll=e}}),onUnload:function(){e.$off("notiRead")}};t.default=b}).call(this,n("543d")["default"])},"4c3b":function(e,t,n){"use strict";n.r(t);var i=n("0e68"),o=n("87c3");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("a488");var s,u=n("f0c5"),a=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"c91ac23e",null,!1,i["a"],s);t["default"]=a.exports},"87c3":function(e,t,n){"use strict";n.r(t);var i=n("374e"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},a488:function(e,t,n){"use strict";var i=n("ea45"),o=n.n(i);o.a},ea45:function(e,t,n){}},[["2589","common/runtime","common/vendor"]]]);
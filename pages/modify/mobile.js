(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/modify/mobile"],{"26c1":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}));var i={quiPage:function(){return Promise.all([e.e("common/vendor"),e.e("components/qui-page/qui-page")]).then(e.bind(null,"a983"))},quiInputCode:function(){return e.e("components/qui-input-code/qui-input-code").then(e.bind(null,"e359"))},quiButton:function(){return e.e("components/qui-button/qui-button").then(e.bind(null,"018a"))}},o=function(){var t=this,n=t.$createElement,e=(t._self._c,t.i18n.t("modify.verifyoldphon")),i=t.phon?t.i18n.t("modify.phonbound"):null,o=t.phon&&!t.userphon?t.i18n.t("modify.phonnumberempty"):null,u=t.phon&&t.sun?t.i18n.t("modify.sendverificode"):null,r=t.phon&&!t.sun?t.i18n.t("modify.retransmission"):null,s=t.i18n.t("modify.placeentercode"),a=t.judge?t.i18n.t("modify.nextsetp"):null,c=t.judge?null:t.i18n.t("modify.submission");t.$mp.data=Object.assign({},{$root:{g0:e,g1:i,g2:o,g3:u,g4:r,g5:s,g6:a,g7:c}})},u=[]},"3b9d":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("1299"),o=u(e("7a36"));function u(t){return t&&t.__esModule?t:{default:t}}function r(t,n){return f(t)||d(t,n)||a(t,n)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,n){if(t){if("string"===typeof t)return c(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(t,n):void 0}}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function d(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],i=!0,o=!1,u=void 0;try{for(var r,s=t[Symbol.iterator]();!(i=(r=s.next()).done);i=!0)if(e.push(r.value),n&&e.length===n)break}catch(a){o=!0,u=a}finally{try{i||null==s["return"]||s["return"]()}finally{if(o)throw u}}return e}}function f(t){if(Array.isArray(t))return t}var l={mixins:[o.default],data:function(){return{userid:"",second:60,sun:!0,phon:!0,userphon:"",userphone1:"",coum:"",judge:!1,test:"",icon:"none",num:5,duration:2e3,inshow:!1,inisIphone:!1,noclick:!1,detail:"",captcha:null,ticket:"",randstr:"",captchaResult:{}}},onLoad:function(){var n=this;this.userid=this.usersid,this.senduser(),this.$u.event.$on("captchaResult",(function(t){n.ticket=t.ticket,n.randstr=t.randstr,n.btnButton(),n.verstype()})),this.$u.event.$on("closeChaReault",(function(){t.hideLoading()}))},computed:{usersid:function(){return this.$store.getters["session/get"]("userId")}},methods:{fourse:function(){this.inshow=!0},getCode:function(){var t=this;this.showText=!1;var n=setInterval((function(){t.second-=1}),1e3);setTimeout((function(){clearInterval(n),t.showText=!0}),6e4)},btnButton:function(){var t=this;this.sun=!this.sun;var n=setInterval((function(){t.second-=1}),1e3);setTimeout((function(){clearInterval(n),t.sun=!t.sun,t.second=60}),6e4)},senduser:function(){var t=this,n={_jv:{type:"users",id:this.userid},include:["groups","wechat"]},e=i.status.run((function(){return t.$store.dispatch("jv/get",n)}));e.then((function(n){t.userphon=n.mobile,t.userphone1=n.originalMobile,t.userphon||(t.noclick=!0)}))},sendsms:function(){if(this.forums.qcloud.qcloud_captcha){if(!this.ticket||!this.randstr)return this.verification(),!1}else this.second=60,this.btnButton(),this.verstype()},btndata:function(t){this.coum=t},submission:function(){var n=this,e={_jv:{type:"sms/verify"},code:this.coum,type:"verify"};this.$store.dispatch("jv/post",e).then((function(e){e&&(t.navigateTo({url:"/pages/modify/setphon?type=rebind"}),n.$u.event.$off("captchaResult"),n.$u.event.$off("closeChaReault"),n.captcha&&n.captcha.destroy())})).catch((function(e){if(t.showToast({icon:n.icon,title:n.i18n.t("modify.valifailed"),duration:2e3}),422===e.statusCode){n.judge=!0;var i=r(e.data.errors,1),o=r(i[0].detail,1),u=o[0];n.test=u}else 500===e.statusCode&&(n.test=n.i18n.t("modify.validionerro")+n.num+n.i18n.t("modify.frequency"),n.judge=!0,n.empty(),n.num<0&&(n.test=n.i18n.t("modify.lateron")))}))},verstype:function(){var n=this,e={_jv:{type:"sms/send"},type:"verify",captcha_ticket:this.ticket,captcha_rand_str:this.randstr},o=i.status.run((function(){return n.$store.dispatch("jv/post",e)}));o.then((function(t){n.num-=1,n.second=t._jv.json.data.attributes.interval,n.ticket="",n.randstr=""})).catch((function(e){500===e.statusCode&&t.showToast({icon:n.icon,title:n.lateron,duration:n.duration})}))},verification:function(){wx.navigateToMiniProgram({appId:"wx5a3a7366fd07e119",path:"/pages/captcha/index",envVersion:"release",extraData:{appId:this.forums.qcloud.qcloud_captcha_app_id},success:function(){console.log("验证码成功打开")},fail:function(){t.hideLoading()}})},toggleBox:function(){this.inshow=!1},empty:function(){var t=this.$refs.quiinput;t.deleat()}}};n.default=l}).call(this,e("543d")["default"])},"3d84":function(t,n,e){"use strict";e.r(n);var i=e("26c1"),o=e("e468");for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);e("f7e6");var r,s=e("f0c5"),a=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"5073bcd6",null,!1,i["a"],r);n["default"]=a.exports},"5c87":function(t,n,e){},"7c44":function(t,n,e){"use strict";(function(t){e("8d7e");i(e("66fd"));var n=i(e("3d84"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},e468:function(t,n,e){"use strict";e.r(n);var i=e("3b9d"),o=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=o.a},f7e6:function(t,n,e){"use strict";var i=e("5c87"),o=e.n(i);o.a}},[["7c44","common/runtime","common/vendor"]]]);
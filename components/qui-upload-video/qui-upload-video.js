(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/qui-upload-video/qui-upload-video"],{"19c0":function(e,t,n){},"3b46":function(e,t,n){"use strict";n.r(t);var i=n("a5df"),o=n.n(i);for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=o.a},7933:function(e,t,n){"use strict";n.r(t);var i=n("d9f7"),o=n("3b46");for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);n("bb6c");var c,r=n("f0c5"),a=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"6ba10ffe",null,!1,i["a"],c);t["default"]=a.exports},a5df:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("4cf1"));function o(e){return e&&e.__esModule?e:{default:e}}var u={name:"QuiUploader",props:{chooseType:{default:1,type:Number},typeStatus:{default:"",type:String},url:{default:"",type:String},videoBeforeList:{type:Array,default:function(){return[]}}},data:function(){return{controlsStatus:!1,fullscreenStatus:!1,videoName:"",percent:0,videoPercent:0,fileId:""}},watch:{},created:function(){"edit"===this.typeStatus&&(this.videoPercent=1)},mounted:function(){this.videoBeforeList.length>0?this.videoPercent=1:this.videoPercent=0,this.videoContext=e.createVideoContext("video"),0===this.chooseType&&(this.videoPercent=1)},methods:{videoDel:function(){this.$emit("videoDel")},playVideo:function(){this.controlsStatus=!0,this.videoContext.play(),this.videoContext.requestFullScreen(),this.$emit("playVideo")},fullscreenchange:function(e){this.fullscreenStatus=e.detail.fullScreen,e.detail.fullScreen||(this.controlsStatus=!1,this.videoContext.pause()),this.$emit("fullscreenchange")},getSignature:function(e){this.$store.dispatch("jv/get",["signature",{}]).then((function(t){e(t.signature)}))},uploadVideo:function(){var t=this;e.chooseVideo({count:1,compressed:!1,sourceType:["camera","album"],success:function(n){t.chooseType;var o="";o=n,t.videoName=n.name?n.name:t.i18n.t("discuzq.post.fromWeChatApplet"),i.default.start({mediaFile:n,getSignature:t.getSignature,mediaName:n.name,success:function(e){console.log(e)},error:function(e){console.log(e),t.$refs.toast.show({message:t.i18n.t("uploader.uploadFailed")}),t.videoPercent=0},progress:function(n){t.percent=n.percent,1===n.percent&&(t.videoPercent=.9),e.showLoading({title:t.i18n.t("core.loading"),mask:!0}),t.videoPercent=n.percent},finish:function(n){t.fileId=n.fileId,e.$emit("uploadVideoOver",{result:n,uploadVideoRes:o}),setTimeout((function(){e.hideLoading()}),500)}})}})}}};t.default=u}).call(this,n("543d")["default"])},bb6c:function(e,t,n){"use strict";var i=n("19c0"),o=n.n(i);o.a},d9f7:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return i}));var i={quiIcon:function(){return n.e("components/qui-icon/qui-icon").then(n.bind(null,"d13f"))}},o=function(){var e=this,t=e.$createElement,n=(e._self._c,100*e.videoPercent<100?e.i18n.t("discuzq.video.videoUploading"):null);e.$mp.data=Object.assign({},{$root:{g0:n}})},u=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/qui-upload-video/qui-upload-video-create-component',
    {
        'components/qui-upload-video/qui-upload-video-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7933"))
        })
    },
    [['components/qui-upload-video/qui-upload-video-create-component']]
]);

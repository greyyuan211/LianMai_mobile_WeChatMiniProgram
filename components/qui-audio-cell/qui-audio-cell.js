(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/qui-audio-cell/qui-audio-cell"],{"457d":function(t,i,e){},"601b":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={props:{src:{type:String,default:""},audioId:{type:String,default:""},autoplay:{type:Boolean,default:!1},name:{type:String,default:""},fileSize:{type:Number,default:0},color:{type:String,default:"#1878f3"},isDelete:{type:Boolean,default:!1},previewStatus:{type:Boolean,default:!0}},data:function(){return{audio:null,currentTime:"00 : 00",duration:"00 : 00",durationTime:0,current:"",loading:!1,paused:!0,seek:!1}},computed:{audioSize:function(){var t="".concat((this.fileSize/1048576).toFixed(1),"MB");return t}},watch:{current:function(t){t&&(this.currentTime=this.format(t))}},mounted:function(){},destroyed:function(){this.audio&&this.audio.destroy()},methods:{initAudio:function(){var i=this;this.audio=t.createInnerAudioContext(),this.audio.src=this.src,this.duration=this.format(this.audio.duration),this.loading=!0,this.audio.onTimeUpdate((function(){i.durationTime||i.setDuration(),i.seek||(i.current=i.audio.currentTime)})),this.audio.onPlay((function(){i.paused=!1})),this.audio.onPause((function(){i.paused=!0})),this.audio.onEnded((function(){i.paused=!0,i.current=0,i.currentTime="00 : 00"})),this.audio.onSeeked((function(){i.seek=!1}))},operation:function(t){t?(this.audio||this.initAudio(),this.paused?(this.audio.play(),this.loading=!1,this.$emit("audioPlayer",this.audioId)):this.audio.pause()):this.$emit("previewAudio")},audioPause:function(){this.paused&&!this.loading||this.audio.pause()},format:function(t){if(t)return"".concat("0".repeat(2-String(Math.floor(t/60)).length)+Math.floor(t/60),":").concat("0".repeat(2-String(Math.floor(t%60)).length)).concat(Math.floor(t%60))},change:function(t){this.audio.seek(t.detail.value)},setDuration:function(){Number.isFinite(this.audio.duration)&&(this.duration=this.format(this.audio.duration),this.durationTime=this.audio.duration)},deleteItem:function(){this.$emit("deleteItem")}}};i.default=e}).call(this,e("543d")["default"])},7002:function(t,i,e){"use strict";e.r(i);var n=e("601b"),u=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=u.a},cbf7:function(t,i,e){"use strict";e.r(i);var n=e("e6f9"),u=e("7002");for(var o in u)"default"!==o&&function(t){e.d(i,t,(function(){return u[t]}))}(o);e("d587");var a,r=e("f0c5"),d=Object(r["a"])(u["default"],n["b"],n["c"],!1,null,"6ef3803e",null,!1,n["a"],a);i["default"]=d.exports},d587:function(t,i,e){"use strict";var n=e("457d"),u=e.n(n);u.a},e6f9:function(t,i,e){"use strict";e.d(i,"b",(function(){return u})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var n={quiIcon:function(){return e.e("components/qui-icon/qui-icon").then(e.bind(null,"d13f"))}},u=function(){var t=this,i=t.$createElement;t._self._c;t._isMounted||(t.e0=function(i){t.seek=!0,t.current=i.detail.value})},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/qui-audio-cell/qui-audio-cell-create-component',
    {
        'components/qui-audio-cell/qui-audio-cell-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("cbf7"))
        })
    },
    [['components/qui-audio-cell/qui-audio-cell-create-component']]
]);

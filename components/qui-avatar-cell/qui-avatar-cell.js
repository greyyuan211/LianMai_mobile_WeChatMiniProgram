(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/qui-avatar-cell/qui-avatar-cell"],{"1e21f":function(t,e,n){"use strict";n.r(e);var a=n("ae87"),u=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=u.a},"3f15":function(t,e,n){"use strict";var a=n("a133"),u=n.n(a);u.a},"5d2c":function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={quiAvatar:function(){return Promise.all([n.e("common/vendor"),n.e("components/qui-avatar/qui-avatar")]).then(n.bind(null,"7a5a"))},quiIcon:function(){return n.e("components/qui-icon/qui-icon").then(n.bind(null,"d13f"))}},u=function(){var t=this,e=t.$createElement;t._self._c},r=[]},a133:function(t,e,n){},a45f:function(t,e,n){"use strict";n.r(e);var a=n("5d2c"),u=n("1e21f");for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);n("3f15");var i,o=n("f0c5"),l=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,"053021ee",null,!1,a["a"],i);e["default"]=l.exports},ae87:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"QuiAvatarCell",props:{title:{type:String,default:""},isReal:{type:Boolean,default:!1},label:{type:String,default:""},mark:{type:Number,default:0},value:{type:String,default:""},icon:{type:String,default:""},center:{default:!1,type:Boolean},post:{default:!0,type:Boolean},rightColor:{type:String,default:""}},data:function(){return{}},methods:{getNameId:function(t){this.$emit("click",t)}}};e.default=a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/qui-avatar-cell/qui-avatar-cell-create-component',
    {
        'components/qui-avatar-cell/qui-avatar-cell-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a45f"))
        })
    },
    [['components/qui-avatar-cell/qui-avatar-cell-create-component']]
]);

(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/qui-icon/qui-icon"],{5497:function(t,n,e){"use strict";e.r(n);var u=e("c839"),i=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);n["default"]=i.a},5829:function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return u}));var i=function(){var t=this,n=t.$createElement;t._self._c},o=[]},"9b25":function(t,n,e){"use strict";var u=e("b479"),i=e.n(u);i.a},b479:function(t,n,e){},c839:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"QuiIcon",props:{name:{type:[String,Boolean],default:""},size:{type:[Number,String],default:28},color:{type:String,default:""},dot:{type:Boolean,default:!1},badge:{type:[Number,String],default:""}},computed:{cssClass:function(){var t=this.name;return"qui-icon ".concat(t)},dotClass:function(){var t=this.badge,n="qui-info";return t.toString()?n:"".concat(n," qui-info--dot")}},methods:{handleClick:function(t){this.$emit("click",t)}}};n.default=u},d13f:function(t,n,e){"use strict";e.r(n);var u=e("5829"),i=e("5497");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("9b25");var a,c=e("f0c5"),r=Object(c["a"])(i["default"],u["b"],u["c"],!1,null,"6d8640a2",null,!1,u["a"],a);n["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/qui-icon/qui-icon-create-component',
    {
        'components/qui-icon/qui-icon-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d13f"))
        })
    },
    [['components/qui-icon/qui-icon-create-component']]
]);

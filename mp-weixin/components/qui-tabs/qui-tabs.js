(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/qui-tabs/qui-tabs"],{"38bd":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return r}));var u=function(){var t=this,n=t.$createElement;t._self._c},c=[]},"53ba":function(t,n,e){"use strict";e.r(n);var r=e("38bd"),u=e("e09c");for(var c in u)"default"!==c&&function(t){e.d(n,t,(function(){return u[t]}))}(c);e("581e");var a,i=e("f0c5"),o=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);n["default"]=o.exports},"581e":function(t,n,e){"use strict";var r=e("8e1c"),u=e.n(r);u.a},"8e1c":function(t,n,e){},"98a7":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={name:"QuiTabs",props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},brief:{type:Boolean,default:!1},activeColor:{type:String,default:"#1878F3"}},data:function(){return{currentIndex:0}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},created:function(){this.currentIndex=this.current},methods:{onClick:function(t){this.currentIndex=t,this.$emit("clickItem",{currentIndex:t})}}};n.default=r},e09c:function(t,n,e){"use strict";e.r(n);var r=e("98a7"),u=e.n(r);for(var c in r)"default"!==c&&function(t){e.d(n,t,(function(){return r[t]}))}(c);n["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/qui-tabs/qui-tabs-create-component',
    {
        'components/qui-tabs/qui-tabs-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("53ba"))
        })
    },
    [['components/qui-tabs/qui-tabs-create-component']]
]);

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Parentcomponentexample"],{"3f8a":function(t,e,n){"use strict";n.r(e);var a=n("7a23"),r=Object(a["J"])("data-v-34816097"),c=r((function(t,e,n,r,c,o){var i=Object(a["w"])("page-title"),u=Object(a["w"])("ChildComponent");return Object(a["p"])(),Object(a["d"])("div",null,[Object(a["g"])(i,{title:c.title},null,8,["title"]),Object(a["g"])(u,{likes:8,isOk:c.isOk,commentIds:c.commentIds,author:c.author},null,8,["isOk","commentIds","author"])])})),o=n("89dd"),i=(n("b0c0"),Object(a["J"])("data-v-47637256"));Object(a["s"])("data-v-47637256");var u={class:"view"};Object(a["q"])();var s=i((function(t,e,n,r,c,o){return Object(a["p"])(),Object(a["d"])("div",u,[Object(a["g"])("p",null,"likes: "+Object(a["y"])(n.likes),1),Object(a["g"])("p",null,"isOk: "+Object(a["y"])(n.isOk),1),Object(a["g"])("p",null,"author name: "+Object(a["y"])(n.author.name),1)])})),f=(n("a9e3"),{name:"",props:{likes:{type:Number,default:0},isOk:{type:Boolean,default:!1},commentIds:{type:Array},author:{type:Object}},components:{},data:function(){return{sampleData:""}},setup:function(){},created:function(){},mounted:function(){console.log(this.commentIds)},unmounted:function(){},methods:{}});f.render=s,f.__scopeId="data-v-47637256";var d=f,p={name:"",components:{"page-title":o["a"],ChildComponent:d},data:function(){return{title:"부모 컴포넌트에서 전송할 타이틀1",likes:0,isOk:!0,commentIds:[1,5,2,3],author:{name:"홍길동",company:"뷰 컴퍼니"}}},setup:function(){},created:function(){},mounted:function(){},unmounted:function(){},methods:{}};p.render=c,p.__scopeId="data-v-34816097";e["default"]=p},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("1d80"),r=n("5899"),c="["+r+"]",o=RegExp("^"+c+c+"*"),i=RegExp(c+c+"*$"),u=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(i,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(t,e,n){var a=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var c,o;return r&&"function"==typeof(c=e.constructor)&&c!==n&&a(o=c.prototype)&&o!==n.prototype&&r(t,o),t}},"89dd":function(t,e,n){"use strict";var a=n("7a23"),r=Object(a["J"])("data-v-4aee56a0");Object(a["s"])("data-v-4aee56a0");var c={class:"page-title"};Object(a["q"])();var o=r((function(t,e,n,r,o,i){return Object(a["p"])(),Object(a["d"])("h1",c,Object(a["y"])(n.title),1)})),i={props:{title:{type:String,default:"페이지 타이틀."}}};n("d04b");i.render=o,i.__scopeId="data-v-4aee56a0";e["a"]=i},a9e3:function(t,e,n){"use strict";var a=n("83ab"),r=n("da84"),c=n("94ca"),o=n("6eeb"),i=n("5135"),u=n("c6b6"),s=n("7156"),f=n("c04e"),d=n("d039"),p=n("7c73"),l=n("241c").f,b=n("06cf").f,m=n("9bf2").f,O=n("58a8").trim,v="Number",I=r[v],h=I.prototype,g=u(p(h))==v,j=function(t){var e,n,a,r,c,o,i,u,s=f(t,!1);if("string"==typeof s&&s.length>2)if(s=O(s),e=s.charCodeAt(0),43===e||45===e){if(n=s.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(s.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+s}for(c=s.slice(2),o=c.length,i=0;i<o;i++)if(u=c.charCodeAt(i),u<48||u>r)return NaN;return parseInt(c,a)}return+s};if(c(v,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var N,y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(g?d((function(){h.valueOf.call(n)})):u(n)!=v)?s(new I(j(e)),n,y):j(e)},k=a?l(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),E=0;k.length>E;E++)i(I,N=k[E])&&!i(y,N)&&m(y,N,b(I,N));y.prototype=h,h.constructor=y,o(r,v,y)}},b0c0:function(t,e,n){var a=n("83ab"),r=n("9bf2").f,c=Function.prototype,o=c.toString,i=/^\s*function ([^ (]*)/,u="name";a&&!(u in c)&&r(c,u,{configurable:!0,get:function(){try{return o.call(this).match(i)[1]}catch(t){return""}}})},c822:function(t,e,n){},d04b:function(t,e,n){"use strict";n("c822")}}]);
//# sourceMappingURL=Parentcomponentexample.6f0787e3.js.map
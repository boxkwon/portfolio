(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Parentcomponentexample2"],{"87df":function(n,t,e){"use strict";e.r(t);var c=e("7a23"),o=Object(c["J"])("data-v-b019e822");Object(c["s"])("data-v-b019e822");var a={class:"view"};Object(c["q"])();var u=o((function(n,t,e,o,u,d){var i=Object(c["w"])("ChildComponent2");return Object(c["p"])(),Object(c["d"])("div",a,[Object(c["g"])("button",{type:"button",onClick:t[1]||(t[1]=function(){return d.callChildFunc&&d.callChildFunc.apply(d,arguments)})},"부모에 있는 클릭"),Object(c["g"])(i,{ref:"child_component"},null,512)])})),d=Object(c["J"])("data-v-7023730a");Object(c["s"])("data-v-7023730a");var i={class:"view"};Object(c["q"])();var r=d((function(n,t,e,o,a,u){return Object(c["p"])(),Object(c["d"])("div",i,[Object(c["g"])("button",{type:"button",onClick:t[1]||(t[1]=function(){return u.childFunc&&u.childFunc.apply(u,arguments)}),ref:"child_btn"},"자식에 있는 클릭",512)])})),l={name:"",components:{},data:function(){return{sampleData:""}},setup:function(){},created:function(){},mounted:function(){},unmounted:function(){},methods:{childFunc:function(){alert("부모 컴포넌트에서 직접 발생시킨 이벤트")}}};l.render=r,l.__scopeId="data-v-7023730a";var p=l,b={name:"",components:{ChildComponent2:p},data:function(){return{}},setup:function(){},created:function(){},mounted:function(){},unmounted:function(){},methods:{callChildFunc:function(){this.$refs.child_component.$refs.child_btn.click()}}};b.render=u,b.__scopeId="data-v-b019e822";t["default"]=b}}]);
//# sourceMappingURL=Parentcomponentexample2.c3adb1a8.js.map
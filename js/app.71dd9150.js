(function(e){function t(t){for(var a,o,d=t[0],c=t[1],s=t[2],u=0,m=[];u<d.length;u++)o=d[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(m.length)m.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,d=1;d<n.length;d++){var c=n[d];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/todo20220311/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],c=d.push.bind(d);d.push=t,d=d.slice();for(var s=0;s<d.length;s++)t(d[s]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2e3b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-app",[n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{md:"8"}},[n("v-toolbar",{staticClass:"mb-8"},[n("v-app-bar-nav-icon"),n("v-toolbar-title",[e._v("支出 "+e._s(e.getTotal(e.rows)))]),n("v-spacer"),n("v-btn",{attrs:{icon:"",color:"green darken-2"},on:{click:e.openForm}},[n("v-icon",[e._v("mdi-plus-circle-outline")])],1),n("v-btn",{attrs:{icon:"",color:"orange darken-2"}},[n("v-icon",[e._v("mdi-home-heart")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-dots-vertical")])],1)],1),n("v-form",{directives:[{name:"show",rawName:"v-show",value:e.isEdit,expression:"isEdit"}]},[n("v-text-field",{attrs:{label:"項目","hide-details":"auto"},model:{value:e.editedItem.title,callback:function(t){e.$set(e.editedItem,"title",t)},expression:"editedItem.title"}}),n("v-text-field",{attrs:{label:"金額",type:"number"},model:{value:e.editedItem.amt,callback:function(t){e.$set(e.editedItem,"amt",t)},expression:"editedItem.amt"}}),n("v-text-field",{attrs:{label:"日期",type:"date"},model:{value:e.editedItem.date,callback:function(t){e.$set(e.editedItem,"date",t)},expression:"editedItem.date"}}),n("v-row",{staticClass:"mb-6"},[n("v-col",{staticClass:"text-left"},[e.editedIndex>-1?n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(e.editedItem.id,e.editedIndex)}}},[e._v("mdi-delete")]):e._e()],1),n("v-col",{staticClass:"text-right"},[n("v-btn",{staticClass:"white--text",attrs:{color:"green"},on:{click:e.save}},[e._v("儲存")])],1)],1)],1),n("v-simple-table",[n("thead",[n("tr",[n("th",[e._v("日期")]),n("th",[e._v("項目")]),n("th",[e._v("金額")]),n("th")])]),n("tbody",e._l(e.rows,(function(t,a){return n("tr",{key:a},[n("td",[n("v-badge",{attrs:{color:e.getColor(t.date),content:e.getDate(t.date)}})],1),n("td",[e._v(e._s(t.title))]),n("td",[e._v(e._s(t.amt))]),n("td",[n("v-icon",{attrs:{small:""},on:{click:function(n){return e.editItem(t)}}},[e._v("mdi-pencil")])],1)])})),0)])],1)],1)],1)],1)],1)},i=[],o=n("1da1"),d=(n("96cf"),n("fb6a"),n("d3b7"),n("b64b"),n("a434"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("fire")])}),c=[],s=n("260b"),l=n("a680"),u={apiKey:"AIzaSyClLeHQJMt3BzbrK_AHpWeq0nlqzY2r5ik",authDomain:"money-39797.firebaseapp.com",projectId:"money-39797",storageBucket:"money-39797.appspot.com",messagingSenderId:"142963352306",appId:"1:142963352306:web:ac3c09e593009a5175666b",measurementId:"G-012VKYDZ07"},m=Object(s["a"])(u),f=Object(l["g"])(m),p=f,v=p,b=n("2877"),I=Object(b["a"])(v,d,c,!1,null,null,null),h=I.exports,g="spends",w={data:function(){return{rows:[],title:"",amt:"",isEdit:!1,editedIndex:-1,editedItem:{title:"",amt:"",date:(new Date).toISOString().slice(0,10)},defaultItem:{title:"",amt:"",date:""}}},mounted:function(){this.getMoney(),console.log((new Date).toLocaleDateString())},methods:{getColor:function(e){var t=e.toDate().getDay(),n="blue-grey";return"6"==t?n="green":"0"==t&&(n="error"),n},getDate:function(e){return e.toDate().getDate()},getTotal:function(e){console.log(e);var t=Object.keys(e).reduce((function(t,n){return t+1*e[n].amt}),0);return t},getTime:function(e){return e.getMonth()+1+"/"+e.getDate()},editItem:function(e){this.isEdit=!0,this.editedIndex=this.rows.indexOf(e),this.editedItem=Object.assign({},e),this.editedItem.date=this.editedItem.date.toDate().toISOString().slice(0,10)},deleteItem:function(e,t){var n=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(l["d"])(Object(l["e"])(h,g,e));case 2:n.rows.splice(t,1),n.editedItem=Object.assign({},n.defaultItem),n.editedIndex=-1;case 5:case"end":return a.stop()}}),a)})))()},openForm:function(){this.isEdit=!this.isEdit},getMoney:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(l["c"])(h,g),a=Object(l["i"])(n,Object(l["h"])("date","desc")),t.next=4,Object(l["f"])(a);case 4:r=t.sent,r.forEach((function(t){var n=t.data();n.id=t.id,e.rows.push(n)}));case 6:case"end":return t.stop()}}),t)})))()},save:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.editedIndex>-1)){t.next=9;break}return n=Object(l["e"])(h,g,e.editedItem.id),e.editedItem.date=l["a"].fromDate(new Date(e.editedItem.date)),t.next=5,Object(l["j"])(n,e.editedItem);case 5:Object.assign(e.rows[e.editedIndex],e.editedItem),e.$nextTick((function(){e.defaultItem.date="",e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1})),t.next=18;break;case 9:return a=l["a"].fromDate(new Date(e.editedItem.date)),t.next=12,Object(l["b"])(Object(l["c"])(h,g),{date:a,title:e.editedItem.title,amt:e.editedItem.amt});case 12:r=t.sent,e.editedItem.id=r.id,e.editedItem.date=a,e.rows.unshift(e.editedItem),e.defaultItem.date=a.toDate().toISOString().slice(0,10),e.editedItem=Object.assign({},e.defaultItem);case 18:case"end":return t.stop()}}),t)})))()}}},x=w,O=(n("a7a8"),n("6544")),j=n.n(O),y=n("7496"),_=n("5bc1"),k=n("4ca6"),D=n("8336"),S=n("62ad"),V=n("a523"),T=n("4bd4"),C=n("132d"),E=n("0fd9"),M=n("1f4f"),P=n("2fa4"),R=n("8654"),$=n("71d9"),B=n("2a7f"),A=Object(b["a"])(x,r,i,!1,null,null,null),F=A.exports;j()(A,{VApp:y["a"],VAppBarNavIcon:_["a"],VBadge:k["a"],VBtn:D["a"],VCol:S["a"],VContainer:V["a"],VForm:T["a"],VIcon:C["a"],VRow:E["a"],VSimpleTable:M["a"],VSpacer:P["a"],VTextField:R["a"],VToolbar:$["a"],VToolbarTitle:B["a"]});var z=n("f309");a["a"].use(z["a"]);var J=new z["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:J,render:function(e){return e(F)}}).$mount("#app")},a7a8:function(e,t,n){"use strict";n("2e3b")}});
//# sourceMappingURL=app.71dd9150.js.map
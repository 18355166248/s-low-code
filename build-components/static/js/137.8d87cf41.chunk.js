"use strict";(self.webpackChunks_low_components=self.webpackChunks_low_components||[]).push([[137],{645:function(e,n,t){t.d(n,{E:function(){return c},Z:function(){return r}});t(8655);var o=t(9485),i=t.n(o),l={box:"LowTitle_box__aPFM9",lowTitle:"LowTitle_lowTitle__EOIpJ",title:"LowTitle_title__DaihS"},a=t(6775),c={start:{key:"start",label:"\u5c45\u5de6",value:"justify-start"},end:{key:"end",label:"\u5c45\u53f3",value:"justify-end"},center:{label:"\u5c45\u4e2d",key:"center",value:"justify-center"},between:{key:"between",label:"\u4e24\u7aef\u5bf9\u9f50",value:"justify-between"},around:{key:"around",label:"\u95f4\u9694\u76f8\u7b49",value:"justify-around"},evenly:{key:"evenly",label:"\u95f4\u9694\u76f8\u7b492",value:"justify-evenly"}},r=function(e){var n=e.title,t=e.subTitle,o=e.align,r=e.backgroundColor,u=e.paddingX,s=void 0===u?0:u,m=e.paddingY,y=void 0===m?0:m,p=e.titleFontSize,d=void 0===p?20:p,k=e.subTitleFontSize,f=void 0===k?12:k,x=e.titleColor,b=e.subTitleColor;return(0,a.jsx)("div",{className:l.box,style:{backgroundColor:r},children:(0,a.jsxs)("div",{className:i()(l.lowTitle,c[o].value,["flex"]),style:{padding:"".concat(y,"px ").concat(s,"px")},children:[(0,a.jsx)("span",{className:i()([l.title,"flex"]),style:{fontSize:d,color:x},children:n}),(0,a.jsx)("span",{className:l.subTitle,style:{fontSize:f,color:b},children:t})]})})}},5962:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var o=t(2498),i=t(9197),l=t(8655),a=t(6590),c="ColorPicker_colorPicker__85zp1",r="ColorPicker_card__7pm6q",u="ColorPicker_popover__i371w",s="ColorPicker_cover__uZBUD",m=t(6775),y=function(e){var n=e.value,t=e.onChange,o=(0,l.useState)(!1),y=(0,i.Z)(o,2),p=y[0],d=y[1];return(0,m.jsxs)("div",{className:c,children:[(0,m.jsx)("div",{className:r,style:{backgroundColor:n},onClick:function(){return d(!0)}}),p?(0,m.jsxs)("div",{className:u,children:[(0,m.jsx)("div",{className:s,onClick:function(){return d(!1)}}),(0,m.jsx)(a.xS,{width:"250",color:n,onChange:function(e){var n=e.rgb,o=n.r,i=n.g,l=n.b,a=n.a;t&&t("rgba(".concat(o,", ").concat(i,", ").concat(l,", ").concat(a,")"))}})]}):null]})},p=t(647),d=t(8579),k=t(645),f=function(e){var n=e.value,t=e.onChange;return(0,m.jsx)(p.ZP.Group,{size:"small",value:n,onChange:function(e){(0,d.Z)(t)&&t(e.target.value)},children:Object.values(k.E).map((function(e){return(0,m.jsx)(p.ZP.Button,{value:e.key,children:e.label},e.key)}))})},x=t(4559),b={LowImage:{list:[{key:"imgContent",name:"\u56fe\u7247\u5185\u5bb9",type:"title",children:[{key:"url",name:"\u56fe\u7247\u4e0a\u4f20",type:"custom",component:(0,l.lazy)((function(){return Promise.all([t.e(319),t.e(610),t.e(903)]).then(t.bind(t,7074))}))},{key:"jumpConfig",name:"\u9875\u9762\u8df3\u8f6c",type:"custom",component:(0,l.lazy)((function(){return Promise.all([t.e(319),t.e(348),t.e(443),t.e(972)]).then(t.bind(t,4078))}))}]},{key:"imgStyle",name:"\u56fe\u7247\u6837\u5f0f",type:"title",children:[{key:"paddingXY",name:"\u5de6\u53f3\u8fb9\u8ddd",type:"custom",component:function(e){return(0,m.jsx)(x.Z,(0,o.Z)({min:0,max:100},e))}},{key:"radiusDep",name:"\u56fe\u7247\u5706\u89d2",type:"custom",component:function(e){return(0,m.jsx)(x.Z,(0,o.Z)({min:0,max:50},e))}},{key:"paddingTop",name:"\u4e0a\u8fb9\u8ddd",type:"custom",component:function(e){return(0,m.jsx)(x.Z,(0,o.Z)({min:0,max:100},e))}},{key:"paddingBottom",name:"\u4e0b\u8fb9\u8ddd",type:"custom",component:function(e){return(0,m.jsx)(x.Z,(0,o.Z)({min:0,max:100},e))}}]}]},LowTitle:{subLabelWidth:70,list:[{key:"titleContent",name:"\u6807\u9898\u5185\u5bb9",type:"title",children:[{key:"title",name:"\u6807\u9898",type:"Input"},{key:"subTitle",name:"\u526f\u6807\u9898",type:"Input"}]},{key:"titleFlex",name:"\u6807\u9898\u5e03\u5c40",type:"title",children:[{key:"align",name:"\u5e03\u5c40\u9009\u62e9",type:"custom",component:function(e){return(0,m.jsx)(f,(0,o.Z)({},e))}}]},{key:"titleStyle",name:"\u6807\u9898\u6837\u5f0f",type:"title",children:[{key:"paddingX",name:"\u5de6\u53f3\u8fb9\u8ddd",type:"custom",component:function(e){return(0,m.jsx)(x.Z,(0,o.Z)({min:0,max:100},e))}},{key:"paddingY",name:"\u4e0a\u4e0b\u8fb9\u8ddd",type:"custom",component:function(e){return(0,m.jsx)(x.Z,(0,o.Z)({min:0,max:100},e))}},{key:"titleFontSize",name:"\u6807\u9898\u5b57\u4f53",type:"custom",component:function(e){return(0,m.jsx)(x.Z,(0,o.Z)({min:10,max:50},e))}},{key:"subTitleFontSize",name:"\u526f\u6807\u9898\u5b57\u4f53",type:"custom",component:function(e){return(0,m.jsx)(x.Z,(0,o.Z)({min:10,max:50},e))}},{key:"titleColor",name:"\u6807\u9898\u989c\u8272",type:"custom",component:function(e){return(0,m.jsx)(y,(0,o.Z)({},e))}},{key:"subTitleColor",name:"\u526f\u6807\u9898\u989c\u8272",type:"custom",component:function(e){return(0,m.jsx)(y,(0,o.Z)({},e))}},{key:"backgroundColor",name:"\u80cc\u666f\u8272",type:"custom",component:function(e){return(0,m.jsx)(y,(0,o.Z)({},e))}}]}]}}}}]);
//# sourceMappingURL=137.8d87cf41.chunk.js.map
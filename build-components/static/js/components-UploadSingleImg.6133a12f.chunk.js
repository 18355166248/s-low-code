"use strict";(self.webpackChunks_low_components=self.webpackChunks_low_components||[]).push([[903],{5151:function(e,t,n){n.r(t);var a=n(4591),r=n(2264),s=n(5257),o=n(7054),i=n(1454),l=n(6956),c=n(4073),u=n(7978),d=n(4625);t.default=function(e){var t=e.onChange,n=e.value,p=(0,s.useState)(!1),f=(0,a.Z)(p,2),h=f[0],m=f[1],v=(0,s.useState)(),w=(0,a.Z)(v,2),Z=w[0],g=w[1];(0,s.useEffect)((function(){g(n)}),[n]);var j=(0,d.jsxs)("div",{children:[h?(0,d.jsx)(o.Z,{}):(0,d.jsx)(i.Z,{}),(0,d.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,d.jsx)(r.Z,{rotationSlider:!0,children:(0,d.jsx)(u.Z,{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",listType:"picture-card",showUploadList:!1,beforeUpload:function(e){return"image/jpeg"===e.type||"image/png"===e.type||c.ZP.error("You can only upload JPG/PNG file!"),e.size/1024/1024<2||c.ZP.error("Image must smaller than 2MB!"),function(e,t){var n=new FileReader;n.addEventListener("load",(function(){return t(n.result)})),n.readAsDataURL(e)}(e,(function(e){m(!1),g(e),(0,l.Z)(t)&&t(e)})),!1},children:Z?(0,d.jsx)("img",{src:Z,alt:"avatar",style:{width:"100%"}}):j})})}}}]);
//# sourceMappingURL=components-UploadSingleImg.6133a12f.chunk.js.map
"use strict";(self.webpackChunks_low_components=self.webpackChunks_low_components||[]).push([[903],{7074:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(2498),r=a(1063),o=a(3697),s=a(8655),i=a(6183),l=a(3928),c=a(6881),u=a(4387),d="SLOW_AUTH_TOKEN";var p=a(6775),f={beforeUpload:function(e){var t=e.type.indexOf("image/")>-1;return t||c.ZP.error("".concat(e.name," is not a png file")),e.size/1024/1024<2||c.ZP.error("Image must smaller than 2MB!"),t||u.Z.LIST_IGNORE},action:"".concat("http://101.43.11.224:13000","/api/v1/upload/file"),headers:{Authorization:"Bearer "+localStorage.getItem(d)},listType:"picture-card",showUploadList:!1},h=function(e){var t=e.onChange,a=e.value,c=(0,s.useState)(!1),d=(0,r.Z)(c,2),h=d[0],v=(d[1],(0,s.useState)()),Z=(0,r.Z)(v,2),m=Z[0],g=Z[1];(0,s.useEffect)((function(){g(a)}),[a]);var x=(0,p.jsxs)("div",{children:[h?(0,p.jsx)(i.Z,{}):(0,p.jsx)(l.Z,{}),(0,p.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,p.jsx)(o.Z,{rotationSlider:!0,children:(0,p.jsx)(u.Z,(0,n.Z)((0,n.Z)({},f),{},{onChange:function(e){var a=e.file;"done"===a.status&&t(a.response.data)},children:m?(0,p.jsx)("img",{src:m,alt:"avatar",style:{width:"100%"}}):x}))})}}}]);
//# sourceMappingURL=components-UploadSingleImg.d1b9ceac.chunk.js.map
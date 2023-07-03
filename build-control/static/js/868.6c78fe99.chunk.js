"use strict";(self.webpackChunks_low_control=self.webpackChunks_low_control||[]).push([[868,278],{3278:function(e,r,t){t.r(r),t.d(r,{Observer:function(){return x},clearTimers:function(){return E},enableStaticRendering:function(){return p},isObserverBatched:function(){return f},isUsingStaticRendering:function(){return v},observer:function(){return j},observerBatching:function(){return c},useAsObservableSource:function(){return z},useLocalObservable:function(){return P},useLocalStore:function(){return k},useObserver:function(){return M},useStaticRendering:function(){return _}});var n=t(8082),o=t(9892),i=t.n(o);if(!o.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!n.rC)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");var u=t(1549);function a(e){e()}function c(e){e||(e=a),(0,n.jQ)({reactionScheduler:e})}var f=function(){return!0};function l(e){return(0,n.Gf)(e)}var s=function(){function e(e){var r=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(e){void 0===e&&(e=1e4),clearTimeout(r.sweepTimeout),r.sweepTimeout=void 0;var t=Date.now();r.registrations.forEach((function(n,o){t-n.registeredAt>=e&&(r.finalize(n.value),r.registrations.delete(o))})),r.registrations.size>0&&r.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){r.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(e,r,t){this.registrations.set(t,{value:r,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.registrations.delete(e)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){void 0===this.sweepTimeout&&(this.sweepTimeout=setTimeout(this.sweep,1e4))}}),e}(),d=new("undefined"!==typeof FinalizationRegistry?FinalizationRegistry:s)((function(e){var r;null===(r=e.reaction)||void 0===r||r.dispose(),e.reaction=null})),b=!1;function p(e){b=e}function v(){return b}var y=function(e,r){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,o,i=t.call(e),u=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(a){o={error:a}}finally{try{n&&!n.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return u};function m(e){return"observer".concat(e)}var w=function(){};function h(){return new w}function g(e,r){if(void 0===r&&(r="observed"),v())return e();var t=y(i().useState(h),1)[0],o=y(i().useState(),2)[1],u=function(){return o([])},a=i().useRef(null);a.current||(a.current={reaction:null,mounted:!1,changedBeforeMount:!1});var c,f,s=a.current;if(s.reaction||(s.reaction=new n.le(m(r),(function(){s.mounted?u():s.changedBeforeMount=!0})),d.register(t,s,s)),i().useDebugValue(s.reaction,l),i().useEffect((function(){return d.unregister(s),s.mounted=!0,s.reaction?s.changedBeforeMount&&(s.changedBeforeMount=!1,u()):(s.reaction=new n.le(m(r),(function(){u()})),u()),function(){s.reaction.dispose(),s.reaction=null,s.mounted=!1,s.changedBeforeMount=!1}}),[]),s.reaction.track((function(){try{c=e()}catch(r){f=r}})),f)throw f;return c}var S="function"===typeof Symbol&&Symbol.for,O=S?Symbol.for("react.forward_ref"):"function"===typeof o.forwardRef&&(0,o.forwardRef)((function(e){return null})).$$typeof,R=S?Symbol.for("react.memo"):"function"===typeof o.memo&&(0,o.memo)((function(e){return null})).$$typeof;function j(e,r){var t;if(R&&e.$$typeof===R)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");if(v())return e;var n=null!==(t=null===r||void 0===r?void 0:r.forwardRef)&&void 0!==t&&t,i=e,u=e.displayName||e.name;if(O&&e.$$typeof===O&&(n=!0,"function"!==typeof(i=e.render)))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var a,c,f=function(e,r){return g((function(){return i(e,r)}),u)};return""!==u&&(f.displayName=u),e.contextTypes&&(f.contextTypes=e.contextTypes),n&&(f=(0,o.forwardRef)(f)),f=(0,o.memo)(f),a=e,c=f,Object.keys(a).forEach((function(e){T[e]||Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(a,e))})),f}var T={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};function x(e){var r=e.children,t=e.render,n=r||t;return"function"!==typeof n?null:g(n)}function P(e,r){return(0,o.useState)((function(){return(0,n.LO)(e(),r,{autoBind:!0})}))[0]}x.displayName="Observer";var $,B=function(e,r){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,o,i=t.call(e),u=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(a){o={error:a}}finally{try{n&&!n.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return u};function z(e){var r=B((0,o.useState)((function(){return(0,n.LO)(e,{},{deep:!1})})),1)[0];return(0,n.z)((function(){Object.assign(r,e)})),r}function k(e,r){var t=r&&z(r);return(0,o.useState)((function(){return(0,n.LO)(e(t),void 0,{autoBind:!0})}))[0]}c(u.unstable_batchedUpdates);var E=null!==($=d.finalizeAllImmediately)&&void 0!==$?$:function(){};function M(e,r){return void 0===r&&(r="observed"),g(e,r)}function _(e){p(e)}}}]);
//# sourceMappingURL=868.6c78fe99.chunk.js.map
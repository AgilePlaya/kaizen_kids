"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[775],{3500:(e,t,n)=>{let r,o;n.d(t,{L:()=>X});var i=n(4785),l=n(8601),s=n(6540),f=n(8104),u=n(7007);let c=new WeakMap;function a({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=c.get(e))||void 0===r||r.forEach(r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function g(e){e.forEach(a)}let d=new Set;var h=n(7170),p=n(7177);let m=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),v=()=>({time:0,x:m(),y:m()}),y={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function w(e,t,n,r){let o=n[t],{length:i,position:l}=y[t],s=o.current,f=n.time;o.current=e[`scroll${l}`],o.scrollLength=e[`scroll${i}`]-e[`client${i}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=(0,h.q)(0,o.scrollLength,o.current);let u=r-f;o.velocity=u>50?0:(0,p.f)(o.current-s,u)}let E={All:[[0,0],[1,1]]},x={start:0,center:.5,end:1};function W(e,t,n=0){let r=0;if(e in x&&(e=x[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}let L=[0,0];var b=n(8844),G=n(1899);let O={x:0,y:0};var B=n(104);let z=new WeakMap,H=new WeakMap,S=new WeakMap,k=e=>e===document.documentElement?window:e;function M(e,{container:t=document.documentElement,...n}={}){let i=S.get(t);i||(i=new Set,S.set(t,i));let l=function(e,t,n,r={}){return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{w(e,"x",n,t),w(e,"y",n,t),n.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=E.All}=n,{target:o=e,axis:i="y"}=n,l="y"===i?"height":"width",s=o!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){let e=r.getBoundingClientRect(),t=(r=r.parentElement).getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else if(r instanceof SVGGraphicsElement){let{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let o=null,i=r.parentNode;for(;!o;)"svg"===i.tagName&&(o=i),i=r.parentNode;r=o}else break;return n}(o,e):O,f=o===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in o&&"svg"!==o.tagName?o.getBBox():{width:o.clientWidth,height:o.clientHeight},u={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let c=!t[i].interpolate,a=r.length;for(let e=0;e<a;e++){let n=function(e,t,n,r){let o=Array.isArray(e)?e:L,i=0;return"number"==typeof e?o=[e,e]:"string"==typeof e&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,x[e]?e:"0"]),W(o[0],n,r)-W(o[1],t)}(r[e],u[l],f[l],s[i]);c||n===t[i].interpolatorOffsets[e]||(c=!0),t[i].offset[e]=n}c&&(t[i].interpolate=(0,b.G)(t[i].offset,(0,G.Z)(r)),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=t[i].interpolate(t[i].current)}(e,n,r)},notify:()=>t(n)}}(t,e,v(),n);if(i.add(l),!z.has(t)){let e=()=>{for(let e of i)e.measure()},n=()=>{for(let e of i)e.update(B.uv.timestamp)},l=()=>{for(let e of i)e.notify()},s=()=>{B.Gt.read(e,!1,!0),B.Gt.read(n,!1,!0),B.Gt.update(l,!1,!0)};z.set(t,s);let f=k(t);window.addEventListener("resize",s,{passive:!0}),t!==document.documentElement&&H.set(t,"function"==typeof t?(d.add(t),o||(o=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};d.forEach(e=>e(t))},window.addEventListener("resize",o)),()=>{d.delete(t),!d.size&&o&&(o=void 0)}):function(e,t){r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(g));let n=(0,u.KJ)(e);return n.forEach(e=>{let n=c.get(e);n||(n=new Set,c.set(e,n)),n.add(t),null==r||r.observe(e)}),()=>{n.forEach(e=>{let n=c.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==r||r.unobserve(e)})}}(t,s)),f.addEventListener("scroll",s,{passive:!0})}let s=z.get(t);return B.Gt.read(s,!1,!0),()=>{var e;(0,B.WG)(s);let n=S.get(t);if(!n||(n.delete(l),n.size))return;let r=z.get(t);z.delete(t),r&&(k(t).removeEventListener("scroll",r),null===(e=H.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}function A(e,t){let n;let r=()=>{let{currentTime:r}=t,o=(null===r?0:r.value)/100;n!==o&&e(o),n=o};return B.Gt.update(r,!0),()=>(0,B.WG)(r)}var N=n(9179),T=n(1533);let P=new Map;function Q({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),P.has(t)||P.set(t,{});let r=P.get(t);return r[n]||(r[n]=(0,N.J)()?new ScrollTimeline({source:t,axis:n}):function({source:e,container:t,axis:n="y"}){e&&(t=e);let r={value:0},o=M(e=>{r.value=100*e[n].progress},{container:t,axis:n});return{currentTime:r,cancel:o}}({source:t,axis:n})),r[n]}function C(e){return e&&(e.target||e.offset)}var R=n(5128);function Y(e,t){(0,f.$)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let $=()=>({scrollX:(0,i.OQ)(0),scrollY:(0,i.OQ)(0),scrollXProgress:(0,i.OQ)(0),scrollYProgress:(0,i.OQ)(0)});function X({container:e,target:t,layoutEffect:n=!0,...r}={}){let o=(0,l.M)($);return(n?R.E:s.useEffect)(()=>(Y("target",t),Y("container",e),function(e,{axis:t="y",...n}={}){let r={axis:t,...n};return"function"==typeof e?2===e.length||C(r)?M(t=>{e(t[r.axis].progress,t)},r):A(e,Q(r)):function(e,t){if(e.flatten(),C(t))return e.pause(),M(n=>{e.time=e.duration*n[t.axis].progress},t);{let n=Q(t);return e.attachTimeline?e.attachTimeline(n,e=>(e.pause(),A(t=>{e.time=e.duration*t},n))):T.l}}(e,r)}((e,{x:t,y:n})=>{o.scrollX.set(t.current),o.scrollXProgress.set(t.progress),o.scrollY.set(n.current),o.scrollYProgress.set(n.progress)},{...r,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),o}},1756:(e,t,n)=>{n.d(t,{G:()=>d});var r=n(8844);let o=e=>e&&"object"==typeof e&&e.mix,i=e=>o(e)?e.mix:void 0;var l=n(6540),s=n(4785),f=n(5446),u=n(8601),c=n(5128),a=n(104);function g(e,t){let n=function(e){let t=(0,u.M)(()=>(0,s.OQ)(e)),{isStatic:n}=(0,l.useContext)(f.Q);if(n){let[,n]=(0,l.useState)(e);(0,l.useEffect)(()=>t.on("change",n),[])}return t}(t()),r=()=>n.set(t());return r(),(0,c.E)(()=>{let t=()=>a.Gt.preRender(r,!1,!0),n=e.map(e=>e.on("change",t));return()=>{n.forEach(e=>e()),(0,a.WG)(r)}}),n}function d(e,t,n,o){if("function"==typeof e)return function(e){s.bt.current=[],e();let t=g(s.bt.current,e);return s.bt.current=void 0,t}(e);let l="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),n=t?0:-1,o=e[0+n],l=e[1+n],s=e[2+n],f=e[3+n],u=(0,r.G)(l,s,{mixer:i(s[0]),...f});return t?u(o):u}(t,n,o);return Array.isArray(e)?h(e,l):h([e],([e])=>l(e))}function h(e,t){let n=(0,u.M)(()=>[]);return g(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}}}]);
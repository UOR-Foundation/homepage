"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[624],{612:(e,t,n)=>{let r,o;n.d(t,{L:()=>_});var i=n(6730),l=n(3434),s=n(7307),f=n(9524),c=n(8983),a=n(6403);function u(e,t){let n;let r=()=>{let{currentTime:r}=t,o=(null===r?0:r.value)/100;n!==o&&e(o),n=o};return a.Gt.update(r,!0),()=>(0,a.WG)(r)}var g=n(7550);let d=new WeakMap;function h({target:e,contentRect:t,borderBoxSize:n}){d.get(e)?.forEach(r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function p(e){e.forEach(h)}let m=new Set;var y=n(2862),v=n(239);let w=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),E=()=>({time:0,x:w(),y:w()}),x={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function W(e,t,n,r){let o=n[t],{length:i,position:l}=x[t],s=o.current,f=n.time;o.current=e[`scroll${l}`],o.scrollLength=e[`scroll${i}`]-e[`client${i}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=(0,y.q)(0,o.scrollLength,o.current);let c=r-f;o.velocity=c>50?0:(0,v.f)(o.current-s,c)}var L=n(8023),b=n(4627),G=n(5500);let O={start:0,center:.5,end:1};function B(e,t,n=0){let r=0;if(e in O&&(e=O[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}let z=[0,0],H={All:[[0,0],[1,1]]},S={x:0,y:0},k=new WeakMap,M=new WeakMap,A=new WeakMap,N=e=>e===document.documentElement?window:e;function T(e,{container:t=document.documentElement,...n}={}){let i=A.get(t);i||(i=new Set,A.set(t,i));let l=function(e,t,n,r={}){return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{W(e,"x",n,t),W(e,"y",n,t),n.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=H.All}=n,{target:o=e,axis:i="y"}=n,l="y"===i?"height":"width",s=o!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){let e=r.getBoundingClientRect(),t=(r=r.parentElement).getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else if(r instanceof SVGGraphicsElement){let{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let o=null,i=r.parentNode;for(;!o;)"svg"===i.tagName&&(o=i),i=r.parentNode;r=o}else break;return n}(o,e):S,f=o===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in o&&"svg"!==o.tagName?o.getBBox():{width:o.clientWidth,height:o.clientHeight},c={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let a=!t[i].interpolate,u=r.length;for(let e=0;e<u;e++){let n=function(e,t,n,r){let o=Array.isArray(e)?e:z,i=0,l=0;return"number"==typeof e?o=[e,e]:"string"==typeof e&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,O[e]?e:"0"]),(i=B(o[0],n,r))-B(o[1],t)}(r[e],c[l],f[l],s[i]);a||n===t[i].interpolatorOffsets[e]||(a=!0),t[i].offset[e]=n}a&&(t[i].interpolate=(0,b.G)(t[i].offset,(0,G.Z)(r),{clamp:!1}),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=(0,L.q)(0,1,t[i].interpolate(t[i].current))}(e,n,r)},notify:()=>t(n)}}(t,e,E(),n);if(i.add(l),!k.has(t)){let e=()=>{for(let e of i)e.measure()},n=()=>{for(let e of i)e.update(a.uv.timestamp)},l=()=>{for(let e of i)e.notify()},s=()=>{a.Gt.read(e,!1,!0),a.Gt.read(n,!1,!0),a.Gt.update(l,!1,!0)};k.set(t,s);let f=N(t);if(window.addEventListener("resize",s,{passive:!0}),t!==document.documentElement)M.set(t,"function"==typeof t?(m.add(t),o||(o=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};m.forEach(e=>e(t))},window.addEventListener("resize",o)),()=>{m.delete(t),!m.size&&o&&(o=void 0)}):function(e,t){r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(p));let n=(0,g.K)(e);return n.forEach(e=>{let n=d.get(e);n||(n=new Set,d.set(e,n)),n.add(t),r?.observe(e)}),()=>{n.forEach(e=>{let n=d.get(e);n?.delete(t),n?.size||r?.unobserve(e)})}}(t,s));f.addEventListener("scroll",s,{passive:!0})}let s=k.get(t);return a.Gt.read(s,!1,!0),()=>{(0,a.WG)(s);let e=A.get(t);if(!e||(e.delete(l),e.size))return;let n=k.get(t);k.delete(t),n&&(N(t).removeEventListener("scroll",n),M.get(t)?.(),window.removeEventListener("resize",n))}}let P=new Map;function Q({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),P.has(t)||P.set(t,{});let r=P.get(t);return r[n]||(r[n]=(0,f.J)()?new ScrollTimeline({source:t,axis:n}):function({source:e,container:t,axis:n="y"}){e&&(t=e);let r={value:0},o=T(e=>{r.value=100*e[n].progress},{container:t,axis:n});return{currentTime:r,cancel:o}}({source:t,axis:n})),r[n]}function C(e){return e&&(e.target||e.offset)}var R=n(7758),Y=n(7103);function $(e,t){(0,l.$)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let X=()=>({scrollX:(0,i.OQ)(0),scrollY:(0,i.OQ)(0),scrollXProgress:(0,i.OQ)(0),scrollYProgress:(0,i.OQ)(0)});function _({container:e,target:t,layoutEffect:n=!0,...r}={}){let o=(0,R.M)(X);return(n?Y.E:s.useEffect)(()=>($("target",t),$("container",e),function(e,{axis:t="y",...n}={}){var r,o;let i={axis:t,...n};return"function"==typeof e?(r=e,o=i,2===r.length||C(o)?T(e=>{r(e[o.axis].progress,e)},o):u(r,Q(o))):function(e,t){if(e.flatten(),C(t))return e.pause(),T(n=>{e.time=e.duration*n[t.axis].progress},t);{let n=Q(t);return e.attachTimeline?e.attachTimeline(n,e=>(e.pause(),u(t=>{e.time=e.duration*t},n))):c.l}}(e,i)}((e,{x:t,y:n})=>{o.scrollX.set(t.current),o.scrollXProgress.set(t.progress),o.scrollY.set(n.current),o.scrollYProgress.set(n.progress)},{...r,container:e?.current||void 0,target:t?.current||void 0})),[e,t,JSON.stringify(r.offset)]),o}},5123:(e,t,n)=>{n.d(t,{G:()=>d});var r=n(4627);let o=e=>e&&"object"==typeof e&&e.mix,i=e=>o(e)?e.mix:void 0;var l=n(7758),s=n(6403),f=n(7103),c=n(6730),a=n(7307),u=n(4933);function g(e,t){let n=function(e){let t=(0,l.M)(()=>(0,c.OQ)(e)),{isStatic:n}=(0,a.useContext)(u.Q);if(n){let[,n]=(0,a.useState)(e);(0,a.useEffect)(()=>t.on("change",n),[])}return t}(t()),r=()=>n.set(t());return r(),(0,f.E)(()=>{let t=()=>s.Gt.preRender(r,!1,!0),n=e.map(e=>e.on("change",t));return()=>{n.forEach(e=>e()),(0,s.WG)(r)}}),n}function d(e,t,n,o){if("function"==typeof e)return function(e){c.bt.current=[],e();let t=g(c.bt.current,e);return c.bt.current=void 0,t}(e);let l="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),n=t?0:-1,o=e[0+n],l=e[1+n],s=e[2+n],f=e[3+n],c=(0,r.G)(l,s,{mixer:i(s[0]),...f});return t?c(o):c}(t,n,o);return Array.isArray(e)?h(e,l):h([e],([e])=>l(e))}function h(e,t){let n=(0,l.M)(()=>[]);return g(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}}}]);
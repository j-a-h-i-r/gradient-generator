import{S as t,i as e,s as n,e as o,a as r,b as i,c as s,d as l,f as c,l as a,t as d,n as u,g as f,r as p,h as g,j as h,m,k as $,o as b,p as y,q as v,u as x,v as w,w as k,x as P,y as C,z as L}from"./vendor.9d71d886.js";!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const n of t)if("childList"===n.type)for(const t of n.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),"use-credentials"===t.crossorigin?e.credentials="include":"anonymous"===t.crossorigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();function E(t){let e,n,g,h,m,$;return{c(){e=o("div"),n=o("input"),g=r(),h=o("input"),i(n,"type","color"),i(n,"class","rounded mr-2"),i(h,"type","number"),i(h,"class","rounded px-2")},m(o,r){s(o,e,r),l(e,n),c(n,t[0]),l(e,g),l(e,h),c(h,t[1]),m||($=[a(n,"input",t[2]),a(h,"input",t[3])],m=!0)},p(t,[e]){1&e&&c(n,t[0]),2&e&&d(h.value)!==t[1]&&c(h,t[1])},i:u,o:u,d(t){t&&f(e),m=!1,p($)}}}function j(t,e,n){let{color:o="white"}=e,{stopPosition:r}=e;const i=g();return t.$$set=t=>{"color"in t&&n(0,o=t.color),"stopPosition"in t&&n(1,r=t.stopPosition)},t.$$.update=()=>{1&t.$$.dirty&&i("colorChanged",o),2&t.$$.dirty&&i("stopChanged",r)},[o,r,function(){o=this.value,n(0,o)},function(){r=d(this.value),n(1,r)}]}class q extends t{constructor(t){super(),e(this,t,j,E,n,{color:0,stopPosition:1})}}function N(t,e,n){const o=t.slice();return o[13]=e[n],o}function A(t){let e,n,c,d,u,p,g;function v(){return t[12](t[13])}return n=new q({props:{color:t[13].color,stopPosition:t[13].stop}}),n.$on("colorChanged",(function(...e){return t[10](t[13],...e)})),n.$on("stopChanged",(function(...e){return t[11](t[13],...e)})),{c(){e=o("div"),h(n.$$.fragment),c=r(),d=o("button"),d.textContent="×",i(d,"type","button"),i(d,"class","ml-2 bg-pink-500 rounded px-2 shadow text-white font-bold"),i(e,"class","flex py-1")},m(t,o){s(t,e,o),m(n,e,null),l(e,c),l(e,d),u=!0,p||(g=a(d,"click",v),p=!0)},p(e,o){t=e;const r={};1&o&&(r.color=t[13].color),1&o&&(r.stopPosition=t[13].stop),n.$set(r)},i(t){u||($(n.$$.fragment,t),u=!0)},o(t){b(n.$$.fragment,t),u=!1},d(t){t&&f(e),y(n),p=!1,g()}}}function B(t){let e,n,d,u,g,h,m,y,L,E,j,q,B,I,M,S=t[0],z=[];for(let o=0;o<S.length;o+=1)z[o]=A(N(t,S,o));const H=t=>b(z[t],1,1,(()=>{z[t]=null}));return{c(){e=o("div"),n=o("div"),d=o("div"),d.innerHTML='<p class="text-gray-700">Press h to hide this box. Press h to unhide again</p>',u=r(),g=o("div"),h=o("input"),m=r(),y=o("label"),L=v(t[1]),E=r();for(let t=0;t<z.length;t+=1)z[t].c();j=r(),q=o("button"),q.textContent="Add Color",i(d,"class","mb-4"),i(h,"class","flex-1"),i(h,"type","range"),i(h,"min","0"),i(h,"max","360"),i(h,"name","degree"),i(y,"class","bg-blue-400 font-bold ml-2 px-3 rounded-full text-white"),i(y,"for","degree"),i(g,"class","flex"),i(q,"type","button"),i(q,"class","px-2 shadow bg-blue-500 rounded text-white mt-2 py-1"),i(n,"class","border-2 rounded p-4 bg-gray-300 ring-1 ring-white"),x(n,"visibility",t[2]?"visible":"hidden"),i(e,"class","container svelte-5q2ls3"),x(e,"background-image",t[3])},m(o,r){s(o,e,r),l(e,n),l(n,d),l(n,u),l(n,g),l(g,h),c(h,t[1]),l(g,m),l(g,y),l(y,L),l(n,E);for(let t=0;t<z.length;t+=1)z[t].m(n,null);l(n,j),l(n,q),B=!0,I||(M=[a(window,"keydown",t[8]),a(h,"change",t[9]),a(h,"input",t[9]),a(q,"click",t[4])],I=!0)},p(t,[o]){if(2&o&&c(h,t[1]),(!B||2&o)&&w(L,t[1]),225&o){let e;for(S=t[0],e=0;e<S.length;e+=1){const r=N(t,S,e);z[e]?(z[e].p(r,o),$(z[e],1)):(z[e]=A(r),z[e].c(),$(z[e],1),z[e].m(n,j))}for(k(),e=S.length;e<z.length;e+=1)H(e);P()}(!B||4&o)&&x(n,"visibility",t[2]?"visible":"hidden"),(!B||8&o)&&x(e,"background-image",t[3])},i(t){if(!B){for(let t=0;t<S.length;t+=1)$(z[t]);B=!0}},o(t){z=z.filter(Boolean);for(let e=0;e<z.length;e+=1)b(z[e]);B=!1},d(t){t&&f(e),C(z,t),I=!1,p(M)}}}function I(t,e,n){let o=[{id:L(),color:"#ffffff"},{id:L(),color:"#000000",stop:50}],r=0,i=!0,s="";function l(t){o.length<=2?alert("Can't have less than 2 colors"):n(0,o=o.filter((e=>e.id!==t)))}function c(t,e){o.forEach((n=>{n.id===t&&(n.color=e)})),n(0,o)}function a(t,e){o.forEach((n=>{n.id===t&&(n.stop=e)})),n(0,o)}return t.$$.update=()=>{3&t.$$.dirty&&n(3,s=function(t,e){return`linear-gradient(${t}deg, ${e.map((t=>{let e="";return e+=t.color,t.stop&&(e+=` ${t.stop}%`),e})).join(", ")})`}(r,o))},[o,r,i,s,function(){n(0,o=[...o,{id:L(),color:"#ffffff"}])},l,c,a,function(t){"h"===t.key&&n(2,i=!i)},function(){r=d(this.value),n(1,r)},(t,e)=>c(t.id,e.detail),(t,e)=>a(t.id,e.detail),t=>l(t.id)]}class M extends t{constructor(t){super(),e(this,t,I,B,n,{})}}function S(t){let e,n,r;return n=new M({}),{c(){e=o("main"),h(n.$$.fragment)},m(t,o){s(t,e,o),m(n,e,null),r=!0},p:u,i(t){r||($(n.$$.fragment,t),r=!0)},o(t){b(n.$$.fragment,t),r=!1},d(t){t&&f(e),y(n)}}}new class extends t{constructor(t){super(),e(this,t,null,S,n,{})}}({target:document.getElementById("app")});

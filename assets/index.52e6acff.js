import{_ as G,d as P,b as R,c as D,w as o}from"./app.138ae8ae.js";import{u as j}from"./useBaseMapEffect.edef97dd.js";import{b as q}from"./bindEvents.81d30a10.js";import{u as z}from"./useLife.0bb6c8a9.js";const A=P({props:{center:null,radius:null,strokeColor:{default:"#000"},strokeOpacity:{default:1},fillColor:{default:"#fff"},fillOpacity:{default:.3},strokeWeight:{default:2},strokeStyle:{default:"solid"},enableMassClear:{type:Boolean,default:!0},enableEditing:{type:Boolean,default:!1},enableClicking:{type:Boolean,default:!0},geodesic:{type:Boolean,default:!1},clip:{type:Boolean,default:!0},onClick:null,onDblclick:null,onMousedown:null,onMouseup:null,onMouseout:null,onMouseover:null,onRemove:null,onLineupdate:null},emits:["initd","unload","click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","lineupdate"],setup(s,{emit:a}){const l=s,{ready:r}=z();let t;j(e=>{const n=()=>{e.removeOverlay(t)},b=()=>{const{center:i,radius:M,strokeColor:S,strokeOpacity:O,fillColor:v,fillOpacity:B,strokeWeight:_,strokeStyle:E,enableMassClear:h,enableEditing:w,enableClicking:x,geodesic:L,clip:W}=l,F=new BMapGL.Point(i.lng,i.lat);t=new BMapGL.Circle(F,M,{strokeColor:S,strokeWeight:_,strokeOpacity:O,strokeStyle:E,enableMassClear:h,enableEditing:w,enableClicking:x,geodesic:L,clip:W,fillOpacity:B,fillColor:v}),e.addOverlay(t),q(l,a,t)};return o(()=>l.center,()=>c,{deep:!0}),o(()=>l.radius,()=>u),o(()=>l.strokeColor,()=>d),o(()=>l.strokeOpacity,()=>p),o(()=>l.fillColor,()=>f),o(()=>l.fillOpacity,()=>k),o(()=>l.strokeWeight,()=>y),o(()=>l.strokeStyle,()=>C),o(()=>l.enableMassClear,()=>m),o(()=>l.enableEditing,()=>g),b(),r(e),n});function u(e){t.setRadius(e)}function c(e){t.setCenter(new BMapGL.Point(e.lng,e.lat))}function d(e){t.setStrokeColor(e)}function f(e){t.setFillColor(e)}function p(e){t.setStrokeOpacity(e)}function k(e){t.setFillOpacity(e)}function y(e){t.setStrokeWeight(e)}function C(e){t.setStrokeStyle(e)}function m(e){e?t.enableMassClear():t.disableMassClear()}function g(e){console.log(e),e?t.enableEditing():t.disableEditing()}return(e,n)=>(R(),D("div"))}});var N=G(A,[["__file","index.vue"]]);export{N as default};

import{_ as B,d as g,b as _,c as M}from"./app.52adecd0.js";import{u as O}from"./useBaseMapEffect.9327f722.js";import{b as x}from"./bindEvents.81d30a10.js";import{u as E}from"./useLife.c921ffd5.js";const w=g({props:{center:null,radius:null,strokeColor:{default:"#000"},strokeOpacity:{default:1},fillColor:{default:"#fff"},fillOpacity:{default:.3},strokeWeight:{default:2},strokeStyle:{default:"solid"},massClear:{type:Boolean,default:!0},enableEditing:{type:Boolean,default:!1},enableClicking:{type:Boolean,default:!0},geodesic:{type:Boolean,default:!1},clip:{type:Boolean,default:!0},onClick:null,onDblclick:null,onMousedown:null,onMouseup:null,onMouseout:null,onMouseover:null,onRemove:null,onLineupdate:null},emits:["initd","unload","click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","lineupdate"],setup(n,{emit:a}){const t=n,{ready:i}=E();return O(e=>{const{center:l,radius:r,strokeColor:s,strokeOpacity:u,fillColor:c,fillOpacity:d,strokeWeight:f,strokeStyle:p,enableMassClear:m,enableEditing:k,enableClicking:y,geodesic:v,clip:C}=t,b=new BMapGL.Point(l.lng,l.lat),o=new BMapGL.Circle(b,r,{strokeColor:s,strokeWeight:f,strokeOpacity:u,strokeStyle:p,enableMassClear:m,enableEditing:k,enableClicking:y,geodesic:v,clip:C,fillOpacity:d,fillColor:c});return e.addOverlay(o),i(e),x(t,a,o),()=>{e.removeOverlay(o)}}),(e,l)=>(_(),M("div"))}});var S=B(w,[["__file","index.vue"]]);export{S as default};
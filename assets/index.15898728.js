import{_ as C,d as w,w as o}from"./app.7983ce51.js";import{u as x}from"./useBaseMapEffect.a3d56045.js";import{b as B}from"./bindEvents.81d30a10.js";import{u as L}from"./useLife.c2b57129.js";const k=w({__name:"index",props:{content:null,position:null,offset:{default:()=>({x:0,y:0})},enableMassClear:{type:Boolean,default:!0},style:null,onClick:null,onDblclick:null,onMousedown:null,onMouseup:null,onMouseout:null,onMouseover:null,onRemove:null,onRightclick:null},emits:["initd","unload","click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","rightclick"],setup(u,{emit:r}){const t=u,{ready:c}=L();let n;x(e=>{const s=()=>{e.removeOverlay(n)},y=()=>{const{content:b,position:l,offset:a,enableMassClear:_,style:i}=t,v={position:new BMapGL.Point(l.lng,l.lat),offset:new BMapGL.Size(a.x,a.y),enableMassClear:_};n=new BMapGL.Label(b,v),i&&n.setStyle(i),e.addOverlay(n),B(t,r,n)};return o(()=>t.position,f,{deep:!0}),o(()=>t.offset,m,{deep:!0}),o(()=>t.style,p,{deep:!0}),o(()=>t.content,d),o(()=>t.enableMassClear,M),y(),c(e),s});function f(e){n.setPosition(new BMapGL.Point(e.lng,e.lat))}function p(e){n.setStyle(e)}function d(e){n.setContent(e)}function m(e){n.setOffset(new BMapGL.Size(e.x,e.y))}function M(e){e?n.enableMassClear():n.disableMassClear()}return(e,s)=>null}});var O=C(k,[["__file","index.vue"]]);export{O as default};
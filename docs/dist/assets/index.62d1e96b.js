import{_ as a,d as f}from"./app.d9123eef.js";import{u as s}from"./useBaseMapEffect.b96d95c9.js";import{u as i}from"./useLife.59d9b310.js";const d=f({props:{anchor:{default:"BMAP_ANCHOR_BOTTOM_RIGHT"},offset:{default:()=>({x:83,y:18})}},emits:["initd","unload"],setup(n){const e=n,{ready:r}=i();let t;return s(o=>(t=new window.BMapGL.NavigationControl3D({offset:new window.BMapGL.Size(e.offset.x,e.offset.y),anchor:window[e.anchor]}),o.addControl(t),r(o),()=>o.removeControl(t))),(o,u)=>null}});var _=a(d,[["__file","index.vue"]]);export{_ as default};
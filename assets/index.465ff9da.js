import{_ as a,d as i,w as f,b as c,c as u}from"./app.138ae8ae.js";import{u as d}from"./useBaseMapEffect.edef97dd.js";import{u as l}from"./useLife.0bb6c8a9.js";const _=i({props:{anchor:{default:"BMAP_ANCHOR_BOTTOM_LEFT"},offset:{default:()=>({x:83,y:18})},unit:{default:"BMAP_UNIT_METRIC"}},emits:["initd","unload"],setup(s){const e=s,{ready:r}=l();let t;d(o=>(console.log("\u521D\u59CB\u5316",o),t=new window.BMapGL.ScaleControl({offset:new window.BMapGL.Size(e.offset.x,e.offset.y),anchor:window[e.anchor]}),n(),o.addControl(t),r(o),()=>o.removeControl(t))),f(()=>e.unit,n);function n(){t.setUnit(window[e.unit])}return(o,p)=>(c(),u("div"))}});var C=a(_,[["__file","index.vue"]]);export{C as default};

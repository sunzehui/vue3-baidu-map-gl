import{_ as a,d as i,w as f,b as c,c as u}from"./app.e8329c2e.js";import{u as d}from"./useBaseMapEffect.90e9ccd0.js";import{u as l}from"./useLife.970079a8.js";const _=i({props:{anchor:{default:"BMAP_ANCHOR_BOTTOM_LEFT"},offset:{default:()=>({x:83,y:18})},unit:{default:"BMAP_UNIT_METRIC"}},emits:["initd","unload"],setup(s){const e=s,{ready:r}=l();let t;d(o=>(console.log("\u521D\u59CB\u5316",o),t=new window.BMapGL.ScaleControl({offset:new window.BMapGL.Size(e.offset.x,e.offset.y),anchor:window[e.anchor]}),n(),o.addControl(t),r(o),()=>o.removeControl(t))),f(()=>e.unit,n);function n(){t.setUnit(window[e.unit])}return(o,p)=>(c(),u("div"))}});var C=a(_,[["__file","index.vue"]]);export{C as default};

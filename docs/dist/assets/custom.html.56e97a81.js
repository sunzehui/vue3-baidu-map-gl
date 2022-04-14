import{_ as l,d as f,f as v,h as n,b as k,c as r,e as t,l as s,m as p,F as i,p as o}from"./app.ba2ed4a1.js";const h=o(`<h1 id="control-\u81EA\u5B9A\u4E49\u63A7\u4EF6" tabindex="-1" data-v-44a4f480><a class="header-anchor" href="#control-\u81EA\u5B9A\u4E49\u63A7\u4EF6" aria-hidden="true" data-v-44a4f480>#</a> Control \u81EA\u5B9A\u4E49\u63A7\u4EF6</h1><p data-v-44a4f480>\u6839\u636E\u5730\u56FE <code data-v-44a4f480>Map</code> \u7EC4\u4EF6\u63D0\u4F9B\u7684Props, \u6216\u8005\u5730\u56FE\u5B9E\u4F8B,\u81EA\u5B9A\u4E49\u63A7\u4EF6</p><div class="language-typescript ext-ts" data-v-44a4f480><pre class="language-typescript" data-v-44a4f480><code data-v-44a4f480><span class="token keyword" data-v-44a4f480>import</span> <span class="token punctuation" data-v-44a4f480>{</span> Control <span class="token punctuation" data-v-44a4f480>}</span> <span class="token keyword" data-v-44a4f480>from</span> <span class="token string" data-v-44a4f480>&#39;vue3-baidu-map-gl&#39;</span>
</code></pre></div><h2 id="\u9759\u6001\u7EC4\u4EF6-props" tabindex="-1" data-v-44a4f480><a class="header-anchor" href="#\u9759\u6001\u7EC4\u4EF6-props" aria-hidden="true" data-v-44a4f480>#</a> \u9759\u6001\u7EC4\u4EF6 Props</h2><table data-v-44a4f480><thead data-v-44a4f480><tr data-v-44a4f480><th data-v-44a4f480>\u53C2\u6570</th><th data-v-44a4f480>\u8BF4\u660E</th><th data-v-44a4f480>\u7C7B\u578B</th><th data-v-44a4f480>\u53EF\u9009\u503C</th><th data-v-44a4f480>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-44a4f480><tr data-v-44a4f480><td data-v-44a4f480>anchor</td><td data-v-44a4f480>\u63A7\u4EF6\u7684\u505C\u9760\u4F4D\u7F6E</td><td data-v-44a4f480>string</td><td data-v-44a4f480><a href="#anchor" data-v-44a4f480>anchor</a></td><td data-v-44a4f480>BMAP_ANCHOR_BOTTOM_LEFT</td></tr><tr data-v-44a4f480><td data-v-44a4f480>offset</td><td data-v-44a4f480>\u63A7\u4EF6\u7684\u504F\u79FB\u503C</td><td data-v-44a4f480>{x: number, y: number }</td><td data-v-44a4f480></td><td data-v-44a4f480>{ x: 83, y: 18 }</td></tr></tbody></table><h2 id="anchor" tabindex="-1" data-v-44a4f480><a class="header-anchor" href="#anchor" aria-hidden="true" data-v-44a4f480>#</a> anchor</h2><table data-v-44a4f480><thead data-v-44a4f480><tr data-v-44a4f480><th data-v-44a4f480>\u503C</th><th data-v-44a4f480>\u8BF4\u660E</th></tr></thead><tbody data-v-44a4f480><tr data-v-44a4f480><td data-v-44a4f480>BMAP_ANCHOR_TOP_LEFT</td><td data-v-44a4f480>\u5DE6\u4E0A</td></tr><tr data-v-44a4f480><td data-v-44a4f480>BMAP_ANCHOR_TOP_RIGHT</td><td data-v-44a4f480>\u53F3\u4E0A</td></tr><tr data-v-44a4f480><td data-v-44a4f480>BMAP_ANCHOR_BOTTOM_LEFT</td><td data-v-44a4f480>\u5DE6\u4E0B</td></tr><tr data-v-44a4f480><td data-v-44a4f480>BMAP_ANCHOR_BOTTOM_RIGHT</td><td data-v-44a4f480>\u53F3\u4E0B</td></tr></tbody></table><h2 id="\u7EC4\u4EF6\u5B9E\u4F8B" tabindex="-1" data-v-44a4f480><a class="header-anchor" href="#\u7EC4\u4EF6\u5B9E\u4F8B" aria-hidden="true" data-v-44a4f480>#</a> \u7EC4\u4EF6\u5B9E\u4F8B</h2>`,8),g=o(`<div class="language-vue ext-vue" data-v-44a4f480><pre class="language-vue" data-v-44a4f480><code data-v-44a4f480><span class="token tag" data-v-44a4f480><span class="token tag" data-v-44a4f480><span class="token punctuation" data-v-44a4f480>&lt;</span>Map</span>
  <span class="token attr-name" data-v-44a4f480>:minZoom</span><span class="token attr-value" data-v-44a4f480><span class="token punctuation attr-equals" data-v-44a4f480>=</span><span class="token punctuation" data-v-44a4f480>&quot;</span>3<span class="token punctuation" data-v-44a4f480>&quot;</span></span>
  <span class="token attr-name" data-v-44a4f480>:zoom</span><span class="token attr-value" data-v-44a4f480><span class="token punctuation attr-equals" data-v-44a4f480>=</span><span class="token punctuation" data-v-44a4f480>&quot;</span>zoom<span class="token punctuation" data-v-44a4f480>&quot;</span></span>
  <span class="token attr-name" data-v-44a4f480>height</span><span class="token attr-value" data-v-44a4f480><span class="token punctuation attr-equals" data-v-44a4f480>=</span><span class="token punctuation" data-v-44a4f480>&quot;</span>400px<span class="token punctuation" data-v-44a4f480>&quot;</span></span>
<span class="token punctuation" data-v-44a4f480>&gt;</span></span>
  <span class="token tag" data-v-44a4f480><span class="token tag" data-v-44a4f480><span class="token punctuation" data-v-44a4f480>&lt;</span>Control</span> <span class="token special-attr" data-v-44a4f480><span class="token attr-name" data-v-44a4f480>style</span><span class="token attr-value" data-v-44a4f480><span class="token punctuation attr-equals" data-v-44a4f480>=</span><span class="token punctuation" data-v-44a4f480>&quot;</span><span class="token value css language-css" data-v-44a4f480><span class="token property" data-v-44a4f480>display</span><span class="token punctuation" data-v-44a4f480>:</span> flex<span class="token punctuation" data-v-44a4f480>;</span> <span class="token property" data-v-44a4f480>background-color</span><span class="token punctuation" data-v-44a4f480>:</span> #fff<span class="token punctuation" data-v-44a4f480>;</span> <span class="token property" data-v-44a4f480>padding</span><span class="token punctuation" data-v-44a4f480>:</span> 10px</span><span class="token punctuation" data-v-44a4f480>&quot;</span></span></span> <span class="token attr-name" data-v-44a4f480>:offset</span><span class="token attr-value" data-v-44a4f480><span class="token punctuation attr-equals" data-v-44a4f480>=</span><span class="token punctuation" data-v-44a4f480>&quot;</span>{ x: 0, y: 0 }<span class="token punctuation" data-v-44a4f480>&quot;</span></span><span class="token punctuation" data-v-44a4f480>&gt;</span></span>
    <span class="token tag" data-v-44a4f480><span class="token tag" data-v-44a4f480><span class="token punctuation" data-v-44a4f480>&lt;</span>button</span> <span class="token attr-name" data-v-44a4f480>@click</span><span class="token attr-value" data-v-44a4f480><span class="token punctuation attr-equals" data-v-44a4f480>=</span><span class="token punctuation" data-v-44a4f480>&quot;</span>handleZoomOut<span class="token punctuation" data-v-44a4f480>&quot;</span></span><span class="token punctuation" data-v-44a4f480>&gt;</span></span>\u7F29\u5C0F<span class="token tag" data-v-44a4f480><span class="token tag" data-v-44a4f480><span class="token punctuation" data-v-44a4f480>&lt;/</span>button</span><span class="token punctuation" data-v-44a4f480>&gt;</span></span>
    <span class="token tag" data-v-44a4f480><span class="token tag" data-v-44a4f480><span class="token punctuation" data-v-44a4f480>&lt;</span>button</span> <span class="token attr-name" data-v-44a4f480>@click</span><span class="token attr-value" data-v-44a4f480><span class="token punctuation attr-equals" data-v-44a4f480>=</span><span class="token punctuation" data-v-44a4f480>&quot;</span>handleZoomIn<span class="token punctuation" data-v-44a4f480>&quot;</span></span><span class="token punctuation" data-v-44a4f480>&gt;</span></span>\u653E\u5927<span class="token tag" data-v-44a4f480><span class="token tag" data-v-44a4f480><span class="token punctuation" data-v-44a4f480>&lt;/</span>button</span><span class="token punctuation" data-v-44a4f480>&gt;</span></span>
  <span class="token tag" data-v-44a4f480><span class="token tag" data-v-44a4f480><span class="token punctuation" data-v-44a4f480>&lt;/</span>Control</span><span class="token punctuation" data-v-44a4f480>&gt;</span></span>
<span class="token tag" data-v-44a4f480><span class="token tag" data-v-44a4f480><span class="token punctuation" data-v-44a4f480>&lt;/</span>Map</span><span class="token punctuation" data-v-44a4f480>&gt;</span></span>

<span class="token tag" data-v-44a4f480><span class="token tag" data-v-44a4f480><span class="token punctuation" data-v-44a4f480>&lt;</span>script</span> <span class="token attr-name" data-v-44a4f480>setup</span> <span class="token attr-name" data-v-44a4f480>lang</span><span class="token attr-value" data-v-44a4f480><span class="token punctuation attr-equals" data-v-44a4f480>=</span><span class="token punctuation" data-v-44a4f480>&quot;</span>ts<span class="token punctuation" data-v-44a4f480>&quot;</span></span><span class="token punctuation" data-v-44a4f480>&gt;</span></span><span class="token script" data-v-44a4f480><span class="token language-javascript" data-v-44a4f480>
  <span class="token keyword" data-v-44a4f480>import</span> <span class="token punctuation" data-v-44a4f480>{</span>Map<span class="token punctuation" data-v-44a4f480>,</span> Control<span class="token punctuation" data-v-44a4f480>}</span> <span class="token keyword" data-v-44a4f480>from</span> <span class="token string" data-v-44a4f480>&#39;vue3-baidu-map-gl&#39;</span>
  <span class="token keyword" data-v-44a4f480>import</span> <span class="token punctuation" data-v-44a4f480>{</span> ref <span class="token punctuation" data-v-44a4f480>}</span> <span class="token keyword" data-v-44a4f480>from</span> <span class="token string" data-v-44a4f480>&#39;vue&#39;</span>
  <span class="token keyword" data-v-44a4f480>const</span> zoom <span class="token operator" data-v-44a4f480>=</span> <span class="token function" data-v-44a4f480>ref</span><span class="token punctuation" data-v-44a4f480>(</span><span class="token number" data-v-44a4f480>10</span><span class="token punctuation" data-v-44a4f480>)</span>
  <span class="token keyword" data-v-44a4f480>function</span> <span class="token function" data-v-44a4f480>handleZoomOut</span><span class="token punctuation" data-v-44a4f480>(</span><span class="token punctuation" data-v-44a4f480>)</span> <span class="token punctuation" data-v-44a4f480>{</span>
    zoom<span class="token punctuation" data-v-44a4f480>.</span>value<span class="token operator" data-v-44a4f480>-=</span> <span class="token number" data-v-44a4f480>1</span>
  <span class="token punctuation" data-v-44a4f480>}</span>
  <span class="token keyword" data-v-44a4f480>function</span> <span class="token function" data-v-44a4f480>handleZoomIn</span><span class="token punctuation" data-v-44a4f480>(</span><span class="token punctuation" data-v-44a4f480>)</span> <span class="token punctuation" data-v-44a4f480>{</span>
    zoom<span class="token punctuation" data-v-44a4f480>.</span>value<span class="token operator" data-v-44a4f480>+=</span> <span class="token number" data-v-44a4f480>1</span>
  <span class="token punctuation" data-v-44a4f480>}</span>
</span></span><span class="token tag" data-v-44a4f480><span class="token tag" data-v-44a4f480><span class="token punctuation" data-v-44a4f480>&lt;/</span>script</span><span class="token punctuation" data-v-44a4f480>&gt;</span></span>

<span class="token tag" data-v-44a4f480><span class="token tag" data-v-44a4f480><span class="token punctuation" data-v-44a4f480>&lt;</span>style</span> <span class="token attr-name" data-v-44a4f480>scoped</span><span class="token punctuation" data-v-44a4f480>&gt;</span></span><span class="token style" data-v-44a4f480><span class="token language-css" data-v-44a4f480>
<span class="token selector" data-v-44a4f480>button</span><span class="token punctuation" data-v-44a4f480>{</span>
  <span class="token property" data-v-44a4f480>outline</span><span class="token punctuation" data-v-44a4f480>:</span>none<span class="token punctuation" data-v-44a4f480>;</span>
  <span class="token property" data-v-44a4f480>border</span><span class="token punctuation" data-v-44a4f480>:</span>none<span class="token punctuation" data-v-44a4f480>;</span>
  <span class="token property" data-v-44a4f480>background</span><span class="token punctuation" data-v-44a4f480>:</span>#41b883<span class="token punctuation" data-v-44a4f480>;</span>
  <span class="token property" data-v-44a4f480>margin</span><span class="token punctuation" data-v-44a4f480>:</span>0 5px<span class="token punctuation" data-v-44a4f480>;</span>
  <span class="token property" data-v-44a4f480>padding</span><span class="token punctuation" data-v-44a4f480>:</span> 5px 15px<span class="token punctuation" data-v-44a4f480>;</span>
  <span class="token property" data-v-44a4f480>border-radius</span><span class="token punctuation" data-v-44a4f480>:</span> 4px <span class="token important" data-v-44a4f480>!important</span><span class="token punctuation" data-v-44a4f480>;</span>
<span class="token punctuation" data-v-44a4f480>}</span>
</span></span><span class="token tag" data-v-44a4f480><span class="token tag" data-v-44a4f480><span class="token punctuation" data-v-44a4f480>&lt;/</span>style</span><span class="token punctuation" data-v-44a4f480>&gt;</span></span>
</code></pre></div>`,1),m=f({setup(E){const a=v(10);function u(){a.value-=1}function e(){a.value+=1}return(_,F)=>{const d=n("Control"),c=n("Map");return k(),r(i,null,[h,t("div",null,[s(c,{ak:"4stE857hYPHbEmgKhLiTAa0QbCIULHpm",minZoom:3,zoom:a.value,enableScrollWheelZoom:!1,height:"400px"},{default:p(()=>[s(d,{style:{display:"flex","background-color":"#fff",padding:"10px"},offset:{x:0,y:0}},{default:p(()=>[t("button",{onClick:u},"\u7F29\u5C0F"),t("button",{onClick:e},"\u653E\u5927")]),_:1})]),_:1},8,["zoom"])]),g],64)}}});var b=l(m,[["__scopeId","data-v-44a4f480"],["__file","custom.html.vue"]]);export{b as default};

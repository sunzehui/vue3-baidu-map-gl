import{_ as p,j as t,b as o,c,e as d,m as a,q as r,F as l,s as n}from"./app.e8329c2e.js";const u={},h=n(`<h1 id="scale-\u6BD4\u4F8B\u5C3A\u63A7\u4EF6" tabindex="-1"><a class="header-anchor" href="#scale-\u6BD4\u4F8B\u5C3A\u63A7\u4EF6" aria-hidden="true">#</a> Scale \u6BD4\u4F8B\u5C3A\u63A7\u4EF6</h1><p>\u6BD4\u4F8B\u5C3A\u63A7\u4EF6,\u9ED8\u8BA4\u663E\u793A\u5728\u5730\u56FE\u5DE6\u4E0B\u89D2</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Scale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue3-baidu-map-gl&#39;</span>
</code></pre></div><h2 id="\u9759\u6001\u7EC4\u4EF6-props" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u7EC4\u4EF6-props" aria-hidden="true">#</a> \u9759\u6001\u7EC4\u4EF6 Props</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>anchor</td><td>\u63A7\u4EF6\u7684\u505C\u9760\u4F4D\u7F6E</td><td>string</td><td><a href="#anchor">anchor</a></td><td>BMAP_ANCHOR_BOTTOM_LEFT</td></tr><tr><td>offset</td><td>\u63A7\u4EF6\u7684\u504F\u79FB\u503C</td><td>{x: number, y: number }</td><td></td><td>{ x: 83, y: 18 }</td></tr></tbody></table><h2 id="\u52A8\u6001\u7EC4\u4EF6-props" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u7EC4\u4EF6-props" aria-hidden="true">#</a> \u52A8\u6001\u7EC4\u4EF6 Props</h2><p>\u52A8\u6001\u7ED1\u5B9A\u7684\u503C\u53D8\u66F4,\u4F1A\u81EA\u52A8\u66F4\u65B0\u5230\u5730\u56FE\u4E2D</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>unit</td><td>\u6BD4\u4F8B\u5C3A\u5355\u4F4D\u5236</td><td>string</td><td><a href="#unit">unit</a></td><td>BMAP_UNIT_METRIC</td></tr></tbody></table><h2 id="anchor" tabindex="-1"><a class="header-anchor" href="#anchor" aria-hidden="true">#</a> anchor</h2><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>BMAP_ANCHOR_TOP_LEFT</td><td>\u5DE6\u4E0A</td></tr><tr><td>BMAP_ANCHOR_TOP_RIGHT</td><td>\u53F3\u4E0A</td></tr><tr><td>BMAP_ANCHOR_BOTTOM_LEFT</td><td>\u5DE6\u4E0B</td></tr><tr><td>BMAP_ANCHOR_BOTTOM_RIGHT</td><td>\u53F3\u4E0B</td></tr></tbody></table><h2 id="unit" tabindex="-1"><a class="header-anchor" href="#unit" aria-hidden="true">#</a> unit</h2><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>BMAP_UNIT_METRIC</td><td>\u516C\u5C3A</td></tr><tr><td>BMAP_UNIT_IMPERIAL</td><td>\u82F1\u5C3A</td></tr></tbody></table><h2 id="\u7EC4\u4EF6\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5B9E\u4F8B" aria-hidden="true">#</a> \u7EC4\u4EF6\u5B9E\u4F8B</h2>`,13),i=n(`<div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span>
  <span class="token attr-name">:minZoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span> 
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400px<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scale</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Map</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>Map<span class="token punctuation">,</span> Scale<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue3-baidu-map-gl&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1);function k(_,g){const s=t("Scale"),e=t("Map");return o(),c(l,null,[h,d("div",null,[a(e,{ak:"4stE857hYPHbEmgKhLiTAa0QbCIULHpm",minZoom:3,height:"400px"},{default:r(()=>[a(s)]),_:1})]),i],64)}var m=p(u,[["render",k],["__file","scale.html.vue"]]);export{m as default};

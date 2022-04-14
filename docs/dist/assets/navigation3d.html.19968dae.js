import{_ as e,h as a,b as o,c,e as d,l as t,m as r,F as l,p as n}from"./app.ba2ed4a1.js";const i={},u=n(`<h1 id="navigation3d-3d\u89C6\u89D2\u5BFC\u822A\u63A7\u4EF6" tabindex="-1"><a class="header-anchor" href="#navigation3d-3d\u89C6\u89D2\u5BFC\u822A\u63A7\u4EF6" aria-hidden="true">#</a> Navigation3d 3D\u89C6\u89D2\u5BFC\u822A\u63A7\u4EF6</h1><p>\u5730\u56FE3D\u63A7\u4EF6\uFF0C\u53EF\u4EE5\u63A7\u5236\u5730\u56FE\u7684\u65CB\u8F6C\u3001\u503E\u659C\uFF0C\u9ED8\u8BA4\u4F4D\u4E8E\u5730\u56FE\u53F3\u4E0B\u89D2</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Navigation3d <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue3-baidu-map-gl&#39;</span>
</code></pre></div><h2 id="\u9759\u6001\u7EC4\u4EF6-props" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u7EC4\u4EF6-props" aria-hidden="true">#</a> \u9759\u6001\u7EC4\u4EF6 Props</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>anchor</td><td>\u63A7\u4EF6\u7684\u505C\u9760\u4F4D\u7F6E</td><td>string</td><td><a href="#anchor">anchor</a></td><td>BMAP_ANCHOR_BOTTOM_LEFT</td></tr><tr><td>offset</td><td>\u63A7\u4EF6\u7684\u504F\u79FB\u503C</td><td>{x: number, y: number }</td><td></td><td>{ x: 83, y: 18 }</td></tr></tbody></table><h2 id="anchor" tabindex="-1"><a class="header-anchor" href="#anchor" aria-hidden="true">#</a> anchor</h2><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>BMAP_ANCHOR_TOP_LEFT</td><td>\u5DE6\u4E0A</td></tr><tr><td>BMAP_ANCHOR_TOP_RIGHT</td><td>\u53F3\u4E0A</td></tr><tr><td>BMAP_ANCHOR_BOTTOM_LEFT</td><td>\u5DE6\u4E0B</td></tr><tr><td>BMAP_ANCHOR_BOTTOM_RIGHT</td><td>\u53F3\u4E0B</td></tr></tbody></table><h2 id="\u7EC4\u4EF6\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5B9E\u4F8B" aria-hidden="true">#</a> \u7EC4\u4EF6\u5B9E\u4F8B</h2>`,8),h=n(`<div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span>
  <span class="token attr-name">:minZoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span> 
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400px<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Navigation3d</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Map</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>Map<span class="token punctuation">,</span> Navigation3d<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue3-baidu-map-gl&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1);function k(g,_){const s=a("Navigation3d"),p=a("Map");return o(),c(l,null,[u,d("div",null,[t(p,{ak:"4stE857hYPHbEmgKhLiTAa0QbCIULHpm",minZoom:3,height:"400px"},{default:r(()=>[t(s)]),_:1})]),h],64)}var v=e(i,[["render",k],["__file","navigation3d.html.vue"]]);export{v as default};

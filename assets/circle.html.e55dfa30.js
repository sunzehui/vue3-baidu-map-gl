import{_ as d,j as t,b as o,c as p,e as c,m as a,q as r,F as l,s as n}from"./app.e8329c2e.js";const u={},i=n(`<h1 id="circle-\u5706\u5F62" tabindex="-1"><a class="header-anchor" href="#circle-\u5706\u5F62" aria-hidden="true">#</a> Circle \u5706\u5F62</h1><p>\u5728\u5730\u56FE\u4E0A\u7ED8\u5236\u7B80\u5355\u7684\u5706\u5F62</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Circle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue3-baidu-map-gl&#39;</span>
</code></pre></div><h2 id="\u9759\u6001\u7EC4\u4EF6-props" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u7EC4\u4EF6-props" aria-hidden="true">#</a> \u9759\u6001\u7EC4\u4EF6 Props</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>enableClicking</td><td>\u662F\u5426\u54CD\u5E94\u70B9\u51FB\u4E8B\u4EF6</td><td>boolean</td><td></td><td>true</td></tr><tr><td>geodesic</td><td>\u662F\u5426\u5F00\u542F\u5927\u5730\u7EBF\u6A21\u5F0F\uFF0Ctrue\u65F6\uFF0C\u4E24\u70B9\u8FDE\u7EBF\u5C06\u4EE5\u5927\u5730\u7EBF\u7684\u5F62\u5F0F</td><td>boolean</td><td></td><td>false</td></tr><tr><td>clip</td><td>\u662F\u5426\u8FDB\u884C\u8DE8\u7ECF\u5EA6180\u5EA6\u88C1\u526A\uFF0C\u7ED8\u5236\u8DE8\u7CBE\u5EA6180\u65F6\u4E3A\u4E86\u4F18\u5316\u6548\u679C</td><td>boolean</td><td></td><td>true</td></tr></tbody></table><h2 id="\u52A8\u6001\u7EC4\u4EF6-props" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u7EC4\u4EF6-props" aria-hidden="true">#</a> \u52A8\u6001\u7EC4\u4EF6 Props</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>center</td><td>\u5706\u5F62\u4E2D\u5FC3\u70B9\u7ECF\u7EAC\u5EA6</td><td>{ lng: number, lat: number}</td><td></td><td><code>required</code></td></tr><tr><td>radius</td><td>\u5706\u5F62\u7684\u534A\u5F84\uFF0C\u5355\u4F4D\u4E3A\u7C73</td><td>number</td><td></td><td><code>required</code></td></tr><tr><td>strokeColor</td><td>\u63CF\u8FB9\u7684\u989C\u8272\uFF0C\u540CCSS\u989C\u8272</td><td>string</td><td></td><td><code>#000</code></td></tr><tr><td>strokeOpacity</td><td>\u63CF\u8FB9\u7684\u900F\u660E\u5EA6\uFF0C\u8303\u56F40-1</td><td>number</td><td>0-1</td><td>1</td></tr><tr><td>fillColor</td><td>\u9762\u586B\u5145\u989C\u8272\uFF0C\u540CCSS\u989C\u8272</td><td>string</td><td></td><td><code>#fff</code></td></tr><tr><td>fillOpacity</td><td>\u9762\u586B\u5145\u7684\u900F\u660E\u5EA6\uFF0C\u8303\u56F40-1</td><td>number</td><td>0-1</td><td>0.3</td></tr><tr><td>strokeWeight</td><td>\u63CF\u8FB9\u7684\u5BBD\u5EA6\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20</td><td>number</td><td></td><td>2</td></tr><tr><td>strokeStyle</td><td>\u63CF\u8FB9\u7684\u6837\u5F0F\uFF0C\u4E3A\u5B9E\u7EBF\u3001\u865A\u7EBF\u3001\u6216\u8005\u70B9\u72B6\u7EBF</td><td>string</td><td>solid / dashed / dotted</td><td>solid</td></tr><tr><td>enableMassClear</td><td>\u662F\u5426\u5728\u8C03\u7528map.clearOverlays\u6E05\u9664\u6B64\u8986\u76D6\u7269</td><td>boolean</td><td></td><td>true</td></tr><tr><td>enableEditing</td><td>\u662F\u5426\u542F\u7528\u7EBF\u7F16\u8F91</td><td>boolean</td><td></td><td>false</td></tr></tbody></table><h2 id="\u7EC4\u4EF6\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u4E8B\u4EF6" aria-hidden="true">#</a> \u7EC4\u4EF6\u4E8B\u4EF6</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>click</td><td>\u9F20\u6807\u5DE6\u952E\u5355\u51FB\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\u3002 \u5F53\u53CC\u51FB\u65F6\uFF0C\u4EA7\u751F\u7684\u4E8B\u4EF6\u5E8F\u5217\u4E3A\uFF1A click click dblclick</td><td>((e: Event) =&gt; void)</td></tr><tr><td>dblclick</td><td>\u9F20\u6807\u5DE6\u952E\u53CC\u51FB\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570</td><td>((e: Event) =&gt; void)</td></tr><tr><td>mousedown</td><td>\u9F20\u6807\u5DE6\u952E\u5728\u8BE5\u8986\u76D6\u7269\u4E0A\u6309\u4E0B\u7684\u56DE\u8C03\u51FD\u6570</td><td>((e: Event) =&gt; void)</td></tr><tr><td>mouseup</td><td>\u9F20\u6807\u5DE6\u952E\u5728\u8BE5\u8986\u76D6\u7269\u4E0A\u62AC\u8D77\u7684\u56DE\u8C03\u51FD\u6570</td><td>((e: Event) =&gt; void)</td></tr><tr><td>mouseout</td><td>\u9F20\u6807\u6307\u9488\u79FB\u51FA\u8BE5\u8986\u76D6\u7269\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570</td><td>((e: Event) =&gt; void)</td></tr><tr><td>mouseover</td><td>\u9F20\u6807\u6307\u9488\u79FB\u5165\u8BE5\u8986\u76D6\u7269\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570</td><td>((e: Event) =&gt; void)</td></tr><tr><td>remove</td><td>\u8BE5\u8986\u76D6\u7269\u88AB\u79FB\u9664\u7684\u56DE\u8C03\u51FD\u6570</td><td>((e: Event) =&gt; void)</td></tr><tr><td>lineupdate</td><td>\u8986\u76D6\u7269\u88AB\u7F16\u8F91\u540E\u7684\u56DE\u8C03\u51FD\u6570</td><td>((e: Event) =&gt; void)</td></tr></tbody></table><h2 id="\u7EC4\u4EF6\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5B9E\u4F8B" aria-hidden="true">#</a> \u7EC4\u4EF6\u5B9E\u4F8B</h2>`,10),k=n(`<div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span>
  <span class="token attr-name">:minZoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span> 
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400px<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Circle</span>
    <span class="token attr-name">stroke-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dashed<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      lng: 116.406,
      lat: 39.937
    }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:radius</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">enableEditing</span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Map</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>Map<span class="token punctuation">,</span> Circle<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue3-baidu-map-gl&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1);function h(g,m){const s=t("Circle"),e=t("Map");return o(),p(l,null,[i,c("div",null,[a(e,{ak:"4stE857hYPHbEmgKhLiTAa0QbCIULHpm",minZoom:3,height:"400px"},{default:r(()=>[a(s,{"stroke-style":"dashed",center:{lat:39.915185,lng:116.403901},radius:300,enableEditing:""},null,8,["center"])]),_:1})]),k],64)}var v=d(u,[["render",h],["__file","circle.html.vue"]]);export{v as default};

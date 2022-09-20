import{_ as d,b as t,o as n,c as l,e as p,g as s,i as c,a as e}from"./app.f20f0936.js";const m=JSON.parse('{"title":"Circle \u5706\u5F62","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9759\u6001\u7EC4\u4EF6 Props","slug":"\u9759\u6001\u7EC4\u4EF6-props"},{"level":2,"title":"\u52A8\u6001\u7EC4\u4EF6 Props","slug":"\u52A8\u6001\u7EC4\u4EF6-props"},{"level":2,"title":"\u7EC4\u4EF6\u4E8B\u4EF6","slug":"\u7EC4\u4EF6\u4E8B\u4EF6"},{"level":2,"title":"\u7EC4\u4EF6\u5B9E\u4F8B","slug":"\u7EC4\u4EF6\u5B9E\u4F8B"}],"relativePath":"zh/overlay/circle.md","lastUpdated":1663662375000}'),r={name:"zh/overlay/circle.md"},i=e(`<h1 id="circle-\u5706\u5F62" tabindex="-1">Circle \u5706\u5F62 <a class="header-anchor" href="#circle-\u5706\u5F62" aria-hidden="true">#</a></h1><p>\u5728\u5730\u56FE\u4E0A\u7ED8\u5236\u7B80\u5355\u7684\u5706\u5F62</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Circle</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue3-baidu-map-gl</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u9759\u6001\u7EC4\u4EF6-props" tabindex="-1">\u9759\u6001\u7EC4\u4EF6 Props <a class="header-anchor" href="#\u9759\u6001\u7EC4\u4EF6-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>enableClicking</td><td>\u662F\u5426\u54CD\u5E94\u70B9\u51FB\u4E8B\u4EF6</td><td><code>boolean</code></td><td><code>true </code></td></tr><tr><td>geodesic</td><td>\u662F\u5426\u5F00\u542F\u5927\u5730\u7EBF\u6A21\u5F0F\uFF0Ctrue \u65F6\uFF0C\u4E24\u70B9\u8FDE\u7EBF\u5C06\u4EE5\u5927\u5730\u7EBF\u7684\u5F62\u5F0F</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>clip</td><td>\u662F\u5426\u8FDB\u884C\u8DE8\u7ECF\u5EA6 180 \u5EA6\u88C1\u526A\uFF0C\u7ED8\u5236\u8DE8\u7CBE\u5EA6 180 \u65F6\u4E3A\u4E86\u4F18\u5316\u6548\u679C</td><td><code>boolean</code></td><td><code>true </code></td></tr></tbody></table><h2 id="\u52A8\u6001\u7EC4\u4EF6-props" tabindex="-1">\u52A8\u6001\u7EC4\u4EF6 Props <a class="header-anchor" href="#\u52A8\u6001\u7EC4\u4EF6-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>center</td><td>\u5706\u5F62\u4E2D\u5FC3\u70B9\u7ECF\u7EAC\u5EA6</td><td><code>{ lng: number, lat: number}</code></td><td></td><td><code>required</code></td></tr><tr><td>radius</td><td>\u5706\u5F62\u7684\u534A\u5F84\uFF0C\u5355\u4F4D\u4E3A\u7C73</td><td><code>number</code></td><td></td><td><code>required</code></td></tr><tr><td>strokeColor</td><td>\u63CF\u8FB9\u7684\u989C\u8272\uFF0C\u540C CSS \u989C\u8272</td><td><code>string</code></td><td></td><td><code>#000</code></td></tr><tr><td>strokeOpacity</td><td>\u63CF\u8FB9\u7684\u900F\u660E\u5EA6\uFF0C\u8303\u56F4 0-1</td><td><code>number</code></td><td><code>0-1 </code></td><td>1</td></tr><tr><td>fillColor</td><td>\u9762\u586B\u5145\u989C\u8272\uFF0C\u540C CSS \u989C\u8272</td><td><code>string</code></td><td></td><td><code>#fff</code></td></tr><tr><td>fillOpacity</td><td>\u9762\u586B\u5145\u7684\u900F\u660E\u5EA6\uFF0C\u8303\u56F4 0-1</td><td><code>number</code></td><td><code>0-1 </code></td><td><code>0.3 </code></td></tr><tr><td>strokeWeight</td><td>\u63CF\u8FB9\u7684\u5BBD\u5EA6\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20</td><td><code>number</code></td><td></td><td><code>2 </code></td></tr><tr><td>strokeStyle</td><td>\u63CF\u8FB9\u7684\u6837\u5F0F\uFF0C\u4E3A\u5B9E\u7EBF\u3001\u865A\u7EBF\u3001\u6216\u8005\u70B9\u72B6\u7EBF</td><td><code>string</code></td><td><code>solid / dashed / dotted</code></td><td><code>solid </code></td></tr><tr><td>enableMassClear</td><td>\u662F\u5426\u5728\u8C03\u7528 <code>map.clearOverlays</code> \u6E05\u9664\u6B64\u8986\u76D6\u7269</td><td><code>boolean</code></td><td></td><td><code>true </code></td></tr><tr><td>enableEditing</td><td>\u662F\u5426\u542F\u7528\u7EBF\u7F16\u8F91</td><td><code>boolean</code></td><td></td><td><code>false </code></td></tr></tbody></table><h2 id="\u7EC4\u4EF6\u4E8B\u4EF6" tabindex="-1">\u7EC4\u4EF6\u4E8B\u4EF6 <a class="header-anchor" href="#\u7EC4\u4EF6\u4E8B\u4EF6" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>click</td><td>\u9F20\u6807\u5DE6\u952E\u5355\u51FB\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\u3002 \u5F53\u53CC\u51FB\u65F6\uFF0C\u4EA7\u751F\u7684\u4E8B\u4EF6\u5E8F\u5217\u4E3A\uFF1A<code>click -&gt; click -&gt; dblclick</code></td><td><code>((e: Event) =&gt; void) </code></td></tr><tr><td>dblclick</td><td>\u9F20\u6807\u5DE6\u952E\u53CC\u51FB\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570</td><td><code>((e: Event) =&gt; void) </code></td></tr><tr><td>mousedown</td><td>\u9F20\u6807\u5DE6\u952E\u5728\u8BE5\u8986\u76D6\u7269\u4E0A\u6309\u4E0B\u7684\u56DE\u8C03\u51FD\u6570</td><td><code>((e: Event) =&gt; void) </code></td></tr><tr><td>mouseup</td><td>\u9F20\u6807\u5DE6\u952E\u5728\u8BE5\u8986\u76D6\u7269\u4E0A\u62AC\u8D77\u7684\u56DE\u8C03\u51FD\u6570</td><td><code>((e: Event) =&gt; void) </code></td></tr><tr><td>mouseout</td><td>\u9F20\u6807\u6307\u9488\u79FB\u51FA\u8BE5\u8986\u76D6\u7269\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570</td><td><code>((e: Event) =&gt; void) </code></td></tr><tr><td>mouseover</td><td>\u9F20\u6807\u6307\u9488\u79FB\u5165\u8BE5\u8986\u76D6\u7269\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570</td><td><code>((e: Event) =&gt; void) </code></td></tr><tr><td>remove</td><td>\u8BE5\u8986\u76D6\u7269\u88AB\u79FB\u9664\u7684\u56DE\u8C03\u51FD\u6570</td><td><code>((e: Event) =&gt; void) </code></td></tr><tr><td>lineupdate</td><td>\u8986\u76D6\u7269\u88AB\u7F16\u8F91\u540E\u7684\u56DE\u8C03\u51FD\u6570</td><td><code>((e: Event) =&gt; void) </code></td></tr></tbody></table><h2 id="\u7EC4\u4EF6\u5B9E\u4F8B" tabindex="-1">\u7EC4\u4EF6\u5B9E\u4F8B <a class="header-anchor" href="#\u7EC4\u4EF6\u5B9E\u4F8B" aria-hidden="true">#</a></h2>`,10),D=e(`<div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">map</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:minZoom</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">400px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Circle</span></span>
<span class="line"><span style="color:#89DDFF;">		</span><span style="color:#C792EA;">stroke-style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dashed</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">		</span><span style="color:#C792EA;">:center</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#C3E88D;">      lng: 116.406,</span></span>
<span class="line"><span style="color:#C3E88D;">      lat: 39.937</span></span>
<span class="line"><span style="color:#C3E88D;">    }</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">		</span><span style="color:#C792EA;">:radius</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">300</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">		</span><span style="color:#C792EA;">enableEditing</span></span>
<span class="line"><span style="color:#89DDFF;">	/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">map</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Map</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Circle</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue3-baidu-map-gl</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,1);function y(F,h,C,u,_,g){const o=t("Circle",!0),a=t("Map");return n(),l("div",null,[i,p("div",null,[s(a,{ak:"4stE857hYPHbEmgKhLiTAa0QbCIULHpm",minZoom:3,height:"400px"},{default:c(()=>[s(o,{"stroke-style":"dashed",center:{lat:39.915185,lng:116.403901},radius:300,enableEditing:""},null,8,["center"])]),_:1})]),D])}var A=d(r,[["render",y]]);export{m as __pageData,A as default};

import{_ as s,c as a,o as n,a as l}from"./app.4c479adf.js";var p="/vue3-baidu-map-gl/not-enable-volar.png",o="/vue3-baidu-map-gl/not-enable-volar1.png",e="/vue3-baidu-map-gl/enable-volar.png",t="/vue3-baidu-map-gl/enable-volar1.png";const h=JSON.parse('{"title":"\u5728 SFC \u4E2D\u4F7F\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6309\u9700\u5F15\u5165 \u{1F44D}\uFF08\u63A8\u8350\uFF09","slug":"\u6309\u9700\u5F15\u5165-thumbsup-\uFF08\u63A8\u8350\uFF09"},{"level":2,"title":"\u5168\u5C40\u5B89\u88C5 \u{1F44E}\uFF08\u4E0D\u63A8\u8350\uFF09","slug":"\u5168\u5C40\u5B89\u88C5-thumbsdown-\uFF08\u4E0D\u63A8\u8350\uFF09"},{"level":3,"title":"\u5B89\u88C5\u5168\u90E8\u7EC4\u4EF6","slug":"\u5B89\u88C5\u5168\u90E8\u7EC4\u4EF6"},{"level":3,"title":"Volar \u652F\u6301\uFF081.0.0\uFF09","slug":"volar-\u652F\u6301\uFF081-0-0\uFF09"}],"relativePath":"zh/guide/usage-sfc.md","lastUpdated":1665420598000}'),c={name:"zh/guide/usage-sfc.md"},r=l(`<h1 id="\u5728-sfc-\u4E2D\u4F7F\u7528" tabindex="-1">\u5728 SFC \u4E2D\u4F7F\u7528 <a class="header-anchor" href="#\u5728-sfc-\u4E2D\u4F7F\u7528" aria-hidden="true">#</a></h1><p>\u4F60\u53EF\u4EE5\u9009\u62E9\u76F4\u63A5\u5F15\u5165\u6216\u5168\u5C40\u5B89\u88C5\u5728 Vue App\u4E2D\u3002</p><h2 id="\u6309\u9700\u5F15\u5165-thumbsup-\uFF08\u63A8\u8350\uFF09" tabindex="-1">\u6309\u9700\u5F15\u5165 \u{1F44D}\uFF08\u63A8\u8350\uFF09 <a class="header-anchor" href="#\u6309\u9700\u5F15\u5165-thumbsup-\uFF08\u63A8\u8350\uFF09" aria-hidden="true">#</a></h2><p>\u4F60\u53EF\u4EE5\u76F4\u63A5\u5BFC\u5165\u7EC4\u4EF6\u5E76\u4F7F\u7528\u5B83\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u53EA\u6709\u5BFC\u5165\u7684\u7EC4\u4EF6\u624D\u4F1A\u88AB\u6253\u5305\u3002</p><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Map</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">ak</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u767E\u5EA6\u5730\u56FEak</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Zoom</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Map</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Map</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Zoom</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue3-baidu-map-gl</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5168\u5C40\u5B89\u88C5-thumbsdown-\uFF08\u4E0D\u63A8\u8350\uFF09" tabindex="-1">\u5168\u5C40\u5B89\u88C5 \u{1F44E}\uFF08\u4E0D\u63A8\u8350\uFF09 <a class="header-anchor" href="#\u5168\u5C40\u5B89\u88C5-thumbsdown-\uFF08\u4E0D\u63A8\u8350\uFF09" aria-hidden="true">#</a></h2><h3 id="\u5B89\u88C5\u5168\u90E8\u7EC4\u4EF6" tabindex="-1">\u5B89\u88C5\u5168\u90E8\u7EC4\u4EF6 <a class="header-anchor" href="#\u5B89\u88C5\u5168\u90E8\u7EC4\u4EF6" aria-hidden="true">#</a></h3><p>\u5931\u53BB tree-shaking \u7684\u80FD\u529B\uFF0C\u6253\u5305\u6709\u5197\u4F59\u4EE3\u7801\u3002</p><p>\u5982\u679C\u4F60\u60F3\u5168\u5C40\u5B89\u88C5\u4F46\u662F\u4E0D\u60F3\u5B89\u88C5\u5168\u90E8\u7EC4\u4EF6\uFF0C\u8BF7\u53C2\u8003<a href="#%E6%8C%89%E9%9C%80%E5%BC%95%E5%85%A5-thumbsup-%EF%BC%88%E6%8E%A8%E8%8D%90%EF%BC%89">\u6309\u9700\u5F15\u5165</a>\u3002</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> baiduMap </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue3-baidu-map-gl</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(App)</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(baiduMap</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">ak</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u767E\u5EA6\u5730\u56FEak</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u5B89\u88C5\u540E\uFF0C\u4F60\u53EF\u4EE5\u8FD9\u6837\u5728 SFC \u4E2D\u4F7F\u7528\u5168\u90E8\u7EC4\u4EF6\u3002</p><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">b-map</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">b-zoom</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">b-map</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="volar-\u652F\u6301\uFF081-0-0\uFF09" tabindex="-1">Volar \u652F\u6301\uFF081.0.0\uFF09 <a class="header-anchor" href="#volar-\u652F\u6301\uFF081-0-0\uFF09" aria-hidden="true">#</a></h3><p>\u5982\u679C\u4F60\u5728\u4F7F\u7528 <code>Volar</code>\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5728 <code>tsconfig.json</code> \u4E2D\u914D\u7F6E <code>compilerOptions.types</code> \u6765\u6307\u5B9A\u5168\u5C40\u7EC4\u4EF6\u7C7B\u578B\uFF0C\u4ECE\u800C\u83B7\u5F97\u66F4\u597D\u7684\u7C7B\u578B\u63D0\u793A\u3002\u5982\u4E0B\u56FE\uFF1A</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// tsconfig.json</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">types</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue3-baidu-map-gl/volar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u914D\u7F6E <code>Volar</code> \u524D\uFF1A <div style="display:flex;justify-content:flex-start;"><img src="`+p+'" alt=""><img src="'+o+'" alt=""></div></p><p>\u914D\u7F6E <code>Volar</code> \u540E\uFF1A <div><img width="70%" src="'+e+'" alt=""><img width="70%" src="'+t+'" alt=""></div></p>',17),D=[r];function F(y,i,C,A,d,u){return n(),a("div",null,D)}var m=s(c,[["render",F]]);export{h as __pageData,m as default};

import{_ as s,c as n,o as a,a as l}from"./app.394a9e97.js";const i=JSON.parse('{"title":"useAreaBoundary","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EE3\u7801\u793A\u4F8B","slug":"\u4EE3\u7801\u793A\u4F8B","link":"#\u4EE3\u7801\u793A\u4F8B","children":[]},{"level":2,"title":"\u7C7B\u578B\u5B9A\u4E49","slug":"\u7C7B\u578B\u5B9A\u4E49","link":"#\u7C7B\u578B\u5B9A\u4E49","children":[]}],"relativePath":"zh/hooks/useAreaBoundary.md","lastUpdated":1666255752000}'),p={name:"zh/hooks/useAreaBoundary.md"},o=l(`<h1 id="useareaboundary" tabindex="-1">useAreaBoundary <a class="header-anchor" href="#useareaboundary" aria-hidden="true">#</a></h1><p>\u901A\u8FC7\u8BE5 hooks \u53EF\u83B7\u53D6\u884C\u653F\u533A\u57DF\u7684\u8FB9\u754C\u3002</p><h2 id="\u4EE3\u7801\u793A\u4F8B" tabindex="-1">\u4EE3\u7801\u793A\u4F8B <a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Map</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@initd</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">handleInitd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">Map</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useAreaBoundary</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue3-baidu-map-gl</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> isLoading</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> boundaries</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> get </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useAreaBoundary</span><span style="color:#A6ACCD;">()  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">handleInitd</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">get</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5317\u4EAC\u5E02</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u81EA\u5B9A\u4E49\u56DE\u8C03</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Map</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@initd</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">handleInitd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">Map</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useAreaBoundary</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue3-baidu-map-gl</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> isLoading</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> boundaries</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> get </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useAreaBoundary</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// do somethings</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">handleInitd</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">get</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5317\u4EAC\u5E02</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AreaBoundary</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * \u83B7\u53D6\u5730\u56FE\u533A\u57DF\u8FB9\u754C</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">cal</span><span style="color:#676E95;"> \u83B7\u53D6\u6210\u529F\u540E\u7684\u56DE\u8C03\u51FD\u6570</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">returns</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;"> isLoading, boundaries, get </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useAreaBoundary</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">cal</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">boundaries</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">AreaBoundary</span><span style="color:#89DDFF;">&gt;)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u662F\u5426\u52A0\u8F7D\u4E2D</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">isLoading</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u533A\u57DF\u8FB9\u754C\u6570\u636E</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">boundaries</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u83B7\u53D6\u6307\u5B9A\u533A\u57DF\u8FB9\u754C</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">area</span><span style="color:#676E95;"> \u533A\u57DF\u540D</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">example</span><span style="color:#676E95;"> get(&#39;\u5317\u4EAC\u5E02&#39;)</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">get</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">area</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,8),e=[o];function t(c,r,y,D,F,A){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
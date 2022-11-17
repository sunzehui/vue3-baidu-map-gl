import{d as F,r as D,c as u,b as t,f as c,j as o,e as p,g as l,o as y,_ as C}from"./app.dd80370f.js";const A=p(`<h1 id="control-\u81EA\u5B9A\u4E49\u63A7\u4EF6" tabindex="-1" data-v-3028c6b7>Control \u81EA\u5B9A\u4E49\u63A7\u4EF6 <a class="header-anchor" href="#control-\u81EA\u5B9A\u4E49\u63A7\u4EF6" aria-hidden="true" data-v-3028c6b7>#</a></h1><p data-v-3028c6b7>\u6839\u636E\u5730\u56FE <code data-v-3028c6b7>Map</code> \u7EC4\u4EF6\u63D0\u4F9B\u7684 Props\uFF0C\u6216\u8005\u5730\u56FE\u5B9E\u4F8B\uFF0C\u81EA\u5B9A\u4E49\u63A7\u4EF6</p><div class="language-ts" data-v-3028c6b7><button title="Copy Code" class="copy" data-v-3028c6b7></button><span class="lang" data-v-3028c6b7>ts</span><pre class="shiki" data-v-3028c6b7><code data-v-3028c6b7><span class="line" data-v-3028c6b7><span style="color:#89DDFF;" data-v-3028c6b7>import</span><span style="color:#A6ACCD;" data-v-3028c6b7> </span><span style="color:#89DDFF;" data-v-3028c6b7>{</span><span style="color:#F07178;" data-v-3028c6b7> </span><span style="color:#A6ACCD;" data-v-3028c6b7>Control</span><span style="color:#F07178;" data-v-3028c6b7> </span><span style="color:#89DDFF;" data-v-3028c6b7>}</span><span style="color:#A6ACCD;" data-v-3028c6b7> </span><span style="color:#89DDFF;" data-v-3028c6b7>from</span><span style="color:#A6ACCD;" data-v-3028c6b7> </span><span style="color:#89DDFF;" data-v-3028c6b7>&#39;</span><span style="color:#C3E88D;" data-v-3028c6b7>vue3-baidu-map-gl</span><span style="color:#89DDFF;" data-v-3028c6b7>&#39;</span></span>
<span class="line" data-v-3028c6b7></span></code></pre></div><h2 id="\u7EC4\u4EF6\u793A\u4F8B" tabindex="-1" data-v-3028c6b7>\u7EC4\u4EF6\u793A\u4F8B <a class="header-anchor" href="#\u7EC4\u4EF6\u793A\u4F8B" aria-hidden="true" data-v-3028c6b7>#</a></h2>`,4),i=p(`<details class="details custom-block" data-v-3028c6b7><summary data-v-3028c6b7>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-html" data-v-3028c6b7><button title="Copy Code" class="copy" data-v-3028c6b7></button><span class="lang" data-v-3028c6b7>html</span><pre class="shiki" data-v-3028c6b7><code data-v-3028c6b7><span class="line" data-v-3028c6b7><span style="color:#89DDFF;" data-v-3028c6b7>&lt;</span><span style="color:#F07178;" data-v-3028c6b7>Map</span><span style="color:#89DDFF;" data-v-3028c6b7> </span><span style="color:#C792EA;" data-v-3028c6b7>@initd</span><span style="color:#89DDFF;" data-v-3028c6b7>=</span><span style="color:#89DDFF;" data-v-3028c6b7>&quot;</span><span style="color:#C3E88D;" data-v-3028c6b7>handleInitd</span><span style="color:#89DDFF;" data-v-3028c6b7>&quot;</span><span style="color:#89DDFF;" data-v-3028c6b7> </span><span style="color:#C792EA;" data-v-3028c6b7>:minZoom</span><span style="color:#89DDFF;" data-v-3028c6b7>=</span><span style="color:#89DDFF;" data-v-3028c6b7>&quot;</span><span style="color:#C3E88D;" data-v-3028c6b7>3</span><span style="color:#89DDFF;" data-v-3028c6b7>&quot;</span><span style="color:#89DDFF;" data-v-3028c6b7> </span><span style="color:#C792EA;" data-v-3028c6b7>:zoom</span><span style="color:#89DDFF;" data-v-3028c6b7>=</span><span style="color:#89DDFF;" data-v-3028c6b7>&quot;</span><span style="color:#C3E88D;" data-v-3028c6b7>zoom</span><span style="color:#89DDFF;" data-v-3028c6b7>&quot;</span><span style="color:#89DDFF;" data-v-3028c6b7>&gt;</span></span>
<span class="line" data-v-3028c6b7><span style="color:#A6ACCD;" data-v-3028c6b7>  </span><span style="color:#89DDFF;" data-v-3028c6b7>&lt;</span><span style="color:#F07178;" data-v-3028c6b7>Control</span><span style="color:#89DDFF;" data-v-3028c6b7> </span><span style="color:#C792EA;" data-v-3028c6b7>style</span><span style="color:#89DDFF;" data-v-3028c6b7>=</span><span style="color:#89DDFF;" data-v-3028c6b7>&quot;</span><span style="color:#C3E88D;" data-v-3028c6b7>display: flex; background-color: #fff; padding: 10px</span><span style="color:#89DDFF;" data-v-3028c6b7>&quot;</span><span style="color:#89DDFF;" data-v-3028c6b7> </span><span style="color:#C792EA;" data-v-3028c6b7>:offset</span><span style="color:#89DDFF;" data-v-3028c6b7>=</span><span style="color:#89DDFF;" data-v-3028c6b7>&quot;</span><span style="color:#C3E88D;" data-v-3028c6b7>{ x: 0, y: 0 }</span><span style="color:#89DDFF;" data-v-3028c6b7>&quot;</span><span style="color:#89DDFF;" data-v-3028c6b7>&gt;</span></span>
<span class="line" data-v-3028c6b7><span style="color:#A6ACCD;" data-v-3028c6b7>    </span><span style="color:#89DDFF;" data-v-3028c6b7>&lt;</span><span style="color:#F07178;" data-v-3028c6b7>button</span><span style="color:#89DDFF;" data-v-3028c6b7> </span><span style="color:#C792EA;" data-v-3028c6b7>@click</span><span style="color:#89DDFF;" data-v-3028c6b7>=</span><span style="color:#89DDFF;" data-v-3028c6b7>&quot;</span><span style="color:#C3E88D;" data-v-3028c6b7>handleZoomOut</span><span style="color:#89DDFF;" data-v-3028c6b7>&quot;</span><span style="color:#89DDFF;" data-v-3028c6b7>&gt;</span><span style="color:#A6ACCD;" data-v-3028c6b7>\u7F29\u5C0F</span><span style="color:#89DDFF;" data-v-3028c6b7>&lt;/</span><span style="color:#F07178;" data-v-3028c6b7>button</span><span style="color:#89DDFF;" data-v-3028c6b7>&gt;</span></span>
<span class="line" data-v-3028c6b7><span style="color:#A6ACCD;" data-v-3028c6b7>    </span><span style="color:#89DDFF;" data-v-3028c6b7>&lt;</span><span style="color:#F07178;" data-v-3028c6b7>button</span><span style="color:#89DDFF;" data-v-3028c6b7> </span><span style="color:#C792EA;" data-v-3028c6b7>@click</span><span style="color:#89DDFF;" data-v-3028c6b7>=</span><span style="color:#89DDFF;" data-v-3028c6b7>&quot;</span><span style="color:#C3E88D;" data-v-3028c6b7>handleZoomIn</span><span style="color:#89DDFF;" data-v-3028c6b7>&quot;</span><span style="color:#89DDFF;" data-v-3028c6b7>&gt;</span><span style="color:#A6ACCD;" data-v-3028c6b7>\u653E\u5927</span><span style="color:#89DDFF;" data-v-3028c6b7>&lt;/</span><span style="color:#F07178;" data-v-3028c6b7>button</span><span style="color:#89DDFF;" data-v-3028c6b7>&gt;</span></span>
<span class="line" data-v-3028c6b7><span style="color:#A6ACCD;" data-v-3028c6b7>  </span><span style="color:#89DDFF;" data-v-3028c6b7>&lt;/</span><span style="color:#F07178;" data-v-3028c6b7>Control</span><span style="color:#89DDFF;" data-v-3028c6b7>&gt;</span></span>
<span class="line" data-v-3028c6b7><span style="color:#89DDFF;" data-v-3028c6b7>&lt;/</span><span style="color:#F07178;" data-v-3028c6b7>Map</span><span style="color:#89DDFF;" data-v-3028c6b7>&gt;</span></span>
<span class="line" data-v-3028c6b7></span>
<span class="line" data-v-3028c6b7><span style="color:#89DDFF;" data-v-3028c6b7>&lt;</span><span style="color:#F07178;" data-v-3028c6b7>script</span><span style="color:#89DDFF;" data-v-3028c6b7> </span><span style="color:#C792EA;" data-v-3028c6b7>setup</span><span style="color:#89DDFF;" data-v-3028c6b7> </span><span style="color:#C792EA;" data-v-3028c6b7>lang</span><span style="color:#89DDFF;" data-v-3028c6b7>=</span><span style="color:#89DDFF;" data-v-3028c6b7>&quot;</span><span style="color:#C3E88D;" data-v-3028c6b7>ts</span><span style="color:#89DDFF;" data-v-3028c6b7>&quot;</span><span style="color:#89DDFF;" data-v-3028c6b7>&gt;</span></span>
<span class="line" data-v-3028c6b7><span style="color:#A6ACCD;" data-v-3028c6b7>  </span><span style="color:#89DDFF;" data-v-3028c6b7>import</span><span style="color:#A6ACCD;" data-v-3028c6b7> </span><span style="color:#89DDFF;" data-v-3028c6b7>{</span><span style="color:#F07178;" data-v-3028c6b7> </span><span style="color:#A6ACCD;" data-v-3028c6b7>ref</span><span style="color:#F07178;" data-v-3028c6b7> </span><span style="color:#89DDFF;" data-v-3028c6b7>}</span><span style="color:#A6ACCD;" data-v-3028c6b7> </span><span style="color:#89DDFF;" data-v-3028c6b7>from</span><span style="color:#A6ACCD;" data-v-3028c6b7> </span><span style="color:#89DDFF;" data-v-3028c6b7>&#39;</span><span style="color:#C3E88D;" data-v-3028c6b7>vue</span><span style="color:#89DDFF;" data-v-3028c6b7>&#39;</span></span>
<span class="line" data-v-3028c6b7><span style="color:#A6ACCD;" data-v-3028c6b7>  </span><span style="color:#C792EA;" data-v-3028c6b7>const</span><span style="color:#A6ACCD;" data-v-3028c6b7> zoom </span><span style="color:#89DDFF;" data-v-3028c6b7>=</span><span style="color:#A6ACCD;" data-v-3028c6b7> </span><span style="color:#82AAFF;" data-v-3028c6b7>ref</span><span style="color:#A6ACCD;" data-v-3028c6b7>(</span><span style="color:#F78C6C;" data-v-3028c6b7>10</span><span style="color:#A6ACCD;" data-v-3028c6b7>)</span></span>
<span class="line" data-v-3028c6b7><span style="color:#A6ACCD;" data-v-3028c6b7>  </span><span style="color:#C792EA;" data-v-3028c6b7>let</span><span style="color:#A6ACCD;" data-v-3028c6b7> _map </span><span style="color:#89DDFF;" data-v-3028c6b7>=</span><span style="color:#A6ACCD;" data-v-3028c6b7> </span><span style="color:#89DDFF;" data-v-3028c6b7>null</span></span>
<span class="line" data-v-3028c6b7><span style="color:#A6ACCD;" data-v-3028c6b7>  </span><span style="color:#C792EA;" data-v-3028c6b7>function</span><span style="color:#A6ACCD;" data-v-3028c6b7> </span><span style="color:#82AAFF;" data-v-3028c6b7>handleInitd</span><span style="color:#89DDFF;" data-v-3028c6b7>({</span><span style="color:#A6ACCD;" data-v-3028c6b7>map</span><span style="color:#89DDFF;" data-v-3028c6b7>})</span><span style="color:#A6ACCD;" data-v-3028c6b7> </span><span style="color:#89DDFF;" data-v-3028c6b7>{</span></span>
<span class="line" data-v-3028c6b7><span style="color:#F07178;" data-v-3028c6b7>    </span><span style="color:#A6ACCD;" data-v-3028c6b7>_map</span><span style="color:#F07178;" data-v-3028c6b7> </span><span style="color:#89DDFF;" data-v-3028c6b7>=</span><span style="color:#F07178;" data-v-3028c6b7> </span><span style="color:#A6ACCD;" data-v-3028c6b7>map</span></span>
<span class="line" data-v-3028c6b7><span style="color:#F07178;" data-v-3028c6b7>  </span><span style="color:#89DDFF;" data-v-3028c6b7>}</span></span>
<span class="line" data-v-3028c6b7><span style="color:#A6ACCD;" data-v-3028c6b7>  </span><span style="color:#C792EA;" data-v-3028c6b7>function</span><span style="color:#A6ACCD;" data-v-3028c6b7> </span><span style="color:#82AAFF;" data-v-3028c6b7>handleZoomOut</span><span style="color:#89DDFF;" data-v-3028c6b7>()</span><span style="color:#A6ACCD;" data-v-3028c6b7> </span><span style="color:#89DDFF;" data-v-3028c6b7>{</span></span>
<span class="line" data-v-3028c6b7><span style="color:#F07178;" data-v-3028c6b7>    </span><span style="color:#A6ACCD;" data-v-3028c6b7>zoom</span><span style="color:#89DDFF;" data-v-3028c6b7>.</span><span style="color:#A6ACCD;" data-v-3028c6b7>value</span><span style="color:#F07178;" data-v-3028c6b7> </span><span style="color:#89DDFF;" data-v-3028c6b7>=</span><span style="color:#F07178;" data-v-3028c6b7> </span><span style="color:#A6ACCD;" data-v-3028c6b7>_map</span><span style="color:#89DDFF;" data-v-3028c6b7>.</span><span style="color:#82AAFF;" data-v-3028c6b7>getZoom</span><span style="color:#F07178;" data-v-3028c6b7>() </span><span style="color:#89DDFF;" data-v-3028c6b7>-</span><span style="color:#F07178;" data-v-3028c6b7> </span><span style="color:#F78C6C;" data-v-3028c6b7>1</span></span>
<span class="line" data-v-3028c6b7><span style="color:#F07178;" data-v-3028c6b7>  </span><span style="color:#89DDFF;" data-v-3028c6b7>}</span></span>
<span class="line" data-v-3028c6b7><span style="color:#A6ACCD;" data-v-3028c6b7>  </span><span style="color:#C792EA;" data-v-3028c6b7>function</span><span style="color:#A6ACCD;" data-v-3028c6b7> </span><span style="color:#82AAFF;" data-v-3028c6b7>handleZoomIn</span><span style="color:#89DDFF;" data-v-3028c6b7>()</span><span style="color:#A6ACCD;" data-v-3028c6b7> </span><span style="color:#89DDFF;" data-v-3028c6b7>{</span></span>
<span class="line" data-v-3028c6b7><span style="color:#F07178;" data-v-3028c6b7>    </span><span style="color:#A6ACCD;" data-v-3028c6b7>zoom</span><span style="color:#89DDFF;" data-v-3028c6b7>.</span><span style="color:#A6ACCD;" data-v-3028c6b7>value</span><span style="color:#F07178;" data-v-3028c6b7> </span><span style="color:#89DDFF;" data-v-3028c6b7>=</span><span style="color:#F07178;" data-v-3028c6b7> </span><span style="color:#A6ACCD;" data-v-3028c6b7>_map</span><span style="color:#89DDFF;" data-v-3028c6b7>.</span><span style="color:#82AAFF;" data-v-3028c6b7>getZoom</span><span style="color:#F07178;" data-v-3028c6b7>() </span><span style="color:#89DDFF;" data-v-3028c6b7>+</span><span style="color:#F07178;" data-v-3028c6b7> </span><span style="color:#F78C6C;" data-v-3028c6b7>1</span></span>
<span class="line" data-v-3028c6b7><span style="color:#F07178;" data-v-3028c6b7>  </span><span style="color:#89DDFF;" data-v-3028c6b7>}</span></span>
<span class="line" data-v-3028c6b7><span style="color:#89DDFF;" data-v-3028c6b7>&lt;/</span><span style="color:#F07178;" data-v-3028c6b7>script</span><span style="color:#89DDFF;" data-v-3028c6b7>&gt;</span></span>
<span class="line" data-v-3028c6b7></span>
<span class="line" data-v-3028c6b7><span style="color:#89DDFF;" data-v-3028c6b7>&lt;</span><span style="color:#F07178;" data-v-3028c6b7>style</span><span style="color:#89DDFF;" data-v-3028c6b7> </span><span style="color:#C792EA;" data-v-3028c6b7>scoped</span><span style="color:#89DDFF;" data-v-3028c6b7>&gt;</span></span>
<span class="line" data-v-3028c6b7><span style="color:#A6ACCD;" data-v-3028c6b7>  </span><span style="color:#FFCB6B;" data-v-3028c6b7>button</span><span style="color:#A6ACCD;" data-v-3028c6b7> </span><span style="color:#89DDFF;" data-v-3028c6b7>{</span></span>
<span class="line" data-v-3028c6b7><span style="color:#A6ACCD;" data-v-3028c6b7>    </span><span style="color:#B2CCD6;" data-v-3028c6b7>outline</span><span style="color:#89DDFF;" data-v-3028c6b7>:</span><span style="color:#A6ACCD;" data-v-3028c6b7> none</span><span style="color:#89DDFF;" data-v-3028c6b7>;</span></span>
<span class="line" data-v-3028c6b7><span style="color:#A6ACCD;" data-v-3028c6b7>    </span><span style="color:#B2CCD6;" data-v-3028c6b7>border</span><span style="color:#89DDFF;" data-v-3028c6b7>:</span><span style="color:#A6ACCD;" data-v-3028c6b7> none</span><span style="color:#89DDFF;" data-v-3028c6b7>;</span></span>
<span class="line" data-v-3028c6b7><span style="color:#A6ACCD;" data-v-3028c6b7>    </span><span style="color:#B2CCD6;" data-v-3028c6b7>background</span><span style="color:#89DDFF;" data-v-3028c6b7>:</span><span style="color:#A6ACCD;" data-v-3028c6b7> </span><span style="color:#89DDFF;" data-v-3028c6b7>#</span><span style="color:#A6ACCD;" data-v-3028c6b7>41b883</span><span style="color:#89DDFF;" data-v-3028c6b7>;</span></span>
<span class="line" data-v-3028c6b7><span style="color:#A6ACCD;" data-v-3028c6b7>    </span><span style="color:#B2CCD6;" data-v-3028c6b7>margin</span><span style="color:#89DDFF;" data-v-3028c6b7>:</span><span style="color:#A6ACCD;" data-v-3028c6b7> </span><span style="color:#F78C6C;" data-v-3028c6b7>0</span><span style="color:#A6ACCD;" data-v-3028c6b7> </span><span style="color:#F78C6C;" data-v-3028c6b7>5px</span><span style="color:#89DDFF;" data-v-3028c6b7>;</span></span>
<span class="line" data-v-3028c6b7><span style="color:#A6ACCD;" data-v-3028c6b7>    </span><span style="color:#B2CCD6;" data-v-3028c6b7>padding</span><span style="color:#89DDFF;" data-v-3028c6b7>:</span><span style="color:#A6ACCD;" data-v-3028c6b7> </span><span style="color:#F78C6C;" data-v-3028c6b7>5px</span><span style="color:#A6ACCD;" data-v-3028c6b7> </span><span style="color:#F78C6C;" data-v-3028c6b7>15px</span><span style="color:#89DDFF;" data-v-3028c6b7>;</span></span>
<span class="line" data-v-3028c6b7><span style="color:#A6ACCD;" data-v-3028c6b7>    </span><span style="color:#B2CCD6;" data-v-3028c6b7>border-radius</span><span style="color:#89DDFF;" data-v-3028c6b7>:</span><span style="color:#A6ACCD;" data-v-3028c6b7> </span><span style="color:#F78C6C;" data-v-3028c6b7>4px</span><span style="color:#A6ACCD;" data-v-3028c6b7> </span><span style="color:#F78C6C;" data-v-3028c6b7>!important</span><span style="color:#89DDFF;" data-v-3028c6b7>;</span></span>
<span class="line" data-v-3028c6b7><span style="color:#A6ACCD;" data-v-3028c6b7>  </span><span style="color:#89DDFF;" data-v-3028c6b7>}</span></span>
<span class="line" data-v-3028c6b7><span style="color:#89DDFF;" data-v-3028c6b7>&lt;/</span><span style="color:#F07178;" data-v-3028c6b7>style</span><span style="color:#89DDFF;" data-v-3028c6b7>&gt;</span></span>
<span class="line" data-v-3028c6b7></span></code></pre></div></details><h2 id="\u9759\u6001\u7EC4\u4EF6-props" tabindex="-1" data-v-3028c6b7>\u9759\u6001\u7EC4\u4EF6 Props <a class="header-anchor" href="#\u9759\u6001\u7EC4\u4EF6-props" aria-hidden="true" data-v-3028c6b7>#</a></h2><table data-v-3028c6b7><thead data-v-3028c6b7><tr data-v-3028c6b7><th data-v-3028c6b7>\u5C5E\u6027</th><th data-v-3028c6b7>\u8BF4\u660E</th><th data-v-3028c6b7>\u7C7B\u578B</th><th data-v-3028c6b7>\u53EF\u9009\u503C</th><th data-v-3028c6b7>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-3028c6b7><tr data-v-3028c6b7><td data-v-3028c6b7>anchor</td><td data-v-3028c6b7>\u63A7\u4EF6\u7684\u505C\u9760\u4F4D\u7F6E</td><td data-v-3028c6b7><code data-v-3028c6b7>string</code></td><td data-v-3028c6b7><a href="#anchor" data-v-3028c6b7>anchor</a></td><td data-v-3028c6b7><code data-v-3028c6b7>BMAP_ANCHOR_BOTTOM_LEFT</code></td></tr><tr data-v-3028c6b7><td data-v-3028c6b7>offset</td><td data-v-3028c6b7>\u63A7\u4EF6\u7684\u504F\u79FB\u503C</td><td data-v-3028c6b7><code data-v-3028c6b7>{x: number, y: number }</code></td><td data-v-3028c6b7>-</td><td data-v-3028c6b7><code data-v-3028c6b7>{ x: 83, y: 18 }</code></td></tr></tbody></table><h2 id="anchor" tabindex="-1" data-v-3028c6b7>anchor <a class="header-anchor" href="#anchor" aria-hidden="true" data-v-3028c6b7>#</a></h2><table data-v-3028c6b7><thead data-v-3028c6b7><tr data-v-3028c6b7><th data-v-3028c6b7>\u503C</th><th data-v-3028c6b7>\u8BF4\u660E</th></tr></thead><tbody data-v-3028c6b7><tr data-v-3028c6b7><td data-v-3028c6b7>BMAP_ANCHOR_TOP_LEFT</td><td data-v-3028c6b7>\u5DE6\u4E0A</td></tr><tr data-v-3028c6b7><td data-v-3028c6b7>BMAP_ANCHOR_TOP_RIGHT</td><td data-v-3028c6b7>\u53F3\u4E0A</td></tr><tr data-v-3028c6b7><td data-v-3028c6b7>BMAP_ANCHOR_BOTTOM_LEFT</td><td data-v-3028c6b7>\u5DE6\u4E0B</td></tr><tr data-v-3028c6b7><td data-v-3028c6b7>BMAP_ANCHOR_BOTTOM_RIGHT</td><td data-v-3028c6b7>\u53F3\u4E0B</td></tr></tbody></table><h2 id="\u7EC4\u4EF6\u4E8B\u4EF6" tabindex="-1" data-v-3028c6b7>\u7EC4\u4EF6\u4E8B\u4EF6 <a class="header-anchor" href="#\u7EC4\u4EF6\u4E8B\u4EF6" aria-hidden="true" data-v-3028c6b7>#</a></h2><table data-v-3028c6b7><thead data-v-3028c6b7><tr data-v-3028c6b7><th data-v-3028c6b7>\u4E8B\u4EF6\u540D</th><th data-v-3028c6b7>\u8BF4\u660E</th><th data-v-3028c6b7>\u7C7B\u578B</th></tr></thead><tbody data-v-3028c6b7><tr data-v-3028c6b7><td data-v-3028c6b7>initd</td><td data-v-3028c6b7>\u7EC4\u4EF6\u521D\u59CB\u5316\u540E\uFF0C\u8C03\u7528\u7684\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5730\u56FE\u5B9E\u4F8B</td><td data-v-3028c6b7><code data-v-3028c6b7>{ map, BmapGL, instance }</code></td></tr><tr data-v-3028c6b7><td data-v-3028c6b7>unload</td><td data-v-3028c6b7>\u7EC4\u4EF6\u5378\u8F7D\u65F6\u4F1A\u8C03\u7528\u6B64\u65B9\u6CD5</td><td data-v-3028c6b7>-</td></tr></tbody></table>`,7),f=JSON.parse('{"title":"Control \u81EA\u5B9A\u4E49\u63A7\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7EC4\u4EF6\u793A\u4F8B","slug":"\u7EC4\u4EF6\u793A\u4F8B","link":"#\u7EC4\u4EF6\u793A\u4F8B","children":[]},{"level":2,"title":"\u9759\u6001\u7EC4\u4EF6 Props","slug":"\u9759\u6001\u7EC4\u4EF6-props","link":"#\u9759\u6001\u7EC4\u4EF6-props","children":[]},{"level":2,"title":"anchor","slug":"anchor","link":"#anchor","children":[]},{"level":2,"title":"\u7EC4\u4EF6\u4E8B\u4EF6","slug":"\u7EC4\u4EF6\u4E8B\u4EF6","link":"#\u7EC4\u4EF6\u4E8B\u4EF6","children":[]}],"relativePath":"zh/control/custom.md","lastUpdated":1668675791000}'),E={name:"zh/control/custom.md"},h=F({...E,setup(m){const a=D(10);let s=null;function d({map:n}){s=n}function e(){a.value=s.getZoom()-1}function b(){a.value=s.getZoom()+1}return(n,B)=>{const v=l("Control"),r=l("Map");return y(),u("div",null,[A,t("div",null,[c(r,{onInitd:d,minZoom:3,zoom:a.value},{default:o(()=>[c(v,{style:{display:"flex","background-color":"#fff",padding:"10px"},offset:{x:0,y:0}},{default:o(()=>[t("button",{onClick:e},"\u7F29\u5C0F"),t("button",{onClick:b},"\u653E\u5927")]),_:1})]),_:1},8,["zoom"])]),i])}}});const g=C(h,[["__scopeId","data-v-3028c6b7"]]);export{f as __pageData,g as default};

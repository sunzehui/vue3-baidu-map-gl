import{e as r,f as F,c as D,b as t,d as n,i as o,a as p,r as l,o as y,_ as u}from"./app.394a9e97.js";const C=p(`<h1 id="control-\u81EA\u5B9A\u4E49\u63A7\u4EF6" tabindex="-1" data-v-1fe83b24>Control \u81EA\u5B9A\u4E49\u63A7\u4EF6 <a class="header-anchor" href="#control-\u81EA\u5B9A\u4E49\u63A7\u4EF6" aria-hidden="true" data-v-1fe83b24>#</a></h1><p data-v-1fe83b24>\u6839\u636E\u5730\u56FE <code data-v-1fe83b24>Map</code> \u7EC4\u4EF6\u63D0\u4F9B\u7684Props\uFF0C\u6216\u8005\u5730\u56FE\u5B9E\u4F8B\uFF0C\u81EA\u5B9A\u4E49\u63A7\u4EF6</p><div class="language-ts" data-v-1fe83b24><button title="Copy Code" class="copy" data-v-1fe83b24></button><span class="lang" data-v-1fe83b24>ts</span><pre data-v-1fe83b24><code data-v-1fe83b24><span class="line" data-v-1fe83b24><span style="color:#89DDFF;" data-v-1fe83b24>import</span><span style="color:#A6ACCD;" data-v-1fe83b24> </span><span style="color:#89DDFF;" data-v-1fe83b24>{</span><span style="color:#F07178;" data-v-1fe83b24> </span><span style="color:#A6ACCD;" data-v-1fe83b24>Control</span><span style="color:#F07178;" data-v-1fe83b24> </span><span style="color:#89DDFF;" data-v-1fe83b24>}</span><span style="color:#A6ACCD;" data-v-1fe83b24> </span><span style="color:#89DDFF;" data-v-1fe83b24>from</span><span style="color:#A6ACCD;" data-v-1fe83b24> </span><span style="color:#89DDFF;" data-v-1fe83b24>&#39;</span><span style="color:#C3E88D;" data-v-1fe83b24>vue3-baidu-map-gl</span><span style="color:#89DDFF;" data-v-1fe83b24>&#39;</span></span>
<span class="line" data-v-1fe83b24></span></code></pre></div><h2 id="\u7EC4\u4EF6\u793A\u4F8B" tabindex="-1" data-v-1fe83b24>\u7EC4\u4EF6\u793A\u4F8B <a class="header-anchor" href="#\u7EC4\u4EF6\u793A\u4F8B" aria-hidden="true" data-v-1fe83b24>#</a></h2>`,4),A=p(`<details class="details custom-block" data-v-1fe83b24><summary data-v-1fe83b24>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-html" data-v-1fe83b24><button title="Copy Code" class="copy" data-v-1fe83b24></button><span class="lang" data-v-1fe83b24>html</span><pre data-v-1fe83b24><code data-v-1fe83b24><span class="line" data-v-1fe83b24><span style="color:#89DDFF;" data-v-1fe83b24>&lt;</span><span style="color:#F07178;" data-v-1fe83b24>div</span><span style="color:#89DDFF;" data-v-1fe83b24>&gt;</span></span>
<span class="line" data-v-1fe83b24><span style="color:#A6ACCD;" data-v-1fe83b24>  </span><span style="color:#89DDFF;" data-v-1fe83b24>&lt;</span><span style="color:#F07178;" data-v-1fe83b24>Map</span></span>
<span class="line" data-v-1fe83b24><span style="color:#89DDFF;" data-v-1fe83b24>    </span><span style="color:#C792EA;" data-v-1fe83b24>@initd</span><span style="color:#89DDFF;" data-v-1fe83b24>=</span><span style="color:#89DDFF;" data-v-1fe83b24>&quot;</span><span style="color:#C3E88D;" data-v-1fe83b24>handleInitd</span><span style="color:#89DDFF;" data-v-1fe83b24>&quot;</span></span>
<span class="line" data-v-1fe83b24><span style="color:#89DDFF;" data-v-1fe83b24>    </span><span style="color:#C792EA;" data-v-1fe83b24>:minZoom</span><span style="color:#89DDFF;" data-v-1fe83b24>=</span><span style="color:#89DDFF;" data-v-1fe83b24>&quot;</span><span style="color:#C3E88D;" data-v-1fe83b24>3</span><span style="color:#89DDFF;" data-v-1fe83b24>&quot;</span></span>
<span class="line" data-v-1fe83b24><span style="color:#89DDFF;" data-v-1fe83b24>    </span><span style="color:#C792EA;" data-v-1fe83b24>:zoom</span><span style="color:#89DDFF;" data-v-1fe83b24>=</span><span style="color:#89DDFF;" data-v-1fe83b24>&quot;</span><span style="color:#C3E88D;" data-v-1fe83b24>zoom</span><span style="color:#89DDFF;" data-v-1fe83b24>&quot;</span></span>
<span class="line" data-v-1fe83b24><span style="color:#89DDFF;" data-v-1fe83b24>    </span><span style="color:#C792EA;" data-v-1fe83b24>height</span><span style="color:#89DDFF;" data-v-1fe83b24>=</span><span style="color:#89DDFF;" data-v-1fe83b24>&quot;</span><span style="color:#C3E88D;" data-v-1fe83b24>400px</span><span style="color:#89DDFF;" data-v-1fe83b24>&quot;</span></span>
<span class="line" data-v-1fe83b24><span style="color:#89DDFF;" data-v-1fe83b24>  &gt;</span></span>
<span class="line" data-v-1fe83b24><span style="color:#A6ACCD;" data-v-1fe83b24>    </span><span style="color:#89DDFF;" data-v-1fe83b24>&lt;</span><span style="color:#F07178;" data-v-1fe83b24>Control</span><span style="color:#89DDFF;" data-v-1fe83b24> </span><span style="color:#C792EA;" data-v-1fe83b24>style</span><span style="color:#89DDFF;" data-v-1fe83b24>=</span><span style="color:#89DDFF;" data-v-1fe83b24>&quot;</span><span style="color:#C3E88D;" data-v-1fe83b24>display: flex; background-color: #fff; padding: 10px</span><span style="color:#89DDFF;" data-v-1fe83b24>&quot;</span><span style="color:#89DDFF;" data-v-1fe83b24> </span><span style="color:#C792EA;" data-v-1fe83b24>:offset</span><span style="color:#89DDFF;" data-v-1fe83b24>=</span><span style="color:#89DDFF;" data-v-1fe83b24>&quot;</span><span style="color:#C3E88D;" data-v-1fe83b24>{ x: 0, y: 0 }</span><span style="color:#89DDFF;" data-v-1fe83b24>&quot;</span><span style="color:#89DDFF;" data-v-1fe83b24>&gt;</span></span>
<span class="line" data-v-1fe83b24><span style="color:#A6ACCD;" data-v-1fe83b24>      </span><span style="color:#89DDFF;" data-v-1fe83b24>&lt;</span><span style="color:#F07178;" data-v-1fe83b24>button</span><span style="color:#89DDFF;" data-v-1fe83b24> </span><span style="color:#C792EA;" data-v-1fe83b24>@click</span><span style="color:#89DDFF;" data-v-1fe83b24>=</span><span style="color:#89DDFF;" data-v-1fe83b24>&quot;</span><span style="color:#C3E88D;" data-v-1fe83b24>handleZoomOut</span><span style="color:#89DDFF;" data-v-1fe83b24>&quot;</span><span style="color:#89DDFF;" data-v-1fe83b24>&gt;</span><span style="color:#A6ACCD;" data-v-1fe83b24>\u7F29\u5C0F</span><span style="color:#89DDFF;" data-v-1fe83b24>&lt;/</span><span style="color:#F07178;" data-v-1fe83b24>button</span><span style="color:#89DDFF;" data-v-1fe83b24>&gt;</span></span>
<span class="line" data-v-1fe83b24><span style="color:#A6ACCD;" data-v-1fe83b24>      </span><span style="color:#89DDFF;" data-v-1fe83b24>&lt;</span><span style="color:#F07178;" data-v-1fe83b24>button</span><span style="color:#89DDFF;" data-v-1fe83b24> </span><span style="color:#C792EA;" data-v-1fe83b24>@click</span><span style="color:#89DDFF;" data-v-1fe83b24>=</span><span style="color:#89DDFF;" data-v-1fe83b24>&quot;</span><span style="color:#C3E88D;" data-v-1fe83b24>handleZoomIn</span><span style="color:#89DDFF;" data-v-1fe83b24>&quot;</span><span style="color:#89DDFF;" data-v-1fe83b24>&gt;</span><span style="color:#A6ACCD;" data-v-1fe83b24>\u653E\u5927</span><span style="color:#89DDFF;" data-v-1fe83b24>&lt;/</span><span style="color:#F07178;" data-v-1fe83b24>button</span><span style="color:#89DDFF;" data-v-1fe83b24>&gt;</span></span>
<span class="line" data-v-1fe83b24><span style="color:#A6ACCD;" data-v-1fe83b24>    </span><span style="color:#89DDFF;" data-v-1fe83b24>&lt;/</span><span style="color:#F07178;" data-v-1fe83b24>Control</span><span style="color:#89DDFF;" data-v-1fe83b24>&gt;</span></span>
<span class="line" data-v-1fe83b24><span style="color:#A6ACCD;" data-v-1fe83b24>  </span><span style="color:#89DDFF;" data-v-1fe83b24>&lt;/</span><span style="color:#F07178;" data-v-1fe83b24>Map</span><span style="color:#89DDFF;" data-v-1fe83b24>&gt;</span></span>
<span class="line" data-v-1fe83b24><span style="color:#89DDFF;" data-v-1fe83b24>&lt;/</span><span style="color:#F07178;" data-v-1fe83b24>div</span><span style="color:#89DDFF;" data-v-1fe83b24>&gt;</span></span>
<span class="line" data-v-1fe83b24></span>
<span class="line" data-v-1fe83b24><span style="color:#89DDFF;" data-v-1fe83b24>&lt;</span><span style="color:#F07178;" data-v-1fe83b24>script</span><span style="color:#89DDFF;" data-v-1fe83b24> </span><span style="color:#C792EA;" data-v-1fe83b24>setup</span><span style="color:#89DDFF;" data-v-1fe83b24> </span><span style="color:#C792EA;" data-v-1fe83b24>lang</span><span style="color:#89DDFF;" data-v-1fe83b24>=</span><span style="color:#89DDFF;" data-v-1fe83b24>&quot;</span><span style="color:#C3E88D;" data-v-1fe83b24>ts</span><span style="color:#89DDFF;" data-v-1fe83b24>&quot;</span><span style="color:#89DDFF;" data-v-1fe83b24>&gt;</span></span>
<span class="line" data-v-1fe83b24><span style="color:#A6ACCD;" data-v-1fe83b24>  </span><span style="color:#89DDFF;" data-v-1fe83b24>import</span><span style="color:#A6ACCD;" data-v-1fe83b24> </span><span style="color:#89DDFF;" data-v-1fe83b24>{</span><span style="color:#F07178;" data-v-1fe83b24> </span><span style="color:#A6ACCD;" data-v-1fe83b24>ref</span><span style="color:#F07178;" data-v-1fe83b24> </span><span style="color:#89DDFF;" data-v-1fe83b24>}</span><span style="color:#A6ACCD;" data-v-1fe83b24> </span><span style="color:#89DDFF;" data-v-1fe83b24>from</span><span style="color:#A6ACCD;" data-v-1fe83b24> </span><span style="color:#89DDFF;" data-v-1fe83b24>&#39;</span><span style="color:#C3E88D;" data-v-1fe83b24>vue</span><span style="color:#89DDFF;" data-v-1fe83b24>&#39;</span></span>
<span class="line" data-v-1fe83b24><span style="color:#A6ACCD;" data-v-1fe83b24>  </span><span style="color:#C792EA;" data-v-1fe83b24>const</span><span style="color:#A6ACCD;" data-v-1fe83b24> zoom </span><span style="color:#89DDFF;" data-v-1fe83b24>=</span><span style="color:#A6ACCD;" data-v-1fe83b24> </span><span style="color:#82AAFF;" data-v-1fe83b24>ref</span><span style="color:#A6ACCD;" data-v-1fe83b24>(</span><span style="color:#F78C6C;" data-v-1fe83b24>10</span><span style="color:#A6ACCD;" data-v-1fe83b24>)</span></span>
<span class="line" data-v-1fe83b24><span style="color:#A6ACCD;" data-v-1fe83b24>  </span><span style="color:#C792EA;" data-v-1fe83b24>let</span><span style="color:#A6ACCD;" data-v-1fe83b24> _map </span><span style="color:#89DDFF;" data-v-1fe83b24>=</span><span style="color:#A6ACCD;" data-v-1fe83b24> </span><span style="color:#89DDFF;" data-v-1fe83b24>null</span></span>
<span class="line" data-v-1fe83b24><span style="color:#A6ACCD;" data-v-1fe83b24>  </span><span style="color:#C792EA;" data-v-1fe83b24>function</span><span style="color:#A6ACCD;" data-v-1fe83b24> </span><span style="color:#82AAFF;" data-v-1fe83b24>handleInitd</span><span style="color:#89DDFF;" data-v-1fe83b24>(</span><span style="color:#A6ACCD;" data-v-1fe83b24>map</span><span style="color:#89DDFF;" data-v-1fe83b24>){</span></span>
<span class="line" data-v-1fe83b24><span style="color:#F07178;" data-v-1fe83b24>    </span><span style="color:#A6ACCD;" data-v-1fe83b24>_map</span><span style="color:#F07178;" data-v-1fe83b24> </span><span style="color:#89DDFF;" data-v-1fe83b24>=</span><span style="color:#F07178;" data-v-1fe83b24> </span><span style="color:#A6ACCD;" data-v-1fe83b24>map</span></span>
<span class="line" data-v-1fe83b24><span style="color:#F07178;" data-v-1fe83b24>  </span><span style="color:#89DDFF;" data-v-1fe83b24>}</span></span>
<span class="line" data-v-1fe83b24><span style="color:#A6ACCD;" data-v-1fe83b24>  </span><span style="color:#C792EA;" data-v-1fe83b24>function</span><span style="color:#A6ACCD;" data-v-1fe83b24> </span><span style="color:#82AAFF;" data-v-1fe83b24>handleZoomOut</span><span style="color:#89DDFF;" data-v-1fe83b24>()</span><span style="color:#A6ACCD;" data-v-1fe83b24> </span><span style="color:#89DDFF;" data-v-1fe83b24>{</span></span>
<span class="line" data-v-1fe83b24><span style="color:#F07178;" data-v-1fe83b24>    </span><span style="color:#A6ACCD;" data-v-1fe83b24>zoom</span><span style="color:#89DDFF;" data-v-1fe83b24>.</span><span style="color:#A6ACCD;" data-v-1fe83b24>value</span><span style="color:#F07178;" data-v-1fe83b24> </span><span style="color:#89DDFF;" data-v-1fe83b24>=</span><span style="color:#F07178;" data-v-1fe83b24> </span><span style="color:#A6ACCD;" data-v-1fe83b24>_map</span><span style="color:#89DDFF;" data-v-1fe83b24>.</span><span style="color:#82AAFF;" data-v-1fe83b24>getZoom</span><span style="color:#F07178;" data-v-1fe83b24>() </span><span style="color:#89DDFF;" data-v-1fe83b24>-</span><span style="color:#F07178;" data-v-1fe83b24> </span><span style="color:#F78C6C;" data-v-1fe83b24>1</span></span>
<span class="line" data-v-1fe83b24><span style="color:#F07178;" data-v-1fe83b24>  </span><span style="color:#89DDFF;" data-v-1fe83b24>}</span></span>
<span class="line" data-v-1fe83b24><span style="color:#A6ACCD;" data-v-1fe83b24>  </span><span style="color:#C792EA;" data-v-1fe83b24>function</span><span style="color:#A6ACCD;" data-v-1fe83b24> </span><span style="color:#82AAFF;" data-v-1fe83b24>handleZoomIn</span><span style="color:#89DDFF;" data-v-1fe83b24>()</span><span style="color:#A6ACCD;" data-v-1fe83b24> </span><span style="color:#89DDFF;" data-v-1fe83b24>{</span></span>
<span class="line" data-v-1fe83b24><span style="color:#F07178;" data-v-1fe83b24>    </span><span style="color:#A6ACCD;" data-v-1fe83b24>zoom</span><span style="color:#89DDFF;" data-v-1fe83b24>.</span><span style="color:#A6ACCD;" data-v-1fe83b24>value</span><span style="color:#F07178;" data-v-1fe83b24> </span><span style="color:#89DDFF;" data-v-1fe83b24>=</span><span style="color:#F07178;" data-v-1fe83b24> </span><span style="color:#A6ACCD;" data-v-1fe83b24>_map</span><span style="color:#89DDFF;" data-v-1fe83b24>.</span><span style="color:#82AAFF;" data-v-1fe83b24>getZoom</span><span style="color:#F07178;" data-v-1fe83b24>() </span><span style="color:#89DDFF;" data-v-1fe83b24>+</span><span style="color:#F07178;" data-v-1fe83b24> </span><span style="color:#F78C6C;" data-v-1fe83b24>1</span></span>
<span class="line" data-v-1fe83b24><span style="color:#F07178;" data-v-1fe83b24>  </span><span style="color:#89DDFF;" data-v-1fe83b24>}</span></span>
<span class="line" data-v-1fe83b24><span style="color:#89DDFF;" data-v-1fe83b24>&lt;/</span><span style="color:#F07178;" data-v-1fe83b24>script</span><span style="color:#89DDFF;" data-v-1fe83b24>&gt;</span></span>
<span class="line" data-v-1fe83b24></span>
<span class="line" data-v-1fe83b24><span style="color:#89DDFF;" data-v-1fe83b24>&lt;</span><span style="color:#F07178;" data-v-1fe83b24>style</span><span style="color:#89DDFF;" data-v-1fe83b24> </span><span style="color:#C792EA;" data-v-1fe83b24>scoped</span><span style="color:#89DDFF;" data-v-1fe83b24>&gt;</span></span>
<span class="line" data-v-1fe83b24><span style="color:#FFCB6B;" data-v-1fe83b24>button</span><span style="color:#89DDFF;" data-v-1fe83b24>{</span></span>
<span class="line" data-v-1fe83b24><span style="color:#A6ACCD;" data-v-1fe83b24>  </span><span style="color:#B2CCD6;" data-v-1fe83b24>outline</span><span style="color:#89DDFF;" data-v-1fe83b24>:</span><span style="color:#A6ACCD;" data-v-1fe83b24>none</span><span style="color:#89DDFF;" data-v-1fe83b24>;</span></span>
<span class="line" data-v-1fe83b24><span style="color:#A6ACCD;" data-v-1fe83b24>  </span><span style="color:#B2CCD6;" data-v-1fe83b24>border</span><span style="color:#89DDFF;" data-v-1fe83b24>:</span><span style="color:#A6ACCD;" data-v-1fe83b24>none</span><span style="color:#89DDFF;" data-v-1fe83b24>;</span></span>
<span class="line" data-v-1fe83b24><span style="color:#A6ACCD;" data-v-1fe83b24>  </span><span style="color:#B2CCD6;" data-v-1fe83b24>background</span><span style="color:#89DDFF;" data-v-1fe83b24>:#</span><span style="color:#A6ACCD;" data-v-1fe83b24>41b883</span><span style="color:#89DDFF;" data-v-1fe83b24>;</span></span>
<span class="line" data-v-1fe83b24><span style="color:#A6ACCD;" data-v-1fe83b24>  </span><span style="color:#B2CCD6;" data-v-1fe83b24>margin</span><span style="color:#89DDFF;" data-v-1fe83b24>:</span><span style="color:#F78C6C;" data-v-1fe83b24>0</span><span style="color:#A6ACCD;" data-v-1fe83b24> </span><span style="color:#F78C6C;" data-v-1fe83b24>5px</span><span style="color:#89DDFF;" data-v-1fe83b24>;</span></span>
<span class="line" data-v-1fe83b24><span style="color:#A6ACCD;" data-v-1fe83b24>  </span><span style="color:#B2CCD6;" data-v-1fe83b24>padding</span><span style="color:#89DDFF;" data-v-1fe83b24>:</span><span style="color:#A6ACCD;" data-v-1fe83b24> </span><span style="color:#F78C6C;" data-v-1fe83b24>5px</span><span style="color:#A6ACCD;" data-v-1fe83b24> </span><span style="color:#F78C6C;" data-v-1fe83b24>15px</span><span style="color:#89DDFF;" data-v-1fe83b24>;</span></span>
<span class="line" data-v-1fe83b24><span style="color:#A6ACCD;" data-v-1fe83b24>  </span><span style="color:#B2CCD6;" data-v-1fe83b24>border-radius</span><span style="color:#89DDFF;" data-v-1fe83b24>:</span><span style="color:#A6ACCD;" data-v-1fe83b24> </span><span style="color:#F78C6C;" data-v-1fe83b24>4px</span><span style="color:#A6ACCD;" data-v-1fe83b24> </span><span style="color:#F78C6C;" data-v-1fe83b24>!important</span><span style="color:#89DDFF;" data-v-1fe83b24>;</span></span>
<span class="line" data-v-1fe83b24><span style="color:#89DDFF;" data-v-1fe83b24>}</span></span>
<span class="line" data-v-1fe83b24><span style="color:#89DDFF;" data-v-1fe83b24>&lt;/</span><span style="color:#F07178;" data-v-1fe83b24>style</span><span style="color:#89DDFF;" data-v-1fe83b24>&gt;</span></span>
<span class="line" data-v-1fe83b24></span></code></pre></div></details><h2 id="\u9759\u6001\u7EC4\u4EF6-props" tabindex="-1" data-v-1fe83b24>\u9759\u6001\u7EC4\u4EF6 Props <a class="header-anchor" href="#\u9759\u6001\u7EC4\u4EF6-props" aria-hidden="true" data-v-1fe83b24>#</a></h2><table data-v-1fe83b24><thead data-v-1fe83b24><tr data-v-1fe83b24><th data-v-1fe83b24>\u53C2\u6570</th><th data-v-1fe83b24>\u8BF4\u660E</th><th data-v-1fe83b24>\u7C7B\u578B</th><th data-v-1fe83b24>\u53EF\u9009\u503C</th><th data-v-1fe83b24>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-1fe83b24><tr data-v-1fe83b24><td data-v-1fe83b24>anchor</td><td data-v-1fe83b24>\u63A7\u4EF6\u7684\u505C\u9760\u4F4D\u7F6E</td><td data-v-1fe83b24><code data-v-1fe83b24>string</code></td><td data-v-1fe83b24><a href="#anchor" data-v-1fe83b24>anchor</a></td><td data-v-1fe83b24><code data-v-1fe83b24>BMAP_ANCHOR_BOTTOM_LEFT</code></td></tr><tr data-v-1fe83b24><td data-v-1fe83b24>offset</td><td data-v-1fe83b24>\u63A7\u4EF6\u7684\u504F\u79FB\u503C</td><td data-v-1fe83b24><code data-v-1fe83b24>{x: number, y: number }</code></td><td data-v-1fe83b24></td><td data-v-1fe83b24><code data-v-1fe83b24>{ x: 83, y: 18 }</code></td></tr></tbody></table><h2 id="anchor" tabindex="-1" data-v-1fe83b24>anchor <a class="header-anchor" href="#anchor" aria-hidden="true" data-v-1fe83b24>#</a></h2><table data-v-1fe83b24><thead data-v-1fe83b24><tr data-v-1fe83b24><th data-v-1fe83b24>\u503C</th><th data-v-1fe83b24>\u8BF4\u660E</th></tr></thead><tbody data-v-1fe83b24><tr data-v-1fe83b24><td data-v-1fe83b24>BMAP_ANCHOR_TOP_LEFT</td><td data-v-1fe83b24>\u5DE6\u4E0A</td></tr><tr data-v-1fe83b24><td data-v-1fe83b24>BMAP_ANCHOR_TOP_RIGHT</td><td data-v-1fe83b24>\u53F3\u4E0A</td></tr><tr data-v-1fe83b24><td data-v-1fe83b24>BMAP_ANCHOR_BOTTOM_LEFT</td><td data-v-1fe83b24>\u5DE6\u4E0B</td></tr><tr data-v-1fe83b24><td data-v-1fe83b24>BMAP_ANCHOR_BOTTOM_RIGHT</td><td data-v-1fe83b24>\u53F3\u4E0B</td></tr></tbody></table>`,5),B=JSON.parse('{"title":"Control \u81EA\u5B9A\u4E49\u63A7\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7EC4\u4EF6\u793A\u4F8B","slug":"\u7EC4\u4EF6\u793A\u4F8B","link":"#\u7EC4\u4EF6\u793A\u4F8B","children":[]},{"level":2,"title":"\u9759\u6001\u7EC4\u4EF6 Props","slug":"\u9759\u6001\u7EC4\u4EF6-props","link":"#\u9759\u6001\u7EC4\u4EF6-props","children":[]},{"level":2,"title":"anchor","slug":"anchor","link":"#anchor","children":[]}],"relativePath":"zh/control/custom.md","lastUpdated":1666255752000}'),i={name:"zh/control/custom.md"},E=r({...i,setup(h){const a=F(10);let s=null;function d(e){s=e}function f(){a.value=s.getZoom()-1}function b(){a.value=s.getZoom()+1}return(e,m)=>{const c=l("Control"),v=l("Map");return y(),D("div",null,[C,t("div",null,[n(v,{onInitd:d,minZoom:3,zoom:a.value,height:"400px"},{default:o(()=>[n(c,{style:{display:"flex","background-color":"#fff",padding:"10px"},offset:{x:0,y:0}},{default:o(()=>[t("button",{onClick:f},"\u7F29\u5C0F"),t("button",{onClick:b},"\u653E\u5927")]),_:1})]),_:1},8,["zoom"])]),A])}}});const g=u(E,[["__scopeId","data-v-1fe83b24"]]);export{B as __pageData,g as default};
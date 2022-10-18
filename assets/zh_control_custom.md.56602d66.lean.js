import{e as D,f as y,c as u,b as t,d as n,i as o,a as p,r as l,o as C,_ as A}from"./app.f376405b.js";const i=p(`<h1 id="control-\u81EA\u5B9A\u4E49\u63A7\u4EF6" tabindex="-1" data-v-aa7e15a0>Control \u81EA\u5B9A\u4E49\u63A7\u4EF6 <a class="header-anchor" href="#control-\u81EA\u5B9A\u4E49\u63A7\u4EF6" aria-hidden="true" data-v-aa7e15a0>#</a></h1><p data-v-aa7e15a0>\u6839\u636E\u5730\u56FE <code data-v-aa7e15a0>Map</code> \u7EC4\u4EF6\u63D0\u4F9B\u7684Props\uFF0C\u6216\u8005\u5730\u56FE\u5B9E\u4F8B\uFF0C\u81EA\u5B9A\u4E49\u63A7\u4EF6</p><div class="language-ts" data-v-aa7e15a0><button title="Copy Code" class="copy" data-v-aa7e15a0></button><span class="lang" data-v-aa7e15a0>ts</span><pre data-v-aa7e15a0><code data-v-aa7e15a0><span class="line" data-v-aa7e15a0><span style="color:#89DDFF;" data-v-aa7e15a0>import</span><span style="color:#A6ACCD;" data-v-aa7e15a0> </span><span style="color:#89DDFF;" data-v-aa7e15a0>{</span><span style="color:#F07178;" data-v-aa7e15a0> </span><span style="color:#A6ACCD;" data-v-aa7e15a0>Control</span><span style="color:#F07178;" data-v-aa7e15a0> </span><span style="color:#89DDFF;" data-v-aa7e15a0>}</span><span style="color:#A6ACCD;" data-v-aa7e15a0> </span><span style="color:#89DDFF;" data-v-aa7e15a0>from</span><span style="color:#A6ACCD;" data-v-aa7e15a0> </span><span style="color:#89DDFF;" data-v-aa7e15a0>&#39;</span><span style="color:#C3E88D;" data-v-aa7e15a0>vue3-baidu-map-gl</span><span style="color:#89DDFF;" data-v-aa7e15a0>&#39;</span></span>
<span class="line" data-v-aa7e15a0></span></code></pre></div><h2 id="\u7EC4\u4EF6\u793A\u4F8B" tabindex="-1" data-v-aa7e15a0>\u7EC4\u4EF6\u793A\u4F8B <a class="header-anchor" href="#\u7EC4\u4EF6\u793A\u4F8B" aria-hidden="true" data-v-aa7e15a0>#</a></h2>`,4),E=p(`<details class="details custom-block" data-v-aa7e15a0><summary data-v-aa7e15a0>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-html" data-v-aa7e15a0><button title="Copy Code" class="copy" data-v-aa7e15a0></button><span class="lang" data-v-aa7e15a0>html</span><pre data-v-aa7e15a0><code data-v-aa7e15a0><span class="line" data-v-aa7e15a0><span style="color:#89DDFF;" data-v-aa7e15a0>&lt;</span><span style="color:#F07178;" data-v-aa7e15a0>div</span><span style="color:#89DDFF;" data-v-aa7e15a0>&gt;</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#A6ACCD;" data-v-aa7e15a0>  </span><span style="color:#89DDFF;" data-v-aa7e15a0>&lt;</span><span style="color:#F07178;" data-v-aa7e15a0>Map</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#89DDFF;" data-v-aa7e15a0>    </span><span style="color:#C792EA;" data-v-aa7e15a0>@initd</span><span style="color:#89DDFF;" data-v-aa7e15a0>=</span><span style="color:#89DDFF;" data-v-aa7e15a0>&quot;</span><span style="color:#C3E88D;" data-v-aa7e15a0>handleInitd</span><span style="color:#89DDFF;" data-v-aa7e15a0>&quot;</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#89DDFF;" data-v-aa7e15a0>    </span><span style="color:#C792EA;" data-v-aa7e15a0>:minZoom</span><span style="color:#89DDFF;" data-v-aa7e15a0>=</span><span style="color:#89DDFF;" data-v-aa7e15a0>&quot;</span><span style="color:#C3E88D;" data-v-aa7e15a0>3</span><span style="color:#89DDFF;" data-v-aa7e15a0>&quot;</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#89DDFF;" data-v-aa7e15a0>    </span><span style="color:#C792EA;" data-v-aa7e15a0>:zoom</span><span style="color:#89DDFF;" data-v-aa7e15a0>=</span><span style="color:#89DDFF;" data-v-aa7e15a0>&quot;</span><span style="color:#C3E88D;" data-v-aa7e15a0>zoom</span><span style="color:#89DDFF;" data-v-aa7e15a0>&quot;</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#89DDFF;" data-v-aa7e15a0>    </span><span style="color:#C792EA;" data-v-aa7e15a0>height</span><span style="color:#89DDFF;" data-v-aa7e15a0>=</span><span style="color:#89DDFF;" data-v-aa7e15a0>&quot;</span><span style="color:#C3E88D;" data-v-aa7e15a0>400px</span><span style="color:#89DDFF;" data-v-aa7e15a0>&quot;</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#89DDFF;" data-v-aa7e15a0>  &gt;</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#A6ACCD;" data-v-aa7e15a0>    </span><span style="color:#89DDFF;" data-v-aa7e15a0>&lt;</span><span style="color:#F07178;" data-v-aa7e15a0>Control</span><span style="color:#89DDFF;" data-v-aa7e15a0> </span><span style="color:#C792EA;" data-v-aa7e15a0>style</span><span style="color:#89DDFF;" data-v-aa7e15a0>=</span><span style="color:#89DDFF;" data-v-aa7e15a0>&quot;</span><span style="color:#C3E88D;" data-v-aa7e15a0>display: flex; background-color: #fff; padding: 10px</span><span style="color:#89DDFF;" data-v-aa7e15a0>&quot;</span><span style="color:#89DDFF;" data-v-aa7e15a0> </span><span style="color:#C792EA;" data-v-aa7e15a0>:offset</span><span style="color:#89DDFF;" data-v-aa7e15a0>=</span><span style="color:#89DDFF;" data-v-aa7e15a0>&quot;</span><span style="color:#C3E88D;" data-v-aa7e15a0>{ x: 0, y: 0 }</span><span style="color:#89DDFF;" data-v-aa7e15a0>&quot;</span><span style="color:#89DDFF;" data-v-aa7e15a0>&gt;</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#A6ACCD;" data-v-aa7e15a0>      </span><span style="color:#89DDFF;" data-v-aa7e15a0>&lt;</span><span style="color:#F07178;" data-v-aa7e15a0>button</span><span style="color:#89DDFF;" data-v-aa7e15a0> </span><span style="color:#C792EA;" data-v-aa7e15a0>@click</span><span style="color:#89DDFF;" data-v-aa7e15a0>=</span><span style="color:#89DDFF;" data-v-aa7e15a0>&quot;</span><span style="color:#C3E88D;" data-v-aa7e15a0>handleZoomOut</span><span style="color:#89DDFF;" data-v-aa7e15a0>&quot;</span><span style="color:#89DDFF;" data-v-aa7e15a0>&gt;</span><span style="color:#A6ACCD;" data-v-aa7e15a0>\u7F29\u5C0F</span><span style="color:#89DDFF;" data-v-aa7e15a0>&lt;/</span><span style="color:#F07178;" data-v-aa7e15a0>button</span><span style="color:#89DDFF;" data-v-aa7e15a0>&gt;</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#A6ACCD;" data-v-aa7e15a0>      </span><span style="color:#89DDFF;" data-v-aa7e15a0>&lt;</span><span style="color:#F07178;" data-v-aa7e15a0>button</span><span style="color:#89DDFF;" data-v-aa7e15a0> </span><span style="color:#C792EA;" data-v-aa7e15a0>@click</span><span style="color:#89DDFF;" data-v-aa7e15a0>=</span><span style="color:#89DDFF;" data-v-aa7e15a0>&quot;</span><span style="color:#C3E88D;" data-v-aa7e15a0>handleZoomIn</span><span style="color:#89DDFF;" data-v-aa7e15a0>&quot;</span><span style="color:#89DDFF;" data-v-aa7e15a0>&gt;</span><span style="color:#A6ACCD;" data-v-aa7e15a0>\u653E\u5927</span><span style="color:#89DDFF;" data-v-aa7e15a0>&lt;/</span><span style="color:#F07178;" data-v-aa7e15a0>button</span><span style="color:#89DDFF;" data-v-aa7e15a0>&gt;</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#A6ACCD;" data-v-aa7e15a0>    </span><span style="color:#89DDFF;" data-v-aa7e15a0>&lt;/</span><span style="color:#F07178;" data-v-aa7e15a0>Control</span><span style="color:#89DDFF;" data-v-aa7e15a0>&gt;</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#A6ACCD;" data-v-aa7e15a0>  </span><span style="color:#89DDFF;" data-v-aa7e15a0>&lt;/</span><span style="color:#F07178;" data-v-aa7e15a0>Map</span><span style="color:#89DDFF;" data-v-aa7e15a0>&gt;</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#89DDFF;" data-v-aa7e15a0>&lt;/</span><span style="color:#F07178;" data-v-aa7e15a0>div</span><span style="color:#89DDFF;" data-v-aa7e15a0>&gt;</span></span>
<span class="line" data-v-aa7e15a0></span>
<span class="line" data-v-aa7e15a0><span style="color:#89DDFF;" data-v-aa7e15a0>&lt;</span><span style="color:#F07178;" data-v-aa7e15a0>script</span><span style="color:#89DDFF;" data-v-aa7e15a0> </span><span style="color:#C792EA;" data-v-aa7e15a0>setup</span><span style="color:#89DDFF;" data-v-aa7e15a0> </span><span style="color:#C792EA;" data-v-aa7e15a0>lang</span><span style="color:#89DDFF;" data-v-aa7e15a0>=</span><span style="color:#89DDFF;" data-v-aa7e15a0>&quot;</span><span style="color:#C3E88D;" data-v-aa7e15a0>ts</span><span style="color:#89DDFF;" data-v-aa7e15a0>&quot;</span><span style="color:#89DDFF;" data-v-aa7e15a0>&gt;</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#A6ACCD;" data-v-aa7e15a0>  </span><span style="color:#89DDFF;" data-v-aa7e15a0>import</span><span style="color:#A6ACCD;" data-v-aa7e15a0> </span><span style="color:#89DDFF;" data-v-aa7e15a0>{</span><span style="color:#F07178;" data-v-aa7e15a0> </span><span style="color:#A6ACCD;" data-v-aa7e15a0>ref</span><span style="color:#F07178;" data-v-aa7e15a0> </span><span style="color:#89DDFF;" data-v-aa7e15a0>}</span><span style="color:#A6ACCD;" data-v-aa7e15a0> </span><span style="color:#89DDFF;" data-v-aa7e15a0>from</span><span style="color:#A6ACCD;" data-v-aa7e15a0> </span><span style="color:#89DDFF;" data-v-aa7e15a0>&#39;</span><span style="color:#C3E88D;" data-v-aa7e15a0>vue</span><span style="color:#89DDFF;" data-v-aa7e15a0>&#39;</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#A6ACCD;" data-v-aa7e15a0>  </span><span style="color:#C792EA;" data-v-aa7e15a0>const</span><span style="color:#A6ACCD;" data-v-aa7e15a0> zoom </span><span style="color:#89DDFF;" data-v-aa7e15a0>=</span><span style="color:#A6ACCD;" data-v-aa7e15a0> </span><span style="color:#82AAFF;" data-v-aa7e15a0>ref</span><span style="color:#A6ACCD;" data-v-aa7e15a0>(</span><span style="color:#F78C6C;" data-v-aa7e15a0>10</span><span style="color:#A6ACCD;" data-v-aa7e15a0>)</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#A6ACCD;" data-v-aa7e15a0>  </span><span style="color:#C792EA;" data-v-aa7e15a0>let</span><span style="color:#A6ACCD;" data-v-aa7e15a0> _map </span><span style="color:#89DDFF;" data-v-aa7e15a0>=</span><span style="color:#A6ACCD;" data-v-aa7e15a0> </span><span style="color:#89DDFF;" data-v-aa7e15a0>null</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#A6ACCD;" data-v-aa7e15a0>  </span><span style="color:#C792EA;" data-v-aa7e15a0>function</span><span style="color:#A6ACCD;" data-v-aa7e15a0> </span><span style="color:#82AAFF;" data-v-aa7e15a0>handleInitd</span><span style="color:#89DDFF;" data-v-aa7e15a0>(</span><span style="color:#A6ACCD;" data-v-aa7e15a0>map</span><span style="color:#89DDFF;" data-v-aa7e15a0>){</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#F07178;" data-v-aa7e15a0>    </span><span style="color:#A6ACCD;" data-v-aa7e15a0>_map</span><span style="color:#F07178;" data-v-aa7e15a0> </span><span style="color:#89DDFF;" data-v-aa7e15a0>=</span><span style="color:#F07178;" data-v-aa7e15a0> </span><span style="color:#A6ACCD;" data-v-aa7e15a0>map</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#F07178;" data-v-aa7e15a0>  </span><span style="color:#89DDFF;" data-v-aa7e15a0>}</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#A6ACCD;" data-v-aa7e15a0>  </span><span style="color:#C792EA;" data-v-aa7e15a0>function</span><span style="color:#A6ACCD;" data-v-aa7e15a0> </span><span style="color:#82AAFF;" data-v-aa7e15a0>handleZoomOut</span><span style="color:#89DDFF;" data-v-aa7e15a0>()</span><span style="color:#A6ACCD;" data-v-aa7e15a0> </span><span style="color:#89DDFF;" data-v-aa7e15a0>{</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#F07178;" data-v-aa7e15a0>    </span><span style="color:#A6ACCD;" data-v-aa7e15a0>zoom</span><span style="color:#89DDFF;" data-v-aa7e15a0>.</span><span style="color:#A6ACCD;" data-v-aa7e15a0>value</span><span style="color:#F07178;" data-v-aa7e15a0> </span><span style="color:#89DDFF;" data-v-aa7e15a0>=</span><span style="color:#F07178;" data-v-aa7e15a0> </span><span style="color:#A6ACCD;" data-v-aa7e15a0>_map</span><span style="color:#89DDFF;" data-v-aa7e15a0>.</span><span style="color:#82AAFF;" data-v-aa7e15a0>getZoom</span><span style="color:#F07178;" data-v-aa7e15a0>() </span><span style="color:#89DDFF;" data-v-aa7e15a0>-</span><span style="color:#F07178;" data-v-aa7e15a0> </span><span style="color:#F78C6C;" data-v-aa7e15a0>1</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#F07178;" data-v-aa7e15a0>  </span><span style="color:#89DDFF;" data-v-aa7e15a0>}</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#A6ACCD;" data-v-aa7e15a0>  </span><span style="color:#C792EA;" data-v-aa7e15a0>function</span><span style="color:#A6ACCD;" data-v-aa7e15a0> </span><span style="color:#82AAFF;" data-v-aa7e15a0>handleZoomIn</span><span style="color:#89DDFF;" data-v-aa7e15a0>()</span><span style="color:#A6ACCD;" data-v-aa7e15a0> </span><span style="color:#89DDFF;" data-v-aa7e15a0>{</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#F07178;" data-v-aa7e15a0>    </span><span style="color:#A6ACCD;" data-v-aa7e15a0>zoom</span><span style="color:#89DDFF;" data-v-aa7e15a0>.</span><span style="color:#A6ACCD;" data-v-aa7e15a0>value</span><span style="color:#F07178;" data-v-aa7e15a0> </span><span style="color:#89DDFF;" data-v-aa7e15a0>=</span><span style="color:#F07178;" data-v-aa7e15a0> </span><span style="color:#A6ACCD;" data-v-aa7e15a0>_map</span><span style="color:#89DDFF;" data-v-aa7e15a0>.</span><span style="color:#82AAFF;" data-v-aa7e15a0>getZoom</span><span style="color:#F07178;" data-v-aa7e15a0>() </span><span style="color:#89DDFF;" data-v-aa7e15a0>+</span><span style="color:#F07178;" data-v-aa7e15a0> </span><span style="color:#F78C6C;" data-v-aa7e15a0>1</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#F07178;" data-v-aa7e15a0>  </span><span style="color:#89DDFF;" data-v-aa7e15a0>}</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#89DDFF;" data-v-aa7e15a0>&lt;/</span><span style="color:#F07178;" data-v-aa7e15a0>script</span><span style="color:#89DDFF;" data-v-aa7e15a0>&gt;</span></span>
<span class="line" data-v-aa7e15a0></span>
<span class="line" data-v-aa7e15a0><span style="color:#89DDFF;" data-v-aa7e15a0>&lt;</span><span style="color:#F07178;" data-v-aa7e15a0>style</span><span style="color:#89DDFF;" data-v-aa7e15a0> </span><span style="color:#C792EA;" data-v-aa7e15a0>scoped</span><span style="color:#89DDFF;" data-v-aa7e15a0>&gt;</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#FFCB6B;" data-v-aa7e15a0>button</span><span style="color:#89DDFF;" data-v-aa7e15a0>{</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#A6ACCD;" data-v-aa7e15a0>  </span><span style="color:#B2CCD6;" data-v-aa7e15a0>outline</span><span style="color:#89DDFF;" data-v-aa7e15a0>:</span><span style="color:#A6ACCD;" data-v-aa7e15a0>none</span><span style="color:#89DDFF;" data-v-aa7e15a0>;</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#A6ACCD;" data-v-aa7e15a0>  </span><span style="color:#B2CCD6;" data-v-aa7e15a0>border</span><span style="color:#89DDFF;" data-v-aa7e15a0>:</span><span style="color:#A6ACCD;" data-v-aa7e15a0>none</span><span style="color:#89DDFF;" data-v-aa7e15a0>;</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#A6ACCD;" data-v-aa7e15a0>  </span><span style="color:#B2CCD6;" data-v-aa7e15a0>background</span><span style="color:#89DDFF;" data-v-aa7e15a0>:#</span><span style="color:#A6ACCD;" data-v-aa7e15a0>41b883</span><span style="color:#89DDFF;" data-v-aa7e15a0>;</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#A6ACCD;" data-v-aa7e15a0>  </span><span style="color:#B2CCD6;" data-v-aa7e15a0>margin</span><span style="color:#89DDFF;" data-v-aa7e15a0>:</span><span style="color:#F78C6C;" data-v-aa7e15a0>0</span><span style="color:#A6ACCD;" data-v-aa7e15a0> </span><span style="color:#F78C6C;" data-v-aa7e15a0>5px</span><span style="color:#89DDFF;" data-v-aa7e15a0>;</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#A6ACCD;" data-v-aa7e15a0>  </span><span style="color:#B2CCD6;" data-v-aa7e15a0>padding</span><span style="color:#89DDFF;" data-v-aa7e15a0>:</span><span style="color:#A6ACCD;" data-v-aa7e15a0> </span><span style="color:#F78C6C;" data-v-aa7e15a0>5px</span><span style="color:#A6ACCD;" data-v-aa7e15a0> </span><span style="color:#F78C6C;" data-v-aa7e15a0>15px</span><span style="color:#89DDFF;" data-v-aa7e15a0>;</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#A6ACCD;" data-v-aa7e15a0>  </span><span style="color:#B2CCD6;" data-v-aa7e15a0>border-radius</span><span style="color:#89DDFF;" data-v-aa7e15a0>:</span><span style="color:#A6ACCD;" data-v-aa7e15a0> </span><span style="color:#F78C6C;" data-v-aa7e15a0>4px</span><span style="color:#A6ACCD;" data-v-aa7e15a0> </span><span style="color:#F78C6C;" data-v-aa7e15a0>!important</span><span style="color:#89DDFF;" data-v-aa7e15a0>;</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#89DDFF;" data-v-aa7e15a0>}</span></span>
<span class="line" data-v-aa7e15a0><span style="color:#89DDFF;" data-v-aa7e15a0>&lt;/</span><span style="color:#F07178;" data-v-aa7e15a0>style</span><span style="color:#89DDFF;" data-v-aa7e15a0>&gt;</span></span>
<span class="line" data-v-aa7e15a0></span></code></pre></div></details><h2 id="\u9759\u6001\u7EC4\u4EF6-props" tabindex="-1" data-v-aa7e15a0>\u9759\u6001\u7EC4\u4EF6 Props <a class="header-anchor" href="#\u9759\u6001\u7EC4\u4EF6-props" aria-hidden="true" data-v-aa7e15a0>#</a></h2><table data-v-aa7e15a0><thead data-v-aa7e15a0><tr data-v-aa7e15a0><th data-v-aa7e15a0>\u53C2\u6570</th><th data-v-aa7e15a0>\u8BF4\u660E</th><th data-v-aa7e15a0>\u7C7B\u578B</th><th data-v-aa7e15a0>\u53EF\u9009\u503C</th><th data-v-aa7e15a0>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-aa7e15a0><tr data-v-aa7e15a0><td data-v-aa7e15a0>anchor</td><td data-v-aa7e15a0>\u63A7\u4EF6\u7684\u505C\u9760\u4F4D\u7F6E</td><td data-v-aa7e15a0><code data-v-aa7e15a0>string</code></td><td data-v-aa7e15a0><a href="#anchor" data-v-aa7e15a0>anchor</a></td><td data-v-aa7e15a0><code data-v-aa7e15a0>BMAP_ANCHOR_BOTTOM_LEFT</code></td></tr><tr data-v-aa7e15a0><td data-v-aa7e15a0>offset</td><td data-v-aa7e15a0>\u63A7\u4EF6\u7684\u504F\u79FB\u503C</td><td data-v-aa7e15a0><code data-v-aa7e15a0>{x: number, y: number }</code></td><td data-v-aa7e15a0></td><td data-v-aa7e15a0><code data-v-aa7e15a0>{ x: 83, y: 18 }</code></td></tr></tbody></table><h2 id="anchor" tabindex="-1" data-v-aa7e15a0>anchor <a class="header-anchor" href="#anchor" aria-hidden="true" data-v-aa7e15a0>#</a></h2><table data-v-aa7e15a0><thead data-v-aa7e15a0><tr data-v-aa7e15a0><th data-v-aa7e15a0>\u503C</th><th data-v-aa7e15a0>\u8BF4\u660E</th></tr></thead><tbody data-v-aa7e15a0><tr data-v-aa7e15a0><td data-v-aa7e15a0>BMAP_ANCHOR_TOP_LEFT</td><td data-v-aa7e15a0>\u5DE6\u4E0A</td></tr><tr data-v-aa7e15a0><td data-v-aa7e15a0>BMAP_ANCHOR_TOP_RIGHT</td><td data-v-aa7e15a0>\u53F3\u4E0A</td></tr><tr data-v-aa7e15a0><td data-v-aa7e15a0>BMAP_ANCHOR_BOTTOM_LEFT</td><td data-v-aa7e15a0>\u5DE6\u4E0B</td></tr><tr data-v-aa7e15a0><td data-v-aa7e15a0>BMAP_ANCHOR_BOTTOM_RIGHT</td><td data-v-aa7e15a0>\u53F3\u4E0B</td></tr></tbody></table>`,5),f=JSON.parse('{"title":"Control \u81EA\u5B9A\u4E49\u63A7\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7EC4\u4EF6\u793A\u4F8B","slug":"\u7EC4\u4EF6\u793A\u4F8B","link":"#\u7EC4\u4EF6\u793A\u4F8B","children":[]},{"level":2,"title":"\u9759\u6001\u7EC4\u4EF6 Props","slug":"\u9759\u6001\u7EC4\u4EF6-props","link":"#\u9759\u6001\u7EC4\u4EF6-props","children":[]},{"level":2,"title":"anchor","slug":"anchor","link":"#anchor","children":[]}],"relativePath":"zh/control/custom.md","lastUpdated":1666110295000}'),h={name:"zh/control/custom.md"},m=D({...h,setup(_){const a=y(10);let s=null;function d(e){s=e}function c(){a.value=s.getZoom()-1}function v(){a.value=s.getZoom()+1}return(e,B)=>{const r=l("Control"),F=l("Map");return C(),u("div",null,[i,t("div",null,[n(F,{onInitd:d,minZoom:3,zoom:a.value,height:"400px"},{default:o(()=>[n(r,{style:{display:"flex","background-color":"#fff",padding:"10px"},offset:{x:0,y:0}},{default:o(()=>[t("button",{onClick:c},"\u7F29\u5C0F"),t("button",{onClick:v},"\u653E\u5927")]),_:1})]),_:1},8,["zoom"])]),E])}}});const b=A(m,[["__scopeId","data-v-aa7e15a0"]]);export{f as __pageData,b as default};

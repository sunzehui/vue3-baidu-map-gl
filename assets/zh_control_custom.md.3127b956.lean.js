import{e as r,f as F,c as D,b as t,d as o,i as l,a as d,r as p,o as y,_ as u}from"./app.7e4e6af9.js";const C=d(`<h1 id="control-\u81EA\u5B9A\u4E49\u63A7\u4EF6" tabindex="-1" data-v-1f09b058>Control \u81EA\u5B9A\u4E49\u63A7\u4EF6 <a class="header-anchor" href="#control-\u81EA\u5B9A\u4E49\u63A7\u4EF6" aria-hidden="true" data-v-1f09b058>#</a></h1><p data-v-1f09b058>\u6839\u636E\u5730\u56FE <code data-v-1f09b058>Map</code> \u7EC4\u4EF6\u63D0\u4F9B\u7684Props\uFF0C\u6216\u8005\u5730\u56FE\u5B9E\u4F8B\uFF0C\u81EA\u5B9A\u4E49\u63A7\u4EF6</p><div class="language-ts" data-v-1f09b058><button title="Copy Code" class="copy" data-v-1f09b058></button><span class="lang" data-v-1f09b058>ts</span><pre data-v-1f09b058><code data-v-1f09b058><span class="line" data-v-1f09b058><span style="color:#89DDFF;" data-v-1f09b058>import</span><span style="color:#A6ACCD;" data-v-1f09b058> </span><span style="color:#89DDFF;" data-v-1f09b058>{</span><span style="color:#F07178;" data-v-1f09b058> </span><span style="color:#A6ACCD;" data-v-1f09b058>Control</span><span style="color:#F07178;" data-v-1f09b058> </span><span style="color:#89DDFF;" data-v-1f09b058>}</span><span style="color:#A6ACCD;" data-v-1f09b058> </span><span style="color:#89DDFF;" data-v-1f09b058>from</span><span style="color:#A6ACCD;" data-v-1f09b058> </span><span style="color:#89DDFF;" data-v-1f09b058>&#39;</span><span style="color:#C3E88D;" data-v-1f09b058>vue3-baidu-map-gl</span><span style="color:#89DDFF;" data-v-1f09b058>&#39;</span></span>
<span class="line" data-v-1f09b058></span></code></pre></div><h2 id="\u7EC4\u4EF6\u793A\u4F8B" tabindex="-1" data-v-1f09b058>\u7EC4\u4EF6\u793A\u4F8B <a class="header-anchor" href="#\u7EC4\u4EF6\u793A\u4F8B" aria-hidden="true" data-v-1f09b058>#</a></h2>`,4),A=d(`<details class="details custom-block" data-v-1f09b058><summary data-v-1f09b058>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-html" data-v-1f09b058><button title="Copy Code" class="copy" data-v-1f09b058></button><span class="lang" data-v-1f09b058>html</span><pre data-v-1f09b058><code data-v-1f09b058><span class="line" data-v-1f09b058><span style="color:#89DDFF;" data-v-1f09b058>&lt;</span><span style="color:#F07178;" data-v-1f09b058>div</span><span style="color:#89DDFF;" data-v-1f09b058>&gt;</span></span>
<span class="line" data-v-1f09b058><span style="color:#A6ACCD;" data-v-1f09b058>  </span><span style="color:#89DDFF;" data-v-1f09b058>&lt;</span><span style="color:#F07178;" data-v-1f09b058>Map</span></span>
<span class="line" data-v-1f09b058><span style="color:#89DDFF;" data-v-1f09b058>    </span><span style="color:#C792EA;" data-v-1f09b058>@initd</span><span style="color:#89DDFF;" data-v-1f09b058>=</span><span style="color:#89DDFF;" data-v-1f09b058>&quot;</span><span style="color:#C3E88D;" data-v-1f09b058>handleInitd</span><span style="color:#89DDFF;" data-v-1f09b058>&quot;</span></span>
<span class="line" data-v-1f09b058><span style="color:#89DDFF;" data-v-1f09b058>    </span><span style="color:#C792EA;" data-v-1f09b058>:minZoom</span><span style="color:#89DDFF;" data-v-1f09b058>=</span><span style="color:#89DDFF;" data-v-1f09b058>&quot;</span><span style="color:#C3E88D;" data-v-1f09b058>3</span><span style="color:#89DDFF;" data-v-1f09b058>&quot;</span></span>
<span class="line" data-v-1f09b058><span style="color:#89DDFF;" data-v-1f09b058>    </span><span style="color:#C792EA;" data-v-1f09b058>:zoom</span><span style="color:#89DDFF;" data-v-1f09b058>=</span><span style="color:#89DDFF;" data-v-1f09b058>&quot;</span><span style="color:#C3E88D;" data-v-1f09b058>zoom</span><span style="color:#89DDFF;" data-v-1f09b058>&quot;</span></span>
<span class="line" data-v-1f09b058><span style="color:#89DDFF;" data-v-1f09b058>    </span><span style="color:#C792EA;" data-v-1f09b058>height</span><span style="color:#89DDFF;" data-v-1f09b058>=</span><span style="color:#89DDFF;" data-v-1f09b058>&quot;</span><span style="color:#C3E88D;" data-v-1f09b058>400px</span><span style="color:#89DDFF;" data-v-1f09b058>&quot;</span></span>
<span class="line" data-v-1f09b058><span style="color:#89DDFF;" data-v-1f09b058>  &gt;</span></span>
<span class="line" data-v-1f09b058><span style="color:#A6ACCD;" data-v-1f09b058>    </span><span style="color:#89DDFF;" data-v-1f09b058>&lt;</span><span style="color:#F07178;" data-v-1f09b058>Control</span><span style="color:#89DDFF;" data-v-1f09b058> </span><span style="color:#C792EA;" data-v-1f09b058>style</span><span style="color:#89DDFF;" data-v-1f09b058>=</span><span style="color:#89DDFF;" data-v-1f09b058>&quot;</span><span style="color:#C3E88D;" data-v-1f09b058>display: flex; background-color: #fff; padding: 10px</span><span style="color:#89DDFF;" data-v-1f09b058>&quot;</span><span style="color:#89DDFF;" data-v-1f09b058> </span><span style="color:#C792EA;" data-v-1f09b058>:offset</span><span style="color:#89DDFF;" data-v-1f09b058>=</span><span style="color:#89DDFF;" data-v-1f09b058>&quot;</span><span style="color:#C3E88D;" data-v-1f09b058>{ x: 0, y: 0 }</span><span style="color:#89DDFF;" data-v-1f09b058>&quot;</span><span style="color:#89DDFF;" data-v-1f09b058>&gt;</span></span>
<span class="line" data-v-1f09b058><span style="color:#A6ACCD;" data-v-1f09b058>      </span><span style="color:#89DDFF;" data-v-1f09b058>&lt;</span><span style="color:#F07178;" data-v-1f09b058>button</span><span style="color:#89DDFF;" data-v-1f09b058> </span><span style="color:#C792EA;" data-v-1f09b058>@click</span><span style="color:#89DDFF;" data-v-1f09b058>=</span><span style="color:#89DDFF;" data-v-1f09b058>&quot;</span><span style="color:#C3E88D;" data-v-1f09b058>handleZoomOut</span><span style="color:#89DDFF;" data-v-1f09b058>&quot;</span><span style="color:#89DDFF;" data-v-1f09b058>&gt;</span><span style="color:#A6ACCD;" data-v-1f09b058>\u7F29\u5C0F</span><span style="color:#89DDFF;" data-v-1f09b058>&lt;/</span><span style="color:#F07178;" data-v-1f09b058>button</span><span style="color:#89DDFF;" data-v-1f09b058>&gt;</span></span>
<span class="line" data-v-1f09b058><span style="color:#A6ACCD;" data-v-1f09b058>      </span><span style="color:#89DDFF;" data-v-1f09b058>&lt;</span><span style="color:#F07178;" data-v-1f09b058>button</span><span style="color:#89DDFF;" data-v-1f09b058> </span><span style="color:#C792EA;" data-v-1f09b058>@click</span><span style="color:#89DDFF;" data-v-1f09b058>=</span><span style="color:#89DDFF;" data-v-1f09b058>&quot;</span><span style="color:#C3E88D;" data-v-1f09b058>handleZoomIn</span><span style="color:#89DDFF;" data-v-1f09b058>&quot;</span><span style="color:#89DDFF;" data-v-1f09b058>&gt;</span><span style="color:#A6ACCD;" data-v-1f09b058>\u653E\u5927</span><span style="color:#89DDFF;" data-v-1f09b058>&lt;/</span><span style="color:#F07178;" data-v-1f09b058>button</span><span style="color:#89DDFF;" data-v-1f09b058>&gt;</span></span>
<span class="line" data-v-1f09b058><span style="color:#A6ACCD;" data-v-1f09b058>    </span><span style="color:#89DDFF;" data-v-1f09b058>&lt;/</span><span style="color:#F07178;" data-v-1f09b058>Control</span><span style="color:#89DDFF;" data-v-1f09b058>&gt;</span></span>
<span class="line" data-v-1f09b058><span style="color:#A6ACCD;" data-v-1f09b058>  </span><span style="color:#89DDFF;" data-v-1f09b058>&lt;/</span><span style="color:#F07178;" data-v-1f09b058>Map</span><span style="color:#89DDFF;" data-v-1f09b058>&gt;</span></span>
<span class="line" data-v-1f09b058><span style="color:#89DDFF;" data-v-1f09b058>&lt;/</span><span style="color:#F07178;" data-v-1f09b058>div</span><span style="color:#89DDFF;" data-v-1f09b058>&gt;</span></span>
<span class="line" data-v-1f09b058></span>
<span class="line" data-v-1f09b058><span style="color:#89DDFF;" data-v-1f09b058>&lt;</span><span style="color:#F07178;" data-v-1f09b058>script</span><span style="color:#89DDFF;" data-v-1f09b058> </span><span style="color:#C792EA;" data-v-1f09b058>setup</span><span style="color:#89DDFF;" data-v-1f09b058> </span><span style="color:#C792EA;" data-v-1f09b058>lang</span><span style="color:#89DDFF;" data-v-1f09b058>=</span><span style="color:#89DDFF;" data-v-1f09b058>&quot;</span><span style="color:#C3E88D;" data-v-1f09b058>ts</span><span style="color:#89DDFF;" data-v-1f09b058>&quot;</span><span style="color:#89DDFF;" data-v-1f09b058>&gt;</span></span>
<span class="line" data-v-1f09b058><span style="color:#A6ACCD;" data-v-1f09b058>  </span><span style="color:#89DDFF;" data-v-1f09b058>import</span><span style="color:#A6ACCD;" data-v-1f09b058> </span><span style="color:#89DDFF;" data-v-1f09b058>{</span><span style="color:#F07178;" data-v-1f09b058> </span><span style="color:#A6ACCD;" data-v-1f09b058>ref</span><span style="color:#F07178;" data-v-1f09b058> </span><span style="color:#89DDFF;" data-v-1f09b058>}</span><span style="color:#A6ACCD;" data-v-1f09b058> </span><span style="color:#89DDFF;" data-v-1f09b058>from</span><span style="color:#A6ACCD;" data-v-1f09b058> </span><span style="color:#89DDFF;" data-v-1f09b058>&#39;</span><span style="color:#C3E88D;" data-v-1f09b058>vue</span><span style="color:#89DDFF;" data-v-1f09b058>&#39;</span></span>
<span class="line" data-v-1f09b058><span style="color:#A6ACCD;" data-v-1f09b058>  </span><span style="color:#C792EA;" data-v-1f09b058>const</span><span style="color:#A6ACCD;" data-v-1f09b058> zoom </span><span style="color:#89DDFF;" data-v-1f09b058>=</span><span style="color:#A6ACCD;" data-v-1f09b058> </span><span style="color:#82AAFF;" data-v-1f09b058>ref</span><span style="color:#A6ACCD;" data-v-1f09b058>(</span><span style="color:#F78C6C;" data-v-1f09b058>10</span><span style="color:#A6ACCD;" data-v-1f09b058>)</span></span>
<span class="line" data-v-1f09b058><span style="color:#A6ACCD;" data-v-1f09b058>  </span><span style="color:#C792EA;" data-v-1f09b058>let</span><span style="color:#A6ACCD;" data-v-1f09b058> _map </span><span style="color:#89DDFF;" data-v-1f09b058>=</span><span style="color:#A6ACCD;" data-v-1f09b058> </span><span style="color:#89DDFF;" data-v-1f09b058>null</span></span>
<span class="line" data-v-1f09b058><span style="color:#A6ACCD;" data-v-1f09b058>  </span><span style="color:#C792EA;" data-v-1f09b058>function</span><span style="color:#A6ACCD;" data-v-1f09b058> </span><span style="color:#82AAFF;" data-v-1f09b058>handleInitd</span><span style="color:#89DDFF;" data-v-1f09b058>(</span><span style="color:#A6ACCD;" data-v-1f09b058>map</span><span style="color:#89DDFF;" data-v-1f09b058>){</span></span>
<span class="line" data-v-1f09b058><span style="color:#F07178;" data-v-1f09b058>    </span><span style="color:#A6ACCD;" data-v-1f09b058>_map</span><span style="color:#F07178;" data-v-1f09b058> </span><span style="color:#89DDFF;" data-v-1f09b058>=</span><span style="color:#F07178;" data-v-1f09b058> </span><span style="color:#A6ACCD;" data-v-1f09b058>map</span></span>
<span class="line" data-v-1f09b058><span style="color:#F07178;" data-v-1f09b058>  </span><span style="color:#89DDFF;" data-v-1f09b058>}</span></span>
<span class="line" data-v-1f09b058><span style="color:#A6ACCD;" data-v-1f09b058>  </span><span style="color:#C792EA;" data-v-1f09b058>function</span><span style="color:#A6ACCD;" data-v-1f09b058> </span><span style="color:#82AAFF;" data-v-1f09b058>handleZoomOut</span><span style="color:#89DDFF;" data-v-1f09b058>()</span><span style="color:#A6ACCD;" data-v-1f09b058> </span><span style="color:#89DDFF;" data-v-1f09b058>{</span></span>
<span class="line" data-v-1f09b058><span style="color:#F07178;" data-v-1f09b058>    </span><span style="color:#A6ACCD;" data-v-1f09b058>zoom</span><span style="color:#89DDFF;" data-v-1f09b058>.</span><span style="color:#A6ACCD;" data-v-1f09b058>value</span><span style="color:#F07178;" data-v-1f09b058> </span><span style="color:#89DDFF;" data-v-1f09b058>=</span><span style="color:#F07178;" data-v-1f09b058> </span><span style="color:#A6ACCD;" data-v-1f09b058>_map</span><span style="color:#89DDFF;" data-v-1f09b058>.</span><span style="color:#82AAFF;" data-v-1f09b058>getZoom</span><span style="color:#F07178;" data-v-1f09b058>() </span><span style="color:#89DDFF;" data-v-1f09b058>-</span><span style="color:#F07178;" data-v-1f09b058> </span><span style="color:#F78C6C;" data-v-1f09b058>1</span></span>
<span class="line" data-v-1f09b058><span style="color:#F07178;" data-v-1f09b058>  </span><span style="color:#89DDFF;" data-v-1f09b058>}</span></span>
<span class="line" data-v-1f09b058><span style="color:#A6ACCD;" data-v-1f09b058>  </span><span style="color:#C792EA;" data-v-1f09b058>function</span><span style="color:#A6ACCD;" data-v-1f09b058> </span><span style="color:#82AAFF;" data-v-1f09b058>handleZoomIn</span><span style="color:#89DDFF;" data-v-1f09b058>()</span><span style="color:#A6ACCD;" data-v-1f09b058> </span><span style="color:#89DDFF;" data-v-1f09b058>{</span></span>
<span class="line" data-v-1f09b058><span style="color:#F07178;" data-v-1f09b058>    </span><span style="color:#A6ACCD;" data-v-1f09b058>zoom</span><span style="color:#89DDFF;" data-v-1f09b058>.</span><span style="color:#A6ACCD;" data-v-1f09b058>value</span><span style="color:#F07178;" data-v-1f09b058> </span><span style="color:#89DDFF;" data-v-1f09b058>=</span><span style="color:#F07178;" data-v-1f09b058> </span><span style="color:#A6ACCD;" data-v-1f09b058>_map</span><span style="color:#89DDFF;" data-v-1f09b058>.</span><span style="color:#82AAFF;" data-v-1f09b058>getZoom</span><span style="color:#F07178;" data-v-1f09b058>() </span><span style="color:#89DDFF;" data-v-1f09b058>+</span><span style="color:#F07178;" data-v-1f09b058> </span><span style="color:#F78C6C;" data-v-1f09b058>1</span></span>
<span class="line" data-v-1f09b058><span style="color:#F07178;" data-v-1f09b058>  </span><span style="color:#89DDFF;" data-v-1f09b058>}</span></span>
<span class="line" data-v-1f09b058><span style="color:#89DDFF;" data-v-1f09b058>&lt;/</span><span style="color:#F07178;" data-v-1f09b058>script</span><span style="color:#89DDFF;" data-v-1f09b058>&gt;</span></span>
<span class="line" data-v-1f09b058></span>
<span class="line" data-v-1f09b058><span style="color:#89DDFF;" data-v-1f09b058>&lt;</span><span style="color:#F07178;" data-v-1f09b058>style</span><span style="color:#89DDFF;" data-v-1f09b058> </span><span style="color:#C792EA;" data-v-1f09b058>scoped</span><span style="color:#89DDFF;" data-v-1f09b058>&gt;</span></span>
<span class="line" data-v-1f09b058><span style="color:#FFCB6B;" data-v-1f09b058>button</span><span style="color:#89DDFF;" data-v-1f09b058>{</span></span>
<span class="line" data-v-1f09b058><span style="color:#A6ACCD;" data-v-1f09b058>  </span><span style="color:#B2CCD6;" data-v-1f09b058>outline</span><span style="color:#89DDFF;" data-v-1f09b058>:</span><span style="color:#A6ACCD;" data-v-1f09b058>none</span><span style="color:#89DDFF;" data-v-1f09b058>;</span></span>
<span class="line" data-v-1f09b058><span style="color:#A6ACCD;" data-v-1f09b058>  </span><span style="color:#B2CCD6;" data-v-1f09b058>border</span><span style="color:#89DDFF;" data-v-1f09b058>:</span><span style="color:#A6ACCD;" data-v-1f09b058>none</span><span style="color:#89DDFF;" data-v-1f09b058>;</span></span>
<span class="line" data-v-1f09b058><span style="color:#A6ACCD;" data-v-1f09b058>  </span><span style="color:#B2CCD6;" data-v-1f09b058>background</span><span style="color:#89DDFF;" data-v-1f09b058>:#</span><span style="color:#A6ACCD;" data-v-1f09b058>41b883</span><span style="color:#89DDFF;" data-v-1f09b058>;</span></span>
<span class="line" data-v-1f09b058><span style="color:#A6ACCD;" data-v-1f09b058>  </span><span style="color:#B2CCD6;" data-v-1f09b058>margin</span><span style="color:#89DDFF;" data-v-1f09b058>:</span><span style="color:#F78C6C;" data-v-1f09b058>0</span><span style="color:#A6ACCD;" data-v-1f09b058> </span><span style="color:#F78C6C;" data-v-1f09b058>5px</span><span style="color:#89DDFF;" data-v-1f09b058>;</span></span>
<span class="line" data-v-1f09b058><span style="color:#A6ACCD;" data-v-1f09b058>  </span><span style="color:#B2CCD6;" data-v-1f09b058>padding</span><span style="color:#89DDFF;" data-v-1f09b058>:</span><span style="color:#A6ACCD;" data-v-1f09b058> </span><span style="color:#F78C6C;" data-v-1f09b058>5px</span><span style="color:#A6ACCD;" data-v-1f09b058> </span><span style="color:#F78C6C;" data-v-1f09b058>15px</span><span style="color:#89DDFF;" data-v-1f09b058>;</span></span>
<span class="line" data-v-1f09b058><span style="color:#A6ACCD;" data-v-1f09b058>  </span><span style="color:#B2CCD6;" data-v-1f09b058>border-radius</span><span style="color:#89DDFF;" data-v-1f09b058>:</span><span style="color:#A6ACCD;" data-v-1f09b058> </span><span style="color:#F78C6C;" data-v-1f09b058>4px</span><span style="color:#A6ACCD;" data-v-1f09b058> </span><span style="color:#F78C6C;" data-v-1f09b058>!important</span><span style="color:#89DDFF;" data-v-1f09b058>;</span></span>
<span class="line" data-v-1f09b058><span style="color:#89DDFF;" data-v-1f09b058>}</span></span>
<span class="line" data-v-1f09b058><span style="color:#89DDFF;" data-v-1f09b058>&lt;/</span><span style="color:#F07178;" data-v-1f09b058>style</span><span style="color:#89DDFF;" data-v-1f09b058>&gt;</span></span>
<span class="line" data-v-1f09b058></span></code></pre></div></details><h2 id="\u9759\u6001\u7EC4\u4EF6-props" tabindex="-1" data-v-1f09b058>\u9759\u6001\u7EC4\u4EF6 Props <a class="header-anchor" href="#\u9759\u6001\u7EC4\u4EF6-props" aria-hidden="true" data-v-1f09b058>#</a></h2><table data-v-1f09b058><thead data-v-1f09b058><tr data-v-1f09b058><th data-v-1f09b058>\u53C2\u6570</th><th data-v-1f09b058>\u8BF4\u660E</th><th data-v-1f09b058>\u7C7B\u578B</th><th data-v-1f09b058>\u53EF\u9009\u503C</th><th data-v-1f09b058>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-1f09b058><tr data-v-1f09b058><td data-v-1f09b058>anchor</td><td data-v-1f09b058>\u63A7\u4EF6\u7684\u505C\u9760\u4F4D\u7F6E</td><td data-v-1f09b058><code data-v-1f09b058>string</code></td><td data-v-1f09b058><a href="#anchor" data-v-1f09b058>anchor</a></td><td data-v-1f09b058><code data-v-1f09b058>BMAP_ANCHOR_BOTTOM_LEFT</code></td></tr><tr data-v-1f09b058><td data-v-1f09b058>offset</td><td data-v-1f09b058>\u63A7\u4EF6\u7684\u504F\u79FB\u503C</td><td data-v-1f09b058><code data-v-1f09b058>{x: number, y: number }</code></td><td data-v-1f09b058></td><td data-v-1f09b058><code data-v-1f09b058>{ x: 83, y: 18 }</code></td></tr></tbody></table><h2 id="anchor" tabindex="-1" data-v-1f09b058>anchor <a class="header-anchor" href="#anchor" aria-hidden="true" data-v-1f09b058>#</a></h2><table data-v-1f09b058><thead data-v-1f09b058><tr data-v-1f09b058><th data-v-1f09b058>\u503C</th><th data-v-1f09b058>\u8BF4\u660E</th></tr></thead><tbody data-v-1f09b058><tr data-v-1f09b058><td data-v-1f09b058>BMAP_ANCHOR_TOP_LEFT</td><td data-v-1f09b058>\u5DE6\u4E0A</td></tr><tr data-v-1f09b058><td data-v-1f09b058>BMAP_ANCHOR_TOP_RIGHT</td><td data-v-1f09b058>\u53F3\u4E0A</td></tr><tr data-v-1f09b058><td data-v-1f09b058>BMAP_ANCHOR_BOTTOM_LEFT</td><td data-v-1f09b058>\u5DE6\u4E0B</td></tr><tr data-v-1f09b058><td data-v-1f09b058>BMAP_ANCHOR_BOTTOM_RIGHT</td><td data-v-1f09b058>\u53F3\u4E0B</td></tr></tbody></table>`,5),B=JSON.parse('{"title":"Control \u81EA\u5B9A\u4E49\u63A7\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7EC4\u4EF6\u793A\u4F8B","slug":"\u7EC4\u4EF6\u793A\u4F8B","link":"#\u7EC4\u4EF6\u793A\u4F8B","children":[]},{"level":2,"title":"\u9759\u6001\u7EC4\u4EF6 Props","slug":"\u9759\u6001\u7EC4\u4EF6-props","link":"#\u9759\u6001\u7EC4\u4EF6-props","children":[]},{"level":2,"title":"anchor","slug":"anchor","link":"#anchor","children":[]}],"relativePath":"zh/control/custom.md","lastUpdated":1666020789000}'),i={name:"zh/control/custom.md"},E=r({...i,setup(h){const a=F(10);let s=null;function e(n){s=n}function f(){a.value=s.getZoom()-1}function b(){a.value=s.getZoom()+1}return(n,m)=>{const c=p("Control"),v=p("Map");return y(),D("div",null,[C,t("div",null,[o(v,{onInitd:e,minZoom:3,zoom:a.value,height:"400px"},{default:l(()=>[o(c,{style:{display:"flex","background-color":"#fff",padding:"10px"},offset:{x:0,y:0}},{default:l(()=>[t("button",{onClick:f},"\u7F29\u5C0F"),t("button",{onClick:b},"\u653E\u5927")]),_:1})]),_:1},8,["zoom"])]),A])}}});const g=u(E,[["__scopeId","data-v-1f09b058"]]);export{B as __pageData,g as default};

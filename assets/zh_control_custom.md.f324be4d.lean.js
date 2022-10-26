import{e as F,f as D,c as u,b as s,d as n,i as f,a as l,r as o,o as y,_ as C}from"./app.e43f3ab5.js";const A=l(`<h1 id="control-\u81EA\u5B9A\u4E49\u63A7\u4EF6" tabindex="-1" data-v-d410ffd4>Control \u81EA\u5B9A\u4E49\u63A7\u4EF6 <a class="header-anchor" href="#control-\u81EA\u5B9A\u4E49\u63A7\u4EF6" aria-hidden="true" data-v-d410ffd4>#</a></h1><p data-v-d410ffd4>\u6839\u636E\u5730\u56FE <code data-v-d410ffd4>Map</code> \u7EC4\u4EF6\u63D0\u4F9B\u7684 Props\uFF0C\u6216\u8005\u5730\u56FE\u5B9E\u4F8B\uFF0C\u81EA\u5B9A\u4E49\u63A7\u4EF6</p><div class="language-ts" data-v-d410ffd4><button title="Copy Code" class="copy" data-v-d410ffd4></button><span class="lang" data-v-d410ffd4>ts</span><pre data-v-d410ffd4><code data-v-d410ffd4><span class="line" data-v-d410ffd4><span style="color:#89DDFF;" data-v-d410ffd4>import</span><span style="color:#A6ACCD;" data-v-d410ffd4> </span><span style="color:#89DDFF;" data-v-d410ffd4>{</span><span style="color:#F07178;" data-v-d410ffd4> </span><span style="color:#A6ACCD;" data-v-d410ffd4>Control</span><span style="color:#F07178;" data-v-d410ffd4> </span><span style="color:#89DDFF;" data-v-d410ffd4>}</span><span style="color:#A6ACCD;" data-v-d410ffd4> </span><span style="color:#89DDFF;" data-v-d410ffd4>from</span><span style="color:#A6ACCD;" data-v-d410ffd4> </span><span style="color:#89DDFF;" data-v-d410ffd4>&#39;</span><span style="color:#C3E88D;" data-v-d410ffd4>vue3-baidu-map-gl</span><span style="color:#89DDFF;" data-v-d410ffd4>&#39;</span></span>
<span class="line" data-v-d410ffd4></span></code></pre></div><h2 id="\u7EC4\u4EF6\u793A\u4F8B" tabindex="-1" data-v-d410ffd4>\u7EC4\u4EF6\u793A\u4F8B <a class="header-anchor" href="#\u7EC4\u4EF6\u793A\u4F8B" aria-hidden="true" data-v-d410ffd4>#</a></h2>`,4),i=l(`<details class="details custom-block" data-v-d410ffd4><summary data-v-d410ffd4>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-html" data-v-d410ffd4><button title="Copy Code" class="copy" data-v-d410ffd4></button><span class="lang" data-v-d410ffd4>html</span><pre data-v-d410ffd4><code data-v-d410ffd4><span class="line" data-v-d410ffd4><span style="color:#89DDFF;" data-v-d410ffd4>&lt;</span><span style="color:#F07178;" data-v-d410ffd4>div</span><span style="color:#89DDFF;" data-v-d410ffd4>&gt;</span></span>
<span class="line" data-v-d410ffd4><span style="color:#A6ACCD;" data-v-d410ffd4>  </span><span style="color:#89DDFF;" data-v-d410ffd4>&lt;</span><span style="color:#F07178;" data-v-d410ffd4>Map</span><span style="color:#89DDFF;" data-v-d410ffd4> </span><span style="color:#C792EA;" data-v-d410ffd4>@initd</span><span style="color:#89DDFF;" data-v-d410ffd4>=</span><span style="color:#89DDFF;" data-v-d410ffd4>&quot;</span><span style="color:#C3E88D;" data-v-d410ffd4>handleInitd</span><span style="color:#89DDFF;" data-v-d410ffd4>&quot;</span><span style="color:#89DDFF;" data-v-d410ffd4> </span><span style="color:#C792EA;" data-v-d410ffd4>:minZoom</span><span style="color:#89DDFF;" data-v-d410ffd4>=</span><span style="color:#89DDFF;" data-v-d410ffd4>&quot;</span><span style="color:#C3E88D;" data-v-d410ffd4>3</span><span style="color:#89DDFF;" data-v-d410ffd4>&quot;</span><span style="color:#89DDFF;" data-v-d410ffd4> </span><span style="color:#C792EA;" data-v-d410ffd4>:zoom</span><span style="color:#89DDFF;" data-v-d410ffd4>=</span><span style="color:#89DDFF;" data-v-d410ffd4>&quot;</span><span style="color:#C3E88D;" data-v-d410ffd4>zoom</span><span style="color:#89DDFF;" data-v-d410ffd4>&quot;</span><span style="color:#89DDFF;" data-v-d410ffd4>&gt;</span></span>
<span class="line" data-v-d410ffd4><span style="color:#A6ACCD;" data-v-d410ffd4>    </span><span style="color:#89DDFF;" data-v-d410ffd4>&lt;</span><span style="color:#F07178;" data-v-d410ffd4>Control</span><span style="color:#89DDFF;" data-v-d410ffd4> </span><span style="color:#C792EA;" data-v-d410ffd4>style</span><span style="color:#89DDFF;" data-v-d410ffd4>=</span><span style="color:#89DDFF;" data-v-d410ffd4>&quot;</span><span style="color:#C3E88D;" data-v-d410ffd4>display: flex; background-color: #fff; padding: 10px</span><span style="color:#89DDFF;" data-v-d410ffd4>&quot;</span><span style="color:#89DDFF;" data-v-d410ffd4> </span><span style="color:#C792EA;" data-v-d410ffd4>:offset</span><span style="color:#89DDFF;" data-v-d410ffd4>=</span><span style="color:#89DDFF;" data-v-d410ffd4>&quot;</span><span style="color:#C3E88D;" data-v-d410ffd4>{ x: 0, y: 0 }</span><span style="color:#89DDFF;" data-v-d410ffd4>&quot;</span><span style="color:#89DDFF;" data-v-d410ffd4>&gt;</span></span>
<span class="line" data-v-d410ffd4><span style="color:#A6ACCD;" data-v-d410ffd4>      </span><span style="color:#89DDFF;" data-v-d410ffd4>&lt;</span><span style="color:#F07178;" data-v-d410ffd4>button</span><span style="color:#89DDFF;" data-v-d410ffd4> </span><span style="color:#C792EA;" data-v-d410ffd4>@click</span><span style="color:#89DDFF;" data-v-d410ffd4>=</span><span style="color:#89DDFF;" data-v-d410ffd4>&quot;</span><span style="color:#C3E88D;" data-v-d410ffd4>handleZoomOut</span><span style="color:#89DDFF;" data-v-d410ffd4>&quot;</span><span style="color:#89DDFF;" data-v-d410ffd4>&gt;</span><span style="color:#A6ACCD;" data-v-d410ffd4>\u7F29\u5C0F</span><span style="color:#89DDFF;" data-v-d410ffd4>&lt;/</span><span style="color:#F07178;" data-v-d410ffd4>button</span><span style="color:#89DDFF;" data-v-d410ffd4>&gt;</span></span>
<span class="line" data-v-d410ffd4><span style="color:#A6ACCD;" data-v-d410ffd4>      </span><span style="color:#89DDFF;" data-v-d410ffd4>&lt;</span><span style="color:#F07178;" data-v-d410ffd4>button</span><span style="color:#89DDFF;" data-v-d410ffd4> </span><span style="color:#C792EA;" data-v-d410ffd4>@click</span><span style="color:#89DDFF;" data-v-d410ffd4>=</span><span style="color:#89DDFF;" data-v-d410ffd4>&quot;</span><span style="color:#C3E88D;" data-v-d410ffd4>handleZoomIn</span><span style="color:#89DDFF;" data-v-d410ffd4>&quot;</span><span style="color:#89DDFF;" data-v-d410ffd4>&gt;</span><span style="color:#A6ACCD;" data-v-d410ffd4>\u653E\u5927</span><span style="color:#89DDFF;" data-v-d410ffd4>&lt;/</span><span style="color:#F07178;" data-v-d410ffd4>button</span><span style="color:#89DDFF;" data-v-d410ffd4>&gt;</span></span>
<span class="line" data-v-d410ffd4><span style="color:#A6ACCD;" data-v-d410ffd4>    </span><span style="color:#89DDFF;" data-v-d410ffd4>&lt;/</span><span style="color:#F07178;" data-v-d410ffd4>Control</span><span style="color:#89DDFF;" data-v-d410ffd4>&gt;</span></span>
<span class="line" data-v-d410ffd4><span style="color:#A6ACCD;" data-v-d410ffd4>  </span><span style="color:#89DDFF;" data-v-d410ffd4>&lt;/</span><span style="color:#F07178;" data-v-d410ffd4>Map</span><span style="color:#89DDFF;" data-v-d410ffd4>&gt;</span></span>
<span class="line" data-v-d410ffd4><span style="color:#89DDFF;" data-v-d410ffd4>&lt;/</span><span style="color:#F07178;" data-v-d410ffd4>div</span><span style="color:#89DDFF;" data-v-d410ffd4>&gt;</span></span>
<span class="line" data-v-d410ffd4></span>
<span class="line" data-v-d410ffd4><span style="color:#89DDFF;" data-v-d410ffd4>&lt;</span><span style="color:#F07178;" data-v-d410ffd4>script</span><span style="color:#89DDFF;" data-v-d410ffd4> </span><span style="color:#C792EA;" data-v-d410ffd4>setup</span><span style="color:#89DDFF;" data-v-d410ffd4> </span><span style="color:#C792EA;" data-v-d410ffd4>lang</span><span style="color:#89DDFF;" data-v-d410ffd4>=</span><span style="color:#89DDFF;" data-v-d410ffd4>&quot;</span><span style="color:#C3E88D;" data-v-d410ffd4>ts</span><span style="color:#89DDFF;" data-v-d410ffd4>&quot;</span><span style="color:#89DDFF;" data-v-d410ffd4>&gt;</span></span>
<span class="line" data-v-d410ffd4><span style="color:#A6ACCD;" data-v-d410ffd4>  </span><span style="color:#89DDFF;" data-v-d410ffd4>import</span><span style="color:#A6ACCD;" data-v-d410ffd4> </span><span style="color:#89DDFF;" data-v-d410ffd4>{</span><span style="color:#F07178;" data-v-d410ffd4> </span><span style="color:#A6ACCD;" data-v-d410ffd4>ref</span><span style="color:#F07178;" data-v-d410ffd4> </span><span style="color:#89DDFF;" data-v-d410ffd4>}</span><span style="color:#A6ACCD;" data-v-d410ffd4> </span><span style="color:#89DDFF;" data-v-d410ffd4>from</span><span style="color:#A6ACCD;" data-v-d410ffd4> </span><span style="color:#89DDFF;" data-v-d410ffd4>&#39;</span><span style="color:#C3E88D;" data-v-d410ffd4>vue</span><span style="color:#89DDFF;" data-v-d410ffd4>&#39;</span></span>
<span class="line" data-v-d410ffd4><span style="color:#A6ACCD;" data-v-d410ffd4>  </span><span style="color:#C792EA;" data-v-d410ffd4>const</span><span style="color:#A6ACCD;" data-v-d410ffd4> zoom </span><span style="color:#89DDFF;" data-v-d410ffd4>=</span><span style="color:#A6ACCD;" data-v-d410ffd4> </span><span style="color:#82AAFF;" data-v-d410ffd4>ref</span><span style="color:#A6ACCD;" data-v-d410ffd4>(</span><span style="color:#F78C6C;" data-v-d410ffd4>10</span><span style="color:#A6ACCD;" data-v-d410ffd4>)</span></span>
<span class="line" data-v-d410ffd4><span style="color:#A6ACCD;" data-v-d410ffd4>  </span><span style="color:#C792EA;" data-v-d410ffd4>let</span><span style="color:#A6ACCD;" data-v-d410ffd4> _map </span><span style="color:#89DDFF;" data-v-d410ffd4>=</span><span style="color:#A6ACCD;" data-v-d410ffd4> </span><span style="color:#89DDFF;" data-v-d410ffd4>null</span></span>
<span class="line" data-v-d410ffd4><span style="color:#A6ACCD;" data-v-d410ffd4>  </span><span style="color:#C792EA;" data-v-d410ffd4>function</span><span style="color:#A6ACCD;" data-v-d410ffd4> </span><span style="color:#82AAFF;" data-v-d410ffd4>handleInitd</span><span style="color:#89DDFF;" data-v-d410ffd4>(</span><span style="color:#A6ACCD;" data-v-d410ffd4>map</span><span style="color:#89DDFF;" data-v-d410ffd4>)</span><span style="color:#A6ACCD;" data-v-d410ffd4> </span><span style="color:#89DDFF;" data-v-d410ffd4>{</span></span>
<span class="line" data-v-d410ffd4><span style="color:#F07178;" data-v-d410ffd4>    </span><span style="color:#A6ACCD;" data-v-d410ffd4>_map</span><span style="color:#F07178;" data-v-d410ffd4> </span><span style="color:#89DDFF;" data-v-d410ffd4>=</span><span style="color:#F07178;" data-v-d410ffd4> </span><span style="color:#A6ACCD;" data-v-d410ffd4>map</span></span>
<span class="line" data-v-d410ffd4><span style="color:#F07178;" data-v-d410ffd4>  </span><span style="color:#89DDFF;" data-v-d410ffd4>}</span></span>
<span class="line" data-v-d410ffd4><span style="color:#A6ACCD;" data-v-d410ffd4>  </span><span style="color:#C792EA;" data-v-d410ffd4>function</span><span style="color:#A6ACCD;" data-v-d410ffd4> </span><span style="color:#82AAFF;" data-v-d410ffd4>handleZoomOut</span><span style="color:#89DDFF;" data-v-d410ffd4>()</span><span style="color:#A6ACCD;" data-v-d410ffd4> </span><span style="color:#89DDFF;" data-v-d410ffd4>{</span></span>
<span class="line" data-v-d410ffd4><span style="color:#F07178;" data-v-d410ffd4>    </span><span style="color:#A6ACCD;" data-v-d410ffd4>zoom</span><span style="color:#89DDFF;" data-v-d410ffd4>.</span><span style="color:#A6ACCD;" data-v-d410ffd4>value</span><span style="color:#F07178;" data-v-d410ffd4> </span><span style="color:#89DDFF;" data-v-d410ffd4>=</span><span style="color:#F07178;" data-v-d410ffd4> </span><span style="color:#A6ACCD;" data-v-d410ffd4>_map</span><span style="color:#89DDFF;" data-v-d410ffd4>.</span><span style="color:#82AAFF;" data-v-d410ffd4>getZoom</span><span style="color:#F07178;" data-v-d410ffd4>() </span><span style="color:#89DDFF;" data-v-d410ffd4>-</span><span style="color:#F07178;" data-v-d410ffd4> </span><span style="color:#F78C6C;" data-v-d410ffd4>1</span></span>
<span class="line" data-v-d410ffd4><span style="color:#F07178;" data-v-d410ffd4>  </span><span style="color:#89DDFF;" data-v-d410ffd4>}</span></span>
<span class="line" data-v-d410ffd4><span style="color:#A6ACCD;" data-v-d410ffd4>  </span><span style="color:#C792EA;" data-v-d410ffd4>function</span><span style="color:#A6ACCD;" data-v-d410ffd4> </span><span style="color:#82AAFF;" data-v-d410ffd4>handleZoomIn</span><span style="color:#89DDFF;" data-v-d410ffd4>()</span><span style="color:#A6ACCD;" data-v-d410ffd4> </span><span style="color:#89DDFF;" data-v-d410ffd4>{</span></span>
<span class="line" data-v-d410ffd4><span style="color:#F07178;" data-v-d410ffd4>    </span><span style="color:#A6ACCD;" data-v-d410ffd4>zoom</span><span style="color:#89DDFF;" data-v-d410ffd4>.</span><span style="color:#A6ACCD;" data-v-d410ffd4>value</span><span style="color:#F07178;" data-v-d410ffd4> </span><span style="color:#89DDFF;" data-v-d410ffd4>=</span><span style="color:#F07178;" data-v-d410ffd4> </span><span style="color:#A6ACCD;" data-v-d410ffd4>_map</span><span style="color:#89DDFF;" data-v-d410ffd4>.</span><span style="color:#82AAFF;" data-v-d410ffd4>getZoom</span><span style="color:#F07178;" data-v-d410ffd4>() </span><span style="color:#89DDFF;" data-v-d410ffd4>+</span><span style="color:#F07178;" data-v-d410ffd4> </span><span style="color:#F78C6C;" data-v-d410ffd4>1</span></span>
<span class="line" data-v-d410ffd4><span style="color:#F07178;" data-v-d410ffd4>  </span><span style="color:#89DDFF;" data-v-d410ffd4>}</span></span>
<span class="line" data-v-d410ffd4><span style="color:#89DDFF;" data-v-d410ffd4>&lt;/</span><span style="color:#F07178;" data-v-d410ffd4>script</span><span style="color:#89DDFF;" data-v-d410ffd4>&gt;</span></span>
<span class="line" data-v-d410ffd4></span>
<span class="line" data-v-d410ffd4><span style="color:#89DDFF;" data-v-d410ffd4>&lt;</span><span style="color:#F07178;" data-v-d410ffd4>style</span><span style="color:#89DDFF;" data-v-d410ffd4> </span><span style="color:#C792EA;" data-v-d410ffd4>scoped</span><span style="color:#89DDFF;" data-v-d410ffd4>&gt;</span></span>
<span class="line" data-v-d410ffd4><span style="color:#A6ACCD;" data-v-d410ffd4>  </span><span style="color:#FFCB6B;" data-v-d410ffd4>button</span><span style="color:#A6ACCD;" data-v-d410ffd4> </span><span style="color:#89DDFF;" data-v-d410ffd4>{</span></span>
<span class="line" data-v-d410ffd4><span style="color:#A6ACCD;" data-v-d410ffd4>    </span><span style="color:#B2CCD6;" data-v-d410ffd4>outline</span><span style="color:#89DDFF;" data-v-d410ffd4>:</span><span style="color:#A6ACCD;" data-v-d410ffd4> none</span><span style="color:#89DDFF;" data-v-d410ffd4>;</span></span>
<span class="line" data-v-d410ffd4><span style="color:#A6ACCD;" data-v-d410ffd4>    </span><span style="color:#B2CCD6;" data-v-d410ffd4>border</span><span style="color:#89DDFF;" data-v-d410ffd4>:</span><span style="color:#A6ACCD;" data-v-d410ffd4> none</span><span style="color:#89DDFF;" data-v-d410ffd4>;</span></span>
<span class="line" data-v-d410ffd4><span style="color:#A6ACCD;" data-v-d410ffd4>    </span><span style="color:#B2CCD6;" data-v-d410ffd4>background</span><span style="color:#89DDFF;" data-v-d410ffd4>:</span><span style="color:#A6ACCD;" data-v-d410ffd4> </span><span style="color:#89DDFF;" data-v-d410ffd4>#</span><span style="color:#A6ACCD;" data-v-d410ffd4>41b883</span><span style="color:#89DDFF;" data-v-d410ffd4>;</span></span>
<span class="line" data-v-d410ffd4><span style="color:#A6ACCD;" data-v-d410ffd4>    </span><span style="color:#B2CCD6;" data-v-d410ffd4>margin</span><span style="color:#89DDFF;" data-v-d410ffd4>:</span><span style="color:#A6ACCD;" data-v-d410ffd4> </span><span style="color:#F78C6C;" data-v-d410ffd4>0</span><span style="color:#A6ACCD;" data-v-d410ffd4> </span><span style="color:#F78C6C;" data-v-d410ffd4>5px</span><span style="color:#89DDFF;" data-v-d410ffd4>;</span></span>
<span class="line" data-v-d410ffd4><span style="color:#A6ACCD;" data-v-d410ffd4>    </span><span style="color:#B2CCD6;" data-v-d410ffd4>padding</span><span style="color:#89DDFF;" data-v-d410ffd4>:</span><span style="color:#A6ACCD;" data-v-d410ffd4> </span><span style="color:#F78C6C;" data-v-d410ffd4>5px</span><span style="color:#A6ACCD;" data-v-d410ffd4> </span><span style="color:#F78C6C;" data-v-d410ffd4>15px</span><span style="color:#89DDFF;" data-v-d410ffd4>;</span></span>
<span class="line" data-v-d410ffd4><span style="color:#A6ACCD;" data-v-d410ffd4>    </span><span style="color:#B2CCD6;" data-v-d410ffd4>border-radius</span><span style="color:#89DDFF;" data-v-d410ffd4>:</span><span style="color:#A6ACCD;" data-v-d410ffd4> </span><span style="color:#F78C6C;" data-v-d410ffd4>4px</span><span style="color:#A6ACCD;" data-v-d410ffd4> </span><span style="color:#F78C6C;" data-v-d410ffd4>!important</span><span style="color:#89DDFF;" data-v-d410ffd4>;</span></span>
<span class="line" data-v-d410ffd4><span style="color:#A6ACCD;" data-v-d410ffd4>  </span><span style="color:#89DDFF;" data-v-d410ffd4>}</span></span>
<span class="line" data-v-d410ffd4><span style="color:#89DDFF;" data-v-d410ffd4>&lt;/</span><span style="color:#F07178;" data-v-d410ffd4>style</span><span style="color:#89DDFF;" data-v-d410ffd4>&gt;</span></span>
<span class="line" data-v-d410ffd4></span></code></pre></div></details><h2 id="\u9759\u6001\u7EC4\u4EF6-props" tabindex="-1" data-v-d410ffd4>\u9759\u6001\u7EC4\u4EF6 Props <a class="header-anchor" href="#\u9759\u6001\u7EC4\u4EF6-props" aria-hidden="true" data-v-d410ffd4>#</a></h2><table data-v-d410ffd4><thead data-v-d410ffd4><tr data-v-d410ffd4><th data-v-d410ffd4>\u5C5E\u6027</th><th data-v-d410ffd4>\u8BF4\u660E</th><th data-v-d410ffd4>\u7C7B\u578B</th><th data-v-d410ffd4>\u53EF\u9009\u503C</th><th data-v-d410ffd4>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-d410ffd4><tr data-v-d410ffd4><td data-v-d410ffd4>anchor</td><td data-v-d410ffd4>\u63A7\u4EF6\u7684\u505C\u9760\u4F4D\u7F6E</td><td data-v-d410ffd4><code data-v-d410ffd4>string</code></td><td data-v-d410ffd4><a href="#anchor" data-v-d410ffd4>anchor</a></td><td data-v-d410ffd4><code data-v-d410ffd4>BMAP_ANCHOR_BOTTOM_LEFT</code></td></tr><tr data-v-d410ffd4><td data-v-d410ffd4>offset</td><td data-v-d410ffd4>\u63A7\u4EF6\u7684\u504F\u79FB\u503C</td><td data-v-d410ffd4><code data-v-d410ffd4>{x: number, y: number }</code></td><td data-v-d410ffd4>-</td><td data-v-d410ffd4><code data-v-d410ffd4>{ x: 83, y: 18 }</code></td></tr></tbody></table><h2 id="anchor" tabindex="-1" data-v-d410ffd4>anchor <a class="header-anchor" href="#anchor" aria-hidden="true" data-v-d410ffd4>#</a></h2><table data-v-d410ffd4><thead data-v-d410ffd4><tr data-v-d410ffd4><th data-v-d410ffd4>\u503C</th><th data-v-d410ffd4>\u8BF4\u660E</th></tr></thead><tbody data-v-d410ffd4><tr data-v-d410ffd4><td data-v-d410ffd4>BMAP_ANCHOR_TOP_LEFT</td><td data-v-d410ffd4>\u5DE6\u4E0A</td></tr><tr data-v-d410ffd4><td data-v-d410ffd4>BMAP_ANCHOR_TOP_RIGHT</td><td data-v-d410ffd4>\u53F3\u4E0A</td></tr><tr data-v-d410ffd4><td data-v-d410ffd4>BMAP_ANCHOR_BOTTOM_LEFT</td><td data-v-d410ffd4>\u5DE6\u4E0B</td></tr><tr data-v-d410ffd4><td data-v-d410ffd4>BMAP_ANCHOR_BOTTOM_RIGHT</td><td data-v-d410ffd4>\u53F3\u4E0B</td></tr></tbody></table><h2 id="\u7EC4\u4EF6\u4E8B\u4EF6" tabindex="-1" data-v-d410ffd4>\u7EC4\u4EF6\u4E8B\u4EF6 <a class="header-anchor" href="#\u7EC4\u4EF6\u4E8B\u4EF6" aria-hidden="true" data-v-d410ffd4>#</a></h2><table data-v-d410ffd4><thead data-v-d410ffd4><tr data-v-d410ffd4><th data-v-d410ffd4>\u4E8B\u4EF6\u540D</th><th data-v-d410ffd4>\u8BF4\u660E</th><th data-v-d410ffd4>\u7C7B\u578B</th></tr></thead><tbody data-v-d410ffd4><tr data-v-d410ffd4><td data-v-d410ffd4>initd</td><td data-v-d410ffd4>\u7EC4\u4EF6\u521D\u59CB\u5316\u540E\uFF0C\u8C03\u7528\u7684\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5730\u56FE\u5B9E\u4F8B</td><td data-v-d410ffd4><code data-v-d410ffd4>{ map: BmapGL }</code></td></tr><tr data-v-d410ffd4><td data-v-d410ffd4>unload</td><td data-v-d410ffd4>\u7EC4\u4EF6\u5378\u8F7D\u65F6\u4F1A\u8C03\u7528\u6B64\u65B9\u6CD5</td><td data-v-d410ffd4>-</td></tr></tbody></table>`,7),g=JSON.parse('{"title":"Control \u81EA\u5B9A\u4E49\u63A7\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7EC4\u4EF6\u793A\u4F8B","slug":"\u7EC4\u4EF6\u793A\u4F8B","link":"#\u7EC4\u4EF6\u793A\u4F8B","children":[]},{"level":2,"title":"\u9759\u6001\u7EC4\u4EF6 Props","slug":"\u9759\u6001\u7EC4\u4EF6-props","link":"#\u9759\u6001\u7EC4\u4EF6-props","children":[]},{"level":2,"title":"anchor","slug":"anchor","link":"#anchor","children":[]},{"level":2,"title":"\u7EC4\u4EF6\u4E8B\u4EF6","slug":"\u7EC4\u4EF6\u4E8B\u4EF6","link":"#\u7EC4\u4EF6\u4E8B\u4EF6","children":[]}],"relativePath":"zh/control/custom.md","lastUpdated":1666782220000}'),E={name:"zh/control/custom.md"},h=F({...E,setup(m){const a=D(10);let d=null;function p(t){d=t}function e(){a.value=d.getZoom()-1}function c(){a.value=d.getZoom()+1}return(t,B)=>{const v=o("Control"),r=o("Map");return y(),u("div",null,[A,s("div",null,[n(r,{onInitd:p,minZoom:3,zoom:a.value},{default:f(()=>[n(v,{style:{display:"flex","background-color":"#fff",padding:"10px"},offset:{x:0,y:0}},{default:f(()=>[s("button",{onClick:e},"\u7F29\u5C0F"),s("button",{onClick:c},"\u653E\u5927")]),_:1})]),_:1},8,["zoom"])]),i])}}});const b=C(h,[["__scopeId","data-v-d410ffd4"]]);export{g as __pageData,b as default};

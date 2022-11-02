import{e as D,f as u,c as y,b as t,d as e,i as n,a as o,r as c,o as C,_ as A}from"./app.64eaf141.js";const i=o(`<h1 id="control-\u81EA\u5B9A\u4E49\u63A7\u4EF6" tabindex="-1" data-v-0ed119c6>Control \u81EA\u5B9A\u4E49\u63A7\u4EF6 <a class="header-anchor" href="#control-\u81EA\u5B9A\u4E49\u63A7\u4EF6" aria-hidden="true" data-v-0ed119c6>#</a></h1><p data-v-0ed119c6>\u6839\u636E\u5730\u56FE <code data-v-0ed119c6>Map</code> \u7EC4\u4EF6\u63D0\u4F9B\u7684 Props\uFF0C\u6216\u8005\u5730\u56FE\u5B9E\u4F8B\uFF0C\u81EA\u5B9A\u4E49\u63A7\u4EF6</p><div class="language-ts" data-v-0ed119c6><button title="Copy Code" class="copy" data-v-0ed119c6></button><span class="lang" data-v-0ed119c6>ts</span><pre data-v-0ed119c6><code data-v-0ed119c6><span class="line" data-v-0ed119c6><span style="color:#89DDFF;" data-v-0ed119c6>import</span><span style="color:#A6ACCD;" data-v-0ed119c6> </span><span style="color:#89DDFF;" data-v-0ed119c6>{</span><span style="color:#F07178;" data-v-0ed119c6> </span><span style="color:#A6ACCD;" data-v-0ed119c6>Control</span><span style="color:#F07178;" data-v-0ed119c6> </span><span style="color:#89DDFF;" data-v-0ed119c6>}</span><span style="color:#A6ACCD;" data-v-0ed119c6> </span><span style="color:#89DDFF;" data-v-0ed119c6>from</span><span style="color:#A6ACCD;" data-v-0ed119c6> </span><span style="color:#89DDFF;" data-v-0ed119c6>&#39;</span><span style="color:#C3E88D;" data-v-0ed119c6>vue3-baidu-map-gl</span><span style="color:#89DDFF;" data-v-0ed119c6>&#39;</span></span>
<span class="line" data-v-0ed119c6></span></code></pre></div><h2 id="\u7EC4\u4EF6\u793A\u4F8B" tabindex="-1" data-v-0ed119c6>\u7EC4\u4EF6\u793A\u4F8B <a class="header-anchor" href="#\u7EC4\u4EF6\u793A\u4F8B" aria-hidden="true" data-v-0ed119c6>#</a></h2>`,4),E=o(`<details class="details custom-block" data-v-0ed119c6><summary data-v-0ed119c6>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-html" data-v-0ed119c6><button title="Copy Code" class="copy" data-v-0ed119c6></button><span class="lang" data-v-0ed119c6>html</span><pre data-v-0ed119c6><code data-v-0ed119c6><span class="line" data-v-0ed119c6><span style="color:#89DDFF;" data-v-0ed119c6>&lt;</span><span style="color:#F07178;" data-v-0ed119c6>div</span><span style="color:#89DDFF;" data-v-0ed119c6>&gt;</span></span>
<span class="line" data-v-0ed119c6><span style="color:#A6ACCD;" data-v-0ed119c6>  </span><span style="color:#89DDFF;" data-v-0ed119c6>&lt;</span><span style="color:#F07178;" data-v-0ed119c6>Map</span><span style="color:#89DDFF;" data-v-0ed119c6> </span><span style="color:#C792EA;" data-v-0ed119c6>@initd</span><span style="color:#89DDFF;" data-v-0ed119c6>=</span><span style="color:#89DDFF;" data-v-0ed119c6>&quot;</span><span style="color:#C3E88D;" data-v-0ed119c6>handleInitd</span><span style="color:#89DDFF;" data-v-0ed119c6>&quot;</span><span style="color:#89DDFF;" data-v-0ed119c6> </span><span style="color:#C792EA;" data-v-0ed119c6>:minZoom</span><span style="color:#89DDFF;" data-v-0ed119c6>=</span><span style="color:#89DDFF;" data-v-0ed119c6>&quot;</span><span style="color:#C3E88D;" data-v-0ed119c6>3</span><span style="color:#89DDFF;" data-v-0ed119c6>&quot;</span><span style="color:#89DDFF;" data-v-0ed119c6> </span><span style="color:#C792EA;" data-v-0ed119c6>:zoom</span><span style="color:#89DDFF;" data-v-0ed119c6>=</span><span style="color:#89DDFF;" data-v-0ed119c6>&quot;</span><span style="color:#C3E88D;" data-v-0ed119c6>zoom</span><span style="color:#89DDFF;" data-v-0ed119c6>&quot;</span><span style="color:#89DDFF;" data-v-0ed119c6>&gt;</span></span>
<span class="line" data-v-0ed119c6><span style="color:#A6ACCD;" data-v-0ed119c6>    </span><span style="color:#89DDFF;" data-v-0ed119c6>&lt;</span><span style="color:#F07178;" data-v-0ed119c6>Control</span><span style="color:#89DDFF;" data-v-0ed119c6> </span><span style="color:#C792EA;" data-v-0ed119c6>style</span><span style="color:#89DDFF;" data-v-0ed119c6>=</span><span style="color:#89DDFF;" data-v-0ed119c6>&quot;</span><span style="color:#C3E88D;" data-v-0ed119c6>display: flex; background-color: #fff; padding: 10px</span><span style="color:#89DDFF;" data-v-0ed119c6>&quot;</span><span style="color:#89DDFF;" data-v-0ed119c6> </span><span style="color:#C792EA;" data-v-0ed119c6>:offset</span><span style="color:#89DDFF;" data-v-0ed119c6>=</span><span style="color:#89DDFF;" data-v-0ed119c6>&quot;</span><span style="color:#C3E88D;" data-v-0ed119c6>{ x: 0, y: 0 }</span><span style="color:#89DDFF;" data-v-0ed119c6>&quot;</span><span style="color:#89DDFF;" data-v-0ed119c6>&gt;</span></span>
<span class="line" data-v-0ed119c6><span style="color:#A6ACCD;" data-v-0ed119c6>      </span><span style="color:#89DDFF;" data-v-0ed119c6>&lt;</span><span style="color:#F07178;" data-v-0ed119c6>button</span><span style="color:#89DDFF;" data-v-0ed119c6> </span><span style="color:#C792EA;" data-v-0ed119c6>@click</span><span style="color:#89DDFF;" data-v-0ed119c6>=</span><span style="color:#89DDFF;" data-v-0ed119c6>&quot;</span><span style="color:#C3E88D;" data-v-0ed119c6>handleZoomOut</span><span style="color:#89DDFF;" data-v-0ed119c6>&quot;</span><span style="color:#89DDFF;" data-v-0ed119c6>&gt;</span><span style="color:#A6ACCD;" data-v-0ed119c6>\u7F29\u5C0F</span><span style="color:#89DDFF;" data-v-0ed119c6>&lt;/</span><span style="color:#F07178;" data-v-0ed119c6>button</span><span style="color:#89DDFF;" data-v-0ed119c6>&gt;</span></span>
<span class="line" data-v-0ed119c6><span style="color:#A6ACCD;" data-v-0ed119c6>      </span><span style="color:#89DDFF;" data-v-0ed119c6>&lt;</span><span style="color:#F07178;" data-v-0ed119c6>button</span><span style="color:#89DDFF;" data-v-0ed119c6> </span><span style="color:#C792EA;" data-v-0ed119c6>@click</span><span style="color:#89DDFF;" data-v-0ed119c6>=</span><span style="color:#89DDFF;" data-v-0ed119c6>&quot;</span><span style="color:#C3E88D;" data-v-0ed119c6>handleZoomIn</span><span style="color:#89DDFF;" data-v-0ed119c6>&quot;</span><span style="color:#89DDFF;" data-v-0ed119c6>&gt;</span><span style="color:#A6ACCD;" data-v-0ed119c6>\u653E\u5927</span><span style="color:#89DDFF;" data-v-0ed119c6>&lt;/</span><span style="color:#F07178;" data-v-0ed119c6>button</span><span style="color:#89DDFF;" data-v-0ed119c6>&gt;</span></span>
<span class="line" data-v-0ed119c6><span style="color:#A6ACCD;" data-v-0ed119c6>    </span><span style="color:#89DDFF;" data-v-0ed119c6>&lt;/</span><span style="color:#F07178;" data-v-0ed119c6>Control</span><span style="color:#89DDFF;" data-v-0ed119c6>&gt;</span></span>
<span class="line" data-v-0ed119c6><span style="color:#A6ACCD;" data-v-0ed119c6>  </span><span style="color:#89DDFF;" data-v-0ed119c6>&lt;/</span><span style="color:#F07178;" data-v-0ed119c6>Map</span><span style="color:#89DDFF;" data-v-0ed119c6>&gt;</span></span>
<span class="line" data-v-0ed119c6><span style="color:#89DDFF;" data-v-0ed119c6>&lt;/</span><span style="color:#F07178;" data-v-0ed119c6>div</span><span style="color:#89DDFF;" data-v-0ed119c6>&gt;</span></span>
<span class="line" data-v-0ed119c6></span>
<span class="line" data-v-0ed119c6><span style="color:#89DDFF;" data-v-0ed119c6>&lt;</span><span style="color:#F07178;" data-v-0ed119c6>script</span><span style="color:#89DDFF;" data-v-0ed119c6> </span><span style="color:#C792EA;" data-v-0ed119c6>setup</span><span style="color:#89DDFF;" data-v-0ed119c6> </span><span style="color:#C792EA;" data-v-0ed119c6>lang</span><span style="color:#89DDFF;" data-v-0ed119c6>=</span><span style="color:#89DDFF;" data-v-0ed119c6>&quot;</span><span style="color:#C3E88D;" data-v-0ed119c6>ts</span><span style="color:#89DDFF;" data-v-0ed119c6>&quot;</span><span style="color:#89DDFF;" data-v-0ed119c6>&gt;</span></span>
<span class="line" data-v-0ed119c6><span style="color:#A6ACCD;" data-v-0ed119c6>  </span><span style="color:#89DDFF;" data-v-0ed119c6>import</span><span style="color:#A6ACCD;" data-v-0ed119c6> </span><span style="color:#89DDFF;" data-v-0ed119c6>{</span><span style="color:#F07178;" data-v-0ed119c6> </span><span style="color:#A6ACCD;" data-v-0ed119c6>ref</span><span style="color:#F07178;" data-v-0ed119c6> </span><span style="color:#89DDFF;" data-v-0ed119c6>}</span><span style="color:#A6ACCD;" data-v-0ed119c6> </span><span style="color:#89DDFF;" data-v-0ed119c6>from</span><span style="color:#A6ACCD;" data-v-0ed119c6> </span><span style="color:#89DDFF;" data-v-0ed119c6>&#39;</span><span style="color:#C3E88D;" data-v-0ed119c6>vue</span><span style="color:#89DDFF;" data-v-0ed119c6>&#39;</span></span>
<span class="line" data-v-0ed119c6><span style="color:#A6ACCD;" data-v-0ed119c6>  </span><span style="color:#C792EA;" data-v-0ed119c6>const</span><span style="color:#A6ACCD;" data-v-0ed119c6> zoom </span><span style="color:#89DDFF;" data-v-0ed119c6>=</span><span style="color:#A6ACCD;" data-v-0ed119c6> </span><span style="color:#82AAFF;" data-v-0ed119c6>ref</span><span style="color:#A6ACCD;" data-v-0ed119c6>(</span><span style="color:#F78C6C;" data-v-0ed119c6>10</span><span style="color:#A6ACCD;" data-v-0ed119c6>)</span></span>
<span class="line" data-v-0ed119c6><span style="color:#A6ACCD;" data-v-0ed119c6>  </span><span style="color:#C792EA;" data-v-0ed119c6>let</span><span style="color:#A6ACCD;" data-v-0ed119c6> _map </span><span style="color:#89DDFF;" data-v-0ed119c6>=</span><span style="color:#A6ACCD;" data-v-0ed119c6> </span><span style="color:#89DDFF;" data-v-0ed119c6>null</span></span>
<span class="line" data-v-0ed119c6><span style="color:#A6ACCD;" data-v-0ed119c6>  </span><span style="color:#C792EA;" data-v-0ed119c6>function</span><span style="color:#A6ACCD;" data-v-0ed119c6> </span><span style="color:#82AAFF;" data-v-0ed119c6>handleInitd</span><span style="color:#89DDFF;" data-v-0ed119c6>(</span><span style="color:#A6ACCD;" data-v-0ed119c6>map</span><span style="color:#89DDFF;" data-v-0ed119c6>)</span><span style="color:#A6ACCD;" data-v-0ed119c6> </span><span style="color:#89DDFF;" data-v-0ed119c6>{</span></span>
<span class="line" data-v-0ed119c6><span style="color:#F07178;" data-v-0ed119c6>    </span><span style="color:#A6ACCD;" data-v-0ed119c6>_map</span><span style="color:#F07178;" data-v-0ed119c6> </span><span style="color:#89DDFF;" data-v-0ed119c6>=</span><span style="color:#F07178;" data-v-0ed119c6> </span><span style="color:#A6ACCD;" data-v-0ed119c6>map</span></span>
<span class="line" data-v-0ed119c6><span style="color:#F07178;" data-v-0ed119c6>  </span><span style="color:#89DDFF;" data-v-0ed119c6>}</span></span>
<span class="line" data-v-0ed119c6><span style="color:#A6ACCD;" data-v-0ed119c6>  </span><span style="color:#C792EA;" data-v-0ed119c6>function</span><span style="color:#A6ACCD;" data-v-0ed119c6> </span><span style="color:#82AAFF;" data-v-0ed119c6>handleZoomOut</span><span style="color:#89DDFF;" data-v-0ed119c6>()</span><span style="color:#A6ACCD;" data-v-0ed119c6> </span><span style="color:#89DDFF;" data-v-0ed119c6>{</span></span>
<span class="line" data-v-0ed119c6><span style="color:#F07178;" data-v-0ed119c6>    </span><span style="color:#A6ACCD;" data-v-0ed119c6>zoom</span><span style="color:#89DDFF;" data-v-0ed119c6>.</span><span style="color:#A6ACCD;" data-v-0ed119c6>value</span><span style="color:#F07178;" data-v-0ed119c6> </span><span style="color:#89DDFF;" data-v-0ed119c6>=</span><span style="color:#F07178;" data-v-0ed119c6> </span><span style="color:#A6ACCD;" data-v-0ed119c6>_map</span><span style="color:#89DDFF;" data-v-0ed119c6>.</span><span style="color:#82AAFF;" data-v-0ed119c6>getZoom</span><span style="color:#F07178;" data-v-0ed119c6>() </span><span style="color:#89DDFF;" data-v-0ed119c6>-</span><span style="color:#F07178;" data-v-0ed119c6> </span><span style="color:#F78C6C;" data-v-0ed119c6>1</span></span>
<span class="line" data-v-0ed119c6><span style="color:#F07178;" data-v-0ed119c6>  </span><span style="color:#89DDFF;" data-v-0ed119c6>}</span></span>
<span class="line" data-v-0ed119c6><span style="color:#A6ACCD;" data-v-0ed119c6>  </span><span style="color:#C792EA;" data-v-0ed119c6>function</span><span style="color:#A6ACCD;" data-v-0ed119c6> </span><span style="color:#82AAFF;" data-v-0ed119c6>handleZoomIn</span><span style="color:#89DDFF;" data-v-0ed119c6>()</span><span style="color:#A6ACCD;" data-v-0ed119c6> </span><span style="color:#89DDFF;" data-v-0ed119c6>{</span></span>
<span class="line" data-v-0ed119c6><span style="color:#F07178;" data-v-0ed119c6>    </span><span style="color:#A6ACCD;" data-v-0ed119c6>zoom</span><span style="color:#89DDFF;" data-v-0ed119c6>.</span><span style="color:#A6ACCD;" data-v-0ed119c6>value</span><span style="color:#F07178;" data-v-0ed119c6> </span><span style="color:#89DDFF;" data-v-0ed119c6>=</span><span style="color:#F07178;" data-v-0ed119c6> </span><span style="color:#A6ACCD;" data-v-0ed119c6>_map</span><span style="color:#89DDFF;" data-v-0ed119c6>.</span><span style="color:#82AAFF;" data-v-0ed119c6>getZoom</span><span style="color:#F07178;" data-v-0ed119c6>() </span><span style="color:#89DDFF;" data-v-0ed119c6>+</span><span style="color:#F07178;" data-v-0ed119c6> </span><span style="color:#F78C6C;" data-v-0ed119c6>1</span></span>
<span class="line" data-v-0ed119c6><span style="color:#F07178;" data-v-0ed119c6>  </span><span style="color:#89DDFF;" data-v-0ed119c6>}</span></span>
<span class="line" data-v-0ed119c6><span style="color:#89DDFF;" data-v-0ed119c6>&lt;/</span><span style="color:#F07178;" data-v-0ed119c6>script</span><span style="color:#89DDFF;" data-v-0ed119c6>&gt;</span></span>
<span class="line" data-v-0ed119c6></span>
<span class="line" data-v-0ed119c6><span style="color:#89DDFF;" data-v-0ed119c6>&lt;</span><span style="color:#F07178;" data-v-0ed119c6>style</span><span style="color:#89DDFF;" data-v-0ed119c6> </span><span style="color:#C792EA;" data-v-0ed119c6>scoped</span><span style="color:#89DDFF;" data-v-0ed119c6>&gt;</span></span>
<span class="line" data-v-0ed119c6><span style="color:#A6ACCD;" data-v-0ed119c6>  </span><span style="color:#FFCB6B;" data-v-0ed119c6>button</span><span style="color:#A6ACCD;" data-v-0ed119c6> </span><span style="color:#89DDFF;" data-v-0ed119c6>{</span></span>
<span class="line" data-v-0ed119c6><span style="color:#A6ACCD;" data-v-0ed119c6>    </span><span style="color:#B2CCD6;" data-v-0ed119c6>outline</span><span style="color:#89DDFF;" data-v-0ed119c6>:</span><span style="color:#A6ACCD;" data-v-0ed119c6> none</span><span style="color:#89DDFF;" data-v-0ed119c6>;</span></span>
<span class="line" data-v-0ed119c6><span style="color:#A6ACCD;" data-v-0ed119c6>    </span><span style="color:#B2CCD6;" data-v-0ed119c6>border</span><span style="color:#89DDFF;" data-v-0ed119c6>:</span><span style="color:#A6ACCD;" data-v-0ed119c6> none</span><span style="color:#89DDFF;" data-v-0ed119c6>;</span></span>
<span class="line" data-v-0ed119c6><span style="color:#A6ACCD;" data-v-0ed119c6>    </span><span style="color:#B2CCD6;" data-v-0ed119c6>background</span><span style="color:#89DDFF;" data-v-0ed119c6>:</span><span style="color:#A6ACCD;" data-v-0ed119c6> </span><span style="color:#89DDFF;" data-v-0ed119c6>#</span><span style="color:#A6ACCD;" data-v-0ed119c6>41b883</span><span style="color:#89DDFF;" data-v-0ed119c6>;</span></span>
<span class="line" data-v-0ed119c6><span style="color:#A6ACCD;" data-v-0ed119c6>    </span><span style="color:#B2CCD6;" data-v-0ed119c6>margin</span><span style="color:#89DDFF;" data-v-0ed119c6>:</span><span style="color:#A6ACCD;" data-v-0ed119c6> </span><span style="color:#F78C6C;" data-v-0ed119c6>0</span><span style="color:#A6ACCD;" data-v-0ed119c6> </span><span style="color:#F78C6C;" data-v-0ed119c6>5px</span><span style="color:#89DDFF;" data-v-0ed119c6>;</span></span>
<span class="line" data-v-0ed119c6><span style="color:#A6ACCD;" data-v-0ed119c6>    </span><span style="color:#B2CCD6;" data-v-0ed119c6>padding</span><span style="color:#89DDFF;" data-v-0ed119c6>:</span><span style="color:#A6ACCD;" data-v-0ed119c6> </span><span style="color:#F78C6C;" data-v-0ed119c6>5px</span><span style="color:#A6ACCD;" data-v-0ed119c6> </span><span style="color:#F78C6C;" data-v-0ed119c6>15px</span><span style="color:#89DDFF;" data-v-0ed119c6>;</span></span>
<span class="line" data-v-0ed119c6><span style="color:#A6ACCD;" data-v-0ed119c6>    </span><span style="color:#B2CCD6;" data-v-0ed119c6>border-radius</span><span style="color:#89DDFF;" data-v-0ed119c6>:</span><span style="color:#A6ACCD;" data-v-0ed119c6> </span><span style="color:#F78C6C;" data-v-0ed119c6>4px</span><span style="color:#A6ACCD;" data-v-0ed119c6> </span><span style="color:#F78C6C;" data-v-0ed119c6>!important</span><span style="color:#89DDFF;" data-v-0ed119c6>;</span></span>
<span class="line" data-v-0ed119c6><span style="color:#A6ACCD;" data-v-0ed119c6>  </span><span style="color:#89DDFF;" data-v-0ed119c6>}</span></span>
<span class="line" data-v-0ed119c6><span style="color:#89DDFF;" data-v-0ed119c6>&lt;/</span><span style="color:#F07178;" data-v-0ed119c6>style</span><span style="color:#89DDFF;" data-v-0ed119c6>&gt;</span></span>
<span class="line" data-v-0ed119c6></span></code></pre></div></details><h2 id="\u9759\u6001\u7EC4\u4EF6-props" tabindex="-1" data-v-0ed119c6>\u9759\u6001\u7EC4\u4EF6 Props <a class="header-anchor" href="#\u9759\u6001\u7EC4\u4EF6-props" aria-hidden="true" data-v-0ed119c6>#</a></h2><table data-v-0ed119c6><thead data-v-0ed119c6><tr data-v-0ed119c6><th data-v-0ed119c6>\u5C5E\u6027</th><th data-v-0ed119c6>\u8BF4\u660E</th><th data-v-0ed119c6>\u7C7B\u578B</th><th data-v-0ed119c6>\u53EF\u9009\u503C</th><th data-v-0ed119c6>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-0ed119c6><tr data-v-0ed119c6><td data-v-0ed119c6>anchor</td><td data-v-0ed119c6>\u63A7\u4EF6\u7684\u505C\u9760\u4F4D\u7F6E</td><td data-v-0ed119c6><code data-v-0ed119c6>string</code></td><td data-v-0ed119c6><a href="#anchor" data-v-0ed119c6>anchor</a></td><td data-v-0ed119c6><code data-v-0ed119c6>BMAP_ANCHOR_BOTTOM_LEFT</code></td></tr><tr data-v-0ed119c6><td data-v-0ed119c6>offset</td><td data-v-0ed119c6>\u63A7\u4EF6\u7684\u504F\u79FB\u503C</td><td data-v-0ed119c6><code data-v-0ed119c6>{x: number, y: number }</code></td><td data-v-0ed119c6>-</td><td data-v-0ed119c6><code data-v-0ed119c6>{ x: 83, y: 18 }</code></td></tr></tbody></table><h2 id="anchor" tabindex="-1" data-v-0ed119c6>anchor <a class="header-anchor" href="#anchor" aria-hidden="true" data-v-0ed119c6>#</a></h2><table data-v-0ed119c6><thead data-v-0ed119c6><tr data-v-0ed119c6><th data-v-0ed119c6>\u503C</th><th data-v-0ed119c6>\u8BF4\u660E</th></tr></thead><tbody data-v-0ed119c6><tr data-v-0ed119c6><td data-v-0ed119c6>BMAP_ANCHOR_TOP_LEFT</td><td data-v-0ed119c6>\u5DE6\u4E0A</td></tr><tr data-v-0ed119c6><td data-v-0ed119c6>BMAP_ANCHOR_TOP_RIGHT</td><td data-v-0ed119c6>\u53F3\u4E0A</td></tr><tr data-v-0ed119c6><td data-v-0ed119c6>BMAP_ANCHOR_BOTTOM_LEFT</td><td data-v-0ed119c6>\u5DE6\u4E0B</td></tr><tr data-v-0ed119c6><td data-v-0ed119c6>BMAP_ANCHOR_BOTTOM_RIGHT</td><td data-v-0ed119c6>\u53F3\u4E0B</td></tr></tbody></table><h2 id="\u7EC4\u4EF6\u4E8B\u4EF6" tabindex="-1" data-v-0ed119c6>\u7EC4\u4EF6\u4E8B\u4EF6 <a class="header-anchor" href="#\u7EC4\u4EF6\u4E8B\u4EF6" aria-hidden="true" data-v-0ed119c6>#</a></h2><table data-v-0ed119c6><thead data-v-0ed119c6><tr data-v-0ed119c6><th data-v-0ed119c6>\u4E8B\u4EF6\u540D</th><th data-v-0ed119c6>\u8BF4\u660E</th><th data-v-0ed119c6>\u7C7B\u578B</th></tr></thead><tbody data-v-0ed119c6><tr data-v-0ed119c6><td data-v-0ed119c6>initd</td><td data-v-0ed119c6>\u7EC4\u4EF6\u521D\u59CB\u5316\u540E\uFF0C\u8C03\u7528\u7684\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5730\u56FE\u5B9E\u4F8B</td><td data-v-0ed119c6><code data-v-0ed119c6>{ map: BmapGL }</code></td></tr><tr data-v-0ed119c6><td data-v-0ed119c6>unload</td><td data-v-0ed119c6>\u7EC4\u4EF6\u5378\u8F7D\u65F6\u4F1A\u8C03\u7528\u6B64\u65B9\u6CD5</td><td data-v-0ed119c6>-</td></tr></tbody></table>`,7),g=JSON.parse('{"title":"Control \u81EA\u5B9A\u4E49\u63A7\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7EC4\u4EF6\u793A\u4F8B","slug":"\u7EC4\u4EF6\u793A\u4F8B","link":"#\u7EC4\u4EF6\u793A\u4F8B","children":[]},{"level":2,"title":"\u9759\u6001\u7EC4\u4EF6 Props","slug":"\u9759\u6001\u7EC4\u4EF6-props","link":"#\u9759\u6001\u7EC4\u4EF6-props","children":[]},{"level":2,"title":"anchor","slug":"anchor","link":"#anchor","children":[]},{"level":2,"title":"\u7EC4\u4EF6\u4E8B\u4EF6","slug":"\u7EC4\u4EF6\u4E8B\u4EF6","link":"#\u7EC4\u4EF6\u4E8B\u4EF6","children":[]}],"relativePath":"zh/control/custom.md","lastUpdated":1667360956000}'),h={name:"zh/control/custom.md"},m=D({...h,setup(B){const a=u(10);let s=null;function l(d){s=d}function p(){a.value=s.getZoom()-1}function v(){a.value=s.getZoom()+1}return(d,_)=>{const r=c("Control"),F=c("Map");return C(),y("div",null,[i,t("div",null,[e(F,{onInitd:l,minZoom:3,zoom:a.value},{default:n(()=>[e(r,{style:{display:"flex","background-color":"#fff",padding:"10px"},offset:{x:0,y:0}},{default:n(()=>[t("button",{onClick:p},"\u7F29\u5C0F"),t("button",{onClick:v},"\u653E\u5927")]),_:1})]),_:1},8,["zoom"])]),E])}}});const b=A(m,[["__scopeId","data-v-0ed119c6"]]);export{g as __pageData,b as default};

import{_ as l,j as s,b as c,c as r,e as t,m as n,q as u,F as i,s as e,x as o}from"./app.7f449424.js";const k={},g=e(`<h1 id="marker-\u6807\u6CE8\u70B9" tabindex="-1"><a class="header-anchor" href="#marker-\u6807\u6CE8\u70B9" aria-hidden="true">#</a> Marker \u6807\u6CE8\u70B9</h1><p>\u5728\u5730\u56FE\u4E0A\u7ED8\u5236\u7B80\u5355\u7684\u5706\u5F62</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Marker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue3-baidu-map-gl&#39;</span>
</code></pre></div><h2 id="\u9759\u6001\u7EC4\u4EF6-props" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u7EC4\u4EF6-props" aria-hidden="true">#</a> \u9759\u6001\u7EC4\u4EF6 Props</h2>`,4),h=t("thead",null,[t("tr",null,[t("th",null,"\u53C2\u6570"),t("th",null,"\u8BF4\u660E"),t("th",null,"\u7C7B\u578B"),t("th",null,"\u53EF\u9009\u503C"),t("th",null,"\u9ED8\u8BA4\u503C")])],-1),m=t("tr",null,[t("td",null,"title"),t("td",null,"\u9F20\u6807\u79FB\u5230 marker \u4E0A\u7684\u663E\u793A\u5185\u5BB9"),t("td",null,"string"),t("td"),t("td")],-1),b=t("td",null,"draggingCursor",-1),_=o("\u62D6\u62FD\u6807\u6CE8\u65F6\u7684\u9F20\u6807\u6307\u9488\u6837\u5F0F\u3002\u6B64\u5C5E\u6027\u503C\u9700\u9075\u5FAA CSS \u7684"),v={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/cursor",target:"_blank",rel:"noopener noreferrer"},q=o("cursor"),f=o("\u5C5E\u6027\u89C4\u8303"),E=t("td",null,"string",-1),x=t("td",null,null,-1),w=t("td",null,null,-1),y=t("tr",null,[t("td",null,"raiseOnDrag"),t("td",null,"\u62D6\u62FD\u6807\u6CE8\u65F6\uFF0C\u6807\u6CE8\u662F\u5426\u5F00\u542F\u79BB\u5F00\u5730\u56FE\u8868\u9762\u6548\u679C"),t("td",null,"boolean"),t("td"),t("td",null,"false")],-1),M=t("tr",null,[t("td",null,"enableClicking"),t("td",null,"\u662F\u5426\u54CD\u5E94\u70B9\u51FB\u4E8B\u4EF6"),t("td",null,"boolean"),t("td"),t("td",null,"true")],-1),S=e('<h2 id="\u52A8\u6001\u7EC4\u4EF6-props" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u7EC4\u4EF6-props" aria-hidden="true">#</a> \u52A8\u6001\u7EC4\u4EF6 Props</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>position</td><td>\u6807\u6CE8\u70B9\u7684\u5750\u6807</td><td>{ lng: number, lat: number}</td><td></td><td><code>required</code></td></tr><tr><td>offset</td><td>\u6807\u6CE8\u70B9\u7684\u50CF\u7D20\u504F\u79FB</td><td>{x: number, y: number }</td><td></td><td></td></tr><tr><td>icon</td><td>\u6807\u6CE8\u70B9\u7684\u56FE\u6807\u3002\u53EF\u4F7F\u7528\u9ED8\u8BA4\u56FE\u6807,\u4E5F\u53EF<a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9B%BE%E6%A0%87">\u81EA\u5B9A\u4E49\u56FE\u6807</a></td><td>string</td><td>simple_red / simple_blue...</td><td></td></tr><tr><td>rotation</td><td>\u65CB\u8F6C\u89D2\u5EA6</td><td>number</td><td></td><td></td></tr><tr><td>enableDragging</td><td>\u662F\u5426\u542F\u7528\u62D6\u62FD</td><td>boolean</td><td></td><td>true</td></tr><tr><td>enableMassClear</td><td>\u662F\u5426\u5728\u8C03\u7528 map.clearOverlays \u6E05\u9664\u6B64\u8986\u76D6\u7269</td><td>boolean</td><td></td><td>true</td></tr></tbody></table><h2 id="\u9ED8\u8BA4\u56FE\u6807\u53EF\u9009\u503C" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u56FE\u6807\u53EF\u9009\u503C" aria-hidden="true">#</a> \u9ED8\u8BA4\u56FE\u6807\u53EF\u9009\u503C</h2><p><img src="https://mapopen.bj.bcebos.com/cms/react-bmap/markers_new2x_fbb9e99.png" alt="https://mapopen.bj.bcebos.com/cms/react-bmap/markers_new2x_fbb9e99.png"> simple_red , simple_blue , loc_red , loc_blue , start , end , location , red1 , red2 , red3 , red4 , red5 , red6 , red7 , red8 , red9 , red10 , blue1 , blue2 , blue3 , blue4 , blue5 , blue6 , blue7 , blue8 , blue9 , blue10</p><h2 id="\u81EA\u5B9A\u4E49\u56FE\u6807" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u56FE\u6807" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u56FE\u6807</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>anchor</td><td>\u56FE\u6807\u7684\u5B9A\u4F4D\u70B9\u76F8\u5BF9\u4E8E\u56FE\u6807\u5DE6\u4E0A\u89D2\u7684\u504F\u79FB\u503C</td><td>{ x: number, y: number }</td><td></td><td></td></tr><tr><td>imageOffset</td><td>\u56FE\u6807\u6240\u7528\u7684\u56FE\u7247\u76F8\u5BF9\u4E8E\u53EF\u89C6\u533A\u57DF\u7684\u504F\u79FB\u503C\uFF0C\u6B64\u529F\u80FD\u7684\u4F5C\u7528\u7B49\u540C\u4E8E CSS \u4E2D\u7684 background-position \u5C5E\u6027</td><td>{ x: number, y: number }</td><td></td><td></td></tr><tr><td>imageSize</td><td>\u56FE\u6807\u6240\u7528\u7684\u56FE\u7247\u7684\u5927\u5C0F\uFF0C\u6B64\u529F\u80FD\u7684\u4F5C\u7528\u7B49\u540C\u4E8E CSS \u4E2D\u7684 background-size \u5C5E\u6027\u3002\u53EF\u7528\u4E8E\u5B9E\u73B0\u9AD8\u6E05\u5C4F\u7684\u9AD8\u6E05\u6548\u679C</td><td>{ width: number, height: number }</td><td><code>required</code></td><td></td></tr><tr><td>imageUrl</td><td>\u56FE\u6807\u6240\u7528\u56FE\u50CF\u8D44\u6E90\u7684\u4F4D\u7F6E</td><td>string</td><td><code>required</code></td><td></td></tr><tr><td>printImageUrl</td><td>\u8BBE\u7F6E icon \u6253\u5370\u56FE\u7247\u7684 url\uFF0C\u8BE5\u6253\u5370\u56FE\u7247\u53EA\u9488\u5BF9 IE6 \u6709\u6548\uFF0C\u89E3\u51B3 IE6 \u4F7F\u7528 PNG \u6EE4\u955C\u5BFC\u81F4\u7684\u9519\u4F4D\u95EE\u9898\u3002\u5982\u679C\u60A8\u7684 icon \u6CA1\u6709\u4F7F\u7528 PNG \u683C\u5F0F\u56FE\u7247\u6216\u8005\u6CA1\u6709\u4F7F\u7528 CSS Sprites \u6280\u672F\uFF0C\u5219\u53EF\u5FFD\u7565\u6B64\u914D\u7F6E</td><td>string</td><td></td><td></td></tr></tbody></table><h2 id="\u7EC4\u4EF6\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u4E8B\u4EF6" aria-hidden="true">#</a> \u7EC4\u4EF6\u4E8B\u4EF6</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>click</td><td>\u9F20\u6807\u5DE6\u952E\u5355\u51FB\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\u3002 \u5F53\u53CC\u51FB\u65F6\uFF0C\u4EA7\u751F\u7684\u4E8B\u4EF6\u5E8F\u5217\u4E3A\uFF1A click click dblclick</td><td>((e: Event) =&gt; void)</td></tr><tr><td>dblclick</td><td>\u9F20\u6807\u5DE6\u952E\u53CC\u51FB\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570</td><td>((e: Event) =&gt; void)</td></tr><tr><td>mousedown</td><td>\u9F20\u6807\u5DE6\u952E\u5728\u8BE5\u8986\u76D6\u7269\u4E0A\u6309\u4E0B\u7684\u56DE\u8C03\u51FD\u6570</td><td>((e: Event) =&gt; void)</td></tr><tr><td>mouseup</td><td>\u9F20\u6807\u5DE6\u952E\u5728\u8BE5\u8986\u76D6\u7269\u4E0A\u62AC\u8D77\u7684\u56DE\u8C03\u51FD\u6570</td><td>((e: Event) =&gt; void)</td></tr><tr><td>mouseout</td><td>\u9F20\u6807\u6307\u9488\u79FB\u51FA\u8BE5\u8986\u76D6\u7269\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570</td><td>((e: Event) =&gt; void)</td></tr><tr><td>mouseover</td><td>\u9F20\u6807\u6307\u9488\u79FB\u5165\u8BE5\u8986\u76D6\u7269\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570</td><td>((e: Event) =&gt; void)</td></tr><tr><td>remove</td><td>\u8BE5\u8986\u76D6\u7269\u88AB\u79FB\u9664\u7684\u56DE\u8C03\u51FD\u6570</td><td>((e: Event) =&gt; void)</td></tr><tr><td>infowindowclose</td><td>infowindow \u5173\u95ED\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570</td><td>((e: Event) =&gt; void)</td></tr><tr><td>infowindowopen</td><td>infowindow \u6253\u5F00\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570</td><td>((e: Event) =&gt; void)</td></tr><tr><td>dragstart</td><td>\u62D6\u62FD\u8986\u76D6\u7269\u5F00\u59CB\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570</td><td>((e: Event) =&gt; void)</td></tr><tr><td>dragging</td><td>\u8986\u76D6\u7269\u62D6\u62FD\u4E2D\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570</td><td>((e: Event) =&gt; void)</td></tr><tr><td>dragend</td><td>\u62D6\u62FD\u8986\u76D6\u7269\u7ED3\u675F\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570</td><td>((e: Event) =&gt; void)</td></tr><tr><td>rightclick</td><td>\u9F20\u6807\u53F3\u952E\u5355\u51FB\u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570</td><td>((e: Event) =&gt; void)</td></tr></tbody></table><h2 id="\u7EC4\u4EF6\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5B9E\u4F8B" aria-hidden="true">#</a> \u7EC4\u4EF6\u5B9E\u4F8B</h2>',9),C=e(`<p>\u62D6\u52A8\u56FE\u7247\u8BD5\u8BD5</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span>
  <span class="token attr-name">:minZoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400px<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u8D77\u70B9\u56FE\u6807 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Marker</span>
    <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ lat: 39.915185, lng: 116.403901 }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>start<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- \u7EC8\u70B9\u56FE\u6807 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Marker</span>
    <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ lat: 39.915185, lng: 116.404901 }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>end<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- \u7EA2\u8272\u56FE\u68071 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Marker</span>
    <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ lat: 39.915185, lng: 116.405901 }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red1<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- \u7EA2\u8272\u56FE\u68072 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Marker</span>
    <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ lat: 39.915185, lng: 116.403901 }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>simple_red<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- \u81EA\u5B9A\u4E49\u56FE\u6807 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Marker</span>
    <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ lat: 39.915185, lng: 116.400901 }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      imageUrl: <span class="token punctuation">&#39;</span>/logo.png<span class="token punctuation">&#39;</span>,
      imageSize: {
        width: 100,
        height: 100
      },
    }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">dragging</span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Map</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>Map<span class="token punctuation">,</span> Maker<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue3-baidu-map-gl&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2);function A(B,I){const p=s("ExternalLinkIcon"),a=s("Marker"),d=s("Map");return c(),r(i,null,[g,t("table",null,[h,t("tbody",null,[m,t("tr",null,[b,t("td",null,[_,t("a",v,[q,n(p)]),f]),E,x,w]),y,M])]),S,t("div",null,[n(d,{ak:"4stE857hYPHbEmgKhLiTAa0QbCIULHpm",minZoom:3,height:"400px"},{default:u(()=>[n(a,{position:{lat:39.915185,lng:116.403901},icon:"start"},null,8,["position"]),n(a,{position:{lat:39.915185,lng:116.404901},icon:"end"},null,8,["position"]),n(a,{position:{lat:39.915185,lng:116.405901},icon:"red1"},null,8,["position"]),n(a,{position:{lat:39.915185,lng:116.406901},icon:"simple_red"},null,8,["position"]),n(a,{position:{lat:39.915185,lng:116.400901},icon:{imageUrl:"https://yue1123.github.io/vue3-baidu-map-gl/dist/logo.png",imageSize:{width:100,height:100}},enableDragging:""},null,8,["position","icon"])]),_:1})]),C],64)}var U=l(k,[["render",A],["__file","marker.html.vue"]]);export{U as default};

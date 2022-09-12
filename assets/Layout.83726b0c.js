var Be=Object.defineProperty,De=Object.defineProperties;var Me=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var He=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var _e=(l,t,e)=>t in l?Be(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e,Y=(l,t)=>{for(var e in t||(t={}))He.call(t,e)&&_e(l,e,t[e]);if(de)for(var e of de(t))Ie.call(t,e)&&_e(l,e,t[e]);return l},J=(l,t)=>De(l,Me(t));import{_ as x,j as A,b as n,c,m as $,d as S,A as P,B as _,C as me,u as a,F as M,D as R,e as g,t as T,E as w,G as q,H as Q,I as C,q as B,J as pe,r as y,x as V,K as X,L as Pe,M as Z,N as ee,O as E,P as j,Q as fe,R as be,y as ge,z as D,T as ke,h as O,w as Ee,k as K,S as G,U as Ae,V as Re,W as te,X as $e,Y as Le,s as Fe,o as ye,n as Oe,Z as U,$ as ae,a0 as ze,a1 as We,a as Ue,a2 as Ve}from"./app.2db577e0.js";const je=l=>/^mailto:/.test(l),Ke=l=>/^tel:/.test(l),Ge={},qe={class:"theme-default-content custom"};function Xe(l,t){const e=A("Content");return n(),c("div",qe,[$(e)])}var Ye=x(Ge,[["render",Xe],["__file","HomeContent.vue"]]);const Je={key:0,class:"features"},Qe=S({__name:"HomeFeatures",setup(l){const t=P(),e=_(()=>me(t.value.features)?t.value.features:[]);return(i,o)=>a(e).length?(n(),c("div",Je,[(n(!0),c(M,null,R(a(e),h=>(n(),c("div",{key:h.title,class:"feature"},[g("h2",null,T(h.title),1),g("p",null,T(h.details),1)]))),128))])):w("",!0)}});var Ze=x(Qe,[["__file","HomeFeatures.vue"]]);const et=["innerHTML"],tt=["textContent"],at=S({__name:"HomeFooter",setup(l){const t=P(),e=_(()=>t.value.footer),i=_(()=>t.value.footerHtml);return(o,h)=>a(e)?(n(),c(M,{key:0},[a(i)?(n(),c("div",{key:0,class:"footer",innerHTML:a(e)},null,8,et)):(n(),c("div",{key:1,class:"footer",textContent:T(a(e))},null,8,tt))],64)):w("",!0)}});var nt=x(at,[["__file","HomeFooter.vue"]]);const rt=["href","rel","target","aria-label"],ot=S({inheritAttrs:!1}),st=S(J(Y({},ot),{__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(l){const t=l,e=q(),i=Pe(),{item:o}=Q(t),h=_(()=>X(o.value.link)),m=_(()=>je(o.value.link)||Ke(o.value.link)),p=_(()=>{if(!m.value){if(o.value.target)return o.value.target;if(h.value)return"_blank"}}),r=_(()=>p.value==="_blank"),s=_(()=>!h.value&&!m.value&&!r.value),u=_(()=>{if(!m.value){if(o.value.rel)return o.value.rel;if(r.value)return"noopener noreferrer"}}),v=_(()=>o.value.ariaLabel||o.value.text),d=_(()=>{const L=Object.keys(i.value.locales);return L.length?!L.some(f=>f===o.value.link):o.value.link!=="/"}),b=_(()=>d.value?e.path.startsWith(o.value.link):!1),k=_(()=>s.value?o.value.activeMatch?new RegExp(o.value.activeMatch).test(e.path):b.value:!1);return(L,f)=>{const N=A("RouterLink"),H=A("ExternalLinkIcon");return a(s)?(n(),C(N,pe({key:0,class:{"router-link-active":a(k)},to:a(o).link,"aria-label":a(v)},L.$attrs),{default:B(()=>[y(L.$slots,"before"),V(" "+T(a(o).text)+" ",1),y(L.$slots,"after")]),_:3},16,["class","to","aria-label"])):(n(),c("a",pe({key:1,class:"external-link",href:a(o).link,rel:a(u),target:a(p),"aria-label":a(v)},L.$attrs),[y(L.$slots,"before"),V(" "+T(a(o).text)+" ",1),a(r)?(n(),C(H,{key:0})):w("",!0),y(L.$slots,"after")],16,rt))}}}));var I=x(st,[["__file","AutoLink.vue"]]);const lt={class:"hero"},ut={key:0,id:"main-title"},it={key:1,class:"description"},ct={key:2,class:"actions"},vt=S({__name:"HomeHero",setup(l){const t=P(),e=Z(),i=ee(),o=_(()=>i.value&&t.value.heroImageDark!==void 0?t.value.heroImageDark:t.value.heroImage),h=_(()=>t.value.heroText===null?null:t.value.heroText||e.value.title||"Hello"),m=_(()=>t.value.heroAlt||h.value||"hero"),p=_(()=>t.value.tagline===null?null:t.value.tagline||e.value.description||"Welcome to your VuePress site"),r=_(()=>me(t.value.actions)?t.value.actions.map(({text:u,link:v,type:d="primary"})=>({text:u,link:v,type:d})):[]),s=()=>{if(!o.value)return null;const u=j("img",{src:fe(o.value),alt:m.value});return t.value.heroImageDark===void 0?u:j(be,()=>u)};return(u,v)=>(n(),c("header",lt,[$(s),a(h)?(n(),c("h1",ut,T(a(h)),1)):w("",!0),a(p)?(n(),c("p",it,T(a(p)),1)):w("",!0),a(r).length?(n(),c("p",ct,[(n(!0),c(M,null,R(a(r),d=>(n(),C(I,{key:d.text,class:E(["action-button",[d.type]]),item:d},null,8,["class","item"]))),128))])):w("",!0)]))}});var dt=x(vt,[["__file","HomeHero.vue"]]);const _t={class:"home"},pt=S({__name:"Home",setup(l){return(t,e)=>(n(),c("main",_t,[$(dt),$(Ze),$(Ye),$(nt)]))}});var ht=x(pt,[["__file","Home.vue"]]);const mt=S({__name:"NavbarBrand",setup(l){const t=ge(),e=Z(),i=D(),o=ee(),h=_(()=>i.value.home||t.value),m=_(()=>e.value.title),p=_(()=>o.value&&i.value.logoDark!==void 0?i.value.logoDark:i.value.logo),r=()=>{if(!p.value)return null;const s=j("img",{class:"logo",src:fe(p.value),alt:m.value});return i.value.logoDark===void 0?s:j(be,()=>s)};return(s,u)=>{const v=A("RouterLink");return n(),C(v,{to:a(h)},{default:B(()=>[$(r),a(m)?(n(),c("span",{key:0,class:E(["site-name",{"can-hide":a(p)}])},T(a(m)),3)):w("",!0)]),_:1},8,["to"])}}});var ft=x(mt,[["__file","NavbarBrand.vue"]]);const bt=S({__name:"DropdownTransition",setup(l){const t=i=>{i.style.height=i.scrollHeight+"px"},e=i=>{i.style.height=""};return(i,o)=>(n(),C(ke,{name:"dropdown",onEnter:t,onAfterEnter:e,onBeforeLeave:t},{default:B(()=>[y(i.$slots,"default")]),_:3}))}});var we=x(bt,[["__file","DropdownTransition.vue"]]);const gt=["aria-label"],kt={class:"title"},$t=g("span",{class:"arrow down"},null,-1),Lt=["aria-label"],yt={class:"title"},wt={class:"navbar-dropdown"},xt={class:"navbar-dropdown-subtitle"},St={key:1},Ct={class:"navbar-dropdown-subitem-wrapper"},Tt=S({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(l){const t=l,{item:e}=Q(t),i=_(()=>e.value.ariaLabel||e.value.text),o=O(!1),h=q();Ee(()=>h.path,()=>{o.value=!1});const m=r=>{r.detail===0?o.value=!o.value:o.value=!1},p=(r,s)=>s[s.length-1]===r;return(r,s)=>(n(),c("div",{class:E(["navbar-dropdown-wrapper",{open:o.value}])},[g("button",{class:"navbar-dropdown-title",type:"button","aria-label":a(i),onClick:m},[g("span",kt,T(a(e).text),1),$t],8,gt),g("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":a(i),onClick:s[0]||(s[0]=u=>o.value=!o.value)},[g("span",yt,T(a(e).text),1),g("span",{class:E(["arrow",o.value?"down":"right"])},null,2)],8,Lt),$(we,null,{default:B(()=>[K(g("ul",wt,[(n(!0),c(M,null,R(a(e).children,u=>(n(),c("li",{key:u.text,class:"navbar-dropdown-item"},[u.children?(n(),c(M,{key:0},[g("h4",xt,[u.link?(n(),C(I,{key:0,item:u,onFocusout:v=>p(u,a(e).children)&&u.children.length===0&&(o.value=!1)},null,8,["item","onFocusout"])):(n(),c("span",St,T(u.text),1))]),g("ul",Ct,[(n(!0),c(M,null,R(u.children,v=>(n(),c("li",{key:v.link,class:"navbar-dropdown-subitem"},[$(I,{item:v,onFocusout:d=>p(v,u.children)&&p(u,a(e).children)&&(o.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(n(),C(I,{key:1,item:u,onFocusout:v=>p(u,a(e).children)&&(o.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[G,o.value]])]),_:1})],2))}});var Nt=x(Tt,[["__file","NavbarDropdown.vue"]]);const he=l=>decodeURI(l).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Bt=(l,t)=>{if(t.hash===l)return!0;const e=he(t.path),i=he(l);return e===i},xe=(l,t)=>l.link&&Bt(l.link,t)?!0:l.children?l.children.some(e=>xe(e,t)):!1,Se=l=>!X(l)||/github\.com/.test(l)?"GitHub":/bitbucket\.org/.test(l)?"Bitbucket":/gitlab\.com/.test(l)?"GitLab":/gitee\.com/.test(l)?"Gitee":null,Dt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Mt=({docsRepo:l,editLinkPattern:t})=>{if(t)return t;const e=Se(l);return e!==null?Dt[e]:null},Ht=({docsRepo:l,docsBranch:t,docsDir:e,filePathRelative:i,editLinkPattern:o})=>{if(!i)return null;const h=Mt({docsRepo:l,editLinkPattern:o});return h?h.replace(/:repo/,X(l)?l:`https://github.com/${l}`).replace(/:branch/,t).replace(/:path/,Ae(`${Re(e)}/${i}`)):null},It={key:0,class:"navbar-items"},Pt=S({__name:"NavbarItems",setup(l){const t=()=>{const s=te(),u=ge(),v=Z(),d=D();return _(()=>{var N,H;const b=Object.keys(v.value.locales);if(b.length<2)return[];const k=s.currentRoute.value.path,L=s.currentRoute.value.fullPath;return[{text:(N=d.value.selectLanguageText)!=null?N:"unknown language",ariaLabel:(H=d.value.selectLanguageAriaLabel)!=null?H:"unkown language",children:b.map(F=>{var oe,se,le,ue,ie,ce;const z=(se=(oe=v.value.locales)==null?void 0:oe[F])!=null?se:{},ne=(ue=(le=d.value.locales)==null?void 0:le[F])!=null?ue:{},re=`${z.lang}`,Te=(ie=ne.selectLanguageName)!=null?ie:re;let W;if(re===v.value.lang)W=L;else{const ve=k.replace(u.value,F);s.getRoutes().some(Ne=>Ne.path===ve)?W=ve:W=(ce=ne.home)!=null?ce:F}return{text:Te,link:W}})}]})},e=()=>{const s=D(),u=_(()=>s.value.repo),v=_(()=>u.value?Se(u.value):null),d=_(()=>u.value&&!X(u.value)?`https://github.com/${u.value}`:u.value),b=_(()=>d.value?s.value.repoLabel?s.value.repoLabel:v.value===null?"Source":v.value:null);return _(()=>!d.value||!b.value?[]:[{text:b.value,link:d.value}])},i=s=>$e(s)?Le(s):s.children?J(Y({},s),{children:s.children.map(i)}):s,h=(()=>{const s=D();return _(()=>(s.value.navbar||[]).map(i))})(),m=t(),p=e(),r=_(()=>[...h.value,...m.value,...p.value]);return(s,u)=>a(r).length?(n(),c("nav",It,[(n(!0),c(M,null,R(a(r),v=>(n(),c("div",{key:v.text,class:"navbar-item"},[v.children?(n(),C(Nt,{key:0,item:v},null,8,["item"])):(n(),C(I,{key:1,item:v},null,8,["item"]))]))),128))])):w("",!0)}});var Ce=x(Pt,[["__file","NavbarItems.vue"]]);const Et=["title"],At={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Rt=Fe('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Ft=[Rt],Ot={class:"icon",focusable:"false",viewBox:"0 0 32 32"},zt=g("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Wt=[zt],Ut=S({__name:"ToggleDarkModeButton",setup(l){const t=D(),e=ee(),i=()=>{e.value=!e.value};return(o,h)=>(n(),c("button",{class:"toggle-dark-button",title:a(t).toggleDarkMode,onClick:i},[K((n(),c("svg",At,Ft,512)),[[G,!a(e)]]),K((n(),c("svg",Ot,Wt,512)),[[G,a(e)]])],8,Et))}});var Vt=x(Ut,[["__file","ToggleDarkModeButton.vue"]]);const jt=["title"],Kt=g("div",{class:"icon","aria-hidden":"true"},[g("span"),g("span"),g("span")],-1),Gt=[Kt],qt=S({__name:"ToggleSidebarButton",emits:["toggle"],setup(l){const t=D();return(e,i)=>(n(),c("div",{class:"toggle-sidebar-button",title:a(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:i[0]||(i[0]=o=>e.$emit("toggle"))},Gt,8,jt))}});var Xt=x(qt,[["__file","ToggleSidebarButton.vue"]]);const Yt=S({__name:"Navbar",emits:["toggle-sidebar"],setup(l){const t=D(),e=O(null),i=O(null),o=O(0),h=_(()=>o.value?{maxWidth:o.value+"px"}:{}),m=_(()=>t.value.darkMode);ye(()=>{const s=p(e.value,"paddingLeft")+p(e.value,"paddingRight"),u=()=>{var v;window.innerWidth<=719?o.value=0:o.value=e.value.offsetWidth-s-(((v=i.value)==null?void 0:v.offsetWidth)||0)};u(),window.addEventListener("resize",u,!1),window.addEventListener("orientationchange",u,!1)});function p(r,s){var d,b,k;const u=(k=(b=(d=r==null?void 0:r.ownerDocument)==null?void 0:d.defaultView)==null?void 0:b.getComputedStyle(r,null))==null?void 0:k[s],v=Number.parseInt(u,10);return Number.isNaN(v)?0:v}return(r,s)=>{const u=A("NavbarSearch");return n(),c("header",{ref_key:"navbar",ref:e,class:"navbar"},[$(Xt,{onToggle:s[0]||(s[0]=v=>r.$emit("toggle-sidebar"))}),g("span",{ref_key:"navbarBrand",ref:i},[$(ft)],512),g("div",{class:"navbar-items-wrapper",style:Oe(a(h))},[y(r.$slots,"before"),$(Ce,{class:"can-hide"}),y(r.$slots,"after"),a(m)?(n(),C(Vt,{key:0})):w("",!0),$(u)],4)],512)}}});var Jt=x(Yt,[["__file","Navbar.vue"]]);const Qt={class:"page-meta"},Zt={key:0,class:"meta-item edit-link"},ea={key:1,class:"meta-item last-updated"},ta={class:"meta-item-label"},aa={class:"meta-item-info"},na={key:2,class:"meta-item contributors"},ra={class:"meta-item-label"},oa={class:"meta-item-info"},sa=["title"],la=V(", "),ua=S({__name:"PageMeta",setup(l){const t=()=>{const r=D(),s=U(),u=P();return _(()=>{var H,F,z;if(!((F=(H=u.value.editLink)!=null?H:r.value.editLink)!=null?F:!0))return null;const{repo:d,docsRepo:b=d,docsBranch:k="main",docsDir:L="",editLinkText:f}=r.value;if(!b)return null;const N=Ht({docsRepo:b,docsBranch:k,docsDir:L,filePathRelative:s.value.filePathRelative,editLinkPattern:(z=u.value.editLinkPattern)!=null?z:r.value.editLinkPattern});return N?{text:f!=null?f:"Edit this page",link:N}:null})},e=()=>{const r=D(),s=U(),u=P();return _(()=>{var b,k,L,f;return!((k=(b=u.value.lastUpdated)!=null?b:r.value.lastUpdated)!=null?k:!0)||!((L=s.value.git)!=null&&L.updatedTime)?null:new Date((f=s.value.git)==null?void 0:f.updatedTime).toLocaleString()})},i=()=>{const r=D(),s=U(),u=P();return _(()=>{var d,b,k,L;return((b=(d=u.value.contributors)!=null?d:r.value.contributors)!=null?b:!0)&&(L=(k=s.value.git)==null?void 0:k.contributors)!=null?L:null})},o=D(),h=t(),m=e(),p=i();return(r,s)=>{const u=A("ClientOnly");return n(),c("footer",Qt,[a(h)?(n(),c("div",Zt,[$(I,{class:"meta-item-label",item:a(h)},null,8,["item"])])):w("",!0),a(m)?(n(),c("div",ea,[g("span",ta,T(a(o).lastUpdatedText)+": ",1),$(u,null,{default:B(()=>[g("span",aa,T(a(m)),1)]),_:1})])):w("",!0),a(p)&&a(p).length?(n(),c("div",na,[g("span",ra,T(a(o).contributorsText)+": ",1),g("span",oa,[(n(!0),c(M,null,R(a(p),(v,d)=>(n(),c(M,{key:d},[g("span",{class:"contributor",title:`email: ${v.email}`},T(v.name),9,sa),d!==a(p).length-1?(n(),c(M,{key:0},[la],64)):w("",!0)],64))),128))])])):w("",!0)])}}});var ia=x(ua,[["__file","PageMeta.vue"]]);const ca={key:0,class:"page-nav"},va={class:"inner"},da={key:0,class:"prev"},_a={key:1,class:"next"},pa=S({__name:"PageNav",setup(l){const t=r=>r===!1?null:$e(r)?Le(r):ze(r)?r:!1,e=(r,s,u)=>{const v=r.findIndex(d=>d.link===s);if(v!==-1){const d=r[v+u];return d!=null&&d.link?d:null}for(const d of r)if(d.children){const b=e(d.children,s,u);if(b)return b}return null},i=P(),o=ae(),h=q(),m=_(()=>{const r=t(i.value.prev);return r!==!1?r:e(o.value,h.path,-1)}),p=_(()=>{const r=t(i.value.next);return r!==!1?r:e(o.value,h.path,1)});return(r,s)=>a(m)||a(p)?(n(),c("nav",ca,[g("p",va,[a(m)?(n(),c("span",da,[$(I,{item:a(m)},null,8,["item"])])):w("",!0),a(p)?(n(),c("span",_a,[$(I,{item:a(p)},null,8,["item"])])):w("",!0)])])):w("",!0)}});var ha=x(pa,[["__file","PageNav.vue"]]);const ma={class:"page"},fa={class:"theme-default-content"},ba=S({__name:"Page",setup(l){return(t,e)=>{const i=A("Content");return n(),c("main",ma,[y(t.$slots,"top"),g("div",fa,[$(i)]),$(ia),$(ha),y(t.$slots,"bottom")])}}});var ga=x(ba,[["__file","Page.vue"]]);const ka={class:"sidebar-item-children"},$a=S({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(l){const t=l,{item:e,depth:i}=Q(t),o=q(),h=te(),m=_(()=>xe(e.value,o)),p=_(()=>({"sidebar-item":!0,"sidebar-heading":i.value===0,active:m.value,collapsible:e.value.collapsible})),r=O(!0),s=O(void 0);return e.value.collapsible&&(r.value=m.value,s.value=()=>{r.value=!r.value},h.afterEach(()=>{r.value=m.value})),(u,v)=>{var b;const d=A("SidebarItem",!0);return n(),c("li",null,[a(e).link?(n(),C(I,{key:0,class:E(a(p)),item:a(e)},null,8,["class","item"])):(n(),c("p",{key:1,tabindex:"0",class:E(a(p)),onClick:v[0]||(v[0]=(...k)=>s.value&&s.value(...k)),onKeydown:v[1]||(v[1]=We((...k)=>s.value&&s.value(...k),["enter"]))},[V(T(a(e).text)+" ",1),a(e).collapsible?(n(),c("span",{key:0,class:E(["arrow",r.value?"down":"right"])},null,2)):w("",!0)],34)),(b=a(e).children)!=null&&b.length?(n(),C(we,{key:2},{default:B(()=>[K(g("ul",ka,[(n(!0),c(M,null,R(a(e).children,k=>(n(),C(d,{key:`${a(i)}${k.text}${k.link}`,item:k,depth:a(i)+1},null,8,["item","depth"]))),128))],512),[[G,r.value]])]),_:1})):w("",!0)])}}});var La=x($a,[["__file","SidebarItem.vue"]]);const ya={key:0,class:"sidebar-items"},wa=S({__name:"SidebarItems",setup(l){const t=ae();return(e,i)=>a(t).length?(n(),c("ul",ya,[(n(!0),c(M,null,R(a(t),o=>(n(),C(La,{key:o.link||o.text,item:o},null,8,["item"]))),128))])):w("",!0)}});var xa=x(wa,[["__file","SidebarItems.vue"]]);const Sa={class:"sidebar"},Ca=S({__name:"Sidebar",setup(l){return(t,e)=>(n(),c("aside",Sa,[$(Ce),y(t.$slots,"top"),$(xa),y(t.$slots,"bottom")]))}});var Ta=x(Ca,[["__file","Sidebar.vue"]]);const Na=S({__name:"Layout",setup(l){const t=U(),e=P(),i=D(),o=_(()=>e.value.navbar!==!1&&i.value.navbar!==!1),h=ae(),m=O(!1),p=f=>{m.value=typeof f=="boolean"?f:!m.value},r={x:0,y:0},s=f=>{r.x=f.changedTouches[0].clientX,r.y=f.changedTouches[0].clientY},u=f=>{const N=f.changedTouches[0].clientX-r.x,H=f.changedTouches[0].clientY-r.y;Math.abs(N)>Math.abs(H)&&Math.abs(N)>40&&(N>0&&r.x<=80?p(!0):p(!1))},v=_(()=>[{"no-navbar":!o.value,"no-sidebar":!h.value.length,"sidebar-open":m.value},e.value.pageClass]);let d;ye(()=>{d=te().afterEach(()=>{p(!1)})}),Ue(()=>{d()});const b=Ve(),k=b.resolve,L=b.pending;return(f,N)=>(n(),c("div",{class:E(["theme-container",a(v)]),onTouchstart:s,onTouchend:u},[y(f.$slots,"navbar",{},()=>[a(o)?(n(),C(Jt,{key:0,onToggleSidebar:p},{before:B(()=>[y(f.$slots,"navbar-before")]),after:B(()=>[y(f.$slots,"navbar-after")]),_:3})):w("",!0)]),g("div",{class:"sidebar-mask",onClick:N[0]||(N[0]=H=>p(!1))}),y(f.$slots,"sidebar",{},()=>[$(Ta,null,{top:B(()=>[y(f.$slots,"sidebar-top")]),bottom:B(()=>[y(f.$slots,"sidebar-bottom")]),_:3})]),y(f.$slots,"page",{},()=>[a(e).home?(n(),C(ht,{key:0})):(n(),C(ke,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:a(k),onBeforeLeave:a(L)},{default:B(()=>[(n(),C(ga,{key:a(t).path},{top:B(()=>[y(f.$slots,"page-top")]),bottom:B(()=>[y(f.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});var Ma=x(Na,[["__file","Layout.vue"]]);export{Ma as default};
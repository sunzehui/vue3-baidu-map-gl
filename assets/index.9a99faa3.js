import{_ as j,d as F,i as G,o as N,a as $,p as U,b as V,c as q,e as w,t as J,u as Q,n as X,r as Y,F as ee,f as oe,w as t}from"./app.138ae8ae.js";import{u as ne}from"./useLife.0bb6c8a9.js";import{b as te}from"./bindEvents.81d30a10.js";const le={style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},ae=F({props:{ak:null,width:{default:"100%"},height:{default:"400px"},center:{default:()=>({lat:39.915185,lng:116.403901})},mapType:{default:"BMAP_NORMAL_MAP"},zoom:{default:16},heading:{default:0},tilt:{default:0},minZoom:{default:0},maxZoom:{default:21},enableDragging:{type:Boolean,default:!0},enableInertialDragging:{type:Boolean,default:!0},enableScrollWheelZoom:{type:Boolean,default:!0},enableContinuousZoom:{type:Boolean,default:!0},enableResizeOnCenter:{type:Boolean,default:!0},enableDoubleClickZoom:{type:Boolean,default:!1},enableKeyboard:{type:Boolean,default:!0},enablePinchToZoom:{type:Boolean,default:!0},enableAutoResize:{type:Boolean,default:!0},onClick:null,onDblclick:null,onRightclick:null,onRightdblclick:null,onMaptypechange:null,onMousemove:null,onMouseover:null,onMouseout:null,onMovestart:null,onMoving:null,onMoveend:null,onZoomstart:null,onZoomend:null,onAddoverlay:null,onAddcontrol:null,onRemovecontrol:null,onRemoveoverlay:null,onClearoverlays:null,onDragstart:null,onDragging:null,onDragend:null,onAddtilelayer:null,onRemovetilelayer:null,onLoad:null,onResize:null,onHotspotclick:null,onHotspotover:null,onHotspotout:null,onTilesloaded:null,onTouchstart:null,onTouchmove:null,onTouchend:null,onLongpress:null},emits:["initd","unload","click","dblclick","rightclick","rightdblclick","maptypechange","mousemove","mouseover","mouseout","movestart","moving","moveend","zoomstart","zoomend","addoverlay","addcontrol","removecontrol","removeoverlay","clearoverlays","dragstart","dragging","dragend","addtilelayer","removetilelayer","load","resize","hotspotclick","hotspotover","hotspotout","tilesloaded","touchstart","touchmove","touchend","longpress"],setup(M,{emit:k}){const n=M;let o=null,i=!1;const{ready:D}=ne("initd"),z=n.ak||G("baiduMapAk");function B(){return window._BMap?Promise.resolve():(window._BMap={},window._BMap.scriptLoader=new Promise((e,a)=>{const l=document.createElement("script");window._initBMap=()=>{e(),window.document.body.removeChild(l)},l.src=`//api.map.baidu.com/api?type=webgl&v=1.0&ak=${z}&callback=_initBMap`,l.type="text/javascript",l.defer=!0,l.onerror=a,document.body.appendChild(l)}),window._BMap.scriptLoader)}function R(){B().then(()=>{const{minZoom:e,maxZoom:a,mapType:l,enableAutoResize:r}=n;o=new BMapGL.Map("baidu-map-container",{minZoom:e,maxZoom:a,mapType:window[l],enableAutoResize:r}),P(),A(),T(),te(n,k,o),i||(i=!0,oe(()=>D(o)))})}function T(){t(()=>n.zoom,s),t(()=>n.tilt,m),t(()=>n.heading,c),t(()=>n.center,_),t(()=>n.enableDragging,p),t(()=>n.enableInertialDragging,g),t(()=>n.enableScrollWheelZoom,b),t(()=>n.enableContinuousZoom,f),t(()=>n.enableResizeOnCenter,h),t(()=>n.enableDoubleClickZoom,y),t(()=>n.enableKeyboard,v),t(()=>n.enablePinchToZoom,Z),t(()=>n.enableAutoResize,C),t(()=>n.mapType,d)}function A(){const{enableDragging:e,enableInertialDragging:a,enableScrollWheelZoom:l,enableContinuousZoom:r,enableResizeOnCenter:S,enableDoubleClickZoom:x,enableKeyboard:L,enablePinchToZoom:O,enableAutoResize:I,mapType:W,zoom:K,tilt:H,heading:E}=n;s(K),m(H),c(E),p(e),g(a),b(l),f(r),h(S),y(x),v(L),Z(O),C(I),d(W)}function u(e,a){return new BMapGL.Point(e,a)}function _(){typeof n.center=="string"?o.setCenter(n.center):o.setCenter(u(n.center.lng,n.center.lat))}function P(){typeof n.center=="string"?o.centerAndZoom(n.center):o.centerAndZoom(u(n.center.lng,n.center.lat),n.zoom)}function s(e){o.setZoom(e)}function d(e){o.setMapType(window[e])}function c(e){o.setHeading(e)}function m(e){o.setTilt(e)}function p(e){e?o.enableDragging():o.disableDragging()}function g(e){e?o.enableInertialDragging():o.disableInertialDragging()}function b(e){e?o.enableScrollWheelZoom():o.disableScrollWheelZoom()}function f(e){e?o.enableContinuousZoom():o.disableContinuousZoom()}function h(e){e?o.enableResizeOnCenter():o.disableResizeOnCenter()}function y(e){e?o.enableDoubleClickZoom():o.disableDoubleClickZoom()}function v(e){e?o.enableKeyboard():o.disableKeyboard()}function Z(e){e?o.enablePinchToZoom():o.disablePinchToZoom()}function C(e){e?o.enableAutoResize():o.disableAutoResize()}return N(()=>{R()}),$(()=>{o==null||o.destroy()}),U("getMapInstance",()=>o),(e,a)=>(V(),q(ee,null,[w("div",{id:"baidu-map-container",style:X([{width:n.width,height:n.height},{position:"relative",overflow:"hidden"}])},[w("div",le,J(Q(i)?"":"map loading..."),1)],4),Y(e.$slots,"default")],64))}});var se=j(ae,[["__file","index.vue"]]);export{se as default};

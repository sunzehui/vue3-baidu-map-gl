<template></template>

<script setup lang="ts">
  import {  defineProps, provide, watch, withDefaults  } from 'vue-demi'
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import { isString, callWhenDifferentValue, isDef } from '../../../utils/index'
  import bindEvents, { Callback } from '../../../utils/bindEvents'
  import useLifeCycle from '../../../hooks/useLifeCycle'
  import useMarkerDefaultIcons from '../../../hooks/useMarkerDefaultIcons'
  export type MarkerDefaultIcons =
    | 'simple_red'
    | 'simple_blue'
    | 'loc_red'
    | 'loc_blue'
    | 'start'
    | 'end'
    | 'location'
    | 'red1'
    | 'red2'
    | 'red3'
    | 'red4'
    | 'red5'
    | 'red6'
    | 'red7'
    | 'red8'
    | 'red9'
    | 'red10'
    | 'blue1'
    | 'blue2'
    | 'blue3'
    | 'blue4'
    | 'blue5'
    | 'blue6'
    | 'blue7'
    | 'blue8'
    | 'blue9'
    | 'blue10'

  export interface MarkerPosition {
    /**
     * 地理经度
     */
    lng: number
    /**
     * 地理纬度
     */
    lat: number
  }
  export interface MarkerOffset {
    x: number
    y: number
  }
  export type MarkerCustomIcon = {
    anchor?: {
      x: number
      y: number
    }
    imageOffset?: {
      x: number
      y: number
    }
    imageSize: {
      width: number
      height: number
    }
    imageUrl: string
    printImageUrl?: string
  }
  export interface BmMarkerProps {
    position: MarkerPosition
    /**
     * 标注的位置偏移值
     */
    offset?: MarkerOffset
    /**
     * 标注所用的图标对象
     */
    icon?: MarkerCustomIcon | MarkerDefaultIcons
    /**
     * 显示层级
     */
    zIndex?: number
    /**
     * @default true
     * 是否在调用map.clearOverlays清除此覆盖物，默认为true
     */
    enableMassClear?: boolean
    /**
     * @default false
     * 是否启用拖拽，默认为false
     */
    enableDragging?: boolean
    /**
     * @default true
     * 是否响应点击事件。默认为true
     */
    enableClicking?: boolean
    /**
     * @default false
     * 拖拽标注时，标注是否开启离开地图表面效果。默认为false
     */
    raiseOnDrag?: boolean
    /**
     * 拖拽标注时的鼠标指针样式。此属性值需遵循CSS的cursor属性规范
     */
    draggingCursor?: string
    /**
     * 旋转角度
     */
    rotation?: number
    /**
     * 鼠标移到marker上的显示内容
     */
    title?: string
    onClick?: Callback
    onDblclick?: Callback
    onMousedown?: Callback
    onMouseup?: Callback
    onMouseout?: Callback
    onMouseover?: Callback
    onRemove?: Callback
    onInfowindowclose?: Callback
    onInfowindowopen?: Callback
    onDragstart?: Callback
    onDragging?: Callback
    onDragend?: Callback
    onRightClick?: Callback
  }

  const props = withDefaults(defineProps<BmMarkerProps>(), {
    offset: () => ({
      x: 0,
      y: 0
    }),
    enableMassClear: true,
    enableDragging: false,
    enableClicking: true,
    raiseOnDrag: false,
    draggingCursor: 'pointer',
    rotation: 0,
    title: ''
  })
  const vueEmits = defineEmits([
    'initd',
    'unload',
    'click',
    'dblclick',
    'mousedown',
    'mouseup',
    'mouseout',
    'mouseover',
    'remove',
    'infowindowclose',
    'infowindowopen',
    'dragstart',
    'dragging',
    'dragend',
    'rightclick'
  ])
  const { ready } = useLifeCycle()
  let marker: BMapGL.Marker

  useBaseMapEffect((map: BMapGL.Map) => {
    const cal = () => {
      marker && map.removeOverlay(marker)
    }
    const init = () => {
      if (!props.position) return
      const {
        position,
        offset,
        enableMassClear,
        enableDragging,
        enableClicking,
        raiseOnDrag,
        draggingCursor,
        rotation,
        title,
        icon,
        zIndex
      } = props
      const options: BMapGL.MarkerOptions = {
        offset: new BMapGL.Size(offset.x, offset.y),
        enableMassClear,
        enableDragging,
        enableClicking,
        raiseOnDrag,
        draggingCursor,
        title
      }
      if (icon) {
        options.icon = getIconConfig()
      }
      marker = new BMapGL.Marker(new BMapGL.Point(position.lng, position.lat), options)
      setRotation(rotation)
      isDef(zIndex) && setZIndex(zIndex!)
      // 在地图上添加点标记
      map.addOverlay(marker)
      bindEvents(props, vueEmits, marker)
      ready(map, marker)
    }

    init()
    // 监听值变化
    watch(
      () => props.position,
      callWhenDifferentValue((n) => {
        marker ? setPosition(n) : init()
      }),
      { deep: true }
    )
    watch(() => props.icon, callWhenDifferentValue(setIcon), { deep: true })
    watch(() => props.offset, callWhenDifferentValue(setOffset), { deep: true })
    watch(() => props.enableDragging, setDragging)
    watch(() => props.enableMassClear, setMassClear)
    watch(() => props.rotation, setRotation)
    return cal
  })

  provide('getOverlayInstance', () => marker)

  // 获取图标配置
  function getIconConfig(): BMapGL.Icon {
    const defaultIcons = useMarkerDefaultIcons()
    const { icon } = props
    if (isString(icon) && defaultIcons[icon as string]) {
      return defaultIcons[icon as string]
    } else {
      // @ts-ignore
      const { anchor, imageOffset, imageSize, imageUrl, printImageUrl } = icon as MarkerCustomIcon
      const iconOptions: BMapGL.IconOptions = {
        imageSize: new BMapGL.Size(imageSize.width, imageSize.height)
      }
      if (anchor) {
        iconOptions.anchor = new BMapGL.Size(anchor.x, anchor.y)
      }
      if (imageOffset) {
        iconOptions.imageOffset = new BMapGL.Size(imageOffset.x, imageOffset.y)
      }
      if (printImageUrl) {
        iconOptions.printImageUrl = printImageUrl
      }
      return new BMapGL.Icon(imageUrl, new BMapGL.Size(imageSize.width, imageSize.height), iconOptions)
    }
  }
  function setZIndex(zIndex: number) {
    console.log('shezhi marker')
    marker.setZIndex(zIndex)
  }
  function setPosition(position: MarkerPosition) {
    position && position.lat && position.lng && marker.setPosition(new BMapGL.Point(position.lng, position.lat))
  }
  function setIcon() {
    marker.setIcon(getIconConfig())
  }
  function setDragging(enableDragging: boolean): void {
    enableDragging ? marker!.enableDragging() : marker!.disableDragging()
  }
  function setMassClear(enableMassClear: boolean): void {
    enableMassClear ? marker!.enableMassClear() : marker!.disableMassClear()
  }
  function setOffset(offset: MarkerOffset) {
    marker.setOffset(new BMapGL.Size(offset.x, offset.y))
  }
  function setRotation(rotation: number) {
    marker.setRotation(rotation)
  }
</script>
<script lang="ts">
  export default {
    name: 'BMarker'
  }
</script>

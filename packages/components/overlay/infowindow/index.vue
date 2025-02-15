<template>
  <div style="display: none">
    <div ref="infoWindowContainer" v-bind="$attrs">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {  ref, watch, withDefaults, onUpdated, nextTick, computed, provide  } from 'vue-demi'
  import useBaseMapEffect from '../../../hooks/useBaseMapEffect'
  import bindEvents, { Callback } from '../../../utils/bindEvents'
  import useLifeCycle from '../../../hooks/useLifeCycle'
  import { callWhenDifferentValue } from '../../../utils/index'
  export type InfoWindowPosition = {
    /**
     * 地理经度
     */
    lng: number
    /**
     * 地理纬度
     */
    lat: number
  }
  export interface InfoWindowProps {
    modelValue?: boolean
    title?: string
    position: InfoWindowPosition
    width?: 0 | RangeOf2<220, 730>
    height?: 0 | RangeOf2<60, 650>
    /**
     * 信息窗最大化时的宽度，单位像素。取值范围：220 - 730
     */
    maxWidth?: RangeOf2<220, 730>
    /**
     * 控件的偏移值
     */
    offset?: {
      x: number
      y: number
    }
    // enableMaximize?: boolean
    enableAutoPan?: boolean
    enableCloseOnClick?: boolean
    onClose?: Callback
    onOpen?: Callback
    onMaximize?: Callback
    onRestore?: Callback
    onClickclose?: Callback
  }
  const infoWindowContainer = ref<HTMLDivElement>()
  const props = withDefaults(defineProps<InfoWindowProps>(), {
    modelValue: false,
    title: '',
    width: 0,
    height: 0,
    maxWidth: 220,
    offset: () => ({
      x: 0,
      y: 0
    }),
    // enableMaximize: false,
    enableAutoPan: true,
    enableCloseOnClick: true
  })
  const vueEmits = defineEmits([
    'initd',
    'unload',
    'close',
    'open',
    'maximize',
    'restore',
    'clickclose',
    'update:modelValue'
  ])

  const visible = computed({
    get() {
      return props.modelValue
    },
    set(value) {
      vueEmits('update:modelValue', value)
    }
  })

  const { ready } = useLifeCycle()
  let infoWindow: BMapGL.InfoWindow
  let _map: BMapGL.Map
  useBaseMapEffect((map: BMapGL.Map) => {
    _map = map
    const cal = () => {
      infoWindow && map.removeOverlay(infoWindow)
    }
    const init = () => {
      const { title, width, height, enableAutoPan, maxWidth, offset, enableCloseOnClick } = props
      const options: BMapGL.InfoWindowOptions = {
        width,
        height,
        title,
        maxWidth,
        enableAutoPan,
        enableCloseOnClick,
        offset: new BMapGL.Size(offset.x, offset.y)
      }
      infoWindow = new BMapGL.InfoWindow(infoWindowContainer.value?.innerHTML || '', options)
      infoWindow.addEventListener('close', () => {
        if (props.modelValue) visible.value = false
      })
      infoWindow.addEventListener('open', () => {
        if (!props.modelValue) visible.value = true
      })
      redraw()
      map.addOverlay(infoWindow)
      bindEvents(props, vueEmits, infoWindow)
    }

    init()
    ready(map, infoWindow)
    // 监听值变化
    watch(() => props.position, callWhenDifferentValue(setPosition), { deep: true })
    watch(() => props.offset, callWhenDifferentValue(setOffset), { deep: true })
    watch(() => props.title, setTitle)
    watch(() => props.width, setWidth)
    watch(() => props.height, setHeight)
    watch(() => props.maxWidth, setMaxWidth)
    watch(() => props.enableAutoPan, setAutoPan)
    watch(() => props.enableCloseOnClick, setCloseOnClick)
    watch(
      () => props.modelValue,
      callWhenDifferentValue(() => {
        props.modelValue ? open() : close()
      })
    )

    if (props.modelValue) {
      // 多个 infoWindow, 显示最后一个实例, 其他实例同步显隐状态
      nextTick(() => {
        open()
        nextTick(() => {
          !infoWindow._visible && (visible.value = false)
        })
      })
    }
    return cal
  })
  onUpdated(() => {
    if (infoWindow && infoWindow.isOpen()) {
      setContent(infoWindowContainer.value?.innerHTML || '')
      redraw()
    }
  })

  provide('getOverlayInstance', () => infoWindow)

  function open() {
    const { position } = props
    _map.openInfoWindow(infoWindow, new BMapGL.Point(position.lng, position.lat))
    visible.value = true
  }
  function close() {
    infoWindow.hide()
    visible.value = false
  }

  function redraw() {
    infoWindow.redraw()
    Array.prototype.forEach.call(infoWindowContainer.value?.querySelectorAll('img') || [], (imgEl) => {
      imgEl.onload = () => {
        infoWindow.redraw()
      }
    })
  }

  function setTitle(title: string) {
    infoWindow.setTitle(title)
  }
  function setHeight(height: number) {
    infoWindow.setHeight(height)
  }
  function setWidth(width: number) {
    infoWindow.setWidth(width)
  }
  function setMaxWidth(maxWidth: number) {
    infoWindow.setMaxWidth(maxWidth)
  }
  // function setMaximize(maximize: boolean) {
  // 	maximize ? infoWindow.enableMaximize() : infoWindow.disableMaximize()
  // }
  function setAutoPan(autoPan: boolean) {
    autoPan ? infoWindow.enableAutoPan() : infoWindow.disableAutoPan()
  }
  function setCloseOnClick(closeOnClick: boolean) {
    closeOnClick ? infoWindow.enableCloseOnClick() : infoWindow.disableCloseOnClick()
  }

  function setPosition(position: InfoWindowPosition) {
    infoWindow.setPosition(new BMapGL.Point(position.lng, position.lat))
  }
  function setContent(content: string): void {
    infoWindow.setContent(content)
  }
  function setOffset(offset: { x: number; y: number }): void {
    infoWindow.setOffset(new BMapGL.Size(offset.x, offset.y))
  }
</script>

<script lang="ts">
  export default {
    name: 'BInfoWindow'
  }
</script>

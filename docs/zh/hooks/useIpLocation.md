# useIpLocation <Badge type="tip" text="^0.0.33" />

用于获取用户所在的城市位置信息。(根据用户 IP 自动定位到城市)

## 用法

```ts
const { get, location, isLoading } = useIpLocation(map)
```

### 参数

| 参数 | 描述                                                                               | 类型       | 默认值 |
| ---- | ---------------------------------------------------------------------------------- | ---------- | ------ |
| map  | `Map`地图组件`ref`引用，可选；如果传递该参数，则会在定位成功后地图自动跳转到定位点 | `Ref<Map>` | -      |

### 引用

| 引用      | 描述                                                   | 类型                                          |
| --------- | ------------------------------------------------------ | --------------------------------------------- |
| isLoading | 是否在获取中                                           | `boolean`                                     |
| location  | 定位信息                                               | `{ point: Point code: number name: string }` |
| get       | 获取定位方法，需要在`Map`组件`initd`事件触发后才可调用 | `() => void`                                  |

## 示例

<div>
  <Map enableScrollWheelZoom ref="map" @initd="get" >
    <template v-if="!isLoading">
      <Marker :position="location.point"></Marker>
    </template>
  </Map>
  <div class="state" v-if="!isLoading">
    <h5>定位结果:</h5>
    <span>城市 - {{ location.name }}</span>
    <span>纬度 - {{ location.point?.lat }}</span>
    <span>经度 - {{ location.point?.lng }}</span>
  </div>
  <div class="state"  v-else>
    定位中...
  </div>
</div>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useIpLocation } from '../../../packages'
  const map = ref()
  const { get, location, isLoading } = useIpLocation(map)
</script>

<style>
  .state {
    margin-top: 15px;
  }
  .state span {
    margin-right: 25px;
  }
</style>

:::details 点击查看代码

<!-- prettier-ignore -->
```html
<div>
  <Map enableScrollWheelZoom ref="map" @initd="get" >
    <template v-if="!isLoading">
      <Marker :position="location.point"></Marker>
    </template>
  </Map>

  <div class="state" v-if="!isLoading">
    <h5>定位结果:</h5>
    <span>城市 - {{ location.name }}</span>
    <span>纬度 - {{ location.point?.lat }}</span>
    <span>经度 - {{ location.point?.lng }}</span>
  </div>
  <div class="state"  v-else>
    定位中...
  </div>
</div>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useIpLocation, Marker } from 'vue3-baidu-map-gl'
  const map = ref()
  const { get, location, isLoading } = useIpLocation(map)
</script>

<style>
  .state {
    margin-top: 15px;
  }
  .state span {
    margin-right: 25px;
  }
</style>
```

:::

## TS 类型定义参考

```ts
import { Ref } from 'vue'
/**
 * 地图经纬度点
 */
type Point = {
  lng: number
  lat: number
}
/**
 * ip定位
 */
export declare function useIpLocation(map?: any): {
  location: Ref<{
    point: Point
    code: number
    name: string
  }>
  get: () => void
}
```
import { defineStore, storeToRefs } from 'pinia'
import itemlist from '@/assets/itemlist.json'
import { ref, watch } from 'vue'

/** 带缓存的ref */
export function withStorageRef<T>(key: string, value: T) {
  const v1 = window.localStorage.getItem(key)
  const v2 = v1 ? JSON.parse(v1) : undefined
  const reactive = ref<T>(v2?.value || value)
  watch(reactive, (val) => {
    const v1 = JSON.stringify({ value: val })
    window.localStorage.setItem(key, v1)
  })
  return reactive
}

export const useStore = defineStore('utils', () => {
  return {
    /** 服务器ID */
    worldid: withStorageRef('901b82a1a948', '1'),
    // 玩家角色ID
    roleid: withStorageRef('c0b2f9d8737c', ''),

    /// 发送物品ID
    itemlist: ref(itemlist), // 物品列表选项
  }
})

export function useStoreRefs() {
  const store = useStore()
  return storeToRefs(store)
}

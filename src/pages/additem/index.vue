<!-- 向指定角色发送金币 -->
<!-- 
增加物品的GM命令
additem {物品ID} {数量}

减少物品的GM命令
subitem {物品ID} {数量}
-->

<script setup lang="ts">
import { useStoreRefs, withStorageRef } from '@/utils/store'
import { executeGmCommand, checkSumbitForm } from '@/utils/api'

const { itemlist, worldid, roleid } = useStoreRefs()
const item = withStorageRef<number | undefined>('d84743f67e84', undefined)
const count = withStorageRef('08c916f2e54e', 1)

const onSubmit = async (mode?: '+' | '-') => {
  const check = {
    请输入服务器ID: !!worldid.value,
    请输入角色ID: !!roleid.value,
    请选择物品: !!item.value,
    请输入数量: !!count.value,
  }
  const data: Record<string, any> = {
    worldid: worldid.value,
    roleid: roleid.value,
  }
  const _id = item.value! % 430000000
  if (mode && mode === '-') {
    data.gm = `subitem ${_id} ${count.value}`
  } else {
    data.gm = `additem ${_id} ${count.value}`
  }
  if (checkSumbitForm(check) === true) {
    await executeGmCommand(data)
  }
}
</script>

<template>
  <div class="index">
    <div class="center">
      <!-- 服务器ID -->
      <div class="form-item">
        <div class="form-item-title">服务器ID</div>
        <div class="form-item-value">
          <el-input class="form-input-100" v-model="worldid" placeholder="请输入服务器ID" />
        </div>
      </div>

      <!-- 玩家角色ID -->
      <div class="form-item">
        <div class="form-item-title">玩家角色ID</div>
        <div class="form-item-value">
          <el-input class="form-input-100" v-model="roleid" placeholder="请输入玩家角色ID" />
        </div>
      </div>

      <!-- 选择物品 -->
      <div class="form-item">
        <div class="form-item-title">选择物品</div>
        <div class="form-item-value">
          <el-select
            class="form-input-100"
            filterable
            v-model="item"
            :options="itemlist"
            :props="{ value: 'id', label: 'name' }"
            placeholder="请选择物品"
          />
        </div>
      </div>

      <!-- 物品数量 -->
      <div class="form-item">
        <div class="form-item-title">物品数量</div>
        <div class="form-item-value">
          <el-input-number class="form-input-50" v-model="count" :min="1" :max="99999" />
        </div>
      </div>

      <!-- 提交表单 -->
      <div class="submit">
        <el-button type="primary" @click="onSubmit('+')">增加物品</el-button>
        <el-button type="danger" @click="onSubmit('-')">减少物品</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/page.css';
</style>

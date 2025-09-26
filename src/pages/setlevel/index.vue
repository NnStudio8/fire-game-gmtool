<!-- 设置角色等级 -->
<!-- 
设置角色等级的GM命令
sl {目标等级}
-->

<script setup lang="ts">
import { useStoreRefs, withStorageRef } from '@/utils/store'
import { executeGmCommand, checkSumbitForm } from '@/utils/api'

const { worldid, roleid } = useStoreRefs()
const setlevel = withStorageRef('c70bf6074376', 1)

const onSubmit = async () => {
  const check = {
    请输入服务器ID: !!worldid.value,
    请输入角色ID: !!roleid.value,
    请输入角色等级: !!setlevel.value,
  }
  const data: Record<string, any> = {
    worldid: worldid.value,
    roleid: roleid.value,
    gm: `sl ${setlevel.value}`,
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

      <!-- 角色等级 -->
      <div class="form-item">
        <div class="form-item-title">角色等级</div>
        <div class="form-item-value">
          <el-input-number class="form-input-50" v-model="setlevel" :min="1" :max="1000" />
        </div>
      </div>

      <!-- 提交表单 -->
      <div class="submit">
        <el-button type="primary" @click="onSubmit">设置等级</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/page.css';
</style>

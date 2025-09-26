<!-- 角色跳关 -->
<!-- 
角色跳关的GM命令
passlevel {目标关卡 + 1000}
-->

<script setup lang="ts">
import { useStoreRefs, withStorageRef } from '@/utils/store'
import { executeGmCommand, checkSumbitForm } from '@/utils/api'

const { worldid, roleid } = useStoreRefs()
const passlevel = withStorageRef('f59286951169', 1)

const onSubmit = async () => {
  const check = {
    请输入服务器ID: !!worldid.value,
    请输入角色ID: !!roleid.value,
    请输入目标关卡: !!passlevel.value,
  }
  const data: Record<string, any> = {
    worldid: worldid.value,
    roleid: roleid.value,
    gm: `passlevel ${passlevel.value + 1000}`,
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

      <!-- 目标关卡 -->
      <div class="form-item">
        <div class="form-item-title">目标关卡</div>
        <div class="form-item-value">
          <el-input-number class="form-input-50" v-model="passlevel" :min="1" :max="300" />
        </div>
      </div>

      <!-- 提交表单 -->
      <div class="submit">
        <el-button type="primary" @click="onSubmit">完美通关</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/page.css';
</style>

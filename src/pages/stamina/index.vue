<!-- 向指定角色增发送体力 -->
<!-- 
增加体力的GM命令
addmoney 1 {体力数量}

减少体力的GM指令
submoney 1 {体力数量}
-->

<script setup lang="ts">
import { useStoreRefs, withStorageRef } from '@/utils/store'
import { executeGmCommand, checkSumbitForm } from '@/utils/api'

const { worldid, roleid } = useStoreRefs()
const stamina = withStorageRef('9ca77e777d2e', 10)

const onSubmit = async (mode?: '+' | '-') => {
  const check = {
    请输入服务器ID: !!worldid.value,
    请输入角色ID: !!roleid.value,
    请输入体力数量: !!stamina.value,
  }
  const data: Record<string, any> = {
    worldid: worldid.value,
    roleid: roleid.value,
  }
  if (mode && mode === '-') {
    data.gm = `submoney 1 ${stamina.value}`
  } else {
    data.gm = `addmoney 1 ${stamina.value}`
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

      <!-- 钻石数量 -->
      <div class="form-item">
        <div class="form-item-title">体力数量</div>
        <div class="form-item-value">
          <el-input-number class="form-input-50" v-model="stamina" :min="1" :max="10000" />
        </div>
      </div>

      <!-- 提交表单 -->
      <div class="submit">
        <el-button type="primary" @click="onSubmit('+')">增加体力</el-button>
        <el-button type="danger" @click="onSubmit('-')">减少体力</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/page.css';
</style>

<!-- 向指定角色增发送金币 -->
<!-- 
增加金币的GM命令
addgold {金币数量}
addg {金币数量}
addmoney 2 {金币数量}

减少金币的GM指令
submoney 2 {金币数量}
-->

<script setup lang="ts">
import { useStoreRefs, withStorageRef } from '@/utils/store'
import { executeGmCommand, checkSumbitForm } from '@/utils/api'

const { worldid, roleid } = useStoreRefs()
const gold = withStorageRef('7c6c4784782d', 1000)

const onSubmit = async (mode?: '+' | '-') => {
  const check = {
    请输入服务器ID: !!worldid.value,
    请输入角色ID: !!roleid.value,
    请输入金币数量: !!gold.value,
  }
  const data: Record<string, any> = {
    worldid: worldid.value,
    roleid: roleid.value,
  }
  if (mode && mode === '-') {
    data.gm = `submoney 2 ${gold.value}`
  } else {
    data.gm = `addgold ${gold.value}`
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

      <!-- 金币数量 -->
      <div class="form-item">
        <div class="form-item-title">金币数量</div>
        <div class="form-item-value">
          <el-input-number class="form-input-50" v-model="gold" :min="1" :max="1000000" />
        </div>
      </div>

      <!-- 提交表单 -->
      <div class="submit">
        <el-button type="primary" @click="onSubmit('+')">增加金币</el-button>
        <el-button type="danger" @click="onSubmit('-')">减少金币</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/page.css';
</style>

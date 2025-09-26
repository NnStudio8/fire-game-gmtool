<!-- 设置角色倒计时 -->
<!-- 
设置角色倒计时的GM命令
settime {YYYY-MM-DD HH:mm:ss}
-->

<script setup lang="ts">
import { useStoreRefs } from '@/utils/store'
import { executeGmCommand, checkSumbitForm } from '@/utils/api'
import dayjs from 'dayjs'

const { worldid, roleid } = useStoreRefs()

const onSubmit = async () => {
  const check = {
    请输入服务器ID: !!worldid.value,
    请输入角色ID: !!roleid.value,
  }
  const data: Record<string, any> = {
    worldid: worldid.value,
    roleid: roleid.value,
  }
  if (checkSumbitForm(check) === true) {
    const val1 = 3 + Math.floor(Math.random() * 200)
    const val2 = Math.floor(Math.random() * 86400)
    const val3 = dayjs().subtract(val1, 'day').add(val2, 'second')
    let value = val3.format('YYYY-MM-DD HH:mm:ss')

    await executeGmCommand({ ...data, gm: `settime ${value}` })
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(undefined)
      }, 500)
    })

    value = dayjs().format('YYYY-MM-DD HH:mm:ss')
    await executeGmCommand({ ...data, gm: `settime ${value}` })
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

      <!-- 提交表单 -->
      <div class="submit">
        <el-button type="primary" @click="onSubmit">清空倒计时</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/page.css';
</style>

<!-- 注册账号 -->

<script setup lang="ts">
import { executeRegister, checkSumbitForm } from '@/utils/api'
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const confirm = ref('')
const onSubmit = async () => {
  const check = {
    请输入用户名: !!username.value,
    请输入密码: !!password.value,
    请确认密码: !!confirm.value,
  }
  const data: Record<string, any> = {
    username: username.value,
    password: password.value,
    confirm_password: confirm.value,
  }
  if (checkSumbitForm(check) === true) {
    await executeRegister(data)
  }
}
</script>

<template>
  <div class="index">
    <div class="center">
      <!-- 用户名 -->
      <div class="form-item">
        <div class="form-item-title">用户名</div>
        <div class="form-item-value">
          <el-input
            class="form-input-100"
            v-model="username"
            placeholder="请输入用户名（手机号码）"
          />
        </div>
      </div>

      <!-- 密码 -->
      <div class="form-item">
        <div class="form-item-title">密码</div>
        <div class="form-item-value">
          <el-input
            class="form-input-100"
            v-model="password"
            type="password"
            placeholder="请输入密码（至少6位，建议用数字）"
          />
        </div>
      </div>

      <!-- 确认密码 -->
      <div class="form-item">
        <div class="form-item-title">确认密码</div>
        <div class="form-item-value">
          <el-input
            class="form-input-100"
            v-model="confirm"
            type="password"
            placeholder="请确认密码"
          />
        </div>
      </div>

      <!-- 提交表单 -->
      <div class="submit">
        <el-button type="primary" @click="onSubmit">注册</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/page.css';
</style>

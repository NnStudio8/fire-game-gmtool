<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useRouter } from 'vue-router'

const route = useRouter()
const title = document.title
</script>

<template>
  <el-container style="height: 100vh">
    <el-header style="padding: 0">
      <div class="header">{{ title }}</div>
    </el-header>
    <el-container class="container">
      <el-aside :style="{ width: '200px' }">
        <el-scrollbar>
          <el-menu router :default-active="route.currentRoute.value.path">
            <el-menu-item index="/charge">
              <el-icon><coin /></el-icon>
              <span>充值</span>
            </el-menu-item>
            <el-menu-item index="/register">
              <el-icon><watermelon /></el-icon>
              <span>注册</span>
            </el-menu-item>
            <el-menu-item index="/diamond">
              <el-icon><burger /></el-icon>
              <span>发送钻石</span>
            </el-menu-item>
            <el-menu-item index="/addgold">
              <el-icon><orange /></el-icon>
              <span>发送金币</span>
            </el-menu-item>
            <el-menu-item index="/additem">
              <el-icon><goods /></el-icon>
              <span>发送物品</span>
            </el-menu-item>
            <el-menu-item index="/stamina">
              <el-icon><chicken /></el-icon>
              <span>发送体力</span>
            </el-menu-item>
            <el-menu-item index="/passlevel">
              <el-icon><coffee /></el-icon>
              <span>角色跳关</span>
            </el-menu-item>
            <el-menu-item index="/setlevel">
              <el-icon><food /></el-icon>
              <span>角色等级</span>
            </el-menu-item>
            <el-menu-item index="/settime">
              <el-icon><clock /></el-icon>
              <span>倒计时</span>
            </el-menu-item>
            <el-menu-item index="/gmtext">
              <el-icon><monitor /></el-icon>
              <span>GM命令</span>
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: var(--color-background-soft);
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px 0;
}
.container {
  height: 100%;
  min-width: 1024px;
  box-sizing: border-box;
  padding: 0 10px;
}
.main {
  min-height: 100%;
}
</style>

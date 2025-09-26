<script setup lang="ts">
import { useStoreRefs, withStorageRef } from '@/utils/store'
import { executeCharge, checkSumbitForm } from '@/utils/api'

const options = [
  { value: '500201', label: '首充6元' },
  { value: '500202', label: '首充98元' },
  { value: '500203', label: '首充198元' },
  { value: '500101', label: '超值月卡' },
  { value: '500102', label: '福利月卡' },
  { value: '500001', label: '6元' },
  { value: '500002', label: '30元' },
  { value: '500003', label: '68元' },
  { value: '500004', label: '128元' },
  { value: '500005', label: '328元' },
  { value: '500006', label: '648元' },
  { value: '501001', label: '解锁高级签到奖励12元' },
  { value: '500113', label: '星级通行证' },
  { value: '500114', label: '至尊通行证' },
  { value: '500501', label: '高级基金' },
]

const { roleid } = useStoreRefs()
const checknum = withStorageRef('2dc3ceb2a47d', '123456') // GM校验码
const chargeid = withStorageRef('8f2a15ce194e', '') // 充值档位
const count = withStorageRef('0694322f13bf', 1) // 充值次数

const onSubmit = async () => {
  const check = {
    请输入GM校验码: !!checknum.value,
    请输入角色ID: !!roleid.value,
    请选择充值档位: !!chargeid.value,
    请输入充值次数: !!count.value,
  }
  const data: Record<string, any> = {
    type: 'dfreg',
    checknum: checknum.value,
    role_id: roleid.value,
    amount: chargeid.value,
  }
  if (checkSumbitForm(check) === true) {
    await executeCharge(data, count.value)
  }
}
</script>

<template>
  <div class="index">
    <div class="center">
      <!-- GM校验码 -->
      <div class="form-item">
        <div class="form-item-title">GM校验码</div>
        <div class="form-item-value">
          <el-input class="form-input-100" v-model="checknum" placeholder="请输入GM校验码" />
        </div>
      </div>

      <!-- 玩家角色ID -->
      <div class="form-item">
        <div class="form-item-title">玩家角色ID</div>
        <div class="form-item-value">
          <el-input class="form-input-100" v-model="roleid" placeholder="请输入玩家角色ID" />
        </div>
      </div>

      <!-- 充值档位 -->
      <div class="form-item">
        <div class="form-item-title">充值档位</div>
        <div class="form-item-value">
          <el-select
            class="form-input-100"
            filterable
            v-model="chargeid"
            :options="options"
            placeholder="请选择充值档位"
          />
        </div>
      </div>

      <!-- 充值次数 -->
      <div class="form-item">
        <div class="form-item-title">充值次数</div>
        <div class="form-item-value">
          <el-input-number class="form-input-50" v-model="count" :min="1" :max="100" />
        </div>
      </div>

      <!-- 提交表单 -->
      <div class="submit">
        <el-button type="primary" @click="onSubmit">充值</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/page.css';
</style>

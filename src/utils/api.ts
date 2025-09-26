import axios from 'axios'
import { ElMessage } from 'element-plus'

/** 校验提交表单 */
export function checkSumbitForm(props: Record<string, boolean>): boolean {
  for (const text of Object.keys(props)) {
    if (props[text] !== true) {
      ElMessage.error(text)
      return false
    }
  }
  return true
}

/** 向服务器发送GM命令 */
export async function executeGmCommand(data: Record<string, any>) {
  try {
    const params = { target: 1, ...data }
    const res = await axios.request({
      url: '/misc/world_gm.php',
      method: 'GET',
      params: params,
    })
    if (res.status !== 200) throw '执行失败，接口异常'
    const text = String(res.data).trim()
    if (!text.match(/[ok|succ]/i)) throw text
    ElMessage.success(`成功... ${text}`)
  } catch (error) {
    if (typeof error === 'string') {
      ElMessage.error(error)
    }
  }
}

/** 向服务器发送充值指令 */
export async function executeCharge(data: Record<string, any>, loop: number = 1) {
  try {
    let res = undefined
    const contentType = 'application/x-www-form-urlencoded'
    for (let i = 0; i < loop; i++) {
      res = await axios.request({
        url: '/bi/charge1.php',
        headers: { 'Content-Type': contentType },
        method: 'POST',
        data: data,
      })
      if (res.status !== 200) {
        throw '充值失败，接口异常'
      }
    }
    const text = String(res?.data || '').trim()
    if (!text.includes('成功')) throw text
    ElMessage.success('充值成功')
  } catch (error) {
    if (typeof error === 'string') {
      ElMessage.error(error)
    }
  }
}

/** 向服务器发送注册指令 */
export async function executeRegister(data: Record<string, any>) {
  try {
    const contentType = 'application/x-www-form-urlencoded'
    const res = await axios.request({
      url: 'reg.php',
      headers: { 'Content-Type': contentType },
      method: 'POST',
      data: data,
    })
    if (res.status !== 200) throw '注册失败，接口异常'
    const text = String(res.data).trim()
    if (!text.includes('成功')) throw text
    ElMessage.success('注册成功')
  } catch (error) {
    if (typeof error === 'string') {
      ElMessage.error(error)
    }
  }
}

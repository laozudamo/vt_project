<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { loginForm } from '@/types/login'
import { userLogin } from '@/api/user'

const ruleFormRef = ref<FormInstance>()

const form = reactive <loginForm>({
  username: 'laozudaomo@gmail.com',
  password: '12123',
})

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (form.password !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}

const rules = reactive<FormRules>({
  username: [{ 
    type: 'email',
    message: 'Please input correct email address',
    trigger: ['blur', 'change'],
    required: true
  }],
  password: [{ validator: validatePass, trigger: 'blur',  required: true }],

})


const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl?.validate((valid) => {
    if (valid) {
      // 在store里面处理登录逻辑
      userLogin(form).then(res => {
        console.log('res', res)
      })
      console.log('submit!')
    } else {
      return false
    }
  })
}
</script>

<template>
  <div class="main">
    <el-form class="the-form" :rules="rules" label-position="left" label-width="80px" ref="ruleFormRef" :model="form"
      style="width: 350px" :status-icon="true"	>
      <h3 class="login-title">登 录</h3>
      <el-form-item label="账号:" prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input v-model="form.password" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="default" @click="submitForm(ruleFormRef)">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.main {
  background: url(../../assets/img/login-bg.jpeg) no-repeat center center;
}

.the-form {
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(20%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
}

.login-title {
  display: flex;
  justify-content: center;
}

:deep(.el-button) {
  width: 167px;
}
</style>
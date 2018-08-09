<template>
  <div class="login-container">
    <el-carousel height="600px">
      <el-carousel-item v-for="item in carouselSrc" :key="item">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
    <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
      <span class="go-back-yun">
        <i class="el-icon-arrow-left"></i>去云培训</span>
      <div class="login-top">
        <div>
          <img src="../../assets/404_images/img_loading.png" alt="logo">
          <span>云大学</span>
        </div>

        <p>企业（机构）账号登录</p>
      </div>
      <el-form-item prop="username">
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="请输入企业账号用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on" placeholder="请输入账号密码"></el-input>
      </el-form-item>
      <el-form-item prop="isRemember" class="is-remember">
        <el-checkbox v-model="loginForm.isRemember">记住密码</el-checkbox>
        <span class="forget-password" @click="findPwd">忘记密码</span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click.native.prevent="handleLogin">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'

export default {
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: '',
        isRemember: false
      },
      carouselSrc: [
        'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDtibLAOTCTtyPZ2vj1c5Y0icIndlOCXruoDvZ4ASLXDoIWyRKFlSdlCXPWAeiaHPh0Hk/510',
        'https://p.qpic.cn/qqconadmin/0/3a981ad59d0a43b5898e66a4e097dc23/0?tp=webp',
        'https://p.qpic.cn/qqconadmin/0/d6d3a944badc4e7381c58b6f7da9b866/0?tp=webp',
        'https://p.qpic.cn/qqconadmin/0/73e6fd89840f4abbb3d4713782cec696/0?tp=webp'
      ],
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      loading: false,
      pwdType: 'password'
    }
  },
  methods: {
    findPwd() {
      this.$router.push({ path: '/findPwd' })
    },
    handleLogin() {
      console.log(this.loginForm)
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          // this.$store
          //   .dispatch('Login', this.loginForm)
          //   .then(() => {
          //     this.loading = false
          //     this.$router.push({ path: '/' })
          //   })
          //   .catch(() => {
          //     this.loading = false
          //   })
          // 保存用户信息
          sessionStorage.setItem('userInfo', JSON.stringify(this.loginForm))
          this.loading = false
          this.$router.push({ path: '/' })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.login-container {
  width: 1200px;
  height: 600px;
  margin: auto;
  background-color: #ffffff;
  margin-top: calc(100vh / 2 - 300px);
  *zoom: 1;
  .el-carousel {
    float: left;
    width: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .login-form {
    padding: 10px;
    width: 50%;
    float: right;
    .go-back-yun {
      font-size: 12px;
      color: #aaaaaa;
    }
    .go-back-yun:hover{
        cursor: pointer;
    }
    .login-top {
      width: 100%;
      text-align: center;
      margin-top: 40px;
      img {
        width: 40px;
        height: 40px;
        vertical-align: middle;
      }
      span {
        color: #666666;
        display: inline-block;
        vertical-align: middle;
      }
      p {
        margin-top: 50px;
        margin-bottom: 60px;
        font-size: 18px;
        color: #666666;
      }
    }
    .el-form-item {
      margin-bottom: 40px;
      text-align: center;
      .el-input {
        width: 80%;
        height: 56px;
      }
      .el-button {
        width: 80%;
      }
    }
    .is-remember {
      margin-bottom: 5px;
      padding: 0 10%;
      text-align: left;
      .forget-password:hover{
        cursor: pointer;
      }
      .forget-password {
        display: inline-block;
        float: right;
        color: #999999;
      }
    }
  }
}
</style>

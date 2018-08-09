<template>
    <div class="login-container">
        <el-carousel height="600px">
            <el-carousel-item v-for="item in carouselSrc" :key="item">
                <img :src="item" alt="">
            </el-carousel-item>
        </el-carousel>
        <el-form class="login-form" autoComplete="on" :model="findPass" :rules="loginRules" ref="findPass" label-position="left">
            <span class="go-back-yun" @click="backLogin">
                <i class="el-icon-arrow-left"></i>返回登录</span>
            <div class="login-top">
                <p>找回密码</p>
            </div>
            <el-form-item prop="username">
                <el-input name="username" type="text" v-model="findPass.username" autoComplete="on" placeholder="请输入手机号／邮箱" />
            </el-form-item>
            <el-form-item prop="password">
                <el-input name="password" :type="pwdType" v-model="findPass.password" autoComplete="on" placeholder="请输入验证码"></el-input>
            </el-form-item>
            <el-form-item prop="validateCode" class="dynamic-validate">
                <el-input name="validateCode" :type="pwdType" v-model="findPass.validateCode" autoComplete="on" placeholder="动态验证码"></el-input>
                <el-button type="primary">
                    获取验证码
                </el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" :loading="loading">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { validateEmailorPhone } from '@/utils/validate'
export default {
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validateEmailorPhone(value)) {
        callback(new Error('请输入正确的手机号或邮箱地址'))
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
      findPass: {
        username: '',
        password: '',
        validateCode: ''
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
    backLogin() {
      this.$router.push({ path: '/login' })
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
    .go-back-yun:hover {
      cursor: pointer;
    }
    .login-top {
      width: 100%;
      text-align: center;
      margin-top: 40px;
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
      }
      .el-button {
        width: 80%;
      }
    }
    .dynamic-validate {
      .el-input {
        width: 60% !important;
      }
      .el-button {
        width: 20% !important;
      }
    }
  }
}
</style>

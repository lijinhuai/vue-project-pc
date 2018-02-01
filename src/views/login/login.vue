<style lang="less">
@import "./login.less";
</style>

<template>
  <div class="login" @keydown.enter="handleSubmit">
    <div class="login-title">
      <transition name="form-fade" mode="in-out">
      <div class="login-con" v-show="showLogin">
        <Card :bordered="false">
          <div class="form-con">
            <Form ref="loginForm" :model="form" :rules="rules">
              <FormItem prop="userName">
                <Input v-model="form.userName" size="large" placeholder="请输入用户名">
                <span slot="prepend">
                  <Icon :size="16" type="person"></Icon>
                </span>
                </Input>
              </FormItem>
              <FormItem prop="password">
                <Input type="password" v-model="form.password" size="large" placeholder="请输入密码">
                <span slot="prepend">
                  <Icon :size="14" type="locked"></Icon>
                </span>
                </Input>
              </FormItem>
              <FormItem>
                <Button @click="handleSubmit" :loading="loading" type="primary" size="large" long>登录</Button>
              </FormItem>
            </Form>
            <p class="login-tip">技术支持 苏州广达科技有限公司</p>
          </div>
        </Card>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [
          {
            required: true,
            message: '账号不能为空',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          }
        ]
      },
      showLogin: false,
      loading: false
    }
  },
  mounted () {
    this.showLogin = true
  },
  methods: {
    handleSubmit () {
      const _self = this
      const username = _self.form.userName
      const password = _self.form.password
      _self.$refs.loginForm.validate(valid => {
        if (valid) {
          _self.loading = true
          this.$store
            .dispatch('LoginByUsername', {
              username,
              password
            })
            .then(() => {
              _self.loading = false
              this.$router.push({
                name: 'home_index'
              })
            })
            .catch(() => {
              _self.loading = false
            })
        }
      })
    }
  }
}
</script>

<style scoped>
.ivu-card {
  background: transparent;
}
.ivu-card-head {
  border-bottom: none;
}

.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}
.form-fade-enter,
.form-fade-leave-active {
  transform: translate3d(0, -100px, 0);
}
</style>

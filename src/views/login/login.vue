<style lang="less">
  @import "./login.less";
</style>

<template>
  <div class="login" @keydown.enter="handleSubmit">
    <div class="login-title">
      <div class="login-con">
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
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          userName: 'admin',
          password: '123'
        },
        rules: {
          userName: [{
            required: true,
            message: '账号不能为空',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          }]
        },
        loading: false
      }
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
</style>

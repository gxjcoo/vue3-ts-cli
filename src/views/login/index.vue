<template>
  <div class="login">
    <div class="login-mask" />
    <div class="login-form-wrap">
      <div class="login-form mx-6">
        <div class="login-form__content px-2 py-10">
          <header>
            <img src="~@/assets/images/logo.png" class="mr-4" />
          </header>

          <a-form ref="formRef" class="mx-auto mt-10" :model="formData" :rules="formRules">
            <a-form-item name="account">
              <a-input v-model:value="formData.account" size="large" placeholder="vben" />
            </a-form-item>
            <a-form-item name="password">
              <a-input-password
                v-model:value="formData.password"
                autofocus="autofocus"
                size="large"
                visibilityToggle
                placeholder="123456"
              />
            </a-form-item>
            <a-form-item name="verify"> </a-form-item>
            <a-form-item>
              <a-button
                :loading="formState.loading"
                type="primary"
                size="large"
                class="rounded-sm"
                block
                @click="login"
                >登录</a-button
              >
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref, unref } from "vue";

  export default defineComponent({
    setup() {
      const formRef = ref<any>(null);

      const formData = reactive({
        account: "admin",
        password: "123456",
        verify: undefined,
      });
      const formState = reactive({
        loading: false,
      });

      const formRules = reactive({
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      });

      async function handleLogin() {
        const form = unref(formRef);
        if (!form) return;
        formState.loading = true;
        try {
          const data = await form.validate();
          console.log(data);
          const userInfo: String = "data";
          //登录漏逻辑
          // const userInfo = await login(
          //   toRaw({
          //     password: data.password,
          //     username: data.account,
          //   })
          // );
          if (userInfo) {
            alert("success");
          }
        } catch (error) {
          formState.loading = false;
        }
      }

      return {
        formRef,
        formData,
        formState,
        formRules,
        login: handleLogin,
      };
    },
  });
</script>
<style lang="less" scoped>
  @import (reference) "~@/assets/style/index.less";
  .login {
    position: relative;
    height: 100vh;
    background: url("~@/assets/images/login/login-bg.png") no-repeat;
    background-size: 100% 100%;

    &-mask {
      display: none;
      height: 100%;
      background: url("~@/assets/images/login/login-bg.png") no-repeat;
      background-size: 100% 100%;
    }

    &-form {
      width: 100%;
      background: @primary-color;
      border: 10px solid rgba(255, 255, 255, 0.5);
      border-width: 10px;
      border-radius: 4px;
      background-clip: padding-box;

      &-wrap {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
      }

      &__content {
        width: 100%;
        height: 100%;
        border: 1px solid #999;
        border-radius: 2px;

        header {
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            display: inline-block;
            width: 80px;
          }

          h1 {
            margin-bottom: 0;
            font-size: 24px;
            color: @primary-color;
            text-align: center;
          }
        }

        form {
          width: 80%;
        }
      }
    }
  }
</style>

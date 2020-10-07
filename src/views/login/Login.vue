<template>
  <div class="container d-flex">
    <div class="login-img">
      <img
        src="@/assets/login-image.png"
        alt="login-image"
      >
    </div>
    <div class="login-form">
      <form @submit.prevent="handleSubmit">
      <h3 class="title">join.tsh.io</h3>
        <div>
          <div class="header">Login</div>
          <span class="tip">Username</span>
          <v-text-field
            outlined
            dense
            placeholder="Enter username"
            class="inputs"
          ></v-text-field>
        </div>
        <div>
          <span class="tip">Password</span>
          <v-text-field
            outlined
            dense
            placeholder="Enter password"
            class="inputs"
          ></v-text-field>
        </div>
        <button
          class="button active"
          type="submit"
          @click="$router.push({ name: 'Products' })"
        >
          Log in
        </button>
        <button class="forgot-psw-btn">Forgot password?</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>
<style lang="scss" scoped>
@import './src/scss/variables.scss';

.button {
  color: $white;
  border-radius: 4px;
  width: 100%;
  height: 45px;
  &.active {
    background-color: $purple;
  }
  &:hover {
    background-color: $purple-hover;
  }
}

.tip {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: $black;
}

.forgot-psw-btn {
  color: $grey;
  text-decoration-line: underline;
}

.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 0;
}

.header {
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 40px;
  color: $black;
}

.inputs {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: $black;
  width: 35vw;
  height: auto;
}

.title {
  position: absolute;
  top: 0;
}

@media screen and (min-width: 250px) and (max-width: 850px) {
  .header {
    margin-bottom: 10%;
    margin-top: 30%;
  }

  .login-img {
    display: none;
  }

  .login-form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
  }

  .inputs {
    width: 85vw;
    height: auto;
  }
}
</style>

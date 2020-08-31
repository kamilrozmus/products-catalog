<template>
  <div class="login">
    <h1>This is login page</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label>
          username:
          <input name="username" />
        </label>
      </div>
      <div>
        <label>
          password:
          <input name="password" type="password" />
        </label>
      </div>
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script src="./Login.js"></script>

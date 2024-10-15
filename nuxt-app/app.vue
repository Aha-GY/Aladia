<template>
  <div class="App">
    <Login />
  </div>
</template>

<script>
import Login from "./components/Pages/Login.vue";

export default {
  name: "App",
  components: {
    Login,
  },
};
</script>

<style scoped>
.App {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: black;
  margin: 0;
  padding: 0;
}
</style>

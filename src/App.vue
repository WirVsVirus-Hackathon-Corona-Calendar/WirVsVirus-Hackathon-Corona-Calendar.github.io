<template>
  <div id="app">
    <Header language="Deutsch" language_short="DE" />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;

  font-family: Nunito;
}

p {
  font-weight: 200;
}

button {
  font-weight: 600;
  font-size: 36px;

  background: url("./assets/diary.png");
  margin: auto;
  padding: 0 1em;
  border-radius: 1em;
  border-color: #f7c48d;
  border-width: 3px;
  border-style: solid;

  font-family: Nunito;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6c4c46;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>

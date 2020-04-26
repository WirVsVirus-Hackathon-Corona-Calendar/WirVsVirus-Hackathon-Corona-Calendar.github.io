<template>
  <div id="app">
    <Header language="Deutsch" language_short="DE" />
    <router-view id="app_content" />
    <Footer id="app_footer" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;

  font-family: Nunito;
}

html{
  min-height: 100vh;
}

body{
  min-height: 100vh;
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
  min-height: 100vh;
}

#app_content{
  min-height: calc(100vh - 80px - 150px);
  height:100%;
}

#app_footer{
  bottom: 0;
}

.margined {
  margin: 1em 0;
}
</style>

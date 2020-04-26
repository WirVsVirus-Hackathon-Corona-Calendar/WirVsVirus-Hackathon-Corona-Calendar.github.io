import Vue from "vue";
import router from "./router";
import VueRouter from "vue-router";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

// This fixes "old" builds, from before the completedChallenges where an object
const localStorage = JSON.parse(
  window.localStorage.getItem("completedChallenges")
);
const completedChallengesArray = localStorage || [];

const fixedChallengesArray =
  completedChallengesArray.map(challenge =>
    typeof challenge === "string" ? { id: challenge } : challenge
  ) || [];

window.localStorage.setItem(
  "completedChallenges",
  JSON.stringify(fixedChallengesArray)
);

new Vue({
  render: h => h(App),
  router
}).$mount("#app");

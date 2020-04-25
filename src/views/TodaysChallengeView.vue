<template>
  <div
    :style="{ backgroundImage: `url('${todaysChallenge.icon_url}')` }"
    class="container"
    id="todaysChallengeContainer"
  >
    <div class="box">
      <h1 class="text" id="todaysChallengeText">
        Dein heutiges Abenteuer: {{ todaysChallenge.titel }}
      </h1>
    </div>

    <button v-on:click="startChallenge" id="clickHereButton">
      Hier klicken
    </button>
  </div>
</template>

<script>
import ChallengeService from "../service/challenge-service";
import router from "../router";
export default {
  name: "TodaysChallengeView",
  data() {
    return {
      todaysChallenge: null
    };
  },
  created() {
    this.fetchChallenge();
  },
  methods: {
    fetchChallenge() {
      ChallengeService.instance.next.then(challenge => {
        this.todaysChallenge = challenge;
      });
    },
    startChallenge() {
      router.push(
        "/challenges/" + this.todaysChallenge.id.toString() + "/before"
      );
    }
  }
};
</script>

<style>
.container {
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
}
#todaysChallengeContainer {
  width: 100vw;
  height: calc(100vh - 80px);
}

.box {
  background: url("../assets/diary.png");
  width: 15em;
  margin: auto;
  padding: 0 1em;
  border-radius: 1em;
  border-color: #f7c48d;
  border-width: 3px;
  border-style: solid;
}

.text {
  font-family: Nunito;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6c4c46;
}

#todaysChallengeText {
  font-weight: 800;
  font-size: 36px;
}

#clickHereButton {
  font-weight: 600;
  font-size: 36px;
  width: 10em;
}
</style>

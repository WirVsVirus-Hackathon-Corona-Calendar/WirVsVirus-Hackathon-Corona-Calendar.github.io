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

    <button v-on:click="startChallenge" id="clickHereButton" class="box text">
      Hier klicken
    </button>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
export default {
  name: "TodaysChallengeView",
  data() {
    return {
      loading: false,
      post: null,
      error: null,
      todaysChallenge: null
    };
  },
  created() {
    this.fetchChallenge();
  },
  methods: {
    fetchChallenge() {
      axios
        .get(
          "https://e3bzj7x3ck.execute-api.eu-west-1.amazonaws.com/v1/challenges"
        )
        .then(response => response.data)
        .then(data => data[0])
        .then(challenge => (this.todaysChallenge = challenge));
    },
    startChallenge() {
      router.push("/challenges/" + this.todaysChallenge.id.toString());
    }
  }
};
</script>

<style>
.container {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  z-index: -1;
}
#todaysChallengeContainer {
  width: 100%;
  height: 100%;
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

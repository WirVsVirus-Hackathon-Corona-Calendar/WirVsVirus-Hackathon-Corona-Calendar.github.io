<template>
  <div
    :style="{ backgroundImage: `url('${todaysChallenge.icon_url}')` }"
    class="bg"
    id="todaysChallengeContainer"
  >
    <div id="todaysChallengeTextContainer">
      <h1 id="todaysChallengeText">
        Dein heutiges Abenteuer: {{ todaysChallenge.titel }}
      </h1>
    </div>

    <button>Hier klicken</button>
  </div>
</template>

<script>
import axios from "axios";
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
    }
  }
};
</script>

<style>
.bg {
  /* The image used */
  background-image: url("../assets/Wald_SM_Header.png");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#todaysChallengeContainer {
  width: 100%;
  height: 100%;
}
#todaysChallengeTextContainer {
  background: url("../assets/diary.png");
  width: 15em;
  margin: auto;
  padding: 0 1em;
  border-radius: 1em;
  border-color: #f7c48d;
  border-width: 3px;
  border-style: solid;
}

#todaysChallengeText {
  font-family: Nunito;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6c4c46;
}
</style>

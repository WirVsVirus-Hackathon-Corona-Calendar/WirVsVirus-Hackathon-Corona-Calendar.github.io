<template>
  <div class="container">
    <h1>Es gibt derzeit keine weiteren Challenges.</h1>
    <h2>Komm doch morgen noch einmal vorbei!</h2>
    <img src="../assets/characters.png" alt="characters" />
    <button v-on:click="onDoneClicked" class="margined">
      Zurück
    </button>
  </div>
</template>

<script>
import ChallengeService from "../service/challenge-service";
import router from "../router";

export default {
  name: "NoChallengesView",
  created() {
    ChallengeService.instance.getById(this.challengeId).then(_challenge => {
      this.challenge = _challenge;
    });
  },
  methods: {
    onDoneClicked: function() {
      router.push("/");
    }
  }
};
</script>

<style scoped>
img {
  width: 25em;
  object-fit: cover;
  max-width: 90vw;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

p,
li,
h1 {
  margin-left: 2em;
  margin-right: 2em;
}
</style>

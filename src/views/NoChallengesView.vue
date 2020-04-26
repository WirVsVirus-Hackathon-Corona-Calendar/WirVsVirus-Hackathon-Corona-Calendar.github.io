<template>
  <div id="app">
    <h1>Es gibt derzeit keine weiteren challenges.</h1>
    <h2>Komm doch morgen noch einmal vorbei!</h2>
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
p,
li,
h1 {
  margin-left: 2em;
  margin-right: 2em;
}
</style>

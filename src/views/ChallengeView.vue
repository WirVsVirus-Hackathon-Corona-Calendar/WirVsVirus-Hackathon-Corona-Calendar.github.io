<template>
  <div id="app">
    <h1>Deine Challenge!</h1>
    <p>{{challenge.titel}}</p>
  </div>
</template>

<script>
import ChallengeService from "../service/challenge-service";

export default {
  name: "ChallengeView",
  props: ["challengeId"],
  data: () => {
    return {
      challenge: undefined
    };
  },
  created() {
    ChallengeService.instance.getById(this.challengeId).then(_challenge => {
      this.challenge = _challenge;
    });
  }
};
</script>

<style>
</style>

<template>
  <div id="app">
    <h1>{{challenge.titel}}</h1>
    <p>{{challenge.story_before}}</p>
    <button v-on:click="startChallenge">Zum Abenteuer!</button>
  </div>
</template>

<script>
import ChallengeService from "../service/challenge-service";
import router from "../router";

export default {
  name: "StoryBeforeView",
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
  },
  methods: {
    startChallenge: function() {
      router.push("/challenges/" + this.challengeId.toString());
    }
  }
};
</script>

<style>
</style>
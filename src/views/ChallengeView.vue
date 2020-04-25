<template>
  <div id="app">
    <h1>{{challenge.titel}}</h1>
    <h2>Das brauchst du</h2>
    <ul id="material" class="list">
      <li v-for="item in challenge.material" :key="item">{{ item }}</li>
    </ul>
    <h2>Anleitung</h2>
    <ul id="anleitung" class="list">
      <li v-for="item in challenge.anleitung" :key="item">{{ item }}</li>
    </ul>
    <div v-for="attachment in challenge.attachments" :key="attachment">
      <img :src="attachment" />
    </div>
    <button v-on:click="completeChallenge">Fertig!</button>
  </div>
</template>

<script>
import ChallengeService from "../service/challenge-service";
import router from "../router";

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
  },
  methods: {
    completeChallenge: function() {
      ChallengeService.instance.completeChallenge(this.challenge.id);
      router.push("/challenges/" + this.challengeId.toString() + "/after");
    }
  }
};
</script>

<style>
</style>

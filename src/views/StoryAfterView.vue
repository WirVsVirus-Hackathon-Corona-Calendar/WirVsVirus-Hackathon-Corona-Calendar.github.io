<template>
  <div id="app">
    <h1>{{ challenge.titel }}</h1>
    <p>{{ challenge.story_after }}</p>
    <button v-on:click="onDoneClicked" class="margined">
      Zurück zur Übersicht
    </button>
  </div>
</template>

<script>
import ChallengeService from "../service/challenge-service";
import router from "../router";

export default {
  name: "StoryAfter",
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
    onDoneClicked: function() {
      router.push("/today");
    }
  }
};
</script>

<style scoped>
p,
li {
  margin-left: 2em;
  margin-right: 2em;
}
</style>

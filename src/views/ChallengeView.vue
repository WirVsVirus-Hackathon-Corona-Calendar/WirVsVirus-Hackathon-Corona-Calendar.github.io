<template>
  <div>
    <h1>{{ challenge.titel }}</h1>
    <br>
    <h2 class="spaced">Das brauchst du</h2>
    <br>
    <ul id="material" class="list">
      <li v-for="item in challenge.material" :key="item">{{ item }}</li>
    </ul>
    <br>
    <h2 class="spaced">Anleitung</h2>
    <br>
    <ul id="anleitung" class="list">
      <li v-for="item in challenge.anleitung" :key="item">{{ item }}</li>
    <br>
    </ul>
    <div id="attachment-container">
      <img
        v-for="attachment in challenge.attachments"
        :key="attachment"
        :src="attachment"
        class="attachment"
      />
    </div>
    <button v-on:click="completeChallenge" id="done-button">Fertig!</button>
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

<style scoped>
.attachment {
  width: 25em;
  max-width: 90vw;
  object-fit: cover;
}

#attachment-container {
  margin: 2em 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}

#done-button {
  margin-bottom: 1em;
}

p,
li {
  margin-left: 2em;
  margin-right: 2em;
  text-align: left;
  line-height: 1.5;
}

.spaced {
  margin-top: 1em;
}
</style>

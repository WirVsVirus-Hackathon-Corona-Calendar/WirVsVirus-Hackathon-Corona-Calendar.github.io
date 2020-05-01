<template>
  <div id="app">
    <br>
    <h1>{{ challenge.titel }}</h1>
    <br>
    <div  :style="{ backgroundImage: `url('${challenge.icon_url}')`}"
    class="picture"></div>
    <br>
    <p>{{ challenge.story_before }}</p>
    <button v-on:click="startChallenge" class="margined">
      Zum Abenteuer!
    </button>
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

<style scoped>
p,
li {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  padding-left: 10%;
  padding-right: 10%;
  line-height: 1.5;
}

.picture {
  display: block;
  object-fit: scale-down !important;
  height: 250px;
  max-height: 250px;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}

@media only screen and (max-width: 600px)
{
p, 
li {
  width: 80%;
  padding-left: 5%;
  padding-right: 5%;
}
.picture {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}
}
</style>

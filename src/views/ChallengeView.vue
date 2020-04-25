<template>
  <div id="app">
    <h1>Deine Challenge!</h1>
    <p>{{challengeId}}</p>
  </div>
</template>

<script>
export default {
  name: "ChallengeView",
  props: ["challengeId"]
};
</script>

<style>
</style>

<template>
  <div id="app">
    <div id="todaysChallengeTextContainer">
      <h1 id="todaysChallengeText">Dein heutiges Abenteuer</h1>
    </div>

    <button>Hier klicken</button>
  </div>
</template>

<script>
export default {
  name: "TodaysChallengeView"
};
</script>

<style>
#todaysChallengeTextContainer {
  background: url("../assets/diary.png");
  width: min-content;
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

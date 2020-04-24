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
}

#todaysChallengeText {
  font-family: Nunito;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6c4c46;
  margin-top: 60px;
}
</style>

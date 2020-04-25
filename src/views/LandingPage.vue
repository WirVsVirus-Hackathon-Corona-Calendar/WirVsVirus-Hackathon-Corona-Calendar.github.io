<template>
  <div class="LandingPage">
    <landing-page-banner :img_banner="imageForest" />
    <LandingPageText
      img_left="https://media.discordapp.net/attachments/690951465443000360/697084572218949702/Wald.png?width=506&height=899"
      header="Imf & Firus"
      header_sub="Eine App für jeden!"
      text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    />
    <div class="spacer" />
    <LandingPageText
      img_right="https://cdn.discordapp.com/attachments/690951465443000360/697084541294084137/Schlossinnen_Imf_Hamster_iPhoneX.png"
      header="Imf & Firus"
      header_sub="Eine App für jeden!"
      text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    />
    <div class="spacer" />
  </div>
</template>

<script>
import LandingPageText from "../components/LandingPageText.vue";
import LandingPageBanner from "../components/LandingPageBanner.vue";

export default {
  name: "LandingPage",
  components: {
    LandingPageText,
    LandingPageBanner
  },
  props: {},
  data: () => {
    return {
      imageForest: require("../assets/Wald_SM_Header.png")
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.spacer {
  border-bottom: 2px solid #eee;
  border-radius: 2px;
}
</style>

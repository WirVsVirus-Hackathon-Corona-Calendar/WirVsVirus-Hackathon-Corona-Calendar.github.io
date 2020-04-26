<template>
  <div class="LandingPage">
    <landing-page-banner :img_banner="imageForest" />
    <LandingPageText
      img_left="https://media.discordapp.net/attachments/690951465443000360/697084539888992276/SplashScreen.png?width=293&height=600"
      header="Imf & Firus"
      header_sub="Die tägliche Challenge für Kinder, um die Zeit zuhause mit analogen Spielen zu füllen!"
      text="Eltern und Erziehungsberechtigte stehen momentan vor dem großen Problem: Was mache ich mit meinen Kindern, wenn ich im Home-Office arbeite. Dabei können wenige Minuten Beschäftigung wahre Wunder wirken. "
    />
    <div class="spacer" />
    <LandingPageText
      img_right="https://cdn.discordapp.com/attachments/690951465443000360/697084541294084137/Schlossinnen_Imf_Hamster_iPhoneX.png"
      header="Eine liebevoll gestaltete Welt"
      header_sub="Jeden Tag etwas Spannendes zu entdecken"
      text="Die zusammenhängende Geschichte sorgt bei den Kindern für Motivation, sich der Herausforderung des aktuellen Tages zu stellen, 
      um am nächsten Tag direkt zu erfahren, wie die Geschichte weitergeht. Im Idealfall ist der Nachwuchs so jeden Tag der Isolation mehrere Stunden beschäftigt."
    />
    <div class="spacer" />
    <LandingPageText
      img_left="https://media.discordapp.net/attachments/690951465443000360/697084525167247410/Dorf_Imf_Hase.png?width=337&height=600"
      header="Die Geschichte"
      header_sub="Wo ist Oma nur hin?"
      text="Das kleine Imf wohnt mit seiner heißgeliebten Oma in einem abgelegenen Dorf. Doch, dann, eines Tages ist seine Oma plötzlich nicht mehr aufzufinden. Alles was das kleine Imf herausfinden kann ist, dass möglicherweise ein Bösewicht namens Firus dahinter steckt, von dem allerding niemand so recht weiß wie er aussieht."
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

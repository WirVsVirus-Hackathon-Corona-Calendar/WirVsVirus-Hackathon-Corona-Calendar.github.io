<template>
  <div class="footer">
    <div class="footer_social_cont">
      <a
        class="footer_social footer_instagram"
        target="_blank"
        href="https://www.instagram.com/imffirus/"
      >
      </a>
      <a
        class="footer_social footer_twitter"
        target="_blank"
        href="https://twitter.com/imffirus"
      >
      </a>
      <a
        class="footer_social footer_github"
        target="_blank"
        href="https://github.com/WirVsVirus-Hackathon-Corona-Calendar"
      >
      </a>
    </div>
    <a class="footer_link" href="/impressum">
      Impressum
    </a>
    •
    <a class="footer_link" href="/nutzung">
      Nutzungsbedingungen
    </a>
    •
    <a class="footer_link" href="/datenschutz">
      Datenschutz
    </a>
    <p>© 2020 Imf & Firus. Licensed under the MIT License</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  height: 150px;
  width: 100%;
  background-color: #fafafa;
  color: #a7a7a7;
}

.footer_link {
  color: #a7a7a7;
  text-decoration: none;
}

.footer_link:hover {
  color: #868686;
  text-decoration: none;
}

.footer p {
  margin-top: 10px;
}

.footer_social_cont {
  padding: 15px;
}

.footer_social {
  display: inline-block;
  background-color: #ececec;
  height: 40px;
  width: 40px;
  margin-right: 16px;
}

.footer_social:last-child {
  margin: 0px;
}

.footer_instagram {
  background-image: url("../assets/instagram_logo_black.png");
  background-size: 29px 29px;
  background-repeat: no-repeat;
  background-position: center;
}

.footer_twitter {
  background-image: url("../assets/twitter_logo_black.png");
  background-size: 40px 40px;
  background-repeat: no-repeat;
  background-position: center;
}

.footer_github {
  background-image: url("../assets/github_logo_black.png");
  background-size: 29px 29px;
  background-repeat: no-repeat;
  background-position: center;
}

.footer_instagram:hover{
  background-image: url("../assets/instagram_logo_white.png");
  background-color: #F00075;
}
.footer_twitter:hover{
  background-image: url("../assets/twitter_logo_white.png");
  background-color: #00B3E1;
}
.footer_github:hover{
  background-image: url("../assets/github_logo_white.png");
  background-color: #24292e;
}

@media only screen and (max-width: 500px){
  .footer{
    font-size: 14px;
  }
}
</style>

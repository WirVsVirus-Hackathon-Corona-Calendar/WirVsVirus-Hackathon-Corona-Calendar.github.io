<template>
  <div class="header">
    <a class="header_home" href="/">
      <img class="header_logo" src="../assets/logo.png" />
      Imf & Firus
    </a>
    <img
      v-on:click="toggleNavbar"
      class="header_burger"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
    />
    <div class="header_right_container">
      <a class="header_right header_settings" href="/settings">Einstellungen</a>
      <a class="header_right header_contact" href="/contact">Kontakt</a>
      <a class="header_right header_aboutus" href="/about">Über uns</a>
      <a
        class="header_right header_aboutus"
        href="/https://paypal.me/pools/c/8nPKKPLDhb"
        >Spenden</a
      >
      <!--<a class="header_right header_language" href="?lang=de">◍ {{language}} ({{language_short}})</a>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    language: String,
    language_short: String
  },
  methods: {
    toggleNavbar: () => {
      const x = document.querySelector(".header_right_container");
      if (x.className === "header_right_container") {
        x.className += " active";
      } else {
        x.className = "header_right_container";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (min-width: 900px) {
  .header {
    height: 80px;
    width: 100%;
    background-color: #fafafa;
  }

  .header_burger {
    display: none;
  }
}

.header_home {
  height: 65px;
  line-height: 50px;
  padding: 15px;
  padding-bottom: 0;
  color: #2c3e50;
  text-decoration: none;
  float: left;
}

.header_home a {
  display: block;
}

.header_logo {
  object-fit: scale-down;
  margin-right: 15px;
  float: left;
  height: 50px;
}

.header_burger {
  object-fit: scale-down;
  height: 35px;
  margin: 22.5px;
  cursor: pointer;
  float: right;
}

@media only screen and (max-width: 900px) {
  .header {
    width: 100%;
    height: 80px;
    background-color: #fafafa;
  }

  .header_right_container {
    display: none;
  }

  .header_right_container.active {
    display: block;
  }

  .header_right {
    display: block;
    float: left;
    height: 80px;
    width: 100%;
    line-height: 80px;
    text-decoration: none;
    color: #555;
    border-bottom: 2px solid #f0f0f0;
    transition-duration: 0.5;
  }

  .header_settings {
    border-top: 2px solid #f0f0f0;
  }

  .header_right:hover {
    background-color: #f0f0f0;
  }
}

@media only screen and (min-width: 900px) {
  .header_right {
    display: block;
    float: right;
    height: 80px;
    line-height: 80px;
    text-decoration: none;
    color: #555;
    padding-right: 15px;
    padding-left: 15px;
  }

  .header_right:hover {
    height: 76px;
    border-bottom: 2px solid #555555;
    border-radius: 2px;
  }
}
</style>

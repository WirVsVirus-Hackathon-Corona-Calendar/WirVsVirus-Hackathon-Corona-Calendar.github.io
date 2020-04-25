<template>
  <div class="header">
    <a class="header_home" href="/">
      <img class="header_logo" src='../assets/logo.png'/>
      Imf & Firus
    </a>
    <a class="header_right header_settings" href="/settings">
      Settings
    </a>
    <a class="header_right header_contact" href="/contact">
      Contact
    </a>
    <a class="header_right header_aboutus" href="/about">
      About Us
    </a>
    <a class="header_right header_language" href="?lang=de">
      ◍ {{language}} ({{language_short}})
    </a>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    language: String,
    language_short: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  height: 80px;
  width: 100%;
  background-color: #fafafa;
}

.header_home{
  height: 65px;
  line-height: 50px;
  padding:15px;
  padding-bottom: 0;
  color: #555;
  text-decoration: none;
  float: left;
}

.header_home a{
  display: block;
}

.header_logo{
  object-fit: scale-down;
  margin-right: 15px;
  float: left;
  height: 50px;
}

.header_right{
  display: block;
  float: right;
  height: 80px;
  line-height: 80px;
  text-decoration: none;
  color: #555;
  padding-right: 15px;
  padding-left: 15px;
}

.header_right:hover{
  height: 76px;
  border-bottom: 2px solid #555555;
  border-radius: 2px;
}


</style>

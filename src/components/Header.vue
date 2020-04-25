<template>
  <div class="header">
    <a class="header_home" href="/">
      <img class="header_logo" src='../assets/logo.png'/>
      Imf & Firus
    </a>
    <img class="header_burger" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" />
    <a class="header_right header_settings" href="/settings">
      Einstellungen
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
@media only screen and (min-width: 900px){
  .header{
    height: 80px;
    width: 100%;
    background-color: #fafafa;
  }
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

.header_burger{
  object-fit:scale-down;
  height:50px;
  margin: 15px;
  cursor: pointer;
  float: right;
}

@media only screen and (max-width: 900px)
{
  .header{
    width:100%;
    height: 100%;
  }

  .header_right{
    display:block;
    float: left;
    height: 80px;
    width:100%;
    line-height: 80px;
    text-decoration: none;
    color: #555;
    border-bottom: 2px solid #f0f0f0;
  }

  .header_right:hover{
    background-color: #f0f0f0;
  }
}

@media only screen and (min-width: 900px){
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
}

</style>

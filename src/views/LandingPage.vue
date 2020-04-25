<template>
  <div class="LandingPage">
    <LandingPageText img_left="https://media.discordapp.net/attachments/690951465443000360/697084572218949702/Wald.png?width=506&height=899" header="Imf & Firus" header_sub="Eine App für jeden!" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."/>
    <div class="spacer"/>
  </div>
</template>

<script>

import LandingPageText from '../components/LandingPageText.vue'

export default {
  name: 'LandingPage',
  components:{
      LandingPageText
  },
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.spacer{
    border-bottom: 2px solid #eee;
    border-radius: 2px;
}


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

.header_home:hover{
  height: 61px;
  border-bottom: 2px solid #555555;
  border-radius: 2px;
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

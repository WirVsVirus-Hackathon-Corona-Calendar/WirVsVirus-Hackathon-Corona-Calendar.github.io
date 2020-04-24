<template>
  <div class="header">
    <a class="header_home" href="/">
      <img class="header_logo" src='../assets/logo.png'/>
      Imf & Firus
    </a>
  </div>
</template>

<script>
export default {
  name: 'Header'
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
  color: #000;
  text-decoration: none;
  float: left;
}

.header_home:hover{
  background-color: #ececec;
  text-decoration: none;
  float: left;
  cursor: pointer;
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

</style>

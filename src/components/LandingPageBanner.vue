<template>
  <div class="lp_banner">
    <img v-if="img_banner" :src="img_banner" class="image image_banner" />
    <a href="/today" class="lp_banner_play">
        Jetzt Spielen!
    </a>
  </div>
</template>

<script>
export default {
  name: 'LandingPageBanner',
  props: {
    img_banner: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lp_banner{
    height: 500px;
    display: inline-block;
    align-content: center;
    justify-content: center;
    margin: 0 auto;
}

.image_banner{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.lp_banner_play{
    text-decoration: none;
    color: #fff;
    display: inline-block;
    width: 300px;
    height: 60px;
    background-color: #ffaa00;
    line-height: 60px;
    position: absolute;
    right: calc(50% - 150px);
    margin-top: 220px;
    font-size: 30px;
}

.lp_banner_play:hover{
    background-color: #e68a00;
}

</style>

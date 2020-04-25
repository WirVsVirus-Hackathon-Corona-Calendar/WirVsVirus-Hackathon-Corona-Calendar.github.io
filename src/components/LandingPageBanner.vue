<template>
  <div class="lp_banner">
    <img v-if="img_banner" :src="img_banner" class="image image_banner" />
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
    display: block;
    align-content: center;
    justify-content: center;
    margin: 0 auto;
}

.image_banner{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>

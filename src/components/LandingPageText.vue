<template>
  <div class="lp_textfield">
    <img v-if="img_left" :src="img_left" class="image image_left" />
    <div class="text_space">
        <div class="header_cont">
            <h1>
                {{header}}
            </h1>
            <h5>
                {{header_sub}}
            </h5>
        </div>
        <div class="text_cont">
            {{text}}
        </div>
    </div>
    <img v-if="img_right" :src="img_right" class="image image_right" />
  </div>
</template>

<script>
export default {
  name: 'LandingPageText',
  props: {
    img_left: String,
    img_right: String,
    header: String,
    header_sub: String,
    text: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lp_textfield{
    width: 1050px;
    min-height: 500px;
    height: auto;
    padding-top: 50px;
    display: inline-block;
    align-content: center;
    justify-content: center;
    margin: 0 auto;
}

.image_left{
    max-height: 450px;
    float: left;
    margin-right: 50px;
    padding-bottom: 50px;
}

.image_right{
    max-height: 450px;
    float: right;
    margin-left: 50px;
}

.text_space{
    float: left;
    min-height: 450px;
    height: auto;
    width: 700px;
}

.header_cont{
    float: left;
    max-height: 450px;
    width:100%;
    margin-bottom: 50px;
    justify-content: left;
    align-content: left;
    text-align: left;
}

.header_cont h1{
    font-size: 40px;
}

.header_cont h5{
    color: #888;
    font-size: 20px;
    margin-top: 10px;
}

.text_cont{
    float: left;
    width: 100%;
    text-align: left;
    padding-bottom: 50px;
}

@media only screen and (max-width: 1100px) {

    .lp_textfield{
        width: 100%;
        align-items: center;
        justify-content: center;
        align-content: center;
        margin-bottom: 50px;
    }

    

    .image_left{
        float: none;
        margin: 0;
    }

    .image_right{
        float: none;
        margin: 0;
    }

    .text_space{
        float: none;
        width: calc(100% - 40px);
        margin-left: 20px;
        margin-right: 20px;
        min-height: 0;
    }
}

</style>

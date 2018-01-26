<template>
  <div class="development" style="padding-top:35px;">
  <div class="vi3-content">
    <div class="card-icon color-blue cod-card-ico"></div>

    <div class="card-body">
      <div class="card-title">
        <h4 styele><b>SKILLS</b></h4>
      </div>
      <div class="card-desc" style="padding-top:50px;">
        <ul class="dev-list">
          <li><h4>VUE 2.x + VUEX;</h4></li>
          <li><h4>JavaScript ES5 +  JSON;</h4></li>
          <li><h4>Bootstrap-4;</h4></li>
          <li><h4>HTML5 + CSS/SCSS;</h4></li>
          <li><h4>SASS, Gulp, Webpack, Babel;</h4></li>
        </ul>
      </div>
    </div>
    <p style="padding-top:20px;"><b>This project is compiled using the vue-cli template;</b></p>
    <div class="card-footer light-grey">
    <div class="col-12 row" style="justify-content: space-around;">
      <div class="img-ico vue-item-ico"></div>
      <div class="img-ico node-item-ico"></div>
      <div class="img-ico html-item-ico"></div>
      <div class="img-ico css-item-ico"></div>
      <div class="img-ico sass-item-ico"></div>
      <div class="img-ico webp-item-ico"></div>
      <div class="img-ico json-item-ico"></div>
    </div>
    </div>
  </div>
  </div>

</template>

<script>
export default {
  name: 'development',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.dev-list {
  text-align: left;
  padding-left: 50px;
}

.cod-card-ico {
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(../../img/code-string.png);
}

.row-ico {
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
}

.html-item-ico,
.css-item-ico,
.sass-item-ico,
.node-item-ico,
.vue-item-ico,
.json-item-ico,
.webp-item-ico {
  background-position: left;
  background-repeat: no-repeat;
}

.html-item-ico {background-image: url(../../img/html5.png);}
.css-item-ico {background-image: url(../../img/css3.png);}
.sass-item-ico {background-image: url(../../img/sass.png);}
.node-item-ico {background-image: url(../../img/nodejs.png);}
.vue-item-ico {background-image: url(../../img/vuejs.png);}
.json-item-ico {background-image: url(../../img/json.png);}
.webp-item-ico {background-image: url(../../img/webpack.png);}

.img-ico {
  width: 36px;
  height: 36px;
}

</style>

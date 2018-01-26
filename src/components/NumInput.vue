<template id="float-lable-input">
  <div>
    <div class="lable-input">
      <input type="text" placeholder="Input for number only" v-model="currNumber" class="material-input">
      <p class="under-line"></p>
      <center>
        <transition name="slide-fade">
          <label v-show="numInput!=''" type="text">Input for number only</label>
        </transition>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  template: '#float-lable-input',
  computed: {
    numInput: function () {
      let self = this
      // setTimeout(function () {
      self.currNumber = isNaN(parseInt(self.currNumber)) ? '' : '' + parseInt(self.currNumber)
      // }, 150)
      return this.currNumber
    },
    currNumber: {
      get () { return this.$store.default.getters.getCurrNumber },
      set (value) { this.$store.default.dispatch('setCurrNumber', value) }
    }
  }
}
</script>

<style>

.lable-input {
  display: block;
  position: relative;
  margin: 0px auto;
  height: 48px;
}

.material-input {
  font-size: 20px;
  margin: 0px;
  display: block;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid gray;
  text-align: center;
  padding: 0px auto;
  width: 100%;
  height: 48px;
}

p.under-line {
  padding: 0;
  margin: -1px;
  height: 0;
}

p.description {
  text-align: justify;
  text-indent: 25px;
}

input:focus {
  outline: none;
}

.material-input+p::before {
  transition: width .5s ease;
  display: block;
  content: '';
  width: 0px;
  height: 2px;
  background-color: #666056;
  margin: 0px auto;
}

.material-input:focus+p::before {
  width: 100%;
}

label {
  padding-top: 3px;
  margin: 0;
  display: block;
  color: rgba(53, 52, 52, 0.801);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all .5s ease;
  font-size: 20px;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

#input-number {
  text-align: center;
  padding: 0px auto;
  border-radius: 0;
  border: 1px solid #00A2B9;
}

</style>

<template id="drop-color-pic">

  <div class="btn-group btn-block">
    <button type="button" ref="color_pic" class="btn btn-info btn-lg btn-block dropdown-toggle" data-toggle="dropdown"
      v-on:blur="onBlur"
      v-on:focus="onFocus"
      v-on:click="onClick"
      v-bind:style="tagColor"
      v-bind:aria-expanded="isActive"
      v-bind:aria-haspopup="isActive">
      Color picker</button>
    <div v-if="isActive" class="dropdown-menu show w-100">
      <div class="row" style="margin: 5px;">
        <div class="col-4" style="padding:5px;">
          <button
            v-on:focus="onFocus"
            v-on:click="setColor('#D33342', 'Red')"
            style="height: 50px;" type="button" class="btn btn-block btn-danger"></button>
        </div>
        <div class="col-4" style="padding:5px;">
          <button
            v-on:focus="onFocus"
            v-on:click="setColor('#26A042', 'Green')"
            style="height: 50px;" type="button" class="btn btn-block btn-success"></button>
        </div>
        <div class="col-4" style="padding:5px;">
          <button
            v-on:focus="onFocus"
            v-on:click="setColor('#00A2B9', 'Blue')"
            style="height: 50px;" type="button" class="btn btn-block btn-info"></button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  template: '#drop-color-pic',
  data () {
    return {
      cntClick: 0,
      isActive: false,
      tagColor: '#00A2B9;'
      // currColor: 'Blue'
    }
  },
  methods: {
    setColor: function (value, name) {
      this.tagColor = 'background-color:' + value + ';'
      this.isActive = false
      // this.currColor = name
    },
    onBlur: function () {
      this.isActive = false
      this.cntClick = 0
    },
    onFocus: function () {
      this.isActive = true
    },
    onClick: function () {
      ++this.cntClick
      if (this.isActive && (this.cntClick % 2 === 0)) {
        this.isActive = false
        this.cntClick = 0
        this.$refs.color_pic.blur()
      }
    }
  }
}
</script>

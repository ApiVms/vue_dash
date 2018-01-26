<template id="btn-input-block">
  <div>
    <div id="block-btn" class="btn-group w-100">
      <button type="button" class="col-4 btn btn-info btn-lg btn-block" id="less" v-on:click="cntTotalChange(-1)">-</button>
      <input type="text" class="col-4" id="input-number" placeholder="0" pattern="[0-9]{1,3}" v-model="localNumber"/>
      <button type="button" class="col-4 btn btn-info btn-lg btn-block" id="more" v-on:click="cntTotalChange(1)">+</button>
    </div>
  </div>
</template>

<script>

export default {
  template: '#btn-input-block',
  watch: {
    localNumber: function (value) {
      this.localNumber = isNaN(parseInt(value)) ? '' : '' + parseInt(value)
    }
  },
  computed: {
    localNumber: {
      get () {
        return this.$store.default.getters.getLocalNumber
      },
      set (value) { this.$store.default.dispatch('setLocalNumber', value) }
    }
  },
  methods: {
    cntTotalChange: function (add) {
      let tempValue = 0
      if (Number(this.localNumber) + add >= 0) {
        tempValue = Number(this.localNumber) + add
      }
      this.$store.default.dispatch('setLocalNumber', tempValue)
    }
  }
}

</script>

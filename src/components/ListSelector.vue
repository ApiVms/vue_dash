<template id="drop-select-pic">

  <div class="dropdown">
    <div class="input-group input-group-lg form-control" style="height:50px; padding:0;">
      <div class="input-button">
        <i class="filter-variant" style="padding-right:35px;"></i>
      </div>
      <input  class="border-0" type="search"
        style="padding-left:15px; height:100%; width:100%; position:absolute; background-color:transparent;"
        ref="inp_select"
        v-on:blur="onBlur"
        v-on:focus="onFocus"
        v-on:click="onClick"
        v-bind:placeholder="selected"
        v-model="search">
    </div>
    <ul v-if="isActive" class="dropdown-menu show w-100"
      style="max-height:300px; overflow-y:auto">
      <button class="dropdown-item"
        v-for="(item, index) in filteredList"
        v-bind:key="index"
        v-bind:value="item"
        v-on:focus="onFocus"
        v-on:click="onSelect(item)">
        {{ item }}
      </button>
    </ul>
  </div>

</template>

<script>
export default {
  template: '#drop-select-pic',
  data () {
    return {
      cntClick: 0,
      search: '',
      isActive: false,
      selected: 'Areas of Ukraine',
      mainList: [
        'Odessa', 'Dnipropetrovsk', 'Chernihiv', 'Kharkiv', 'Zhytomyr', 'Poltava', 'Kherson', 'Kiev', 'Zaporizhia', 'Luhansk', 'Donetsk', 'Vinnytsia', 'Mykolaiv', 'Kirovohrad', 'Sumy', 'Lviv', 'Cherkasy', 'Khmelnytskyi', 'Volyn', 'Rivne', 'Ivano-Frankivsk', 'Ternopil', 'Zakarpattia', 'Chernivtsi', 'Crimea'
      ]
    }
  },
  methods: {
    onSelect: function (item) {
      this.selected = item
      this.search = ''
      this.isActive = false
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
        this.$refs.inp_select.blur()
      }
    }
  },
  computed: {
    filteredList () {
      let self = this
      return this.mainList.filter(function (item) {
        return item.toLowerCase().includes(self.search.toLowerCase())
      })
    }
  }
}
</script>

<style>

.input-button {
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end
}
.filter-variant {
  background-position: left;
  background-repeat: no-repeat;
  background-image: url(../../img/filter-variant.png);
}
</style>

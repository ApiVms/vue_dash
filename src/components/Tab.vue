<!-- component template -->
<template type="text/x-template" id="grid-template">
  <table
    v-bind:class="tabStyle" >
    <thead
      v-bind:class="tabHead">
      <tr>
        <th
          v-for="(item, index) in columns"
          v-bind:key="index"
          v-on:click="sortBy(item, index)"
          v-bind:class="{ active: sortItem == item }">
          {{ item || capitalize }}
          <span class="arrow" v-bind:class="sortOrders[item]>0?'asc':'dsc'"></span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(entry, index) in filteredData"
        v-bind:key="index">
        <td
          v-for="(item, index) in columns"
          v-bind:key="index">
          {{entry[item]}}
        </td>
      </tr>
    </tbody>
  </table>

</template>

<!-- demo root element -->

<script>
export default {
  template: '#grid-template',
  props: {
    data: Array,
    columns: Array,
    filterItem: String,
    tabHead: String,
    tabStyle: String
  },
  mounted () {
    let self = this
    console.log('LENGHT =', this.columns.length)
    self.sortOrders = {'id': 1, 'name': 1, 'country': 1, 'city': 1, 'salary': 1}
  },
  data () {
    return {
      sortItem: '',
      sortOrders: {}
    }
  },
  computed: {
    filteredData: function () {
      let sortItem = this.sortItem
      let filterItem = this.filterItem && this.filterItem.toLowerCase()
      let order = this.sortOrders[sortItem] || 1
      let data = this.data
      if (filterItem) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (item) {
            return String(row[item]).toLowerCase().indexOf(filterItem) > -1
          })
        })
      }
      if (sortItem) {
        data = data.slice().sort(function (a, b) {
          a = a[sortItem]
          b = b[sortItem]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (item, index) {
      this.sortItem = item
      this.sortOrders[item] = this.sortOrders[item] * -1
    }
  }
}
</script>

<style>

th {
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid black;
}

.arrow.dsc {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid black;
}
</style>

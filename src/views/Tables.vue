<template>

  <div class="tables" style="padding-top:35px;">
  <div class="vi3-content">
    <div class="card-icon color-red tab-card-ico"></div>

    <div class="card-body">
      <div class="card-title">
        <h4><b>TABLES</b></h4>
      </div>

      <h4 style="margin-top: 20px;">Striped table</h4>
      <div class="conteiner tab-data">
        <div class="row">
          <div id="search" class="w-100" style="padding-bottom:25px;">
            <input
              v-model="searchQuery"
              class="form-control col-3 float-right"
              type="search"
              placeholder="Search"
              aria-label="Search">
          </div>
          <demo-grid
            v-bind:data="gridData"
            v-bind:columns="gridColumns"
            v-bind:filter-item="searchQuery"
            v-bind:tabHead="''"
            v-bind:tabStyle="'table table-striped'">
          </demo-grid>
        </div>
      </div>

      <h4 style="margin-top: 30px;">Hover table</h4>
      <div class="conteiner tab-data">
        <div class="row">
          <demo-grid
            v-bind:data="gridData"
            v-bind:columns="gridColumns"
            v-bind:filter-item="searchQuery"
            v-bind:tabHead="'thead-inverse'"
            v-bind:tabStyle="'table table-hover'">
          </demo-grid>
        </div>
      </div>

      <h4 style="margin-top: 30px;">Bordered table</h4>
      <div class="conteiner tab-data">
        <div class="row">
          <demo-grid
            v-bind:data="gridData"
            v-bind:columns="gridColumns"
            v-bind:filter-item="searchQuery"
            v-bind:tabHead="'thead-default'"
            v-bind:tabStyle="'table table-bordered'">
          </demo-grid>
        </div>
      </div>

      <nav aria-label="Page navigation example">
        <ul class="pagination pagination-lg centered">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>

      </div>
    </div>
  </div>
</template>

<script>
import Tab from '@/components/Tab'
const dataTable = require('./dataTable')

export default {
  name: 'tables',
  mounted () {
    this.dataTable = dataTable
    this.gridColumns = Object.keys(this.gridData[0])
  },
  data () {
    return {
      dataTable: [],
      searchQuery: '',
      gridColumns: [],
      gridData: dataTable
    }
  },
  methods: {

  },
  components: {
    'demo-grid': Tab
  }
}
</script>

<style>

table {
  text-align: left;
}

.tab-data {
  overflow-x: auto;
  box-sizing: border-box;
  padding: 0 2%;
}

.thead-inverse {
  color: white;
  background-color: #706f6f;
  border-bottom-color: white;
  border-top-color: white;
}

.tab-card-ico {
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(../../img/table.png);
}

</style>

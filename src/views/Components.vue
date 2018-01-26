<template>

  <div class="sample-components" style="padding-top:35px;">
    <div class="vi3-content">
      <div class="card-icon color-green com-card-ico"></div>

      <div class="card-body card-content">
        <div class="card-title">
          <h4 styele><b>SAMPLE</b></h4>
        </div>

        <!-- <div class="container" style="padding-top:40px;"> -->
        <div class="card-desc" style="padding-top:0; padding-bottom:0;">

          <div class="row" style="padding-top:24px;">
            <div class="col-xl-6 col-lg-12">
              <div class="row" style="padding-top: 25px;">
                <div class="col-md-6 col-xs-12">
                  <p class="description">
                    Color selection module.
                    Bootstrap is based on the dropdown component with standard styles.
                  </p>
                </div>
                <div class="col-md-6 col-xs-12">
                   <vi3-colorpick></vi3-colorpick>
                </div>
              </div>
            </div>

            <div class="col-xl-6 col-lg-12">
              <div class="row" style="padding-top: 25px;">
                <div class="col-md-6 col-xs-12">
                  <p class="description">
                    Synchronized by VUEX counter module. Data type is checked for consistency.
                  </p>
                </div>
                <div class="col-md-6 col-xs-12">
                  <vi3-counter></vi3-counter>
                </div>
              </div>
            </div>

          </div>

          <div class="row">

            <div class="col-xl-6 col-lg-12">
              <div class="row" style="padding-top: 25px;">
                <div class="col-md-6 col-xs-12">
                  <p class="description">
                    Drop-down module list with sorting function.
                  </p>
                </div>
                <div class="col-md-6 col-xs-12">
                  <vi3-dropselect></vi3-dropselect>
                </div>
              </div>
            </div>

            <div class="col-xl-6 col-lg-12">
              <div class="row" style="padding-top: 25px;">
                <div class="col-md-6 col-xs-12">
                  <p class="description">
                    Module intput with checking and removing invalid data.
                  </p>
                </div>
                <div class="col-md-6 col-xs-12">
                  <vi3-numinput></vi3-numinput>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    <div class="card-footer light-grey">
      <div class="row centered">
        <p style="text-align:center; margin:0; height:100%; color:white; padding:0 20px;">
          This example was ben written on JS with using ES5 standard.
          Was also used VUE + VUEX framework, HTML5 + CSS3 markup, Bootstrap-4.
        </p>
      </div>
    </div>
    </div>
  </div>

</template>

<script>

import numCounter from '../components/NumCounter'
import numInput from '../components/NumInput'
import listSelector from '../components/ListSelector'
import colorPicker from '../components/ColorPicker'

// const dataTable = require('./dataTable.js')

export default {
  name: 'sample-components',
  mounted () {
    // this.dataTable = dataTable
  },
  data () {
    return {
      // dataTable: []
    }
  },
  methods: {

  },
  components: {
    'vi3-counter': numCounter,
    'vi3-dropselect': listSelector,
    'vi3-numinput': numInput,
    'vi3-colorpick': colorPicker
  }
}
</script>

<style>

#table-data {
  overflow-x: auto;
}

.com-card-ico {
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(../../img/components.png);
}

</style>

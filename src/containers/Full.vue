<template>
  <div class="app">

    <!-- LEFT SIDEBAR -->
    <div class="left-side-wrap" v-bind:class="sideBar">
      <div class="left-side-logo centered">
        <div class="full-name">
          <img style="width:48px; height:48px; margin:6px;" src="../../src/assets/logo.png">
          <b>Vue.js 2.X</b>
        </div>
      </div>

      <div class="photo centered">
        <img v-bind:class="roundPhoto" src="../../img/bender.png">
      </div>
      <!-- <div class="full-name">
        <b>{{tiamName}}</b>
      </div> -->

      <div class="left-side-body" style="">
        <vi3-sidebar v-bind:style="menuHeight"></vi3-sidebar>
      </div>
    </div>

    <div class="right-side-wrap" v-bind:class="mainContent">
      <!-- MAIN FRAME -->
      <!-- <vi3-main-content > -->

        <!-- NAV BAR -->
        <div class="vi3-navbar-wrap">

          <div class="vi3-navbar">
            <div class="right-side-menu-btn-wrap centered">
              <button v-on:click="onClickSideBarBtn" class="right-side-menu-btn" type="button">☰</button>
            </div>
          </div>

        </div>
        <div class="vi3-content-wrap">
          <!-- <div class="vi3-content">
            <div class="card-icon centered color-red">
              <i class="ion-android-locate"></i>
            </div> -->
            <router-view></router-view>
          <!-- </div> -->
        </div>

        <div class="vi3-footer-wrap color-green centered">
            ©2018 created by VI3, with Bootstrap-4 and Vue.js
        </div>

      <!-- </vi3-main-content> -->
    </div>
  </div>
</template>

<script>

// Components
import Sidebar from '@/components/Sidebar'

export default {
  name: 'full',
  data () {
    return {
      maxSideBar: false
    }
  },
  methods: {
    onClickSideBarBtn: function () {
      this.maxSideBar = !this.maxSideBar
    }
  },
  computed: {
    sideBar: function () {
      return this.maxSideBar ? 'max-sidebar' : 'min-sidebar'
    },
    mainContent: function () {
      return this.maxSideBar ? 'min-main' : 'max-main'
    },
    name () {
      return this.$route.name
    },
    tiamName: function () {
      return this.maxSideBar ? 'VI3 - TEAM' : 'VI3'
    },
    roundPhoto: function () {
      return this.maxSideBar ? 'max-photo' : 'min-photo'
    },
    menuHeight: function () {
      return this.maxSideBar ? 'height: calc(100vh - 200px);' : 'height: calc(100vh - 130px);'
    }
  },
  components: {
    // 'vi3-header': Header,
    // 'vi3-navbar-wrap': Navbar,
    'vi3-sidebar': Sidebar
    // 'vi3-aside': Aside,
    // 'vi3-footer-wrap': Footer
    // Breadcrumb
  }
}

</script>

<style lang="scss">

.color-red {background-color: #D32F2F !important;}
.color-green {background-color: #009688 !important;}
.color-blue {background-color: #00A2B9;}
.color-indigo {background-color: #533B77}
.light-grey {background-color: #bbbdc9 !important}

html,
body {
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  background-color: primary-color-dark;
}

.app {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  flex-direction: row;
  display: flex;
  z-index: 1;
}

// .vcenter {
//   display: inline-block;
//   float: none;
//   vertical-align: middle;
// }

.centered {
  display: flex;
  align-items: center;
  justify-content: center;
}

.min-sidebar {  width: 64px;}
.max-sidebar {  width: 264px;}
.max-main {  width: calc(100vw - 64px);}
.min-main {  width: calc(100vw - 264px);}

.left-side-wrap {
  transition: .5s;
  max-height: 100%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  // background-image: url("../../img/sidebar-1.jpg");
  background-color: #333333;
  z-index: 13;

  .left-side-logo {
    height: 60px;
    // background-color: rgba(0, 0, 0, 0.171);
    background-color: #F4F3F2;

    .full-name {
      color: #009688;
      padding: 5px 0px;
      display: block;
      font-size: 18px;
      text-align: center;
      white-space: nowrap;
      font-weight: 400;
      line-height: 30px;
      overflow: hidden;
      }
  }

  .photo {
    border-top: 1px solid #BDBDBD;
    border-bottom: 1px solid #BDBDBD;
    width:100%;

    .min-photo {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      margin: 10px 0;
    }
    .max-photo {
      width: 96px;
      height: 96px;
      border-radius: 50%;
      margin: 20px 0;
    }
    .min-photo,
    .max-photo {
      transition: .5s;
      border: 2px solid rgba(85, 84, 84, 0.479);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.301);
    }
  }
}

.right-side-wrap {
  transition: .5s;
  max-height: 100%;
  display: flex;
  flex-direction: column;

  .vi3-navbar-wrap {
    height: 60px;
    background-color: #F4F3F2;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    z-index: 12;

    .vi3-navbar {
      max-width: 100%;
      display: flex;
      flex-direction: row;

      .right-side-menu-btn-wrap {
        width: 60px;
        height: 60px;

        .right-side-menu-btn {
          height: 36px;
          width: 36px;
          border-radius: 13%;
          color: #9e9e9e;
          border: 1px solid rgb(230, 230, 230);
          background-color: #ffffff;
          z-index: 33;
        }
        .right-side-menu-btn:hover {
          transition: .3s;
          width: 42px;
          height: 42px;
          border: 1px solid #009688;
          color: #009688;
          outline: none;
        }
        .right-side-menu-btn:focus {
          outline: none;
        }
      }
    }
  }
  .vi3-content-wrap {
    height: calc(100vh - 85px);
    background-color: #F6F9FC;
    box-sizing: border-box;
    padding: 45px 30px;
    overflow-y: auto;
    z-index: 10;

    .card-icon {
      position: relative;
      top: -35px;
      left: 45px;
      height: 64px;
      width: 64px;
      border-radius: 5px;
      justify-content: space-around;
      float: none;
      color: whitesmoke;
      z-index: 800;
      box-shadow: 0 4px 8px rgba(0, 0, 0, .25);
    }

    .vi3-content {
      box-sizing: border-box;
      background-color: #FFFFFF;
      border-radius: 7px;
      border: 1px solid #E8E7E3;
      margin-bottom: 0;
      box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.15);
        min-width: 300px;
    }
  }
  .vi3-footer-wrap {
    height: 25px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    color: #FAFAFA;
    font-size: .7em;
    // color: #BDBDBD;
    overflow: hidden;
    z-index: 11;
  }
}

.card-body {
  padding: 30px 50px;
  overflow-x: auto;
}
.card-title {
  text-align: left;
}
.card-footer {
  margin: -20;
  border-radius: 0 0 7px 7px !important;
  border: 1px solid #E8E7E3;
}

</style>

<!-- template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
      <Sidebar/>
      <main class="main">
        <AppHeader/>
        <breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
// import AppHeader from '../components/Header'
// import Sidebar from '../components/Sidebar'
// import AppFooter from '../components/Footer'
// import Breadcrumb from '../components/Breadcrumb'

export default {
  name: 'full',
  components: {
    // AppHeader,
    // Sidebar,
    // AppFooter
    // Breadcrumb
  },
  computed: {
    // list () {
    //   return this.$route.matched
    // },
    name () {
      return this.$route.name
    }
  }
}
</script -->

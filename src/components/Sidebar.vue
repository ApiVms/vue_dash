<template>
  <div class="sidebar">
    <nav class="sidebar-nav centered">
      <ul class="list-group">

        <li  class="menu-item list-group-item"
          v-for="(item, index) in listMenuItem"
          v-bind:key="index"
          v-bind:class="listMenuItem[index]['active']"
          v-on:click="setSelected(index)">
          <router-link class="nav-link"
            v-bind:to="String(listMenuItem[index]['path'])"
            v-bind:class="listMenuItem[index]['icon']">
            <b><p class="item-name  active">{{listMenuItem[index]['name']}}</p></b>
          </router-link>
        </li>

      </ul>
    </nav>
  </div>
</template>

<script>

import items from './itemSidebar'

export default {
  name: 'sidebar',
  mounted () {
    this.listMenuItem = items
  },
  data () {
    return {
      listMenuItem: [
        {name: String, path: String, icon: String, active: String}
      ],
      curListItem: 0
    }
  },
  methods: {
    setSelected: function (index) {
      this.listMenuItem[this.curListItem]['active'] = ''
      this.curListItem = index
      this.listMenuItem[this.curListItem]['active'] = 'selected'
    }
    // handleClick (e) {
    //   e.preventDefault()
    //   e.target.parentElement.classList.toggle('open')
    // }
  }
}
</script>

<style lang="scss">

li.selected a {
  background-color: #009688;
}

.list-group-item.menu-item {
  background-color: transparent;
  padding: 0;
}

.menu-item {
  width: 100%;
  border: transparent;
  border-bottom: 1px solid #666666;
}

.nav-link,
.btn-menu {
  cursor: pointer;
  padding: 0;
  height: 60px;
}

// .nav-link:focus, {
//   background-color: rgba(0, 150, 135, 0.856);
// }

li a:hover {
  background-color: rgba(0, 150, 135, 0.856);
}

p.item-name {
  margin: 0;
  padding-left: 64px;
  padding-top: 20px;
  display: flex;
  vertical-align: middle;
  align-content: center;
}

.tab-side-ico, .com-side-ico,
.cod-side-ico, .gmail-side-ico {
  background-position: left;
  background-repeat: no-repeat;
  background-position: right 8px top 5px;
}

.tab-side-ico { background-image: url(../../img/table.png); }
.com-side-ico { background-image: url(../../img/components.png); }
.cod-side-ico { background-image: url(../../img/code-string.png); }
.gmail-side-ico { background-image: url(../../img/gmail.png); }

.sidebar {
  overflow-x: hidden;
  overflow-y: auto;
}

.list-group {
  text-align: left;
  width: 100%;
}

.item-name {
  color: white;
}
</style>

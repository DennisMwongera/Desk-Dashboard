<template>
  <div class="navbar">
      
    <hamburger  :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
       <form action="" class="w-full grid grid-cols-2 p-12 bg-gray-400  px-4 py-12">
         <select id="cars" class=" absolute z-9 px-6 py-2 fixed rounded-md text-gray-600">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
             <option value="audi">Audi</option>
        </select>
          <input type="text" placeholder="Search" class=" ml-32 px-6 py-2 fixed rounded-md text-gray-600">
        </form>
    <!-- <div class="container bg-green-900 absolute"></div> -->
    <breadcrumb class="breadcrumb-container mt-0 fixed" />

    <div class="right-menu float-right ">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper fixed z-999 mt-0">
         <svg-icon icon-class="user" class="fill-current" />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/PanJiaChen/vue-admin-template/">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
            <el-dropdown-item>Docs</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
         <el-form-item class="float-right mt-0 b" />
    </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import Timerange from '@/components/Timerange'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    Timerange
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 170px;
  overflow: hidden;
  position: relative;
  z-index: 99;
  background-color: #106A8E;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    position: fixed;
    top: 0;
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

  }

  .breadcrumb-container {
    top: 150px;
    float: left;

}
  .container{
    width: 100%;
    height: 30px;
    background-color: #106A8E;
  }

  .right-menu {
    margin-top: 0;
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #fff;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

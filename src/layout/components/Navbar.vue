<template>
  <html>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    >
    <div class="navbar">
      <div class="w-full grid grid-cols-3 p-12 bg-gray-400  px-4 py-8">
        <div class="select_menu mt-2">
          <select id="cars" class="z-9 px-10 py-3 rounded-md bg-gray-600 text-gray-700">
            <option value="volvo">All</option>
            <option value="saab">Menu 1</option>
            <option value="opel">Menu 2</option>
            <option value="audi">Menu 3</option>
          </select>
        </div>
        <div class="search_input fixed ml-40 mt-2">
          <input type="text" placeholder="Search" class=" px-6 py-3 rounded-md bg-gray-600 text-gray-700">
        </div>
        <div class="right-menu">
          <div>
            <el-dropdown class="avatar-container float-right p-1" trigger="click">
              <div class="avatar-wrapper mt-0 inline-flex">
                <span class="material-icons float-right">account_circle</span> <i class="el-icon-caret-bottom mt-2" />
              </div>
              <el-dropdown-menu slot="dropdown" class="user-dropdown">
                <router-link to="/">
                  <el-dropdown-item>
                    Profile
                  </el-dropdown-item>
                </router-link>
                <a target="_blank" href="#">
                  <el-dropdown-item>Account</el-dropdown-item>
                </a>
                <a target="_blank" href="#">
                  <el-dropdown-item>Docs</el-dropdown-item>
                </a>
                <el-dropdown-item divided @click.native="logout">
                  <span style="display:block;">Log Out</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="nav_menu ml-64">
            <span class="material-icons avatar-container avatar-wrapper float-right p-2 text-gray-800">notifications</span>
          </div>
          <el-form-item class="float-right mt-0 b" />
        </div>
      </div>
    </div>
  </html>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {

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
  height: 150px;
  overflow: hidden;
  position: fixed;
  z-index: 99;
  background-color: #106A8E;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    position: fixed;
    top: 0;
    line-height: 46px;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

  }
  .container{
    width: 100%;
    height: 30px;
    background-color: #106A8E;
  }

  .right-menu {
    // padding-left: 30px;
    justify-content: end;
    margin-top: 0;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-flex;
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
      margin-right: 5px;
      float: right;

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
          top: 5px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

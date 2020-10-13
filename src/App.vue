<template>
  <div id="app">
    <app-header />
    <!-- <transition name="slide-fade" mode="out-in"> -->
      <router-view />
    <!-- </transition> -->
  </div>
</template>


<script>
import AppHeader from '@/cmps/AppHeader'
export default {
  components: {
    AppHeader,
  },
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>


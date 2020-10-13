<template>
  <header class="app-header main-container">
    <div class="header-content flex align-center space-between">
      <div class="logo">MissBooks</div>
      <ul
        class="main-nav clean-list flex space-between align-center"
        :class="isMobileMenuOpen ? 'menu-open' : ''"
      >
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/book">Books</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
        <button class="menu-btn" @click="toggleMenu">
          {{ isMobileMenuOpen ? 'X' : '☰' }}
        </button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
  },
}
</script>

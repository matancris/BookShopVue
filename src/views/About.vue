<template>
  <div class="about main-container">
    <div class="about-content flex column align-center">
      <h1>Welcome to MissBooks!</h1>
      <nav class="about-nav flex space-between">
        <router-link to="/about/shop">About our shop!</router-link>
        <router-link to="/about/team">About our team!</router-link>
      </nav>
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

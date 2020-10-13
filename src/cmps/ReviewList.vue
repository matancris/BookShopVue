<template>
  <section class="review-list main-container">
    <h1>Reviews</h1>
    <ul class="review-container clean-list card-grid" v-if="reviews.length">
      <li class="flex column space-between align-center" v-for="(review, idx) in reviews" :key="idx">
        <h2>{{ rating(review) }}</h2>
        <p>"{{ review.text }}"</p>
        <span>{{ review.date }}</span>
        <span>{{ review.fullName }}</span>
      </li>
    </ul>
    <h2 v-else>Be the first one to write a review!</h2>
  </section>
</template>

<script>
export default {
  props: ['reviews'],
  methods : {
      rating(review) {
          return '⭐'.repeat(review.rate);
      }
  }

}
</script>

<style>
</style>
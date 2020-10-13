<template>
  <section class="review-add screen screen-open">
      <form
        class="review-form flex column align-center space-around"
        @submit.prevent="emitReview"
      >
        <button class="close-add-btn" @click="emitClose">X</button>
        <h4>rate this book!</h4>
        <input type="text" placeholder="Name" v-model="review.fullName" />
        <select v-model="review.rate" class="rating-drop" placeholder="Rate">
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
        <input type="date" v-model="review.date" />
        <textarea
          placeholder="write your review here"
          cols="30"
          rows="10"
          v-model="review.text"
        ></textarea>
        <button class="review-btn">submit</button>
      </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      review: {
        fullName: '',
        rate: 0,
        date: '',
        text: '',
      },
    }
  },
  methods: {
    emitReview() {
      this.$emit('reviewed', this.review)
      this.review = {
        fullName: '',
        rate: 0,
        date: '',
        text: '',
      }
    },
    emitClose() {
      this.$emit('close')
    },
  },
}
</script>

<style>
</style>
<template>
  <section class="modal-content" @click.prevent>
      <ul class="clean-list">
        <li
          class="book-in-search flex space-between align-center"
          v-for="book in books"
          :key="book.id"
        >
          <p>{{ book.volumeInfo.title }}</p>
          <button class="add-book-btn" @click="emitAddBook(book)">+</button>
        </li>
      </ul>
  </section>
</template>

<script>
export default {
  props: ['books'],
  created() {
    console.log(this.books)
  },
  methods: {
    emitAddBook(book) {
      this.$emit('addBook', book)
    },
  },
}
</script>

<style>
</style>
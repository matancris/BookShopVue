<template>
  <section class="book-list main-container">
    <h3>Book List</h3>
    <ul class="clean-list card-grid">
      <!-- <li  > -->
      <book-preview
        v-for="currBook in books"
        :key="currBook.id"
        :book="currBook"
        @click.native="emitSelect(currBook)"
        @removeBook="emitRemoveBook"
      />
      <!-- </li> -->
    </ul>
  </section>
</template>

<script>
import BookPreview from '@/cmps/BookPreview.vue'

export default {
  props: ['books'],
  components: {
    BookPreview,
  },
  methods: {
    emitSelect(book) {
      this.$emit('selected', book)
    },
    emitRemoveBook(bookId) {
      this.$emit('removeBook', bookId)
    },
  },
}
</script>
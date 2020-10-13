<template>
  <section class="book-add">
      <h3>Add Book</h3>
      <input
        type="search"
        v-model="currSearch"
        @input="booksToAdd"
        placeholder="search for a book"
      />
      <add-book-modal v-show="currSearch" :books="books" @addBook="emitAddBook"/>
  </section>
</template>

<script>
import { bookService } from '../service/book-service'
import AddBookModal from './AddBookModal'

export default {
  data() {
    return {
      books: [],
      currSearch: '',
    }
  },
  methods: {
    async booksToAdd() {
        const books = await bookService.getBooksFromAPI(this.currSearch)
        console.log("booksToAdd -> books", books)
        this.books = books;
    },
    emitAddBook(book) {
        this.$emit('addBook', book);
        this.currSearch = '';
    }
  },
  components: {
      AddBookModal
  }
}
</script>

<style>
</style>
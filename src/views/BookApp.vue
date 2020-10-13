<template>
  <section class="book-app">
    <h1>My Books</h1>
    <book-add @addBook="addBook" />
    <book-filter @filtered="setFilter"></book-filter>
    <book-list :books="booksToShow" @selected="selectBook" @removeBook="removeBook"></book-list>
    <!-- <book-details :book="selectedBook"></book-details> -->
  </section>
</template>

<script>
import { bookService } from '../service/book-service.js'
import BookList from '@/cmps/BookList.vue'
import BookDetails from './BookDetails'
import BookFilter from '@/cmps/BookFilter'
import BookAdd from '@/cmps/BookAdd'

export default {
  data() {
    return {
      filterBy: {
        txt: '',
        minPrice: 0,
        maxPrice: Infinity,
      },
      selectedBook: null,
    }
  },
  async created() {
    this.loadBooks()
  },
  methods: {
    selectBook(book) {
      this.selectedBook = book
    },
    setFilter(filterBy) {
      this.$store.commit({ type: 'setBooksFilterBy', filterBy })
    },
    async addBook(book) {
      this.$store.dispatch({type: 'addBook', book})
      console.log('addBook -> book', book)
      // await bookService.addBook(book)
      // this.loadBooks()
    },
    async removeBook(id) {
      this.$store.dispatch({ type: 'removeBook', id })
    },
    async loadBooks() {
      this.$store.dispatch({ type: 'loadBooks' })
      // const currBooks = await bookService.query()
      // this.books = currBooks
    },
  },
  computed: {
    booksToShow() {
      return this.$store.getters.booksToShow
      // return this.books.filter(
      //   (book) =>
      //     book.title.includes(this.filterBy?.txt) &&
      //     book.listPrice.amount >= this.filterBy.minPrice &&
      //     book.listPrice.amount <= this.filterBy.maxPrice
      // )
    },
  },
  components: {
    BookList,
    BookDetails,
    BookFilter,
    BookAdd,
  },
}
</script>
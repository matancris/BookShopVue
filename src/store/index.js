import Vue from 'vue'
import Vuex from 'vuex'
import { bookService } from '@/service/book-service.js';

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    books: null,
    booksFilterBy: null
  },
  getters: {
    booksToShow(state) {
      const books = state.books
      if (!state.booksFilterBy) return books;
      return books?.filter((book) =>
        book.title.includes(state.booksFilterBy.txt) &&
        book.listPrice.amount >= state.booksFilterBy.minPrice &&
        book.listPrice.amount <= state.booksFilterBy.maxPrice
      )
    }
  },
  mutations: {
    setBooks(state, { books }) {
      state.books = books
    },
    removeBook(state, { id }) {
      console.log("removeBook -> id", id)
      const idx = state.books.findIndex(book => book._id === id)
      state.books.splice(idx, 1)
    },
    saveBook(state, { book }) {
      state.books.push(book)
    },
    setBooksFilterBy(state, { filterBy }) {
      if (!filterBy.minPrice || !filterBy.maxPrice) {
        state.booksFilterBy = { ...filterBy, minPrice: -Infinity, maxPrice: Infinity }
      }
      else state.booksFilterBy = filterBy
    }
  },
  actions: {
    async loadBooks(context) {
      const books = await bookService.query()
      context.commit({ type: 'setBooks', books })
    },
    async removeBook({ commit }, { id }) {
      await bookService.removeBook(id)
      commit({ type: 'removeBook', id })
    },
    async addBook({ commit }, { book }) {
      const savedBook = await bookService.addBook(book)
      commit({ type: 'saveBook', book: savedBook })
      return savedBook
    },
    async getBook(context, { id }) {
      return id ? await bookService.get(id) : bookService.getEmptyBook()
    }
  },
  modules: {}
})

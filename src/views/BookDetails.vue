<template>
  <section class="book-details main-container" v-if="book">
    <div
      class="book-details-container flex align-center justify-center flex-wrap"
    >
      <div class="details-img flex align-center justify-center">
        <img :src="book.thumbnail" />
      </div>
      <div class="details-content flex column space-around align-center">
        <h1>{{ book.title }}</h1>
        <div class="details-onsale"><img :src="isSale" /></div>
        <p>{{ readingLength }}</p>
        <div>
          <p class="details-desc">{{ bookDesc }}</p>
          <span v-if="!isLongTxt" @click="setLongTxt">read more</span>
        </div>
        <p>{{ oldLevel }}</p>
        <h3 :class="priceClass">Price: {{ book.listPrice.amount }}</h3>
        <button class="goback-btn" @click="$router.push('/book')">
          back to list
        </button>
      </div>
    </div>
    <button class="add-review-btn" @click="openAddReview">add review!</button>
      <review-add
        v-if="book && isReviewAddOpen"
        @reviewed="addReview"
        @close="closeAddReview"
      />
    <review-list :reviews="book.reviews" />
  </section>
</template>

<script>
import { bookService } from '@/service/book-service.js'
import ReviewList from '@/cmps/ReviewList'
import ReviewAdd from '@/cmps/ReviewAdd'

export default {
  data() {
    return {
      book: null,
      isLongTxt: false,
      isReviewAddOpen: false,
    }
  },
  async created() {
    this.loadBook()
  },
  computed: {
    readingLength() {
      const pageCount = this.book.pageCount
      if (pageCount > 500) return 'Long reading'
      else if (pageCount > 200) return 'Decent Reading'
      else if (pageCount < 100) return 'Light Reading'
    },
    oldLevel() {
      const publishYear = this.book.publishedDate
      const yearDiff = 2020 - publishYear
      if (yearDiff > 10) return 'Veteran Book'
      else if (yearDiff < 1) return 'New!'
    },
    priceClass() {
      const price = this.book.listPrice.amount
      if (price > 150) return 'red-price'
      else if (price < 70) return 'green-price'
    },
    isSale() {
      if (this.book.listPrice.isOnSale) return require(`@/assets/img/sale.gif`)
      else return ''
    },
    bookDesc() {
      return this.isLongTxt
        ? this.book.description
        : this.book.description.substr(0, 75) + '...'
      // if (this.isLongTxt) return 'full-txt'
      // else return ''
    },
  },
  methods: {
    async loadBook() {
      const { id } = this.$route.params
      this.book = await bookService.getById(id)
      console.log(this.book)
    },
    setLongTxt() {
      this.isLongTxt = true
    },
    async addReview(review) {
      console.log('addReview -> review', review)
      await bookService.addReview(this.book.id, review)
      this.closeAddReview()
      this.loadBook()
    },
    openAddReview() {
      this.isReviewAddOpen = true
    },
    closeAddReview() {
      this.isReviewAddOpen = false
    },
  },
  components: {
    ReviewList,
    ReviewAdd,
  },
}
</script>

<template>
  <section
    class="book-preview"
    :style="{ backgroundImage: `url(${book.thumbnail}` }"
  >
    <router-link :to="`/book/${book.id}`">
      <div class="preview-content flex space-evenely align-center column">
        <h2>{{ book.title }}</h2>
        <h4>{{ book.listPrice.amount }} {{ getCurrencyIcon }}</h4>
        <!-- <button @click.stop="emitRemoveBook">Remove</button> -->
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  props: ['book'],
  computed: {
    getCurrencyIcon() {
      var currencyCode = ''
      switch (this.book.listPrice.currencyCode) {
        case 'EUR':
          currencyCode = '€'
          break
        case 'ILS':
          currencyCode = '₪'
          break
        case 'USD':
          currencyCode = '$'
          break
      }
      return currencyCode
    },
  },
  methods: {
    emitRemoveBook() {
      this.$emit('removeBook', this.book.id)
      console.log('emitRemoveBook -> removeBook')
    },
  },
}
</script>

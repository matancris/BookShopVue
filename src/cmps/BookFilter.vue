<template>
    <section class="book-filter">
        <h3>Filter</h3>
        <input type="text" placeholder="Look for your book" v-model="filterBy.txt" @input="emitFilter" />
        <input type="number" placeholder="minimum price" v-model.number="filterBy.minPrice" @input="emitFilter" />
        <input type="number" placeholder="maximum price" v-model.number="filterBy.maxPrice" @input="emitFilter" />
    </section>
</template>

<script>
export default {
    data() {
        return {
            filterBy: {
                txt: '',
                minPrice: null,
                maxPrice: null
            }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('filtered', JSON.parse(JSON.stringify(this.filterBy)))
        }
    }
}
</script>
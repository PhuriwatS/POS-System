<template>
  <div class='shelf-container'>
    <input type='text' class='shelf-search' v-model='search' placeholder='Search title..' />
    <div class='shelf-book' v-for='book in filteredList' :key='book.id' @click='addToCarts(book)'>
      <img class='shelf-image' :src='book.cover' :alt='book.title' />
      <span class='shelf-title'>{{book.title}}</span>
      <span class='shelf-price'>{{book.price}} Baht</span>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import actions from '../../store/actions.js'
import getters from '../../store/getters.js'

export default {
  name: 'shelf',
  data () {
    return {
      search: ''
    }
  },
  created () {
    this.fetchBooks()
  },
  methods: {
    ...mapMutations({
      fetchBooks: actions.fetchBooks,
      addToCarts: actions.addToCarts
    })
  },
  computed: {
    ...mapState({
      books: getters.getBooks
    }),
    filteredList: function () {
      return this.books.filter(book => {
        return book.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style lang='scss'>
@import "./index.scss";
</style>

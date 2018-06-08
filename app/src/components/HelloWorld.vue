<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <template v-if="loading > 0">
        Loading...
      </template>
      <template v-else>
        <ul>
          <li v-for="book in books" :key="book.title">
            {{ book.title }} by {{ book.author }}
          </li>
        </ul>
      </template>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  apollo: {
    books() {
      return {
        loadingKey: 'loading',
        query: gql`{
          books {
            author
            title
          }
        }`,
      };
    }
  },
  data() {
    return {
      loading: 0,
      // Initialize your apollo data
      books: [],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>

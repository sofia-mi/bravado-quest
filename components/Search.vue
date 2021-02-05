<template>
  <div id="search">
    <div class="search">
      <img class="search-icon" src="../assets/search.svg"/>
      <input
        type="text"
        v-model="searchString"
        @input="onSearch"
      />
    </div>
  </div>
</template>

<script>
    export default {
        name: "Search",
        props: {
            routerQueryKey: String
        },
        data: () => ({
            searchString: ''
        }),
        created() {
            this.searchString = this.$route.query[this.routerQueryKey]
        },
        methods: {
            onSearch() {
                const query = this.searchString.length ? {[this.routerQueryKey]: this.searchString} : {};
                this.$router.push({query: query});
            }
        }
    }
</script>

<style scoped>
  .search {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 15px;
    align-items: center;
    background: #FAFAFA;
    padding: 0 19px;
    height: 48px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);
    border-radius: 2px;
    margin-bottom: 20px;
    width: 524px;
  }

  .search-icon {
    opacity: 0.54;
  }

  input {
    font-size: 24px;
    color: rgba(0, 0, 0, 0.75);
    width: 100%;
    border: none;
    background: none;
    outline: none;
  }

  @media (max-width: 620px) {
    .search {
      width: 450px;
    }
  }

</style>

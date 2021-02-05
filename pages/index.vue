<template>
  <div class="container">
    <div class="center">
      <Search router-query-key="searchQuery"/>
      <UserCardList router-query-key="searchQuery"/>
    </div>
  </div>
</template>

<script>
    import Search from "../components/Search";
    import UserCardList from "../components/UserCardList";

    export default {
        components: {UserCardList, Search}
    }
</script>

<style>
  html, body {
    background: #EEEEEE;
    display: grid;
    justify-items: center;
  }

  .container {
    padding: 19px 12px;
    background: #FFFFFF;
    max-height: calc(100vh - 60px);
  }

  @media (max-width: 620px) {
    .container {
      min-width: 450px;
    }
  }
</style>

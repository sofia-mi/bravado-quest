<template>
  <div class="container">
    <div
      class="centered"
      v-if="isEmptyResult()">
      Empty result
    </div>
    <img
      class="loading-icon centered"
      src="../assets/loading-cubes.svg"
      v-if="isDownloading || isSearching"
    />
    <template v-if="users">
      <DynamicScroller
        :items="searchQuery ? results : users"
        :min-item-size="20"
        class="scroller"
      >
        <template v-slot="{ item, index, active }">

          <DynamicScrollerItem
            :item="item"
            :data-index="index"
            :active="active"
            :size-dependencies="[item.email, item.name, item.title, item.city, item.address, item.avatar]"
            :emit-resize="true"
          >
            <UserCard :user="item" :search="searchQuery"/>
          </DynamicScrollerItem>
        </template>
      </DynamicScroller>
    </template>
  </div>
</template>

<script>
    import UserCard from "./UserCard";
    import {mapActions, mapGetters} from 'vuex';
    import {
        actionTypes,
        getterTypes,
        mapActions as mapSearchActions,
        mapGetters as mapSearchGetters,
    } from 'vuex-search';
    import * as mutationTypes from "../store/mutation-types";

    export default {
        name: "UserCardList",
        components: {UserCard},
        props: {
            routerQueryKey: String
        },
        watch: {
            searchQuery: function (newVal, oldVal) {
                if (this.searchQuery) {
                    this.$store.commit(mutationTypes.SET_SEARCHING, {searching: true});
                } else {
                    this.$store.commit(mutationTypes.SET_SEARCHING, {searching: false});
                }
                this.searchUsers(newVal);
            },
            isSearchingVueSearch: function (newVal, oldVal) {
                if (this.searchQuery) {
                    this.$store.commit(mutationTypes.SET_SEARCHING, {searching: newVal});
                }
            }
        },
        mounted() {
            this.fetchUsers();
            if (this.searchQuery) {
                this.searchUsers(this.searchQuery);
            } else {
                this.$store.commit(mutationTypes.SET_SEARCHING, {searching: false});
            }
        },
        methods: {
            ...mapActions({fetchUsers: 'fetchUsers'}),
            ...mapSearchActions('users', {searchUsers: actionTypes.search}),
            isEmptyResult() {
                if (!this.isSearching) {
                    return this.users.length && this.searchQuery && !this.results.length;
                } else {
                    return false;
                }
            }
        },
        computed: {
            ...mapGetters({
                usersMap: 'currentUsers',
                isDownloading: 'isDownloading',
                isSearching: 'isSearching',
            }),
            ...mapSearchGetters('users', {
                resultIds: getterTypes.result,
                isSearchingVueSearch: getterTypes.isSearching
            }),
            searchQuery() {
                return this.$route.query[this.routerQueryKey]
            },
            users() {
                return Object.values(this.usersMap);
            },
            results() {
                return this.resultIds.map(id => this.usersMap[id]);
            },
        },
    }
</script>

<style scoped>

  .container {
    min-height: calc(100vh - 150px);
  }

  .scroller {
    max-height: calc(100vh - 150px);
  }

  .scroller::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #F5F5F5;
    border-radius: 20px;
  }

  .scroller::-webkit-scrollbar {
    width: 20px;
    border-width: 5px;
    background-color: #FFFFFF;
  }

  .scroller::-webkit-scrollbar-track-piece {
    background-color: #757575;
    border-color: #FFFFFF;
    border-width: 2px 9px 2px 9px;
    border-style: solid;
  }

  .scroller::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background-color: #51545E;
    border-color: #FFFFFF;
    border-style: solid;
    border-width: 1px 7px 1px 7px;
  }

  .centered {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px;
    font-weight: 500;
    opacity: 0.5;
    z-index: 9999;
  }

  .loading-icon {
    width: 50px;
    filter: invert(100%);
    margin-top: 20px;
  }

</style>

import Vue from 'vue';
import * as mutationTypes from './mutation-types';

export default {
  [mutationTypes.SET_USERS](state, {users}) {
    Vue.set(state.resources, 'users', users);
  },

  [mutationTypes.SET_DOWNLOADING](state, {downloading}) {
    Vue.set(state.resources, 'downloading', downloading);
  },

  [mutationTypes.SET_SEARCHING](state, {searching}) {
    Vue.set(state.resources, 'searching', searching);
  },
};

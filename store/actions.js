import * as mutationTypes from './mutation-types';

export default {
  fetchUsers({commit}) {
    const worker = this.$worker.createWorker();
    commit(mutationTypes.SET_DOWNLOADING, {downloading: true});

    this.$axios
      .get('users.json')
      .then(response => {
        worker.postMessage({users: response.data});
      });

    worker.onmessage = (e) => {
      const users = e.data;
      commit(mutationTypes.SET_USERS, {users});
      commit(mutationTypes.SET_DOWNLOADING, {downloading: false});
    };
  }
};

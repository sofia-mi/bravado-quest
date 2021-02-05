import vuexSearch from 'vuex-search';

export const state = () => ({
  resources: {users: [], downloading: false, searching: false}
});

export const plugins = [
  vuexSearch({
    resources: {
      users: {
        index: ['name', 'title', 'address', 'city', 'email'],
        getter: state => state.resources.users,
      },
    },
  })
];

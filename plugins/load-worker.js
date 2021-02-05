import LoadUsersWorker from '~/assets/load-users.worker.js';

export default (context, inject) => {
  inject('worker', {
    createWorker() {
      return new LoadUsersWorker()
    }
  })
}

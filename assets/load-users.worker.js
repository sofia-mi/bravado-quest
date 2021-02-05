self.addEventListener('message', (event) => {
  let users = event.data.users;

  users.forEach((item, index) => {
    item.id = index;
  });

  self.postMessage(users);
}, false);

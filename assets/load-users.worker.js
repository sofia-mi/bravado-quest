self.addEventListener('message', (event) => {
  let users = event.data.users.slice(0,5000);

  users.forEach((item, index) => {
    item.id = index;
  });

  self.postMessage(users);
}, false);

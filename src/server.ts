interface User {
  name: string;
  age: number;
}

function saveUserToDatabase(user: User) {
  // save to DB
  console.log('Saving', user);
}

saveUserToDatabase({
  name: 'Alessandro',
  age: 38,
});

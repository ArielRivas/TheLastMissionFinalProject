const fakeUsers = [
    {email: 'alumno@upgrade.com', password: '1234asdf', userName: 'Paco', lastName: 'Candela' },
    {email: 'profesor@upgrade.com', password: '1234asdf', userName: 'Antonio', lastName: 'Rosales' },
  ];
  
  export const checkUser = (form) => {
    return fakeUsers.find((user) => {
      return form.userName === user.userName && form.password === user.password;
    });
  };
  
// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

//   $.ajax({
//   url: 'https://randomuser.me/api/',
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//   }
// });

  // Your Code Goes Here
fetch ('https://randomuser.me/api/?results=12')
  then(function(response){
      return response.json();
  })

  .then(function(json){
    for(i=0; i<json.length; i++);

    const firstCustomer = json[0];
    const name === firstCustomer.name;
    const email === firstCustomer.email;
    const phone === firstCustomer.phone;
    console.log(name);
    console.log(email);
    console.log(phone);
    }

  });

});

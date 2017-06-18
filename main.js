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
  .then(function(response){
      return response.json()
  })

  .then(function(json){
    console.log(json)
    let result = json.results
    result.forEach(function(user){
      console.log("Name: " + user.name.first)
      console.log("Email: " + user.email)
      console.log("Phone: " + user.phone)

    })
  })

})();

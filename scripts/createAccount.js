//IN ORDER FOR NODE COMMANDS LIKE REQUIRE() TO WORKS, I NEED TO DOWNLOAD NODE AND BROWSERIFY/WEBPACK

//load fs module to use Node.js for reading/writing to json files
///////////////////////////////////Add back in//const fs = require('fs');
// //read json file strings into a single object
// var usersText = fs.readFile("users.json");
// var oldUsersArrObj = JSON.parse(usersText);
// //turns usersArr object into array of user objects (the keys are duplicates of the values, so we don't need them)
// const usersArr = Object.values(oldUsersArrObj);

//defines a new user object and adds info to user array; users numbered by their index in the list based on when they were added
var usersArr = []; //empty array for initial test before trying to read the JSON file
function createAccount(event) {
  event.preventDefault() //prevents the default behavior that tries to submit the inputs to the page prevents redirection to homepage
  var userObj = {};
  userObj.username = document.getElementById('newUsernameBox').value; //adding the inputted value based on the element ID
  userObj.password = document.getElementById('newPwdBox').value;
  userObj.emailAddress = document.getElementById('newEmailBox').value;
  usersArr.push(userObj);
  var message = "There is not a user database configured yet; thus, your profile cannot be created. Here is your information in the meantime: username: " + userObj.username + ", password: " + userObj.password + " & email: " + userObj.emailAddress;
  alert(message);
  window.location.assign("chatrIndex.html");
}
  // //convert usersArr to newUsersArrObj
  // var newUsersArrObj = {};
  // for (var i=0; i<usersArr.length; i++) {
  //   newUsersArrObj[usersArr[i].key] = usersArr[i].value;
  // }
  // //write newUsersArrObj to json file as strings
  // fs.writeFile("users.json", JSON.stringify(newUsersArrObj), (err) => {
  //   if (err) {
  //       console.error(err);
  //       return;
  //   };
  //   console.log("JSON file has been created");
  // });



//failed taffy database
// var usersDatabase = TAFFY();
// usersDatabase.insert(userObj);
// usersDatabase().each(function signIn(record,recordnumber) {
//   alert(record["username"] + record["password"]);
// });

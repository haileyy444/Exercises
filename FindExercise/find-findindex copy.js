/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
  return usersArray.find(function(user) //return the found user within array or users with condition of ...
{
    return user.username === username;  //the searching for user.username is equal to that username within the arr
})
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  let Index = usersArray.findIndex(function(user)
    {
      return user.username === username; //find match the usernames to what you're looking for
    })
  if(Index === -1 ) //undefined not in the arr
  {
    return;
  }
return usersArray.splice(Index, 1) [0]; //return the array without the name aka remove it
}
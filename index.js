const users = [
 {
 id: 1,
 name: 'John',
 email: 'john@example.com',
 age: 30,
 city: 'New York',
 state: 'NY'
 },
 {
 id: 2,
 name: 'Jane',
 email: 'jane@example.com',
 age: 25,
 city: 'Chicago',
 state: 'IL'
 },
 {
 id: 3,
 name: 'Bob',
 email: 'bob@example.com',
 age: 25,
 city: 'New York',
 state: 'NY'
 }
];
function getUsersInState(users, state){
  if(state.length>2){
    const result = users.filter(word => word.state == state);
    const averageAge = parseInt(result.map(item => item.age).reduce((a, b) => a + b, 0)/result.length)
    result.sort((item1,item2) => (item1.age > item2.age) ? 1 : ((item2.age > item1.age) ? -1 : 0))
    result["averageAge"] = averageAge;
  }else{
    console.log("Please Enter Correct State");
    return null;
  }
  return result;
}
console.log(getUsersInState(users, 'NY'));

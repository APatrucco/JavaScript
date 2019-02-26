var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
console.log(users[1].age);
console.log(users[0].name);

for(var user in users){
    console.log(users[user].name +" - "+ users[user].age);
}

// The Peeps We Got At National Harbor

var peeps = [{type: 'chick', color: 'white', servings: 10}, {type: 'bunny', color: 'blue', servings: 6}, {type: 'chick', color: 'yellow', servings: 20}];

for(var peep in peeps){
    console.log("This is a " + peeps[peep].color +" "+ peeps[peep].type + " peep, containing " + peeps[peep].servings + " servings!");
}
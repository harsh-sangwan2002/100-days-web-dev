const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 },
]

// list of full name
console.log(users.map(obj => obj.firstName + " " + obj.lastName));

// age : count
console.log(users.reduce((obj, ele) => {

    if (obj[ele.age])
        obj[ele.age]++;

    else
        obj[ele.age] = 1;

    return obj;
}, {}));

// get firstName of people having age<30
console.log(users.filter(obj => obj.age < 30).map(obj => obj.firstName));
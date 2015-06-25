function Person (name, age) {
    this.name = name;
    this.age = age;
}

var ageDifference = function(person1, person2, person3) {
    return person1.age - person2.age;
};

var bill = new Person("Bill", 20);
var ted = new Person("Ted", 20);
var frank = new Person("Frank", 20);

var diff = ageDifference(bill,ted,frank);
console.log(diff);

//An Object is a group of properties and methods.
//  A property is an association between a key:value pair, where the key is the property name, and the value is the value that we are assigning to that property.
// last value does not use ,
let dvdPlayer = {
height: 3,
width: 18,
depth: 12,
weight: 7,
color: 'black',
dvdName: 'Mulan',
printDvdName: function() {
    console.log(this.dvdName)
}
};

console.log(dvdPlayer.depth);
dvdPlayer.printDvdName();

let contactOne ={
    firstName: 'Mickey',
    lastName: 'Mouse',
    address: {
    street: '1 Main Street',
    city: 'Disneyland',
    state: 'CA',
    zip: '92802'
    },
    phone: '123-456-7890',
    notes: ''
};
console.log(contactOne.firstName + ' ' + contactOne.lastName
+ ' lives in ' + contactOne.address.city + ' ' + contactOne.address.state);

//JS has 3 operators that look the same but do something different these operators are the assignment , equality, and identity operators
// equality operator is not a good operator use identity === 
console.log( 2 == '2');
console.log( 2 === '2');
var customerNames = [];
customerNames.push('Sam Smith');
customerNames.push('Tommy Guns');
customerNames.push('Ray Gomes');
customerNames.push('Matt Cox');
customerNames.push('Yani Gomes');
let drawingNames = [];

for(let i =0; i < customerNames.length; i++) {
drawingNames.push(customerNames[i])
// console.log(i,'The winner is', drawingNames);
}
let winner = Math.floor(Math.random() * drawingNames.length); //This random selects a number to draw a winner
console.log(winner);
console.log('The winner is', drawingNames[winner] );
//push = addition 
// length = last entry
// {} = the body
// crtl / will turn any line of code into a comment
console.log(customerNames [0] = 'Ray Robinson');

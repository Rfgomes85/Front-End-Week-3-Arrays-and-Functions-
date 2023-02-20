//Arrays Tutorial 

let fullName = 'Ray' + ' ' + 'Gomes';
let gradesArray = [100, 79, 80, 90, 100];
let counter = 1;
//' ' makes space between names
console.log('\n\nStudent: ' + fullName);
console.log('Grades: ');
for (let grade of gradesArray) {
console.log((counter++) + ':' + grade);
}
// Now add another grade
gradesArray.push(85);
// Reset counter to 1;
counter = 1;
console.log('\n\nStudent: ' + fullName);
console.log('Grades: ');
for ( let grade of gradesArray) {
console.log((counter++) + ':' + grade);
}

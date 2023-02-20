//Function Syntax Example

//Beginning of the function
// nameOfFunction(parametersGoHere){
    //The body of the function ONLY when its called runs in here.

    // return //Data on this return line outputs WHERE the function was called.
// } //End of the function

//Function Call Example
// nameOfFunction(dataIPassInBecomesTheParameterAbove); //Function is called here.

//creating functions {these curly braces make up the functions body}

function myFunction() {
    for (let i = 0; i < 100; i++) {
        console.log(i);
    }
}
//writing functions are like writing instructions function isn't used into you invoke the function name ie myFunction(parameters 3 or less is best); 
myFunction();
//functions can contain anything ie loops variables conditionals 

function createFullName(firstName, lastName) {
    console.log(firstName +' ' + lastName);
}
createFullName('Ray', 'Gomes');
createFullName('Yani', 'Gomes');
// functions names should have verbs since they are actions

function checkCanDrive(age) {
    return (age > 16);
}
let currentAge = 17;
 if (checkCanDrive(currentAge)) {
    console.log('This person can drive');
 } else {
console.log('This person cannont legally drive');
 }

 let fullName = 'Kobe' + ' ' + 'Bryant';
 let gradesArray = [100, 79, 80, 90, 100];

 function lowestGrade (gradebook) {
    if(gradebook.length > 0) {
        let lowGrade=gradebook[0];
        for (let grade of gradebook){
            if(grade < lowGrade){
            lowGrade = grade;
        }
    }
    return lowGrade;
 } else {
    return 0;
 }
}
console.log('\n\nStudent: ' + fullName);
console.log('Grades: ');
for (let i = 0; i < gradesArray.length; i++) {
    console.log('\t' + (i+1) + ': ' +gradesArray[i]);
}
console.log('Evaulation: ');
console.log('\tLowest Grade is: ' + lowestGrade(gradesArray));

//Write a function that calculates and returns the square of a number, which is passed in as a parameter.  This function will take one parameter, and return that parameter multiplied by itself.  
//Write a function that raises a number x to the power y, and returns the result.  This function will take two parameters, x and y, and return the result.
//try in free time
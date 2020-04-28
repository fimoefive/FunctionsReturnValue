
// exercise 3

/*  Write a function that takes a string of a dog breed as an argument (like 'border collie')

Have the function return "my favorite dog breed is" 
plus the passed in string. If no argument is passed to the function, return "I like cats".

Execute the function in a way that captures the returned value in a variable.

Console.log the string "When it comes to pets," plus the returned value of the function.*/

function dogBreed(breed) {
    if (breed == null) {
        return "I like cats"   
    } 
    return `my favorite dog breed is ${breed}`
}
const collie = dogBreed("collie")
console.log(collie);
const lab = dogBreed("lab")
console.log(lab);
const cat = dogBreed();
console.log(cat);
console.log(`When it comes to pets, ${collie}`);
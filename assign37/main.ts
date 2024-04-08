//making function

function make_shirt(size: string = "Large", printMessage: string = "I love TypeScript"){
console.log(`Creating a ${size} shirt with print ${printMessage}`)
}
//calling function
make_shirt();

// calling function with medium
make_shirt("medium");

// calling function with small
make_shirt("Small", "I love assignments");
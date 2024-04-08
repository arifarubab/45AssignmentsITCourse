//making function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with print ").concat(printMessage));
}
//calling function
make_shirt();
// calling function with medium
make_shirt("medium");
// calling function with small
make_shirt("Small", "I love TypeScript");

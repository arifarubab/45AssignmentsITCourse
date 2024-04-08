function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (singleItems) { return console.log("-" + singleItems); });
    console.log("Now enjoy Sandwich");
}
makeSandwich("Chicken", "Mayo", "Butter");
makeSandwich("Butter", "Bread");
makeSandwich("Chikcen", "Egg", "Butter", "Cheese", "Mayo", "Chilli");

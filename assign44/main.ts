function makeSandwich(...items: string[]){
console.log("\nMaking a sandwich with the following items: \n");
items.forEach(singleItems => console.log("-" + singleItems));
console.log("Now enjoy Sandwich");
}

makeSandwich("Chicken", "Mayo", "Butter");
makeSandwich("Butter", "Bread");
makeSandwich("Chikcen", "Egg", "Butter", "Cheese", "Mayo", "Chilli");
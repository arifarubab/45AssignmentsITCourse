let guestList = ["Adi", "Rubab", "Anna", "Farah"];

let notComing = guestList[0];

console.log(notComing, "Nahi aa sakta");

guestList.splice(0, 1, "Afshan");

guestList.forEach(guest => console.log(`Salam ${guest},would you like todinner with me?`));
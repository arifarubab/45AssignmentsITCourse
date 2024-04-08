var guestList = ["Adi", "Rubab", "Anna", "Farah"];
var notComing = guestList[0];
console.log(notComing, "Nahi aa sakta");
guestList.splice(0, 1, "Afshan");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ",would you like todinner with me?")); });

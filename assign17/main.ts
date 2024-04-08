// creating a guest list array
let guestList = ["Adi", "Rubab", "Anna", "Farah"];


//making variables for those guests who can't come
let notcoming = guestList[0];


//printing the name of guest who can't come
console.log(notcoming, "Nahi aa skta hai");


//add and remove of guest name from array
guestList.splice(0,1, "Afshan");


// print message
console.log("Good news! We have found a bigger dinner table");


//add new guest name starting index of array
guestList.unshift("Ayub");

//adding a new guest name at the ending idex of array
guestList.push("Zia");

//get adding at the middle index of array
let middleIndex: number = Math.floor(guestList.length / 2);

// now add middle index guest name
guestList.splice(middleIndex, 0, "Sayeeda");

//print message of updated list
console.log("updated list of guests");

//sending a invitation message to our guest one by one with their name
guestList.forEach(oneGuest => console.log(`Salam ${oneGuest}, Would you like to dinner with me? `));
    
console.log("Unfortunately, the new dinner table not arrive on time, so i can invite only two persons foe dinner with me ");


//using while- loop to remove guests from array until two names remain
while(guestList.length < 2){

    let removedGuest = guestList.pop();
     console.log(`Sorry,${removedGuest} I can't invite you dinner` );
     console.log("Invitations to the last 2 guests");
     guestList.forEach(lastTwo => console.log(`Luckly ${lastTwo}, you are still invited to dinner`));
     guestList.pop();
     guestList.pop();

     console.log("Empty List:",guestList);
}
var current_users = ["Adi", "Rubab", "Anna", "Farah", "Zia"];
var new_users = ["Afshan", "Badar", "Sayeeda", "Rubab", "ADI"];
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});

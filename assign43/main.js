function magicians_show(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_names = ["Ayub Khan", "Rubab", "Farah", "Sara"];
var great_magicians = make_great(magicians_names);
console.log(great_magicians);
//making a copy of original array through .slice() function
var copy_magicians_names = magicians_names.slice();
var copy_great_magicians = make_great(copy_magicians_names);
//show both origninal snd copied arrays
magicians_show(magicians_names);
magicians_show(copy_great_magicians);

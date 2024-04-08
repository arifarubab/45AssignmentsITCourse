function magicians_show(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_names = ["Ayub Khan", "Rubab", "Farah", "Sara"];
var great_magicians = make_great(magicians_names);
console.log(great_magicians);

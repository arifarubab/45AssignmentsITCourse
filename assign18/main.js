var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesToVisit = ["China", "Iran", "Australia", "France"];
console.log("Original Order:", countriesToVisit);
console.log("Alphabetical order:", __spreadArray([], countriesToVisit, true).sort());
console.log("Still in original order:", countriesToVisit);
console.log("reverse order:", __spreadArray([], countriesToVisit, true).reverse());
console.log("Still in original order:", countriesToVisit);
console.log("Original array reversed:", countriesToVisit.reverse());
console.log("back to Original Order:", countriesToVisit.reverse());
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
console.log("Original array reversed again:", countriesToVisit.reverse());

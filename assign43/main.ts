function magicians_show(magicians:string[]){
    magicians.forEach(name => console.log(name));
    }
    
    function make_great(magicians:string[]){
return magicians.map(name => `The Great ${name}`);
    }
    let magicians_names = ["Ayub Khan", "Rubab", "Farah", "Sara"]    

    let great_magicians = make_great(magicians_names)
    console.log(great_magicians)
//making a copy of original array through .slice() function
let copy_magicians_names = magicians_names.slice();

let copy_great_magicians = make_great(copy_magicians_names);

//show both origninal snd copied arrays
magicians_show(magicians_names);
magicians_show(copy_great_magicians);
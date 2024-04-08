function magicians_show(magicians:string[]){
    magicians.forEach(name => console.log(name));
    }
    
    function make_great(magicians:string[]){
return magicians.map(name => `The Great ${name}`);
    }
    let magicians_names = ["Ayub Khan", "Rubab", "Farah", "Sara"]    

    let great_magicians = make_great(magicians_names)
    console.log(great_magicians)

const person
:{
    name:string;
    age:number;
    degrees:{
        class:string;
        position:number;
    };
    hoby:string[];
    role:[number, string];
} 
= {
    name: 'Mahdi',
    age: 20,
    degrees: {
        class:"eight",
        position:23
    },
    hoby:["Football","handball"],
    role : [2, "Authore"],
}

for( let hob of person.hoby ){
    console.log(hob.match.toString());
    
}
person.role=[12,"Admin"]
console.log(person.role);

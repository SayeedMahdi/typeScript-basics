class Department{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    add(number1:number, number2:number){
        return number1 + number2;
        
    }
}

const science = new Department("Science");
console.log(science);
console.log( science.add(12,23));


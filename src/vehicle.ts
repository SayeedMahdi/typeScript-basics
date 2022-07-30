
class Vehicle{
    private employee:string[] =[];
   constructor(private name:string,private readonly authorName:string ="Mahdi"){} 
   
   description(this:Vehicle){
       console.log("The department name is " + this.name,this.employee);      
   }
   addEmployee(name:string){
    this.employee.push(name);
   }
   showInfo (){
    console.log(this.employee.length);
    console.log(this.employee);
    console.log(this.authorName);
    
    
   }
}

const vehicle = new Vehicle("Development");
vehicle.description();

vehicle.addEmployee("Ahmad");
vehicle.addEmployee("Mahdi");
vehicle.showInfo();



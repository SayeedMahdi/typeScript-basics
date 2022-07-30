class Vehicle {
    constructor(name, authorName = "Mahdi") {
        this.name = name;
        this.authorName = authorName;
        this.employee = [];
    }
    description() {
        console.log("The department name is " + this.name, this.employee);
    }
    addEmployee(name) {
        this.employee.push(name);
    }
    showInfo() {
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
//# sourceMappingURL=vehicle.js.map
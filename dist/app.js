class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employee = [];
    }
    add(number1, number2) {
        return number1 + number2;
    }
    addEmployee(employeeName) {
        this.employee.push(employeeName);
    }
    showInfo() {
        console.log(this.name, this.id);
        console.log(this.employee);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reportArray = []) {
        super(id, "Accounting");
        this.reportArray = reportArray;
        this.lastReport = reportArray[0];
    }
    addReport(report) {
        this.reportArray.push(report);
        this.lastReport = report;
    }
    showReport() {
        console.log(this.reportArray);
    }
    addEmployee(employeeName) {
        if (employeeName === "Mahdi") {
            console.log("Don't come back 👊🏻");
            return;
        }
        this.employee.push(employeeName);
    }
    showInfo() {
        console.log(this.employee.length, "we have it.");
        console.log("They are quite good!", this.employee);
    }
    get lastReportMethod() {
        console.log(this.lastReport);
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No lastReport found!");
    }
    set lastReportMethod(value) {
        if (value) {
            this.reportArray.push(value);
            return;
        }
        throw new Error("value not inserted!");
    }
}
const Account = new AccountingDepartment("d3", []);
Account.addReport("someFunction>>>>>>>");
Account.addReport("some Thing>>>>>>>");
Account.addEmployee("Mahdi");
Account.addEmployee("Ali");
Account.showInfo();
Account.showReport();
Account.lastReportMethod = "We have a Melting";
console.log("Show some things>>>", Account.lastReportMethod);
class human {
    static eat(food) {
        console.log(human.humanName + " eat " + food);
    }
}
human.humanName = "Afghan";
human.eat("Chalked");
//# sourceMappingURL=app.js.map
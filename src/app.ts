/** @format */
class Department{
    protected  employee:string [] =[]
    constructor(private name:string, private readonly id:string ){
    }
    add(number1:number, number2:number){
        return number1 + number2;
    }
    addEmployee(employeeName:string){
        this.employee.push(employeeName);
    }
    showInfo(){
        console.log(this.name, this.id);
        console.log(this.employee);
    }
}

class AccountingDepartment extends Department {
    private lastReport;


	constructor(id: string, private reportArray: string[] = []) {
		super(id, "Accounting");
        this.lastReport = reportArray[0];
	}

	addReport(report: string) {
		this.reportArray.push(report);
        this.lastReport = report;
	}

	showReport(this: AccountingDepartment) {
		console.log(this.reportArray);
	}

    addEmployee(employeeName: string): void {
        if (employeeName === "Mahdi"){
            console.log("Don't come back 👊🏻");
         return ;   
        }
        this.employee.push(employeeName);
    }

    showInfo(): void {
        console.log(this.employee.length ,"we have it.");
        console.log("They are quite good!",this.employee);
    }

    get lastReportMethod(){
        console.log(this.lastReport);
        
        if( this.lastReport ){
            return this.lastReport;
        }
        throw new Error("No lastReport found!");
    }
    set lastReportMethod(value:string){
        if(value ){
            this.reportArray.push(value);
            return;
        }
        throw new Error("value not inserted!");
    }

}
const Account = new AccountingDepartment("d3", []);
Account.addReport("someFunction>>>>>>>");
Account.addReport("some Thing>>>>>>>");

Account.addEmployee("Mahdi")
Account.addEmployee("Ali");

Account.showInfo();
Account.showReport();


Account.lastReportMethod = "We have a Melting";
console.log("Show some things>>>", Account.lastReportMethod);


class human {
    static humanName: string;
    static eat(food:string):void{
        console.log(human.humanName+ " eat " + food);
        
    }
}

human.humanName = "Afghan";
human.eat("Chalked");
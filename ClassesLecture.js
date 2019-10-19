// create an empty array of employees
const employeeDB = [];

// create a class for Employee
class Employee {
    constructor (fname, lname, jobTitle, department) {
        this.fname = fname;
        this.lname = lname;
        this.jobTitle = jobTitle;
        this.department = department;
    }
}

// create an instance of the Employee Class
femi = new Employee("Femi", "Oye", "salesforce", "1234")

// create a function that creates multiple instances of an Employee
function addEmployee (employeeFirstName, employeeLastName, employeeJobTitle, employeeDept) {
    let newEmployee = new Employee (employeeFirstName, employeeLastName, employeeJobTitle, employeeDept);
    employeeDB.push(newEmployee);

    return newEmployee;

}

addEmployee("Femi", "Oye", "Salesforce", "1234");
addEmployee("Bode", "Falade", "Developer", "2345");
addEmployee("Jim", "Jones", "HR Manager", "9805");
addEmployee("John", "Brown", "Sales Manager", "0001");
addEmployee("Kim", "Frye", "Developer", "0453");
addEmployee("Brad", "Smith", "IT Manager", "3960");
addEmployee("Joko", "Sule", "Bus Conductor", "0032");
addEmployee("Gideon", "Joker", "Baby", "0518");
addEmployee("Ade", "Owolabi", "Health", "9922");
addEmployee("Emmanuel", "Anthony", "Cook", "4501");
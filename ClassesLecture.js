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
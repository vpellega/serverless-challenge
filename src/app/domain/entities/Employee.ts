import EmployeeOccupationEnum from "../enums/EmployeeOccupationEnum";

class Employee
{
    public readonly Id: number;
    public readonly Name: string;
    public readonly Age: number;
    public readonly Occupation: EmployeeOccupationEnum
    
    constructor(id: number, name: string, age: number, occupation: EmployeeOccupationEnum)
    {
        this.Id = id;
        this.Name = name;
        this.Age = age;
        this.Occupation = occupation;
    }
}

export default Employee;
import EmployeeOccupationEnum from "@domain/enums/EmployeeOccupationEnum";

class EmployeeDTO
{
    public Id: number;
    public Name: string;
    public Age: number;
    public Occupation: EmployeeOccupationEnum;

    constructor(id: number, name: string, age: number, occupation: EmployeeOccupationEnum)
    {
        this.Id = id;
        this.Name = name;
        this.Age = age;
        this.Occupation = occupation;
    }
}

export default EmployeeDTO;
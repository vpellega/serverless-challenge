import Employee from "@domain/entities/Employee";
import ICommandEmployeeRepository from "@repository/ICommandEmployeeRepository"; 
import EmployeeDTO from "./EmployeeDTO";


class CreateEmployeeService
{
    private _employeeRepository: ICommandEmployeeRepository;

    constructor(employeeRepository: ICommandEmployeeRepository)
    {
        this._employeeRepository = employeeRepository;
    }

    Process(input: EmployeeDTO)
    {
        const employee = new Employee(0, input.Name, input.Age, input.Occupation);
        return this._employeeRepository.Create(employee);
    }
}

export default CreateEmployeeService;
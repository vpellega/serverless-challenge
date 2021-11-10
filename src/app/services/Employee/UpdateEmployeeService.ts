import Employee from "@domain/entities/Employee";
import ICommandEmployeeRepository from "@repository/ICommandEmployeeRepository";
import EmployeeDTO from "./EmployeeDTO";

class UpdateEmployeeService
{
    private _employeeRepository: ICommandEmployeeRepository;
    
    constructor(employeeRepository: ICommandEmployeeRepository)
    {
        this._employeeRepository = employeeRepository;
    }

    Process(input: EmployeeDTO)
    {
        const employee = new Employee(input.Id, input.Name, input.Age, input.Occupation);
        return this._employeeRepository.Update(employee);
    }
}

export default UpdateEmployeeService;

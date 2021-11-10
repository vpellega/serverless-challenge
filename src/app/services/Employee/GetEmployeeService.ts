import IQueryEmployeeRepository from "@repository/IQueryEmployeeRepository";
import EmployeeDTO from "./EmployeeDTO"

class GetEmployeeService
{
    private _employeeRepository: IQueryEmployeeRepository; 

    constructor(employeeRepository: IQueryEmployeeRepository){
        this._employeeRepository = employeeRepository;
    }

    async Process(id: string = "")
    {
        const employee = await this._employeeRepository.Show(id);

        return new EmployeeDTO(employee.Id, employee.Name, employee.Age, employee.Occupation);
    }
}

export default GetEmployeeService;
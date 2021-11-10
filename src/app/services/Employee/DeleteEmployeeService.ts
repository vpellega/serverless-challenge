import ICommandEmployeeRepository from "@repository/ICommandEmployeeRepository";

class DeleteEmployeeService
{
    private _employeeRepository: ICommandEmployeeRepository;

    constructor(employeeRepository: ICommandEmployeeRepository)
    {
        this._employeeRepository = employeeRepository;
    }

    Process(id: string = "")
    {
        return this._employeeRepository.Destroy(id);
    }
}

export default DeleteEmployeeService;
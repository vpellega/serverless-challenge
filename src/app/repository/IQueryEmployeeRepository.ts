import Employee from "@domain/entities/Employee";

interface IQueryEmployeeRepository
{
    Show(id: string): Promise<Employee>;
}

export default IQueryEmployeeRepository;
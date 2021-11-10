import Employee from "@domain/entities/Employee";

interface ICommandEmployeeRepository
{
    Create(employee: Employee): Promise<number|undefined>;
    
    Update(employee: Employee): Promise<boolean> ;

    Destroy(id: string): Promise<boolean> 
}

export default ICommandEmployeeRepository;

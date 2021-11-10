import sql from "mssql";

import Employee from "@domain/entities/Employee";
import ICommandEmployeeRepository from "@repository/ICommandEmployeeRepository";
import IQueryEmployeeRepository from "@repository/IQueryEmployeeRepository";
import RDSConnection from "./RDSConnection";

class RDSMSSQLDatabase implements ICommandEmployeeRepository, IQueryEmployeeRepository
{
    async Show(id: string): Promise<Employee> 
    { 
        const pool = await RDSConnection.Connect();
        
           return pool.request()
                .input('input_parameter', id)
                .query<Employee>("select * from dbo.Employee where EmployeeId = @input_parameter")
                .then(result => {
                    return result.recordset[0];
                })
    }
    
    async Create(employee: Employee): Promise<number|undefined>
    {
        const pool = await RDSConnection.Connect();

        return pool.request()
                .input('input_name', employee.Name)
                .input('input_age', sql.TinyInt ,employee.Age)
                .input('input_occupation', employee.Occupation)
                .query("INSERT INTO dbo.Employee (Name, Age, Occupation) OUTPUT inserted.EmployeeId VALUES (@input_name, @input_age, @input_occupation)")
                .then(result => {
                    console.log(JSON.stringify(result))
                    return result.recordset[0];
                })
    }

    async Update(employee: Employee): Promise<boolean> 
    {    
        const pool = await RDSConnection.Connect();

        return pool.request()
                .input('input_id', employee.Id)
                .input('input_name', employee.Name)
                .input('input_age', sql.TinyInt ,employee.Age)
                .input('input_occupation', employee.Occupation)
                .query("update dbo.Employee SET Name = @input_name, Age = @input_age, Occupation = @input_occupation WHERE EmployeeId = @input_id")
                .then(result => {
                    if(result.rowsAffected) return true;
                    return false;
                })
    }

    async Destroy(id: string): Promise<boolean>  {
        const pool = await RDSConnection.Connect();
        
        return pool.request()
            .input('input_parameter', id)
            .query("DELETE FROM dbo.Employee WHERE EmployeeId = @input_parameter")
            .then(result => {
                if(result.rowsAffected) return true;
                return false;
            })
    }
}

export default RDSMSSQLDatabase;
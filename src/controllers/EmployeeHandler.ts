'use strict';
import GetEmployeeService from "@services/Employee/GetEmployeeService";
import UpdateEmployeeService from "@services/Employee/UpdateEmployeeService";
import CreateEmployeeService from "@services/Employee/CreateEmployeeService";
import EmployeeDTO from "@services/Employee/EmployeeDTO";
import {APIGatewayProxyEvent, APIGatewayProxyResult} from "aws-lambda"
import RDSMSSQLDatabase from "@database/RDSMSSQLDatabase";
import DeleteEmployeeService from "@services/Employee/DeleteEmployeeService";

exports.Store = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => 
{
    const service = new CreateEmployeeService(new RDSMSSQLDatabase());
    
    if(event.body === null)
    {
        return {
            statusCode: 400,
            body: JSON.stringify({message: "Você precisa especificar algum funcionário."})
        }
    }else
    {
        const body: EmployeeDTO = JSON.parse(event.body);

        const employee = await service.Process(body);
        return {
            statusCode: 201,
            body: JSON.stringify(employee)
        } 
    }
}
exports.Show = async ({pathParameters}: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => 
{
    const service = new GetEmployeeService(new RDSMSSQLDatabase());
    
    const employee = await service.Process(pathParameters?.employeeId);
    return {
        statusCode: 200,
        body: JSON.stringify({
            employee 
        })
    } 
}

exports.Update = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => 
{
    const service = new UpdateEmployeeService(new RDSMSSQLDatabase());
    
    if(event.body === null)
    {
        return {
            statusCode: 400,
            body: JSON.stringify({message: "Você precisa especificar algum funcionário."})
        }
    }else
    {
        
        const body: EmployeeDTO = JSON.parse(event.body);

        const employee = await service.Process(body);
        const message = employee ? "Funcionário atualizado com sucesso" : "Tente novamente mais tarde"
        return {
            statusCode: 200,
            body: JSON.stringify({
                message
            })
        }
    }

}

exports.Destroy = async ({pathParameters}: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => 
{
    const service = new DeleteEmployeeService(new RDSMSSQLDatabase());
    
    const employee = await service.Process(pathParameters?.employeeId);

    const message = employee ? "Funcionário excluído com sucesso" : "Tente novamente mais tarde"
    return {
        statusCode: 200,
        body: JSON.stringify({
            message 
        })
    } 
}
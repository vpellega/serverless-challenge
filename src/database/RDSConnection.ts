import sql, {config} from "mssql";

class RDSConnection
{
    private static _RDSHost = process.env.RDS_HOST;
    private static _RDSUsername = process.env.RDS_USERNAME;
    private static _RDSPassword = process.env.RDS_PASSWORD;
    private static _RDSDBName = process.env.RDS_DBNAME;

    static async Connect()
    {
        try 
        {
            console.log(process.env.RDS_DBNAME)
            const sqlConfig: config = {
                user: process.env.RDS_USERNAME,
                password: process.env.RDS_PASSWORD,
                server: `${process.env.RDS_HOST}`,
                database: process.env.RDS_DBNAME,
                options: {
                    encrypt: false,
                    trustServerCertificate: true
                }

            }
            return await sql.connect(sqlConfig);
            
        } catch (error) 
        {
            throw Error(`Connection failed: ${error}`);
        }
    }
}

export default RDSConnection;
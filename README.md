<div align="center"> 
    <img src="assets/images/lambda.png" alt="Logo" width="30%">
    <h1 align="center">Serverless Challenge</h1>
</div>
<p>O desafio consiste em provisionar uma lambda na AWS que realize um CRUD em uma base de dados também na AWS, seja relacional ou não relacional.</p>

## Como rodar em sua máquina?

Utilize a imagem docker dentro de .devcontainer para rodar a aplicação


> :bulb: Dica: Recomendo usar o VSCode juntamente com a <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers">extensão ms-vscode-remote.vscode-remote-extensionpack</a>.

A imagem já vem configurada com:
* Serverless Framework
* AWS-CLI
* Node 16-bullseye

## Instalação

1. Configure as credenciais do aws-cli utilizando o comando:
```sh
aws configure
```
2. Configure o acesso a uma base de dados. Neste projeto, a base de dados escolhida foi o RDS da AWS

    a. No arquivo serveless.yml insira o security group e as subnets da sua vpc da AWS
    ```
    ...
    provider:
        name: aws
        runtime: nodejs12.x
        memorySize: 512
        lambdaHashingVersion: 20201221
        vpc:
            securityGroupIds:
                - XXXXXXX // INSIRA O SECURITY GROUP AQUI
            subnetIds:
                - XXXXXX // INSIRA SUBNET AQUI
    ...
    ```
    b. Ainda no arquivo serverless.yml insira as variáveis de ambiente do seu banco de dados RDS
    ```
    region: us-east-1
    environment:
        RDS_HOST: 
        RDS_USERNAME: admin
        RDS_PASSWORD: 
        RDS_DBNAME: 

    ```
3. Execute o comando 
```
yarn deploy
```

Este comando realiza:
* O _transpile_ do código TypeScript para JavaScrit dentro do diretório dist
* O deploy das funções para a Lambda da AWS utilizando o Serveless Framework

## Exemplos

Abaixo você poderá ver a aplicação rodando em um ambiente teste.

* Base URL
```
https://cmirl5n0z3.execute-api.us-east-1.amazonaws.com/dev
```
* Recursos

>GET
```
GET /employee/{employeeId}
```

>PUT

```
PUT /employee
```

```
{
	"Id": number,
	"Name": string,
	"Age": number,
	"Occupation": string
}
```
>POST

```
POST /employee
```

```
{
	"Name": string,
	"Age": number,
	"Occupation": string
}
```
>DELETE
```
DELETE /employee/{employeeId}
```


# eteg-tecnologia

**Passos para execução:**

1. Execute o comando abaixo na pasta do projeto para instalar as dependências.

```
npm install
```

2. Para iniciar o projeto, utilize o comando abaixo.

```
npm start
```

**Observações:**

1. Renomeie o arquivo .env.dev para .env e adicione os dados de acordo com seu ambiente.
2. Dentro da pasta utils, tem o arquivo db_eteg.sql com a estrutura do banco mysql para ser criado.
3. Caso deseje subir um banco MySQL com Docker, basta executar o comando abaixo:

```
docker-compose up
```

Os dados de acesso para o banco são:

```
usuário: root
senha: password
banco: db_eteg
```

Para acessar a interface gráfica do banco, utilize os dados abaixo:

```
http://localhost:8080

usuário: root
senha: password
```

4. Abaixo, segue endereço com a configuração no Postman para realizar os testes.
(https://www.getpostman.com/collections/38abcea77ae0304716f9)

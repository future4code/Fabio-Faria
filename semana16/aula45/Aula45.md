# Aula 45

# Exercício 1

## A

ID: Varchar serve para especificar um campo de caracter variavel ou variavel de dados.
Name: Possui a mesma categoria, varchar.
Salary: Um float, especificando que o valor pode ser quebrado e nao inteiro.
Birth_date: Espera-se uma data.
Gender: Um varchar especificando o tamanho de 6.

## B

Pelo que entendi, o SHOW DATABASES mostra as DBs selecionaveis. O SHOW TABLES cria as tabelas. Ja que quando rodei, dei erro dizendo que a tabelas ja existia.

## C

Mostra a tabela mostrando as colunas e o que é esperado dentro de suas respectivas.

# Exercício 2

## A

Feito.

## B

A DB nao permite que voce duplique com a mesma ID, ou informacao, o banco de dados.

## C

As colunas nao possuem as mesmas caracteristicas estipuladas na tabela.

## D

O campo nome nao tem um valor e ele nao pode ser null. Eh preciso que tenha um nome e nesse caso nao possui.

## E

A data esta em formato incorreto.

# Exercicio 3

## A

select id, name from Actor where gender = "female"

## B

select id, salary from Actor where name = "Tony Ramos"

## C

Retornou uma tabela vazia, ja que nao foi encontrado nada com esse valor.

## D

select id, name, salary from Actor where salary > 500000

## E

Nao existe coluna chamada 'nome' e sim 'name'
`SELECT id, name from Actor WHERE id = "002"`

# Exercicio 4

## A

Fazemos uma busca dentro da tabela Actor, percorrendo toda a tabela usando '\*'. Especificamos que queremos buscar nomes que tenham A ou nomes que tenham J E salario maior que 300.000.

## B

select \* from Actor where name NOT LIKE "A%" AND salary > 350000

## C

select \* from Actor where name LIKE "%g%" OR name LIKE "%G%" AND salary > 350000

## D

select \* from Actor where (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%A%" OR name LIKE "%A%") AND salary between 350000 AND 900000

# Exercicio 5

## A

O input com varchar tem um limite de caracteres ocupados pela memoria, no banco de dados, enquanto o TEXT usa uma forma mais livre para armazenar valores maiores.

# Exercicio 6

## A

select id, nome, rate from Filmes where id > 002

## B

select \* from Filmes where nome = "Dona Flor e Seus Dois Maridos"

## C

select \* from Filmes where rate <= 7

# Exercicio 7

## A

select \* from Filmes where nome like "%vida%"

## B

select \* from Filmes where nome like "%TERMO DE BUSCA%" or sinopse like "%TERMO DE BUSCA%"

## C

select \* from Filmes where data < "2020-05-04"

## D

select \* from Filmes where data < "2020-05-04" and (nome like "%TERMO DE BUSCA%" OR sinopse like "%termo de busca%") and rate > 7

# Aula 46 Exercicios

# Exercicio 1

## A

ALTER TABLE Actor DROP COLUMN salary;

- sinaliza que vai fazer alteracao usando Alter Table. Indica a tabela(Actor) e coloca a acao: DROP COLUMN para deletar a coluna salary.

## B

ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

- sinaliza para alterar informacao da coluna gender.

## C

ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

- sinaliza para fazer alteracao na gender.

## D

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

# Exercicio 2

## A

update Actor
set birth_date = "1987-08-20"
where id = "003"

update Actor
set name = "Christian Bale"
where id = "003"

## B

update Actor
set name = "JULIANA PAES"
where id = "005"

// Para voltar ao nome anterior

update Actor
set name = "Juliana Paes"
where id = "005"

## C

update Actor
set name = "Antonio Fagundes",
salary = 80000,
birth_date = "1949-04-18",
gender = "male"
where id = "005"

## D

Ele informa que foi feito o update, mas quando confiro a tabela, nao tem nada.

# Exercicio 3

## A

delete from Actor where name = "Fernanda Montenegro"

## B

delete from Actor where gender = "male" AND salary > 100000000

# Exercicio 4

## A

select max(salary) from Actor

## B

select min(salary) from Actor

## C

select count(\*) from Actor where gender = "female"

## D

select sum(salary) from Actor

# Exercicio 5

## A

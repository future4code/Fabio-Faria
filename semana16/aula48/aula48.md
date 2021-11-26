# Exercicio 1

## A

Foreign key é a chave destacada para que seja utilizada por outras tabelas.

## B

insert into Rating (id, comment, rate, movie_id) values (
"001",
"Filme mais ou menos",
5,
"3"
);

## C

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`maryam-fabio-faria`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

No caso, ele nao consegue encontrar a ID que passei(003), pq na minha tabela so tem numeros sem o 00.

## D

alter table Filmes drop column rate

## E

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`maryam-fabio-faria`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

Por ter uma foreign key, ele nao permite que seja deletado, por seguranca algo que ja esta em outra tabela tbm.

# Exercicio 2

## A

Essa tabela visa criar informacoes do filme, com ator, buscando ids passadas das tabelas Movie e Actor.

## B

Feito as 6 cedulas.

## C

## D

Nao foi possivel apagar nem no MovieCast nem no Actor

# Exercicio 3

## A

O join serve para juntar informacoes que estao em duas tabelas, como um cruzamento. ON serve para nao repetir informacoes desnecessarias na tabela.

## B

select m.id as movie_id, r.rate as rating from Filmes m inner JOIN Rating r ON m.id = r.movie_id;

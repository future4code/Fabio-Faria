# Exercicio 1

## A

Quando usamos raw, retorna o valor como o banco de dados nos envia.

## B

const searchActorByName = async (name: string): Promise<any> => {
const result = await connection.raw(`SELECT * FROM Actor WHERE name LIKE '%${name}%'`)

return result[0]
}

## C

const searchActorGender = async (gender: string): Promise<any> => {
const result = await connection.raw(`select count(*) from Actor where gender = '${gender}`)
return result[0]
}

# Exercicio 2

## A

const updateActor = async (id: string, salary: number): Promise<any> => {
await connection("Actor")
.update({
salary: salary,
})
.where("id", id)
}

## B

const deleteActor = async (id: string): Promise<any> => {
await connection("Actor")
.delete()
.where("id", id)
}

## C

const getAvgSalary = async( gender: string, salary: number): Promise<any> => {
await connection("Actor")
.avg(salary)
.where("gender", gender)
}

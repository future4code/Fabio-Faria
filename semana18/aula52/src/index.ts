import app from "./app"
import createCharacter from "./endpoints/createCharacter"
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"

app.get("/character", getAllCharacters)
app.post("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)


//Ex 1
//a - Constructor serve para passar as informacoes para a nova instancia

//b

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }

  public getCpf(): string {
        return this.cpf;
  }

  public getName(): string {
        return this.name;
  }
  public getAge(): number {
        return this.age;
  }
  public getTransactions(): Transaction[] {
        return this.transactions;
  }
}

const fabio = new UserAccount("123.456.789-10", "Fabio", 30);
// console.log(fabio)
// Console log apareceu apenas uma vez

//c
//Atraves de getter e setter

//Ex 2

// type Transaction = {
//   description: string,
//   value: number,
//   date: string
// }

class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(descripiton: string, value: number, date: string) {
        this.description = descripiton;
        this.value = value;
        this.date = date;
    }
    public getDescription(): string {
        return this.description;
    }
    public getValue(): number {
        return this.value;
    }
    public getDate(): string {
        return this.date;
    }
    }

const transaction1 = new Transaction("Salary", 1000, "01/01/2020");
console.log(fabio)

//Ex3

class Bank {
    private accounts: UserAccount[];
    constructor() {
        this.accounts = [];
    }
    public getAccounts(): UserAccount[] {
        return this.accounts;
    }
}

const tdBank = new Bank();
console.log(tdBank)
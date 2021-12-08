class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;
  public introduceYourself(){
    console.log(`Ola, sou ${this.name} bom dia!`);
  }

  constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
	}

    public getPassword(): string {
        return this.password
    }
    }

  

const fabio = new User("1", "fabio@email.com", "Fabio", "123456")

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }

}


const fabioCustomer = new Customer("2", "teste@teste", "fabio", "123456", "123456")

console.log(fabioCustomer.introduceYourself())


export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
	// como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}

const client: Client = {
  name: "Fabio",
  registrationNumber: 1,
  consumedEnergy: 100,
  calculateBill(): number {
    return 2;
  }
}

console.log(client)

export abstract class Place {
  constructor(protected cep: string) {}

	public getCep(): string {
		return this.cep;
  }
}

export class Residence extends Place {
  constructor(
    private dwellersQuantity: number,
    cep: string
  ) {
    super(cep);
  }
  public getDwellersQuantity(): number {
    return this.dwellersQuantity;
  }
}

export class Commerce extends Place {
  constructor(
    private floorsQuantity: number,
    cep: string
  ) {
    super(cep);
  }
  public getFloorsQuantity(): number {
    return this.floorsQuantity;
  }
}

export class Industry extends Place {
  constructor(
    private machinesQuantity: number,
    cep: string
  ) {
    super(cep);
  }
  public getMachinesQuantity(): number {
    return this.machinesQuantity;
  }
}

class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep);
  }

  public getCpf(): string {
    return this.cpf;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}

class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep);
  }

  public getCnpj(): string {
    return this.cnpj;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }
}

class IndustrialClient extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private industrialRegistry: string,
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
  }

  public getindustrialRegistry(): string {
    return this.industrialRegistry;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.40;
  }
}
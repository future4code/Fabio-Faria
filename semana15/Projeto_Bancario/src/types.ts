export type Transactions = {
    value: number,
    date: Date,
    description: string,
}

export type Account = {
    name: string;
    cpf: string;
    dateOfBirth: Date;
    balance: number;
    statement: Array<Transactions>
}


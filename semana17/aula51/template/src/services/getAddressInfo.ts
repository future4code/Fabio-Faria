import axios from "axios";

type Address = {
    cep: string,
    logradouro: string,
    bairro: string,
    cidade: string,
    estado: string,
}

export const getAddressInfo = async (cep: string): Promise<Address> => {
    const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    

    return {
        cep: res.data.cep,
        logradouro: res.data.logradouro,
        bairro: res.data.bairro,
        cidade: res.data.localidade,
        estado: res.data.uf,
    }
}
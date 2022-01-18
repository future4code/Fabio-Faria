import { connection } from "../connections";
import express, {Request, Response} from 'express';


export const addProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const {  name, price, image_url } = req.body;

        if(!name || !price || !image_url) {
            throw new Error('Missing required fields');
        }

         await connection
        .insert({ 
            id: Date.now().toString(),
            name, 
            price,
            image_url
         })
        .into('labecommerce_products')

        res.status(200).send({
            message: 'Produto cadastrado com sucesso',
        })


    }
    catch (error: any) {
        res.status(500).send({
            message: error.message
        });
    }
}

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const query = req.query.query || '%'
        const sort = req.query.sort || 'price' ? 'price' : 'name'
        const order = req.query.order || 'asc' ? 'asc' : 'desc'

        if(!query) {
           const emptyQuery = await connection('labecommerce_products')
           .select('*')
           .from('labecommerce_products')
           .orderBy('name', 'desc') 
         res.status(200).send(emptyQuery)
        }

        const products = await connection('labecommerce_products')
        .select('*')
        .from('labecommerce_products')
        .where('price', 'like', `%${query}%`)
        .orWhere('name', 'like', `%${query}%`)
        .orderBy(sort, order)
        res.status(200).send(products)
    }
    catch (error: any) {
        res.status(500).send({
            message: error.message
        });
    }
}
import { createcliente, findclientes, findclienteByEmail,updatecliente,deletecliente,createclienteWithproduto } from "../models/cliente.js";

export const addcliente = async (req, res) => {
    try {
        const { name, email } = req.body;
        const Cliente = await createcliente(name, email);
        res.status(201).json({ cliente });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to add cliente", message: error.message });
    }
};

export const findAllcliente = async (req, res) => {
    try {
        const cliente = await findclientes();
        res.status(200).json({ cliente });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to find clientes", message: error.message });
    }
};


export const getclienteByEmail = async (req, res) => {
    try {
        const Cliente = await findclienteByEmail(req.params.email);
        res.status(200).json({ cliente });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to find cliente by email", message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const { email } = req.params.email;
        const clienteData = req.body;
        const cliente = await updatecliente(email, clienteData);
        res.status(200).json({ cliente });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to update cliente", message: error.message });
    }
};

export const delcliente= async (req, res) => {
    try {
        const { email } = req.params.email;
        const cliente = await deletecliente(email);
        res.status(200).json({ cliente });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to delete cliente", message: error.message });
    }
};

export const createclienteProduto = async (req, res) => {
    try {
        const { clienteData, ProdutoData } = req.body;
        const cliente = await createclienteWithproduto(clienteData, produtoData);
        res.status(201).json({ cliente });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to add users with Produto", message: error.message });
    }
};
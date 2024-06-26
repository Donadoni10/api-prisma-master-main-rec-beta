import { prisma } from "../../config/prisma.js";

export const createcliente = async (name, email) => {
    try {
        return await prisma.cLIENTE.create({
            data: {
                name,
                email,
            },
        });
    } catch (error) {
        if (error.code == 'P2002') {
            throw new Error("E-mail adress already exists.");
        }

        throw new Error(`Failed to create cliente: ${error.message}`);
    }
};

export const findclientes = async () => {
    try {
        return await prisma.cLIENTE.findMany();
    } catch (error) {
        throw new Error(`Failed to get all clientes: ${error.message}`);
    }

}

export const findclienteByEmail = async (email) => {
    return await prisma.cLIENTE.findUnique({
        where: {
            email,
        },
    });
};

export const updatecliente = async (email, clienteData) => {
    return await prisma.cLIENTE.update({
        where: {
            email: email
        },
        data: {
            name: clienteData.name,
            status: clienteData.status,
        },
    });
};

export const deletecliente = async (email) => {
    return await prisma.cLIENTE.delete({
        where: {
            email,
        },
    });
};

export const createclienteWithproduto= async (datacliente, dataproduto) => {
    return await prisma.cLIENTE.create({
        data: {
            name: datacliente.name,
            email: datacliente.email,
            Post: {
                create: {
                    title: dataproduto.title,
                    body: dataproduto.body,
                },
            },
        },
    });
};
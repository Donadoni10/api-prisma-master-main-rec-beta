import { prisma } from "../../config/prisma.js";

export const createProduto= async (nome, desc, preco, quantidade,categoria,fornecedor) => {
    try {
        return await prisma.pRODUTO.create({
            data: {
                nome,
                desc,
                preco,
                quantidade,
                categoria,
                fornecedor,
            },
        });
    } catch (error) {
        throw new Error(`Failed to create produto: ${error.message}`);
    }
};

export const findproduto = async () => {
    try {
        return await prisma.pRODUTO.findMany();
    } catch (error) {
        throw new Error(`Failed to get all produto: ${error.message}`);
    }

}

export const findprodutoById = async (id) => {
    return await prisma.pRODUTO.findUnique({
        where: {
            id,
        },
    });
};

export const updateproduto = async (id, title, userId, subtitle, body) => {
    return await prisma.pRODUTO.update({
        where: {
            id: id
        },
        data: {
            title: title,
            userId: userId,
            subtitle: subtitle,
            body: body,
        },
    });
};

export const deleteproduto = async (id) => {
    return await prisma.pRODUTO.delete({
        where: {
            id,
        },
    });
};

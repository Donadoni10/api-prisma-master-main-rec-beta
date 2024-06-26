import { prisma } from "../../config/prisma.js";

export const createagendamento = async (cliente_id,data_agendamento, hora_agendamento,servico) => {
    try {
        return await prisma.aGENDAMENTO.create({
            data: {
                cliente_id,
                data_agendamento,
                hora_agendamento,
                servico,
            },
        });
    } catch (error) {
        if (error.code == 'P2002') {
            throw new Error("E-mail adress already exists.");
        }

        throw new Error(`Failed to create agendamento: ${error.message}`);
    }
};

export const find = async () => {
    try {
        return await prisma.aGENDAMENTO.findMany();
    } catch (error) {
        throw new Error(`Failed to get all agendamento: ${error.message}`);
    }

}

export const findagendamentoBydate = async (data_agendamento) => {
    return await prisma.aGENDAMENTO.findMany({
        where: {
            data_agendamento,
        },
    });
};

export const updateagendamento = async (email, agendamentoData) => {
    return await prisma.aGENDAMENTO.update({
        where: {
            email: email
        },
        data: {
            name: agendamentoData.name,
            status: agendamentoData.status,
        },
    });
};

export const deleteagendamento = async (email) => {
    return await prisma.aGENDAMENTO.delete({
        where: {
            email,
        },
    });
};

export const createagendamentoWithproduto= async (dataagendamento, dataproduto) => {
    return await prisma.aGENDAMENTO.create({
        data: {
            name: dataagendamento.name,
            email: dataagendamento.email,
            Post: {
                create: {
                    title: dataproduto.title,
                    body: dataproduto.body,
                },
            },
        },
    });
};
import Cliente from "../models/cliente.model.js";
import Venda from "../models/venda.model.js"

async function getSaleByClientId(clientId) {
  try {
    return await Venda.findAll({
      where: {
        clienteId: clientId
      },
      include: [
        {
          model: Cliente
        }
      ]
    });
  } catch (error) {
    throw error;
  }
}

export default {
  getSaleByClientId
}
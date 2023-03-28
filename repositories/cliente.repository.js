import Cliente from "../models/cliente.model.js";

async function insertClient(client) {
  try {
    return await Cliente.create(client);
  } catch (error) {
    throw error;
  }
}

async function updateClient(client) {
  try {
    await Cliente.update(client, {
      where: {
        clienteId: client.clienteId
      }
    });
    return await getClient(client.clienteId);
  } catch (error) {
    throw error;
  }
}

async function getClient(id) {
  try {
    return await Cliente.findByPk(id);
  } catch (error) {
    throw error;
  }
}

export default {
  insertClient,
  updateClient
}
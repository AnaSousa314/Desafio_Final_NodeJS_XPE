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

async function deleteClient(id) {
  try {
    await Cliente.destroy({
      where: {
        clienteId: id
      }
    })
    
  } catch (error) {
    throw error;
  }
}

async function getClients() {
  try {
    return await Cliente.findAll({
      attributes: ['clienteId', 'nome', 'email', 'telefone', 'endereco']
    })
  } catch (error) {
    throw error;
  }
}


export default {
  insertClient,
  updateClient,
  deleteClient,
  getClient,
  getClients
}
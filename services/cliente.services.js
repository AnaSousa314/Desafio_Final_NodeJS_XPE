import ClienteRepository from "../repositories/cliente.repository.js";
import VendasRespository from "../repositories/vendas.respository.js";


async function createClient(client) {
  return await ClienteRepository.insertClient(client);
}

async function updateClient(client) {
  if(await ClienteRepository.getClient(client.clienteId)){
    return await ClienteRepository.updateClient(client);
  }
  throw new Error("O cliente_id informado não existe!")
}

async function deleteClient(id) {
  let existsClient = await ClienteRepository.getClient(id);

  if (!existsClient) {
    throw new Error("O cliente_id informado não existe!")
  }

  let existsSale = await VendasRespository.getSaleByClientId(id);

  if (existsSale) {
    throw new Error("Possui uma venda")
  }
  await ClienteRepository.deleteClient(id);
}

async function getClients() {
  return await ClienteRepository.getClients();
}

export default {
  createClient,
  updateClient,
  deleteClient,
  getClients
}
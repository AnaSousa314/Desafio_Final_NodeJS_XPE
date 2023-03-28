import ClienteRepository from "../repositories/cliente.repository.js";

async function createClient(client) {
  return await ClienteRepository.insertClient(client);
}

async function updateClient(client) {
  return await ClienteRepository.updateClient(client);
}

export default {
  createClient,
  updateClient
}
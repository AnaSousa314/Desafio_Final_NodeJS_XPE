import ClienteRepository from "../repositories/cliente.repository.js";

async function createClient(client) {
  return await ClienteRepository.insertClient(client);
}

export default {
  createClient,
}
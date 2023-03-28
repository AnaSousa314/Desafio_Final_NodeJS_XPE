import Cliente from "../models/cliente.model.js";

async function insertClient(client) {
  try {
    return await Cliente.create(client);
  } catch (error) {
    throw error;
  }
}

export default {
  insertClient
}
import ClienteService from "../services/cliente.services.js";

async function createClient(req, res, next) {
  try {
    let client = req.body;

    if (!client.nome || !client.email || !client.senha || !client.telefone || !client.endereco) {
      throw new Error("Nome, email, senha, telefone e endereço são obrigatórios!");
    }

    client = await ClienteService.createClient(client);
    res.status(201).send(client)
    logger.info(`POST /cliente - ${JSON.stringify(client)}`);
  } catch (error) {
    next(error)
  }
}

export default {
  createClient,
}


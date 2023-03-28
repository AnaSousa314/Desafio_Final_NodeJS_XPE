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

async function updateClient(req, res, next) {
  try {
    let client = req.body;

    if (!client.clienteId || !client.nome || !client.email || !client.senha || !client.telefone || !client.endereco) {
      throw new Error("Cliente ID, Nome, email, senha, telefone e endereço são obrigatórios!");
    }

    client = await ClienteService.updateClient(client);

    res.status(200)
    res.send(client)
    logger.info(`PUT /cliente - ${JSON.stringify(client)}`);
  } catch (error) {
    next(error)
  }
}


async function deleteClient(req, res, next) {
  try {
    await ClienteService.deleteClient(req.params.id)
    res.status(204)
    res.end()
    logger.info(`DELETE /cliente/${req.params.id}`)
  } catch (error) {
    next(error)
  }
}

export default {
  createClient,
  updateClient,
  deleteClient
}


import e from "express";
import VendasService from "../services/vendas.service.js";

async function createSale(req, res, next) {
  try {
    let sale = req.body;
    if(!sale.data || !sale.clienteId || !sale.livroId) {
      throw new Error("Data, Cliente ID e Livro ID são obrigatórios!")
    }

    sale = await VendasService.createSale(sale);
    res.status(201);
    res.send(sale);
    logger.info(`POST /venda - ${JSON.stringify(sale)}`);
  } catch (error) {
    next(error);
  }
}

async function getSale(req, res, next) {
  try {
    res.status(200);
    res.send(await VendasService.getSale(req.params.id));
    logger.info(`GET /venda/${req.params.id}`);
  } catch (error) {
    next(error);
  }
}

async function getSales(req, res, next) {
  try {
    res.status(200);
    res.send(await VendasService.getSales(req.query.clienteId, req.query.livroId, req.query.autorId));
    logger.info("GET /venda - Lista Vendas")
  } catch (error) {
    next(error);
  }
}

export default {
  createSale,
  getSale,
  getSales
}
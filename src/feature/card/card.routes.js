
import CardController from "./card.controller.js";
import express from 'express'

const cardRoutes = express.Router();

const cardController = new CardController();
cardRoutes.get('/', cardController.getItem);

cardRoutes.post('/', cardController.add);


export default cardRoutes;
import { Router } from "express";
import { addcliente,findAllcliente,getclienteByEmail,update,delcliente,createclienteProduto } from "../controllers/clienteController.js";

const router = Router();

router.post('/cliente', addcliente);
router.get('/cliente',findAllcliente );

router.get('/cliente/:email', getclienteByEmail);
router.put('/cliente/:email', update);
router.delete('/users/:email', delcliente);

router.post('/cliente/post',createclienteProduto );

export default router;
import router from "@adonisjs/core/services/router";
import EstadiosController from "#controllers/EstadiosController";

const estadio = new EstadiosController();

router.post('/api/v1/estadios', estadio.createEstadio);
router.get('/api/v1/estadios', estadio.readEstadios);
router.delete('/api/v1/estadios/:id', estadio.deleteEstadio);
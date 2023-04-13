import { Router } from "express";
import routeCtrl from "../controllers/controller.js";

const route = Router();


route.get("/pais/:pais", routeCtrl.porPais);
route.get("/estado/:estado", routeCtrl.porEstado);
route.get("/ciudad/:ciudad", routeCtrl.porCiudad);

export default route;

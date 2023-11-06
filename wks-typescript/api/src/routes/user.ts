import { User } from "../models/User"; // Importa el modelo de usuario
import { Response, Request, Router, NextFunction } from "express";
const router = Router();

// Ruta para obtener todos los usuarios (HTTP GET)
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  // Consulta todos los usuarios en la base de datos
  User.findAll()
    .then((users) => {
      // Envía la lista de usuarios como respuesta
      res.send(users);
    })
    .catch((error) => next(error)); // Manejo de errores
});

// Ruta para crear un nuevo usuario (HTTP POST)
router.post("/", (req: Request, res: Response, next: NextFunction) => {
  // Obtiene los datos del usuario desde la solicitud
  const user = req.body;

  // Crea un nuevo usuario en la base de datos
  User.create(user)
    .then((createdUser) => {
      // Envía el usuario creado como respuesta
      res.send(createdUser);
    })
    .catch((error) => next(error)); // Manejo de errores
});

export default router; // Exporta el enrutador

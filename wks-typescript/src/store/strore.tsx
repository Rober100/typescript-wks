import { createStore, applyMiddleware } from "redux"; // Importamos createStore y applyMiddleware de Redux
import thunk from "redux-thunk"; // Importamos el middleware 'thunk' para manejar acciones asincrónicas
import { composeWithDevTools } from "redux-devtools-extension"; // Importamos la herramienta de desarrollo para Redux
import {reducers} from "../reducers/index"; // Importamos tu reducer personalizado

// Creamos la tienda (store) de Redux con createStore
// El reducer define cómo se actualiza el estado de la aplicación en respuesta a las acciones
// ComposeWithDevTools permite la configuración de las herramientas de desarrollo de Redux
// applyMiddleware permite la adición de middlewares, en este caso, 'thunk'
const store = createStore(
  reducers, // Tu reducer personalizado
    composeWithDevTools(applyMiddleware(thunk)) // Middleware 'thunk' y herramienta de desarrollo
);

export default store; // Exportamos la tienda para que pueda ser utilizada en otros lugares de la aplicación

// import { configureStore } from "@reduxjs/toolkit";
// import {reducers} from "../reducers/index";

// const store = configureStore({
//   reducer: reducers,
// });

// export default store;

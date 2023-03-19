//modulo index (main)

import app from "./app.js"; //importamos app de modulo app
import {PORT} from "./config.js"; //importamos const PORT de modulo config

app.listen(PORT); //ejecutamos metodo listen() de app. Pasamos PORT como argumento
console.log("Server running on port", PORT);


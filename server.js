// npm uninstall express -> Si instalamos algo mal
//npm install axios react-router-dom -> En client

const express = require("express");
const app = express();

const cors = require("cors")

app.use(express.json(), express.urlencoded({extended:true}));

app.use(
    cors({
        origin: "http://localhost:3000"
    })
)

require("./server/config/mongoose.config");

const misRutas = require("./server/routes/recordatorio.routes");
misRutas(app);

app.listen(8000, ()=>console.log("Servidor listo !"));
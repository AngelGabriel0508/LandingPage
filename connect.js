var express = require("express");
var mysql = require("mysql");
var cors = require("cors");
var path = require ("path");
var app = express();




// Usar librerías
app.use(express.json());
app.use(express.static(path.join(__dirname, "static")));
app.use(cors());

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "dbmaryland"
});

//Probando conexion
conexion.connect(function (err) {
    if (err) {
        throw err;
    } else {
        console.log("Conexión exitosa");
    }
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Servidor funcionando en el puerto: " + port);
});


// Ruta inicial
app.get("/", function (req, res) {
    res.send("Ruta inicial");
});

app.get("/api/dates/:current", (req, res) => {
    var request = req.params.current;
    conexion.query(
        "select NAMECAL, DESCCAL, DATE_FORMAT(DATECAL, '%d/%m/%Y') AS DATECAL from calendarie where DATECAL = '" + request + "'",
        function (err, row, fields) {
            if (err) {
                throw err;
            } else if (row[0] != null) {
                res.json(
                    row[0]
                );
            } else {
                res.json(null)
            }
        }
    )
}
);

app.post("/api/USUARIO", (req, res) => {
    let data = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        email: req.body.email,
        telefono: req.body.telefono,
        mensaje: req.body.mensaje
    };
    let sql = "INSERT INTO USUARIO SET ?";
    conexion.query(sql, data, function (error, results) {
        if (error) {
            throw error;
        } else {
            console.log(data);
            res.send(data);
        }
    });
});
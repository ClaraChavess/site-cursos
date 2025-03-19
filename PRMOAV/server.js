const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, "public")));

// Rotas
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "banco.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "design.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "poo.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "redes.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "robotica.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "site.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "sobre.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "web.html"));
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


function Enviar() {
    alert("Formulário enviado!");
    return true; // Permite o envio do formulário
}

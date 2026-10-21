const express = require('express');
const app = express();
const professoresRoutes = require("./routes/professoresRoute")

app.use(express.json());

app.use("/professores", professoresRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Olá, mundo!' });
});


app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
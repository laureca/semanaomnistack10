const express = require('express');

const app = express();

app.use(express.json);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros: 
// Query Params: request.query (Filtros, ordenação, páginação, etc..)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

app.get('/', (request, response) => {
    return response.json({ message: 'Hello OmniStack' });
});

app.listen(3333);
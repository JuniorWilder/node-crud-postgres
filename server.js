import fastify from 'fastify';


const server = fastify()

const host = 'localhost' //127.0.0.1
const port = 5000

server.get('/', async (req, res) => {
    res.send('Servidor no ar')
})

server.get('/produtos', (req, res) => {
    res.send("Testando GET /produtos")
})

server.get('/produto/:id', (req, res) => {
    res.send("Testando GET /produtos/:id")
})

server.post('/produto', (req, res) => {
    res.send("Testando POST /produtos")
})

server.put('/produto/:id', (req, res) => {
    res.send("Testando POST /produtos/:id")
})

server.delete('/produto/:id', (req, res) => {
    res.send("Testando DELETE /produtos/:id")
})




server.listen({
    port,
    host
})
.then(() => console.log(`Servidor rodando em http://${host}:${port}`))
.catch(err => console.log(`Erro ao subir o servidor: ${err}`))

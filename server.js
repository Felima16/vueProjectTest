const express = require('express')
const app = express()

//
app.use(express.static(__dirname + '/dist/'))

//responser a requisições feitas para o servidor web por meio da rota get
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/dist/index.html')
})

app.listen(3000, function() { 
    console.log('Servidor web rodando com Express')
})
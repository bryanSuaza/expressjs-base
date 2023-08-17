const express = require('express');
const mongoose = require('mongoose');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.products = '/v1/products';
        this.connectionDB();
        this.routes();
        this.server = require('http').createServer(this.app);

    }

    connectionDB () {
        const uri = process.env.MONGO_URI;

        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=> console.log('conectado a mongodb')) 
        .catch(e => console.log('error de conexión', e))
    }

    routes () {
        this.app.use(this.products, require('../routes/products.routes'));
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log('Servidor Corriendo en el puerto', this.port)
        })
    }

}

module.exports = Server;
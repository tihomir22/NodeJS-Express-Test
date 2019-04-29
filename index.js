const express = require('express');

const app = express(); //equivalente a server abajo con su response y request...
const path = require('path');

app.use(express.static('public')); // le decimos que coja los assets de esta carpeta

app.get('/', (request, response) => { // enviar un json en concreto
    response.json({
        name: 'Adolph'
    })
})

app.get('/about', (request, response) => { // podemos enviar de todo
    response.send({
        name: 'about puto'
    })
})

app.get('/contact', (request, response) => { // enviar un fichero
    response.sendFile(path.resolve(__dirname, 'contact.html'))
})

app.listen(1488, () => {
    console.log("aplicacion escuchando en puerto 1488");
});


/*
const http = require('http');
const fs = require('fs');

const aboutPage = fs.readFile('about.html')
const contactPage = fs.readFile('contact.html');
const homePage = fs.readFile('index.html');

const server = http.createServer((request, response) => {
    console.log(request.url);
    if (request.url === '/about') {
        return response.end(aboutPage);
    } else if (request.url === '/contact') {
        return response.end(contactPage);
    } else if (request.url === '/') {
        return response.end(homePage);
    } else {
        response.writeHead(404);
        response.end("NOT FOUND PUTO!")
    }

});

server.listen(1488)*/
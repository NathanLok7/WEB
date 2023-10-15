
import cors from 'cors';
import express from 'express';
import chalk from 'chalk';
import fs from 'fs';
import asciiCats from 'ascii-cats';

const app = express();
const port = 3000;

function print_cat(req, res, next) {
    console.log(asciiCats());
    next();
}

app.use("/users", print_cat)

app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

app.get('/a', (req, res) => {
    if (req.headers['x-auth'] === 'PASS123') {
        fs.readFile('user.json', 'utf8', (err, data) => {            
            if(err){
                console.error(chalk.red("Error al leer el archivo: " + err.message));
                res.status(500).send('Error al leer el archivo.'); 
            }else{
                const users = JSON.parse(data);
                console.log(chalk.green("Usuarios encontrados"));
                console.table(users);
                res.json(users); 
            }
        });
    }else{
        res.status(401).send('Not authenticated.'); 
        console.error(chalk.red("Error. "));
    }
});


app.listen(port, () => {
    console.log(chalk.green('Server running on port 3000. '));
});


app.get('/products', (req, res) => {
    const products = require('./products.json');
    const queryType = req.get("X-Query-Type");

    if (!queryType) {
        res.status(400).send('Debes proporcionar un encabezado X-Query-Type.');
        return;
    }

    switch (queryType) {
        case 'ShowProducts':
            res.json(products);
            break;
        case 'ShowMostExpensiveProduct':
            const mostExpensive = findMostExpensiveProduct(products);
            res.json(mostExpensive);
            break;
        case 'ShowAveragePrice':
            const averagePrice = calculateAveragePrice(products);
            res.json({ averagePrice });
            break;
        default:
            res.status(400).send('Tipo de consulta no válido.');
    }
});

function findMostExpensiveProduct(products) {
    let mostExpensive = products[0];
    for (const product of products) {
        if (product.price > mostExpensive.price) {
            mostExpensive = product;
        }
    }
    return mostExpensive;
}

function calculateAveragePrice(products) {
    const totalPrices = products.reduce((total, product) => total + product.price, 0);
    return totalPrices / products.length;
}

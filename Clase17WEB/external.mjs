
import cors from 'cors';
import express from 'express';
import chalk from 'chalk';
import fs from 'fs';

const app = express();
const port = 3000;

app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

app.get('/a', (req, res) => {
    if(req.headers['x-auth'] === 'PASS123'){
        fs.readFile('user.json', 'utf8', (err, data) => {
            if (err) {
                console.error(chalk.red("Error al leer el archivo: " + err.message));
                res.status(500).send("Error al leer el archivo: " + err.message);
                return;
            }
            const users = JSON.parse(data);
            console.log(chalk.green("Usuarios encontrados"));
            console.table(users);
            res.send("Usuarios encontrados en consola.");
        });
    }else{
        res.send('Not authenticated.');
    }
});


app.listen(port, () => {
    console.log(chalk.green('Server running on port 3000. '));
});

/*
app.use(){
    
}
*/

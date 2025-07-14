import express from 'express';
import { Calculator } from './calculator.mjs';



console.log("Add: 2 + 3 = " + Calculator.add(2, 3))
console.log("Sub: 7 - 3 = " + Calculator.sub(7, 3))
console.log("Mul: 5 x 3 = " + Calculator.Mul(5, 3))
console.log("Div: 9 / 3 = " + Calculator.Div(9, 3))

const app = express();
const port = 3000;

app.use(express.static('public'));


// ✅ ADDITION
app.post('/add', (req, res) => {
    const { a, b } = req.body;
    const result = Calculator.add(a, b);
    res.json({
        operation: "add",
        params: { a, b },
        result
    });
});

// ✅ SOUSTRACTION
app.post('/sub', (req, res) => {
    const { a, b } = req.body;
    const result = Calculator.sub(a, b);
    res.json({
        operation: "sub",
        params: { a, b },
        result
    });
});

// ✅ MULTIPLICATION
app.post('/mul', (req, res) => {
    const { a, b } = req.body;
    const result = Calculator.mul(a, b);
    res.json({
        operation: "mul",
        params: { a, b },
        result
    });
});

// ✅ DIVISION
app.post('/div', (req, res) => {
    const { a, b } = req.body;
    try {
        const result = Calculator.div(a, b);
        res.json({
            operation: "divide",
            params: { a, b },
            result
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
app.use(express.json());
// Endpoint /sum
app.post('/sum', (req, res) => {
    const termes = req.body.termes;
    const result = Calculator.sum(termes);
    res.json({
        operation: "sum",
        params: termes,
        result: result
    });
});

// Endpoint /mean
app.post('/mean', (req, res) => {
    const termes = req.body.termes;
    const result = Calculator.mean(termes);
    res.json({
        operation: "mean",
        params: termes,
        result: result
    });
});
app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});
const processOperation = (pathname, params) => {
    let a = parseInt(params.a);
    let b = parseInt(params.b);
    let operationResult = {
        "operation": pathname.substring(1),
        params
    };
    if (pathname == '/add'){
        operationResult.result = Calculator.add(a, b);
    }else if (pathname == '/substring'){
        operationResult.result = Calculator.substring(a, b);
    }else if (pathname == '/multiply'){
        operationResult.result = Calculator.multiply(a, b);
    }else if (pathname == '/divide'){
        operationResult.result = Calculator.divide(a, b);
    }else {
        throw new Error("Innvalid operation")
    }

}
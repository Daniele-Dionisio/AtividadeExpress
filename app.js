import express from 'express';

const app = express();
const PORT = 3000;

let produtos = [
    {id:1, nome: "monitor", categoria: "eletronicos"},
    {id:2, nome: "teclado", categoria: "eletronicos"}
]

app.get('/produtos/id', (req,res) => {
    const id = req.params.id;
    const produtos = produto.find(
        u => u.id === parseInt(id)
    );
    if(!usuario){
        return res.status(404).json({error:'Produto não encontrado!'});
    }
    res.status(200).json(produto)
});

app.get('/produtos', (req, res) => {
    const categoria = req.query.categoria;

    const resultado = produtos.filter(
        produto => produto.categoria == categoria
    );
    res.json(resultado);
});

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});
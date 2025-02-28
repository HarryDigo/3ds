//copiei os registros do leonardo guerra, mas vou fazer minhas próprias funções e tudo :3
const products = [
    {"id": 1, "name": "manteiga", "type": "alimentos", "supplier": "fulano", "stock": 50},
    {"id": 2, "name": "leite", "type": "alimentos", "supplier": "beltrano", "stock": 120},
    {"id": 3, "name": "arroz", "type": "alimentos", "supplier": "ciclano", "stock": 80},
    {"id": 4, "name": "feijão", "type": "alimentos", "supplier": "fulano", "stock": 90},
    {"id": 5, "name": "macarrão", "type": "alimentos", "supplier": "ciclano", "stock": 150},
    {"id": 6, "name": "tomate", "type": "hortifruti", "supplier": "horta verde", "stock": 200},
    {"id": 7, "name": "alface", "type": "hortifruti", "supplier": "horta verde", "stock": 100},
    {"id": 8, "name": "frango congelado", "type": "carnes", "supplier": "carnes do sul", "stock": 70},
    {"id": 9, "name": "carne bovina", "type": "carnes", "supplier": "carnes do sul", "stock": 60},
    {"id": 10, "name": "queijo", "type": "laticínios", "supplier": "laticínios santos", "stock": 150},
    {"id": 11, "name": "iogurte", "type": "laticínios", "supplier": "laticínios santos", "stock": 200},
    {"id": 12, "name": "pão", "type": "panificadora", "supplier": "ciclano", "stock": 300},
    {"id": 13, "name": "suco de laranja", "type": "bebidas", "supplier": "bebidas tropical", "stock": 180},
    {"id": 14, "name": "refrigerante", "type": "bebidas", "supplier": "bebidas tropical", "stock": 150},
    {"id": 15, "name": "cereal", "type": "alimentos", "supplier": "cerealistas do norte", "stock": 100}
]

const getNames = (products) => {
    return products.map(product => product.name);
}

const getBySupplier = (products, supplier) => {
    return products.filter(product => product.supplier === supplier);
}

const getAvgStock = (products) => {
    const sum = products.reduce((total, product) => total + product.stock, 0);
    return sum / products.length;
}

export default {
    products,
    getNames,
    getBySupplier,
    getAvgStock,
}
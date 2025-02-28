import produtos from "./produtos.js";
//pega o nome de todos os produtos
console.log(produtos.getNames(produtos.products));
//pega os produtos de certo fornecedor
console.log(produtos.getBySupplier(produtos.products, "horta verde"));
//pega a média de estoque de todos os produtos
console.log(produtos.getAvgStock(produtos.products));

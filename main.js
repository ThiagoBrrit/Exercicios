function Celular(modelo, cor, preco) {
    this.modelo = modelo;
    this.cor = cor;
    let _preco = preco;

    this.getPreco = function() {
        return _preco
    }

    this.setPreco = function(valor) {
        if (typeof valor === 'string') {
            return _preco = valor
        }
    }
}

function Iphone(modelo, cor, preco) {
    Celular.call(this, modelo, cor, preco)
}

function Samsung(modelo, cor, preco) {
    Celular.call(this, modelo, cor, preco)
}

function Motorola(modelo, cor) {
    Celular.call(this, modelo, cor)
}

const celular1 = new Iphone('Iphone 13', 'rosa gold', 'R$ 4.000,00')
console.log(celular1.getPreco());

const celular2 = new Samsung('Samsung Galaxy S23', 'azul', 'R$ 5.000,00')
console.log(celular2.getPreco());

const celular3 = new Motorola('martphone Motorola Edge 30', 'roxo',)
celular3.setPreco('R$ 2.000,00')
console.log(celular3.getPreco());
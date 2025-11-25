function Tree(value) {
    this.data = value;
    this.right = null;
    this.left = null;
}

Tree.prototype.add = function (value) {
    if (value < this.data) {
        if (this.left === null) {
            this.left = new Tree(value);
        } else {
            this.left.add(value);
        }
    } else {
        if (this.right === null) {
            this.right = new Tree(value);
        } else {
            this.right.add(value);
        }
    }
};

Tree.prototype.recorrido = function () {
    let contenedor = [];

    if (this.left) {
        let itemsIzquierda = this.left.recorrido();
        contenedor = contenedor.concat(itemsIzquierda);
    }

    if (this.right) {
        let itemsDerecha = this.right.recorrido();
        contenedor = contenedor.concat(itemsDerecha);
    }

    contenedor.push(this.data);
    
    return contenedor;
};

// --- Código de ejecución ---

let tree = new Tree(10);

tree.add(11);
tree.add(9);
tree.add(5);
tree.add(12);

console.log("Estructura del Árbol:");
console.log(tree);

let resultadoRecorrido = tree.recorrido();

console.log("Resultado del recorrido (Post-order):");
console.log(resultadoRecorrido);
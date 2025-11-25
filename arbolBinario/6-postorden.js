function Tree(valor){
    
    this.data =  valor
    this.right = null
    this.left = null
    
}


Tree.prototype.recorrido = function(){
    let contenedor = []
    
    if(this.left){
        this.left(recorrido)
    
    }
    
    if(this.right){
        this.right(recorrido)
    }

    contenedor.push(this.data)
}


tree.recorrido()
console.log(contenedor)
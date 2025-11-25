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
    contenedor.push(this.data)
    
    if(this.right){
        this.right(recorrido)
    }
}


tree.recorrido()
console.log(contenedor)
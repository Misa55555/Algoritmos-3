
function Tree(value){
    this.data = value
    this.right = null
    this.left = null
}

Tree.prototype.add(value) = function (value){
    if(value < this.data){
        if(this.left == null){
            this.left = new Tree(value)
        }
        else{
            this.left.add(value)
        }
    }
    else{
        if(this.right == null){
            this.right = new Tree(value)
        }
        else{
            this.right.add(value)
        }
    }
}

tree.add(10)
tree.add(11)
tree.add(9)
console.log(tree)
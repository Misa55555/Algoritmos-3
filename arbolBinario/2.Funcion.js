tree.prototype.add = function (value) {
    if (value < this.data)
        this.left =  new Tree(value)
    else{
        this.right = new Tree(value)
    }
}

let tree = new Tree(18)
tree.add(10)
tree.add(30)

console.log(30)
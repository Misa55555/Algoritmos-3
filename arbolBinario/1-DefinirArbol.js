function Tree(value){
    this.data = value
    this.right = null
    this.left = null
}

let tree = new Tree(18)
let tree2 = new Tree(23)
let tree3 = new Tree(8)
let tree4 = new Tree(35)

tree.right = tree2
tree. left = tree3
tree.right.right = tree4
console.log(tree)
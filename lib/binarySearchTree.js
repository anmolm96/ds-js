class BinarySearchTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.count = 0;
  }

  add(value) {
    const newNode = new BinarySearchTreeNode(value);
    if(!this.root){
      this.root = newNode; ++ this.count;
    }
    else {
      let curr = this.root;
      while(curr){
        if(newNode.value < curr.left) {
          if(!curr.left) { curr.left = newNode; ++this.count; break; }
          curr = curr.left;
        }
        else if(newNode.value > curr.right) {
          if(!curr.right) { curr.right = newNode; ++this.count; break; }
          curr = curr.right;
        }
        else {
          break;
        }
      }
    }
  }

  delete(value) {
    const deleteNode = (node, _value) => {
      if(!node) { return null; }
      if(_value === node.value) {
        if(!node.left && !node.right) { --this.count; return null; }
        if(!node.left) { --this.count; return node.right; }
        if(!node.right) { --this.count; return node.left; }
        const minRight = this.minimum(node.right);
        node.value = minRight.value;
        node.right = deleteNode(node.right, minRight.value);
        return node;
      }
      else if(_value < node.value) { node.left = deleteNode(node.left, _value); return node; }
      else { node.right = deleteNode(node.right, _value); return node; }
    };

    this.root = deleteNode(this.root, value);
  }

  find(value) {
    var curr = this.root;
    while(curr){
      if(curr.value === value) { return curr; }
      curr = value < curr.value ? curr.left : curr.right;
    }
    return null;
  }

  getRoot() {
    return this.root;
  }

  minimum(node) {
    var curr = node;
    while(curr.left) { curr = curr.left; }
    return curr;
  }

  maximum(node) {
    var curr = node;
    while(curr.right) { curr = curr.right; }
    return curr;
  }

  minValue() {
    return this.root ? minimum(this.root).value : null;
  }

  maxValue() {
    return this.root ? maximum(this.root).value : null;
  }
}

module.exports = BinarySearchTree;

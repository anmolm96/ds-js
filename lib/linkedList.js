class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  first() {
    return this.head;
  }

  add(value) {
    const newNode = new LinkedListNode(value);
    if(!this.head) {  this.head = newNode; }
    else { this.tail.next = newNode; }
    this.tail = newNode;
    ++this.count;
  }

  find(value) {
    let curr = this.head;
    while(curr) {
      if(curr.value === value) {return curr;}
      curr = curr.next;
    }
    return null;
  }

  delete(value) {
    let delNode = this.find(value);
    if(!delNode) { throw {message: "Node does not exist"}; }

    //Case 1 - head
    if(delNode === this.head) {
      this.head = this.head.next === null ? null : this.head.next;
    }
    //Case 2 - tail
    else if (delNode === this.tail) {
      let curr = this.head;
      while(curr.next.next){curr = curr.next;}
      curr.next = null;
    }
    //Case 3 - in between
    else {
      let curr = this.head,
          prev = null;
      while(curr.next) {
        if(curr.next.value === value){ prev = curr; break;}
        curr = curr.next;
      }
      prev.next = delNode.next; // remove the pointer from prev to the node's next
    }

    //Case 1,2,3
    --this.count;

  }

  size() {
    return this.count;
  }

}

module.exports = LinkedList;

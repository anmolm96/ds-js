class DoublyLinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  first() {
    return this.head;
  }

  add(value) {
    const newNode = new DoublyLinkedListNode(value);
    if(!this.head) {  this.head = newNode; }
    else { newNode.prev = this.tail; this.tail.next = newNode; }
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
      if(this.head.next) {
        this.head.next.prev = null;
      }
      this.head = this.head.next === null ? null : this.head.next;
    }
    //Case 2 - tail
    else if (delNode === this.tail) {
      let curr = this.head;
      while(curr.next){curr = curr.next;}
      curr.prev.next = null;
    }
    //Case 3 - in between
    else {
      delNode.prev.next = delNode.next;
      delNode.next.prev = delNode.prev;
    }

    //Case 1,2,3
    --this.count;

  }

  size() {
    return this.count;
  }

}

module.exports = DoublyLinkedList;

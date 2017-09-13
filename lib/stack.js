class Stack {
  constructor() {
    this.stack = [];
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(value) {
    this.stack.push(value);
  }

  peek() {
    return this.stack[this.size() - 1];
  }

  size() {
    return this.stack.length;
  }

  pop() {
    return this.stack.pop();
  }

}

module.exports = Stack;

class Queue {
  constructor() {
    this.queue = [];
  }

  isEmpty() {
    return this.size() === 0;
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    return this.queue.shift();
  }

  size() {
    return this.queue.length;
  }

  peek() {
    return this.queue[0];
  }
}

module.exports = Queue;

class List {
  constructor() {
    this.list = [];
  }

  add(value) {
    this.list.push(value);
  }

  put(value, idx) {
    this.list.splice(idx, 0, value);
  }

  get(idx) {
    return this.list[idx];
  }

  delete(value) {
    this.array = this.list.filter(el => el !== value);
  }

  size(){
    return this.list.length;
  }

  find(value) {
    return this.list.indexOf(value) !== -1;
  }

}

module.exports = List;

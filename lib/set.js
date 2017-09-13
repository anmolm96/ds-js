class Set {
  constructor() {
    this.elements = [];
  }

  add(value) {
    if(!this.contains(value)) { this.elements.push(value); }
  }

  delete(value) {
    if(this.contains(value)) { this.elements.splice(this.elements.indexOf(value), 1); }
  }

  contains(value) {
    return this.elements.indexOf(value) !== -1;
  }

  union(set) {
    const unionSet = new Set();
    set.elements.forEach( value => { unionSet.add(value); } );
    this.elements.forEach( value => { unionSet.add(value); } );
    return unionSet;
  }

  intersection(set) {
    const intersectionSet = new Set();
    this.elements.forEach( value => {
      if(set.contains(value) ) { intersectionSet.add(value); }
    });
  }

  difference(set) {
    const differenceSet = new Set();
    this.elements.forEach( value => {
      if(!set.contains(value) ) { differenceSet.add(value); }
    });
  }

  isSubset(set) {
    set.elements.forEach(value => {
      if(!this.contains(value) ) { return false; }
    });
    return true;
  }

  size() {
    return this.elements.length;
  }
}

module.exports = Set;

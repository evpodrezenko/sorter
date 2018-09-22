class Sorter {

  constructor() {
    this.array = new Array;
    this.numComparator = function compareNum (left, right) {
      return left - right;
    };
    // set default comparator
    this.setComparator(this.numComparator);
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {    
    var tempArr = [];
    indices.sort(this.numComparator);
    
    for (var i = 0; i < indices.length; i++) {
      tempArr.push(this.at(indices[i]));
    } 

    tempArr.sort(this.comparator);
    
    for (var i = 0; i < indices.length; i++) {
     this.array[indices[i]] = tempArr[i];
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;
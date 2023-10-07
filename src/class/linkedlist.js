class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  get(position) {
    if (position > -1 && position < this.length) {
      let current = this.head,
        index = 0;
      while (index++ < position) {
        current = current.next;
      }
      return current?.element || null;
    }
    return null;
  }

  getFirst() {
    return this.head?.element || null;
  }

  getLast() {
    let current = this.head;
    while (current?.next) {
      current = current.next;
    }
    return current?.element || null;
  }

  append(element) {
    let node = new Node(element),
      current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.length++;
  }

  insert(position, element) {}

  removeAt(position) {
    if (position > -1 && position < this.length) {
      let current = this.head,
        previous,
        index = 0;

      if (position === 0) {
        this.head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    } else {
      return null;
    }
  }

  remove(element) {}

  indexOf(element) {}

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  toString() {}

  print() {}
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

export default LinkedList;

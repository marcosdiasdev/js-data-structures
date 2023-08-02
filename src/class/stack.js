class Stack {

    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop(item) {
        return this.items.pop(item);
    }
    peek() {
        return this.items[this.items.length-1];
    }
    clear() {
        this.items = []
    }
    size() {
        return this.items.length;
    }
    isEmpty() {
        return this.items.length == 0;
    }
    print() {
        console.log(this.items.toString);
    }
}

function PrivateStack() {
    let items = [];

    this.push = function(item) {
        items.push(item);
    }
    this.pop = function(item) {
        return items.pop(item);
    }
    this.peek = function() {
        return items[items.length-1];
    }
    this.clear = function() {
        items = []
    }
    this.size = function() {
        return items.length;
    }
    this.isEmpty = function() {
        return items.length == 0;
    }
    this.print = function() {
        console.log(items.toString());
    }
}
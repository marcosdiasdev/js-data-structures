class Queue {

    constructor() {
        this.items = [];
    }
    enqueue(elements) {
        this.items.push(elements);
    }
    dequeue() {
        return this.items.shift();
    }
    front() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    size() {
        return this.items.length;
    }
    print() {
        console.log(this.items.toString());
    }
}

function PrivateQueue() {
    let items = [];

    this.enqueue = function(elements) {
        items.push(elements);
    }
    this.dequeue = function() {
        return items.shift();
    }
    this.front = function() {
        return items[0];
    }
    this.isEmpty = function() {
        return items.length == 0;
    }
    this.size = function() {
        return items.length;
    }
    this.print = function() {
        console.log(items.toString());
    }
}

function PrivatePriorityQueue() {
    let items = [];

    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function(element, priority) {
        let queueElement = new QueueElement(element, priority);

        let added = false;
        for(let i = 0; i < items.length; i++) {
            if(queueElement.priority < items[i].priority) {
                items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if(!added) {
            items.push(queueElement);
        }
    }

    this.dequeue = function() {
        return items.shift();
    }

    this.front = function() {
        return items[0];
    }

    this.isEmpty = function() {
        return items.length == 0;
    }

    this.size = function() {
        return items.length;
    }

    this.print = function() {
        for(let i = 0; i < items.length; i++) {
            console.log(`${items[i].element} - ${items[i].priority}`);
        }
    }
}
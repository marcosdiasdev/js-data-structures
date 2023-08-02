class ArrayList {
    
    constructor(array = []) {
        this.array = array;
    }

    add(item) {
        this.array.push(item);
    }

    swap(i, j) {
        let aux = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = aux;
    }

    bubbleSort() {
        let iterations = 0;
        for(let i = 0; i < this.array.length; i++) {
            for(let j = 0; j < this.array.length - 1; j++) {
                iterations++;
                if(this.array[j] > this.array[j+1]) {
                    this.swap(j, j+1);
                }
            }
        }
        console.log("Iterations: " + iterations);
    }

    enhancedBubbleSort() {
        let iterations = 0;
        for(let i = 0; i < this.array.length; i++) {
            for(let j = 0; j < this.array.length - 1 - i; j++) {
                iterations++;
                if(this.array[j] > this.array[j+1]) {
                    this.swap(j, j+1);
                }
            }
        }
        console.log("Iterations: " + iterations);
    }

    simpleBubbleSort() {
        let iterations = 0;
        for(let i = 0; i < this.array.length - 1; i++) {
            for(let j = i + 1; j < this.array.length; j++) {
                iterations++;
                if(this.array[i] > this.array[j]) {
                    this.swap(i, j);
                }
            }
        }
        console.log("Iterations: " + iterations);
    }

    selectionSort() {
        let minIndex;
        for(let i = 0; i < this.array.length - 1; i++) {
            minIndex = i;
            for(let j = i; j < this.array.length; j++) {
                if(this.array[minIndex] > this.array[j]) {
                    minIndex = j;
                }
            }
            if(i !== minIndex) {
                this.swap(i, minIndex);
            }
        }
    }

    insertionSort() {
        let j, temp;
        for(var i = 1; i < this.array.length; i++) {
            j = i;
            temp = this.array[i];
            while(j > 0 && this.array[j-1] > temp) {
                this.array[j] = this.array[j-1];
                j--;
            }
            this.array[j] = temp;
        }
    }
}
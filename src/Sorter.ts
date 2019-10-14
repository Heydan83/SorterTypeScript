// import { NumbersCollection } from "./NumbersCollection";

interface Sortable {
  length: number;
  compare(leftIndex: number, rigthIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    // const length = this.collection.length;
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }

        // // All of this only works if collection is number[]
        // // If collection is an array of numbers
        // if (this.collection instanceof Array) {
        //   // collection === number[]
        //   if (this.collection[j] > this.collection[j + 1]) {
        //     const lefHand = this.collection[j];
        //     this.collection[j] = this.collection[j + 1];
        //     this.collection[j + 1] = lefHand;
        //   }
        // }

        // // Only going to work if collection is a string
        // // If collection is a string, do this logic instead:
        // // logic to compare and swap character in a string
        // if (typeof this.collection === 'string') {
          
        // }
      }
    }
  }
}
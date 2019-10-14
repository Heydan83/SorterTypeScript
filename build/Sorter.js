"use strict";
// import { NumbersCollection } from "./NumbersCollection";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        // const length = this.collection.length;
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
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
    };
    return Sorter;
}());
exports.Sorter = Sorter;

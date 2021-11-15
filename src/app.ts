import mergeSort from "./merge_sort";

const fillArray = (size: number): number[] => {
    let array: number[] = new Array<number>(size);
    for (let i: number = 0; i < array.length; i++) {
        array[i] = Math.floor((Math.random() * 100) + 1);
    }
    return array;
};

const printArray = (array: number[]): void => {
    array.forEach(element => {
        console.log(element);
    });
};

console.log("BEFORE MERGE SORT\n");
let numbers: number[] = fillArray(100);
printArray(numbers);
mergeSort(numbers);
console.log("AFTER MERGE SORT\n");
printArray(numbers);

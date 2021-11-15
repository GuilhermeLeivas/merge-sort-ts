const mergeSort = (inputArray: number[]): void => {
    const arrayLength = inputArray.length;
    if (arrayLength < 2) {
        return;
    }
    const midWay = Math.ceil(arrayLength / 2);
    const leftHalf: number[] = new Array<number>(midWay);
    const rightHalf: number[] = new Array<number>(arrayLength - midWay)
    fillHalfArray(inputArray, leftHalf, 0, midWay);
    fillHalfArray(inputArray, rightHalf, midWay, arrayLength);
    mergeSort(leftHalf);
    mergeSort(rightHalf);
    merge(inputArray, leftHalf, rightHalf);
};

const fillHalfArray = (
    originalInput: number[],
    half: number[],
    initialIndex: number,
    finalIndex: number): void => {
    let j: number = 0;
    for (let i: number = initialIndex; i < finalIndex; i++) {
        half[j] = originalInput[i];
        j++;
    }
};

const merge = (originalInput: number[], leftHalf: number[], rightHalf: number[]): void => {
    const leftLength: number = leftHalf.length;
    const rightLength: number = rightHalf.length;
    let leftIndex: number = 0, rightIndex: number = 0, originalInputIndex: number = 0;
    while (leftIndex < leftLength && rightIndex < rightLength) {
        if (leftHalf[leftIndex] <= rightHalf[rightIndex]) {
            originalInput[originalInputIndex] = leftHalf[leftIndex];
            leftIndex++;
        } else {
            originalInput[originalInputIndex] = rightHalf[rightIndex];
            rightIndex++;
        }
        originalInputIndex++;
    }
    fillRemainingElements(originalInput, originalInputIndex, leftHalf, leftIndex, leftLength);
    fillRemainingElements(originalInput, originalInputIndex, rightHalf, rightIndex, rightLength);
};

const fillRemainingElements = (
    originalInput: number[],
    originalIndex: number,
    half: number[],
    halfIndex: number,
    halfLength: number) => {
    while (halfIndex < halfLength) {
        originalInput[originalIndex] = half[halfIndex];
        originalIndex++, halfIndex++;
    }
};

export default mergeSort;
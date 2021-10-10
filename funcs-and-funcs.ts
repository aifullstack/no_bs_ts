export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

export type MutationFunction = (v: number) => number;

// make a callback function
export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}

// console.log(arrayMutate([1, 2, 3], (v) => v * 10));

const myNewMutateFunc: MutationFunction = (v: number) => v + 100;

export type addFunction = (val: number) => number;

export function createAdder(num: number): (val: number) => number {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(50));

export function sort(arrayOfNumbers: number[]): number[] {
  console.log("sorting");
  return arrayOfNumbers.sort((a, b) => a - b);
}
export function arrayOfNumbers(size: number) {
  let i: number;
  let array = [];
  let randomNum: number;
  for (i = 0; i < size; i++) {
    randomNum = Math.floor(Math.random() * 50000);
    array.push(randomNum);
  }
  console.log("Generating numbers");
  return array;
}

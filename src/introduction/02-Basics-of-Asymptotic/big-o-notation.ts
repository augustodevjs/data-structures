/**
 * 3 STEPS TO CALCULATE TIME COMPLEXITY:
 * 1 - Take into account only code repetitions.
 * 2 - Check the complexity of language-specific functions/methods (if used)
 * 3 - Ignore constants and use the term with the highest degree.
 */

const example1 = (v: Array<number>, x: number): void => {
  const size = v.length; // O(1)

  for (let i = 0; i < size; i++) { // O(n)
    if (v[i] === x) console.log(true) // O(1)
  }

  console.log(false) // O(1)
}

const myNumber = (number: number): void => {
  console.log(`Your number is ${number}`); // O(1)
}

const mySecondNumber = (number: number): void => {
  for (let i = 1; i <= number; i++) { // O(N)
    console.log(`-> ${i}`);
  }

  console.log(`Your second number is ${number}`);
}

// O(N²)
const myThirdNumber = (number: number): void => {
  for (let i = 1; i <= number; i++) { // O(N)
    let line = "";

    for (let i = 1; i <= number; i++) { // O(N)
      line = line + " " + number;
    }

    console.log(line)
  }

  console.log(`Your third number is ${number}`);
}

const log = (): void => { // O(log2 N)
  for (let i = 1; i <= 32;) {
    console.log("Hello");
    i = i * 2;
  }
}

myNumber(5);
mySecondNumber(10);
myThirdNumber(3);
example1([1, 2], 1)
log();

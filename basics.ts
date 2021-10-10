let userName: string = "max wu";
let hasLoggedIn: boolean = true;

// const names: Array<string> = userName.split(" ");
const names: string[] = userName.split(" ");
const myValues: Array<number> = [1, 2, 3];

interface Person {
  fist: string;
  last: string;
}

const myPerson: Person = {
  fist: "max",
  last: "wu",
};

// utility type, with key and value type
const ids: Record<number, string> = {
  10: "a",
  20: "b",
};

ids[30] = "c";

if (ids[30] === "d") {
}

for (let i = 0; i < 10; i++) {}

[1, 2, 3].forEach((v) => console.log(v));
const out = [4, 5, 6].map((v) => `${v + 10}`);
// console.log(hasLoggedIn);

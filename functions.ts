export function addNumbers(a: number, b: number): number {
  return a + b;
}

// set the 2nd as optional param
export const addStrings = (str1: string, str2: string = ""): string =>
  `${str1} ${str2}`;

// union type
export const format = (title: string, param: string | number) => {
  return `${title} ${param}`;
};

export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

function introduce(salutation: string, ...names: string[]) {
  return `${salutation} ${names}`;
}

export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
}

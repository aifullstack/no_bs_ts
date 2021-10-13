import { NumericLiteral } from "typescript";

function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dogs = [
  {
    name: "mimi",
    age: 12,
  },
  {
    name: "LG",
    age: 13,
  },
];

console.log(pluck(dogs, "age"));
console.log(pluck(dogs, "name"));

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productId: string };
  checkOut: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data]);
}

sendEvent("addToCart", {
  productId: "foor",
  quantity: 1,
  time: 2,
  user: "max",
});

// use command + i to get hint on the json key prompt

sendEvent("checkOut", { time: 1, user: "john" });

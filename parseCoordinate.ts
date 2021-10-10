interface Coordinate {
  x: number;
  y: number;
}

function parseCoordinateFromObject(obj: Coordinate): Coordinate {
  return {
    ...obj,
  };
}

function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
  return {
    x,
    y,
  };
}

// functions overloading
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(str: string): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;

// arg2 is optional.
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };
  // the check will be done at runtime, not compile time. at runtime, Coordinate is an object.
  if (typeof arg1 === "string") {
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      coord[key as "x" | "y"] = parseInt(value, 10);
    });
  } else if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }
  return coord;
}
console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 52, y: 55 }));
console.log(parseCoordinate("x:52,y:55"));

// npx ts-node parseCoordinate.ts

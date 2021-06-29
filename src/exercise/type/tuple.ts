export function tuple(type: [number, string]) {
  return type;
}

let types: [number, string];

types = [1, "hi"];

tuple(types);

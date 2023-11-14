// this func will return a random item from the list
export function singleRandomizer(list: string[]) {
  return list[Math.floor(Math.random() * list.length)];
}

// This function returns a list filled with the given objects
export function multipleRandomizer(fn: () => object, count: number) {
  const result: any[] = [];
  for (let i = 0; i < count; i++) {
    result.push(fn());
  }
  return result;
}

// this func will return a random item from the list
export function singleRandomizer(list: string[]) {
  return list[Math.floor(Math.random() * list.length)];
}

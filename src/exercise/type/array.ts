export function array(list: number[]) {
  return console.log(list);
}

let lists = [1, 2, 3];
lists.push(4);

let twolist = lists.map((item, idx) => item + item);

array(twolist);

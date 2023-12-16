import fs from "fs";
const swap = ([one, two]) => [two, one];
const data = fs
  .readFileSync("./balls.txt", "utf-8")
  .split("\r\n")
  .map((z) => z.split(":"))
  .map((z) => [z[0].slice(5), z[1]]);
const obj = Object.fromEntries(data);
console.log(obj);
const total = {
  red: 12,
  green: 13,
  blue: 14,
};
let sum = 0;
for (const key of Object.keys(obj)) {
  let bool = true;
  const str = obj[key];
  const games = str.split(";");
  games.forEach((g) => {
    const outcomes = g.split(",");
    const outcome = outcomes.map((z) => swap(z.trim().split(" ")));
    const outcomeObj = Object.fromEntries(outcome);
    for (const color of Object.keys(outcomeObj)) {
      if (outcomeObj[color] > total[color]) {
        console.log("reached");
        bool = false;
        return;
      }
    }
  });
  if (bool) {
    sum += Number(key);
  }
}
console.log(sum);

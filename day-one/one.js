import fs from "fs";
const data = fs.readFileSync("./data.txt", "utf8").split("\r\n");
const numbers = data
  .map((s) => s.split("").filter((_) => Number(_)))
  .map((n) => Number(`${n[0]}${n[n.length - 1]}`));
const sum = numbers.reduce((prev, curr) => prev + curr, 0);
console.log(sum);

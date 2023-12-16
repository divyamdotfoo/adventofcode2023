import fs from "fs";
const strNm = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
const data = fs.readFileSync("temp.txt", "utf-8").split("\r\n");
const numbers = data
  .map((text) => {
    let str = "";
    text.split("").forEach((z) => {
      if (Number(z)) {
        str += z;
        return;
      }
      str += z;
      for (const key of Object.keys(strNm)) {
        if (str.includes(key)) {
          str = str.replace(new RegExp(key, "g"), strNm[key]);
        }
      }
    });
    return str;
  })
  .map((z) => z.split("").filter((x) => Number(x)))
  .map((n) => Number(`${n[0]}${n[n.length - 1]}`))
  .filter((z) => z);
console.log(numbers);
const sum = numbers.reduce((p, c) => p + c, 0);
console.log(sum);

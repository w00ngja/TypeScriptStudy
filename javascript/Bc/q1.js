const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function hanoiTower(n, start, mid, end) {
  if (n === 1) {
    console.log(`Move disk 1 from ${start} to ${end}`);
    return;
  }

  hanoiTower(n - 1, start, end, mid);
  console.log(`Move disk ${n} from ${start} to ${end}`);
  hanoiTower(n - 1, mid, start, end);
}

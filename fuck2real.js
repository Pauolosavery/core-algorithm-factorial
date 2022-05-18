function fuck2real(n) {
  let mult = 1;
  // if (n < 1) return 0;
  if (n === 0) return 1;
  if (n > 0) return mult = n * fuck2real(n - 1);
}

console.log(fuck2real(+process.argv[2]));
console.log(countdownScript1(+process.argv[2]));

function countdownScript1(number) {
  let script = 1;

  while(number > 0) {
    script *= number;
    number -= 1;
  }
  return script;
}

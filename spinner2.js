const writeToConsole = (str, timeoutDelay) => setTimeout(() => process.stdout.write(str), timeoutDelay);
const writeSpinnerToConsole = (str) => writeToConsole(`\r${str}  `, timeoutDelay);
const symbols = ['|', '/', '-', '\\'];
let timeoutDelay = 100;

for (let i = 0; i < 9; i++) {
  writeSpinnerToConsole(symbols[i % 4], timeoutDelay);
  timeoutDelay += 200;
}
writeToConsole(`\n`, timeoutDelay);
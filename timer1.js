const args = process.argv;

let updatedArgs = args.slice(2).sort();

console.log(updatedArgs);

const beep = function (delay) {

  if (delay > 0 && !isNaN(delay)) {

  setTimeout(() => {
    process.stdout.write(".")
  }, delay * 1000)
}
};

for (const char of updatedArgs) {
  beep(char);
}

// edge cases:
// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
// FUNCTION
// typewriter: simulates typing out a sentence by way of incremented setTimeout delay values
const sentence = "while the digital revolution in music streaming is sublime, vinyl is still king";
let typeCount = 0;
let feed = sentence + "\n";

const type = function() {
  const stop = feed.length + 1;
  for (let i = 0; i < stop; i++) {
    if (i < feed.length) {
      let delay = (i * 120)
      setTimeout(() => {
      process.stdout.write(feed.charAt(i));
    }, delay);
  }
}
}

type();
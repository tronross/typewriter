const sentence = "while the digital revolution in music streaming is sublime, vinyl is still king";
let typeCount = 0;

const type = function() {
  if (typeCount < sentence.length) {
  process.stdout.write(sentence.charAt(typeCount));
  typeCount++;
}
}

const typeOut = function() {
  setInterval(type(), 120);
};
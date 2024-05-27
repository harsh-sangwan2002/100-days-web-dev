let sum = 0;

process.argv.forEach((ele, idx) => {
  if (idx >= 2) sum += parseInt(ele);
});

console.log(sum);

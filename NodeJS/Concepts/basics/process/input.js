process.stdout.write("Enter the name\n");
process.stdin.on("data", (chunk) => {
  console.log(chunk.toString());
});

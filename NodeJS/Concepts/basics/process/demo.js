// Current working directory
console.log(process.cwd());

// Registering an event
process.on("exit", (code) => {
  console.log(code);
});

process.on("uncaughtException", (err) => {
  console.log(err);
});

// Architecture of the system
console.log(process.arch);
show();

// Tells the node version
console.log(process.version);

console.log(process.platform);

let gameName = "Call of Duty: Modern Warfare";

gameName = "Call of Duty: Modern Warfare 2";
console.log('Game Name:', gameName);

const gameGenre = "First-Person Shooter";
gameGenre = "Action"; // This will cause an error because gameGenre is a constant

console.log('Game Genre:', gameGenre);
/**
gameGenre = "Action"; // This will cause an error because gameGenre is a constant     
          ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (C:\CS DEPT\VS CODE\Full-Stack-Web-Development\JSFoundation\Part1\changes.js:7:11)
    at Module._compile (node:internal/modules/cjs/loader:1730:14)
    at Object..js (node:internal/modules/cjs/loader:1895:10)
    at Module.load (node:internal/modules/cjs/loader:1465:32)
    at Function._load (node:internal/modules/cjs/loader:1282:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    at node:internal/main/run_main_module:36:49

Node.js v22.16.0
*/
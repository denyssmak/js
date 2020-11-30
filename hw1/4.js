let a = 12;
let b = "";

for (let y = 0; y < a; y++) { 
  for (let x = 0; x < a; x++) {
    if ((x + y) % 2 == 0)
      b += ".";
    else 
      b += "#";
  }
  b += "\n";
}

console.log(b);
// for //
for (let l = 0; l < 5; l++) {
    console.log(`Iterasi ke ${l}`);
}

// Do while
let m = 0;
do {
    console.log(`Iterasi ke ${m}`);
    m += 1;
} while (m < 5);

// while
let n = 0
while (n < 5) {
    console.log(`Iterasi ke ${n}`);
    n++;
}

// Break
for (let p = 0; p < 5; p++) {
    if (p == 3); {
        break;
    }
    console.log(`Iterasi ke ${p}`);
}

// Continue
for (let q = 0; q < 5; q++) {
    if (q == 3) {
        continue;
    }
    console.log(`Iterasi ke ${q}`);
}

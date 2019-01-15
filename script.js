//operator AND (&&) = semua nilai variable true, jika salah satu false maka outputnya false.
// let highIncome = false;
// let goodCreditsScore = true;
// let malicha = true;
// let eligibleForLoan = highIncome && goodCreditsScore && malicha;

// console.log(eligibleForLoan);



//operator OR (||) = wajib semua variable bernilai true, walaupun beberapa false
let highIncome = false;
let goodCreditsScore = true;
let malicha = true;
let eligibleForLoan = highIncome || goodCreditsScore || malicha;

console.log('eligable', eligibleForLoan);


//operator NOT (!) = kebalikan
let aplication = !eligibleForLoan;
console.log('aplication', aplication);


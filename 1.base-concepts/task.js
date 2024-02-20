"use strict"
function solveEquation(a, b, c) {
  const arr = [];
  const d = b * b - 4 * a * c;
  if ( d > 0 ) {
    const x1 = (-b + Math.sqrt(d) )/(2*a);
    const x2 = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x1);
    arr.push(x2);
  } else if (d===0) {
    const x = -b/(2*a);
    arr.push(x);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths)  {
    if (isNaN(parseFloat(percent)) || isNaN(parseFloat(contribution)) || isNaN(parseFloat(amount)) || isNaN(parseFloat(countMonths))) {
      return false;
    }
  
    percent = percent / 100;
    percent = percent / 12;
  
    const creditBody = amount - contribution;
  
    const monthPayment = creditBody * (percent + percent / ((1 + percent)**countMonths - 1));
  
    const totalAmount = monthPayment * countMonths;
  
    const roundedTotalAmount = Math.round(totalAmount * 100) / 100;
  
    return roundedTotalAmount;
  }


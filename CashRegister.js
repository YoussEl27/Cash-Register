function checkCashRegister(price, cash, cid) {
   const currencyUnits = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let change = cash - price;
  let totalCid = 0; 

  cid.forEach(el => totalCid += el[1])
  totalCid = Math.round(totalCid * 100) / 100; 

  if (change > totalCid) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  
  if (change === totalCid) {
    return {status: "CLOSED", change: cid}
  }
  
  let changeArr = []
  for (let i = cid.length - 1; i >= 0; i--) {
    let coinName = cid[i][0]; 
    let coinValue = currencyUnits[coinName]; 
    let coinAmount = cid[i][1]; 
    let amountToReturn = 0; 

    while (change >= coinValue && coinAmount > 0) {
      change -= coinValue; 
      coinAmount -= coinValue; 
      amountToReturn += coinValue; 
      
      change = Math.round(change * 100) / 100; 
    }

    if (amountToReturn > 0) {
      changeArr.push([coinName, amountToReturn]); 
    }
  }

  if (change > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }

  return {status: "OPEN", change: changeArr}
}

let cid = [
    ["PENNY", 0.97],
    ["NICKEL", 2.05],
    ["DIME", 2.90],
    ["QUARTER", 3.75],
    ["ONE", 89],
    ["FIVE", 50],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
];

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
const penniesDisplay = document.getElementById("Pennies");
const nickelsDisplay = document.getElementById("Nickels");
const dimesDisplay = document.getElementById("Dimes");
const quartersDisplay = document.getElementById("Quarters");
const onesDisplay = document.getElementById("Ones");
const fivesDisplay = document.getElementById("Fives");
const tensDisplay = document.getElementById("Tens");
const twentiesDisplay = document.getElementById("Twenties");
const hundredsDisplay = document.getElementById("Hundreds");

function updateCashDrawerDisplay(cid) {
    penniesDisplay.textContent = `$${cid[0][1].toFixed(2)}`;
    nickelsDisplay.textContent = `$${cid[1][1].toFixed(2)}`;
    dimesDisplay.textContent = `$${cid[2][1].toFixed(2)}`;
    quartersDisplay.textContent = `$${cid[3][1].toFixed(2)}`;
    onesDisplay.textContent = `$${cid[4][1].toFixed(2)}`;
    fivesDisplay.textContent = `$${cid[5][1].toFixed(2)}`;
    tensDisplay.textContent = `$${cid[6][1].toFixed(2)}`;
    twentiesDisplay.textContent = `$${cid[7][1].toFixed(2)}`;
    hundredsDisplay.textContent = `$${cid[8][1].toFixed(2)}`;
}

const totalePrice = document.getElementById("totale");
const cashCustomer = document.getElementById("cashNumber");
const purchaseButton = document.getElementById("purchase-btn");
const statusText = document.getElementById("statusText");
const changeResult = document.getElementById("changeResult");

purchaseButton.addEventListener("click", () => {
    const totalePrc = parseFloat(totalePrice.innerHTML);
    const cashGiven = parseFloat(cashCustomer.value);
    if (!isNaN(cashGiven)) {
        const result = checkCashRegister(totalePrc, cashGiven, cid);
        statusText.innerHTML = result.status;
        changeResult.innerHTML = result.change
            .map(item => `${item[0]}: $${item[1].toFixed(2)}`)
            .join("<br>");
        updateCashDrawerDisplay(cid)
    }
    else {
        alert("ungültige Eingabe");
    }
});
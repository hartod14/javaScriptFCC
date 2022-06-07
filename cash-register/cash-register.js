function checkCashRegister(price, cash, cid) {
  let amount = {
    "ONE HUNDRED": 10000,
    "TWENTY": 2000,
    "TEN": 1000,
    "FIVE": 500,
    "ONE": 100,
    "QUARTER": 25,
    "DIME": 10,
    "NICKEL": 5,
    "PENNY": 1,
  }

  let change = cash * 100 - price * 100
  let cidTotal = 0;
  for (let elem of cid) {
    cidTotal += elem[1] * 100
  }
  if (change > cidTotal) {
    return { status: "INSUFFICIENT_FUNDS", change: [] }
  } else if (change === cidTotal) {
    return { status: "CLOSED", change: cid }
  } else {
    cid = cid.reverse()
    let result = []
    for (let elem of cid) {
      elem[1] *= 100
      let holder = [elem[0], 0]
      while (change >= amount[elem[0]] && elem[1] >= amount[elem[0]]) {
        change -= amount[elem[0]]
        elem[1] -= amount[elem[0]]
        holder[1] += amount[elem[0]] / 100
      }
      if (holder[1] > 0) {
        result.push(holder)
      }
    }
    if (change > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] }
    }
    return { status: "OPEN", change: result }
  }
}
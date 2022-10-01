import React from "react";

function Balance({ transactions }) {
  const amount = transactions.map((transaction) => {
    return Number(transaction.amount);
  });
  const total = amount.reduce((acc, item) => acc + item, 0);
  return (
    <div className="balance">
      <h4>BALANCE</h4>
      <h1 className={total > 0 ? "debit" : total < 0 ? "credit" : "zero"}>
        &#8373;{total}
      </h1>
    </div>
  );
}

export default Balance;

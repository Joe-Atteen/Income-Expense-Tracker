import React from "react";
import SingleTransaction from "./SingleTransaction";

function AllTransactions({ transactions }) {
  return (
    <div className="alltransactions">
      <h3>Transaction History</h3>
      <div className="transactionlist">
        {transactions.map((transactionInfo, index) => {
          return (
            <SingleTransaction key={index} transaction={transactionInfo} />
          );
        })}
      </div>
    </div>
  );
}

export default AllTransactions;

import React from "react";
import { connect } from "react-redux";
import { AddNewTransaction } from "../redux/Action";
import Balance from "./Balance";
import AddTransaction from "./AddTransaction";
import { v4 as uuidv4 } from "uuid";
import AllTransactions from "./AllTransactions";

export const Main = (props) => {
  const transactions = props.transactions;
  const AddNewTransaction = props.AddNewTransaction;

  return (
    <div className="main">
      <Balance transactions={transactions} />
      <AllTransactions transactions={transactions} />
      <AddTransaction AddNewTransaction={AddNewTransaction} id={uuidv4()} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

const mapDispatchToProps = (dispatch) => ({
  AddNewTransaction: (newTransaction) =>
    dispatch(AddNewTransaction(newTransaction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

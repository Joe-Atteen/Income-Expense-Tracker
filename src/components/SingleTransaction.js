import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { DeleteTransaction } from "../redux/Action";
import Backdrop from "./Backdrop";
import TransactionEdit from "./TransactionEdit";

function SingleTransaction({ transaction }) {
  const dispatch = useDispatch();

  const deleteTransaction = () => {
    dispatch(DeleteTransaction(transaction.id));
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="single-transaction">
      <div
        className={
          transaction.amount > 0
            ? "plus"
            : transaction.amount < 0
            ? "minus"
            : "none"
        }
        id="s-t"
      >
        <h5 className="option">{transaction.option}</h5>
        <h5 className="date">{transaction.date}</h5>
        <div className="item-amount">
          <h5 className="item">{transaction.item}</h5>
          <h5 className="amount">&#8373;{transaction.amount}</h5>
        </div>
      </div>
      <div className="edit-close">
        <div className="edit" onClick={openModal}>
          <FaEdit />
        </div>
        <div className="close" onClick={deleteTransaction}>
          X
        </div>
      </div>
      {modalIsOpen && <Backdrop />}
      {modalIsOpen && (
        <TransactionEdit transaction={transaction} onCancel={closeModal} />
      )}
    </div>
  );
}

export default SingleTransaction;

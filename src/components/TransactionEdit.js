import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { EditTransaction } from "../redux/Action";

function TransactionEdit(props) {
  const [option, setOption] = useState(props.transaction.option);
  const [item, setItem] = useState(props.transaction.item);
  const [date, setDate] = useState(props.transaction.date);
  const [amount, setAmount] = useState(props.transaction.amount);
  const [id, setId] = useState(props.transaction.id);
  const dispatch = useDispatch();

  const Submit = (e) => {
    e.preventDefault();
    setOption("");
    setItem("");
    setDate("");
    setAmount("");
    setId("");
    props.onCancel();
    dispatch(EditTransaction({ option, item, date, amount, id }));
  };

  return (
    <div>
      <form className="modal">
        <h3>EDIT TRANSACTION</h3>
        <label htmlFor="categories" className="cat">
          Categories:
        </label>
        <select
          name="categories"
          id="categories"
          title="select category"
          className="category"
          value={option}
          onChange={(e) => {
            setOption(e.target.value);
          }}
        >
          <optgroup label="Select a category">
            <option value="Housing & Rent">Housing & Rent</option>
            <option value="Food & Drinks">Food & Drinks</option>
            <option value="Transportation">Transportation</option>
            <option value="Income">Income</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </optgroup>
        </select>
        <br />
        <input
          type="text"
          placeholder="Enter item/service..."
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <br />
        <input
          type="date"
          placeholder="Select date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <br />
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <button type="button" className="btn" onClick={Submit}>
          Done
        </button>
      </form>
    </div>
  );
}

export default TransactionEdit;

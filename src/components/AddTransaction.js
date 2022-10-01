import React, { useState } from "react";

function AddTransaction({ AddNewTransaction, id }) {
  const [option, setOption] = useState("");
  const [item, setItem] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    let transactionInfo = { option, item, date, amount, id: id };
    AddNewTransaction(transactionInfo);
    setOption("");
    setItem("");
    setDate("");
    setAmount("");
  };

  return (
    <div className="transaction">
      <h3>Add Transaction</h3>
      <form>
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
      </form>
      <button type="button" className="btn" onClick={Submit}>
        Add Transaction
      </button>
    </div>
  );
}

export default AddTransaction;

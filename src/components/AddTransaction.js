import React, { useState } from "react";
import { useForm } from "react-hook-form";

function AddTransaction({ AddNewTransaction, id }) {
  const [option, setOption] = useState("");
  const [item, setItem] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Submit = (data) => {
    let transactionInfo = { option, item, date, amount, id: id };
    AddNewTransaction(transactionInfo);
    setOption("");
    setItem("");
    setDate("");
    setAmount("");
    console.log(data);
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
          {...register("cat", { required: true })}
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
          {...register("service", { required: true })}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        {errors.service && (
          <p className="warning">This field must be filled!</p>
        )}
        <br />
        <input
          type="date"
          placeholder="Select date"
          value={date}
          {...register("dat", { required: true })}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        {errors.dat && <p className="warning">This field must be filled!</p>}
        <br />
        <input
          type="number"
          placeholder="Enter amount (precede it with a '-' if it's an expense)"
          value={amount}
          {...register("number", { required: true })}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        {errors.number && <p className="warning">This field must be filled!</p>}
      </form>
      <button type="button" className="btn" onClick={handleSubmit(Submit)}>
        Add Transaction
      </button>
    </div>
  );
}

export default AddTransaction;

export const AddNewTransaction = (newTransaction) => {
  return {
    type: "ADD_NEW_TRANSACTION",
    payload: newTransaction,
  };
};

export const DeleteTransaction = (id) => {
  return {
    type: "DELETE_TRANSACTION",
    payload: id,
  };
};

export const EditTransaction = (data) => {
  return {
    type: "EDIT_TRANSACTION",
    payload: { data },
  };
};

let initialState = {
  transactions: [],
};

let expenseTrackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "DELETE_TRANSACTION":
      const filteredTransactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
      return {
        ...state,
        transactions: filteredTransactions,
      };
    case "EDIT_TRANSACTION":
      const editTransactions = state.transactions.map((transaction) =>
        transaction.id === action.payload.data.id
          ? action.payload.data
          : transaction
      );
      return {
        ...state,
        transactions: editTransactions,
      };
    default:
      return state;
  }
};

export default expenseTrackerReducer;

export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        )
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        // Keep current state and add new input coming from action payload
        transactions: [action.payload, ...state.transactions]
      };
    default:
      return state;
  }
};

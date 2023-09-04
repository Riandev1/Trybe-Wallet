import { AnyAction } from 'redux';
import { WALLET_DATA, EXPENSES_DATA } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

function wallet(state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case WALLET_DATA:
      return {
        ...state,
        currencies: action.currencies,
      };
    case EXPENSES_DATA:
      return {
        ...state,
        expenses: [
          ...state.expenses,
          {
            ...action.payload.expenses,
            id: state.expenses.length,
            exchangeRates: action.payload.data,
          },
        ],
      };
    default:
      return state;
  }
}

export default wallet;

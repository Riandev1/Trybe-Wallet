import { AnyAction } from 'redux';
import { LOGIN_DATA } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
};

function user(state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case LOGIN_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default user;

import { AnyAction } from 'redux';
import { USER_LOGIN } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
};

const personalData = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload;
    default:
      return state;
  }
};

export default personalData;

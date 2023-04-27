import { SET_TRANSCRIPT } from './actions';

const initialState = {
  transcript: '',
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case SET_TRANSCRIPT:
      return {
        ...state,
        transcript: action.payload,
      };
    default:
      return state;
  }
}

export default reducers;
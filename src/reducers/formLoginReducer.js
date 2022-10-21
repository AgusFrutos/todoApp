import { SET_USER } from "../actions/formLoginActions";

export const initialState = {
  user: "",
  password: "",
};

export const formLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state, [action.field]: action.payload
      };
    }

    default:
      return state;
  }
};

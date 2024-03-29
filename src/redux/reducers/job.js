import { GET_JOBS } from "../actions";

const initialState = {
  jobsList: [],
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobsList: action.payload,
      };

    default:
      return state;
  }
};

export default jobReducer;

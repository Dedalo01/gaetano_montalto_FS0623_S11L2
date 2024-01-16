import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions";

const initialState = {
  list: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        list: state.list.filter((fav) => fav !== action.payload),
      };

    default:
      return state;
  }
};

export default favouritesReducer;

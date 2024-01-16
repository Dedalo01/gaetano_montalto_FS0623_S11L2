import { combineReducers, configureStore } from "@reduxjs/toolkit";
//import mainReducer from '../reducers'
import favouritesReducer from "../reducers/favourites";
import jobReducer from "../reducers/job";

const bigReducer = combineReducers({
  favourites: favouritesReducer,
  job: jobReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;

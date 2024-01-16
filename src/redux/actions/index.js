export const SAVE_QUERY = "SAVE_QUERY";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";
export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const GET_JOBS = "GET_JOBS";
/* export const saveQueryAction = (query) => {
  return async (dispatch) => {
    try {
      const res = await fetch();
    } catch (err) {}
  };
}; */

export const addToFavouritesAction = (company_name) => {
  return {
    type: ADD_TO_FAVORITE,
    payload: company_name,
  };
};

export const removeFromFavouritesAction = (i) => {
  return {
    type: REMOVE_FROM_FAVORITE,
    payload: i,
  };
};

export const getJobsAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
          query +
          "&limit=20"
      );
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

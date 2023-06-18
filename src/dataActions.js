// dataActions.js
export const setData = (data) => {
  return {
    type: "SET_DATA",
    payload: data,
  };
};

export const fetchData = (formData) => {
  return async (dispatch) => {
    try {
      // Send a POST request to the backend
      const response = await fetch("https://react-covid.onrender.com/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      // Dispatch the setData action to update the data in Redux store
      dispatch(setData(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchAllData = () => {
  return async (dispatch) => {
    try {
      // Send a GET request to fetch all data from the backend
      const response = await fetch("https://react-covid.onrender.com/data");
      const data = await response.json();
      console.log(data);

      // Dispatch the setData action to update the data in Redux store
      dispatch(setData(data));
      // dispatch(setDuration(data.duration));
    } catch (error) {
      console.error(error);
    }
  };
};

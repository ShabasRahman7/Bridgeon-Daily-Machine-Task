export const fetchDataStart = () => ({ type: 'FETCH_DATA_START' });
export const fetchDataSuccess = (data) => ({ type: 'FETCH_DATA_SUCCESS', payload: data });
export const fetchDataError = (error) => ({ type: 'FETCH_DATA_ERROR', payload: error });

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataStart());
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataError(error.message));
    }
  };
};

const initialState = {
  loading: false,
  data: null,
  error: null
};

export const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_START':
      return { ...state, loading: true, data: null, error: null };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_DATA_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

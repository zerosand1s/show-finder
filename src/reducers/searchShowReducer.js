const searchShowReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCH_SHOW_REQUEST':
      return Object.assign({}, state, {
        isRequestSent: action.requestSent
      });

    case 'SEARCH_SHOWS_SUCCESS':
      return Object.assign({}, state, {
        shows: action.shows
      });

    case 'SEARCH_SHOWS_ERROR':
      return Object.assign({}, state, {
        error: action.error
      });

    default:
      return Object.assign({}, state, {
        shows: []
      });
  }
};

export default searchShowReducer;
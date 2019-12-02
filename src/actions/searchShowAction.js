export function searchShowAction(title) {
  return function (dispatch) {
    dispatch({
      type: 'SEARCH_SHOW_REQUEST',
      requestSent: true
    });

    return fetch('http://api.tvmaze.com/search/shows?q=sherlock')
      .then(response => response.json())
      .then(resJson => {
        console.log(resJson);
        dispatch({
          type: 'SEARCH_SHOWS_SUCCESS',
          shows: resJson
        });
        dispatch({
          type: 'SEARCH_SHOW_REQUEST',
          requestSent: false
        });
      })
      .catch(err => {
        console.log('ERROR: ', err);
        dispatch({
          type: 'SEARCH_SHOWS_SUCCESS',
          movies: []
        });
        dispatch({
          type: 'SEARCH_SHOW_REQUEST',
          requestSent: false
        });
      });
  }
}
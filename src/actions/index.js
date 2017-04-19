export const receivedHikes = (hikes) => {
  return {
    type: 'RECEIVED_HIKES',
    hikes
  }
}


// API Calls
export const fetchHikes = () => {
  return dispatch => {
    fetch('/hikes')
    .then(response => response.json())
    .then(json => dispatch(receivedHikes(json.trails[0].hike)))
  }
}

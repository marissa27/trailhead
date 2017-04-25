export const receivedHikes = (hikes) => {
  return {
    type: 'RECEIVED_HIKES',
    hikes
  }
}

export const favoriteHikes = (favorites) => {
  return {
    type: 'ADD_FAVORITE',
    favorites
  }
}

export const removeHike = (id) => {
  return {
    type: 'REMOVE_FAVORITE',
    id
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

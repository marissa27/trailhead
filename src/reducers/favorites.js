const favorites = (state=[], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return action.favorites
    case 'REMOVE_FAVORITE':
      return state.filter(value => value !== action.id)
    default:
      return state;
  }
}

export default favorites;

const remove = (state=[], action) => {
  switch (action.type) {
    case 'REMOVE_FAVORITE':
      return state.filter(value => value !== action.id)
    default:
      return state;
  }
}

export default remove;

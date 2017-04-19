const hikes = (state=[], action) => {
  switch (action.type) {
    case 'RECEIVED_HIKES':
      return action.hikes
    default:
      return state;
  }
}

export default hikes;

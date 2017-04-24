import * as actions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Favorites from '../components/Favorites/Favorites'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

import * as actions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '../components/Card/Card'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

import * as actions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App/App'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

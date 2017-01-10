import { connect } from 'react-redux';
import App from './app';

const mapStateToProps = (state) => ({
  state
});

export default connect(
  mapStateToProps,
  null
)(App);

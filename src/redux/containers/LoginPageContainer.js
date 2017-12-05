import { lifecycle } from 'recompose';
import { connect } from 'react-redux';

import LoginPage from '../../components/auth/LoginPage';
import LoginThunk from '../thunks/LoginThunk';
import selectAuthenticatedUser from '../selectors/selectAuthenticatedUser';

function mapStateToProps(state) {
  return {
    // authenticateduser: selectAuthenticatedUser(state)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    login: credentials =>
      dispatch(LoginThunk.create(credentials, ownProps.history))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const addLifecycle = lifecycle({
  componentDidMount() {}
});

export default connectToStore(addLifecycle(LoginPage));

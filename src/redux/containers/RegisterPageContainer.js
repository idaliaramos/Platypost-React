import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import RegisterPage from '../../components/auth/RegisterPage';
// import createUserThunk from '../thunks/createUserThunk';
import selectAuthenticatedUser from '../selectors/selectAuthenticatedUser';

function mapStateToProps(state) {
  return {
    // authenticatedUser: selectAuthenticatedUser(state)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    async onSubmit(attributes) {
      // await dispatch(CreateUserThunk.create(attributes));
      ownProps.history.push('/');
    }
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withLifecycle = lifecycle({
  componentDidMount() {
    if (this.props.authenticatedUser) this.props.history.push('/');
  }
});

export default compose(connectToStore, withLifecycle)(RegisterPage);

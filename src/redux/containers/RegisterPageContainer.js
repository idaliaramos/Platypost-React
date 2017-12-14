import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import RegisterPage from '../../components/auth/RegisterPage';
import createUserThunk from '../thunks/createUserThunk';
import selectAuthenticatedUser from '../selectors/selectAuthenticatedUser';

function mapStateToProps(state) {
  return {
    // authenticatedUser: selectAuthenticatedUser(state)
    //check
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    async registerUser(attributes) {
      console.log(attributes, 'this is the attributes');
      await dispatch(createUserThunk.create(attributes));
      ownProps.history.push('/login');
    }
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withLifecycle = lifecycle({
  componentDidMount() {
    if (this.props.authenticatedUser) this.props.history.push('/send');
  }
});

export default compose(connectToStore, withLifecycle)(RegisterPage);

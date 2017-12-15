import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import SendPage from '../../components/testComponents/SendPage';
//import thunks

function mapStateToProps(state, ownProps) {}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => {}
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(SendPage);

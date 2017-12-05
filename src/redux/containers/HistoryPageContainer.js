import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import createHistoryThunk from '../thunks/createHistoryThunk';
// import DestinationFormComponent from '../components/destination/DestinationFormComponent';
import HistoryPage from '../../components/table/HistoryPage';
import getHistoryCardsThunk from '../thunks/getHistoryCardsThunk';


function mapStateToProps(state, ownProps) {
  return {
    history: state.history,
    fail: state.fail
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps, 'this ownprops');
  return {
    onMount: () => dispatch(getHistoryThunk(ownProps)),
    //maybe not on mount, need t pass the id

    onCreateHistory: (mail) =>
      dispatch(createhistoryThunk(mail)),
    },

  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(HistoryPage);

import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import HistoryPage from '../../components/table/HistoryPage';
import getHistoryThunk from '../thunks/getHistoryThunk';

// function mapStateToProps(state, ownProps) {
//   console.log(state, 'this is the state');
//   return {
//     historyData: state.historyData
//   };
// }
function mapStateToProps(state, ownProps) {
  console.log(state, 'this is the state');
  if (!state) {
    return {};
  } else {
    return {
      historyData: state.historyData
      // fail: state.fail
      //TO:DO help
    };
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps, 'ownprops');
  return {
    onMount: () => dispatch(getHistoryThunk(ownProps))
    //maybe not on mount, need t pass the id
  };
}
const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(HistoryPage);

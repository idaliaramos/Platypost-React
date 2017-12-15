import getUserHistory from '../../api/getUserHistory';

export default function getHistoryThunk(props) {
  return async (dispatch, getState, env) => {
    try {
      const history = await getUserHistory();
      console.log(history, 'this is the history, thunk');
      dispatch({ type: 'GET_HISTORY_COMPLETED', history });
    } catch (error) {
      console.log(error, 'this is the eroor in the thunk');
      if (
        error.message === 'Authentication Error' ||
        error.message === 'Invalid token specified'
      ) {
        props.history.push('/login');
        return;
      }
    }
  };
}

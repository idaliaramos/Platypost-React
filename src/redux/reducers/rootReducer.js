export default function rootReducer(
  currentState = {
    historyData: []
  },
  action
) {
  switch (action.type) {
    case 'GET_HISTORY_COMPLETED':
      const history = currentState.historyData.find(
        history => history.id === action.history.id
      );
      return history
        ? currentState
        : {
            ...currentState,
            historyData: [...currentState.historyData, action.history]
          };
  }
}

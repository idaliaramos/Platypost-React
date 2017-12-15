export default function rootReducer(
  currentState = {
    // senderAddress: '',
    // receiverAddress: '',
    // message: '',
    historyData: []
  },
  action
) {
  switch (action.type) {
    //TODO:help
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

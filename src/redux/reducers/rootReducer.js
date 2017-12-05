export default function rootReducer(
  currentState = {
    senderAddress: '',
    receiverAddress: '',
    message: '',
    userHistory: null
  },
  action
) {
  switch (action.type) {
    case 'GET_HISTORY_COMPLETED':
      return {
        ...currentState,
        history: action.history
      };
  }
}

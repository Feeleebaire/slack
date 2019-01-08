import { SET_MESSAGES, SEND_MESSAGE, CHANNEL_SELECTED} from '../actions';
export default function(state= null, action){
  switch(action.type){
    case SET_MESSAGES: {
      return action.payload.messages;
    }
    case SEND_MESSAGE: {
      let newMessages = state.slice(0);
      newMessages.push(action.payload);
      return newMessages;
    }
    case CHANNEL_SELECTED: {
      return []; // Channel has changed. Clearing view.
    }
    default:
      return state;
  }
}

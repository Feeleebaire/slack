// TODO: add and export your own actions

const BASE_URL = 'https://wagon-chat.herokuapp.com';

export const SET_MESSAGES = 'SET_MESSAGES';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CHANNEL_SELECTED = 'CHANNEL_SELECTED';


const url = 'https://wagon-chat.herokuapp.com/general/messages';
export function fetchMessages(){
  const promise = fetch(url)
    .then(response => response.json());
    return {
      type: SET_MESSAGES,
      payload: promise
    };
}

export function sendMessage(channel, author, content){
  const body= {channel: channel, author: author, content:content};
  const promise = fetch(url, {
    method: 'POST',
    header: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      body: JSON.stringify(body)
    }).then(r => r.json());
    return {
      type: SEND_MESSAGE,
      payload: promise
    };
}

export function selectChannel(channel){
  return {
    type: CHANNEL_SELECTED,
    payload: channel
  };
}

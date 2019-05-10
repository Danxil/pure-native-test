export const sendMsg = data => ({
  type: 'MESSAGE_SENT',
  payload: data,
});

export const receiveMsg = data => ({
  type: 'MESSAGE_RECEIVED',
  payload: data,
});

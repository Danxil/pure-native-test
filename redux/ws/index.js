const initialState = [
  { type: 'received', message: 'none' },
];

const wsReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case 'MESSAGE_SENT':
      return [...state, { type: 'sent', message: payload }];
    case 'MESSAGE_RECEIVED':
      return [...state, { type: 'received', message: payload }];
    default:
      return state;
  }
};

export default wsReducer;

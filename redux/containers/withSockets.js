import { connect } from 'react-redux';
import {
  sendMsg,
  receiveMsg,
} from '../ws/actions';

import wsConnection from '../../sockets/socket';

export default () => connect(
  ({ ws }) => ({
    ws,
  }),
  dispatch => ({
    sendMsg: (data) => {
      dispatch(sendMsg(data));
      wsConnection.send(data);
    },
    receiveMsg: (data) => {
      console.log(data);
      return dispatch(receiveMsg(data));
    },
  }),
);

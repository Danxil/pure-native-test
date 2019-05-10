import { connect } from 'react-redux';
import {
  sendMsg,
  receiveMsg,
} from '../ws/actions';


export default () => connect(
  ({ ws }) => ({
    ws,
  }),
  dispatch => ({
    sendMsg: (data) => {
      dispatch(sendMsg(data));
    },
    receiveMsg: (data) => {
      return dispatch(receiveMsg(data));
    },
  }),
);

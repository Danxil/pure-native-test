import { useCallback } from 'react';
import { useDispatch } from 'redux-react-hook';
import {
  getUserInfo,
  logout,
} from '../../user/actions';

export default () => {
  const dispatch = useDispatch();
  return {
    getUserInfo: useCallback(
      () => dispatch(getUserInfo()),
      [],
    ),
    logout: useCallback(
      () => dispatch(logout()),
      [],
    ),
  };
};

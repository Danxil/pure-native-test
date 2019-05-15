import { useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';

export default () => useMappedState(useCallback(
  ({ userInfo, userInfoRequestDone }) => ({
    userInfo,
    userInfoRequestDone,
  }),
  [],
));

import React from 'react';
import { compose, pure } from 'recompose';
import { Provider } from 'react-redux';

import configureStore from './configureStore';

type Provirers = {
  children: React.Node,
}
const Providers = ({ children }: Provirers) => (
  <Provider store={configureStore()}>
    {children}
  </Provider>
);
export default compose(pure)(Providers);

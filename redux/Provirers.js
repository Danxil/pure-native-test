import React from 'react';
import { StoreContext } from 'redux-react-hook';

import configureStore from './configureStore';

type Provirers = {
  children: React.Node,
}
const Providers = ({ children }: Provirers) => (
  <StoreContext.Provider value={configureStore()}>
    {children}
  </StoreContext.Provider>
);
export default React.memo(Providers);

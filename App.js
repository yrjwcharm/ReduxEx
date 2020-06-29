import React from 'react';
/**
 * The Provider connects the store at the top of the component-tree.
 * Thus, all sub-components can have access to the store.
 */
import {Provider} from 'react-redux';
import store from './store';
import PageOne from './Components/PageOne';
import PageTwo from './Components/PageTwo';
import PageThree from './Components/PageThree';

let App = () => (
  <Provider store={store}>
    <>
      <PageOne />
      <PageTwo />
      <PageThree />
    </>
  </Provider>
);

export default App;

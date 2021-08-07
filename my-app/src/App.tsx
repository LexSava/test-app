import React from 'react';
import { HashRouter, Route, BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import Page from './components/Page/Page';

import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import './App.scss';

const LoadableComponent = Loadable({
  loader: () => import('./components/Page/Page'),
  loading: LoadingScreen,
  delay: 300,
});

interface IApp {}

const App: React.FC<IApp> = () => (
  <HashRouter>
    <Route exact path="/" component={Page} />
  </HashRouter>
);
export default App;

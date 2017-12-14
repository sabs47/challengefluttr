import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import allPlayers from './redurcers/index-redurcer'
import GamesResults from './components/GamesResults'
const store = createStore(allPlayers)
ReactDOM.render(
    <Provider store={store}>
    <Router>
        <div>
     <Route  path='/App' component={App}>
    </Route>
    <Route path='/GamesResults' component={GamesResults}>
    </Route>
   </div>
     </Router>
     </Provider>, document.getElementById('root'));
registerServiceWorker();

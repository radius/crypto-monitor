import React from 'react';
import 'bulma/css/bulma.css';
import 'react-vis/dist/style.css';
import 'font-awesome/css/font-awesome.min.css';
import { render } from 'react-dom';
import Root from './components/Root';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();

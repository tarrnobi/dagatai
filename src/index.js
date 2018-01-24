import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
// import style from './style';
import Calendar from './Calendar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Calendar />, document.getElementById('root'));
registerServiceWorker();

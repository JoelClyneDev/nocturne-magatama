import React from 'react/index';
import App from './App';
import ReactDOM from 'react-dom/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.hydrate( 
    <React.StrictMode>
        <App/>
        </React.StrictMode>,
        document.getElementById('root')
        
    );
serviceWorker.unregister();
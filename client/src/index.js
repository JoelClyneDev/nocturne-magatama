import React from 'React';
import App from './App';
import ReactDOM from 'React-Dom';
import * as serviceWorker from './ServiceWorker';

ReactDOM.hydrate( 
    <React.StrictMode>
        <App/>
        </React.StrictMode>,
        document.getElementById('root')
        
    );
serviceWorker.unregister();
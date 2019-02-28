import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root'
import store from './store'
// import images from '/    store/img'

if(window.performance.navigation.type===1){
    window.location = window.location.origin;    
}

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import AddItem from './components/AddItem'
import ItemList from './components/ItemList'
import reducer from './reducers'

class App extends PureComponent {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <div>
          <AddItem />
          <ItemList />
        </div>
      </Provider>
    )
  }
}

render(<App />, document.getElementById('root'))

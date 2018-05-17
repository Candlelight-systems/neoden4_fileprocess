import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import app from './reducers/main'

import { loadList, loadDataList } from './actions/list'
import { loadActions, loadActionList } from './actions/actions'

import MainApp from "./mainAppWrapper.jsx"

let store = createStore( app, applyMiddleware( logger ) );

ReactDOM.render(
  <Provider store={store}>
  	<MainApp loadList={ loadComponentList } loadActionList={ loadActionListMethod } />
  </Provider>,
  document.getElementById('root')
)

function loadComponentList( dataFile ) {

	fetch( '../data/' + dataFile ).then( data => data.text() ).then( data => {

		data = data.split("\r");
		data = data.map( d => d.split( "," ) );
		var top = data.shift(); // Remove headline

		data = data.map( d => {
			let d2 = {}; 
			top.forEach( ( t, index ) => d2[ t ] = d[ index ])
			return d2;
		} );

		data.shift();
		store.dispatch( loadList( data ) )

	})
}


function loadActionListMethod( dataFile ) {

	fetch( '../actions/' + dataFile ).then( data => data.json() ).then( data => {
		store.dispatch( loadActions( data ) )
	})
}



fetch( "../data/datalist.json", { method: 'GET' } ).then( r => r.json() ).then( data => {

	store.dispatch( loadDataList( data ) );
})


fetch( "../actions/actionlist.json", { method: 'GET' } ).then( r => r.json() ).then( data => {

	store.dispatch( loadActionList( data ) );
})






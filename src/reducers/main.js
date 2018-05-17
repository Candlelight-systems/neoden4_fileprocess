import { combineReducers } from 'redux'

const defaultAction = {
	actionProps: {},
	actionType: ''
};

function createReducer( initialState, handlers ) {
  
  return function reducer(state = initialState, action ) {

    if( handlers.hasOwnProperty( action.type ) ) {

      return handlers[ action.type ]( state, action );

    } else {
      
      return state;
    }
  }
}


function removeFromList( list, action ) {
	list.splice( action.position, 1 )
	return [ ...list ];
}



function addToList( list, action, defaults ) {
	list.splice( action.position, 0, { ...defaults } );
	return [ ...list ];
}

function listExchange( list, pos1, pos2 ) {
	return list.map( ( el, index ) => index == pos1 ? { ...list[ pos2 ] } : ( index == pos2 ? { ...list[ pos1 ] } : el ) );
}

function filterElement( element, column, regex ) {
	const reg = new RegExp( regex );
	return reg.test( element[ column ] );
} 

function filterEl( list, column, regex, callbackFiltered, callbackNotFiltered = ( el ) => el ) {
	return list.map( ( el ) => {

		if( filterElement( el, column, regex ) ) {
			return callbackFiltered( el );
		} else {
			return callbackNotFiltered( el );
		}
	} )
}

function replaceListElementBasedOnIndex( state, action, subChild ) {

	return state.map( ( state, index ) => {

		if( index !== action.index ) {
			return state;
		}

		if( subChild ) {
			state[ subChild ] = state[ subChild ] || {};
			state[ subChild ] = { ...state[ subChild ], [ action.fieldName ]: action.fieldValue };
		} else {
			state[ action.fieldName ] = action.fieldValue;
		}
		return { ...state }
	});	
}

function changePosition( list, newX, newY ) {
 	const firstEl = list[ 0 ];
 	let diffX;
 	let diffY;

 	return list.map( ( el, index ) => {

 		let x = parseFloat( el[ 'Mid X' ].replace('mm', '') );
 		let y = parseFloat( el[ 'Mid Y' ].replace('mm', '') );

 		if( index == 0 ) {
 			diffX = newX - x;
	 		diffY = newY - y;
 		}

 		return { ...el, ['Mid X']: ( x + diffX ).toFixed( 2 ) + "mm", ['Mid Y']: ( y + diffY ).toFixed( 2 ) + "mm" };
 	});
}

const app = combineReducers( {


	listOut: createReducer( [ ], {
		LIST_COPY: ( state, action ) => {
			
			return [ ...action.list ]
		},

		APPLY_ACTION: ( state, action ) => {

			switch( action.action.actionType ) {

				case 'ChangeElement':
					return filterEl( state, action.action.actionProps.filterColumn, action.action.actionProps.filterValue, ( el ) => { return { ...el, [ action.action.actionProps.columnName ]: action.action.actionProps.columnValue } } );
				break;


				case 'SetLayer':
					return state.map( ( el ) => {

						if( action.action.actionProps.layer == 'top' ) {
							el.Layer = 'T';
						} else {
							el.Layer = 'B';
							let mid = parseFloat( el['Mid X'].replace('mm', '') );
							el['Mid X'] = mid * -1 + "mm";
						}

						return el;
					} );
				break;


				case '4W':
					return state.filter( ( el ) => {

						// Cancels all 4-W measurement elements
						if( action.action.actionProps.measMode == '2W' && el.Function == '4W' ) {
							return false;
						}

						return el;
					} );
				break;


				case 'SetNumberChannels':
					return state.filter( ( el ) => {

						// Cancels all 4-W measurement elements
						if( parseInt( el.Group ) > parseInt( action.action.actionProps.numberChannels ) ) {
							return false;
						}

						return true;
					} );
				break;

				case 'DeleteElement':
					return state.filter( ( el ) => {

						if( filterElement( el, action.action.actionProps.filterColumn, action.action.actionProps.filterValue ) ) {
							return false;
						}

						return true;
					} );
				break;

				case 'ChangePosition':
					return changePosition( state, action.action.actionProps.positionX, action.action.actionProps.positionY );
				break;
			}

			return state;
			
		}
	} ),


  	list: createReducer( [ ], {
  		FILTER_CHECK: ( state, action ) => filterEl( state, action.column, action.regex, ( el ) => ( { ...el, highlighted: true } ), ( el ) => ( { ...el, highlighted: false } ) ),
  		LOAD_LIST: ( state, action ) => [ ...action.list ]
	} ),

  	dataList: createReducer( [], {

  		LOAD_DATA_LIST: ( state, action ) => [ ...action.list ]
  	} ),

  	actionList: createReducer( [], {
  		LOAD_ACTION_LIST: ( state, action ) => [ ...action.list ]
  	}),
  	
	actions: createReducer( [ {} ], {


		CHANGE_TYPE: ( state, action ) => replaceListElementBasedOnIndex( state, action ),
		CHANGE: ( state, action ) => replaceListElementBasedOnIndex( state, action, "actionProps" ),
		ADD: ( state, action ) => addToList( state, action, defaultAction ),
		REMOVE: ( state, action ) => removeFromList( state, action ),
		UP: ( state, action ) => listExchange( state, action.position, action.position - 1 ),
		DOWN: ( state, action ) => listExchange( state, action.position, action.position + 1 ),
		LOAD: ( state, action ) => [ ...action.list ]
	} ) 
} )
 
export default app
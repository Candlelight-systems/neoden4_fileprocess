
import { connect } from 'react-redux'
import { saveAs } from 'file-saver'
import MainApp from './mainApp.jsx'

import { applyAction, loadList, listCopy } from './actions/list'
import cols from './columns'

const mapStateToProps = ( state ) => {

	return {
		list: state.list,
		listOut: state.listOut,
		actions: state.actions,
		dataList: state.dataList,
		actionList: state.actionList
	}
}

const mapDispatchToProps = ( dispatch, ownProps ) => {

	return {

		copyList: ( list ) => {
			dispatch( listCopy( list ) );
		},

		applyActions: ( actions ) => {
			actions.map( action => {
				dispatch( applyAction( action ) )
			} )
		},

		loadList: ownProps.loadList, 
		loadActionList: ownProps.loadActionList,

		exportList: ( listOut ) => {

			let output = listOut.map( ( l ) => {

				return cols.map( ( col, index ) => {

					if( col.export || ! col.hasOwnProperty( 'export' ) ) {

						return l[ col.name ];
					}

				} ).filter( ( col ) => col !== undefined )
				   .join(",");

			} ).join("\r\n");

			output = cols.map( ( col, index ) => {

				if( col.export || ! col.hasOwnProperty( 'export' ) ) {
					return col.name;
				}

			} ).filter( ( col ) => col !== undefined ).join(",") + "\n\n" + output;
					
			//console.log( output );

    		var blob = new Blob( [ output ], {type: "text/plain;charset=utf-8"});
			saveAs(blob, "output.csv");


		}
	}
}

export default connect( mapStateToProps, mapDispatchToProps )( MainApp );

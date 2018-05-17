
import { connect } from 'react-redux'
import ActionChangeElement from './ActionChangeElement.jsx'
import { actionChange } from '../../actions/actions'
import { filterCheck } from '../../actions/list'

const mapState = ( state, ownProps ) => {
	
	return {
		...ownProps
	}
} 

const mapDispatch = ( dispatch ) => ( {
	changeFilterColumn: ( e, actionID ) => dispatch( actionChange( actionID, 'filterColumn', e.target.value ) ),
	changeFilterValue: ( e, actionID ) => dispatch( actionChange( actionID, 'filterValue', e.target.value ) ),
	changeColumnName: ( e, actionID ) => dispatch( actionChange( actionID, 'columnName', e.target.value ) ),
	changeColumnValue: ( e, actionID ) => dispatch( actionChange( actionID, 'columnValue', e.target.value ) ),
	
	filterCheck: ( columnName, columnRegex ) => dispatch( filterCheck( columnName, columnRegex ) )
} )

export default connect( mapState, mapDispatch )( ActionChangeElement ) 

import { connect } from 'react-redux'
import Action from './Action.jsx'
import { actionChangeType, actionAdd, actionRemove, actionUp, actionDown } from '../../actions/actions'
import { filterCheck } from '../../actions/list'

const mapState = ( state, ownProps ) => {
	return {
		actionLength: state.actions.length,
		actionType: ownProps.actionType,
		actionProps: ownProps.actionProps,
		actionId: ownProps.actionId
	}
} 

const mapDispatch = ( dispatch ) => ( {
	
	actionAdd: ( actionId ) => dispatch( actionAdd( actionId ) ),
	actionRemove: ( actionId ) => dispatch( actionRemove( actionId ) ),
	actionUp: ( actionId ) => dispatch( actionUp( actionId ) ),
	actionDown: ( actionId ) => dispatch( actionDown( actionId ) ),

	filterCheck: ( columnName, columnRegex ) => dispatch( filterCheck( columnName, columnRegex ) ),
	changeActionType: ( actionId, newType ) => dispatch( actionChangeType( actionId, newType ) )
} )

export default connect( mapState, mapDispatch )( Action ) 
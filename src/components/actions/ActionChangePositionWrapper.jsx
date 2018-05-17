
import { connect } from 'react-redux'
import ActionChangePosition from './ActionChangePosition.jsx'
import { actionChange } from '../../actions/actions'
import { filterCheck } from '../../actions/list'

const mapState = ( state, ownProps ) => {
	return {
		...ownProps
	}
} 

const mapDispatch = ( dispatch ) => ( {
	changePosition: ( e, actionID, pos ) => dispatch( actionChange( actionID, pos == 'x' ? 'positionX' : 'positionY', e.target.value ) )
	
} )

export default connect( mapState, mapDispatch )( ActionChangePosition ) 
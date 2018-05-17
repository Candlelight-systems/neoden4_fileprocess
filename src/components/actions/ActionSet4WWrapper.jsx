
import { connect } from 'react-redux'
import ActionSet4W from './ActionSet4W.jsx'
import { actionChange } from '../../actions/actions'
//import { setLayer } from '../../actions/list'

const mapState = ( state, ownProps ) => {
	
	return {
		...ownProps
	}
} 

const mapDispatch = ( dispatch ) => ( {
	changeMeasMode: ( e, actionID ) => dispatch( actionChange( actionID, "measMode", e.target.value ) )
} )

export default connect( mapState, mapDispatch )( ActionSet4W ) 
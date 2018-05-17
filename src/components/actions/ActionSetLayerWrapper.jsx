
import { connect } from 'react-redux'
import ActionSetLayer from './ActionSetLayer.jsx'
import { actionChange } from '../../actions/actions'
//import { setLayer } from '../../actions/list'

const mapState = ( state, ownProps ) => {
	
	return {
		...ownProps
	}
} 

const mapDispatch = ( dispatch ) => ( {
	changeLayer: ( e, actionID ) => dispatch( actionChange( actionID, "layer", e.target.value ) )
} )

export default connect( mapState, mapDispatch )( ActionSetLayer ) 
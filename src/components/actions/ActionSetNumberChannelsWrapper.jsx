
import { connect } from 'react-redux'
import ActionSetNumberChannels from './ActionSetNumberChannels.jsx'
import { actionChange } from '../../actions/actions'
//import { setLayer } from '../../actions/list'

const mapState = ( state, ownProps ) => {
	
	return {
		...ownProps
	}
} 

const mapDispatch = ( dispatch ) => ( {
	 changeNumberChannels: ( e, actionID ) => dispatch( actionChange( actionID, "numberChannels", e.target.value ) )
} )

export default connect( mapState, mapDispatch )( ActionSetNumberChannels ) 
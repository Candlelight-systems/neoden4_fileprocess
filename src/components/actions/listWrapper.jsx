

import { connect } from 'react-redux'
import List from './list.jsx'

const mapState = ( state ) => {

	return {
		list: state.actions
	}
};

const mapDispatch = ( dispatch ) => {}

export default connect( mapState, mapDispatch )( List )
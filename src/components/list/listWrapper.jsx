
import { connect } from 'react-redux'
import List from './list.jsx'

const mapStateToProps = ( state, ownProps ) => {
	
	return {
		list: ownProps.list
	}
};

const mapDispatchToProps = ( dispatch ) => {

}

export default connect( mapStateToProps, mapDispatchToProps )( List );
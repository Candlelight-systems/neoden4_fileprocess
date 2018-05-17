import React from "react"
import Action from './ActionWrapper.jsx'

const ActionList = ( { list } ) => {
	
	return (
		<div>	
			<form className="form-horizontal">
				{ list.map( ( listEl, index ) => <Action actionId={ index } actionType={ listEl.actionType } actionProps={ listEl.actionProps } /> ) }
			</form>
		</div>
	);
}

export default ActionList
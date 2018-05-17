
export function actionChange( actionID, fieldName, fieldNewValue ) {

	return {
		type: 'CHANGE',
		index: actionID,
		fieldName: fieldName,
		fieldValue: fieldNewValue
	}
}

export function actionChangeType( actionId, newType ) {
	return {
		type: 'CHANGE_TYPE',
		index: actionId,
		fieldName: 'actionType',
		fieldValue: newType
	}
}

export function actionAdd( actionId ) {

	return {
		type: 'ADD',
		position: actionId
	}
}

export function actionRemove( actionId ) {

	return {
		type: 'REMOVE',
		position: actionId
	}
}

export function actionUp( actionId ) {

	return {
		type: 'UP',
		position: actionId
	}
}

export function actionDown( actionId ) {

	return {
		type: 'DOWN',
		position: actionId
	}
}

export function loadActions( list ) {

	return {
		type: 'LOAD',
		list: list
	}
}

export function loadActionList( list ) {

	return {
		type: 'LOAD_ACTION_LIST',
		list: list
	}
}


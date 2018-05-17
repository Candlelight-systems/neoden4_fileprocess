

export function filterCheck( column, regex ) {
	return {
		type: 'FILTER_CHECK',
		column: column, 
		regex: regex
	}
} 

export function applyAction( action ) {
	return {
		type: 'APPLY_ACTION',
		action: action	
	}
}

export function listCopy( list ) {
	return {
		type: 'LIST_COPY',
		list: list
	}
}

export function loadList( list ) {
	return {
		type: 'LOAD_LIST',
		list: list
	}
}

export function loadDataList( list ) {
	return {
		type: 'LOAD_DATA_LIST',
		list: list
	}
}
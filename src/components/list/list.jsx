
import React from "react"
import ListElement from "./listElement.jsx"
import PropTypes from 'prop-types'
import cols from '../../columns'

const List = ( { list } ) => {

	return (
	<table>
		<tr>
			{ cols.map( c => !c.hidden && <th>{ c.value }</th> ) }
		</tr>
		{ list.map( ( element ) => { return <ListElement { ...element } /> } ) }
	</table> );
};
/*
List.propTypes = {
	list: PropTypes.array.isRequired
}
*/

export default List
import React from 'react'
import cols from '../../columns'

const listElement = ( props ) => {
	return (
		<tr className={ props.highlighted ? 'highlighted' : '' }>
			{ cols.map( c => !c.hidden && <td title={ props[ c.name ] }>{ props[ c.name ] }</td> ) }
		</tr>
	);
};

export default listElement


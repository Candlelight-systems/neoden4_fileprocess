import cols from '../../columns'
import React from 'react'

export default ( { actionId, filterColumn, changeFilterColumn, filterValue, changeFilterValue, filterCheck, changeColumnName, columnName, changeColumnValue, columnValue } ) => {

	return (
		<div>
			<div className="form-element">
				<label className="col-sm-4">
					Filter on column
				</label>
				<div className="col-sm-8">
					<select className="form-control" onChange={ ( e ) => changeFilterColumn( e, actionId ) } value={ filterColumn }>
						<option>Select a column</option>{ cols.map( col => <option value={ col.name }>{ col.value }</option> ) }
					</select>
				</div>
			</div>
			
			<div className="form-element">
				<label className="col-sm-4">
					Filter Regex
				</label>
				<div className="col-sm-8">
					<div className="input-group">
						<input className="form-control" type="text" onChange={  ( e ) => changeFilterValue( e, actionId ) } value={ filterValue } />
						<span className="input-group-btn"><button type="button" className="btn btn-default" onClick={ () => filterCheck( filterColumn, filterValue ) }>Check</button></span>
					</div>
				</div>
			</div>
		
		</div>

		);
}
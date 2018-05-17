import cols from '../../columns'
import React from 'react'

export default ( { actionId, layer, changeLayer } ) => {

	return (
		<div>
			<div className="form-element">
				<label className="col-sm-4">
					Layer
				</label>
				<div className="col-sm-8">
					<div className="input-group">
						<select className="form-control"  onChange={  ( e ) => changeLayer( e, actionId ) } value={ layer }>
							<option value="top">Top</option>
							<option value="bottom">Bottom</option> ) }
						</select>

					</div>
				</div>
			</div>
		
		</div>

		);
}
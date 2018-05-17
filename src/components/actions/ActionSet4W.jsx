import cols from '../../columns'
import React from 'react'

export default ( { actionId, measMode, changeMeasMode } ) => {

	return (
		<div>
			<div className="form-element">
				<label className="col-sm-4">
					Measurement mode
				</label>
				<div className="col-sm-8">
					<div className="radio">
						<label>
							<input type="radio" onChange={  ( e ) => changeMeasMode( e, actionId ) } checked={ measMode == "2W" } value="2W" /> 2-Wire
						</label>
					</div>
					<div className="radio">
						<label>
							<input type="radio" onChange={  ( e ) => changeMeasMode( e, actionId ) } checked={ measMode == "4W" } value="4W" /> 4-Wire
						</label>
					</div>
				</div>
			</div>		
		</div>
	);
}
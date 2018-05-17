import React from 'react'

export default ( { actionId, positionX, positionY, changePosition } ) => {

	return (
		<div>
		
			<div className="form-element">
				<label className="col-sm-4">
					Position X
				</label>
				<div className="col-sm-8">
					<input className="form-control" type="number" onChange={  ( e ) => changePosition( e, actionId, 'x' ) } value={ positionX } />
				</div>
			</div>
			<div className="form-element">
				<label className="col-sm-4">
					Position Y
				</label>
				<div className="col-sm-8">
					<input className="form-control" type="number" onChange={  ( e ) => changePosition( e, actionId, 'y' ) } value={ positionY } />
				</div>
			</div>
		
		</div>
	);
}
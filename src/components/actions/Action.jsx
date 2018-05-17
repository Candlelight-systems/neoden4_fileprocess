import React from "react"

import ActionChangeElement from './ActionChangeElementWrapper.jsx'
import ActionDeleteElement from './ActionDeleteElementWrapper.jsx'
import ActionChangePosition from './ActionChangePositionWrapper.jsx'
import ActionSetLayer from './ActionSetLayerWrapper.jsx'
import ActionSet4W from './ActionSet4WWrapper.jsx'
import ActionSetNumberChannels from './ActionSetNumberChannelsWrapper.jsx'


const changeListElement = ( { actionId, actionType, actionLength, actionProps, changeActionType, actionAdd, actionRemove, actionUp, actionDown } ) => {

	let actionElement;


	switch( actionType ) {

		case 'ChangeElement':
			actionElement = <ActionChangeElement actionId={ actionId } { ...actionProps } />
		break;

		case 'DeleteElement':
			actionElement = <ActionDeleteElement actionId={ actionId } { ...actionProps } />
		break;

		case 'ChangePosition':
			actionElement = <ActionChangePosition actionId={ actionId } { ...actionProps } />
		break;

		case 'SetLayer':
			actionElement = <ActionSetLayer actionId={ actionId } { ...actionProps } />
		break;

		case '4W':
			actionElement = <ActionSet4W actionId={ actionId } { ...actionProps } />
		break;

		case 'SetNumberChannels':
			actionElement = <ActionSetNumberChannels actionId={ actionId } { ...actionProps } />
		break;
	}

	return (
		<div className="action">
			<h4>Action</h4>
			<div className="form-element row">
				<label className="col-sm-4">Action type</label>
				<div className="col-sm-8">
					<div className="input-group">
						<select className="form-control" value={ actionType } onChange={ ( e ) => changeActionType( actionId, e.target.value ) }>
							<option value="">Select an action option</option>
							<option value="ChangeElement">Change element</option>
							<option value="ChangePosition">Change position</option>
							<option value="DeleteElement">Delete element</option>
							<option value="SetLayer">Set layer</option>
							<option value="4W">Set 4-Wire measurement mode</option>
							<option value="SetNumberChannels">Set number of channels</option>
						</select>
						<div className="input-group-btn">
							<button type="button" className="btn btn-default" onClick={ () => actionAdd( actionId ) }><span className="glyphicon glyphicon-plus"></span></button>
							<button type="button" className="btn btn-default" onClick={ () => actionRemove( actionId ) }><span className="glyphicon glyphicon-remove"></span></button>
							{ actionId < actionLength - 1 ? <button type="button" className="btn btn-default" onClick={ () => actionDown( actionId ) }><span className="glyphicon glyphicon-arrow-down"></span></button> : null }
							{ actionId > 0 ? <button type="button" className="btn btn-default" onClick={ () => actionUp( actionId ) }><span className="glyphicon glyphicon-arrow-up"></span></button> : null }
						</div>
					</div>
				</div>
			</div>

			<div>
				{ actionElement }
			</div>
		</div>
) }

export default changeListElement
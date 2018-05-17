import cols from '../../columns'
import React from 'react'

export default ( { actionId, numberChannels,  changeNumberChannels } ) => {

	return (
		<div>
			<div className="form-element">
				<label className="col-sm-4">
					Number of channels
				</label>
				<div className="col-sm-8">
					<div className="input-group">
						<select className="form-control" value={ numberChannels } onChange={ ( e ) => changeNumberChannels( e, actionId ) }>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
							<option>6</option>
							<option>7</option>
							<option>8</option>
							<option>9</option>
							<option>10</option>
							<option>11</option>
							<option>12</option>
							<option>13</option>
							<option>14</option>
							<option>15</option>
							<option>16</option>
						</select>
					</div>
				</div>
			</div>		
		</div>
	);
}
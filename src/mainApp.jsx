import React from 'react'
import List from './components/list/listWrapper.jsx'
import ListActions from './components/actions/listWrapper.jsx'
import { saveAs } from 'file-saver'

let selectDataList;
let selectActionList;

export default ( { list, listOut, actions, copyList, applyActions, exportList, dataList, loadList, actionList, loadActionList } ) => {

	return (
		<div className="container-fluid">
	  		<div className="col-sm-4">

	  			<div className="input-group">
		  			<select className="form-control" ref={ el => selectDataList = el }>
		  				{ dataList.map( el => <option value={el}>{el}</option> ) }
		  			</select>
		  			<div className="input-group-btn">
				  		<button className="btn btn-default" onClick={ () => { 
				    		loadList( selectDataList.value );
				    	} }>Load</button>
				    </div>
			    </div>
			    <h3>Input component list</h3>
		    	<List list={ list } />
		    </div>
		    <div className="col-sm-4">


		    	<button className="btn btn-primary" onClick={ () => { 

		    		exportList( listOut );

		    	} }>Export</button>

				<h3>Output component list</h3>
		    	<List list={ listOut } /> 
		    </div>
		    <div className="col-sm-4">

		    	<div className="input-group">

		  			<select className="form-control" ref={ el => selectActionList = el }>
		  				{ actionList.map( el => <option value={el}>{el}</option> ) }
		  			</select>
			    	<div className="input-group-btn">

				  		<button className="btn btn-default" onClick={ () => { 
				    		loadActionList( selectActionList.value );
				    	} }>Load</button>


				    	<button className="btn btn-primary" onClick={ () => { 

				    		copyList( list );
				    		applyActions( actions );
				    		
				    	} }>Apply actions</button>

				    	<button className="btn btn-success" onClick={ () => {

							var blob = new Blob( [ JSON.stringify( actions, undefined, "\t" ) ], {type: "application/json;charset=utf-8"});
							saveAs(blob, "actions.json");

						 } }>Save</button>
				    	


						 </div>
					</div>
		    	<ListActions /> 
		    </div>
		    	
		</div>
	)

}
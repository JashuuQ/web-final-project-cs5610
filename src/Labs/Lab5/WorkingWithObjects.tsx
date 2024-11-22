import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
	const [assignment, setAssignment] = useState({
		id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
	const [module, setModule] = useState({
		id: 1, name: "NodeJS Module",
		description: "Create a NodeJS server with ExpressJS",
		course: "NodeJS",
	});
	const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
	const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
			<h4>Modifying Properties</h4>
			<a id="wd-update-assignment-title"
				className="btn btn-primary float-end"
				href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
					Update Title
				</a>
			<input className="form-control w-75" id="wd-assignment-title"
				defaultValue={assignment.title} onChange={(e) =>
					setAssignment({ ...assignment, title: e.target.value })} />
			<hr />
			{/* modifying score */}
			<a id="wd-update-assignment-score"
				className="btn btn-primary float-end"
				href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
					Update Score
				</a>
			<input className="form-control w-75" id="wd-assignment-score"
				type="number"
				defaultValue={assignment.score} onChange={(e) =>
					setAssignment({ ...assignment, score: e.target.valueAsNumber })} />
			<hr />
			{/* modifying completed property */}
			<a id="wd-update-assignment-completed"
				className="btn btn-primary float-end"
				href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
					Update completed
				</a>
			<input className="form-checkbox" id="wd-assignment-completed"
				type="checkbox"
				checked={assignment.completed} onChange={(e) =>
					setAssignment({ ...assignment, completed: e.target.checked })} />
			<hr />

      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>
			<h4>Retrieving Properties</h4>
			<a id="wd-retrieve-assignment-title" className="btn btn-primary"
				href={`${REMOTE_SERVER}/lab5/assignment/title`}>
					Get Title
				</a><hr/>

		  {/* updating module */}
			<h4>Modifying Module Name</h4>
			<a id="wd-update-module-name"
				className="btn btn-primary float-end"
				href={`${MODULE_API_URL}/name/${module.name}`}>
					Update Name
				</a>
			<input className="form-control w-75" id="wd-assignment-title"
				defaultValue={module.name} onChange={(e) =>
					setModule({ ...module, name: e.target.value })} />
			<hr />
			{/* get module */}
			<h4>Retrieving Module</h4>
      <a id="wd-retrieve-module" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a><hr/>
			{/* get module name */}
			<h4>Retrieving Module Name</h4>
      <a id="wd-retrieve-module-name" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module/name`}>
        Get Module Name
      </a><hr/>

    </div>
);}


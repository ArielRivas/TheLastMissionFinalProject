import React from "react";
import Checkbox from "./Checkbox";

const TaskList = props => {
	const { list, setList } = props;
	const onChangeStatus = e => {
		const { name, checked } = e.target;
		const updateList = list.map(item => ({
			...item,
			done: item.id === name ? checked : item.done
		}));
		setList(updateList);
	};
	const onClickRemoveItem = e => {
		const updateList = list.filter(item => !item.done);
		setList(updateList);
	};
	const mapListToCheck = list.map(item => (
		<Checkbox key={item.id} data={item} onChange={onChangeStatus} />
	));
	return (
		<div className="taskLenght">
			{list.length ? mapListToCheck : "Add a task for yourself, be a good soldier"}
			{list.length ? (
				<p>
					<button className="buttonListDelete" onClick={onClickRemoveItem}>
						Delete all done task
					</button>
				</p>
			) : null}
		</div>
	);
};

export default TaskList;
import React, { useState } from "react";
import "./TodoContainer.scss"
import TaskList from "./TaskList";
import FormTodo from "./FormTodo";
import TASKaxios from './../TaskListFromBack/taskfromBackusingFetch/TASKaxios';

const TodoContainer = () => {
	const [list, setList] = useState([]);
	const handleAddItem = addItem => {
		setList([...list, addItem]); 
	};
	return (
		<section className="container__TodoList">
	  <div className='container__TodoList-form'>
			<FormTodo handleAddItem={handleAddItem} />
			<TaskList list={list} setList={setList} />
			<TASKaxios/>
		</div>
		</section>
	);
};

export default TodoContainer;
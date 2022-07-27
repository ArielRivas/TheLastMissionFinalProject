import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import TaskCard from "../TaskCard/TaskCard";

const TaskListFromBack = () => {
	const dispatch = useDispatch();
	const { task, error, isLoading } = useSelector(state => state.tasks);
	const getTask = (url = `https://backend-grupo1.vercel.app/tareas` ) => {
		dispatch(TaskListFromBack(url));
	  };
	
	  useEffect(() => {
		getTask()
		.then(response => response.tasks.map((task => task._id)))
		});

      return (
        <div className="">
          {isLoading && <div>Loading...</div>}
    
          {error && <div>{error}</div>}
    
          {!error && task.map((task) => <TaskCard key={task._id} task={task} />)}
        </div>
      );
}

export default TaskListFromBack;
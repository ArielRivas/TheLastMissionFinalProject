import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TASKaxios() {
    const API_URL = 'https://backend-grupo1.vercel.app/tareas';
    const [task, setTask] = useState([]);

    const fetchData = async () => {
        const { data } = await axios.get(API_URL);
        const shuffledArray = data.sort((a, b) => 0.5 - Math.random());
       const dataFilter = shuffledArray.splice(7)
        setTask(dataFilter);
      };
      useEffect(() => {
        fetchData();
      }, []);
      
  return (
    <div className="">
    {task.length > 0 ? (
      <div className="content">
        {task.map((post) => (
          <div className="">
            <h2>{post.descripcion}</h2>
          </div>
        ))}
      </div>
    ) : (
      <p className="loading">Loading... </p>
    )}
  </div>
  )
}

export default TASKaxios
import React, { useState, useEffect } from 'react';
import TodoCard from './TodoCard/TodoCard';
import './TodoMain.css'; 
import '../../App.css'
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';

const TodoMain = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  if (storedTasks.length > 0) {
    setTasks(storedTasks);
  }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask('');
    }
  };

  const handleRemoveTask = (taskId) => {
    const updatedTasks = tasks.filter((t) => t.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleEditTask = (taskId, newText) => {
    const updatedTasks = tasks.map((t) =>
      t.id === taskId ? { ...t, text: newText } : t
    );
    setTasks(updatedTasks);
  };

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData('text/plain', taskId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, droppedTaskId) => {
    const draggedTaskId = e.dataTransfer.getData('text/plain');
    
    if (draggedTaskId === droppedTaskId) {
      return;
    }

    const updatedTasks = [...tasks];

    const draggedTask = updatedTasks.find((t) => t.id === +draggedTaskId);
    const draggedTaskIndex = updatedTasks.findIndex((t) => t.id === +draggedTaskId);

    const droppedTaskIndex = updatedTasks.findIndex((t) => t.id === +droppedTaskId);

    updatedTasks.splice(draggedTaskIndex, 1);

    updatedTasks.splice(droppedTaskIndex, 0, draggedTask);

    setTasks(updatedTasks);
  };

  return (

    <section className="w-full flex flex-col h-dvh">

       <div className='text-center'>
        <h2 className=' text-gradient-multi font-manjari font-black text-4xl text-center'>Quick Todo</h2>
        <p className='text-center text-gray-500 pb-4'>Effortless Organization for Enhanced Productivity</p>
        </div>

   <div className="flex mx-2 sm:mx-4 lg:mx-44">
        <input
          type="text"
          className='todo_input'
          placeholder="Enter your task"
          value={task}
          onChange={handleInputChange}
        />

        <button className='purple_gradient hover:shadow-xl px-5 py-2 rounded-md text-white border shadow-lg' onClick={handleAddTask}><BookmarkAddRoundedIcon /><span className='text-white'>Add Todo</span> </button>
      </div>
      <div className="pt-10">
      <ul className="task-list pt-10 mx-4 sm:mx-8 lg:mx-64">
        {tasks.map((t, index) => (
          <TodoCard
            key={t.id}
            task={t}
            onEdit={(taskId,editedText) => handleEditTask(taskId, editedText)}
            onRemove={handleRemoveTask}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        ))}
      </ul>
      </div>
  </section>
    
  );
};

export default TodoMain;
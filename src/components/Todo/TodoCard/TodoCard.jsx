import React, { useState } from 'react';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import PlaylistAddCheckRoundedIcon from '@mui/icons-material/PlaylistAddCheckRounded';

const TodoCard = ({ task, onEdit, onRemove, onDragStart, onDragOver, onDrop }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <li
      draggable
      onDragStart={(e) => onDragStart(e, task.id)}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, task.id)}
      className="glassmorphism"
    >
      {isEditing ? (
        <>
          <input
            type="text"
            className='todo_input_edit'
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSaveClick}><PlaylistAddCheckRoundedIcon /> </button>
        </>
      ) : (
        <>
        <DragIndicatorIcon className=' cursor-pointer text-gray-400' />
        <div className='flex justify-start'>
          <p  className='font-manjari text-left px-3'>{task.text}</p>
          </div>

          <div className='flex flex-row'>

            <button onClick={handleEditClick}><EditNoteRoundedIcon className='text-gray-700  hover:text-purple-500' /></button>
            <button onClick={() => onRemove(task.id)}><DeleteForeverRoundedIcon className='text-gray-700  hover:text-red-500' /></button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoCard;
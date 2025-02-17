import React, { useState } from "react";

function TodoItem({ todo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEditChange = (event) => {
    setNewText(event.target.value);
  };

  const handleSaveEdit = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center gap-4 mb-4 w-full">
      {isEditing ? (
        <div className="flex items-center gap-2 w-full">
          <input
            type="text"
            value={newText}
            onChange={handleEditChange}
            className="border p-2 rounded w-full"
          />
          <button
            onClick={handleSaveEdit}
            className="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      ) : (
        <span className="w-full">{todo.text}</span>
      )}
      <div className="flex gap-2">
        <button
          onClick={() => setIsEditing(true)}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;

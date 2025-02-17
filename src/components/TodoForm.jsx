import { useState } from "react";

export default function TodoForm({ addTodo, text, setText }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a todo"
        className="border p-2 rounded my-4"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
        Add Todo
      </button>
    </form>
  );
}

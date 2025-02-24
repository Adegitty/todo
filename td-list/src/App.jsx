// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");
//   const [editingIndex, setEditingIndex] = useState(null);

//   const addTask = () => {
//     if (newTask.trim() === "") return alert("Please enter a task!");

//     if (editingIndex !== null) {
//       // Edit existing task
//       const updatedTasks = [...tasks];
//       updatedTasks[editingIndex] = newTask;
//       setTasks(updatedTasks);
//       setEditingIndex(null);
//     } else {
//       // Add new task
//       setTasks([...tasks, newTask]);
//     }

//     setNewTask("");
//   };

//   const editTask = (index) => {
//     setNewTask(tasks[index]);
//     setEditingIndex(index);
//   };

//   const deleteTask = (index) => {
//     setTasks(tasks.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="container">
//       <h2>To-Do List</h2>
//       <div className="input-section">
//         <input
//           type="text"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//           placeholder="Enter a task"
//         />
//         <button onClick={addTask}>
//           {editingIndex !== null ? "Update" : "Add"}
//         </button>
//       </div>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             <span>{task}</span>
//             <div>
//               <button className="edit" onClick={() => editTask(index)}>
//                 Edit
//               </button>
//               <button className="delete" onClick={() => deleteTask(index)}>
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;




// import React, { useReducer, useState } from "react";
// import './App.css'

// // Define the actions
// const ACTIONS = {
//   ADD_TODO: "add-todo",
//   UPDATE_TODO: "update-todo",
//   DELETE_TODO: "delete-todo",
// };

// // Reducer function to manage state
// const todoReducer = (todos, action) => {
//   switch (action.type) {
//     case ACTIONS.ADD_TODO:
//       return [...todos, { id: Date.now(), text: action.payload.text }];

//     case ACTIONS.UPDATE_TODO:
//       return todos.map((todo) =>
//         todo.id === action.payload.id
//           ? { ...todo, text: action.payload.text }
//           : todo
//       );

//     case ACTIONS.DELETE_TODO:
//       return todos.filter((todo) => todo.id !== action.payload.id);

//     default:
//       return todos;
//   }
// };

// const TodoApp = () => {
//   const [todos, dispatch] = useReducer(todoReducer, []);
//   const [text, setText] = useState("");
//   const [editId, setEditId] = useState(null);

//   // Handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editId) {
//       dispatch({ type: ACTIONS.UPDATE_TODO, payload: { id: editId, text } });
//       setEditId(null);
//     } else {
//       dispatch({ type: ACTIONS.ADD_TODO, payload: { text } });
//     }
//     setText("");
//   };

//   return (
//     <div className="todo-wrapper">
//       <h2>To-Do List</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           placeholder="Enter a task..."
//           required
//         />
//         <button type="submit">{editId ? "Update" : "Add"}</button>
//       </form>

//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id} style={{ margin: "10px 0" }}>
//             {todo.text}
//             <div>
//             <button
//               onClick={() => {
//                 setText(todo.text);
//                 setEditId(todo.id);
//               }}
//             >
//               🔄
//             </button>
//             <button
//               onClick={() =>
//                 dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
//               }
//             >
//               ❎
//             </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoApp;




import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Pages
import Login from './pages/Login'
import Signup from './pages/Signup';
import Verify from './pages/Verify';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <Router>
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes> */}

<Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/verify" element={<Verify />} />
  <Route path="/home" element={<Homepage />} />
  <Route path="*" element={<Navigate to="/home" />} /> {/* Redirect to Home directly */}
</Routes>

    </Router>
  );
};

export default App;









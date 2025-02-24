/* HomePage.jsx */
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const HomePage = () => {
//   const [todos, setTodos] = useState([]);
//   const [showTrash, setShowTrash] = useState(false);
//   const BASE_URL = 'https://free-todo-api.vercel.app/';
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     fetchTodos();
//   }, [showTrash]);

//   const fetchTodos = async () => {
//     try {
//       const url = showTrash ? 'get-all-trash-todos' : 'get-all-todos';
//       const res = await axios.get(${BASE_URL}${url}, {
//         headers: { Authorization: Bearer ${token} },
//       });
//       setTodos(res.data);
//     } catch (error) {
//       console.error('Failed to fetch todos', error);
//     }
//   };

//   return (
//     <div className="home-page">
//       <h2>Home Page</h2>
//       <button onClick={() => setShowTrash(!showTrash)}>
//         {showTrash ? 'Show All Todos' : 'Show Trash Todos'}
//       </button>
//       <div className="todo-list">
//         {todos.map((todo) => (
//           <div
//             key={todo._id}
//             className={todo.isTrash ? 'todo-item trashed' : 'todo-item'}
//           >
//             <h3>{todo.title}</h3>
//             <p>{todo.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const HomePage = () => {
//   const [todos, setTodos] = useState([]);
//   const [showTrash, setShowTrash] = useState(false);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [isEditing, setIsEditing] = useState(null);
//   const BASE_URL = 'https://free-todo-api.vercel.app/';
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     fetchTodos();
//   }, [showTrash]);

//   const fetchTodos = async () => {
//     try {
//       const url = showTrash ? 'get-all-trash-todos' : 'get-all-todos';
//       const res = await axios.get(`${BASE_URL}${url}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setTodos(res.data);
//     } catch (error) {
//       console.error('Failed to fetch todos', error);
//     }
//   };

//   const handleCreateTodo = async () => {
//     try {
//       await axios.post(
//         `${BASE_URL}create-todo`,
//         { title, description },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setTitle('');
//       setDescription('');
//       fetchTodos();
//     } catch (error) {
//       console.error('Failed to create todo', error);
//     }
//   };

//   const handleDeleteTodo = async (id) => {
//     try {
//       await axios.delete(`${BASE_URL}delete-todo/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       fetchTodos();
//     } catch (error) {
//       console.error('Failed to delete todo', error);
//     }
//   };

//   const handleEditTodo = (todo) => {
//     setIsEditing(todo._id);
//     setTitle(todo.title);
//     setDescription(todo.description);
//   };

//   const handleUpdateTodo = async () => {
//     try {
//       await axios.patch(
//         `${BASE_URL}update-todo/${isEditing}`,
//         { title, description },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setIsEditing(null);
//       setTitle('');
//       setDescription('');
//       fetchTodos();
//     } catch (error) {
//       console.error('Failed to update todo', error);
//     }
//   };

//   return (
//     <div className="home-page">
//       <h2>Home Page</h2>
//       <div className="todo-form">
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         {isEditing ? (
//           <button onClick={handleUpdateTodo}>Update Todo</button>
//         ) : (
//           <button onClick={handleCreateTodo}>Add Todo</button>
//         )}
//       </div>
//       <button onClick={() => setShowTrash(!showTrash)}>
//         {showTrash ? 'Show All Todos' : 'Show Trash Todos'}
//       </button>
//       <div className="todo-list">
//         {todos.map((todo) => (
//           <div
//             key={todo._id}
//             className={todo.isTrash ? 'todo-item trashed' : 'todo-item'}
//           >
//             <h3>{todo.title}</h3>
//             <p>{todo.description}</p>
//             <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
//             <button onClick={() => handleEditTodo(todo)}>Edit</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './homepage.css';

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isEditing, setIsEditing] = useState(null);
  const url = 'https://free-todo-api.vercel.app/';
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await axios.get(`${url}get-all-todos`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos(res.data);
    } catch (error) {
      console.error('Failed to fetch todos', error);
    }
  };

  const handleCreateTodo = async () => {
    if (!title.trim() || !description.trim()) {
      alert('Please provide both title and description');
      return;
    }
    try {
      await axios.post(
        `${url}create-todo`,
        { title, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTitle('');
      setDescription('');
      fetchTodos();
    } catch (error) {
      console.error('Failed to create todo', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`${url}delete-todo/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchTodos();
    } catch (error) {
      console.error('Failed to delete todo', error);
    }
  };

  const handleEditTodo = (todo) => {
    setIsEditing(todo._id);
    setTitle(todo.title);
    setDescription(todo.description);
  };

  const handleUpdateTodo = async () => {
    try {
      await axios.patch(
        `${url}update-todo/${isEditing}`,
        { title, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setIsEditing(null);
      setTitle('');
      setDescription('');
      fetchTodos();
    } catch (error) {
      console.error('Failed to update todo', error);
    }
  };

  return (
    <div className="home-page">
      <h2>Home Page</h2>
      <div className="todo-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {isEditing ? (
          <button onClick={handleUpdateTodo} aria-label="Update Todo">
            Update Todo
          </button>
        ) : (
          <button onClick={handleCreateTodo} aria-label="Add Todo">
            Add Todo
          </button>
        )}
      </div>

      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo._id} className="todo-item">
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button onClick={() => handleEditTodo(todo)} aria-label="Edit Todo">
              Edit
            </button>
            <button
              onClick={() => handleDeleteTodo(todo._id)}
              aria-label="Delete Todo"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

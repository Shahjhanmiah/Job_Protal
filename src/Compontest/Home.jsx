import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3001/tasks';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    axios.get(API_URL).then((response) => setTasks(response.data));
  }, []);

  const handleAddTask = async () => {
    try {
      const response = await axios.post(API_URL, newTask);
      setTasks([...tasks, response.data]);
      setNewTask({ title: '', description: '' });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleEditTask = async (id) => {
    try {
      const taskToEdit = tasks.find((task) => task._id === id);
      const response = await axios.put(`${API_URL}/${id}`, {
        ...taskToEdit,
        title: newTask.title,
        description: newTask.description,
      });
      setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
      setEditingTask(null);
      setNewTask({ title: '', description: '' });
    } catch (error) {
      console.error('Error editing task:', error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleToggleComplete = async (id) => {
    try {
      const taskToUpdate = tasks.find((task) => task._id === id);
      const updatedTask = { ...taskToUpdate, completed: !taskToUpdate.completed };

      const response = await axios.put(`${API_URL}/${id}`, updatedTask);
      setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };


  return (
    <div className="mx-auto  mx-20 justify-center items-center  bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md mb-4 mx-auto">
        <h1 className="text-4xl font-bold mb-4">Task Manager</h1>
        <div className="flex flex-col items-center gap-4">
          <input
            type="text"
            placeholder="Task Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            className="border-2 rounded px-3 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
          />
          <input
            type="text"
            placeholder="Task Description"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            className="border-2 rounded px-3 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
          />
          {editingTask ? (
            <button
              onClick={() => handleEditTask(editingTask)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={handleAddTask}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105"
            >
              Add Task
            </button>
          )}
        </div>
      </div>

      <ul className="list-none p-0">
        {tasks.map((task) => (
          <li
            key={task._id}
            className="bg-white p-4 rounded mb-2 flex items-center justify-between shadow-md"
          >
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              className="flex-grow"
            >
              {task.title} - {task.description}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setEditingTask(task._id)}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105"
              >
                Edit
              </button>
              <button
                onClick={() => handleToggleComplete(task._id)}
                className={`bg-${task.completed ? 'green' : 'red'}-500 hover:bg-${task.completed ? 'green' : 'red'
                  }-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105`}
              >
                {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
              </button>
              <button
                onClick={() => handleDeleteTask(task._id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );


}

export default Home;

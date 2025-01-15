import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './redux/slices/authSlice';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1 className="text-center my-3">Advanced Todo App</h1>
      {!isAuthenticated ? (
        <div className="auth">
          <button onClick={() => dispatch(login())} className="btn btn-success">
            Login
          </button>
        </div>
      ) : (
        <div>
          <button onClick={() => dispatch(logout())} className="btn btn-danger">
            Logout
          </button>
          <TaskInput />
          <TaskList />
        </div>
      )}
    </div>
  );
};

export default App;



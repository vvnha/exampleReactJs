import './App.css';
import TodoList from './components/ToDoList';
import TodoForm from './components/TodoForm';
import ThemeContextProvider from './components/contexts/ThemeContext'
import ThemeToggle from './components/themeToggle/ThemeToggle';
import TodoContextProvider from './components/contexts/TodoContext';
import Login from './components/Login/login';
import AuthContextProvider from './components/contexts/AuthContext';
import TodoFilterForm from './components/TodoFilterForm';
import Clock from './components/Clock';
import { useState } from 'react';

function App() {
  const [showClock, setShowClock] = useState(true);
  return (
    <div className="App">
      {/* {showClock && (<Clock />)}
      <button onClick={() =>setShowClock(false)} >Hide clock</button> */}
      <ThemeContextProvider>
        <AuthContextProvider>
          <Login />
          <TodoContextProvider>
            <TodoFilterForm/>
            <TodoForm  />
            <TodoList />
          </TodoContextProvider> 
        </AuthContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;

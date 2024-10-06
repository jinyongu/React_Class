import './App.css';

import TodoHeader from './components/TodoHeader';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoHeader />
      <TodoInsert />
      <TodoList />
    </div>
  );
}

export default App;

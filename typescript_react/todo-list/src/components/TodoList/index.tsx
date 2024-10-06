import './styles.css';

import { useEffect, useState } from 'react';

import { getItem } from '../../lib/storage';
import TodoListItem from '../TodoListItem';

function TodoList() {
  const [todo, setTodo] = useState<string[]>(getItem<string[]>('todo') || []);

  useEffect(() => {
    const storedTodo = getItem<string[]>('todo') || [];
    setTodo(storedTodo);
  }, []);

  window.addEventListener('storage', () => {
    const storedTodo = getItem<string[]>('todo') || [];
    setTodo(storedTodo);
    window.location.reload();
  });

  return (
    <div>
      <ol className="todo-list">
        {todo.map((item, index) => (
          <li key={index}>
            <TodoListItem todo={item} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;

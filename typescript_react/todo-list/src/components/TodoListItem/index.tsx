import './styles.css';

import { useState } from 'react';
import { RiPencilFill } from 'react-icons/ri';
import { TiDeleteOutline } from 'react-icons/ti';

import { getItem, setItem } from '../../lib/storage';

interface TodoListItemProps {
  todo: string;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [todos, setTodos] = useState<string[]>(getItem<string[]>('todo') || []);

  const deleteTodo = () => {
    const updatedTodos = todos.filter((item) => item !== todo);
    setItem('todo', updatedTodos);
    setTodos(updatedTodos);
    window.location.reload();
  };

  return (
    <div className="todo-list-item">
      <div className="check-box-container">
        <input
          type="checkbox"
          className="check-box"
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
      </div>
      <div className="todo-content-container">
        <span className={isChecked ? 'todo-content checked' : 'todo-content'}>
          {todo}
        </span>
      </div>
      <div className="correction-icon-container">
        <RiPencilFill className="correction-icon" />
      </div>
      <div className="delete-icon-container">
        <TiDeleteOutline className="delete-icon" onClick={deleteTodo} />
      </div>
    </div>
  );
};

export default TodoListItem;

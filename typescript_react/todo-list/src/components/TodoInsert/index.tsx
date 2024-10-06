import './styles.css';

import { useRef, useState } from 'react';

import { getItem, setItem } from '../../lib/storage';

function TodoInsert() {
  const [todoContents, setTodoContents] = useState<string[]>(
    getItem<string[]>('todo') || [],
  );
  const [inputValue, setInputValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="todo-insert">
      <div className="todo-input-container">
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          className="todo-input"
          ref={inputRef}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
      <div className="todo-add-button-container">
        <button
          className="todo-add-button"
          onClick={() => {
            if (inputValue.trim() !== '') {
              let newTodoContents = [...todoContents, inputValue];
              setTodoContents(newTodoContents);
              setItem('todo', newTodoContents);
              if (inputRef.current) {
                inputRef.current.value = '';
                setInputValue('');
              }
              window.location.reload();
            }
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default TodoInsert;

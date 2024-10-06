import './styles.css';

import React from 'react';

interface TextInputProps {
  type?: 'text' | 'passwd';
  value: string;
  setValue: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ type, value, setValue }) => {
  if (type === 'text') {
    return (
      <div>
        <input
          type="text"
          placeholder="User Id"
          className="login-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  } else if (type === 'passwd') {
    return (
      <div>
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  }

  return <>error</>;
};

export default TextInput;

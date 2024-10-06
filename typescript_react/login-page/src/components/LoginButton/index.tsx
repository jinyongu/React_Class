import './styles.css';

import React from 'react';
import { Link } from 'react-router-dom';

interface LoginButtonProps {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {
  return (
    <div className="login-button-container">
      <Link to="/" className="login-button" onClick={onClick}>
        Login
      </Link>
    </div>
  );
};

export default LoginButton;

import './styles.css';

import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';
import React from 'react';
import { FaLock, FaUser } from 'react-icons/fa';

import LoginButton from '../../components/LoginButton';
import TextInput from '../../components/TextInput';
import { setItem } from '../../lib/storage';

const debounceSetItem = debounce(setItem, 1000);

interface LoginInfo {
  id: string;
  passwd: string;
}

const LoginPage: React.FC = () => {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    id: '',
    passwd: '',
  });

  const setId = (loginId: string) => {
    setLoginInfo((prevInfo) => ({
      ...prevInfo,
      id: loginId,
    }));
  };

  const setPasswd = (loginPasswd: string) => {
    setLoginInfo((prevInfo) => ({
      ...prevInfo,
      passwd: loginPasswd,
    }));
  };

  useEffect(() => {
    debounceSetItem('loginInfo', loginInfo);
  }, [loginInfo]);

  console.log(loginInfo);

  const handleLogin = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (loginInfo.id === '') {
      alert('아이디를 입력하세요');
      e.preventDefault();
    } else if (loginInfo.passwd === '') {
      alert('비밀번호를 입력하세요');
      e.preventDefault();
    }
  };

  return (
    <div className="login-page">
      <div className="id-input-form">
        <FaUser className="user-icon" />
        <TextInput type="text" value={loginInfo.id} setValue={setId} />
      </div>
      <div className="passwd-input-form">
        <FaLock className="passwd-icon" />
        <TextInput
          type="passwd"
          value={loginInfo.passwd}
          setValue={setPasswd}
        />
      </div>
      <div>
        <LoginButton onClick={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;

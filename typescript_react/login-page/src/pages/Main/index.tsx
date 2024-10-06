import { useEffect, useState } from 'react';

import Profile from '../../components/Profile';
import { getItem } from '../../lib/storage';

interface loginData {
  id: string;
  passwd: string;
}

const Main = () => {
  const [loginData, setLoginData] = useState<loginData | null>(null);

  useEffect(() => {
    setLoginData(getItem('loginInfo'));
  }, []);

  return (
    <div>
      {loginData ? <Profile data={loginData} /> : <h1>로그인이 필요합니다.</h1>}
    </div>
  );
};

export default Main;

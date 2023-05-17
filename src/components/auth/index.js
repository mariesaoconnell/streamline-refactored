import React, { useState } from 'react';
import Layout from '../Layout';
import Login from './Login';
import SignUp from './SignUp';

function LogLayout(props) {
  const [login, setLogin] = useState(true);

  return (
    <Layout>
      {login?
      <Login setLogin={setLogin}/>
      :
      <SignUp setLogin={setLogin}/>
      }
    </Layout>
  );
}

export default LogLayout;

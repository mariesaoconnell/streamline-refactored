import React from 'react';
import { Button } from 'react-bootstrap';


function Login({setLogin}) {


  return (
    <>
      <h1>Login</h1>
      <Button onClick={()=>setLogin(false)}>Sign Up</Button>
    </>
  );
}

export default Login;

import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom';


const CustomLogin = () => {

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [loginToken, setLoginToken] = useState('')

  const [cookies, setCookie] = useCookies(['accessToken']);

  const navigate = useNavigate();


  const handelEmailChanged = (email) => {
    console.log("email changed", email);
    setUserEmail(email);
  }

  const handlePassChanged = (pass) => {
    console.log("pass changed", pass);
    setUserPassword(pass);
  }

  const handleLogin = () => {
    console.log("submitted");

    const inputData = {
      username: userEmail,
      password: userPassword
    }

    axios.post(`https://dummyjson.com/auth/login`, inputData).then((response) => {
      console.log(response.data);
      setLoginToken(response.data.token)
      setCookie('accessToken', response.data.token, { path: '/', maxAge: 300000 })
      navigate('/customprofile');
    })
      .catch((error) => {
        console.error('Login failed:', error);

      })
  }


  return (
    <div className="main-container">

      <Form className='form'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => handelEmailChanged(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Enter password" onChange={(e) => handlePassChanged(e.target.value)} />
        </Form.Group>

        <div className='btn-container'>
          <Button variant="primary" onClick={handleLogin}>
            LogIn
          </Button>

        </div>
      </Form>

    </div>
  )
}

export default CustomLogin

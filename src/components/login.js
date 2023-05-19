import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  useNavigate } from 'react-router-dom';


const Login = (props) => {
  const navigate = useNavigate();
    const [credential, setcredential] = useState({
        email :" ",
        password: " "
    });

    const onchange = (e)=>{
        setcredential({...credential, [e.target.name]: e.target.value})
       
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credential.email, password: credential.password})
        });
        const json = await response.json()
        if(json.success){
            //Save the Auth token & Redirect:
            localStorage.setItem('token',json.authToken);
            props.showAlert("Successfully Logedin","success")
            navigate('/')
        }else{
          props.showAlert("Invalid Credinatial","danger")
        }
        console.log(json);
    }
  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label for="email">Email address</Form.Label>
      <Form.Control onChange={onchange} name="email" value={credential.email} type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label for="password">Password</Form.Label>
      <Form.Control onChange={onchange} value={credential.password}  name="password" type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button  variant="primary" type="submit">
        Login
    </Button>
  </Form>
  )
}

export default Login
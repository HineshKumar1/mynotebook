import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Registration(props) {
  let navigator = useNavigate();
  const [Registration, setRegistration] = useState({
    name:" ",
    email :" ",
    password: " "
});

const onchange = (e)=>{
    setRegistration({...Registration, [e.target.name]: e.target.value})
   
}
const handleSubmit = async (e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: Registration.name ,email: Registration.email, password: Registration.password})
    });
    const json = await response.json()
    
    if(json.success){
        //Save the Auth token & Redirect:
        localStorage.setItem('token',json.authtoken);
        props.showAlert("Successfully SignUp","success")
        navigator('/login')
        
    }else{
      props.showAlert("Invalid Credinatial","danger")
    }
    console.log(json);
}
  return (
    <>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control value={Registration.name} name="name" type="text"  onChange={onchange} placeholder="Enter Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={Registration.email} name="email" type="email" onChange={onchange} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" value={Registration.password} type="password" onChange={onchange} placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        SignUp
      </Button>
    </Form>
    </>
  )
}

export default Registration
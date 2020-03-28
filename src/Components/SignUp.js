import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const SignUp = () => {
return (<>

    <div class="sign">
          <div class="signup__background-image"></div>
        </div>

    <div className="signup-container">
        <h2 className="signup-header">Sign Up Now</h2>

        <Form className="signup-form">
        <Form.Group>
            <Form.Label>Artist Name</Form.Label>
        <Form.Control placeholder="Artist Name" />

       
      <Form.Label>Type Of Artist</Form.Label>
      <Form.Control as="select" value="Choose...">
        <option>Band</option>
        <option>Solo</option>
        <option>DJ</option>
      </Form.Control>
 
      <Form.Label>Genre Type</Form.Label>
      <Form.Control as="select" value="Choose...">
      <option>Alternative/Rock</option>
        <option>Country/Folk</option>
        <option>Hip Hop/Rap</option>
        <option>Top 40/Pop</option>
        <option>Classical/Jazz</option>
      </Form.Control>
       
      <Form.Label>Email Address</Form.Label>
      <Form.Control placeholder="Email" />
      </Form.Group>
      </Form> 

      <Link to="">
          <Button className="register-button">
              <span>Register Now!</span>
          </Button>     
      </Link> 
      
    </div>
       </>
    )
}

export default SignUp;
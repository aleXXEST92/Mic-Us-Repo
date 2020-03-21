import React from 'react'
import { Form, Button } from 'react-bootstrap';

const SignUp = () => {
return (<>
    <div className="signup-container">
        <h2 className="signup">Sign Up Now</h2>

        <Form className="signup-form">

        <Form.Group controlId="formGroupPassword">
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
      
    </div>
    <h3 class="hidden">Become A Member</h3>
    <Button className="button">Sign Up!</Button>
       </>
    )
}

export default SignUp;
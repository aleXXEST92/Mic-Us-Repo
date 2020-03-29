import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const SignUp = () => {

const [artistType, setArtistType] = React.useState('');

const artistChange = event => {
setArtistType(event.target.value);
// console.log(event.target.value)
};

const [genreType, setGenreType] = React.useState('');

const genreChange = event => {
  setGenreType(event.target.value);
}

  
return (<>

    <div class="sign">
          <div class="signup__background-image"></div>
        </div>

    <div className="signup-container">
        <h2 className="signup-header">MicUS Sign Up</h2>

        <Form className="signup-form">
        <Form.Group>
        <Form.Control className="style" placeholder="Artist Name" />
        <Form.Control className="style" placeholder="Email Address" />


       <div className="wrapper">
       <TextField
          id="outlined-select-currency"
          select
          label="Type Of Artist"
          value={artistType}
          onChange={artistChange}
          variant="outlined"
        >
          <MenuItem value={1}>Band</MenuItem>
          <MenuItem value={2}>Solo</MenuItem>
          <MenuItem value={3}>DJ</MenuItem>
        </TextField>

        <TextField
          id="outlined-select-currency"
          select
          label="Genre Type"
          value={genreType}
          onChange={genreChange}
          helperText="Select an option"
          variant="outlined"
        >
          <MenuItem value={1}>Rock/Alternative</MenuItem>
          <MenuItem value={2}>Rap/Hip Hop</MenuItem>
          <MenuItem value={3}>Country/Folk</MenuItem>
          <MenuItem value={4}>Jazz/Classical</MenuItem>
        </TextField>
      </div>

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
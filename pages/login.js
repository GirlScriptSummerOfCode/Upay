import NavBar from '../components/NavBar';
import links from '../constants/links';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './LoginStyles.css';

export default () => (
  
  <div className="divMain">
    <div className="loginMain">
      <img src="/images/logo.png" alt="Logo of Upay NGO" className='iconEdit'/>
      <Form>
        <FormGroup >
          <Input
            className="inputContainer"
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Email"
          />
        </FormGroup>
        <FormGroup>
          <Input
            className="inputContainer"
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password" 
          />
        </FormGroup>
        <Button
          className="formButton"
          // htmlType="submit"
          color="primary" 
          size="sm"
          // active
        >
          Login
        </Button>
      </Form>
    </div>
  </div>

 
);

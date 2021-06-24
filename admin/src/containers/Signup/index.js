import React, {useState} from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions";
import { Redirect } from "react-router-dom";
import Header from '../../components/Header';


const Signup = (props) => {
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);

  const [name, setName] = useState("");
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  if (auth.authenticate) {
    return <Redirect to={"/"} />;
  }

  if (user.loading) {
    return <p>Loading...</p>;
  }

  const userSignup = (e) => {
    e.preventDefault();
    const user = { name, email, password };
    dispatch(signup(user));
  };
    return (
      <>
      
        <Container>
            <h1 style={{textAlign: "center", paddingTop: "30px"}}>SignUp</h1>
      
      <Row style={{ marginTop: "60px"}}>
        <Col md={{span: 6, offset: 3}}>
        <Form onSubmit={userSignup}>
        <Input
                label="Name"
                placeholder="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

          
              <Input
                label="Email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="Password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
          <Button variant="primary" type="submit">
            Signup
          </Button>
            
          
        </Form>

        </Col>
      </Row>
        
    </Container>
    </>
    );
}

export default Signup;

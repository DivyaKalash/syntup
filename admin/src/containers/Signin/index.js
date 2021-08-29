import React, {useState} from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { login } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "../../components/Header";

const Signin = () => {

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector(state => state.auth);




  const userLogin =(e)=>{
    e.preventDefault();
    const user = {
      email, password
    }
    dispatch(login(user));
  }

if(auth.authenticate){
  return <Redirect to={"/"}/>
}
  return (
  
    
    <Container style={{marginTop: "60px"}}>
      <h1 style={{ textAlign: "center", paddingTop: "30px" }}>SignIn</h1>

      <Row style={{ marginTop: "60px" }}>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={userLogin}>
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
              Signin
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    
  );
};

export default Signin;

import React from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";

const Signup = () => {
    return (
        <Container>
            <h1 style={{textAlign: "center", paddingTop: "30px"}}>SignUp</h1>
      
      <Row style={{ marginTop: "60px"}}>
        <Col md={{span: 6, offset: 3}}>
        <Form>
        <Input
                label="Name"
                placeholder="Name"
                type="text"
                value=""
                onChange=""
              />

          
              <Input
                label="Email"
                placeholder="Email"
                type="email"
                value=""
                onChange=""
              />
              <Input
                label="Password"
                placeholder="Password"
                type="password"
                value=""
                onChange=""
              />
          <Button variant="primary" type="submit">
            Signup
          </Button>
            
          
        </Form>

        </Col>
      </Row>
        
    </Container>
    )
}

export default Signup;

import React, { Fragment } from "react";
import Axios from "axios";
import { 
  Button, 
  Form, 
  Input, 
  Container, 
  Row, 
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  };

  onNameChange = (event) => {
    this.setState({name: event.target.value});
  };

  onEmailChange = (event) => {
    this.setState({email: event.target.value.toLowerCase()});
  };

  onMessageChange = (event) => {
    this.setState({message: event.target.value});
  };

  onSubmitContact = (event) => {
    event.preventDefault();

    Axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state
    }).then(response => {
      if (response.data.status === 'success'){
        alert("Message Sent!!");
        this.resetForm();
      } else if (response.data.status === 'fail'){
        alert("Message failed to send!!");
      };
    });
  };

  resetForm = () => {
    this.setState({
      name: '',
      email: '',
      message: ''
    })
  }

  render() {
    return (
      <Fragment>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Contact Me</h2>
                <Form className="contact-form" method="POST" onSubmit={this.onSubmitContact.bind(this)} >
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" onChange={this.onNameChange.bind(this)} />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="email" onChange={this.onEmailChange.bind(this)} />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Please enter your message here..."
                    type="textarea"
                    rows="4"                    
                    onChange={this.onMessageChange.bind(this)}
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="info" size="lg" type="submit">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>        
        </div>
      </Fragment>
    );
  }
};

export default ContactForm;
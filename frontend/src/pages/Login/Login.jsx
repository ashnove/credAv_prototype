import React from 'react';
import {Container, Schema, Content, Footer, Message, FlexboxGrid, Panel, Form, ButtonToolbar, Button} from 'rsuite';

const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
  username: StringType().isRequired('This field is required.'),  
  password: StringType().isRequired('This field is required.')
});

const TextField = React.forwardRef((props, ref) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-4`} ref={ref} style={{ width: '-webkit-fill-available'}}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});
const Login = () => {

    const formRef = React.useRef();
    const [formError, setFormError] = React.useState({});
    const [access, setAccess] = React.useState('');
    const [formValue, setFormValue] = React.useState({
      username: '',
      password: ''
    });
    const [formHeader, setFormHeader] = React.useState(<h3>Login</h3>);

    const admin = {
        username: 'gydn',
        password: 'gydn'
    }
  
    const handleSubmit = () => {
      if (!formRef.current.check()) {
        console.error('Form Error');
        return;
      }
      console.log(formValue, 'Form Value');
      if(formValue.username === admin.username && formValue.password === admin.password){
            setAccess('\home');
      }
      else {
            setFormHeader(
                <div >
                    <Message showIcon type="error"> Username or Passoword is invalid </Message>
                    <h3>Login</h3> 
                </div>
            );
      }
    };
    return (
            <Container>
                <Content style={{marginTop: '20vh'}}>
                    <FlexboxGrid justify="center"  >
                        <FlexboxGrid.Item colspan={12} style={{width: '30%'}}>
                            <Panel header={formHeader} bordered style={{backgroundColor: '#ecf0f1'}} >
                                <Form fluid
                                    ref={formRef}
                                    onChange={setFormValue}
                                    onCheck={setFormError}
                                    formValue={formValue}
                                    model={model}
                                >
                                    <TextField name="username" label="Username" />
                                    <TextField name="password" label="Password" type="password" autoComplete="off" />
                                    <Form.Group>
                                        <ButtonToolbar>
                                        <Button appearance="primary" onClick={handleSubmit} href={access}>Sign in</Button>
                                        <Button appearance="link" href='\register'>Create an account</Button>
                                        </ButtonToolbar>
                                    </Form.Group>
                                </Form>
                            </Panel>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Content>
                <Footer>Footer</Footer>
            </Container>
  );
  
};

export default Login;
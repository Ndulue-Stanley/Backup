
import styled from 'styled-components';
import TextInput from './TextInput';
import EmailInput from './EmailInput';
import PasswordInput from './Pasword';
import ConfirmPassword from './ConfirmPassword';
import Button from './Button';
import {AiFillSave} from 'react-icons/ai'

const Form = () => {
  return (
    <Container>
        <Wrapper>
            <Card>
                <Title>Start getting paid with Flutterwave</Title>
                
                <TextInput placeholder="first Name" type='text' label="First Name*"/>
                <TextInput placeholder="last Name" type='text'label="Last Name*"/>
                <EmailInput placeholder="Email" label="Email required*"/>
                <PasswordInput placeholder="Password" type='password' label="Password"/>
                <ConfirmPassword placeholder="Confirm password" label="ConfirmPassword"/>
                <Button
            icon={AiFillSave}
            text='Submit'
            />
            </Card>
                       
        </Wrapper>
    </Container>
  )
}

export default Form;

// const Container = styled.div``



const Card = styled.div`
width: 250px;
height: 500px;
background-color: #ffffff;
padding: 20px;
display: flex;
align-items: center;
flex-direction: column;
`

const Title = styled.div`
text-align: center;
font-weight: 500;
font-size: 15px;
line-height: 50px;
font-family: Moderat, inter, sans-serif;
color: rgb(51, 51, 51);
`

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
min-height: 100vh;
height: 100%;
background-color: #00000020;
`
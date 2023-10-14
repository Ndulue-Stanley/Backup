import { styled } from "styled-components";

const Header = () =>{
    return(
        <div>
           <Container>
            <Wrapper>
                <Logo>hulu</Logo>
                <NavHold>
                    <Nav>START YOUR FREE TRIAL</Nav>
                    <Nav>LOG IN</Nav>
                </NavHold>
            </Wrapper>
           </Container>
        </div>
    )
}

export default Header;

const Nav = styled.div`
font-size: 15px;
font-weight: 600;
color: grey;
`
const NavHold = styled.div`
width: 30%;
display: flex;
justify-content: space-around;
align-items: center;
`
const Logo = styled.div`
width: 30%;
font-size: 30px;
font-weight: 800;
color: green;
`
const Wrapper = styled.div`
width: 95%;
height: 90%;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: rebeccapurple; */
`
const Container = styled.div`
width: 100%;
height: 80px;
background: rgb(8,22,25);
background: linear-gradient(180deg, rgba(8,22,25,1) 16%, rgba(47,163,183,1) 83%);
display: flex;
justify-content: center;
align-items: center;
padding: 10px 0px;

`
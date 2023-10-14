import { styled } from "styled-components";
import pix from '../Components/Sponsorimg.jpg'

const Sponsor = () =>{
    return(
        <>
            <Container>
                <Wrapper>
                    <ImageHold>
                        <img src={pix} alt=""/>  
                    </ImageHold>
                    <Hold>
                   <TextUp> DISNEY BUNDLE TRIO BASIC</TextUp> <br />
<TextMid>
Get Hulu, Disney+, and ESPN+, all with ads, for $12.99/mo.*</TextMid><br />
                   <TextDown>
                   *Price will increase to $14.99/month on 10/12/2023.
                   </TextDown>
                    </Hold>
                    <ButtonHold>
                        <Bttn>GET YOURS NOW</Bttn>
                        <Test>
                        Terms Apply
                        </Test>
                    </ButtonHold>
                </Wrapper>
            </Container>
        </>
    )
}

export default Sponsor;

const TextUp = styled.div`
color: forestgreen;
font-size: 15px;
font-weight: 700;
`
const TextMid  = styled.div`
color: white;
font-size: 15px;
font-weight: 500;
`
const TextDown = styled.div`
color: white;
font-size: 15px;
font-weight: 500;
`
const Test = styled.div`
`
const Bttn = styled.button`
width: 230px;
margin-bottom: 10px;
padding: 15px 0px;
border-radius: 5px;
border: none;
font-size: 13px;
font-weight: 600;
letter-spacing: 1px;
`
const Hold = styled.div`
width: 30%;
margin: 0px;
height: 70%;
`
const ButtonHold = styled.div`
width: 30%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ImageHold = styled.div`
width: 30%;
`
const Wrapper = styled.div`
width: 96%;
display: flex;
justify-content: space-between;
align-items: center;
`
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #133036;
    padding: 10px 0px;
`
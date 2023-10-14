import { styled } from "styled-components";
import cover from '../Components/coverphoto.jpeg'

export default function Hero  (){
    return(
        <>
            <Container>
                <Darkshade>
                <Head>Movies</Head>
                <Wrapper>
                    <Hold>
                    <h1>Movies</h1>
                    <p>Stream box office hits, classic cinema, acclaimed indies, inspiring documentaries, and much more.</p>
                    </Hold>
                </Wrapper>
                </Darkshade>
            </Container>
        </>

    )
}


const Hold = styled.div`
h1{
    font-size: 29px;

}p{
    font-size: 25px;
}
`
const Head = styled.div`
border-bottom: 1px solid white;
width: 100%;
height: 100px;
display: flex;
justify-content: center;
color: white;
align-items: center;
font-size: 15px;
`
const Wrapper = styled.div`
  width: 70%;
    height: 80%;
    padding: 200px 0px;
`
const Darkshade = styled.div`
width: 96%;
background-color: rgba(0,0,0,0.4);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Container = styled.div`
    width: 100%;
  min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
   background-image: url(${cover});
   background-position: center;
   background-repeat: no-repeat;
   background-size: contain;
   flex-direction: column;
`
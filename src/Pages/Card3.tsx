import { styled } from "styled-components"
import Minicards from "../Props/Minicards"
import data from '../Components/Dat3.json'
import { Link } from "react-router-dom"


const Card3 = () =>{
    return(
         <>
         <Container>
         <Head>BLOCKBUSTER MOVIES</Head>
       <WrappeR>
       {
            data?.map((props)=>(
               <Wrap to={`/movies/${props.id}`} key={props.id}>
                 <Minicards  Pic = {props.Pic}  Title={props.Title} Category = {props.Category}/>
               </Wrap> 
            ))
            }
       </WrappeR>
            
         </Container>

         </>
    )
}

export default Card3

const Wrap = styled(Link)`
  text-decoration: none;
`

const WrappeR = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
gap: 90px;
/* background-color: red; */
color: white;
`
const Head = styled.div`
width: 20%;
margin-left: 140px;
font-size: 20px;
font-weight: 600;
`

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
gap: 50px;
background-color: black;
color: white;
flex-direction: column;
padding: 70px 0px;
`


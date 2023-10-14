import { useParams } from "react-router-dom"
import {styled} from 'styled-components'
import pix from '../Components/hulu13.jpeg'
import Sponsor from './Sponsor';
import Header from '../Static/Header';
import data from'../Components/Dat3.json'

interface iProps {
    title: string
    stars: string
    pic: string
    description: string;
    Genre: string;
    Plan: string;

}
const Desc = ({ title,description, Genre, Plan,  stars}:iProps) =>{
    const params:any = useParams()
    const details = data[params.movies - 1]

    return(
        <>
        <Header/>
           <Container>
            <Wrapper bi={pix} >
            <Cover>
                <Hold>
                <Top>
                    <Logo>hulu</Logo>
                    <Logo2>{details.Title}</Logo2>
                    <Mini>{details.Category}</Mini>
                </Top>
                <Middle>
                    <Star><span>Starring:</span> {stars}</Star>
                    <Star><span>Director:</span> {stars}</Star>
                    <Bottom>{Genre}</Bottom>
                   <Bottom> {Plan}</Bottom>
                </Middle>
                <Wrap>
                <Bttn>
                    START YOUR FREE TRIAL
                </Bttn>
                <Test>Hulu free trial available for new and eligible returning Hulu subscribers only. Cancel anytime. Additional terms apply</Test>
                </Wrap>
                </Hold>
             </Cover>
             <Sponsor/>
            </Wrapper>
           </Container>
        </>
    )
}
export default Desc;

const Wrap = styled.div`

`
const Test = styled.div`
font-size: 8px;
`
const Hold = styled.div`
    margin-left: 30px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    `

const Bttn = styled.button`
width: 250px;
margin-bottom: 10px;
padding: 10px 0px;
border-radius: 5px;
border: none;
font-size: 13px;
font-weight: 600;
letter-spacing: 1px;
`
const Bottom = styled.div`
font-size: 14px;
font-weight: 500;
color: white;
`
const Star = styled.div`
font-size: 14px;
font-weight: 500;
color: white;

span{
    font-size: 14px;
font-weight: 650;
color: white;
}
`
const Mini = styled.div`
    color: white;
    font-size: 12px;
    width: 100%;

`
const Middle = styled.div`  
width: 45%;
/* background-color: red; */
display: flex;
flex-direction: column;
gap: 10px;
`
const Logo2 = styled.div`
color: white;
font-size: 50px;
font-weight: 800;
letter-spacing: 5px;
font-family: Georgia, 'Times New Roman', Times, serif;
/* width: 50%; */
/* display: flex;  */
justify-content: center;
align-items: center;
`
const Logo = styled.div`
color: white;
font-size: 25px;
font-weight: 800;
display: flex;
align-items: center;
width: 40%;
justify-content: center;
`
const Top = styled.div`
width: 45%;
display: flex;
flex-direction: column;
justify-content: center;
/* background-color: gainsboro; */
gap: 2px;
`
const Cover = styled.div`
height: 100%;
width: 100%;
background: rgb(47,163,183);
background: linear-gradient(25deg, rgba(47,163,183,1) 34%, rgba(53,100,107,0.5) 63%);
padding: 80px 0px;
`
const Wrapper = styled.div<{bi: any}>`
width: 100%;
height: 100%;
background-image: url(${({bi})=>bi});
`
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
background-image: url(${pix});
background-size: cover;
    justify-content: center;
    align-items: center;
`
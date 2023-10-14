import { styled } from "styled-components";
import Form from "../Props/Form";
import Minicards from "../Props/Minicards";
import Card2 from "./Card2";
import Card3 from "./Card3";
import CardDisplay from "./CardDisplay";
import Hero from "./Hero";
import Desc from "../Props/Description";
import Sponsor from "../Props/Sponsor";
import DescHold from "./DescHold";

const Homescreen = () =>{
    return (
        <div>
            <Hero/>
           <Holder>
           <Wrapper>
           <CardDisplay/>
            <Card2/>
            <Card3/>
           </Wrapper>
           </Holder>
            {/* <Form/> */}
            {/* <DescHold/> */}
            {/* <Sponsor/> */}
        </div>
    )
}

export default Homescreen;

const Holder = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 0px 0px;
/* background-color: black; */
`

const Wrapper = styled.div`
    width: 97%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
import { styled } from "styled-components";


interface iProps {
    Pic: string
    Title: string
    Category: string
}

const Minicards = ({Pic, Title, Category}:iProps) =>{ 
    return (
        <div>
        <Wrapper>
            <ImageHolder>
                <img src={Pic} alt=""/>
            </ImageHolder>
            <TextHolder>
                <h2>{Title}</h2>
                <p>{Category}</p>
            </TextHolder>
        </Wrapper>
        </div>
    )
}

export default Minicards;

const TextHolder = styled.div`
width: 100%;
height: 45%;

`
const ImageHolder = styled.div`
width: 100%;
height: 50%;
img{
    object-fit: cover;
    width: 100%;
    height: 100%;
border-radius: 10px;
}
`
const Wrapper = styled.div`
    width: 200px;
    height: 200px;
    color: white;

`




import { styled } from 'styled-components'
import dat from '../Components/Descripiton2.json'
import Desc from '../Props/Description'
import { Link } from 'react-router-dom'

const DescHold = ()=>{
    return(
        <div>
            {
                dat?.map((el)=>(
                    <Desc
                    pic={el.Pic}
                    title={el.title}
                    stars={el.stars}
                    description={el.description}
                    Genre={el.Genre}
                    Plan={el.Plan}
                    
                                        />

                ))
            }

        </div>
    )

}


export default DescHold

const Wrap  = styled(Link)`
    text-decoration: none;
`
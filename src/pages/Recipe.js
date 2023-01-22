import React from 'react'
import { useEffect , useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

function Recipe() {
        const params = useParams();
        const [details , setDetails] = useState({});
        const [activeTab , setActiveTab] = useState('Instructions');



        const fetDetails = async() =>{
                const data = await fetch(`https://api.spoonacular.com/recipes/${params.type}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
                const detailData = await data.json();
                setDetails(detailData);
        }

        useEffect(() => {
                fetDetails()
        }, [params.type])

        console.log(details);

        return (
                <DetailedWrapper
                 animate ={{opacity: 1}}
                 initial = {{opacity : 0}}
                 exit={{opacity : 0}}
                 transition={{duration : 0.15}}
                >
                        <div style={{zoom:0.85}}>
                                <h2>{details.title}</h2>
                                <img src={details.image}/>
                                <ExtraDetails>
                                        <ul>
                                                <li>Heath Score : {details.healthScore}</li>
                                                <li>Preparation Time : {details.readyInMinutes}</li>
                                                <li>Price per Serving : {details.pricePerServing}</li>
                                                <li>{details.vegetarian ? 'Vegetarian' : 'Non Vegetarian'}</li>
                                                {details.veryPopular && <li>Very Popular</li>}
                                                
                                                {details.dishTypes && (
                                                        <div>
                                                                <li>Dish Type :</li>
                                                                <ol>
                                                                {details.dishTypes.map((x) =>(
                                                                       <li>{x}</li> 
                                                                ))}
                                                                </ol>
                                                        </div>
                                                )}


                                                {details.diets && (
                                                        <div>
                                                                <li>Suitable Diets :</li>
                                                                <ol>
                                                                {details.diets.map((x) =>(
                                                                       <li>{x}</li> 
                                                                ))}
                                                                </ol>
                                                        </div>
                                                )}
                                                
                                        </ul>
                                        <br/>
                                        <br/>
                                                <h4 style={{fontSize : 'large'}} >{<a href={details.sourceUrl}>{details.sourceUrl}</a>}</h4>
                                </ExtraDetails>
                        </div>

                        <Info>
                                <Button className={(activeTab === 'Instructions') ? 'active':''} onClick={(e) => setActiveTab('Instructions')} >Instructions</Button>
                                <Button className={(activeTab === 'Ingredients') ? 'active' : ''} onClick={(e) => setActiveTab('Ingredients')} >Ingredients</Button>
                                
                                {activeTab === 'Instructions' && (
                                        <div
                                        style={
                                                {
                                                        marginTop : '2rem',
                                                }
                                        }
                                        >
                                                <h3 style={{fontSize : 'large'}} dangerouslySetInnerHTML = {{__html: details.summary}}></h3>
                                                <h3 style={{fontSize : 'large'}} dangerouslySetInnerHTML = {{__html: details.instructions}}></h3>
                                        </div>
                                )}
                                
                                {activeTab === 'Ingredients' && (
                                        <ul>
                                        {details.extendedIngredients.map((ingred) =>(
                                                <li key={ingred.id}>{ingred.original}</li>
                                        ))}
                                </ul>
                                )}

                                
                        </Info>
                </DetailedWrapper>
        )
}

const ExtraDetails = styled.div``;

const DetailedWrapper = styled(motion.div)`
margin-top : 7rem;
margin-bottom : 5rem;
display: flex;

.active{
        background: linear-gradient(35deg , #494949 , #313131);
        color:white;
}

h2{
        margin-bottom: 2rem;
}

li{
        font-size: 1.2rem;
        line-height: 2.5rem;
}
ul{
        margin-top: 2rem;
}
`
const Button = styled.div`
display : inline-block;
padding : 1rem 2rem;
color : #313131;
background : white;
border: 2px solid black;
margin-right : 2rem;
font-weight : 600;
cursor : pointer;
`;

const Info = styled.div`
margin-left : 10rem;`

export default Recipe

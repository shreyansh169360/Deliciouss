import React , {useEffect , useState} from 'react'
import styled from 'styled-components'
import { Splide , SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import { Link } from 'react-router-dom';

function Popular() {
        const [popular, setPopular] = useState([])

        useEffect(() => {
                getPopularRecipes();
        }, [])

        const getPopularRecipes = async () =>{
                const check = localStorage.getItem('Popular');
                
                if(check){
                        setPopular(JSON.parse(check));
                }
                else{
                        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
                        const data = await api.json();
                        localStorage.setItem('Popular', JSON.stringify(data.recipes));
                        setPopular(data.recipes);
                        console.log(data.recipes);
                        
                }
        }

        return (
                <div>
                <Wrapper>
                        <h3>Popluar Picks</h3>

                        <Splide  options={{
                                perPage : 4,
                                type : 'loop',
                                drag : 'free',
                                gap : '1rem',
                                arrows : true,
                                pagination : false
                        }}>
                                
                        {popular.map((recipe)=>{
                                return(
                                        <SplideSlide>
                                        <Card key={recipe.id}>
                                                <Link to={`/recipe/${recipe.id}`}>

                                                        <p>{recipe.title}</p>
                                                        <img src={recipe.image} alt={recipe.title} />
                                                </Link>
                                        <Gradient/>
                                        </Card>
                                        </SplideSlide>
                                
                        )})}
                        </Splide>
                </Wrapper>
                </div>
        )
}

const Card = styled.div`
min-height: 25 rem; 
border-radius:2rem;
position: relative;

        img {
        border-radius: 2rem;
        width: 90%;
        height:90%;
        object-fit: cover;
        postion : absolute;
        left :0;
        }

        p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0;
        transform: translate(-50% , 0%);
        color:white;
        font-weight:600;
        font-size: 1rem;
        height:40%;
        display: flex;
        justify-content: center;
        align-items: center;
        }
`;


const Wrapper = styled.div`
margin : 0.4rem
`;


const Gradient = styled.div`
z-index : 3;
position : absolute;
width : 100%;
height : 100%;
background : linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1.9));
`;

export default Popular

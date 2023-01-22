import React , {useEffect , useState} from 'react'
import styled from 'styled-components'
import { Splide , SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import { Link } from 'react-router-dom';


function Vegie() {

        const [vegie, setVegie] = useState([])

        useEffect(() => {
                getVegie();
        }, [])

        const getVegie = async () =>{
                const check = localStorage.getItem('vegies');
                
                if(check){
                        setVegie(JSON.parse(check));
                }
                else{
                        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
                        const data = await api.json();
                        localStorage.setItem('vegies', JSON.stringify(data.recipes));
                        setVegie(data.recipes);
                        console.log(data.recipes);
                        
                }
        }


        return (
                       <div>
                <Wrapper>
                        <h3>Vegetarian Picks</h3>

                        <Splide  options={{
                                perPage : 3,
                                type : 'loop',
                                drag : 'free',
                                gap : '1rem',
                                arrows : true,
                                pagination : false
                        }}>
                                
                        {vegie.map((recipe)=>{
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
overflow: hidden;
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
background : linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export default Vegie

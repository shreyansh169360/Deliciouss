import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'    //use to pull out keyword from URL
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'


function Cuisine() {
        const [cuisine, setCuisine] = useState([])
        let params = useParams();

        useEffect(() => {
                getCuisine(params.type);
        }, [params.type])
        
        const getCuisine = async(name) =>{
                const check = localStorage.getItem("cuisine/"+name);

                if(check){
                        setCuisine(JSON.parse(check));
                }
                else{
                        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
                        const recipe = await data.json();
                        localStorage.setItem("cuisine/"+name, JSON.stringify(recipe.results));
                        setCuisine(recipe.results);
                }


        }
        return (
                <Grid
                 animate ={{opacity: 1}}
                 initial = {{opacity : 0}}
                 exit={{opacity : 0}}
                 transition={{duration : 0.15}}
                >
                        {cuisine.map((item) =>{
                                return (
                                  <Card key={item.id}>
                                    <Link to={`/recipe/${item.id}`}>
                                      <img src={item.image} alt="" />
                                      <h4>{item.title}</h4>
                                    </Link>
                                  </Card>
                                );
                        })}
                </Grid>
        )
}

const Grid = styled(motion.div)`
        display: grid;
        grid-template-columns: repeat(auto-fit , minmax(20rem , 1fr));
        grid-gap:3rem;
`;

const Card = styled.div`
img {
        border-radius: 2rem;
        width: 90%;
}

a{
        text-decoration: none;
}

h4{
        text-align: center;
        padding:1rem;
}
`;


export default Cuisine

import React from 'react'
import { useState ,useEffect } from 'react';
import { useParams , Link} from 'react-router-dom';
import styled from 'styled-components';

function SearchedPage() {

        const [searched, setSearched] = useState([])
        const parameter = useParams();
        console.log(parameter.type);
        useEffect(() => {
                getSearched(parameter.type);
        }, [parameter.type])


        const getSearched = async(name) =>{
                const check = localStorage.getItem("searched/"+name);

                if(check){
                        setSearched(JSON.parse(check));
                }
                else{
                        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
                        const recipe = await data.json();
                        localStorage.setItem("searched/"+name, JSON.stringify(recipe.results));
                        setSearched(recipe.results);
                }


        }


        return (
                <Grid>
                        {searched.map((item)=>{
                                return (
                                  <Card key={item.id}>
                                    <Link to={`/recipe/${item.id}`}>
                                      <img src={item.image} alt={item.title} />
                                      <h4>{item.title}</h4>
                                    </Link>
                                  </Card>
                                );

                        })}
                </Grid>
        )
}


const Grid = styled.div`
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


export default SearchedPage

import { FaPizzaSlice ,FaHamburger ,FaHome } from 'react-icons/fa'
import {GiNoodles , GiChopsticks} from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
// import LinearGradient from 'react-native-linear-gradient'

import React from 'react'

function Category() {
        // const Slink = {
        //         display: "flex",
        //         flex-direction: "column",
        //         justify-content: "center",
        //         align-items: "center",
        //         border-radius:50%;
        //         margin-right: 2rem;
        //         margin-left: 2rem;
        //         text-decoration: none;
        //         background-color: linear-gradient(35deg,#494949,#313131)
        // }
        return (
                <List>
                        <Slink to={'/'}>
                                <FaHome/>
                                <h4>Home</h4>
                        </Slink>


                        <Slink to={'/cuisine/Italian'}>
                                <FaPizzaSlice/>
                                <h4>Italian</h4>
                        </Slink>


                        <Slink to={'/cuisine/American'}>
                                <FaHamburger/>
                                <h4>American</h4>
                        </Slink>


                        <Slink to={'/cuisine/Thai'}>
                                <GiNoodles/>
                                <h4>Thai</h4>
                        </Slink>


                        <Slink to={'/cuisine/Japanese'}>
                                <GiChopsticks/>
                                <h4>Japanese</h4>
                        </Slink>
                </List>
        )
}

const List = styled.div`
display: flex;
justify-content: center;
margin : 4rem 4rem 2rem 4rem;
`;


const Slink = styled(NavLink)`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius:50%;
        margin-right: 2rem;
        margin-left: 2rem;
        text-decoration: none;
        background: linear-gradient(35deg,#494949,#313131);
        width:6rem;
        height:6rem;
        cursor:pointer;
        transform:scale(0.8);

        h4{
                color:white;
                font-size:0.8rem;
        }
        svg{
                color:white;
                font-size: 1.5rem;
                margin : 0.4rem;
        }
        &.active{
                background: linear-gradient(to right , #f27121 , #e94057);

                svg{
                        color:white;   
                }
        }
`;



export default Category

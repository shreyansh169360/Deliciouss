import Popular from "../components/popular";
import Vegie from "../components/vegie";
import React from 'react'
import { motion } from "framer-motion";

function Home() {
        return (
                <motion.div
                 animate ={{opacity: 1}}
                 initial = {{opacity : 0}}
                 exit={{opacity : 0}}
                 transition={{duration : 0.15}}
                >
                        <Popular/>    
                        <Vegie/>    
                </motion.div>
        )
}

export default Home

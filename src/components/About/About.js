import React from 'react'
import { Container } from "../../GlobalStyles";
import './About.css'


const About = () => {
    return (
        <div className='main-container'>
            <div className='container'>
                <p>BASE LOCATION: DETROIT, MI</p>
                <p>RIO IS A FREELANCE PHOTOGRAPHER THAT SPECIALIZES IN STUDIO AND LOCATION BASED SHOOTS FOR PRIVATE AND PUBLIC EVENTS.</p>
                <p>SOME OF RIO'S CLIENTS INCLUDE THE FILLMORE DETROIT AND POPULAR DETROIT NIGHTCLUB DELUXX FLUXX</p>
                <p>RIO OFTEN STRESSES HOW PHOTOGRAPHY IS NOT ONLY A TECHNICAL SKILLS, BUT AN ART/EMOTION THAT IS EXPRESSED THROUGH THE SHOOTER. WITH THIS IN MIND RIO GIVES YOU FRESH AND ORIGINAL SHOTS.</p>
            </div>
            <div className='picture-container'>
                <img src='./assets/picture19.jpg' alt='pic' />
            </div>
        </div>
    )
}

export default About
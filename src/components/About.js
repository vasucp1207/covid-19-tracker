import React from 'react'
import styled from 'styled-components'
import Me from '../Images/Me.jpg'
import '@fontsource/roboto/400.css';
import Zoom from 'react-reveal/Zoom';


function About() {

    const skills = ['Javascript', 'React', 'C++', 'Python', 'Firebase', 'Nodejs']

    return (


        <Zoom>
            <StyledAbout>
                <Container className='left'>
                    <h3>About Me</h3>

                    <StyledText>
                        <span>Hello! My name is Vasu</span>
                        <p>
                            I'm am an undergrad student interested in Machine Learining, Web Developmet and Comptetive Programming.
                            Currently I'm mainly working on OpenSource also play with Neural Networks on weekends.
                            In personal life I am a big fan of old school hiphop.
                        </p>
                    </StyledText>
                    <div className='skills'>Skills</div>
                    <ul className="skills__list">
                        {skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
                </Container>

                <StyledPic>
                    <img src='' />
                </StyledPic>
            </StyledAbout>
        </Zoom>

    )
}

export default About

const StyledAbout = styled.div`
    h3{
        color: white;
    }
    color: var(--slate);
    margin-top: 50px;
    border-radius: 5px;
    padding: 10px;
    max-width: 900px;
    display: flex;

    div.skills{
        margin-top: 20px;
        margin-bottom: 15px;
        font-weight: bold;
        font-size: 1.5rem;
        color: white;
    }
    ul.skills__list{
        margin-left: 20px;
        display: grid;
        grid-template-columns: repeat(2, minmax(140px, 200px));
    }
    li::marker{
        color: var(--pink);
    }
`

const StyledText = styled.div`
    margin-top: 20px;
    width: 500px;
    span{
        color: var(--pink);
    }
`

const Container = styled.div`
`

const StyledPic = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 150px;
    margin-bottom: 250px;
    img{
        border-radius: 10px;
        width: 350px;
        height: auto;
    }
    img:hover{
        width: 380px;
        height: auto;
        opacity: 0.8;
        transition: 0.5s;
    }
`
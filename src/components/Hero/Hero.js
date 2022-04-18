import React from 'react'
import './Hero.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Button } from '@mui/material';
import Zoom from 'react-reveal/Zoom';
import { flexbox, style } from '@mui/system';
import styled from '@emotion/styled';
import ai from '../../Images/ai.png'
import Typed from "react-typed"

function Hero() {

    return (
        <div>
            <Zoom>
                <Wrap>
                    <Container className='hero__trans'>

                        <h1>Hi, my name is</h1>
                        <Typed className='typed'
                            strings={[
                                "Vasu Singh"
                            ]}
                            // typeSpeed={200}
                            // backSpeed={200}
                            // loop
                        />
                        <h3>Nerd who is interesting in Tech World</h3>
                        <p>
                            Currently I'm getting started with
                            <a href='#'> OpenSource,</a>
                            and also loves the comptetive programming.
                            I have keen interest in Neural Networks also.
                        </p>

                        <Button variant="outlined">Get In Touch</Button>
                    </Container>
                    <AI>
                        <img src={ai} />
                    </AI>
                </Wrap>
            </Zoom>

        </div>
    )
}

export default Hero

const Wrap = styled.div`
    display: flex;
`

const Container = styled.div`
    h3{
    /* color: var(--slate); */
    background: -webkit-radial-gradient(var(--pink), white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }

    .typed{
        margin-top: 10px;
        font-size: 4.5rem;
        font-weight: bold;
        background: -webkit-radial-gradient(lightpink, lightblue);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const AI = styled.div`
    padding: 70px 70px;
    
    img{
        height: 400px;
        width: auto;
    }
`
import React from 'react'
import { Chip, Card, CardContent, Typography } from '@mui/material';
import styled from 'styled-components';
import FaceIcon from '@mui/icons-material/Face';

function Blogs(props) {
  return (
    <Wrap>
        <Card className='card' variant='outlined'>
            <CardContent>
                <BackPic  bg = {props.backgroundImg}></BackPic>
                <Typography className='title' color='primary'>
                    {props.title}
                </Typography>
                <p>
                    {props.description}
                </p>
                <Chip className='learn' icon={<FaceIcon />} label="Learn More" />
            </CardContent>
        </Card>
    </Wrap>
  )
}

export default Blogs

const Wrap = styled.div`
    .card{
        box-shadow: 0px 0px 9px 5px lightblue;
        width: 300px;
        height: 400px;
        :hover{
            transform: scale(1.2);
            transition: 0.5s;
            box-shadow: 10px 10px 20px var(--pink);
        }
    }

    .title{
        font-size: 20px;
    }

    p{
        margin-top: 10px;
        font-size: 13px;
        color: black;
    }

    .learn{
        margin-left: 150px;
        margin-top: 5px;
        cursor: pointer;
        :hover{
            background-color: var(--pink);
        }
    }
`

const BackPic = styled.div`
    height: 180px;
    width: 100%;
    background-image: ${props => `url("/assets/${props.bg}")`};
    background-size: cover;
    background-repeat: no-repeat;
`
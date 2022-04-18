import React from 'react'
import styled from '@emotion/styled';
import GitHub from '@mui/icons-material/GitHub';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Zoom from 'react-reveal/Zoom';


function Social() {
  return (
    // <Zoom>
      <SocialList>

        <Container>

          <GitHub className='github' onClick={() => window.open('https://github.com/vasucp1207')}></GitHub>
          <Twitter className='github'></Twitter>
          <LinkedIn className='github'></LinkedIn>
          <Instagram className='github'></Instagram>
          <PlayArrow className='github'></PlayArrow>

        </Container>

      </SocialList>
    // </Zoom>
  )
}

export default Social

const SocialList = styled.div`
    height: 100vh;
    position: fixed;
`

const Container = styled.div`
    color: var(--pink);
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 40px;
    justify-content: flex-end;
    cursor: pointer;
    margin-top: 300px;
    @media (max-width: calc(1100px)){
      display: none;
    }

    .github:hover{
        transform: translateY(-8px);
        transition: 0.5s;
        color: white;
    }

    &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 11px;
    background-color: var(--pink);
  }
`
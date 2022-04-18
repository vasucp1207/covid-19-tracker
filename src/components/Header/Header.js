import React from 'react'
import './Header.css'
import HeaderImg from '../../Images/HeaderImg.png'
import styled from '@emotion/styled'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Zoom from 'react-reveal/Zoom';
import { Button, Avatar  } from '@mui/material';
import { blue, pink } from '@mui/material/colors';
import { CropOriginal } from '@mui/icons-material';

function Header() {

  const [navShow, setNavShow] = React.useState(false)

  return (
    <div className='header'>
      <Zoom>
        {/* <img src={HeaderImg} className='header__img' /> */}
        <Avatar sx={{ 
          width: 50, height: 50, marginLeft: 4, bgcolor: blue[200], cursor: 'pointer'
        }}>V</Avatar>
        <HeaderInfo>
          <a href="#">Home</a>
          <a href="#">Experiences</a>
          <a href="#">Blogs</a>
          <Button variant="outlined">Sign-In</Button>
        </HeaderInfo>
      </Zoom>


      <CustomMenu onClick={() => setNavShow(prev => !prev)} />

      <Navbar show={navShow}>
        <CustomClose onClick={() => setNavShow(prev => !prev)}></CustomClose>
        <span><a href='#'></a>Home</span>
        <span><a href='#'></a>Experiences</span>
        <span><a href='#'></a>SignIn</span>
        <span><a href='#'></a>Blogs</span>
        <span><a href='#'></a>Github</span>
        <span><a href='#'></a>Twitter</span>
        <span><a href='#'></a>Linkedin</span>
      </Navbar>
    </div>
  )
}

export default Header

const HeaderInfo = styled.div`
  @media (max-width: 750px){
    display: none;
  }
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  a{
    padding: 10px;
  }

  a:hover{
    box-shadow: 0 0 2px 2px rgb(117, 182, 161);
    border-radius: 5px;
  }

  Button{
    margin-top: 120px;
    height: 40px;
    border-radius: 5px;
  }
`

const CustomMenu = styled(MenuIcon)`
  @media (min-width:750px){
    display: none;
  }
  color: white;
  margin-right: 15px;
  cursor: pointer;
  :hover{
    box-shadow: 0 0 5px 5px rgb(117, 182, 161);
    border-radius: 2px;
  }
`

const Navbar = styled.div`

  color: white;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 250px;
  line-height: 40px;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: 0.5s;
  z-index: 1;
  background: var(--dark-navy);
  @media (min-width:750px){
    display: none;
  }
  display: flex;
  flex-direction: column;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: 0 0 7px 0 var(--pink);
  span{
    padding-left: 10px;
  }
  span:hover{
    color: black;
    background-color: var(--pink);
    transform: translateY(-3px);
    transition: 0.5s;
  }
  cursor: pointer;
`

const CustomClose = styled(CloseIcon)`
  @media (min-width:750px){
    display: none;
  }
  z-index: 1;
  padding: 5px;
  margin-left: auto;
`
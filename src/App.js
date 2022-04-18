import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About';
import Social from './components/Social';
import SignIn from './components/SignIn';
import "@fontsource/inter";
import Experiences from './components/Experiences';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import Blogs from './components/Blogs';
import { style } from '@mui/system';

function App() {
  return (

    <div className='entire'>
      {/* <Router> */}
      <Header />
      {/* <Routes> */}
      {/* <Route path='/'> */}
      <Wrap className="app">
        <Wrapp className='left'>
          <Social />
        </Wrapp>
        <Wrappp className='right'>
          <Hero />
          <About />
          
          <BlogSec className='blogs'>Blogs</BlogSec>
          <Bg>
            <Blogs
              title='Web Development'
              backgroundImg='webDev.jpg'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia asperiores dicta qui quaerat amet culpa placeat, accusamus consequatur nesciunt repudiandae error consectetur earum. Eos ipsa consequatur quam porro culpa.'
            />
            <Blogs
              title='Machine Learning'
              backgroundImg='ML.jpg'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia asperiores dicta qui quaerat amet culpa placeat, accusamus consequatur nesciunt repudiandae error consectetur earum. Eos ipsa consequatur quam porro culpa.'
            />
            <Blogs
              title='Comptetive Programming'
              backgroundImg='CP.jpg'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia asperiores dicta qui quaerat amet culpa placeat, accusamus consequatur nesciunt repudiandae error consectetur earum. Eos ipsa consequatur quam porro culpa.'
            />

          </Bg>
          <Experiences />
        </Wrappp>
      </Wrap>
      {/* </Route> */}
      {/* <Route path='/signin'> */}
      <SignIn />
      {/* </Route> */}
      {/* </Routes> */}
      {/* </Router> */}
    </div>

  );
}

export default App;

const Wrap = styled.div`
  display: flex;
`
const Wrapp = styled.div`
  margin-left: 25px;
  flex: 0.1;
  height: 100vh;
`
const Wrappp = styled.div`
  margin-left: 25px;
  flex: 0.9;
`

const Bg = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 120px
`

const BlogSec = styled.div`
  font-size: 50px;
  color: white;
  margin-top: 300px;
  margin-bottom: 50px;
`
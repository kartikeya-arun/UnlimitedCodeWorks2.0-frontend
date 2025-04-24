import './App.css';
import Header from './Components/Header';
import { ABOUT, BLOG_MENU, LINKS, MAIN_MENU } from './constants/text.constants';
import { useEffect, useState } from 'react';
import Menu from './Components/Menu';
import cog from './Assets/birthday-road-signs-19.svg'
import Post from './Components/Post';

function App() {
  const [menuItems,setMenuItems]=useState([...MAIN_MENU])
  const [postVisible,setPostVisible]=useState(false)
  const [post,setPost]=useState({})
  const [terminal,setTerminal]=useState(false)

  const closePost=()=>{
    if(postVisible){
      setPostVisible(false)
      setPost({})
    }
  }

  const showPost = ()=>{
    setPostVisible(true)
  }
  
  useEffect(()=>{
    if (!terminal){
      window.location.replace('https://unlimited-code-works-2-0-aceternity.vercel.app/')
    }
  },[terminal])
  if (terminal){
    return (
      <div className='container'>
        <Header />
        <div className='cog-container'><img src={cog} alt='cog' className='cog rotation' /></div>
        {postVisible && <Post heading={post?.heading} subHeading={post?.subHeading} content={post?.content} />}
        <Menu items={menuItems} setMenuItems={setMenuItems} showPost={showPost} closePost={closePost} setPost={setPost} setTerminal={setTerminal} />
      </div>
    );
  }else{
    return(
      <></>
    )
  }
}

export default App;
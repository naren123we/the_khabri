import React from 'react';
import bar from '../images/menubar.jpg';
import close from '../images/close-icon.png'
import { useState,useEffect} from 'react';
import { NavLink} from 'react-router-dom';


import Categorry from './Category';
import Search from './Search';
const Navbar = ({date,setcatogory}) => {
  const [temp,settemp]=useState(null)
  
     
    const [show,setshow]=useState(true)
   
    
  
     useEffect(()=>{
    
      const fetchwether=(city)=>{
        
          fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=4f533ec966b2d3140f55cc1b0eebf869")
          .then((response)=>response.json()).then((value)=>{
              const tempreture=value.main.temp;
              settemp(tempreture)             
              }).catch((err)=>{
                            console.log(err) 
              })
         } 
            fetchwether('delhi');
     },[temp])
     
        
     function set1 (){
      setshow(!show)
     }
  
     
    
  return (
    < div className='m-0 bg-black background w-[100%] sm:h-[60vh] h-[40vh] sm:pt-7 pt-3 flex  flex-col shadow-lg'>
    <div className="flex   w-[100%] justify-between items-center relative lg:px-2">
        
      <h1 className='text-white sm:ml-3 ml-4 lg:p-5 p-3 font-serif  font-bold text-[1.75rem] lg:text-4xl '>the khabri</h1>
     
    
       <ul className='sm:flex hidden space-x-16 items-center justfy-between mr-24'>
        <Search  setcatogory={setcatogory}/>
        <li onClick={()=>{
            setcatogory('latest india news')
        }} className='text-white font-semibold active:font-bold hover:text-slate-200 cursor-pointer text-xl'><NavLink to='/'>Home</NavLink></li>
        <li  className='text-white font-semibold active:font-bold hover:text-slate-200 cursor-pointer text-xl'><NavLink to='/about'>About us</NavLink></li>
       </ul>
    <div className='sm:hidden  mr-4 hover:scale-105 ' onClick={set1} >
    {show ?<img className="w-[55px] h-[48px] " src={bar} alt='img'></img> :
      <img className="w-[55px] h-[48px]" src={close} alt="img" />
    }

    </div>
    <div className={`bg-slate-200 ${show && "hidden"}  absolute right-3 top-20 p-4 rounded-xl`}>
    <ul className={`flex-col space-y-2  text-black`}>
        <li onClick={()=>{
           setcatogory('latest india news')
        }} className=' font-semibold active:font-bold cursor-pointer text-xl '><NavLink to='/'>Home</NavLink></li>
        <li  className=' font-semibold active:font-bold cursor-pointer text-xl'><NavLink to='/about'>About us</NavLink></li>
         <li><Search  setcatogory={setcatogory}/></li>
       </ul>
    </div>
   </div>
   <div className='sm:flex-row flex flex-col sm:ml-[14px] ml-4  px-5 sm:items-center'>
   <p className='text-white font-medium text-sm lg:text-base mr-1'>{`${date}`}</p>
   <div className='flex items-center text-sm lg:text-base '>
   <p className='text-white font-medium '>{` New Delhi ${temp} °C`}</p>   
   </div>
   </div>
   
   <Categorry setcatogory={setcatogory} />
   
   </div>
  )
}

export default Navbar
import { useState,useEffect } from 'react'
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr"
import spinner from '../images/Fading line.gif'
import Article from '../components/Article'
import { NavLink } from 'react-router-dom';
const Home = ({date2,top,totalpage,load,set,catogory,error}) => {
   
    const [pageno,setpage]=useState(1)
    const [postperpage]=useState(12)
  useEffect(()=>{
      if(pageno!==1){ setpage(1)
      }
    },[load])
 
     
    const lastindex =pageno*postperpage
    const firstindex=lastindex-postperpage
    const articles=top.slice(firstindex,lastindex)
    function next(){
         totalpage>pageno && setpage(pageno+1)
        }
    function previous() {
         pageno>1&&setpage(pageno-1)
       }
     
   
  return (
    <div className='flex flex-col p-5  ' id='top'>
   {articles.length>0&&<span className=' font-serif font-bold sm:text-4xl text-3xl px-3 sm:px-5 pb-3 mb-2 '>  Top {catogory!=="latest india news"?"Results":"Stories"}</span>}
       <hr></hr>

   {error?<h1 className='text-2xl font-semibold text-black mx-auto my-14'>{error}</h1>:(load ?(<img className='h-[100px] w-[100px] mx-auto my-5'alt='spinner' src={spinner}></img>) :(articles.length>0?<div>
    <div className='flex xl:justify-around justify-center flex-row flex-wrap pt-3 px-3 sm:pt-5 sm:px-5'>
        {articles.map((l,i)=>{
          return(
           <NavLink to={`/${i} coarticle`} key={i} > <Article source={l} set={set} /></NavLink>
          )
        })
        }
       </div>
       </div>:<h1 className='md:text-2xl text-xl font-semibold text-black mx-auto my-14'>sorry we didn't find anything</h1>)

      
    )
}
{articles.length>0&& <div className='flex justify-center space-x-10'>
        < GrFormPrevious className='scale-150 active:scale-125 cursor-pointer' onClick={previous}  />
   <p>{pageno} out of {totalpage===0?1:totalpage}</p>
         <GrFormNext  className='scale-150 active:scale-125 cursor-pointer' onClick={next}/>
         </div>
}
    </div>
  )
}

export default Home

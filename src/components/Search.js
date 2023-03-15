import { useState } from 'react'
import { FaSearch } from "react-icons/fa"
import { useLocation} from 'react-router-dom';
const Search = ({setcatogory}) => {
    const[showsearch,setshowsearh]=useState(false)
    const[showsearch1,setshowsearh1]=useState(false)  
    const [search,setsearh] =useState('')
    const location=useLocation() 
    function set2(){
        if(search===''){
         if(showsearch===false){
         setTimeout(()=>{
            setshowsearh(!showsearch)
         },100)
          setshowsearh1(!showsearch1)
      }
      else{
         setTimeout(()=>{
    setshowsearh1(!showsearch1)
            },500)
             setshowsearh(!showsearch)
      }
        }
          }
          function searching (){
            if(showsearch===true && search!==''){
               setcatogory(search)
              
               setTimeout(()=>{
                setsearh('')
               },800)
               setTimeout(()=>{
                  setTimeout(()=>{
                     setshowsearh1(!showsearch1)
                             },700)
                              setshowsearh(!showsearch)
               },2000)
             
              }
           }
           function enter (e){
            if(e.key==="Enter"){
               searching()
            }
          }
  return (
    <> {location.pathname==='/'&&<div className='flex flex-row items-center space-x-2'>
   <span  className={`${showsearch?'animation1':''} ${showsearch1?'':'hidden'} animation  `}><input id='inp' type='text' onKeyUp={enter} onChange={(e)=>{
       setsearh(e.target.value) }} placeholder='Type here to Search news' value={search} className='py-1 px-4 font-medium w-[180px] md:w-[280px] rounded-3xl'/> </span>
 <span onClick={searching}> < FaSearch color='white ' size='25px' cursor='pointer'onClick={set2}/></span>
       </div>}
</>   
  )
    }
export default Search
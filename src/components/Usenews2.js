
import { useEffect,useState } from 'react'
const Usenews2 = (catogory) => {
   
    const [top1,settop1] =useState([])
    const [load,setload]=useState(true)
    const [totalpage,settotalpage]=useState(null)
    const [error,seterror]=useState(null)
    const date1 =new Date().toDateString() 
  
  const date =new Date()
  
  date.setDate(date.getDate() - 1)
 const date2=date.toISOString().slice(0,10)
  
    useEffect(()=>{
     async function getdata2(date2,catogory){
        
      try{
       
        const res=await fetch('https://newsapi.org/v2/everything?q='+catogory+'&from='+date2+'&sortBy=publishedAt&apiKey=2c9d48c0df0e404cb9cfbb16a5f25d05')
    
        const data=await res.json();
        settop1(data.articles)       
      settotalpage(Math.floor(data.articles.length/12))  
      setload(false)
     
      }   catch(err){
       
        console.log(err.message)
        seterror(err.message)
        setload(false)
     
     }
   
   
     
     }
     
       getdata2(date2,catogory)
       setload(true)
     },[catogory,date2])

  return {top1,date1,date2,load,totalpage,error}
}

export default Usenews2
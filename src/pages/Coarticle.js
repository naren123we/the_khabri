import { useParams } from 'react-router-dom'
import spinner from '../images/Fading line.gif'
import news from '../images/news.jpg'

const Coarticle = ({articles}) => {
    const {id}=useParams()
    
     
  return (
     <div className='py-5 px-2' >
      <hr></hr>
      { articles.length===0 ? <img src={spinner} className="h-[100px] w-[100px] mx-auto " alt='img'/>:
      
      <div className='flex flex-col font ' >
      <span className='mx-auto px-2 lg:px-6 my-2 sm:my-4 font-bold md:text-2xl text-xl inline-block'>{articles[id].title}</span>
      <img className='sm:w-[500px] lg:w-[700px] lg:h-[430px] sm:h-[400] w-[359px] h-[201px]  mx-auto ' src={articles[id].urlToImage?articles[id].urlToImage:news} alt='img'></img>
      <div className='mt-3 sm:mx-10 lg:mx-16 px-1  '>
      <p className={`font-medium text-md sm:text-lg ${articles[id].description!==null &&'my-2  '}`}>{articles[id].description}</p>
      <p className={`font-medium text-md sm:text-lg ${articles[id].content!==null &&'my-2  '}`}>{articles[id].content}</p>
      <p className={`font-medium text-md sm:text-lg ${articles[id].author===null &&'hidden'}  my-2`}>Author : {articles[id].author}</p>
      <p className={`font-semibold text-md sm:text-lg inline-block   `}>For complete article  <a href={articles[id].url} target='blank'><span className=' active:scale-105 inline-block hover:text-gray-600'>Click here</span></a></p>
     </div>
    </div>}

        </div>
  )
}

export default Coarticle

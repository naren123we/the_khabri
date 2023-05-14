
import news from '../images/news.jpg'

const Article = ({source}) => {

 
   
  return (
   
   <div  className='flex flex-col xl:w-[310px] w-[300px] max-h-[368px] xl:mx-2 sm:mx-5 shadow-lg rounded-xl sm:hover:scale-105 sm:mb-10 mb-8 cursor-pointer'>
      {source.urlToImage? <img src={source.urlToImage} className=" h-[245px] rounded-xl" alt='img'/>:
      <img src={news} className=" h-[280px] rounded-xl" alt='img'/>
    }
       <p className='text-lg font font-semibold p-3'>{source.title}</p>
      </div>
      
  )
  }

export default Article
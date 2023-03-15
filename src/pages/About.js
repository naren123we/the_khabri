import { useState } from 'react'
import spinner from '../images/Fading line.gif'
const About = () => {

  const [load3,setload3]=useState(true)
  setTimeout(()=>{
     setload3(false)
  },1000)
  return (
    <div className='flex flex-col lg:p-5 p-3 mt-2 md:text-lg'>
         {load3 ? <img className='h-[100px] w-[100px] mx-auto my-5' alt='spinner' src={spinner}></img>:<>
         <p className='lg:mx-7'>Welcome to the_Khabri, where you can find the latest and most relevant news from around the world.
           We are dedicated to providing accurate and reliable information to our readers, while also offering a 
           diverse range of perspectives on the most important issues of the day.
Our team of experienced journalists and writers work tirelessly to bring you the most up-to-date news on a variety 
of topics, including politics, economy, entertainment, sports, and technology. We strive to provide in-depth analysis 
and insights that go beyond the headlines, allowing you to understand the stories that shape our world.</p>



<p className='mt-1 lg:mx-7'>Thank you for choosing our news website as your source for news and information. We look forward to
   serving you and providing you 
  with the latest and most reliable news from around the world.</p></>}
        </div>
  )
}

export default About
import {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//layout
import Rootlayout from './layout/Rootlayout'
//custom component
import Usenews2 from "./components/Usenews2";
//pages
import Home from './pages/Home'
import About from "./pages/About";
import Coarticle from './pages/Coarticle'

const App = () => {
  const [catogory,setcat]=useState('latest india news')
  const {top1,date1,date2,load,totalpage,error} =Usenews2(catogory)

  function setcatogory(value){
    setcat(value)
   }

  return (
    <BrowserRouter>
    <Routes>
   <Route path="/" element={<Rootlayout date={date1}  setcatogory={setcatogory}/>}>
   <Route path='/' element={<Home error={error} date2={date2} top={top1} totalpage={totalpage} load={load}  catogory={catogory} />} />
   <Route path="about" element={<About />} />
   <Route path=':id coarticle' element={<Coarticle articles={top1}/>} />
   </Route>
    </Routes>
    </BrowserRouter>
  )
};

export default App;

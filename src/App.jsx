

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './new/Home'
import About from './new/About'
import Contact from './new/Contact'
import Test from './component/Test'
import Use from './Use effect/Use'
// import Home from './page/home'
// import About from './page/about'
// import Contact from './page/contact'


function App() {

  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/use" element={<Use/>}/>

      
      </Routes>
    </BrowserRouter>
       
       
     
  )
}

export default App

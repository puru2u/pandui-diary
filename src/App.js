import { Route, Routes } from 'react-router-dom';
import './assests/css/style.min.css'


import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
function App() {
  return (
    <div className="App">
<Header />
 <Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/about' element={<About />}/>
  <Route path='/services' element={<Services />}/>
  <Route path='/portfolio' element={<Portfolio />}/>
  <Route path='/contact' element={<Contact />}/>
 </Routes>

<Footer />
    </div>
  );
}

export default App;

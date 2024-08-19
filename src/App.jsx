import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import JoinAsMentor from './components/JoinAsMentor';
import FindMentor from './components/FindMentor';
import Payment from './components/Payement';
import Conform from './components/Conform';
import BuildResume from './components/BuildResume';
import ZoomLink from './components/ZoomLink';
import MentorLogin from './components/MentorLogin';
import MentorDashBoard from './components/MentorDashBoard';
import UserDashBoard from './components/UserDashBoard';
import UserLogin from './components/UserLogin';
import JoinAsTraniee from './components/JoinAsTraniee';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route  path='/' element = {<Home />}/>
          <Route path='/mentor' element = {<JoinAsMentor />} />
          <Route path='/find' element = {<FindMentor />} />
          <Route path='/done' element = {<Payment />} />
          <Route path='/conform' element = {<Conform />} />
          <Route path='/resume' element = {<BuildResume />} />
          <Route path='/zoom' element = {<ZoomLink />} />
          <Route path='/login' element = {<MentorLogin />} />
          <Route path='/mdash' element = {<MentorDashBoard />} />
          <Route path='/Ulogin'element = {<UserLogin />} />
          <Route path='/udash' element = {<UserDashBoard />} /> 
          <Route path = "/tranie" element = {<JoinAsTraniee />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Components/CustomNavbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Features from './Components/Features';
import Pricing from './Components/Pricing';
import CustomLogin from './Components/CustomLogin';
import CustomProfile from './Components/CutomProfile';
import PrivateRoutes from './Components/PrivateRoutes';

function App() {
  return (
    <div className="main">
      <BrowserRouter>

        <CustomNavbar />

        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/features' element={<Features />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>
          <Route path='/login' element={<CustomLogin />}></Route>
          
          <Route element={<PrivateRoutes/>}>
          <Route path='/customprofile' element={<CustomProfile />}></Route>
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

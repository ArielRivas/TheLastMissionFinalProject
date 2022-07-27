import "./App.scss";
import NavBar from "./NavBar/NavBar";
import { Routes, Route, Outlet } from "react-router-dom";
import ControlRoom from "./ControlRoom/ControlRoom";
import TodoContainer from './ControlRoom/TodoContainer/TodoContainer';
import Navigation from "./ControlRoom/Navigation/Navigation";
import Status from "./ControlRoom/Status/Status";
import Launch from "./ControlRoom/Launch/Launch";
import RocketVideos from "./ControlRoom/Launch/RocketVideos/RocketVideos";
import Home from './Home/Home';
import Login from './Login/Login';
import Slider from './ChooseThePlanet/Slider'
import RocketVideoEvil from './ControlRoom/Launch/RocketVideos/RocketVideoEvil';
import VideoVisitPlanet from './ChooseThePlanet/VideoVisitPlanet';

const App = () => {
  return (
      <div className='App'>
        <NavBar />
        <Routes>
        <Route path='/home' element={<Home/>}/>
          <Route path='/controlroom/*' element={<ControlRoom/>}/>
          <Route path="*" element={<div>Ruta no encontrada</div>} />
          <Route path='/todocontainer' element={<TodoContainer/>} />
          <Route path='/navigation' element={<Navigation/>} />
          <Route path='/status' element={<Status/>} />
          <Route path='/launch' element={<Launch/>} />
          <Route path='/planets' element={<Slider/>} />
          <Route path='/rocketvideosA' element={<RocketVideos/>} />
          <Route path='/rocketvideosB' element={<RocketVideoEvil/>} />
          <Route path='/videovisitplanet' element={<VideoVisitPlanet/>} />
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} /> 
          <Route path="*" element={<div>Ruta no encontrada</div>} />
        </Routes>
        <Outlet/>
      </div>
  );
};

export default App;


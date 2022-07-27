import "./ControlRoom.scss";
import { Link } from "react-router-dom";
import Imgrocket from "../assets/controlRoom/ControlRoomRocket.png";

const ControlRoom = () => {
  return (
      <section className='container__ControlRoom-component'>
      
          <div className='container__ControlRoom-Decoration'>
            <button className="ControlRoomButtons">PP02<span><br></br>3.58</span><span><br></br>minimun</span></button>
            <button className="ControlRoomButtons">Cabin temp<br></br><span>2.41</span><br></br>°C</button>
            <button className="ControlRoomButtons">Cabin pressure<br></br><span>14.00<br></br>minum</span></button>
            <button className="ControlRoomButtons">CO2<br></br><span>0.07</span><br></br>good</button>
          </div>

          <div className='container__ControlRoom-Buttons'>
            <Link to='/todoContainer'>
            <button className='ControlRoom__Buttons-Button-a'>Go to<span><br></br>do list</span></button>
            </Link>
            <Link to='/navigation'>
              <button className='ControlRoom__Buttons-Button-b'>Go to<span><br></br>navigation</span></button>
            </Link>
            <div><Link to='/status'>
              <button className='ControlRoom__Buttons-Button-c'>Go to<span><br></br>status</span></button>
            </Link>
            <Link to='/launch'>
              <button className='ControlRoom__Buttons-Button-d'>Go to<span><br></br>launch</span></button>
            </Link></div>
            
          </div>
        <div  className='container__ControlRoom-Connections'>
          <div className='container__ControlRoom-Connections-a'>
            <h4>Connections</h4>
            <h3>Data-handling</h3>
            <h3>Antennas</h3>
            <h3>Thermal Systems</h3>
            <h3>Electrical Power</h3>
           
          </div>
         
          <div className='container__ControlRoom-Connections-b'>
            <p>Connected</p>
            <p>Connected</p>
            <p>Connected</p>
            <p>Connected</p>
          </div>

          <div className='container__ControlRoom-Connections-c'>
          <h4>Connections</h4>
            <h3>Attitude and Orbit Control</h3>
            <h3>Payload</h3>
            <h3>Fine Pointing Sun Sensor(FPSS)</h3>
            <h3>Integrated Spacecraft Controller (ISC)</h3>
          </div>

          <div className='container__ControlRoom-Connections-d'>
            <p>Connected</p>
            <p>Connected</p>
            <p>Connected</p>
            <p>Desactivated</p>
          </div>

          </div>
          
       
        <span className='container__ControlRoom-RocketImg'>
        <img src={Imgrocket} alt='rocketImage'></img></span>
        <div className='container__ControlRoom-TextHeadline'>
            <h3>Vehicle overview</h3>
          </div>
      </section>
  );
};

export default ControlRoom;

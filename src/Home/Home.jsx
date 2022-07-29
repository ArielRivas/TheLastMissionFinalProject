import React from 'react'
import './Home.scss';
import { Link } from 'react-router-dom';
import homeCeres from '../assets/home/homeCeres.png'
import homeKeple from '../assets/home/homeKeple.png'
import homePegasus from '../assets/home/homePegasus.png'
import homerMarsSlider1 from '../assets/home/homerMarsSlider1.png'
import video from '../assets/home/videoHome2-1.mp4'
import Carousel from '../Carousel/Carousel';
import { SliderData } from '../Carousel/SliderData';

const Home = () => {

    return (
        <>
            <div className='heroVideo'>
                <h1 className='homeTittle'>When destiny calls you...</h1>
                <video className='videoTag' autoPlay loop muted>
                    <source src={video} type='video/mp4' />
                </video>
            </div>

            <div className='line'>
                <hr></hr>
                <div className='circle'></div>
                <hr></hr>
            </div>

            <div className='slideOne'>
                <div className='slideOneTittle'>
                    <h2>
                    Carefully control of other <span>worlds</span>
                    </h2>
                    <p>The Last Mission is the practice of protecting solar system bodies from contamination by Earth life and protecting Earth from possible life forms that may be returned from other solar system bodies.</p>
                </div>

                <div className='planetsSlideOne'>
                    <div className='planetInfo'>
                        <img src={homeCeres} alt='Ceres' />
                        <h3>CERES</h3>
                        <p>Called an asteroid for many years, Ceres is so much bigger and so different from its rocky neighbors</p>
                    </div>

                    <div className='planetInfo'>
                        <img src={homeKeple} alt='Kepler' />
                        <h3>KEPLER 8</h3>
                        <p>It orbits its host star every 3.5 days. The planet also demonstrates the Rossiter–McLaughlin effect, where the planet's orbit affects the redshifting of the spectrum of the host star.</p>
                    </div>

                    <div className='planetInfo'>
                        <img src={homePegasus} alt='Pegasus' />
                        <h3>PEGASUS</h3>
                        <p>It is rotating rapidly, with a projected rotational velocity of 130 km/s giving a lower bound on the azimuthal velocity along the star's equator</p>
                    </div>
                </div>
            </div>

            <div className='line'>
                <hr></hr>
                <div className='circle'></div>
                <hr></hr>
            </div>

            <Carousel slides={SliderData} />

            <div className='line'>
                <hr></hr>
                <div className='circle'></div>
                <hr></hr>
            </div>

            <div className='slideTwo'>
                <div className='slideInfo'>
                    <h4>OUR HISTORY</h4>
                    <h2>The history and development of <span><br></br>The Last Mission</span></h2>
                    <p>Concerns regarding lunar and planetary contamination are raised at the International Astronautical Federation 7th Congress in Rome.
	                A report issued by a subcommittee of the International Council of Scientific Unions describes the first code-of-conduct for Planetary Protection and recommended that the newly formed Committee on Space Research (COSPAR) should resume responsibility for matters of Planetary Protection (October 1958).
	                United Nations Committee on the Peaceful Uses of Outer Space is formed (December 1958).<br></br><br></br>
	                The first flight project using the new Planetary Protection recommendations was the Ranger project.
	                The Viking Lander Capsule 1 and 2 are subjected to terminal sterilization using Dry Heat Microbial Reduction.Space Studies Board publishes Recommendations on Quarantine Policy for Mars, Jupiter, Saturn, Uranus, Neptune and Titan.
                    </p>

                </div>

                <img className='planetImageSlider' src={homerMarsSlider1} alt=''></img>

            </div>

            <div className='line'>
                <hr></hr>
                <div className='circle'></div>
                <hr></hr>
            </div>

            <div className='slideThree'>
                <div className='slideFinal'>
                    <h2>The Last <span>Mission</span></h2>
                    <p>Promotes the responsible exploration of the solar system by developing efforts that protect the science, explored environments and Earth.
                    </p>
                    <Link to="/controlroom"><button className='slideButton'>Go inside!</button></Link>
                </div>

            </div>

            <div className='footer'>
                <h4>CREATED BY</h4>

                <div className='names'>
                    <p>Ariel Rivas</p>
                    <p>Karem Quevedo</p>
                    <p>Luis Calderón</p>
                    <p>Paola Vargas</p>
                </div>
            </div>

        </>
    )
}

export default Home
import React from 'react'
import './Home.scss';
import { Link } from 'react-router-dom';
import homeCeres from '../assets/home/homeCeres.png'
import homeKeple from '../assets/home/homeKeple.png'
import homePegasus from '../assets/home/homePegasus.png'
import homerMarsSlider1 from '../assets/home/homerMarsSlider1.png'
import video from '../assets/home/video.mp4'
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
                        Lorem ipsum is simply a text of the <span>printing</span>
                    </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and </p>
                </div>

                <div className='planetsSlideOne'>
                    <div className='planetInfo'>
                        <img src={homeCeres} alt='Ceres' />
                        <h3>CERES</h3>
                        <p>Lorem ipsum is simply dummy text of printing and typesetting industry</p>
                    </div>

                    <div className='planetInfo'>
                        <img src={homeKeple} alt='Kepler' />
                        <h3>KEPLER 8</h3>
                        <p>Lorem ipsum is simply dummy text of printing and typesetting industry</p>
                    </div>

                    <div className='planetInfo'>
                        <img src={homePegasus} alt='Pegasus' />
                        <h3>PEGASUS</h3>
                        <p>Lorem ipsum is simply dummy text of printing and typesetting industry</p>
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
                    <h4>YOUR MISSION</h4>
                    <h2>Lorem ipsum is simply text of the history of the <span>printing</span></h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
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
                    <h2>When destiny calls you must be <span>strong</span></h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                    </p>
                    <Link to="/controlroom"><button className='slideButton'>Lorem Ipsum</button></Link>
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
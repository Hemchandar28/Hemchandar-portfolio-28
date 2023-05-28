import {React} from 'react';
import image from '../../assest/light-blue-project-management-concept_23-2147782704 (1).jpg';
import './project.css';

function Project() {  
    return (
      <>
      <section>
        <div className='project-container'>
          <h1>MY WORK</h1>
          <div className='project-card1'>

            <div className='box'>
              <div className='image'>
              <img src={image} alt='img1' /></div>
              <div className='content'>
                <h2>Project1</h2>
                <p>work in progress</p>
              </div>
            </div>

            <div className='box'>
            <div className='image'>
            <img src={image} alt='img2' /></div>
              <div className='content'>
                <h2>Project2</h2>
                <p>work in progress</p>
              </div>
            </div>

            <div className='box'>
            <div className='image'>
            <img src={image} alt='img3' /></div>
              <div className='content'>
                <h2>Project3</h2>
                <p>work in progress</p>
              </div>
            </div>
            </div>

            <div className='project-card2'>
            <div className='box'>
            <div className='image'>
            <img src={image} alt='img4' /></div>
              <div className='content'>
                <h2>Project4</h2>
                <p>work in progress</p>
              </div>
            </div>

            <div className='box'>
            <div className='image'>
            <img src={image} alt='img5' /></div>
              <div className='content'>
                <h2>Project5</h2>
                <p>work in progress</p>
              </div>
            </div>

            <div className='box'>
            <div className='image'>
            <img src={image} alt='img6' /></div>
              <div className='content'>
                <h2>Project6</h2>
                <p>work in progress</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      </>
    )
  }
  
  export default Project;
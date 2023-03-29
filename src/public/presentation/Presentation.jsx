import React from 'react'
import './Presentation.css'
import profile_image from '../images/perfilNombre.png'
import { Icon } from '@iconify/react'
import cv from '../CV - Marce Melgar.pdf'

const Presentation = () => {
    return (
        <main className='main-m'>

            <div className="profile-image">
                <div className='img-profile'>    
                    <img src={profile_image} alt="Marce Melgar" />
                </div>
            </div>
            <div className='habilities_1'>   
                <h1>FrontEnd dev junior</h1>
            </div>
            <div className="habilities_1">
                <div>
                    <div className='mb'>
                        <h2>No soy lo que estás buscando, </h2>
                        <h3>si querés a alguien que:</h3>
                        <br/>
                    </div>
                    <div>    
                        <ul>
                            <li>❌ no quiera trabajar,</li>
                            <li>❌ escape de los desafíos, o</li>
                            <li>❌ no sepa trabajar en equipo.</li>
                        </ul>
                    </div>
                </div> 
                <div>
                    <a className='download' download href={cv}>
                            Download CV
                    </a>
                    <Icon className='icon_down' icon="clarity:angle-double-line" color="#545454" vFlip={true} />
                </div>
                

            </div>
        </main>
    )
}

export default Presentation

window.addEventListener('load', ()=> {
    setTimeout(()=> {
        document.querySelector('.profile-image')
        .style.cssText = `
            opacity: 1;
            transform: none;
        `
    }, 800)  
})
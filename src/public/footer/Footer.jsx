import './Footer.css'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='footer-m'>
        <div className="footer-title">
          <h2> Contacto </h2>
        </div>
        <div className="left">
            <a href="https://github.com/MarceMelgar?tab=repositories" target="_blank" rel="noreferrer"><BsGithub /><span> Github </span></a>
            <a href="https://www.linkedin.com/in/marcemelgar/" target='_blank' rel="noreferrer"> <BsLinkedin /> Linkedin </a>
        </div>
    </footer>
  )
}

export default Footer


/*  className="link" */
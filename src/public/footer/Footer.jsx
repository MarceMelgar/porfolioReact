import './Footer.css'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='footer-m'>
        <div className="footer title">
          <h2> Contacto </h2>
        </div>
        <div className="left">
            <a target="_blank" href="https://github.com/MarceMelgar?tab=repositories" className="link"><BsGithub /><span> Github </span></a>
            <a href="https://www.linkedin.com/in/marcemelgar/" target='_BLANK'> <BsLinkedin /> Linkedin </a>
        </div>
    </footer>
  )
}

export default Footer
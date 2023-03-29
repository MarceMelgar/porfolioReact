import html5 from '../images/html5.png'
import css3 from '../images/css3.png'
import js from '../images/js.png'
import react_logo from '../images/react.png'
import vite from '../images/vite.png'
import node_js from '../images/node.png'
import sass from '../images/sass.png'
import bootstrap from '../images/bootstrap.png'
import figma from '../images/figma.png'
import firebase from '../images/firebase.png'
import vercel from '../images/vercel.png'
import './Technologies.css'

const object_fit = {
  objectFit: 'cover',
}

const scale = {
  objectFit: 'fill',
}


const Technologies = () => {
  return (
    <div className='main-technologies-m'>
        <div className="title_technologies">
          <h1> Tecnologías </h1>
        </div>
        <div className="languages">

          <a href='https://es.wikipedia.org/wiki/HTML5' target="_BLANK">
            <img src={html5} alt="HTML 5" />
            <span> HTML 5 </span>
          </a>

          <a href='https://es.wikipedia.org/wiki/CSS' target="_BLANK">
            <img src={css3} alt="CSS" />
            <span> CSS </span>
          </a>

          <a href='https://getbootstrap.com/' target="_BLANK">
            <img style={object_fit} src={bootstrap} alt="Bootstrap" />
            <span> Bootstrap </span>
          </a>

          <a href='https://sass-lang.com/' target="_BLANK">
            <img style={object_fit} src={sass} alt="Sass" />
            <span> Sass </span>
          </a>

          <a href='https://developer.mozilla.org/es/docs/Web/JavaScript' target="_BLANK">
            <img src={js} alt="javascript-logo" />
            <span> JavaScript </span>
          </a>

          {/* <a href='https://es.wikipedia.org/wiki/TypeScript' target="_BLANK">
            <img src={ts} alt="TypeScript" />
            <span> TypeScript </span>
          </a> */}

          <a href='https://es.reactjs.org/' target="_BLANK">
            <img style={object_fit} src={react_logo} alt="react.js-logo" />
            <span> React JS </span>
          </a>

          <a href='https://vitejs.dev/' target="_BLANK">
            <img style={object_fit} src={vite} alt="vite-logo" />
            <span> Vite </span>
          </a>

          <a href='https://nodejs.org/es/' target="_BLANK">
            <img style={object_fit} src={node_js} alt="Node JS" />
            <span> Node JS </span>
          </a>
          <a href='https://www.firebase.com' target="_BLANK">
            <img style={object_fit} src={firebase} alt="Firebase-logo" />
            <span> Firebase </span>
          </a>
          <a href='https://www.vercel.com' target="_BLANK">
            <img style={object_fit} src={vercel} alt="vercel-logo" />
            <span> Vercel </span>
          </a>
          <a href='https://www.figma.com/' target="_BLANK">
            <img style={object_fit} src={figma} alt="Figma" />
            <span> Figma </span>
          </a>
        </div>
    </div>
  )
}

export default Technologies
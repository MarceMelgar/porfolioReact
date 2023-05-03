import './App.css'
import Presentation from './public/presentation/Presentation'
import About_me from './public/about_me/About_me'
import Technologies from './public/technologies/Technologies'
import Footer from './public/footer/Footer'
import Proyects from './public/proyects/Proyects'

function App() {
  return (
    <div className="App">
      <Presentation />
      <About_me />
      <Technologies />
      <Proyects />
      <Footer />
      {/* <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> */}
    </div>
  )
}

export default App
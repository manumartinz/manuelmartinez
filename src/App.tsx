import '../src/styles/App.css';
import Contacto from './sections/Contacto';
import Experiencia from './sections/Experiencia';
import Hero from './sections/Hero';
import HorizontalScroll from "./sections/HorizontalScroll";
import MobileHorizontal from './sections/MobileHorizontal';
import Tecnologias from "./sections/Tecnologias";
function App() {
  return (
    <>
      <div className='p-3'>
        <Hero />
      </div>
      <Tecnologias />
      <div className='hidden lg:block'>
        <HorizontalScroll />
      </div>
      <div className='block lg:hidden'>
        <MobileHorizontal />
      </div>
      <Experiencia />
      <Contacto />
    </>
  );
}

export default App; 
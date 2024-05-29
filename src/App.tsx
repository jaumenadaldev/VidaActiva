import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '30px',
  marginTop: '50px',
};

const textColor = { color: '#7a977a' };
const titleColor = { color: '#e6cbe0' };

function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12" style={ImageContainer}>
            <img src="/src/assets/FOTO1.jpeg" alt="Foto1" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </div>
          <div className="col-12" style={textColor}>
            <p>Nuestro proyecto se basa en conceptos de psicología y pedagogía, enfatizando en la importancia de la prevención del deterioro cognitivo y físico de nuestros mayores. Trabajamos en las investigaciones y estadísticas que muestran la prevalencia de problemas de deterioro físico y cognitivo en la sociedad, en la detección de problemas de fragilidad en nuestros mayores y como un envejecimiento activo es la mejor manera de afrontar la etapa final de la vida.</p>
            <p>Se desarrollará en cuatro líneas de trabajo principales: evaluación, educación, tratamiento y divulgación. Cada una de ellas tendrá un enfoque diferente, pero trabajarán juntas para brindar una atención completa y multidisciplinar.</p>
            <p>Enfocado para personas mayores con dependencia para las necesidades básicas que requieran de mayor atención por parte del equipo profesional del centro, y debilidad muscular, alteración de la movilidad y equilibrio.</p>
          </div>
          <div className="col-12 my-4">
            <h2 className="text-center" style={titleColor}>OBJETIVOS</h2>
            <br />
            <div style={textColor}>
              <p>Nuestro principal objetivo es organizar los cuidados que se presentan en residencias dirigidos a la garantía de la seguridad, dando una mayor calidad de vida tanto de las personas mayores como sus familiares centrándose en la mejora de la independencia funcional y autodeterminación, así como el bienestar físico y mental.</p>
              <p>Para ello vamos a tener en cuenta las ocho dimensiones de las cuales está compuesta la calidad de vida según Schalock y Verdugo:</p>
              <div className="d-flex">
                <ul className="list-unstyled text-left mx-3">
                  <li>- Bienestar emocional</li>
                  <li>- Relaciones interpersonales</li>
                  <li>- Desarrollo personal</li>
                </ul>
                <ul className="list-unstyled text-left mx-3">
                  <li>- Inclusión social</li>
                  <li>- Bienestar físico</li>
                  <li>- Autodeterminación</li>
                </ul>
              </div>
              <p>Ofrecemos evaluaciones personalizadas para detectar posibles problemas de deterioro tanto cognitivo como físico. Con actividades como gimnasia, manualidades, actividades de estimulación cognitiva, talleres varios, etc.</p>
            </div>
          </div>
          <br />
          <div className="col-12 text-center">
            <div className="row">
              <div className="col-md-3 mb-4">
                <img src="/src/assets/FOTO2.jpeg" alt="Foto2" className="img-fluid" />
              </div>
              <div className="col-md-3 mb-4">
                <img src="/src/assets/FOTO3.jpeg" alt="Foto3" className="img-fluid" />
              </div>
              <div className="col-md-3 mb-4">
                <img src="/src/assets/FOTO4.jpeg" alt="Foto4" className="img-fluid" />
              </div>
              <div className="col-md-3 mb-4">
                <img src="/src/assets/FOTO5.jpeg" alt="Foto5" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-12 my-4">
            <h2 className="text-center" style={titleColor}>PROTOCOLO</h2>
            <br />
            <div style={textColor}>
              <p>En el protocolo de actuación de cuidados vamos a tener en cuenta, la prevención de caídas, de UPP y lesiones, gestión de la agitación psicomotriz, valoración nutricional, cuidados básicos de calidad en higiene, alimentación, etc. , colaborar en la recuperación de la capacidad funcional previa, facilitar la comunicación paciente/familiar, y promover actividades para la mejora de la movilidad/memoria/cognición.</p>
              <br />
              <div className="row">
                <div className="col-md-4 mb-4">
                  <img src="/src/assets/FOTO6.jpeg" alt="Foto6" className="img-fluid" />
                </div>
                <div className="col-md-4 mb-4">
                  <img src="/src/assets/FOTO7.jpeg" alt="Foto7" className="img-fluid" />
                </div>
                <div className="col-md-4 mb-4">
                  <img src="/src/assets/FOTO8.jpeg" alt="Foto8" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const footerStyle = {
  backgroundColor: 'white',
  color: '#7a977a',
  padding: '40px 0',
  fontSize: '14px',
};

const sectionTitleStyle = {
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#e6cbe0',
};

const linkStyle = {
  color: '#7a977a',
  textDecoration: 'none',
};

const linkHoverStyle = {
  color: '#e6cbe0',
};

const iconHoverStyle = {
  color: '#e6cbe0',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 style={sectionTitleStyle}>ACERCA DE VIDA ACTIVA...</h5>
            <p>Somos una entidad sin ánimo de lucro que atiende a personas en riesgo de exclusión social desde el inicio al final de su recorrido vital, en el momento en que lo necesiten. Trabajamos para que las personas ejerzan sus derechos y puedan elegir cómo quieren vivir.</p>
          </div>
          <div className="col-md-3">
            <h5 style={sectionTitleStyle}>ENLACES</h5>
            <ul className="list-unstyled">
              <li><a style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}>Sala de prensa</a></li>
              <li><a style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}>Aviso Legal</a></li>
              <li><a style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}>Canal de Denuncias</a></li>
              <li><a style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}>Protección de datos</a></li>
              <li><a style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}>Partner tecnológico: Encuesta Fácil</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 style={sectionTitleStyle}>CONECTA CON NOSOTROS</h5>
            <div>
              <a className="d-inline-block text-center p-2" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="d-inline-block text-center p-2" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}>
                <i className="fab fa-instagram"></i>
              </a>
              <a className="d-inline-block text-center p-2" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="d-inline-block text-center p-2" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}>
                <i className="fab fa-twitter"></i>
              </a>
              <a className="d-inline-block text-center p-2" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}>
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <h5 style={sectionTitleStyle}>VIDA ACTIVA</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-phone-alt" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = iconHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}></i> 123 456 789
              </li>
              <li>
                <i className="fas fa-envelope" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = iconHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}></i> info@vidaactiva.org
              </li>
              <li>
                <i className="fas fa-map-marker-alt" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = iconHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}></i> Calle Falsa, 123 07003 Palma de Mallorca
              </li>
              <li>
                Horarios Lun-jue 9-18 horas y vie 9-15 horas
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

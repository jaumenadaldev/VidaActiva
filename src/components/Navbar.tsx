import styled from '@emotion/styled';
import 'bootstrap/dist/css/bootstrap.min.css';

interface NavbarProps {
  backgroundColor?: string;
  color?: string;
}

const NavbarStyled = styled.nav<NavbarProps>(
  {
    position: 'fixed',
    top: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    zIndex: 1000,
  },
  props => ({
    backgroundColor: props.backgroundColor || '#f8f9fa',
    color: props.color || 'black',
  })
);

const NavLinksContainer = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

interface NavLinkProps {
  color?: string;
  hoverColor?: string;
}

const NavLink = styled.a<NavLinkProps>(
  {
    textDecoration: 'none',
    margin: '0 10px',
    padding: '0 15px',
    '&:last-child': {
      borderRight: 'none',
    }
  },
  props => ({
    color: props.color || '#7a977a',
    borderRight: '2px solid #7a977a',
    '&:hover': {
      color: props.hoverColor || '#e6cbe0',
    }
  })
);

interface BrandProps {
  color?: string;
  hoverColor?: string;
}

const Brand = styled.a<BrandProps>(
  {
    textDecoration: 'none',
    marginRight: 'auto',
    fontSize: '25px',
    margin: '0 10px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  },
  props => ({
    color: props.color || '#7a977a',
  })
);

const BrandText = styled.span<BrandProps>(
  {
    marginLeft: '10px',
    fontSize: '20px',
  },
  props => ({
    color: props.color || '#7a977a',
    '&:hover': {
      color: props.hoverColor || '#e6cbe0',
    }
  })
);

export default function Navbar() {
  return (
    <NavbarStyled>
      <Brand href="/">
        <img src="/public/assets/logo.png" alt="logo" style={{ height: '50px', width: 'auto' }} />
        <BrandText>Vida Activa</BrandText>
      </Brand>
      
      <NavLinksContainer>
        <NavLink>CONÓCENOS</NavLink>
        <NavLink>PROYECTOS</NavLink>
        <NavLink>EQUIPO</NavLink>
        <NavLink>CONTACTO</NavLink>
        <NavLink>ÚNETE</NavLink>
      </NavLinksContainer>
    </NavbarStyled>
  );
}

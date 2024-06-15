import React from 'react';
import "./styles/Styles.css";
import { Box } from '@mui/material';
import UsersCard from '../assets/users.jpg';
import CountriesCard from '../assets/countries.jpg';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: '1rem',
        gap: '1rem',
      }}
    >
      <Card className='notification' onClick={() => navigate('/countries')} >
          <div className="notiglow"></div>
          <div className="notiborderglow"></div>
          <div className="notititle">Crear Paises</div>
          <div className="imgContainer">
            <img src={CountriesCard} alt=""/>
          </div>
          <div className="notibody">¡Ven y registra todos los países que conozcas!</div>
      </Card>

      <Card className='notification' onClick={() => navigate('/users')}>
          <div className="notiglow"></div>
          <div className="notiborderglow"></div>
          <div className="notititle">Crear Usuarios</div>
          <div className="imgContainer">
            <img src={UsersCard} alt=""/>
          </div>
          <div className="notibody">Ven y diviértete creando usuarios con su respectivo nombre, email y país</div>
      </Card>

    </Box>
  );
};

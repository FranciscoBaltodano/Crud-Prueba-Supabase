import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { NavLink, BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';


export default function AppTabs() {
  const location = useLocation();

  const getValueFromLocation = (pathname) => {
    switch (pathname) {
      case '/':
        return 0;
      case '/countries':
        return 1;
      case '/users':
        return 2;
      default:
        return 0;
    }
  };

  const [value, setValue] = React.useState(getValueFromLocation(location.pathname));

  React.useEffect(() => {
    setValue(getValueFromLocation(location.pathname));
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab 
          label="Home" 
          component={NavLink} 
          to="/" 
          value={0} 
          sx={{ textDecoration: 'none' }} 
        />
        <Tab 
          label="Countries" 
          component={NavLink} 
          to="/countries" 
          value={1} 
          sx={{ textDecoration: 'none' }} 
        />
        <Tab 
          label="Users" 
          component={NavLink} 
          to="/users" 
          value={2} 
          sx={{ textDecoration: 'none' }} 
        />
      </Tabs>
    </Box>
  );
}


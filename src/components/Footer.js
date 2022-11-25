import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useState } from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Person2Icon from '@mui/icons-material/Person2';
import {useNavigate} from 'react-router-dom'


const Footer = () => {
  const [value, setValue] = useState('#')
  const navigate =useNavigate();
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
    <BottomNavigation
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0  }}
      showLabels
      >
      <BottomNavigationAction href="#" onClick={()=>setValue('#')} label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction href="#exercises" label="Workout"  onClick={()=>setValue('#exercises')} icon={<FitnessCenterIcon />} />
      <BottomNavigationAction href="Profile" label="Profile"  onClick={()=>setValue('/Profile')} icon={<Person2Icon />} />
    </BottomNavigation>
  </Box>
  )
}

export default Footer;

import React from 'react';
import { Stack, Box, Typography } from '@mui/material';

const Profile = () => {
    return (
    <Stack  p="80px" gap="30px" backgroundColor="#FFF" width="90%" margin="auto" mt="100px">
      <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
        <Typography variant="h1">
          <span style={{ color: "#ffb700", fontWeight: "600", fontSize: "40px" }}>
            About Application
          </span>
        </Typography>
        <Typography variant="p">
          This App Build For Workout Purpose Made by Hibatullah Dyfa Grahatama
        </Typography>
      </Box>
    </Stack>
    );
  };
  
  export default Profile;
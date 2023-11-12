import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ecoChoiceLogo from './eco_choice_logo.png';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/camera'); // Navigate to the camera page
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
    <Typography component="h1" variant="h5" style={{ textAlign: 'center' }}>
    <img 
        src={ecoChoiceLogo} 
        alt="Eco Choice Logo" 
        style={{ 
        maxWidth: '150px', // Controls the size of the image
        opacity: 0.5, // Sets the transparency of the image; 1 is fully opaque and 0 is fully transparent
        }}
    />
    </Typography>

      <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, color: 'white', backgroundColor: '#134a24'}}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;

import React from 'react';

import {Box, Paper, TextField, Button, Typography} from '@mui/material';
import InputPassword from '../components/InputPassword';

export default function Login() {

  return (
    <Paper elevation={2} sx={{width: 400, backgroundColor: 'white', margin: 'auto', padding: 2}}>
      <Typography variant="h6">UrShape</Typography>
      <Box flexDirection="column" display="flex" mb={2}>
        <TextField id="userEmail" label="Email" variant="standard" />
        <InputPassword />
      </Box>
      <Button size="small" disableElevation="true" variant="contained">Entrar</Button>
    </Paper>
  );
}
// src/app/auth/prihlasenie/page.tsx

'use client'; // Add this line to mark the component as a Client Component

import { signIn } from 'next-auth/react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

//export const metadata = { title: 'Prihlásenie | RobertWeb' };

export default function LogIn() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <Typography variant="h4" gutterBottom>
        Prihlásenie
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => signIn('google')} // Trigger Google sign-in
        style={{ marginTop: '20px' }}
      >
        Sign in with Google
      </Button>
    </div>
  );
}




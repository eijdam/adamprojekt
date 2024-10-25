// src/app/auth/odhlasenie/page.tsx

'use client';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { signOut } from 'next-auth/react'; // Import the signOut function
//import { useRouter } from 'next/navigation'; // Import useRouter for navigation after signing out

//export const metadata = { title: 'Odhlasenie | RobertWeb' };

export default function SignOut() {
  //const router = useRouter(); // Initialize router for navigation

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' }); // Sign out and redirect to the home page
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <Typography variant="h4" gutterBottom>
        Odhlásenie
      </Typography>
      <Typography variant="body1" gutterBottom>
        Are you sure you want to sign out?
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSignOut} // Call handleSignOut on click
        style={{ marginTop: '20px' }}
      >
        Sign Out
      </Button>
    </div>
  );
}
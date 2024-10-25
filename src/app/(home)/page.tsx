// adamweb/src/app/(home)/page.tsx

'use client';

import { useSession } from 'next-auth/react';
import Typography from '@mui/material/Typography';

export default function HomePage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    // While checking session, show a loading state
    return <Typography variant="h5" align="center">Loading...</Typography>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      {session ? (
        // Show a personalized message if the user is signed in
        <Typography variant="h4">Hello, {session.user?.name}!</Typography>
      ) : (
        // Show a message prompting the user to log in if they're not signed in
        <Typography variant="h4">Please log in to access personalized content.</Typography>
      )}
    </div>
  );
}
'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search'; // Icon for "Hľadať"
import AddIcon from '@mui/icons-material/Add'; // Icon for "Pridať"
import { useSession } from 'next-auth/react'; // Import necessary hooks
import Link from 'next/link';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const { data: session } = useSession(); // Get session information

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 300, // Set this value to control the narrowness
        margin: '0 auto', // Center it horizontally
      }}
    >
      <BottomNavigation
        sx={{
          backgroundColor: 'white',
          color: 'black',
          height: 64, // Increase height to make labels visible
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {/* Always visible Home */}
        <BottomNavigationAction
          label="Domov"
          icon={<HomeIcon />}
          component={Link}
          href="/"
        />

        {session ? (
          // Render these items when signed in
          <>
            {/* Search */}
            <BottomNavigationAction
              label="Hľadať"
              icon={<SearchIcon />}
              component={Link}
              href="/hladat" // Add the link for searching
            />

            {/* Add Post */}
            <BottomNavigationAction
              label="Pridať"
              icon={<AddIcon />}
              component={Link}
              href="/pridat" // Add the link for adding content
            />

            {/* Sign Out */}
            <BottomNavigationAction
              label="Odhlásiť"
              icon={<LoginIcon />} // Use LoginIcon for "Odhlásiť"
              component={Link}
              href="/auth/odhlasenie" // Add the link for adding content
              //onClick={() => signOut()} // Call signOut to log out
            />
          </>
        ) : (
          // Render these items when signed out
          <>
            {/* Profiles */}
            <BottomNavigationAction
              label="Profily"
              icon={<PersonIcon />}
              component={Link}
              href="/profil"
            />

            {/* Login */}
            <BottomNavigationAction
              label="Prihlásenie"
              icon={<LoginIcon />}
              component={Link}
              href="/auth/prihlasenie"
            />

            {/* Register */}
            <BottomNavigationAction
              label="Registrácia"
              icon={<PersonAddIcon />}
              component={Link}
              href="/auth/registracia"
            />
          </>
        )}
      </BottomNavigation>
    </Box>
  );
}



// 'use client';

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// //import RestoreIcon from '@mui/icons-material/Restore'; 
// import PersonIcon from '@mui/icons-material/Person'; // Changed icon to PersonIcon
// import ArticleIcon from '@mui/icons-material/Article'; 
// import LoginIcon from '@mui/icons-material/Login'; 
// import PersonAddIcon from '@mui/icons-material/PersonAdd'; 
// import HomeIcon from '@mui/icons-material/Home';
// import Link from 'next/link';


// export default function SimpleBottomNavigation() {
//   const [value, setValue] = React.useState(0);

//   return (
//     <Box
//       sx={{ 
//         width: '100%', 
//         maxWidth: 300,  // Set this value to control the narrowness
//         margin: '0 auto' // Center it horizontally
//       }}
//     >
//       <BottomNavigation
//         sx={{ 
//           backgroundColor: 'white', 
//           color: 'black', 
//           height: 56  // Adjust the height to make it more compact if needed
//         }}
//         showLabels
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       >
//         {/* Domov */}
//         <BottomNavigationAction
//           label="Domov"
//           icon={<HomeIcon />}
//           component={Link}
//           href="/"
//         />
        
//         {/* Profily */}
//         <BottomNavigationAction
//           label="Profily"
//           icon={<PersonIcon />} // Replaced FavoriteIcon with PersonIcon
//           component={Link}
//           href="/profil"
//         />
        
//         {/* Príspevky */}
//         <BottomNavigationAction
//           label="Príspevky"
//           icon={<ArticleIcon />}
//           component={Link}
//           href="/prispevok"
//         />
        
//         {/* Prihlásenie */}
//         <BottomNavigationAction
//           label="Prihlásenie"
//           icon={<LoginIcon />}
//           component={Link}
//           href="/auth/prihlasenie"
//         />
        
//         {/* Registrácia */}
//         <BottomNavigationAction
//           label="Registrácia"
//           icon={<PersonAddIcon />}
//           component={Link}
//           href="/auth/registracia"
//         />
//       </BottomNavigation>
//     </Box>
//   );
// }
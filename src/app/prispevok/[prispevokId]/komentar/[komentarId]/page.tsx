// src/app/prispevok/[prispevokId]/komentar/[komentarId]/page.tsx


import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';



export const metadata = { title: "Detail komentaru‖ ZoskaSnap"}

export default function KomentarId( {
  params,

}:  {
  params: {
    prispevokId: string;
    komentarId: string;
  };
}) {

  return (      
    <Container>
        <Typography> Detail Komentaru {params.komentarId} z prispevku {params.prispevokId}</Typography>
    </Container>


 );
}
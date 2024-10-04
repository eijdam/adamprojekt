// src/app/prispevok/[prispevokId]

import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';



export const metadata = { title: "Detail prispevku‖ ZoskaSnap"}

export default function PostDetail( {
  params,

}:  {
  params: {
    prispevokId: string;
  };
}) {

  return (      
    <Container>
        <Typography> Detail prispevku {params.prispevokId} </Typography>
    </Container>


 );
}


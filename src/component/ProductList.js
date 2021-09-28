import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
// import Stack from '@material-ui/core/Stack';
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Image1 from '../../assets/baylee-gramling-FOwYSRlL-Bk-unsplash.jpg'
import Image2 from '../../assets/alexis-antoine-GBpKfFfJhgw-unsplash.jpg'
import Image3 from '../../assets/nixir-TQxhcz-5WdQ-unsplash.jpg'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [
  { image: Image1,name:'Black Dimond',description:"Exclusive Limited Stock Available"},
  { image: Image2,name:'Green Dimond',description:"Exclusive Limited Stock Available"},
  { image: Image3,name:'Red Dimond',description:"Exclusive Limited Stock Available"}
];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        {/* Hero unit */}

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
       <br/> <br/>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "36.25%",
                    }}
                    style={{
                        maxHeight:"160px"
                    }}
                    image={card.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {card.name}
                    </Typography>
                    <Typography>
                    {card.description}
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}

      {/* End footer */}
    </ThemeProvider>
  );
}

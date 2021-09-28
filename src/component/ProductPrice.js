import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import StarIcon from '@material-ui/core/icons-material/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
// import GlobalStyles from '@material-ui/core/GlobalStyles';
import Container from '@material-ui/core/Container';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Black Dimond',
    price: '2000',
    description: [
        'Super Rare',
        'Most Demanding',
        'Authentic',
        'Verified',
    ],
    buttonText:  'Get It',
    buttonVariant: 'outlined',
  },
  {
     title: 'Green Dimond',
   
    subheader: 'Most popular',
    price: '3000',
    description: [
        'Super Rare',
        'Most Demanding',
        'Authentic',
        'Verified',
    ],
    buttonText: 'Get It',
    buttonVariant: 'contained',
  },
  {
    title: 'Red Dimond',
    price: '4000',
    description: [
      'Super Rare',
      'Most Demanding',
      'Authentic',
      'Verified',
    ],
    buttonText:  'Get It',
    buttonVariant: 'outlined',
  },
];
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function PricingContent() {
  return (
    <React.Fragment>
        <br/>
        <br/>
      {/* <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} /> */}
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
    
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h2"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
      Checkout Pricing
        </Typography>
        {/* <Typography variant="h5" align="center" color="text.secondary" component="p">
          Quickly build an effective pricing table for your potential customers with
          this layout. It&apos;s built with default MUI components with little
          customization.
        </Typography> */}
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    {/* <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography> */}
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
       
       
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
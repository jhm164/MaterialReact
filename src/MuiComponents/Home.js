import React from "react";
import { Container, Typography } from "@mui/material";
import Background from "../../assets/background.jpg";
export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container
          sx={{
            bgcolor: "#cfe8fc",
            height: "100vh",
            backgroundImage: "url(" + Background + ")",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundPosition: "bottom",
          }}
          disableGutters={true}
          maxWidth={{ xs: false }}
        >
          <Typography variant="h1" align={"center"} sx={{textShadow:'1px 10px 7px grey'}} mt={30} component="h2">
            Collect Your Memories
          </Typography>
          ;
        </Container>
      </React.Fragment>
    );
  }
}

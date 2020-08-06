import React, { ReactElement } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Name, Introduction, Socials, Navigation } from "../../components/home";

const Home: React.FC = (): ReactElement => {
  return (
    <>
      <CssBaseline />
      <Container fixed style={{ margin: "60px auto", maxWidth: 800 }}>
        <Name />
        <Introduction />
        <Socials />
        <Navigation />
      </Container>
    </>
  );
};

export default Home;

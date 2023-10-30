import { Container, CssBaseline } from "@mui/material";
import { ReactNode } from "react";
import NavBar from "./NavBar";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <CssBaseline />

      <NavBar />
      <Container maxWidth="xl">{children}</Container>
    </>
  );
};

export default Layout;

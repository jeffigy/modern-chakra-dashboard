import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Box } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box h={"100vh"}>
      <Sidebar />
      <Navbar />
      <main>{children}</main>
    </Box>
  );
};
export default Layout;

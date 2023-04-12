import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Box, Flex } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {" "}
      <Box minH={"100vh"}>
        <Sidebar />
        <Navbar />
        <Flex ml={{ base: 0, md: 60 }} p={"5"} bg={"red.400"}>
          <main>{children}</main>
        </Flex>
      </Box>
    </>
  );
};
export default Layout;
